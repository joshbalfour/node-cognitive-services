const {
    makeRequest,
    verify
} = require('../../lib/api');

const bingNewsSearch = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    /**
	Name: Bing News Search: Category News
	Description: Returns the top news articles by category.
	Example Parameters: {
	"Category": null
}
*/
    self.categoryNews = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Category News",
            "path": "bing/v5.0/news/",
            "method": "GET",
            "serviceId": "56b43f72cf5ff8098cef380a",
            "operationId": "56f02400dbe2d91900c68553",
            "id": "56f02400dbe2d91900c68553",
            "description": "Returns the top news articles by category. For example, you can request the top sports or entertainment articles. For information about specifying categories, see the category query parameter.",
            "serviceName": "Bing News Search",
            "endpoints": [
                "api.cognitive.microsoft.com",
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
                "name": "category",
                "description": "The category of articles to return. For example, Sports articles or Entertainment articles.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value that you may specify is 100.",
                "value": "10",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "freshness",
                "description": "Filter news articles by age. Age refers to the date and time that Bing discovered the article. ",
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
                "name": "headlineCount",
                "description": "The number of headline articles and clusters to return. The default is 12.",
                "value": "12",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. This parameter and the cc query parameter are mutually exclusive—do not specify both.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of news articles to skip before returning articles. ",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "originalImg",
                "description": "A Boolean value that determines whether the image's contentUrl contains a URL that points to a thumbnail of the original article's image or the image itself.",
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter news articles for adult content. ",
                "value": "Moderate",
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


    /**
	Name: Bing News Search: Search
	Description: Returns news articles based on the user's search query. If the search query is empty, the call returns the top news articles.
	Example Parameters: {
	"q": "microsoft",
	"count": "10",
	"offset": "0",
	"mkt": "en-us",
	"safeSearch": "Moderate"
}
*/

    self.search = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Search",
            "path": "bing/v5.0/news/search",
            "method": "GET",
            "serviceId": "56b43f72cf5ff8098cef380a",
            "operationId": "56b449fbcf5ff81038d15cdf",
            "id": "56b449fbcf5ff81038d15cdf",
            "description": "Returns news articles based on the user's search query. If the search query is empty, the call returns the top news articles.",
            "serviceName": "Bing News Search",
            "endpoints": [
                "api.cognitive.microsoft.com",
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
                "name": "q",
                "description": "The user's search query string. If the query string is empty (for example, q=), the response includes the top news stories.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value that you may specify is 100.",
                "value": "10",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "freshness",
                "description": "Filter news articles by age. Age refers to the date and time that Bing discovered the article. ",
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
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. This parameter and the cc query parameter are mutually exclusive—do not specify both.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of news articles to skip before returning articles. ",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "originalImg",
                "description": "A Boolean value that determines whether the image's contentUrl contains a URL that points to a thumbnail of the original article's image or the image itself.",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter news articles for adult content. ",
                "value": null,
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

    /**
	Name: Bing News Search: Trending Topics
	Description: Returns trending news topics that are currently trending on social networks. Available only in the en-US and zh-CN markets.
	Example Parameters: {}
*/

    self.trendingTopics = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Trending Topics",
            "path": "bing/v5.0/news/trendingtopics",
            "method": "GET",
            "serviceId": "56b43f72cf5ff8098cef380a",
            "operationId": "56c7a9a6cf5ff801a090fbdc",
            "id": "56c7a9a6cf5ff801a090fbdc",
            "description": "Returns trending news topics that are currently trending on social networks. Available only in the en-US and zh-CN markets.",
            "serviceName": "Bing News Search",
            "endpoints": [
                "api.cognitive.microsoft.com",
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
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of news articles to return in the response. The actual number delivered may be less than requested. For trending topics, the default is all trending news topics (approximately 55 articles).",
                "value": "55",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. This parameter and the cc query parameter are mutually exclusive—do not specify both.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of news articles to skip before returning articles. ",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter news articles for adult content. ",
                "value": "Moderate",
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

module.exports = bingNewsSearch;