const commonService = require('../commonService');

/**
 * The Bing Entity Search API returns entities.
 * @augments commonService
 * {@link https://dev.cognitive.microsoft.com/docs/services/7a3fb374be374859a823b79fd938cc65/operations/52069701a465405ab3286f82|documentation}
 */
class bingEntitySearch extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "7a3fb374be374859a823b79fd938cc65"
        this.endpoints = [
            "api.cognitive.microsoft.com"
        ];
    }

    /**
     * Get entities and places results for a given query.
     * @returns {Promise.<object>}
     */
    getEntities({ parameters }) {

        const operation = {
            "path": "bing/v7.0/entities",
            "method": "GET",
            "operationId": "52069701a465405ab3286f82",
            "headers": this.headers,
            "parameters": [{
                "name": "q",
                "description": "Query",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; \
                however, it could be a different country if the user is not located in a country where Bing delivers results.\
                The market must be in the form 'language code-country code'. For example, en-US.",
                "options": ["en-us"],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of search results to return in the response. The actual number delivered may be less than requested.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of search results to skip before returning results.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "safesearch",
                "description": "A filter used to filter results for adult content.",
                "options": ["off", 'moderate', 'strict'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }
}

module.exports = bingEntitySearch;