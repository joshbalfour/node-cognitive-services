const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe('Face', () => {

    const face = cognitive.face({
        API_KEY: config.face.apiKey,
        endpoint: config.face.endpoint
    });

    describe('Detect', () => {
        it('should accept application/json', (done) => {
            const parameters = {
                returnFaceId: "true",
                returnFaceLandmarks: "true",
                returnFaceAttributes: "age,gender,headPose,smile,facialHair,glasses"
            };
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": "http://techstory.in/wp-content/uploads/2015/02/sachin-tendulkar-sifr-651867782.jpg"
            };

            face.detect({
                parameters,
                headers,
                body
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
