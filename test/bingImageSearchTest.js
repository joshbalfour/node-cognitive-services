const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');
const fs = require('fs');

describe.only('Bing Image Search', () => {

    const client = cognitive.bingImageSearch({
        API_KEY: config.bingImage.apiKey,
        endpoint: config.bingImage.endpoint
    });

    describe('Search', () => {
        it('should get image insights', (done) => {
            const headers = {
                'Content-type': 'multipart/form-data'
            };
            
            const body = fs.readFileSync('test/assets/cat.jpg');
            const parameters = {
                "q": "cats",
            };

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

        it('should get results for a query', (done) => {
            const parameters = {
                "q": "cats",
                "count": "10000"
            };

            client.search({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property("totalEstimatedMatches");
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })

        it('should get trending images', (done) => {
            client.trending()
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