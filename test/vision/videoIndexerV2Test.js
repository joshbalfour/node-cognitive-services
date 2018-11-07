const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe.only('Video indexer', () => {

    const client = new cognitive.videoIndexerV2({
        apiKey: config.videoIndexerV2.apiKey
    });

    describe('Accounts Access Token', () => {
        const requestParams = {
            location: "trial",
            allowEdit: false,
            accountId: "your-account-id-here"
        };
        
        it('should get an accounts access token', done => {
            client.getAccountsAccessToken(requestParams)
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.a.String();
                done();         
            })
            .catch(err => {
                done(err);
            })
        })
    })

})
