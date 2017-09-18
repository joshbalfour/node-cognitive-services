const cognitive = require('../../index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Video', () => {

    const client = cognitive.video({
        apiKey: config.video.apiKey,
        endpoint: config.video.endpoint
    });

    describe('Face detection and tracking (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/video_girl_laughing.mp4');

            client.faceDetectionAndTracking({
                headers,
                body
            }).then((operationId) => {
                should(operationId).not.be.undefined();
                should(operationId).be.String();

                parameters = {
                    'oid': operationId
                };

                return client.getOperationResult({
                    parameters
                });
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['status']);
                done();
            })
            .catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Motion detection (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/video_girl_laughing.mp4');

            var parameters = {};

            client.motionDetection({
                parameters,
                headers,
                body
            }).then((operationId) => {
                should(operationId).not.be.undefined();
                should(operationId).be.String();

                parameters = {
                    'oid': operationId
                };

                return client.getOperationResult({
                    parameters
                });
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['status']);
                done();
            })
            .catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Stabilization (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/video_girl_laughing.mp4');

            client.stabilization({
                headers,
                body
            }).then((operationId) => {
                should(operationId).not.be.undefined();
                should(operationId).be.String();

                var parameters = {
                    'oid': operationId
                };

                return client.getOperationResult({
                    parameters
                });
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['status']);
                done();
            })
            .catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Thumbnail (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/video_girl_laughing.mp4');

            var parameters = {};

            client.thumbnail({
                headers,
                body
            }).then((operationId) => {
                should(operationId).not.be.undefined();
                should(operationId).be.String();

                parameters = {
                    'oid': operationId
                };

                return client.getOperationResult({
                    parameters
                });
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['status']);
                done();
            })
            .catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})