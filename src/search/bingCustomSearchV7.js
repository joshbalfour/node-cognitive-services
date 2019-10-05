const commonService = require('../commonService');

/**
 * The Custom Search API lets you send a search query to Bing and get back web pages from the slice of Web that your Custom
 * Search instance defines.
 * @augments commonService
 * For information about configuring a Custom Search instance,
 * {@link https://docs.microsoft.com/azure/cognitive-services/bing-custom-search/define-your-custom-view}
 */
class bingCustomSearchV7 extends commonService {
    /**
     * Constructor
     * @param apiKey
     */
    constructor({ apiKey }) {
        const endpoint = "api.cognitive.microsoft.com";
        super({ apiKey, endpoint });
        this.endpoints = [
            endpoint,
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
            "path": "bingcustomsearch/v7.0/search",
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
                "name": "customConfig",
                "description": "Unique identifier that identifies your custom search instance.",
                "value": "",
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

module.exports = bingCustomSearchV7;
