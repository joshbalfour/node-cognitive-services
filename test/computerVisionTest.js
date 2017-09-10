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
                "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg"
            };

            client.ocr({
                parameters,
                body,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})