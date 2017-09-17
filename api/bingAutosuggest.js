const {
    makeRequest,
    verify
} = require('../lib/api');

const bingAutosuggest = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self.suggestions = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Suggestions",
            "path": "bing/v5.0/suggestions/",
            "method": "GET",
            "serviceId": "56c7694ecf5ff801a090fbd1",
            "operationId": "56c769a2cf5ff801a090fbd2",
            "id": "56c769a2cf5ff801a090fbd2",
            "description": "This operation provides suggestions for a given query or partial query.",
            "serviceName": "Bing Autosuggest",
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
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
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from. ",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "q",
                "description": "The user's search query string.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        const body = null;

		return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    apiKey,
                    endpoint,
                    headers
                })}
            );
    };

    return self;
};

module.exports = bingAutosuggest;