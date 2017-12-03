const commonService = require('../commonService');

/**
 * The Web Search API lets you send a search query to Bing and get back search results that include links to webpages, images, and more. 
 * @augments commonService
 * {@link https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-web-api-v5-reference|documentation}
 */
class bingWebSearch extends commonService {
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
     * Get web, image, news, & videos results for a given query.
	Example Parameters: {
        "q": "bill gates",
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safesearch": "Moderate"
    }
    @returns {Promise.<object>}
    */
    search({ parameters, headers }) {

        const operation = {
            "path": "bing/v5.0/search",
            "method": "GET",
            "operationId": "56b4447dcf5ff8098cef380d",
            "parameters": [{
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of search results to return in the response. The default is 10 and the maximum value that you may specify is 50. The actual number delivered may be less than requested.",
                "value": "10",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "freshness",
                "description": "Filter search results by age. Age refers to the date and time when Bing discovered the webpage.",
                "value": "",
                "options": [
                    "Day",
                    "Week",
                    "Month"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of image results to skip before returning results.",
                "value": "0",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "q",
                "description": "The user's search query string.",
                "value": "",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "responseFilter",
                "description": "A comma-delimited list of answers to include in the response. If you do not specify this parameter, the response includes all search answers for which there's relevant data.",
                "value": "",
                "options": [
                    "Computation",
                    "Images",
                    "News",
                    "RelatedSearches",
                    "SpellSuggestions",
                    "TimeZone",
                    "Videos",
                    "Webpages"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
                "value": "Off",
                "options": [
                    "Off",
                    "Moderate",
                    "Strict"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "textDecorations",
                "description": "A Boolean value that determines whether display strings should contain decoration markers such as hit highlighting characters.",
                "value": "false",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "textFormat",
                "description": "The type of markers to use for text decorations (see the textDecorations query parameter).",
                "value": "false",
                "options": [
                    "Raw",
                    "HTML"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "strin"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers
        })

    };

}

module.exports = bingWebSearch;