const commonService = require('../commonService');

/**
 * The Image Search API lets you send a search query to Bing and get back a list of relevant images.
 * @augments commonService
 * {@link https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v5-reference|documentation}
 */
class bingImageSearch extends commonService {
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
     * Get insights for an image sent in the POST body.
     * @returns {Promise.<object>}
     */
    imageInsights({ parameters, body }) {

        const operation = {
            "path": "bing/v5.0/images/search",
            "method": "POST",
            "operationId": "571fab09dbe2d933e891028f",
            "parameters": [{
                "name": "q",
                "description": "The user's search query string",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            body: body
        })
    };

    /**
     * Get relevant images for a given query.
     * @returns {Promise.<object>}
     */
    search({ parameters }) {

        const operation = {
            "path": "bing/v5.0/images/search",
            "method": "GET",
            "operationId": "56b4433fcf5ff8098cef380c",
            "parameters": [{
                "name": "q",
                "description": "The user's search query string",
                "value": "",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of image results to return in the response. The actual number delivered may be less than requested.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of image results to skip before returning results.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.\n\n<br>\n<br>\nFull list of supported markets:\n<br>\nes-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US",
                "value": "en-us",
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
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Get currently trending images.
     * @returns {Promise.<object>}
     */
    trending() {

        const operation = {
            "path": "bing/v5.0/images/trending",
            "method": "GET",
            "operationId": "56b44b8ccf5ff81038d15ce0",
        };

        return this.makeRequest({
            operation: operation,
        })
    };
}

module.exports = bingImageSearch;