const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe('Bing web search', () => {

    const client = cognitive.bingWebSearch({
        API_KEY: config.bingWebSearch.apiKey,
        endpoint: config.bingWebSearch.endpoint
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
                should(response).have.properties('_type', 'facts', 'images', 'rankingResponse', 'relatedSearches', 'videos', 'webPages')
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})