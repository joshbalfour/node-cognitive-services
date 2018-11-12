const commonService = require('../commonService');

/**
 * Video Indexer is a cloud service that enables you to extract the following insights from your videos using artificial intelligence technologies:
 */
class videoIndexerV2 extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     */
    constructor({ apiKey }) {
        const endpoint = "api.videoindexer.ai";
        super({ apiKey, endpoint });
        this.endpoints = [
            endpoint
        ];
    }

    /**
     * Get Accounts - returns the account details associated
     * with an API key.
     * @param {Object} obj
     * @param {string} obj.location
     * @param {boolean} obj.generateAccessTokens
     * @param {boolean} obj.allowEdit
     * @returns {Promise<[Object]>} A promise containing an array of objects
     */
    getAccounts({
            location,
            generateAccessTokens,
            allowEdit,
    }) {
        const operation = {
            parameters: [
                {
                    name: 'location',
                    required: true,
                    type: 'routeParam',
                    typeName: 'string'
                },
                {
                    name: 'generateAccessTokens',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'boolean',
                },{
                    name: 'allowEdit',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'boolean'
                },
            ],
            path: `auth/{location}/Accounts`,
            method: 'GET'
        };

        const requestParameters = {
            location,
            generateAccessTokens,
            allowEdit
        }

        return this.makeRequest({
            operation: operation,
            parameters: requestParameters
        })
    }
}

module.exports = videoIndexerV2;