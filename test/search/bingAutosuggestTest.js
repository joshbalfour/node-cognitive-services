const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing autosuggest', () => {

    const client = new cognitive.bingAutosuggest({
        apiKey: config.bingAutosuggest.apiKey
    });

    describe('Suggestions', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "argentina"
            };

            const headers = {};

            client.suggestions({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'queryContext', 'suggestionGroups'])
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})