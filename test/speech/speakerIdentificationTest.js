const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Speaker identification', () => {

    const client = new cognitive.speakerIdentification({
        apiKey: config.speakerRecognition.apiKey,
        endpoint: config.speakerRecognition.endpoint
    });

    var identificationProfileId;

    before(done => {
        console.log('Creating identification profile...')
        const body = {
            locale: 'en-US'
        }

        client.createProfile({
            body
        })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.property('identificationProfileId');
                identificationProfileId = response.identificationProfileId;
                done();
            })
            .catch(err => {
                done(err);
            })
    })

    after(done => {
        console.log('Deleting enrollmments...')
        const parameters = {
            identificationProfileId: identificationProfileId
        }
        client.resetEnrollmentsForProfile({
            parameters
        })
            .then(response => {
                should(response).be.undefined();
                console.log('Deleting identification profile...')

                const parameters = {
                    identificationProfileId: identificationProfileId
                }
                return client.deleteProfile({
                    parameters
                })
            })
            .then(response => {
                should(response).be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })

    })

    it('should get one profile', done => {
        const parameters = {
            identificationProfileId: identificationProfileId
        }
        client.getProfile({
            parameters
        })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['identificationProfileId', 'locale', 'enrollmentSpeechTime', 'remainingEnrollmentSpeechTime', 'enrollmentStatus'])
                done();
            }).catch(err => {
                done(err);
            });
    })

    it('should get all profiles', done => {
        client.getAllProfiles()
            .then((response) => {
                should(response).be.Array();
                done();
            }).catch(err => {
                done(err);
            });
    })

    it('should enroll one time and get operation status', done => {
        var parameters = {
            identificationProfileId: identificationProfileId
        }
        // wav, 16k rate, 16 bit sampling, mono channel
        const body = fs.readFileSync('./test/assets/barack_obama.wav');
        const headers = {
            'Content-type': 'application/octet-stream'
        }
        console.log('Enrolling identification profile...')
        client.createEnrollment({
            parameters,
            headers,
            body
        })
            .then(response => {
                should(response).be.String();
                const operationId = response;
                parameters = {
                    operationId: operationId
                }
                return client.getOperationStatus({
                    parameters
                })
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['status', 'createdDateTime', 'lastActionDateTime']);
                done();
            })
            .catch(err => {
                done(err);
            })
    })

    it('should get operation id from identification', done => {
        const parameters = {
            identificationProfileIds: identificationProfileId
        }
        const headers = {
            'Content-type': 'application/octet-stream'
        }
        const body = fs.readFileSync('./test/assets/identification_test.wav');
        client.identify({
            parameters,
            headers,
            body
        })
            .then((response) => {
                should(response).be.String();
                done();
            }).catch(err => {
                done(err);
            });
    })
})