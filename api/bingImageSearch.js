const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const bingImageSearch = ({
    API_KEY
}) => {

    let self = this;

    /**
			Name: Bing Image Search: Image Insights
			Description: Get insights for an image sent in the POST body.
<br/>
<br/>
See full documentation for this API <a target="_blank" href="https://msdn.microsoft.com/en-us/library/dn760791.aspx">here<a>
			Example Parameters: {}
		*/
    self.imageInsights = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Image Insights",
            "path": "bing/v5.0/images/search",
            "host": "api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56b43f0ccf5ff8098cef3808",
            "operationId": "571fab09dbe2d933e891028f",
            "id": "571fab09dbe2d933e891028f",
            "description": "Get insights for an image sent in the POST body.\n<br/>\n<br/>\nSee full documentation for this API <a target=\"_blank\" href=\"https://msdn.microsoft.com/en-us/library/dn760791.aspx\">here<a>",
            "serviceName": "Bing Image Search",
            "requestBody": "An image to retrieve insights for",
            "headers": {
                "Content-Type": "multipart/form-data",
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
    /**
	Name: Bing Image Search: Search
	Description: Get relevant images for a given query.
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
            "path": "bing/v5.0/images/search",
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56b43f0ccf5ff8098cef3808",
            "operationId": "56b4433fcf5ff8098cef380c",
            "id": "56b4433fcf5ff8098cef380c",
            "description": "Get relevant images for a given query.",
            "serviceName": "Bing Image Search",
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
                "description": "The number of image results to return in the response. The actual number delivered may be less than requested.",
                "value": "10",
                "options": [
                    "10"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of image results to skip before returning results.",
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
	Name: Bing Image Search: Trending
	Description: Get currently trending images.
	Example Parameters: {}
*/
    self.trending = ({
        parameters
    }) => {

        const operation = {
            "name": "Trending",
            "path": "bing/v5.0/images/trending",
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56b43f0ccf5ff8098cef3808",
            "operationId": "56b44b8ccf5ff81038d15ce0",
            "id": "56b44b8ccf5ff81038d15ce0",
            "description": "Get currently trending images.",
            "serviceName": "Bing Image Search",
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

module.exports = bingImageSearch;