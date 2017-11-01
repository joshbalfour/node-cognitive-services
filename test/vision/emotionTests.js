const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Emotion', () => {

    const client = new cognitive.emotion({
        apiKey: config.emotion.apiKey,
        endpoint: config.emotion.endpoint
    });

    describe('Recognize emotion (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/happy_face.jpg');

            client.emotionRecognition({
                headers,
                body
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(1);
                should(response[0]).have.properties(['faceRectangle', 'scores']);
                done();
            })
            .catch((err) => {
                done(err);
            })
        })
    })

    describe('Recognize emotion with face rectangles (POST)', () => {
        it('should return response', (done) => {
            const parameters = {
                'faceRectangles': '0,0,128,128'
            }
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/happy_face.jpg');

            client.emotionRecognitionWithFaceRectangles({
                parameters,
                headers,
                body
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(1);
                should(response[0]).have.properties(['faceRectangle', 'scores']);
                done();
            })
            .catch((err) => {
                done(err);
            })
        })
    })
})