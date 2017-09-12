const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe('Bing autosuggest', () => {

    const client = cognitive.bingAutosuggest({
        API_KEY: config.bingAutosuggest.apiKey,
        endpoint: config.bingAutosuggest.endpoint
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