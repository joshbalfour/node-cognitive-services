const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Computer vision', () => {

    const FRIENDS_IMAGE_URL = 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg';

    const client = new cognitive.computerVision({
        apiKey: config.computerVision.apiKey,
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
                done(err);
            });
        });

        it('should accept application/octet-stream', (done) => {
            const parameters = {
                "visualFeatures": "Categories",
                "details": "Celebrities,Landmarks"
            };
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/cat.jpg');

            client.analyzeImage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(["categories", "metadata", "requestId"]);
                done();
            }).catch((err) => {
                done(err);
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
                done(err);
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
                done(err);
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
                done(err);
            });
        });
    });

    describe('Recognize domain specific content (POST)',  () => {
        it('should accept application/json', (done) => {
            const parameters = {
                "model": "celebrities"
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
                done(err);
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
                done(err);
            });
        });
    });

    describe('Recognize handwritten text (POST and GET)',  () => {
        it('should accept application/octet-stream', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/license_plate.png');
            var parameters = {
                "mode": "Handwritten",
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
                done(err);
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
                "url": "https://wrhsstampede.com/wp-content/uploads/2017/02/image-4-900x431.jpeg"
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
                done(err);
            });
        });

        it('should accept file', (done) => {
            const parameters = {
                "language": "en",
                "detectOrientation": "false"
            };
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('test/assets/license_plate.png');

            client.ocr({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(["language", "orientation", "regions", "textAngle"]);
                done();
            }).catch((err) => {
                done(err);
            });
        });
    });
});