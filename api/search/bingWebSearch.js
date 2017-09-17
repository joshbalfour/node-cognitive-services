const {
    makeRequest,
    verify
} = require('../../lib/api');

const bingWebSearch = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    /**
	Name: Bing Web Search: Search
	Description: Get web, image, news, & videos results for a given query.
	Example Parameters: {
	"q": "bill gates",
	"count": "10",
	"offset": "0",
	"mkt": "en-us",
	"safesearch": "Moderate"
}
*/
    self.search = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Search",
            "path": "bing/v5.0/search",
            "method": "GET",
            "serviceId": "56b43eeccf5ff8098cef3807",
            "operationId": "56b4447dcf5ff8098cef380d",
            "id": "56b4447dcf5ff8098cef380d",
            "description": "Get web, image, news, & videos results for a given query.",
            "serviceName": "Bing Web Search",
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of search results to return in the response. The default is 10 and the maximum value that you may specify is 50. The actual number delivered may be less than requested.",
                "value": "10",
                "required": false,
                "kind": 2,
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
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of image results to skip before returning results.",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "q",
                "description": "The user's search query string.",
                "value": "",
                "required": true,
                "kind": 2,
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
                "kind": 2,
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
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "textDecorations",
                "description": "A Boolean value that determines whether display strings should contain decoration markers such as hit highlighting characters.",
                "value": "false",
                "options": [
                    "true",
                    "false"
                ],
                "required": false,
                "kind": 2,
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
                "kind": 2,
                "typeName": "strin"
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

module.exports = bingWebSearch;