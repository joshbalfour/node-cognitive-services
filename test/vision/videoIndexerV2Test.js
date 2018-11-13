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

    describe('Get Account Access Token', () => {
        const requestParams = {
            location: "trial",
            accountId: config.videoIndexerV2.accountId,
            allowEdit: false
        };
        
        it('should return an account access token', done => {
            client.getAccountAccessToken(requestParams)
            .then(response => {
                should(response).not.be.undefined();
                should(response).startWith("ey", "the encoding of brackets alwys generates this at the start");
                done();         
            })
            .catch(err => {
                done(err);
            })
        })
    })

    describe('Get User Access Token', () => {
        const requestParams = {
            location: "trial",
            allowEdit: false
        };
        
        it('should return a user access token', done => {
            client.getUserAccessToken(requestParams)
            .then(response => {
                should(response).not.be.undefined();
                should(response).startWith("ey", "the encoding of brackets alwys generates this at the start");
                done();         
            })
            .catch(err => {
                done(err);
            })
        })
    })
})
