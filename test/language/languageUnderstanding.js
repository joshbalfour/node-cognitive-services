const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

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

            // optional
            var headers = {};

            // query/utterance
            var body = "forward to frank 30 dollars through HSBC";

            client.detectIntent({
                parameters,
                headers,
                body
            }).then((response) => {
                response.should.not.be.undefined();
                response.should.have.properties(['query','topScoringIntent','entities']);
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })

    describe('Train', () => {
        it('should train model', (done) => {

            client.train().then((response) => {
                response.should.not.be.undefined();
                response.should.have.properties(['statusId','status']);
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
    describe('TrainStatus', () => {
        it('should return training status', (done) => {

            client.getTrainStatus().then((response) => {
                response.should.not.be.undefined();
                response.should.be.instanceof(Array);
                response[0].should.have.properties(['modelId', 'details'])
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})