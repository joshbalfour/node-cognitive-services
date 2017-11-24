const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Language understanding', () => {

    const client = new cognitive.languageUnderstanding({
        apiKey: config.languageUnderstanding.apiKey,
        appID: config.languageUnderstanding.appID,
        endpoint: config.languageUnderstanding.endpoint
    });

    describe('Detect Intent (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/json'
            };

            // change this query to be relevant to your LUIS model
            const body = "forward to frank 30 dollars through HSBC"

            client.detectIntent({
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