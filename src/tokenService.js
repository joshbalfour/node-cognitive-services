const commonService = require('./commonService');

/**
 * Token service
 * 
 * @augments commonService
 */
class tokenService extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     */
    constructor({ apiKey }) {
        const endpoint = "api.cognitive.microsoft.com";
        super({ apiKey, endpoint });
        this.endpoints = [
            endpoint
        ];
    }

    /**
    Get JWT authorization token
    
    @returns {Promise.<string>}
    */
    getToken() {

        const operation = {
            "path": "sts/v1.0/issueToken",
            "method": "POST"
        };

        return this.makeRequest({
            operation: operation
        })
    }
};

module.exports = tokenService;