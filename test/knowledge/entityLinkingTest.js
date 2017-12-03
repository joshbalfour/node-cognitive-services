const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Entity linking', () => {

    const client = new cognitive.entityLinking({
        apiKey: config.entityLinking.apiKey,
        endpoint: config.entityLinking.endpoint
    });

    describe('Link entity', () => {
        it('should return response', (done) => {
            const body = "For months, the four scientific instruments at the heart of the James Webb Space Telescope have been sealed in what looks like a huge pressure cooker. It's a test\
            chamber that simulates the grueling operating conditions they will face after Webb is launched into orbit in 2018. But in fact, \"pressure cooker\" is an apt metaphor for the whole\ project. The infrared Webb observatory is the biggest, most complex, and most expensive science mission that NASA has ever attempted. Like that of its predecessor, the Hubble Space\ Telescope, Webb's construction has been plagued by redesigns, schedule slips, and cost overruns that have strained relationships with contractors, international partners, and\ supporters in the U.S. Congress. Lately the project has largely stuck to its schedule and its $8 billion budget. But plenty could still go wrong, and the stakes are high: Both the\ future of space-based astronomy and NASA's ability to build complex science missions depend on its success.";

            const parameters = {
                'offset': 0
            };

            client.linkEntity({
                parameters,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['entities'])
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})