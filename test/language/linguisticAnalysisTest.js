const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe.only('Linguistic analysis', () => {

    const client = new cognitive.linguisticAnalysis({
        apiKey: config.linguisticAnalysis.apiKey,
        endpoint: config.linguisticAnalysis.endpoint
    });

    var analyzerIds = [];

    before(done => {
        client.listAnalyzers()
        .then(response => {
            should(response).be.Array();
            should(response[0]).have.properties(['id', 'languages', 'kind', 'specification', 'implementation'])
            analyzerIds = response.filter(item => {
                return item.languages.indexOf('en') > -1
            })
            .map(item => {
                return item.id;
            })
            done();
        }).catch((err) => {
            done(new Error("Error making request:" + err));
        });
    })

    describe('analyze text', () => {
        it('should return response', (done) => {
            const body = {
                "language" : "en",
                "analyzerIds" : analyzerIds,
                "text" : "Hi, Tom! How are you today?" 
            };

            client.analyzeText({
                body
            }).then(response => {
                should(response).be.Array().and.have.length(analyzerIds.length);
                should(response[0]).have.properties(['analyzerId', 'result']);
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})