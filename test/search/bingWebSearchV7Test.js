const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing web search v7', () => {

    const client = new cognitive.bingWebSearchV7({
        apiKey: config.bingSearchV7.apiKey,
        endpoint: config.bingSearchV7.endpoint
    });

    describe('Search', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "bill gates",
                "count": 2
            };

            const headers = {};

            client.search({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['queryContext', 'webPages', 'rankingResponse', 'entities', 'images', 'videos', 'relatedSearches']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})