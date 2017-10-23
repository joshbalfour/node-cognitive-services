const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Bing Image Search v7', () => {

    const client = new cognitive.bingImageSearchV7({
        apiKey: config.bingSearchV7.apiKey,
        endpoint: config.bingSearchV7.endpoint
    });

    describe('Image Insights', () => {
        it('should get image insights', (done) => {
            const body = fs.readFileSync('test/assets/cat.jpg');
            const headers = {};
            const parameters = {};

            client.imageInsights({
                parameters,
                headers,
                body
            })
            .then((response) => {
                should(response).not.be.undefined();
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })

    })

    describe('search', () => {
        it('should get results for a query', (done) => {
            const parameters = {
                "q": "cats",
                "count": "100",
                "offset": "10"
            };
            const headers = {};

            client.search({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property("totalEstimatedMatches");
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('trending images', () => {
        it('should get response', (done) => {
            const headers = {};
            const parameters = {
                "safeSearch": "Off"
            };
            client.trending({
                parameters,
                headers
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('categories');
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})