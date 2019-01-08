const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('navJoin', () => {

    const client = new cognitive.navJoin({
        apiKey: config.navJoin.apiKey
    });

    describe('Get nav join results', () => {
        it('should return response', (done) => {
            const parameters = {
                startPoint: "47.677164,-122.115371",
                routeMode: "walking",
                categoryIds: "90265"
            };

            client.getNavJoinResults({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })
})