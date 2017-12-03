const commonService = require('../commonService');

/**
 * Bing Autosuggest API lets you send a partial search query term to Bing and get back a list of suggested queries that other users have searched on. 
 * For example, as the user enters each character of their search term, you'd call this API and populate the search box's drop-down list with the suggested query strings.
 * @augments commonService
 * {@link https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-autosuggest-api-v5-reference|documentation}
 */
class bingAutosuggest extends commonService {
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
     * Provides suggestions for a given query or partial query.
     * @returns {Promise.<object>}
     */
    suggestions ({ parameters, headers })  {

        const operation = {
            "path": "bing/v5.0/suggestions/",
            "method": "GET",
            "operationId": "56c769a2cf5ff801a090fbd2",
            "headers": [{
                "name": "Accept",
                "description": "Optional request header.",
                "default": "application/json",
                "options": [
                    "application/json",
                    "application/ld+json"
                ],
                "required": false,
                "typeName": "string"
            }, {
                "name": "Accept-Language",
                "description": "A comma-delimited list of languages to use for user interface strings. The list is in decreasing order of preference.",
                "default": null,
                "required": false,
                "typeName": "string"
            }, {
                "name": "User-Agent",
                "description": "The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience.",
                "default": null,
                "required": false,
                "typeName": "string"
            }, {
                "name": "X-MSEdge-ClientID",
                "description": "Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights.",
                "default": null,
                "required": false,
                "typeName": "string"
            }, {
                "name": "X-Search-ClientIP",
                "description": "Optional request header. The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior.",
                "default": null,
                "required": false,
                "typeName": "string"
            }, {
                "name": "X-Search-Location",
                "description": "Optional request header. A semicolon-delimited list of key/value pairs that describe the client's geographical location.",
                "default": null,
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from. ",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "q",
                "description": "The user's search query string.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers
        })
    };

}

module.exports = bingAutosuggest;