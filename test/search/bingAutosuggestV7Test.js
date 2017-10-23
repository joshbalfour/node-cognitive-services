const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing autosuggest v7', () => {

    const client = new cognitive.bingAutosuggestV7({
        apiKey: config.bingAutosuggestV7.apiKey,
        endpoint: config.bingAutosuggestV7.endpoint
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
                done(new Error("Error making request:" + err));
            });
        })
    })
})