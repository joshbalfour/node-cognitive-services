const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');
const fs = require('fs');

describe('Computer vision', () => {

    const FRIENDS_IMAGE_URL = 'http://az616578.vo.msecnd.net/files/2016/10/09/636115830685164048-686058602_friends.jpg';

    const client = cognitive.computerVision({
        API_KEY: config.computerVision.apiKey,
        endpoint: config.computerVision.endpoint
    });

    describe('Analyze Image (POST)', () => {
        it('should accept application/json', (done) => {
            const parameters = {
                "visualFeatures": "Categories",
                "details": "Celebrities,Landmarks"
            };
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": FRIENDS_IMAGE_URL
            };

            client.analyzeImage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(["categories", "metadata", "requestId"]);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        });
    });

    describe('Describe image (POST)',  () => {
        it('should accept application/json', (done) => {
            const parameters = {
                "maxCandidates": "3"
            };
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": FRIENDS_IMAGE_URL
            };

            client.describeImage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(["description", "metadata", "requestId"]);
                should(response.description).have.properties(['captions', 'tags']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        });
    });

    describe('Get thumbnail (POST)',  () => {
        it('should accept application/json', (done) => {
            const parameters = {
                "width": "50",
                "height": "50",
                "smartCropping": true
            };
            const headers = {
                'Content-Type': 'application/json'
            };
            const body = {
                "url": FRIENDS_IMAGE_URL
            };

            client.getThumbnail({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        });
    });

    describe('List domain specific models (GET)',  () => {
        it('should return list', (done) => {
            client.listDomainSpecificModels()
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('models');
                should(response.models).be.Array();
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        });
    });

    describe('Recognize domain specific content (POST)',  () => {
        it('should accept application/json', (done) => {
            const parameters = {
                "model": "Celebrities"
            };
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": FRIENDS_IMAGE_URL
            };

            client.recognizeDomainSpecificContent({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['metadata', 'result', 'requestId']);
                should(response.result).have.property('celebrities');
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        });
    });

    describe('Tag images (POST)',  () => {
        it('should accept application/json', (done) => {
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": FRIENDS_IMAGE_URL
            };

            client.tagImage({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['metadata', 'tags', 'requestId']);
                should(response.tags).be.Array();
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        });
    });

    describe('Recognize handwritten text (GET and POST)',  () => {
        it('should accept application/octet-stream', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/handwritten_text.png');
            var parameters = {
                "handwriting": true,
            };

            client.recognizeHandwrittenText({
                parameters,
                headers,
                body
            }).then((operationId) => {
                should(operationId).not.be.undefined();
                should(operationId).be.String();

                parameters = {
                    'operationId': operationId
                };

                return client.getHandwrittenTextOperationResult({
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
        });
    });

    describe('OCR (POST)', () => {
        it('should accept application/json', (done) => {
            const parameters = {
                "language": "unk",
                "detectOrientation": "true"
            };
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": "https://pbs.twimg.com/profile_images/808958766628605952/yB14UlXl_400x400.jpg"
            };

            client.ocr({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(["language", "orientation", "regions", "textAngle"]);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        });
    });
});