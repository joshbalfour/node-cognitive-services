const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe('API Test', () => {
    it('if a parameter is required and not entered it should throw an error', (done) => {
        const client = cognitive.academicKnowledge({
            API_KEY: config.academicKnowledge.apiKey,
            endpoint: config.academicKnowledge.endpoint
        });    

        const parameters = {};

        client.calcHistogram({
            parameters,
        }).then((response) => {
            done(new Error('Should have failed because a parameter is missing'))
        }).catch((err) => {
            should(err).not.be.undefined();
            should(err.message).eql('Required parameter "expr" was not present in "Academic Knowledge" "CalcHistogram" request')
            done();
        });
    })
})