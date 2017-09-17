const {
    makeRequest
} = require('../../lib/api');

const bingVideoSearch = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self._apiKey = apiKey;
    self._endpoint = endpoint;

    /**
	Name: Bing Video Search: Search
	Description: Get videos relevant for a given query.
	Example Parameters: {
	"q": "cats",
	"count": "10",
	"offset": "0",
	"mkt": "en-us",
	"safeSearch": "Moderate"
}
*/
    self.search = ({
        parameters
    }) => {

        const operation = {
            "name": "Search",
            "path": "bing/v5.0/videos/search",
            "method": "GET",
            "serviceId": "56b43f3ccf5ff8098cef3809",
            "operationId": "56b440d2cf5ff8098cef380b",
            "id": "56b440d2cf5ff8098cef380b",
            "description": "Get videos relevant for a given query.",
            "serviceName": "Bing Video Search",
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "id",
                "description": "An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "q",
                "description": "The user's search query string",
                "value": "",
                "required": true,
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
                "description": "The number of video results to return in the response. The actual number delivered may be less than requested.",
                "value": "",
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
                "name": "offset",
                "description": "The zero-based offset that indicates the number of video results to skip before returning results.",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}.",
                "value": "",
                "options": [
                    "es-AR","en-AU","de-AT","nl-BE","fr-BE","pt-BR","en-CA","fr-CA","es-CL","da-DK","fi-FI","fr-FR","de-DE","zh-HK","en-IN","en-ID","en-IE","it-IT","ja-JP","ko-KR","en-MY","es-MX","nl-NL","en-NZ","no-NO","zh-CN","pl-PL","pt-PT","en-PH","ru-RU","ar-SA","en-ZA","es-ES","sv-SE","fr-CH","de-CH","zh-TW","tr-TR","en-GB","en-US","es-US"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
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
            }, {
                "name": "pricing",
                "description": "Filter videos by price.",
                "value": "",
                "options": [
                    "Free",
                    "Paid",
                    "All"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "resolution",
                "description": "Filter videos by resolution.",
                "value": "",
                "options": [
                    "480p",
                    "720p",
                    "1080p",
                    "All"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "videoLength",
                "description": "Filter videos by length.",
                "value": "",
                "options": [
                    "Short",
                    "Medium",
                    "Long",
                    "All"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Bing Video Search: Trending
	Description: Get currently trending videos.
	Example Parameters: {}
*/
    self.trending = () => {

        const operation = {
            "name": "Trending",
            "path": "bing/v5.0/videos/trending",
            "method": "GET",
            "serviceId": "56b43f3ccf5ff8098cef3809",
            "operationId": "56b44c36cf5ff81038d15ce1",
            "id": "56b44c36cf5ff81038d15ce1",
            "description": "Get currently trending videos.",
            "serviceName": "Bing Video Search",
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "id",
                "description": "An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.",
                "value": "",
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
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}.",
                "value": "",
                "options": [
                    "es-AR","en-AU","de-AT","nl-BE","fr-BE","pt-BR","en-CA","fr-CA","es-CL","da-DK","fi-FI","fr-FR","de-DE","zh-HK","en-IN","en-ID","en-IE","it-IT","ja-JP","ko-KR","en-MY","es-MX","nl-NL","en-NZ","no-NO","zh-CN","pl-PL","pt-PT","en-PH","ru-RU","ar-SA","en-ZA","es-ES","sv-SE","fr-CH","de-CH","zh-TW","tr-TR","en-GB","en-US","es-US"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
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
            }, {
                "name": "modulesRequested",
                "description": "A comma-delimited list of one or more insights to request. (When you URL encode the query string, the commas change to %2C.)",
                "value": "false",
                "options": [
                    "All",
                    "RelatedVideos",
                    "VideoResult"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint
        })

    };

        /**
	Name: Bing Video Search: Details
	Description: Get details about a video.
	Example Parameters: {
	"id": "cats",
	"modulesRequested": 
}
*/
    self.details = ({
        parameters
    }) => {

        const operation = {
            "name": "Details",
            "path": "bing/v5.0/videos/details",
            "method": "GET",
            "serviceId": "56b43f3ccf5ff8098cef3809",
            "operationId": "56b440d2cf5ff8098cef380b",
            "id": "56b440d2cf5ff8098cef380b",
            "description": "Get videos relevant for a given query.",
            "serviceName": "Bing Video Search",
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "id",
                "description": "An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.",
                "value": "",
                "required": true,
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
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}.",
                "value": "",
                "options": [
                    "es-AR","en-AU","de-AT","nl-BE","fr-BE","pt-BR","en-CA","fr-CA","es-CL","da-DK","fi-FI","fr-FR","de-DE","zh-HK","en-IN","en-ID","en-IE","it-IT","ja-JP","ko-KR","en-MY","es-MX","nl-NL","en-NZ","no-NO","zh-CN","pl-PL","pt-PT","en-PH","ru-RU","ar-SA","en-ZA","es-ES","sv-SE","fr-CH","de-CH","zh-TW","tr-TR","en-GB","en-US","es-US"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
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
            }, {
                "name": "modulesRequested",
                "description": "A comma-delimited list of one or more insights to request. (When you URL encode the query string, the commas change to %2C.)",
                "value": "false",
                "options": [
                    "All",
                    "RelatedVideos",
                    "VideoResult"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "pricing",
                "description": "Filter videos by price.",
                "value": "",
                "options": [
                    "Free",
                    "Paid",
                    "All"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "resolution",
                "description": "Filter videos by resolution.",
                "value": "",
                "options": [
                    "480p",
                    "720p",
                    "1080p",
                    "All"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "videoLength",
                "description": "Filter videos by length.",
                "value": "",
                "options": [
                    "Short",
                    "Medium",
                    "Long",
                    "All"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    return self;
};

module.exports = bingVideoSearch;