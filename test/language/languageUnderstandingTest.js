const cognitive = require('../../src/index.js');
const config = require('../config.js');
const promiseRetry = require('promise-retry');

describe.only('Language understanding (LUIS)', () => {

    const retryCount = 10;
    const retryInterval = 1000;

    const client = new cognitive.languageUnderstanding({
        apiKey: config.languageUnderstanding.apiKey,
        appID: config.languageUnderstanding.appID,
        versionID: config.languageUnderstanding.versionID,
        endpoint: config.languageUnderstanding.endpoint
    });
    var isTrained = (trainingStatus) => {
        var untrainedModels = trainingStatus.filter(model => {
            if( model.details.status === 'Fail' || model.details.status === 'InProgress') return model; 
        });
        //console.log("untrainedModels = " + untrainedModels.length);
        return (untrainedModels.length===0) ? true : false;
    }
    var waitUntilTrained = (client) => {

        return promiseRetry((retry, number) => {
            //console.log('attempt number', number);
        
            return client.getTrainStatus()
            .then(response => {
                // 2xx http response 
                //console.log(response);
                let trained = client.isTrained(response);
                console.log(number + " trained = " + trained);
                if (!trained)retry("not trained");
                return response;
            })
            .catch((err) => {
                if (err.code === 'ETIMEDOUT') {
                    retry(err);
                }
                throw err;
            });
        });  
    }  
    var createTrainPublishApp = () => {

        client.isTrained = isTrained;
        let body = {
            "domainName": "Web", 
            "culture": "en-us"
        };
        return client.addPrebuiltDomain(body).then(results =>{
            //console.log("add prebuilt app");
            //console.log(results);
            client.appID = results.substring(results.length-36, results.length);
            console.log(client.appID);
            return client.train();
        }).then(results => {
            //console.log("train results");
            //console.log(results);
            return waitUntilTrained(client);
        }).then((response) => {
            //console.log("train status");
            return client.publish({
                    "versionId": "0.1",
                    "isStaging": false,
                    "region": "westus"
                    });
        }).then((response) => {
            //console.log("publish status");
            //console.log(response);
            //console.log(response);
            return response;
        }).catch(err => {
            console.log(err);
            throw(err);
        });        
    }
    var deleteTestApp = () =>{
        return client.deleteApp()
        .then((response) => {
            response.should.not.be.undefined();
            //console.log("app deleted");
            client.appID = undefined;
            return response;
        }).catch((err) => {
            throw(err);
        });
    }
/*
    describe("test of cycle", () => {
        beforeEach((done) => {
            createTrainPublishApp()
            .then(results => {
                done();
            }).catch(err => {
                done(err);
            });
        });
        afterEach((done) => {
            deleteApp()
            .then(results => {
                done();
            }).catch(err => {
                done(err);
            });
        });        
        it('should retry until success', (done)=> {
            client.getUserAcessList()
            .then((response) => {
                response.should.not.be.undefined();
                response.should.have.properties(['owner', 'emails']);
                console.log("user access list");
                console.log(response);
                done();
            }).catch((err) => {
                done(err);
            });            
        })
    });
*/




        describe("create app before, don't delete after", () => {
            before((done) => {
                createTrainPublishApp()
                .then(results => {
                    done();
                }).catch(err => {
                    done(err);
                });
            });
            it('should delete app', (done) => {   
                client.deleteApp()
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.have.properties(['code', 'message']);
                    response.code.should.equal("Success");
                    response.message.should.equal("Operation Successful");
                    done();
                }).catch((err) => {
                    done(err);
                });
            })         
        })

        describe("Does not create app, no need to delete", () => {
            it('should get list of applications', (done) => {
    
                let parameters = {
                    skip:0,
                    take:100
                };
    
                client.getApplications(parameters)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.Array;
                    if (response.length > 0) {
                        response[0].should.have.properties(['id', 'name', 'description','culture','usageScenario','domain','versionsCount','createdDateTime','endpoints','endpointHitsCount','activeVersion']);
                    }
                    done();
                }).catch((err) => {
                    done(err);
                });
            })
        })

        describe("Delete app after", () => {
            afterEach((done) => {
                deleteTestApp()
                .then((response) => {
                    response.should.not.be.undefined();
                    done();
                }).catch((err) => {
                    done(err);
                });
            });
            it('should import app', (done) => {
    
                var parameters = {
                    "appName":"mochatest-importapp"
                };
    
                var body = {
                    "luis_schema_version": "1.3.1",
                    "name": "TestImportedApp",
                    "versionId": "0.1",
                    "desc": "This is my dummy imported application",
                    "culture": "en-us",
                    "intents": [
                    {
                        "name": "BookFlight"
                    },
                    {
                        "name": "GetWeather"
                    },
                    {
                        "name": "None"
                    }
                    ],
                    "entities": [
                    {
                        "name": "Location",
                        "children": [
                        "To",
                        "From"
                        ]
                    }
                    ],
                    "composites": [],
                    "closedLists": [],
                    "bing_entities": [
                    "datetimeV2"
                    ],
                    "actions": [],
                    "model_features": [
                    {
                        "name": "Cities",
                        "mode": true,
                        "words": "Seattle,New York,Paris,Moscow,Beijin",
                        "activated": true
                    }
                    ],
                    "regex_features": [],
                    "utterances": [
                    {
                        "text": "book me a flight from redmond to new york next saturday",
                        "intent": "BookFlight",
                        "entities": [
                        {
                            "entity": "Location::From",
                            "startPos": 5,
                            "endPos": 5
                        },
                        {
                            "entity": "Location::To",
                            "startPos": 7,
                            "endPos": 8
                        }
                        ]
                    },
                    {
                        "text": "what's the weather like in paris?",
                        "intent": "GetWeather",
                        "entities": [
                        {
                            "entity": "Location",
                            "startPos": 7,
                            "endPos": 7
                        }
                        ]
                    }
                    ]
                };
    
                client.importApp(parameters, body)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.String().and.have.length(70);

                    // get appID to delete in After()
                    client.appID = response.substring(response.length-36, response.length);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })
            it('should add prebuilt domain', (done) => {
    
                let body = {
                    "domainName": "Web", 
                    "culture": "en-us"
                }
    
                client.addPrebuiltDomain(body)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.String().and.have.length(92);

                    // get appID to delete in After()
                    client.appID = response.substring(response.length-36, response.length);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })
        })
       

        describe("Create app before, delete app after", () => {
            before((done) => {
                createTrainPublishApp()
                .then(results => {
                    done();
                }).catch(err => {
                    done(err);
                });
            });
            after((done) => {
                deleteTestApp()
                .then((response) => {
                    response.should.not.be.undefined();
                    done();
                }).catch((err) => {
                    done(err);
                });
            });
            it('should train model', (done) => {
    
                client.train()
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.have.properties(['statusId', 'status']);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })

            it('should return training status', (done) => {
    
                client.getTrainStatus()
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.instanceof(Array);
                    response[0].should.have.properties(['modelId', 'details'])
                    done();
                }).catch((err) => {
                    done(err);
                });
            })

            it('should return application version in JSON', (done) => {
    
                client.exportApplicationVersion()
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.have.properties(['luis_schema_version', 'name', 'desc', 'culture', 'intents', 'entities', 'composites', 'closedLists', 'model_features', 'utterances', 'model_features'])
                    done();
                }).catch((err) => {
                    done(err);
                });
            })


            it('should return array with queries', (done) => {
    
                client.downloadApplicationQuerylog()
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.Array;
                    if (response.length > 0) {
                        response[0].should.have.properties(['Query', 'Response', 'UTC DateTime']);
                    }
                    done();
                }).catch((err) => {
                    done(err);
                });
            })

            it('should publish model', (done) => {
    
                var body = {
                    "versionId": "0.1",
                    "isStaging": false,
                    "region": "westus"
                    };
    
                client.publish(body)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.have.properties(['versionId', 'isStaging', 'endpointUrl','endpointRegion','region','assignedEndpointKey','endpointRegion','publishedDateTime']);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })


            it('should get list of example labeled utterances', (done) => {
    
                let parameters = {
                    skip:0,
                    take:100
                };
    
                client.getLabeledExamples(parameters)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.Array;
                    if (response.length > 0) {
                        response[0].should.have.properties(['id', 'text', 'tokenizedText','intentLabel','entityLabels','intentPredictions','entityPredictions']);
                    }
                    done();
                }).catch((err) => {
                    done(err);
                });
            })


            it('should get list of users that have permissions to access your application', (done) => {
    
                client.getUserAcessList()
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.have.properties(['owner', 'emails']);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })


            it('should get list of entities in version', (done) => {
    
                let parameters = {
                    skip:0,
                    take:100
                };
    
                client.getVersionEntities(parameters)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.Array;
                    if (response.length > 0) {
                        response[0].should.have.properties(['id', 'name','typeId','readableType']);
                    }
                    done();
                }).catch((err) => {
                    done(err);
                });
            })


            it('should get list of intents in version', (done) => {
    
                let parameters = {
                    skip:0,
                    take:100
                };
    
                client.getVersionIntents(parameters)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.be.Array;
                    if (response.length > 0) {
                        response[0].should.have.properties(['id', 'name','typeId','readableType']);
                    }
                    done();
                }).catch((err) => {
                    done(err);
                });
            })
  

            it('should rename app', (done) => {
    
                var body = {
                    "name": "MyFirstRenamedDummyAp",
                    "description": "This is my first modified dummy description"
                };
    
                client.renameApp(body)
                .then((response) => {
                    response.should.not.be.undefined();
                    response.should.have.properties(['code', 'message']);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })
       

            it('should return response', (done) => {
                // optional but recommended
                var parameters = {
                    "log": true, // required to review suggested utterances
                    "verbose": true // required to see all intents and scores
                };
    
                // query/utterance
                var body = "forward to frank 30 dollars through HSBC";
    
                client.detectIntent({
                    parameters,
                    body
                }).then((response) => {
                    response.should.not.be.undefined();
                    response.should.have.properties(['query', 'topScoringIntent', 'entities']);
                    //console.log(response);
                    done();
                }).catch((err) => {
                    done(err);
                });
            })
        })
    }) 
