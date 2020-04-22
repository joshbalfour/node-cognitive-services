const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing Custom search v7', () => {

    const client = new cognitive.bingCustomSearchV7({
        apiKey: config.bingSearchV7.apiKey
    });

    describe('Custom Search', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "bill gates",
                "count": 2,
                // NOTE : Add custom config ID to payload
            };

            const headers = {};

            client.search({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['webPages', 'rankingResponse']);
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})
