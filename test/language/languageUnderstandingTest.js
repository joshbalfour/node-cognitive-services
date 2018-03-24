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

If you plan to use this code for many queries or in different regions,
you need to make sure the apiKey is a LUIS subscription key (free or paid), and not
the authoring key (meant for authoring only). This code defaults to 
West US. If you change the authoring and endpoint regions for the tests, you 
need to make sure those two regions align correctly using the table at
https://aka.ms/luis-regions

The tests create both the prebuilt domain Web and 
imports the ../asserts/LUIS/TravelAgent-import-app.json.

The tests now generally use the TravelAgent-import-app.json
because it has more of the custom entities. TBD: add phrase
list feature to TravelAgent-import-app.json that makes
sense for the domain. 

*/

describe.only('Language understanding (LUIS)', () => {

    const defaultVersionId = config.languageUnderstanding.versionId;

    // set these values in ../config.js
    // app id set during import - not here
    const client = new cognitive.languageUnderstanding({
        authoringKey: config.languageUnderstanding.authoringKey,
        apiKey: config.languageUnderstanding.apiKey,
        authoringEndpoint: config.languageUnderstanding.authoringEndpoint,
        endpoint: config.languageUnderstanding.endpoint,
        apiId: undefined,
        versionId: config.languageUnderstanding.versionId,
        options: config.languageUnderstanding.options
    });

    var deleteTestApp = () =>{
        var body;
        return promiseDelay(client.retryInterval).then(() => {
            return client.deleteAppInfo(body,client.APPINFO.APP);
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
            client.appId = results.body.substring(results.body.length - client.KeyLength, results.body.length);
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
    describe("[Delete app after] ", () => {
        afterEach((done) => {
            deleteTestApp()
            .then((response) => {
                response.should.not.be.undefined();
                response.should.be.Array;
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
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
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.not.be.undefined();
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);

                client.appId = response.body.substring(response.body.length - client.KeyLength, response.body.length);
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should add prebuilt domain', (done) => {

            let body = {
                "domainName": "Web", 
                "culture": "en-us",
                "appName": "describe-" + new Date().toISOString()
            }

            promiseDelay(client.retryInterval)
            .then(() => {
                var parameters;
                return client.setLUIS(client.INFO.CUSTOMPREBUILTDOMAINS, body, parameters);
            }).then((response) => {
                response.should.not.be.undefined();
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.not.be.undefined();
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);

                client.appId = response.body.substring(response.body.length - client.KeyLength, response.body.length);
                done();
            }).catch((err) => {
                done(err);
            });
        })

    })      
    describe("[Create app before, delete app after ", () => {
        before((done) => {
            promiseDelay(client.retryInterval)
            .then(() => {
                
                var body = require("../assets/LUIS/TravelAgent-import-app.json");

                var name = "describe-" + new Date().toISOString();

                return importTrainPublishApp(name,body)
            }).then(results => {
                results.should.not.be.undefined();
                results.should.have.only.keys(
                    'assignedEndpointKey', 
                    'endpointRegion',
                    'endpointUrl',
                    'isStaging',
                    'publishedDateTime',
                    'region',
                    'versionId'
                );

                (results.assignedEndpointKey === null).should.be.true;
                results.endpointRegion.should.equal('westus');
                results.endpointUrl.should.containEql ("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/");
                results.endpointUrl.length.should.equal("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/74954c4e-1999-4d90-af74-f295b5830d3a".length);
                results.isStaging.should.equal(false);
                //results.publishedDateTime //"2018-02-19T14:27:07Z"
                results.publishedDateTime.length.should.equal("2018-02-19T14:27:07Z".length);
                results.region.should.equal('westus');
                results.versionId.should.equal('0.1');

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
                response.should.be.Array;
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");
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
        //DEPRECATED
        xit('should get list of LUIS assistants', (done) => {

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getLUIS(client.INFO.ASSISTANTS);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.properties('endpointKeys', 'endpointUrls');
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
                response.should.have.length(12);
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
                    response[0].should.have.only.keys('Query', 'Response', 'UTC DateTime');
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
                response.should.have.only.keys('id', 'name','description','culture','usageScenario','domain','versionsCount','createdDateTime','endpoints','endpointHitsCount','activeVersion','ownerEmail');
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
                _.difference(_.keys(response),_.keys(testData)).should.have.length(0);
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

            var deleteBody = {
                "email":"test1@domain.com"
            };
            promiseDelay(client.retryInterval)
            .then(() => {
                return client.updateAppInfo(updateBody,client.APPINFO.PERMISSIONS);
            }).then(() => { 
                return promiseDelay(client.retryInterval);
            }).then(() => {
                return client.deleteAppInfo(deleteBody,info);
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
                    'regex_entities',
                    'bing_entities',
                    'model_features', 
                    'regex_features',
                    'utterances');
                done();
            }).catch((err) => {
                done(err);
            });
        })

        // TBD - need to provide example utterances that are questionable so this list has examples
        it('should get VERSION examples', (done) => {

            let parameters = {
                skip:0,
                take:100
            };

            let exampleId = undefined;

            let singleUtterance =       {
                "text": "book me 2 adult business tickets to san diego tomorrow on air france",
                "intentName": "BookFlight",
                "entities": [
                  {
                    "entityName": "Location::ToLocation",
                    "startCharIndex": 36,
                    "endCharIndex": 44
                  },
                  {
                    "entityName": "Airline",
                    "startCharIndex": 58,
                    "endCharIndex": 67
                  }
                ]
              }
            
            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(undefined, singleUtterance, client.VERSIONINFO.EXAMPLE);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys("ExampleId","UtteranceText");
                response.UtteranceText.should.eql(singleUtterance.text);
                exampleId = response.ExampleId;

                return client.deleteVersionInfo(client.VERSIONINFO.EXAMPLES, {exampleId:exampleId});
            }).then((response2) => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('code', 'message');
                response2.code.should.equal("Success");
                response2.message.should.equal("Operation Successful");

                let batchUtterances =      [ {
                    "text": "book me 1 adult business tickets to san diego tomorrow on air france",
                    "intentName": "BookFlight",
                    "entities": [
                      {
                        "entityName": "Location::ToLocation",
                        "startCharIndex": 36,
                        "endCharIndex": 44
                      },
                      {
                        "entityName": "Airline",
                        "startCharIndex": 58,
                        "endCharIndex": 67
                      }
                    ]
                  }, {
                    "text": "book me 3 adult business tickets to san diego tomorrow on air france",
                    "intentName": "BookFlight",
                    "entities": [
                      {
                        "entityName": "Location::ToLocation",
                        "startCharIndex": 36,
                        "endCharIndex": 44
                      },
                      {
                        "entityName": "Airline",
                        "startCharIndex": 58,
                        "endCharIndex": 67
                      }
                    ]
                  }];


                return client.setVersionInfo(undefined, batchUtterances, client.VERSIONINFO.EXAMPLES);
            }).then((response3) => {
                response3.should.not.be.undefined();
                response3.should.be.Array;
                response3.length.should.eql(2);
                response3[0].should.have.only.keys('value', 'hasError');
                response3[0].value.should.have.only.keys('ExampleId',"UtteranceText");
                response3[0].hasError.should.eql(false);

                return client.getVersionInfo(client.VERSIONINFO.EXAMPLES, undefined);
            }).then((response4) => {
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(24)

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
                    response[0].should.have.only.keys('id', 'name','typeId','readableType');
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

                    // empty as of 2/18/18
                    //_.keys(response[0].assignedEndpointKey).should.have.length(3);
                    //if(response[0].assignedEndpointKey) response[0].assignedEndpointKey.should.have.only.keys("SubscriptionKey","SubscriptionName","SubscriptionRegion");

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

                // empty as of 2/18/18
                //_.keys(response.assignedEndpointKey).should.have.length(3);
                //response.assignedEndpointKey.should.have.only.keys("SubscriptionKey","SubscriptionName","SubscriptionRegion");
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should rename app VERSION ', (done) => {

            var acton = client.VERSIONINFO.VERSION;
            var params = {};
            var body = {
                "version": "1.x"
            };

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.updateVersionInfo(client.VERSIONINFO.VERSION, params, body);
            }).then((response) => {
                client.versionId = body.version;
                (response === undefined).should.be.true;
                return promiseDelay(client.retryInterval);
            }).then((response) => {
                // name it back to 0.1 because the rest of the tests expect that name
                body = {
                    "version": "0.1"
                };
                return client.updateVersionInfo(client.VERSIONINFO.VERSION, params, body);
            }).then((response) => {
                client.versionId = "0.1";
                done();
            }).catch((err) => {
                done(err);
            });
        })
        it('should delete VERSION ', (done) => {

            var clonedName = {"version":"0.3"};
            var clonedParams = {appId:client.appId,versionId:client.versionId};

            promiseDelay(client.retryInterval)
            .then(() => {
                // clone version
                return client.setVersionInfo(clonedParams, clonedName, client.VERSIONINFO.CLONE);
            }).then(() => {
                return promiseDelay(client.retryInterval);
            }).then(() => {
                // delete version
                client.versionId = clonedName.version;
                let params={};
                let body={};
                return client.deleteVersionInfo(client.VERSIONINFO.VERSION, params, body);
            }).then((response) => {
                client.versionId = "0.1";
                (response === undefined).should.be.true;
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
                response[0].should.have.only.keys('id', 'name','typeId','readableType');
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it(' should create VERSION closedlists', function(done) {

            let closedListid;

            // docs use both capital L and lowercase l for sublists
            // doesn't seem to matter - both work
            let body = {
                "name": "States",
                "subLists": 
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
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.not.be.undefined();
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);

                var getParams = {
                    clEntityId:response.body
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.CLOSEDLISTS,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();

                response2.should.have.only.keys('id', 'name','typeId','readableType','subLists');
                response2.subLists.should.be.Array;
                response2.subLists[0].should.have.only.keys('id', 'canonicalForm','list');
                response2.subLists[0].list.should.be.Array;
                response2.subLists[0].list[0].length.should.be.equalOneOf([2,4]);

                closedListid=response2.id;

                let patchParams = {
                    clEntityId: response2.id
                };

                patchBody = {
                    "subLists":
                    [
                        {
                            "canonicalForm": "Ohio",
                            "list": [ "Ohio", "OH" ]
                        }
                    ]
                };

                //patch
                return client.updateVersionInfo(client.VERSIONINFO.CLOSEDLISTSPATCH, patchParams, patchBody);
            }).then(response2a => {

                response2a.should.not.be.undefined();
                response2a.should.have.only.keys('id', 'name','typeId', 'readableType','subLists');
                response2a.name.should.eql("States");

                // put - replace entire model

                let putParams = {
                    clEntityId: closedListid
                };

                let replaceBody = {
                    "name": "Days",
                    "subLists": 
                    [
                        {
                            "canonicalForm": "Monday",
                            "list": [ "1", "M","Mon" ]
                        },
                        {
                            "canonicalForm": "Tuesday",
                            "list": [ "1", "T","Tu" ]
                        },
                        {
                            "canonicalForm": "Wednesday",
                            "list": [ "3", "W","We" ]
                        },
                        {
                            "canonicalForm": "Thursday",
                            "list": [ "4", "T","Th" ]
                        },
                    ]
                };

                //put
                return client.replaceVersionInfo(client.VERSIONINFO.CLOSEDLISTS, putParams, replaceBody);
            }).then(response3 => {
                response3.should.not.be.undefined();
                response3.should.have.only.keys('code', 'message');
                response3.code.should.equal("Success");
                response3.message.should.equal("Operation Successful");

                //get list of closed lists
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.CLOSEDLISTS,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(2);
                response4[0].should.have.only.keys('id', 'name','typeId', 'readableType','subLists');
                response4[0].name.should.eql("Coastal Cities");

                let params={clEntityId:closedListid};
                let body=undefined;

                // delete closed list entity
                return client.deleteVersionInfo(client.VERSIONINFO.CLOSEDLISTS, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });

        it(' should create VERSION compositeentities', function(done) {

            let compositeentitiesid;

            let body = {
                "name": "Reservation",
                "children": [ "Location::LocationTo", "datetimeV2" ]
            };
            let parameters;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.COMPOSITEENTITIES);
            }).then((response) => {

                response.should.not.be.undefined();
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);
                
                compositeentitiesid = response.body; 

                var getParams = {
                    cEntityId:compositeentitiesid
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.COMPOSITEENTITIES,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('id', 'name','typeId','readableType','children');
                response2.children.should.be.Array;
                response2.name.should.eql(body.name);
                response2.children[0].should.have.only.keys('id', 'name');
                response2.children[0].name.should.eql("Location::LocationTo");

                let putParams = {
                    cEntityId: compositeentitiesid
                };

                putBody = {
                    "name": "Reservation2",
                    "children": [ "Location::LocationTo","number" ]
                };

                //put
                return client.updateVersionInfo(client.VERSIONINFO.COMPOSITEENTITIES, putParams, putBody);
            }).then(response2a => {

                response2a.should.not.be.undefined();
                response2a.should.have.only.keys('code', 'message');
                response2a.code.should.equal("Success");
                response2a.message.should.equal("Operation Successful");

                //get list of all composite entities
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.COMPOSITEENTITIES,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(2);
                response4[0].should.have.only.keys('id', 'name','typeId', 'readableType','children');
                response4[0].readableType.should.eql("Composite Entity Extractor");
                response4[0].name.should.eql("Reservation2");
                response4[0].children.should.be.Array;
                response4[0].children.length.should.eql(2);

                let params={cEntityId:compositeentitiesid};
                let body=undefined;

                // delete composite entity
                return client.deleteVersionInfo(client.VERSIONINFO.COMPOSITEENTITIES, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });

        it(' should create VERSION simple entities', function(done) {

            let simpleentitiesid;

            let body = {
                "name": "Employee"
            };
            let parameters;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.SIMPLEENTITIES);
            }).then((response) => {

                response.should.not.be.undefined();
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);
                
                simpleentitiesid = response.body; 

                var getParams = {
                    entityId:simpleentitiesid
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.SIMPLEENTITIES,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('id', 'name','typeId','readableType');
                response2.id.should.eql(simpleentitiesid);
                response2.readableType.should.eql("Entity Extractor");
                response2.name.should.eql(body.name);

                let putParams = {
                    entityId: simpleentitiesid
                };

                putBody = {
                    "name": "DaysOfWeek"
                };

                //put
                return client.updateVersionInfo(client.VERSIONINFO.SIMPLEENTITIES, putParams, putBody);
            }).then(response2a => {

                response2a.should.not.be.undefined();
                response2a.should.have.only.keys('code', 'message');
                response2a.code.should.equal("Success");
                response2a.message.should.equal("Operation Successful");

                //get list of all simple entities
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.SIMPLEENTITIES,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(3);
                response4[0].should.have.only.keys('id', 'name','typeId', 'readableType');
                response4[0].readableType.should.eql("Entity Extractor");
                response4[0].name.should.eql("Airline");

                let params={entityId:simpleentitiesid};
                let body=undefined;

                // delete simple entity
                return client.deleteVersionInfo(client.VERSIONINFO.SIMPLEENTITIES, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });

        it(' should create VERSION simple entities', function(done) {

            let simpleentitiesid;

            let body = {
                "name": "Employee"
            };
            let parameters;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.SIMPLEENTITIES);
            }).then((response) => {

                response.should.not.be.undefined();
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);
                
                simpleentitiesid = response.body; 

                var getParams = {
                    entityId:simpleentitiesid
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.SIMPLEENTITIES,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('id', 'name','typeId','readableType');
                response2.id.should.eql(simpleentitiesid);
                response2.readableType.should.eql("Entity Extractor");
                response2.name.should.eql(body.name);

                let putParams = {
                    entityId: simpleentitiesid
                };

                putBody = {
                    "name": "DaysOfWeek"
                };

                //put
                return client.updateVersionInfo(client.VERSIONINFO.SIMPLEENTITIES, putParams, putBody);
            }).then(response2a => {

                response2a.should.not.be.undefined();
                response2a.should.have.only.keys('code', 'message');
                response2a.code.should.equal("Success");
                response2a.message.should.equal("Operation Successful");

                //get list of all simple entities
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.SIMPLEENTITIES,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(3);
                response4[0].should.have.only.keys('id', 'name','typeId', 'readableType');
                response4[0].readableType.should.eql("Entity Extractor");
                response4[0].name.should.eql("Airline");

                let params={entityId:simpleentitiesid};
                let body=undefined;

                // delete simple entity
                return client.deleteVersionInfo(client.VERSIONINFO.SIMPLEENTITIES, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });


        it(' should create VERSION hierarchical entities', function(done) {

            let hierarchicalentitiesid;

            let body = {
                "name": "LocationTest",
                "children": [ "From", "To" ]
            };
            let parameters;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.HIERARCHICALENTITIES);
            }).then((response) => {

                response.should.not.be.undefined();
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);
                
                hierarchicalentitiesid = response.body; 

                var getParams = {
                    hEntityId:hierarchicalentitiesid
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.HIERARCHICALENTITIES,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('id', 'name','typeId','readableType','children');
                response2.id.should.eql(hierarchicalentitiesid);
                response2.readableType.should.eql("Hierarchical Entity Extractor");
                response2.name.should.eql(body.name);

                let putParams = {
                    hEntityId: hierarchicalentitiesid
                };

                putBody = {
                    "name": "LocationTest2",
                    "children": [ "SourceLocation", "DestinationLocation" ]
                };

                //put
                return client.updateVersionInfo(client.VERSIONINFO.HIERARCHICALENTITIES, putParams, putBody);
            }).then(response2a => {

                response2a.should.not.be.undefined();
                response2a.should.have.only.keys('code', 'message');
                response2a.code.should.equal("Success");
                response2a.message.should.equal("Operation Successful");

                //get list of all 
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.HIERARCHICALENTITIES,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(4);
                response4[0].should.have.only.keys('id', 'name','typeId', 'readableType','children');
                response4[0].readableType.should.eql("Hierarchical Entity Extractor");
                response4[0].name.should.eql("Location");

                let params={hEntityId:hierarchicalentitiesid};
                let body=undefined;

                // delete 
                return client.deleteVersionInfo(client.VERSIONINFO.HIERARCHICALENTITIES, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });

        it(' should create VERSION intents', function(done) {

            let intentid;
            let intentname = "mochatest-" + new Date().toISOString();

            let body = {
                "name": intentname
            };
            let parameters;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.INTENTS);
            }).then((response) => {

                response.should.not.be.undefined();
                response['operation-location'].should.not.be.undefined();
                response['operation-location'].should.containEql(config.languageUnderstanding.authoringEndpoint);
                response.body.should.have.length(client.KeyLength);
                response.statusCode.should.equal(201);
                
                intentid = response.body; 

                var getParams = {
                    intentId:intentid
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.INTENTS,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('id', 'name','typeId','readableType');
                response2.id.should.eql(intentid);
                response2.name.should.eql(body.name);

                let putParams = {
                    intentId: intentid
                };

                putBody = {
                    "name": intentname + "-2"
                };

                //put
                return client.updateVersionInfo(client.VERSIONINFO.INTENTS, putParams, putBody);
            }).then(response2a => {

                response2a.should.not.be.undefined();
                response2a.should.have.only.keys('code', 'message');
                response2a.code.should.equal("Success");
                response2a.message.should.equal("Operation Successful");

                //get list of all 
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.INTENTS,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(5);
                response4[0].should.have.only.keys('id', 'name','typeId', 'readableType');
                response4[0].readableType.should.eql("Intent Classifier");
                response4[0].name.should.eql( "BookFlight");

                let params={intentId:intentid};
                let body=undefined;

                // delete 
                return client.deleteVersionInfo(client.VERSIONINFO.INTENTS, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should create VERSION phrase lists', function(done) {

            let phraselistid;
            let phraselistname = "mochatest-" + new Date().toISOString();

            let body = {
                
                    "name": "Eno",
                    "phrases": "hello,goodbye know,e know,eno",
                    "isExchangeable": true,
                    "isActive": true
                
            };
            let parameters;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.PHRASELISTS);
            }).then((response) => {

                response.should.not.be.undefined();

                phraselistid = response; 

                var getParams = {
                    phraselistId:phraselistid
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.PHRASELISTS,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('id', 'name','phrases','isExchangeable','isActive');
                response2.id.should.eql(phraselistid);
                response2.name.should.eql(body.name);

                let putParams = {
                    phraselistId: phraselistid
                };

                putBody = {
                    "id": phraselistid,
                    "name": "Eno2",
                    "phrases": "hello2,goodbye know2,e know,eno",
                    "isExchangeable": false,
                    "isActive": false
                
            };;

                //put
                return client.updateVersionInfo(client.VERSIONINFO.PHRASELISTS, putParams, putBody);
            }).then(response2a => {

                response2a.should.not.be.undefined();
                response2a.should.have.only.keys('code', 'message');
                response2a.code.should.equal("Success");
                response2a.message.should.equal("Operation Successful");

                //get list of all 
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.PHRASELISTS,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(1);
                response4[0].should.have.only.keys('id', 'name','phrases','isExchangeable','isActive');

                let params={phraselistId:phraselistid};
                let body=undefined;

                // delete 
                return client.deleteVersionInfo(client.VERSIONINFO.PHRASELISTS, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should create VERSION prebuilts', function(done) {

            let prebuiltId;

            let body = [ "email" ];
            let parameters;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(parameters, body, client.VERSIONINFO.PREBUILTS);
            }).then((response) => {

                response.should.not.be.undefined();
                response.should.be.Array;
                response.length.should.eql(1);
                response[0].should.have.only.keys('id', 'name','readableType','typeId');
                prebuiltId = response[0].id;
                response[0].name.should.be.eql("email");
                response[0].readableType.should.be.eql("Prebuilt Entity Extractor");
                

                var getParams = {
                    prebuiltId:prebuiltId
                };

                // get 1
                return client.getVersionInfo(client.VERSIONINFO.PREBUILTS,getParams);
            }).then(response2 => {
                response2.should.not.be.undefined();
                response2.should.have.only.keys('id', 'name','readableType','typeId');
                response2.id.should.eql(prebuiltId);
                response2.readableType.should.be.eql("Prebuilt Entity Extractor");                
                response2.name.should.eql(body[0]);

                //get list of all 
                let getParams=undefined;
                return client.getVersionInfo(client.VERSIONINFO.PREBUILTS,getParams);
            }).then(response4 => {
                // check success
                response4.should.not.be.undefined();
                response4.should.be.Array;
                response4.length.should.eql(3);
                response4[0].should.have.only.keys('id', 'name','readableType','typeId');
                response4[0].readableType.should.be.eql("Prebuilt Entity Extractor");

                let params={prebuiltId:prebuiltId};
                let body=undefined;

                // delete 
                return client.deleteVersionInfo(client.VERSIONINFO.PREBUILTS, params, body);
            }).then(response5 => {

                response5.should.not.be.undefined();
                response5.should.have.only.keys('code', 'message');
                response5.code.should.equal("Success");
                response5.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });
        // this test needs a longer delay for LUIS
        // to categorize the utterance
        // not sure what the right value for delay is
        xit(' should create VERSION suggest', function(done) {

            // an unlabeled utterance is added to the app by the endpoint
            // LUIS decides it is not confident based on the score
            // and adds it to the Review Endpoints list

            let prebuiltId;

            // purposely bad utterance so that it gets sent 
            // to low confidence list
            let body = "Paris Hilton's dog, London, reads a book inflight";

            var parameters = {
                "log": true, // required to review suggested utterances
                "verbose": true // required to see all intents and scores
            };
            promiseDelay(client.retryInterval)
            .then(() => {
                // endpoint utterance
                return client.detectIntent({parameters,body});
            }).then((response) => {
                // longer wait period
                return promiseDelay(9000);
            }).then(() => {
                parameters = undefined;

                // has to be lower case
                return client.deleteVersionInfo(client.VERSIONINFO.SUGGEST, parameters, body.toLowerCase());
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should create VERSION prebuilt domain', function(done) {

            // chosen because it is one of the small domains
            let prebuiltdomain="HomeAutomation";

            let body = { 
                "domainName": "HomeAutomation" 
            };
            
            promiseDelay(client.retryInterval)
            .then(() => {
                // add prebuilt domain to current verion
                return client.setVersionInfo(undefined,body,client.VERSIONINFO.PREBUILTDOMAINS);
            }).then((response) => {
                
                // array of models in domain
                response.should.not.be.undefined();
                response.should.be.Array;
                response.length.should.eql(5);

                // longer wait period
                return promiseDelay(9000);
            }).then(() => {
                parameters = undefined;

                // need to delete for every item in response array
                return client.deleteVersionInfo(client.VERSIONINFO.PREBUILTDOMAINS, {domainName: body.domainName}, undefined);
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.only.keys('code', 'message');
                response.code.should.equal("Success");
                response.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });


        it(' should get apps list', function(done) {

            client.getApps().then(apps=>{

                apps.should.not.be.undefined();
                apps.should.be.Array;
                if(apps.length>0){
                    apps.should.not.be.undefined();
                    apps[0].should.have.only.keys('id', 'name','description','culture','usageScenario',"domain","versionsCount","createdDateTime","endpoints","endpointHitsCount","activeVersion","ownerEmail");
                }
                done();
            }).catch(err=>{
                done(err);
            });
        });
        it(' should get authors list', function(done) {

            client.GetAppAuthorsList().then(authors=>{

                authors.should.not.be.undefined();
                authors.should.have.only.keys('owner', 'emails');
                authors.emails.should.be.Array;

                done();
            }).catch(err=>{
                done(err);
            });
        });
        it(' should set author ', function(done) {

            client.SetAppAuthor("jane@doe.com").then(response=>{

                response.should.not.be.undefined();
                response.should.eql("Success");

                done();
            }).catch(err=>{
                done(err);
            });
        });
        it(' should remove author ', function(done) {

            client.RemoveAppAuthor("jane@doe.com").then(response=>{

                response.should.not.be.undefined();
                response.should.eql("Success");

                done();
            }).catch(err=>{
                done(err);
            });
        });
        it(' should create VERSION customprebuiltmodels', function(done) {
            
            promiseDelay(client.retryInterval)
            .then(() => {
                return client.getVersionInfo(client.VERSIONINFO.PREBUILTMODELS,undefined);
            }).then((response) => {
                
                // array of models in domain
                response.should.not.be.undefined();
                response.should.have.only.keys('Result', 'Id','Exception','Status','IsCanceled','IsCompleted','CreationOptions','AsyncState','IsFaulted');
                response.Result.should.be.Array;
                response.Result.length.should.eql(1);
                response.Result[0].should.have.only.keys('id','name','typeId','readableType','customPrebuiltDomainName','customPrebuiltModelName');

                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should create VERSION customprebuiltentities', function(done) {
            
            let entityId=undefined;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(undefined, {"domainName": "Camera","modelName": "AppName"}, client.VERSIONINFO.PREBUILTENTITIES);
            }).then((response) => {
                response.should.not.be.undefined();
                response.body.length.should.eql(client.KeyLength);
                entityId = response.body;

                return promiseDelay(client.retryInterval);
            }).then(()=>{
                return client.getVersionInfo(client.VERSIONINFO.PREBUILTENTITIES,undefined);
            }).then((response2) => {         
                response2.should.not.be.undefined();
                response2.should.have.only.keys('Result', 'Id','Exception','Status','IsCanceled','IsCompleted','CreationOptions','AsyncState','IsFaulted');
                response2.Result.should.be.Array;
                response2.Result.length.should.eql(1);
                response2.Result[0].should.have.only.keys('id','name','typeId','readableType','customPrebuiltDomainName','customPrebuiltModelName');
                response2.Result[0].customPrebuiltDomainName.should.eql("Camera");
                response2.Result[0].customPrebuiltModelName.should.eql("AppName");
                
                return client.deleteVersionInfo(client.VERSIONINFO.SIMPLEENTITIES,{entityId: entityId},undefined);
            }).then((response3) => {

                response3.should.not.be.undefined();
                response3.should.have.only.keys('code', 'message');
                response3.code.should.equal("Success");
                response3.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should create VERSION customprebuiltintents', function(done) {
            
            let intentId=undefined;

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(undefined, {"domainName": "Camera","modelName": "CapturePhoto"}, client.VERSIONINFO.PREBUILTINTENTS);
            }).then((response) => {

                response.should.not.be.undefined();
                response.body.length.should.eql(client.KeyLength);
                intentId = response.body;

                return promiseDelay(client.retryInterval);
            }).then(()=>{
                return client.getVersionInfo(client.VERSIONINFO.PREBUILTINTENTS,undefined);
            }).then((response2) => {         
                response2.should.not.be.undefined();
                response2.should.have.only.keys('Result', 'Id','Exception','Status','IsCanceled','IsCompleted','CreationOptions','AsyncState','IsFaulted');
                response2.Result.should.be.Array;

                // 2 returned, make sure CapturePhoto is in array
                let arrayOfIntentIds=response2.Result.map(item =>{
                    return item.id;
                });

                // assert test here
                _.contains(arrayOfIntentIds,intentId).should.eql(true);

                response2.Result.length.should.eql(2);
                return client.deleteVersionInfo(client.VERSIONINFO.INTENTS,{intentId: intentId},undefined);
            }).then((response3) => {

                response3.should.not.be.undefined();
                response3.should.have.only.keys('code', 'message');
                response3.code.should.equal("Success");
                response3.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });
        it(' should import VERSION',(done)=>{

            let originalVersionId = client.versionId;
            var body = require("../assets/LUIS/TravelAgent-import-version.2.json");

            promiseDelay(client.retryInterval)
            .then(() => {
                return client.setVersionInfo(undefined, body, client.VERSIONINFO.IMPORT);
            }).then((response) => {
                response.should.not.be.undefined();
                response.toString().should.eql(body.versionId);

                client.versionId = body.versionId;
                return client.getVersionInfo(client.VERSIONINFO.VERSION, undefined);
            }).then((response2) => {
                response2.should.not.be.undefined();
                response2.version.should.eql(body.versionId);
                response2.trainingStatus.should.eql('NeedsTraining');
                (response2.lastTrainedDateTime === null).should.be.true;
                (response2.lastPublishedDateTime === null).should.be.true;

                return client.getAppInfo(client.APPINFO.APP);
            }).then((response3) => {

                // validate that imported version is active version
                response3.activeVersion.should.eql(body.versionId);
                return client.deleteVersionInfo(client.VERSIONINFO.VERSION, undefined, undefined);
            }).then((response4) => {
                client.versionId = originalVersionId;

                // currently doesn't return anything except status
                (response4 === null).should.be.true;

                //response4.should.not.be.undefined();
                //response4.should.have.only.keys('code', 'message');
                //response4.code.should.equal("Success");
                //response4.message.should.equal("Operation Successful");

                done();
            }).catch((err) => {
                done(err);
            });
        });
    });

});
 
