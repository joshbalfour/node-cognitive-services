const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing entity search', () => {

    const client = new cognitive.bingEntitySearch({
        apiKey: config.bingEntitySearch.apiKey
    });

    describe('Get entities', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "brad pitt",
                "mkt": 'en-us',
                "safesearch": 'strict'
            };

            client.getEntities({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'queryContext', 'entities']);
                should(response.entities).have.property('value');
                should(response.entities.value[0]).have.properties(['bingId', 'contractualRules', 'description', 'image', 'name', 'url', 'webSearchUrl']);
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})