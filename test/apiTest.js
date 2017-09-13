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

    it('if a parameter is required and its value is not in the list of options it should throw an error', (done) => {
        const client = cognitive.webLanguageModel({
            API_KEY: config.webLanguageModel.apiKey,
            endpoint: config.webLanguageModel.endpoint
        });

        const parameters = {
            "model": "not_found",
            "text": "some text"
        };

        client.breakIntoWords({
            parameters
        }).then((response) => {
            done(new Error('Should have failed because a parameter is not in the list of options allowed'))
        }).catch((err) => {
            should(err).not.be.undefined();
            should(err.message).eql('Parameter "model" had a value not supported. Valid values are title,anchor,query,body')
            done();
        });
    })
})