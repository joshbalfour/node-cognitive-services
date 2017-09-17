const cognitive = require('../../index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

function makeId(length) {
    var text = "";
    var possible = "0123456789abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

describe('Face', () => {

    const SATYA_NADELLA_IMAGE_URL = "http://s3.amazonaws.com/digitaltrends-uploads-prod/2014/02/Satya-Nadella-quotes.jpg";

    const personGroupId = "test-" + makeId(8);
    var personId = null;

    const face = cognitive.face({
        apiKey: config.face.apiKey,
        endpoint: config.face.endpoint
    });

    before((done) => {
        // create a person group
        var parameters = {
            "personGroupId": personGroupId
        };
        var headers = {
            'Content-type': 'application/json'
        };
        var body = {
            "name": personGroupId
        };

        face.createAPersonGroup({
            parameters,
            headers,
            body
        }).then((response) => {
            should(response).be.undefined();
            // create a person
            headers = {
                'Content-type': 'application/json'
            };
            body = {
                "name": "johndoe"
            }
            parameters = {
                'personGroupId': personGroupId
            }

            return face.createAPerson({
                parameters,
                headers,
                body
            })
        }).then((response) => {
            should(response).not.be.undefined();
            should(response).has.property('personId');
            personId = response.personId;
            done();
        }).catch((err) => {
            done(err);
        })

        

    })

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
                "url": SATYA_NADELLA_IMAGE_URL
            };

            face.detect({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response.length).eql(1);
                should(response[0]).have.properties(['faceAttributes', 'faceId', 'faceLandmarks', 'faceRectangle']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('person', () => {
        it('should add a person face with a picture in a URL', (done) => {
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": "https://randomuser.me/api/portraits/women/65.jpg"
            }
            const parameters = {
                "personGroupId": personGroupId,
                "personId": personId
            };

            face.addAPersonFace({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })

        it('should add a person face with a binary image', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            
            const body = fs.readFileSync('test/assets/happy_face.jpg');
            const parameters = {
                "personGroupId": personGroupId,
                "personId": personId
            };

            face.addAPersonFace({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})
