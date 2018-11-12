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
        const endpoint = "api.videoindexer.ai/";
        super({ apiKey, endpoint });
        this.endpoints = [
            endpoint
        ];
    }

    getAccounts({
            location,
            generateAccessTokens,
            allowEdit,
    }) {
        const operation = {
            parameters: [
                {
                    name: 'location',
                    type: 'queryStringParam'
                },
                {
                    name: 'generateAccessTokens',
                    type: 'queryStringParam'
                },{
                    name: 'allowEdit',
                    type: 'queryStringParam'
                },
            ]
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