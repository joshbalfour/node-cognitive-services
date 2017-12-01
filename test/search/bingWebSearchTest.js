const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing web search', () => {

    const client = new cognitive.bingWebSearch({
        apiKey: config.bingSearch.apiKey,
        endpoint: config.bingSearch.endpoint
    });

    describe('Search', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "bill gates"
            };

            const headers = {};

            client.search({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties('_type', 'images', 'rankingResponse', 'relatedSearches', 'videos', 'webPages')
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})