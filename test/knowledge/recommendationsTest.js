const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Recommendations', () => {

    const client = new cognitive.recommendations({
        apiKey: config.recommendations.apiKey,
        endpoint: config.recommendations.endpoint
    });

})