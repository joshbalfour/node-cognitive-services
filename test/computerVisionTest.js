const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe('Computer vision', () => {

    const client = cognitive.computerVision({
        API_KEY: config.computerVision.apiKey,
        endpoint: config.computerVision.endpoint
    });

    describe('OCR', () => {
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
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})