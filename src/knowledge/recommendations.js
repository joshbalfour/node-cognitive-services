const commonService = require('../commonService');

/**
 * The Recommendations API identifies consumption patterns from your transaction information in order to provide recommendations. These recommendations can help your customers more easily discover items that they may be interested in. By showing your customers products that they are more likely to be interested in, you will, in turn, increase your sales.
 * @augments commonService
 * {@link https://github.com/Microsoft/Product-Recommendations/blob/master/doc/api-reference.md|documentation}
 */
class recommendations extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        var validateEndpoint = false;
        super({ apiKey, endpoint, validateEndpoint });
        this.apiKeyHeaderName = 'x-api-key';
    }

    /**
     * Lists all models.
     * @returns {Promise.<string>}  ID of operation
    */
    getAllModels() {

        const operation = {
            "path": "api/models",
            "method": "GET",
        };

        return this.makeRequest({
            operation: operation
        });

    };

};

module.exports = recommendations;