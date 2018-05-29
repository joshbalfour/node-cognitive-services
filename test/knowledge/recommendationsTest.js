const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Recommendations', () => {

    const client = new cognitive.recommendations({
        apiKey: config.recommendations.apiKey,
        endpoint: config.recommendations.endpoint
    });

    describe('Get all models', () => {
        it('should get response', done => {
            client.getAllModels()
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.Array;
                done();
            })
            .catch(err => {
                done(err);
            })
        })
    })
})