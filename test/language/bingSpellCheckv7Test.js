const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing spell check v7', () => {

    const client = new cognitive.bingSpellCheckV7({
        apiKey: config.bingSpellCheckV7.apiKey,
        endpoint: config.bingSpellCheckV7.endpoint
    });

    describe('spellCheck', () => {
        it('should return response', (done) => {
            const parameters = {
                "mode": "proof",
                "mkt": "en-US",
                "text": "Bill Gatas"
            };

            const headers = {};

            client.spellCheck({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'flaggedTokens'])
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})