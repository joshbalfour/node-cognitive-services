const cognitive = require('../../src/index.js');
const config = require('../config.js');

describe('Language understanding (LUIS)', () => {

    const client = new cognitive.languageUnderstanding({
        apiKey: config.languageUnderstanding.apiKey,
        appID: config.languageUnderstanding.appID,
        versionID: config.languageUnderstanding.versionID,
        endpoint: config.languageUnderstanding.endpoint
    });

    describe('Detect Intent', () => {
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
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })

    describe('Train', () => {
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
    })
    describe('TrainStatus', () => {
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
    })
    describe('ExportApplicationVersion', () => {
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
    })    
    describe('DownloadApplicationQuerylog', () => {
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
    }) 
    describe('Publish', () => {
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
    })   
    describe('Applications', () => {
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
    describe('Review Example Utterances', () => {
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
    }) 
    describe('User Access List', () => {
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
    }) 
    describe('Version Entities', () => {
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
    }) 
    describe('Version Intents', () => {
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
    }) 
})