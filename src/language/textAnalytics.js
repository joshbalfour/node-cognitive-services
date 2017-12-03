const commonService = require('../commonService');

/**
 * Text Analytics API is a cloud-based service that provides advanced natural language processing over raw text, and includes three main functions: sentiment analysis, key phrase extraction, and language detection.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c7|documentation}
 */
class textAnalytics extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.endpoints = [
            "westus.api.cognitive.microsoft.com",
            "eastus2.api.cognitive.microsoft.com",
            "westcentralus.api.cognitive.microsoft.com",
            "westeurope.api.cognitive.microsoft.com",
            "southeastasia.api.cognitive.microsoft.com"
        ];
    }

    /**
     * Returns the detected language and a numeric score between 0 and 1. 
     * Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.
     * Irrespective of the value, the language with the highest score is returned.
     * @returns {Promise.<object>}
     */
    detectLanguage({ headers, body }) {

        const operation = {
            "path": "text/analytics/v2.0/languages",
            "method": "POST",
            "operationId": "56f30ceeeda5650db055a3c7",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json"
                ],
                "required": false,
                "typeName": "string"
            }],
        };

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        })

    };

    /**
     * Returns a list of strings denoting the key talking points in the input text. 
     * Each document supplied must have a language. Pass in one of: de,en,es,fi,fr,it,ja,pl,pt-BR,pt-PT,sv. 
     * See https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview for the complete list of support languages.
     * @returns {Promise.<object>}
     */
    keyPhrases({ headers, body }) {

        const operation = {
            "path": "text/analytics/v2.0/keyPhrases",
            "method": "POST",
            "operationId": "56f30ceeeda5650db055a3c6",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json"
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        })

    };


    /**
     * Returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. 
     * Sentiment score is generated using classification techniques. 
     * The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings.
     * @returns {Promise.<object>}
     */
    sentiment({ headers, body }) {

        const operation = {
            "path": "text/analytics/v2.0/sentiment",
            "method": "POST",
            "operationId": "56f30ceeeda5650db055a3c9",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json"
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        })

    };

};

module.exports = textAnalytics;