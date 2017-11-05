const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing video search v7', () => {

    const client = new cognitive.bingVideoSearchV7({
        apiKey: config.bingSearchV7.apiKey,
        endpoint: config.bingSearchV7.endpoint
    });

    describe('Search', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "cats",
                "count": 5
            };

            const headers = {};

            client.search({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'instrumentation', 'nextOffset', 'pivotSuggestions', 'queryExpansions', 'readLink', 'relatedSearches', 'totalEstimatedMatches', 'value', 'webSearchUrl']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Trending', () => {
        it('should return response', (done) => {
            const parameters = {};
            const headers = {};

            client.trending({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'instrumentation', 'bannerTiles', 'categories']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Details', () => {
        it('should return response', (done) => {
            const parameters = {
                'id': '2329574E92ADA9F478562329574E92ADA9F47856',
                'modules': 'All'
            };
            const headers = {};

            client.details({
                parameters,
                headers
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'instrumentation', 'relatedVideos', 'videoResult']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})