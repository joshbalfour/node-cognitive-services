const commonService = require('../commonService');

/**
 * The Web Search API lets you send a search query to Bing and get back search results that include links to webpages, images, and more. 
 * @augments commonService
 * {@link https://docs.microsoft.com/en-gb/rest/api/cognitiveservices/bing-web-api-v7-reference|documentation}
 */
class bingWebSearchV7 extends commonService {
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
            "api.cognitive.microsoft.com"
        ];
        this.headers = [
            {
                "name": "Accept",
                "options": [
                    "application/json",
                    "application/ld+json"
                ],
                "required": false,
                "typeName": "string"
            },
            {
                "name": "Accept-Language",
                "description": "A comma-delimited list of languages to use for user interface strings. The list is in decreasing order of preference. \
                This header and the setLang query parameter are mutually exclusive—do not specify both.\
                If you set this header, you must also specify the cc query parameter.\
                Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the mkt and setLang query parameters.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "Pragma",
                "description": "By default, Bing returns cached content, if available. To prevent cached content, set the Pragma header to no-cache.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "User-Agent",
                "description": "The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience.\
                Although optional, you are encouraged to always specify this header.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "X-MSEdge-ClientID",
                "description": "Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables\
                1) the API consumer to receive a consistent user experience, and \
                2) higher click-through rates via better quality of results from the Bing APIs.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "X-MSEdge-ClientIP",
                "description": "The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior.\
                Although optional, you are encouraged to always specify this header and the X-Search-Location header.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "X-Search-Location",
                "description": "A semicolon-delimited list of key/value pairs that describe the client's geographical location.\
                Bing uses the location information to determine safe search behavior and to return relevant local content.\
                Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location:\
                - lat—Required. The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes.\
                - long—Required. The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes.\
                - re—Required. The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup.\
                - ts—Optional. The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.)\
                - head—Optional. The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero.\
                - sp—Optional. The horizontal velocity (speed), in meters per second, that the client device is traveling.\
                - alt—Optional. The altitude of the client device, in meters.\
                - are—Optional. The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key.",
                "required": false,
                "typeName": "string"
            }
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
            "path": "bing/v7.0/search",
            "method": "GET",
            "operationId": "56b4447dcf5ff8098cef380d",
            "headers": this.headers,
            "parameters": [{
                "name": "answerCount",
                "description": "The number of answers that you want the response to include.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from. ",
                "options": ['AR', 'AU', 'AT', 'BE', 'BR', 'CA', 'CL', 'DK', 'FI', 'FR', 'DE', 'HK', 'IN',
                'ID', 'IT', 'JP', 'KR', 'MY', 'MX', 'NL', 'NZ', 'NO', 'CN', 'PL', 'PT', 'PH',
                'RU', 'SA', 'ZA', 'ES', 'SE', 'CH', 'TW', 'TR', 'GB', 'US'],
                "required": false,               
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of search results to return in the response. The default is 10 and the maximum value that you may specify is 50. The actual number delivered may be less than requested.",
                "value": 10,
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
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results.\
                The market must be in the form {language code}-{country code}.\
                This parameter and the cc query parameter are mutually exclusive—do not specify both.",
                "options": ['es-AR','en-AU','de-AT','nl-BE','fr-BE','pt-BR','en-CA','fr-CA','es-CL','da-DK','fi-FI','fr-FR','de-DE','zh-HK',
                'en-IN','en-ID','en-IE','it-IT','ja-JP','ko-KR','en-MY','es-MX','nl-NL','en-NZ','no-NO','zh-CN','pl-PL','pt-PT','en-PH','ru-RU','ar-SA','en-ZA',
                'es-ES','sv-SE','fr-CH','de-CH','zh-TW','tr-TR','en-GB','en-US','es-US'],
                "value": "en-US",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of image results to skip before returning results.",
                "value": 0,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "promote",
                "description": "A comma-delimited list of answers that you want the response to include regardless of their ranking.\
                For example, if you set answerCount) to two (2) so Bing returns the top two ranked answers, but you also want the response to include news, you'd set promote to news.",
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

module.exports = bingWebSearchV7;