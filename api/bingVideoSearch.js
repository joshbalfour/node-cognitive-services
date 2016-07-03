const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const bingVideoSearch = ({
    API_KEY
}) => {

    let self = this;

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
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56b43f3ccf5ff8098cef3809",
            "operationId": "56b440d2cf5ff8098cef380b",
            "id": "56b440d2cf5ff8098cef380b",
            "description": "Get videos relevant for a given query.",
            "serviceName": "Bing Video Search",
            "headers": {
                "Host": "api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "q",
                "description": "The user's search query string",
                "value": "cats",
                "options": [
                    "cats"
                ],
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of video results to return in the response. The actual number delivered may be less than requested.",
                "value": "10",
                "options": [
                    "10"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of video results to skip before returning results.",
                "value": "0",
                "options": [
                    "0"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.\n\n<br>\n<br>\nFull list of supported markets:\n<br>\nes-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US",
                "value": "en-us",
                "options": [
                    "en-us"
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
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Bing Video Search: Trending
	Description: Get currently trending videos.
	Example Parameters: {}
*/
    self.trending = ({
        parameters
    }) => {

        const operation = {
            "name": "Trending",
            "path": "bing/v5.0/videos/trending",
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56b43f3ccf5ff8098cef3809",
            "operationId": "56b44c36cf5ff81038d15ce1",
            "id": "56b44c36cf5ff81038d15ce1",
            "description": "Get currently trending videos.",
            "serviceName": "Bing Video Search",
            "headers": {
                "Host": "api.cognitive.microsoft.com"
            },
            "parameters": []
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };

    return self;
};

module.exports = bingVideoSearch;