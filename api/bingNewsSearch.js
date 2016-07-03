const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const bingNewsSearch = ({
    API_KEY
}) => {

    let self = this;

    /**
	Name: Bing News Search: Category News
	Description: Returns news for a provided category.
	Example Parameters: {
	"Category": null
}
*/
    self.categoryNews = ({
        parameters
    }) => {

        const operation = {
            "name": "Category News",
            "path": "bing/v5.0/news/",
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56b43f72cf5ff8098cef380a",
            "operationId": "56f02400dbe2d91900c68553",
            "id": "56f02400dbe2d91900c68553",
            "description": "Returns news for a provided category.",
            "serviceName": "Bing News Search",
            "headers": {
                "Host": "api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "Category",
                "description": "Specifies which category of news articles the caller wants returned.",
                "value": null,
                "options": [
                    "Business",
                    "Entertainment",
                    "Health",
                    "Politics",
                    "ScienceAndTechnology",
                    "Sports",
                    "US/UK",
                    "World"
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
	Name: Bing News Search: Search
	Description: Get news articles relevant for a given query.
	Example Parameters: {
	"q": "microsoft",
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
            "path": "bing/v5.0/news/search",
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56b43f72cf5ff8098cef380a",
            "operationId": "56b449fbcf5ff81038d15cdf",
            "id": "56b449fbcf5ff81038d15cdf",
            "description": "Get news articles relevant for a given query.",
            "serviceName": "Bing News Search",
            "headers": {
                "Host": "api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "q",
                "description": "The user's search query string",
                "value": "microsoft",
                "options": [
                    "microsoft"
                ],
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of news results to return in the response. The actual number delivered may be less than requested.",
                "value": "10",
                "options": [
                    "10"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of news results to skip before returning results.",
                "value": "0",
                "options": [
                    "0"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
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
	Name: Bing News Search: Trending Topics
	Description: Get trending topics identified by Bing.  These are the same topics shown in the banner at the bottom of the Bing home page.
	Example Parameters: {}
*/
    self.trendingTopics = ({
        parameters
    }) => {

        const operation = {
            "name": "Trending Topics",
            "path": "bing/v5.0/news/trendingtopics",
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56b43f72cf5ff8098cef380a",
            "operationId": "56c7a9a6cf5ff801a090fbdc",
            "id": "56c7a9a6cf5ff801a090fbdc",
            "description": "Get trending topics identified by Bing.	These are the same topics shown in the banner at the bottom of the Bing home page.",
            "serviceName": "Bing News Search",
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

module.exports = bingNewsSearch;