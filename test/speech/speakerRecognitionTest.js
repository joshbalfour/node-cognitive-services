const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Speaker recognition', () => {

    const client = new cognitive.speakerRecognition({
        apiKey: config.speakerRecognition.apiKey,
        endpoint: config.speakerRecognition.endpoint
    });

    describe('Verification profiles - get all profiles', () => {
        it('should return response', (done) => {
            const parameters = {};
            const headers = {};

            client.verificationProfileGetAllProfiles({
                parameters,
                headers
            }).then((response) => {
                console.log(response);
                should(response).not.be.undefined();
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Identification profiles - get all profiles', () => {
        it('should return response', (done) => {
            const parameters = {};
            const headers = {};

            client.identificationProfileGetAll({
                parameters,
                headers
            }).then((response) => {
                console.log(response);
                should(response).not.be.undefined();
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Verification phrase', () => {
        it('should list all verification phrases', (done) => {
            const parameters = {
                locale: "en-US"
            };

            client.listAllSupportedVerificationPhrases({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array();
                should(response).matchEach((i) => should(i).have.property('phrase'));
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})