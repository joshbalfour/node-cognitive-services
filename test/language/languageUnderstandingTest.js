const cognitive = require('../../src/index.js');
const config = require('../config.js');
const promiseDelay = require('sleep-promise');
const _ = require("underscore");
const fs = require("fs");
const path = require('path');

const Promise = require("bluebird");
const pLimit = require('p-limit'); // for dealing with promise.all - turns into series
const limit = pLimit(1);
/*

You only need to set the apiKey for these tests. 

The tests create both the prebuilt domain Web and 
imports the ../asserts/LUIS/TravelAgent-import-app.json.

The tests now generally use the TravelAgent-import-app.json
because it has more of the custom entities. TBD: add phrase
list feature to TravelAgent-import-app.json that makes
sense for the domain. 

Each time the app is created, its apiKey is displayed along
with the count of training status calls. Usually, it takes more 
than 1 call to return successfully trained status. This test will 
not try more than retryCount times and wait retryInterval between tries. 

*/

describe('Language understanding (LUIS)', () => {

    const defaultVersionId = "0.1";

    const client = new cognitive.languageUnderstanding({
        apiKey: config.languageUnderstanding.apiKey,
        endpoint: config.languageUnderstanding.endpoint
    });

    var deleteTestApp = () =>{
        return promiseDelay(client.retryInterval).then(() => {
            return client.deleteAppInfo(client.APPINFO.APP);
        }).then((response) => {
            response.should.not.be.undefined();
            response.should.have.only.keys('code', 'message');
            response.code.should.equal("Success");
            response.message.should.equal("Operation Successful");
            client.appId = undefined;
            return response;
        }).catch((err) => {
            throw(err);
        });
    }
    var importTrainPublishApp = (appName, appJSON) => {

        var parameters = {
            "appName":appName
        };

        return client.setLUIS(client.INFO.IMPORT, appJSON, parameters)
        .then(results =>{
            client.appId = results.substring(results.length - client.KeyLength, results.length);
            client.versionId = defaultVersionId;

            var parameters;
            var body;
            return client.setVersionInfo(parameters,body,client.VERSIONINFO.TRAIN);
        }).then(results => {
            return client.waitUntilTrained(client);
        }).then((response) => {
            return client.setAppInfo({
                    "versionId": client.versionId,
                    "isStaging": false,
                    "region": "westus"
                    },client.APPINFO.PUBLISH);
        }).catch(err => {
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

            var body = require("../assets/LUIS/TravelAgent-import-app.json");

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setLUIS(client.INFO.IMPORT,body, parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.String().and.have.length(98);

                client.appId = response.substring(response.length - client.KeyLength, response.length);
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

            promiseDelay(client.retryInterval)
            .then(() => {
                var parameters;
                return client.setLUIS(client.INFO.CUSTOMPREBUILTDOMAINS, body, parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.String().and.have.length(120);

                // get appId to delete in After()
                client.appId = response.substring(response.length - client.KeyLength, response.length);
                done();
            }).catch((err) => {
                done(err);
            });
        })

    })      
    describe("Create app before, delete app after", () => {
        before((done) => {
            promiseDelay(client.retryInterval)
            .then(() => {
                
                var body = require("../assets/LUIS/TravelAgent-import-app.json");

                var name = "describe-" + new Date().toISOString();

                return importTrainPublishApp(name,body)
            }).then(results => {
                done();
            }).catch(err => {
                done(err);
            });
        });
        after((done) => {
            promiseDelay(client.retryInterval)
            .then(() => {
                return deleteTestApp();
            }).then((response) => {
                response.should.not.be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        });
        it('should detect Intent from ENDPOINT', (done) => {
            // optional but recommended
            var parameters = {
                "log": true, // required to review suggested utterances
                "verbose": true // required to see all intents and scores
            };

            // query/utterance
            var body = "forward to frank 30 dollars through HSBC";

            promiseDelay(client.retryInterval)
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
        it('should get list of LUIS applications', (done) => {

            let culture;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getLUIS(client.INFO.APPS, culture);
            }).then((response) => {
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

        it('should get list of LUIS domains', (done) => {


            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getLUIS(client.INFO.DOMAINS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(30);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS usage scenarios', (done) => {

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getLUIS(client.INFO.USAGESCENARIOS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(4);

                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS cultures', (done) => {

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getLUIS(client.INFO.CULTURE);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(20);
                response[0].should.have.only.keys('name','code');
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get list of LUIS custom prebuilt domains', (done) => {
    
            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getLUIS(client.INFO.CUSTOMPREBUILTDOMAINS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.length(client.PREBUILTDOMAINTOTALCOUNT);
                response[0].should.have.only.keys('name','culture', 'tokenizerVersion', 'description','examples','intents','entities');
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
    
            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getLUIS(client.INFO.CULTURE);
            }).then(cultures => {
                let arrPromises = [];
    
                cultures.forEach(culture => {

                    arrPromises.push(limit(() => client.getLUIS(client.INFO.CUSTOMPREBUILTDOMAINS, culture.code)));
                    arrPromises.push(limit(() => promiseDelay(2000)));
                });
                arrPromises.should.have.length(client.CULTURECOUNT*2);

                return Promise.all(arrPromises);
            }).then(returnedPromises => {
                
                // prune out the promiseDelay responses
                let responses = returnedPromises.filter(x => x!==undefined);

                responses.should.have.length(client.CULTURECOUNT);
                responses.forEach(prebuiltDomainByCulture => {

                    prebuiltDomainByCulture.should.not.be.undefined();
                    prebuiltDomainByCulture.should.be.Array;

                    if(prebuiltDomainByCulture.length>0){

                        var foundCulture = client.PREBUILTDOMAINCULTURES.find((obj) => {
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
        });
        it('should return array with endpoint queries for this APP', (done) => {

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getAppInfo(client.APPINFO.QUERYLOGS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if (response.length > 0) {
                    response[0].should.have.only.keys('Query', 'Response', 'UTC DateTime', 'SecondaryId', 'Region');
                }
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get APP', (done) => {

            var info = client.APPINFO.APP;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('id', 'name','description','culture','usageScenario','domain','versionsCount','createdDateTime','endpoints','endpointHitsCount','activeVersion','ownerEmail', 'tokenizerVersion');
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should update APP name', (done) => {

            var body = {
                "name": "mocha-" + new Date().getTime(),
                "description": "This is my first modified dummy description"
            };

            promiseDelay(client.retryInterval)
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
        it('should update APP settings', (done) => {
            var body = {
                "public": true
            };

            promiseDelay(client.retryInterval)
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
        it('should get APP endpoints', (done) => {

            var info = client.APPINFO.ENDPOINTS;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {

                response.should.not.be.undefined();
                let filePath = path.join(__dirname,"../assets/LUIS/api_endpoints.json");
                let testData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
                // compare key count - not data since app id changes 
                _.difference(response,testData).should.have.length(0);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get APP querylogs', (done) => {

            var info = client.APPINFO.QUERYLOGS;

            promiseDelay(client.retryInterval)
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
        it('should get APP settings', (done) => {

            var info = client.APPINFO.SETTINGS;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getAppInfo(info);
            }).then((response) => {

                response.should.not.be.undefined();
                response.should.have.only.keys('id', 'public');
                response.id.should.have.length(client.KeyLength);
                response.public.should.be.oneOf(true,false);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should get APP permissions', (done) => {

            var info = client.APPINFO.PERMISSIONS;

            promiseDelay(client.retryInterval)
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
        it('should add email to permissions to APP', (done) => {
            var body = {
                "email":"addEmailToPermissionsTest@domain.com"
            };

            promiseDelay(client.retryInterval)
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
        it('should update APP permissions', (done) => {
            var body = {
                "emails": [
                    "test1@domain.com",
                    "test2@domain.com"
                ]
            };

            promiseDelay(client.retryInterval)
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
        it('should delete APP permissions', (done) => {

            var info = client.APPINFO.PERMISSIONS;
            var updateBody = {
                "emails": [
                    "test1@domain.com",
                    "test2@domain.com"
                ]
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.updateAppInfo(updateBody,client.APPINFO.PERMISSIONS);
            }).then(() => { 
                return promiseDelay(client.retryInterval);
            }).then(() => {
                return client.deleteAppInfo(info);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
            }).then(() => { 
                return promiseDelay(client.retryInterval);
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
        it('should return application version in JSON for this VERSION', (done) => {

            // todo - if using a different app, might return:
            // bing_entities (prebuilt entities)
            // regex_features (deprecated but can still exist in older apps)
            // actions - not sure 

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.EXPORT);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.keys(
                    'luis_schema_version', 
                    'versionId',
                    'name', 
                    'desc', 
                    'culture', 
                    'tokenizerVersion',
                    'intents', 
                    'entities', 
                    'composites', 
                    'closedLists', 
                    'regex_entities',
                    'model_features', 
                    'regex_features',
                    'utterances');
                done();
            }).catch((err) => {
                done(err);
            });
        })

        // TBD - need to provide example utterances that are questionable so this list has examples
        it('should get list of example labeled utterances for this VERSION', (done) => {

            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.EXAMPLES,parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if (response.length > 0) {
                    response[0].should.have.only.keys('id', 'text', 'tokenizedText','intentLabel','entityLabels','intentPredictions','entityPredictions', 'multiIntentPredictions');
                }
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should get list of entities in this VERSION', (done) => {

            /*
            can return 
                "customPrebuiltDomainName": "Camera",
                "customPrebuiltModelName": "AppName"
            */

            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.ENTITIES,parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                if (response.length > 0) {
                    response[0].should.have.only.keys('id', 'name','typeId','readableType', 'roles');
                }
                done();
            }).catch((err) => {
                done(err);
            });
        })


        it('should get list of intents in VERSION', (done) => {

            /*
            can return 
                "customPrebuiltDomainName": "Camera",
                "customPrebuiltModelName": "AppName"
            */

            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.INTENTS,parameters);
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
        it('should get APP versions', (done) => {

            var info = client.APPINFO.VERSIONS;

            promiseDelay(client.retryInterval)
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
    
        it('should clone VERSION', (done) => {

            var body = {"version":"0.2"};
            var params = {appId:client.appId,versionId:client.versionId};

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(params, body, client.VERSIONINFO.CLONE);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.equal(0.2);
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should get app VERSION info', (done) => {

            var info = client.VERSIONINFO.VERSION;

            promiseDelay(client.retryInterval)
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

        it(' should get VERSION features', function(done) {
            
            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.FEATURES, parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('phraselistFeatures', 'patternFeatures');
                response.phraselistFeatures.should.be.Array;
                response.patternFeatures.should.be.Array;
                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should get VERSION HIERARCHICALENTITIES', function(done) {
            
            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.HIERARCHICALENTITIES, parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should get VERSION LISTPREBUILTS', function(done) {
            
            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.LISTPREBUILTS, parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response[0].should.have.only.keys('name', 'description','examples');

                let myNameArray = [];
                response.forEach((obj)=>{
                    myNameArray.push(obj.name);
                });

                const listprebuiltsArray = [
                        "number",
                        "ordinal",
                        "temperature",
                        "dimension",
                        "money",
                        "age",
                        "geography",
                        "encyclopedia",
                        "percentage",
                        "datetime",
                        "email",
                        "url",
                        "phonenumber",
                        "datetimeV2"
                ];

                let diff = _.difference(listprebuiltsArray, myNameArray);

                diff.length.should.eql(0);

                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should get VERSION models', function(done) {
            
            let parameters = {
                skip:0,
                take:100
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.MODELS, parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                
                // not validating customPrebuiltModel Properties
                response[0].should.have.only.keys('id', 'name','typeId','readableType', 'subLists', 'roles');
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it(' should post VERSION closedlists', function(done) {
            
            let body = {
                "name": "States",
                "sublists": 
                [
                    {
                        "canonicalForm": "New York",
                        "list": [ "NY", "New York" ]
                    },
                    {
                        "canonicalForm": "Washington",
                        "list": [ "Washington", "WA" ]
                    },
                    {
                        "canonicalForm": "California",
                        "list": [ "California", "CA", "Calif.", "Cal." ]
                    }
                ]
            };
            let parameters;
    
            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.CLOSEDLISTS);
            }).then((response) => {
                response.should.not.be.undefined();

                //TBD: not sure how I want to test the response
                //since the url is getting stuck on the front of it by
                //commonService.js usage of "operation-location"
                
                done();
            }).catch((err) => {
                done(err);
            });
        });
    });

}) 
