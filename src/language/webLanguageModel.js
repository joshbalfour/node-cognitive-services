const commonService = require('../commonService');

/**
 * Using this API, your application can leverage the power of big data through language models trained on web-scale corpora collected by Bing in the EN-US market.
 * 
 * These smoothed backoff N-gram language models, supporting Markov order up to 5, are trained on the following corpora:
    - Web page body text
    - Web page title text
    - Web page anchor text
    - Web search query text

The Web LM REST API supports four lookup operations:

- Joint (log10) probability of a sequence of words.
- Conditional (log10) probability of one word given a sequence of preceding words.
- List of words (completions) most likely to follow a given sequence of words.
- Word breaking of strings that contain no spaces.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a51|documentation}
 */
class webLanguageModel extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "55de9ca4e597ed1fd4e2f104"
        this.endpoints = [
            "westus.api.cognitive.microsoft.com"
        ];
    }


    /**
     * Insert spaces into a string of words lacking spaces, like a hashtag or part of a URL. Punctuation or exotic characters can prevent a string from being broken, so it’s best to limit input strings to lower-case, alpha-numeric characters.
	Example Parameters: {
        "model": null,
        "text": null,
        "order": null,
        "maxNumOfCandidatesReturned": null
    }
    @returns {Promise.<object>}
    */
    breakIntoWords({ parameters }) {

        const operation = {
            "path": "text/weblm/v1.0/breakIntoWords",
            "method": "POST",
            "operationId": "55de9ca4e597ed19b0de8a51",
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "text",
                "description": "The line of text to break into words. If spaces are present, they will be interpreted as hard breaks and maintained, except for leading or trailing spaces, which will be trimmed.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "maxNumOfCandidatesReturned",
                "description": "Max number of candidates that would be returned. If not specified, use default value 5.",
                "value": "5",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Calculate the conditional probability that a particular word will follow a given sequence of words.
    Example Parameters: {
        "model": null,
        "order": null
    }
    @returns {Promise.<object>}
    */
    calculateConditionalProbability({ parameters, headers, body }) {

        const operation = {
            "path": "text/weblm/v1.0/calculateConditionalProbability",
            "method": "POST",
            "operationId": "55de9ca4e597ed19b0de8a4e",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "queries",
                "description": "Array of queries",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
     * Calculate the joint probability that a particular sequence of words will appear together.
    Example Parameters: {
        "model": null,
        "order": null
    }
    @returns {Promise.<object>}
    */
    calculateJointProbability({ parameters, headers, body }) {

        const operation = {
            "path": "text/weblm/v1.0/calculateJointProbability",
            "method": "POST",
            "operationId": "55de9ca4e597ed19b0de8a4f",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "queries",
                "description": "Array of queries",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };

    /**
     * Get the list of words (completions) most likely to follow a given sequence of words.
    Example Parameters: {
        "model": null,
        "words": null,
        "order": null,
        "maxNumOfCandidatesReturned": null
    }
    @returns {Promise.<object>}
    */
    generateNextWords({ parameters }) {

        const operation = {
            "path": "text/weblm/v1.0/generateNextWords",
            "method": "POST",
            "operationId": "55de9ca4e597ed19b0de8a50",
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "words",
                "description": "A string containing a sequence of words from which to generate the list of words likely to follow. The words should be separated by spaces.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "maxNumOfCandidatesReturned",
                "description": "Max number of candidates that would be returned. If not specified, use default value 5.",
                "value": "5",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * List models available currently.
     * @returns {Promise.<object>}
    */
    listAvailableModels() {

        const operation = {
            "path": "text/weblm/v1.0/models",
            "method": "GET",
            "operationId": "565bf87b778daf12447f43c1",
        };

        return this.makeRequest({
            operation: operation,
        })
    };
};

module.exports = webLanguageModel;