const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing news search', () => {

    const client = new cognitive.bingNewsSearch({
        apiKey: config.bingSearch.apiKey,
        endpoint: config.bingSearch.endpoint
    });

    describe('News by category', () => {
        it('should return response', (done) => {
            const parameters = {
                "category": "Sports"
            };

            const headers = {};

            client.categoryNews({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'value'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Search', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "argentina",
                "count": 100
            };

            const headers = {
                'Content-type': 'multipart/form-data'
            };

            client.search({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'readLink', 'sort', 'totalEstimatedMatches', 'value'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Trending news', () => {
        it('should return response', (done) => {
            const parameters = {
                "count": 10
            };

            const headers = {};

            client.trendingTopics({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'value'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})