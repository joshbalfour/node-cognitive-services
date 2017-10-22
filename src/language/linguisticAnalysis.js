const commonService = require('../commonService');

/**
 * The Linguistic Analysis APIs rovide access to natural language processing (NLP) tools that identify the structure of text. 
 * 
 * The current release provides three types of analysis:
    - Sentence separation and tokenization
    - Part-of-speech tagging
    - Constituency parsing
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/56ea598f778daf01942505ff/operations/56ea5a1cca73071fd4b102bb|documentation}
 */
class linguisticAnalysis extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "56ea598f778daf01942505ff"
        this.endpoints = [
            "westus.api.cognitive.microsoft.com"
        ];
    }

    /**
     * Analyze text with specific analyzers.
     * @returns {Promise.<object>}
     */
    analyzeText({ body }) {

        const operation = {
            "path": "linguistics/v1.0/analyze",
            "method": "POST",
            "operationId": "56ea5a1cca73071fd4b102bb",
            "parameters": [{
                "name": "language",
                "description": "The language of input text.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "analyzerIds",
                "description": "The analyzers array.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "text",
                "description": "The text to be analyzed. Its maximum length is 65536.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })

    };

    /**
     * Returns a list of strings representing which analyzers are currently registered.
     * @returns {Promise.<object>}
     */
    listAnalyzers() {
        
        const operation = {
            "path": "linguistics/v1.0/analyzers",
            "method": "GET",
            "operationId": "56ea59bfca73071fd4b102ba"
        };

        return this.makeRequest({
            operation: operation
        })

    };

};

module.exports = linguisticAnalysis;