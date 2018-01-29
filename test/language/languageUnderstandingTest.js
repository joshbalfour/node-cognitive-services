const cognitive = require('../../src/index.js');
const config = require('../config.js');
const promiseRetry = require('promise-retry');
const promiseDelay = require('sleep-promise');
const _ = require("underscore");
const fs = require("fs");
const path = require('path');

const Promise = require("bluebird");
const pLimit = require('p-limit'); // for dealing with promise.all - turns into series
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

describe.only('Language understanding (LUIS)', () => {

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

            return client.train();
        }).then(results => {
            return waitUntilTrained(client);
        }).then((response) => {
            return client.setAppInfo({
                    "versionId": client.versionID,
                    "isStaging": false,
                    "region": "westus"
                    }, client.APPINFO.PUBLISH);
        }).catch(err => {
            throw(err);
        });        
    }
    var deleteTestApp = () =>{
        var body=undefined;
        return client.deleteAppInfo(body,this.APPINFO.APP)
        .then((response) => {
            response.should.not.be.undefined();
            client.appID = undefined;
            return response;
        }).catch((err) => {
            throw(err);
        });
    }
    var importTrainPublishApp = (appName, appJSON) => {

        var parameters = {
            "appName":appName
        };

        return client.importApp(parameters, appJSON)
        .then(results =>{
            client.appID = results.substring(results.length-36, results.length);
            client.versionID = defaultVersionID;

            return client.train();
        }).then(results => {
            return waitUntilTrained(client);
        }).then((response) => {
            return client.setAppInfo({
                    "versionId": client.versionID,
                    "isStaging": false,
                    "region": "westus"
                    },client.APPINFO.PUBLISH);
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
                "appName":"Unit-" + new Date().toISOString()
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

            promiseDelay(retryInterval)
            .then(() => {
                return client.importApp(parameters, body);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.String().and.have.length(98);

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

            promiseDelay(retryInterval)
            .then(() => {
                return client.addPrebuiltDomain(body);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.String().and.have.length(120);

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
            promiseDelay(retryInterval)
            .then(() => {
                return createTrainPublishApp();
            }).then(results => {
                done();
            }).catch(err => {
                done(err);
            });
        });
        after((done) => {
            promiseDelay(retryInterval)
            .then(() => {
                return deleteTestApp();
            }).then((response) => {
                response.should.not.be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it('should return application version in JSON', (done) => {

            // todo - if using a different app, might return:
            // bing_entities (prebuilt entities)
            // regex_features (deprecated but can still exist in older apps)
            // actions - not sure 

            promiseDelay(retryInterval)
            .then(() => {
                return client.exportApplicationVersion();
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys(
                    'luis_schema_version', 
                    'versionId',
                    'name', 
                    'desc', 
                    'culture', 
                    'intents', 
                    'entities', 
                    'composites', 
                    'closedLists', 
                    'bing_entities',
                    'model_features', 
                    'regex_features',
                    'utterances');
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should return array with endpoint queries', (done) => {

            promiseDelay(retryInterval)
            .then(() => {
                return client.getAppInfo(client.APPINFO.QUERYLOGS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if (response.length > 0) {
                    response[0].should.have.only.keys('Query', 'Response', 'UTC DateTime');
                }
                done();
            }).catch((err) => {
                done(err);
            });
        })

        // TBD - need to provide example utterances that are questionable so this list has examples
        it('should get list of example labeled utterances', (done) => {

            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(retryInterval)
            .then(() => {
                return client.getLabeledExamples(parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if (response.length > 0) {
                    response[0].should.have.only.keys('id', 'text', 'tokenizedText','intentLabel','entityLabels','intentPredictions','entityPredictions');
                }
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should get list of entities in version', (done) => {

            /*
            can return 
                "customPrebuiltDomainName": "Camera",
                "customPrebuiltModelName": "AppName"
            */

            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(retryInterval)
            .then(() => {
                return client.getVersionEntities(parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if (response.length > 0) {
                    response[0].should.have.only.keys('id', 'name','typeId','readableType');
                }
                done();
            }).catch((err) => {
                done(err);
            });
        })


        it('should get list of intents in version', (done) => {

            /*
            can return 
                "customPrebuiltDomainName": "Camera",
                "customPrebuiltModelName": "AppName"
            */

            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(retryInterval)
            .then(() => {
                return client.getVersionIntents(parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if (response.length > 0) {
                    response[0].should.have.only.keys('id', 'name','typeId','readableType');
                }
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should get app', (done) => {

            var info = client.APPINFO.APP;

            promiseDelay(retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('id', 'name','description','culture','usageScenario','domain','versionsCount','createdDateTime','endpoints','endpointHitsCount','activeVersion','ownerEmail');
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should update app name', (done) => {

            var body = {
                "name": "mocha-" + new Date().getTime(),
                "description": "This is my first modified dummy description"
            };

            promiseDelay(retryInterval)
            .then(() => {
                return client.updateAppInfo(body, client.APPINFO.APP);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should update app settings', (done) => {
            var body = {
                "public": true
            };

            promiseDelay(retryInterval)
            .then(() => {
                return client.updateAppInfo(body,client.APPINFO.SETTINGS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
                done();
            }).catch((err) => {
                done(err);
            });
        })

    
        it('should clone version', (done) => {

            var body = {"version":"0.2"};
            var params = {appId:client.appID,versionId:client.versionID};

            promiseDelay(retryInterval)
            .then(() => {
                return client.cloneApp(params, body);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.equal(0.2);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get app endpoints', (done) => {

            var info = client.APPINFO.ENDPOINTS;

            promiseDelay(retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {

                response.should.not.be.undefined();
                let filePath = path.join(__dirname,"../assets/LUIS/api_endpoints.json");
                let testData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
                // compare key count - not data since app id changes 
                _.difference(_.keys(response),_.keys(testData)).should.have.length(0);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get app querylogs', (done) => {

            var info = client.APPINFO.QUERYLOGS;

            promiseDelay(retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {

                response.should.not.be.undefined();
                // TBD: response validation

                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get app settings', (done) => {

            var info = client.APPINFO.SETTINGS;

            promiseDelay(retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {

                response.should.not.be.undefined();
                response.should.have.only.keys('id', 'public');
                response.id.should.have.length(36);
                response.public.should.be.oneOf(true,false);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get app permissions', (done) => {

            var info = client.APPINFO.PERMISSIONS;

            promiseDelay(retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('owner', 'emails');
                response.owner.should.not.be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should add email to permissions', (done) => {
            var body = {
                "email":"addEmailToPermissionsTest@domain.com"
            };

            promiseDelay(retryInterval)
            .then(() => {
                return client.setAppInfo(body,client.APPINFO.PERMISSIONS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should update app permissions', (done) => {
            var body = {
                "emails": [
                    "test1@domain.com",
                    "test2@domain.com"
                ]
            };

            promiseDelay(retryInterval)
            .then(() => {
                return client.updateAppInfo(body,client.APPINFO.PERMISSIONS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should delete app permissions', (done) => {

            var info = client.APPINFO.PERMISSIONS;
            var updateBody = {
                "emails": [
                    "test1@domain.com",
                    "test2@domain.com"
                ]
            };

            var deleteBody = {
                "email":"test1@domain.com"
            };
            promiseDelay(retryInterval)
            .then(() => {
                return client.updateAppInfo(updateBody,client.APPINFO.PERMISSIONS);
            }).then(() => { 
                return promiseDelay(retryInterval);
            }).then(() => {
                return client.deleteAppInfo(deleteBody,info);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
            }).then(() => { 
                return promiseDelay(retryInterval);
            }).then((response) => {
                return client.getAppInfo(info);
            }).then(response => {
                response.should.not.be.undefined();
                response.emails.should.have.length(1);
                response.emails[0].should.equal(updateBody.emails[1]);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get app versions', (done) => {

            var info = client.APPINFO.VERSIONS;

            promiseDelay(retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if(response.length>0){
                    _.keys(response[0]).should.have.length(12);
                    response[0].should.have.only.keys('version', 'createdDateTime',"lastModifiedDateTime","lastTrainedDateTime","lastPublishedDateTime","endpointUrl","assignedEndpointKey","externalApiKeys","intentsCount","entitiesCount","endpointHitsCount","trainingStatus");

                    _.keys(response[0].assignedEndpointKey).should.have.length(3);
                    if(response[0].assignedEndpointKey) response[0].assignedEndpointKey.should.have.only.keys("SubscriptionKey","SubscriptionName","SubscriptionRegion");

                }
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get app version info', (done) => {

            var info = client.VERSIONINFO.VERSION;

            promiseDelay(retryInterval)
            .then(() => {
                return client.getVersionInfo(info);
            }).then((response) => {

                response.should.not.be.undefined();
                response.should.be.Object;
                _.keys(response).should.have.length(12);
                response.should.have.only.keys(
                    'version', 
                    'createdDateTime',
                    "lastModifiedDateTime",
                    "lastTrainedDateTime",
                    "lastPublishedDateTime",
                    "endpointUrl",
                    "assignedEndpointKey",
                    "externalApiKeys",
                    "intentsCount",
                    "entitiesCount",
                    "endpointHitsCount","trainingStatus");

                _.keys(response.assignedEndpointKey).should.have.length(3);
                response.assignedEndpointKey.should.have.only.keys("SubscriptionKey","SubscriptionName","SubscriptionRegion");
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

            promiseDelay(retryInterval)
            .then(() => {
                return client.detectIntent({parameters,body});
            }).then((response) => {

                response.should.not.be.undefined();
                _.keys(response).should.have.length(4);
                response.should.have.only.keys('query', 'intents', 'topScoringIntent', 'entities');
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of applications', (done) => {

            let parameters = {
                skip:0,
                take:100
            };

            let culture = undefined;

            client.getLUIS(client.INFO.APPS, culture,parameters)
            .then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;

                if (response.length > 0) {
                    response[0].should.have.only.properties('id', 'name', 'description','culture','usageScenario','domain','versionsCount','createdDateTime','endpoints','endpointHitsCount','activeVersion');
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
                response.should.have.only.properties('endpointKeys', 'endpointUrls');
                done();
            }).catch((err) => {
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
                response[0].should.have.only.keys('name','code');
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
                response[0].should.have.only.keys['name','culture','description','examples','intents','entities'];
                response[0].intents.should.be.Array;
                response[0].entities.should.be.Array;
                response[0].intents[0].should.have.only.keys('name','description','examples');
                response[0].entities[0].should.have.only.keys('name','description','examples');
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
                response.should.have.length(21);
                response[0].should.have.only.keys('name','culture','description','examples','intents','entities');
                response[0].intents.should.be.Array;
                response[0].entities.should.be.Array;
                response[0].intents[0].should.have.only.keys('name','description','examples');
                response[0].entities[0].should.have.only.keys('name','description','examples');

                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS custom prebuilt domains for each supported culture', (done) => {
    
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
        it('should get app version closedlist (LIST)', (done) => {
            // use travel agent json for closedlists

            var info = client.VERSIONINFO.CLOSEDLISTS;

            promiseDelay(retryInterval)
            .then(() => {
                // test set up
                
                let filePath = path.join(__dirname,"../assets/LUIS/TravelAgent.json");
                let testData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
                return importTrainPublishApp("mocha-travelagent-" + new Date().toISOString(),testData);
            }).then((response) => {
                // SUT
                return client.getVersionInfo(info);
            }).then(response => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(3);
                response[0].should.have.only.keys('id', 'name','typeId','readableType','subLists');

                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
}) 
