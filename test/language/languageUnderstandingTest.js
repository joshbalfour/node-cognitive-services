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
})