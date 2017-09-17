const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe('Bing video search', () => {

    const client = cognitive.bingVideoSearch({
        apiKey: config.bingVideoSearch.apiKey,
        endpoint: config.bingVideoSearch.endpoint
    });

    describe('Search', () => {
        it('should return response', (done) => {
            const parameters = {
                "q": "cats"
            };

            client.search({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'instrumentation', 'nextOffsetAddCount', 'pivotSuggestions', 'queryExpansions', 'readLink', 'totalEstimatedMatches', 'value', 'webSearchUrl']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Trending', () => {
        it('should return response', (done) => {
            const parameters = {};

            client.trending({
                parameters
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
                'modulesRequested': 'All'
            };

            client.details({
                parameters
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