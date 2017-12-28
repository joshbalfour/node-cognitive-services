const cognitive = require('../../src/index.js');
const config = require('../config.js');
const promiseRetry = require('promise-retry');
const promiseDelay = require('sleep-promise');

const Promise = require("bluebird");
const pLimit = require('p-limit');
const limit = pLimit(1);
/*

You only need to set the apiKey for these tests. 

The app created is the prebuilt "Web" app. Creation of the app
will fail if your LUIS account already has an app with the 
name "Web". 

Each time the app is created, its apiKey is displayed along
with the count of training status calls. Usually, it takes more 
than 1 call to return successfully trained status. This test will 
not try more than retryCount times and wait retryInterval between tries. 

*/

const CULTURECOUNT = 12;
const PREBUILTDOMAIN = [
    {"en-us" : 21}, 
    {"zh-cn" : 13},
    {"fr-fr" : 0}, 
    {"fr-ca" : 0}, 
    {"es-es" : 0}, 
    {"es-mx" : 0}, 
    {"it-it" : 0}, 
    {"de-de" : 0}, 
    {"ja-jp" : 0}, 
    {"pt-br" : 0}, 
    {"ko-kr" : 0},
    {"nl-nl" : 0}
];

describe('Language understanding (LUIS)', () => {

    const defaultVersionID = "0.1";
    const retryCount = 10;
    const retryInterval = 2000;
    let count = 0;

    const client = new cognitive.languageUnderstanding({
        apiKey: config.languageUnderstanding.apiKey,
        endpoint: config.languageUnderstanding.endpoint
    });


    var waitUntilTrained = (client) => {

        count += 1;

        return promiseRetry((retry, number) => {

            return promiseDelay(retryInterval)
            .then( () => {
                return client.getTrainStatus();
            }).then(response => {
                // 2xx http response 
                let trained = client.isTrained(response);

                console.log(number + " trained = " + trained);

                if (count < retryCount && !trained) retry("not trained");
                
                return response;
            })
            .catch((err) => {
                throw err;
            });
        });  
    }  
    var createTrainPublishApp = () => {

        let body = {
            "domainName": "Web", 
            "culture": "en-us"
        };
        return client.addPrebuiltDomain(body)
        .then(results =>{
            client.appID = results.substring(results.length-36, results.length);
            client.versionID = defaultVersionID;

            console.log(client.appID);

            return client.train();
        }).then(results => {
            return waitUntilTrained(client);
        }).then((response) => {
            return client.publish({
                    "versionId": client.versionID,
                    "isStaging": false,
                    "region": "westus"
                    });
        }).catch(err => {
            throw(err);
        });        
    }
    var deleteTestApp = () =>{
        return client.deleteApp()
        .then((response) => {
            response.should.not.be.undefined();
            client.appID = undefined;
            return response;
        }).catch((err) => {
            throw(err);
        });
    }
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
        it('should get list of LUIS assistants', (done) => {

            client.getLUIS(client.INFO.ASSISTANT)
            .then((response) => {
                response.should.not.be.undefined();
                response.should.have.properties(['endpointKeys', 'endpointUrls']);
                done();
            }).catch((err) => {
                console.log(err);
                done(err);
            });
        })
        it('should get list of LUIS domains', (done) => {

            client.getLUIS(client.INFO.DOMAIN)
            .then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(30);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS usagescenarios', (done) => {

            client.getLUIS(client.INFO.USAGESCENARIO)
            .then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(4);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS cultures', (done) => {

            client.getLUIS(client.INFO.CULTURE)
            .then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(12);
                response[0].should.have.properties['name','code'];
                console.log(response);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS custom prebuilt domains', (done) => {
    
            client.getLUIS(client.INFO.PREBUILTDOMAIN)
            .then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(34);
                response[0].should.have.properties['name','culture','description','examples','intents','entities'];
                response[0].intents.should.be.Array;
                response[0].entities.should.be.Array;
                response[0].intents[0].should.have.properties['name','description','examples'];
                response[0].entities[0].should.have.properties['name','description','examples'];
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS custom prebuilt domains for en-us culture', (done) => {

            client.getLUIS(client.INFO.PREBUILTDOMAIN, 'en-us')
            .then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(34);
                response[0].should.have.properties['name','culture','description','examples','intents','entities'];
                response[0].intents.should.be.Array;
                response[0].entities.should.be.Array;
                response[0].intents[0].should.have.properties['name','description','examples'];
                response[0].entities[0].should.have.properties['name','description','examples'];
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it.only('should get list of LUIS custom prebuilt domains for each supported culture', (done) => {
    
            client.getLUIS(client.INFO.CULTURE)
            .then(cultures => {
                let arrPromises = [];
                let waitForTime = retryInterval;
    
                cultures.forEach(culture => {
                    arrPromises.push(limit(() => client.getLUIS(client.INFO.PREBUILTDOMAIN, culture.code)));
                    arrPromises.push(limit(() => promiseDelay(2000)));
                });
                arrPromises.should.have.length(CULTURECOUNT*2);
                return Promise.all(arrPromises);
            }).then(returnedPromises => {
    
                // prune out the promiseDelay responses
                let responses = returnedPromises.filter(x => x!==undefined);

                responses.should.have.length(CULTURECOUNT);
                responses.forEach(prebuiltDomainByCulture => {

                    prebuiltDomainByCulture.should.not.be.undefined();
                    prebuiltDomainByCulture.should.be.Array;

                    if(prebuiltDomainByCulture.length>0){

                        var foundCulture = PREBUILTDOMAIN.find((obj) => {
                            return (Object.keys(obj)[0]===prebuiltDomainByCulture[0].culture);
                        });

                        foundCulture.should.not.be.undefined();
                        var foundCount = foundCulture[prebuiltDomainByCulture[0].culture];
                        foundCount.should.not.equal(0);

                        prebuiltDomainByCulture.should.have.length(foundCount);
                }
                    
                });
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
                console.log("import app returns =" + response);
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
                console.log("addPrebuiltDomain app returns =" + response);
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
    

        it('should detect Intent', (done) => {
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
