const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Language understanding (LUIS)', () => {

    const client = new cognitive.languageUnderstanding({
        apiKey: config.languageUnderstanding.apiKey,
        appID: config.languageUnderstanding.appID,
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
                should(response).not.be.undefined();
                should(response).have.properties(['query','topScoringIntent','entities']);
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })

})