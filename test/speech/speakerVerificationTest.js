const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Speaker verification', () => {

    const client = new cognitive.speakerVerification({
        apiKey: config.speakerRecognition.apiKey,
        endpoint: config.speakerRecognition.endpoint
    });

    var verificationProfileId;
    
    function createEnrollment(profileId, audioFile) {
        const parameters = {
            verificationProfileId: profileId
        }
        const body = fs.readFileSync(audioFile);
        const headers = {
            'Content-type': 'application/octet-stream'
        }
        return client.createEnrollment({
            parameters,
            headers,
            body
        })
    }

    before(done => {
        console.log('Creating verification profile...')
        const body = {
            locale: 'en-US'
        }

        client.createProfile({
            body
        })
        .then(response => {
            should(response).not.be.undefined();
            should(response).have.property('verificationProfileId');
            verificationProfileId = response.verificationProfileId;
            done();
        })
        .catch(err => {
            done(err);
        })
    })

    after(done => {
        console.log('Deleting enrollmments...')
        const parameters = {
            verificationProfileId: verificationProfileId
        }
        client.resetEnrollments({
            parameters
        })
            .then(response => {
                should(response).be.undefined();
                console.log('Deleting verification profile...')

                const parameters = {
                    verificationProfileId: verificationProfileId
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
            verificationProfileId: verificationProfileId
        }
        client.getProfile({
            parameters
        })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['createdDateTime', 'enrollmentsCount', 'enrollmentStatus', 'locale', 'remainingEnrollmentsCount'])
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

    it('should enroll three times and then verify', done => {
        // wav, 16k rate, 16 bit sampling, mono channel
        const files = [
            './test/assets/enrollment_1.wav',
            './test/assets/enrollment_2.wav',
            './test/assets/enrollment_3.wav'
        ]
        console.log('Creating 3 enrollments...')
        createEnrollment(verificationProfileId, files[0])
            .then(response1 => {
                should(response1).not.be.undefined();
                should(response1).have.properties(['enrollmentsCount', 'enrollmentStatus', 'phrase', 'remainingEnrollments']);
                should(response1.enrollmentsCount).eql(1);
                return createEnrollment(verificationProfileId, files[1])
            })
            .then(response2 => {
                should(response2).not.be.undefined();
                should(response2).have.properties(['enrollmentsCount', 'enrollmentStatus', 'phrase', 'remainingEnrollments']);
                should(response2.enrollmentsCount).eql(2);
                return createEnrollment(verificationProfileId, files[2])
            })
            .then(response3 => {
                should(response3).not.be.undefined();
                should(response3).have.properties(['enrollmentsCount', 'enrollmentStatus', 'phrase', 'remainingEnrollments']);
                should(response3.enrollmentsCount).eql(3);

                const parameters = {
                    verificationProfileId: verificationProfileId
                }
                const body = fs.readFileSync('./test/assets/verification_test.wav');
                const headers = {
                    'Content-type': 'application/octet-stream'
                }
                return client.verify({
                    parameters,
                    headers,
                    body
                })
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['result', 'confidence', 'phrase']);
                done();
            })
            .catch(err => {
                done(err);
            })
    })

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
            done(err);
        });
    })
})