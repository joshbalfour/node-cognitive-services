const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Video Indexer V2', () => {

    const client = new cognitive.videoIndexerV2({
        apiKey: config.videoIndexerV2.apiKey
    });

    const videoUrl = 'https://mparnisari.blob.core.windows.net/storage/video_girl_laughing.mp4';
    const videoPath = './test/assets/video_girl_laughing.mp4';

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

    describe.only('Upload Video', () => {
        let accessToken;
        const videoName = 'A girl laughing';
        
        beforeEach('generate an access token', (done) => {
            const requestParams = {
                location: "trial",
                accountId: config.videoIndexerV2.accountId,
                allowEdit: true
            };
            client.getAccountAccessToken(requestParams)
            .then(response => {
                accessToken = response;
                done();
            })
            .catch((err) => {
                done(err);
            })
        });
        
        it(`should return a json with state, "Uploaded" or "Processing", and a video with name, ${videoName} and a Video id`, done => {
            const requestParams = {
                path: videoPath,
                location: "trial",
                accountId: config.videoIndexerV2.accountId,
                accessToken: accessToken,
                name: videoName,
                privacy: 'Public'
            };

            client.uploadVideo(requestParams)
            .then(response => {
                should(response).have.property('name', requestParams.name);
                should(response.state).be.equalOneOf('Processing', 'Uploaded')
                should(response.id).not.be.null();
                done();         
            })
            .catch(err => {
                done(err);
            })
        });
    })
})
