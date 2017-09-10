const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe('Speaker recognition', () => {

    const client = cognitive.speakerRecognition({
        API_KEY: config.speakerRecognition.apiKey,
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
})