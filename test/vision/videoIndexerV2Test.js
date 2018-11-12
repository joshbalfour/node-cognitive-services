const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe.only('Video Indexer V2', () => {

    const client = new cognitive.videoIndexerV2({
        apiKey: config.videoIndexerV2.apiKey
    });

    describe('Get Accounts', () => {
        const requestParams = {
            location: "trial",
            allowEdit: false,
            generateAccessTokens: true
        };
        
        it('should return an array contain an object with url, id and accounts access token', done => {
            client.getAccounts(requestParams)
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.an.Array();
                should(response[0]).have.property('id');
                should(response[0]).have.property('url');
                should(response[0]).have.property('accessToken');
                done();         
            })
            .catch(err => {
                done(err);
            })
        })
    })

})
