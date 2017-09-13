const {
    makeRequest,
    verify
} = require('../lib/api');

const bingImageSearch = ({
    API_KEY,
    endpoint
}) => {

    let self = this;

    self.imageInsights = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Image Insights",
            "path": "bing/v5.0/images/search",
            "method": "POST",
            "serviceId": "56b43f0ccf5ff8098cef3808",
            "operationId": "571fab09dbe2d933e891028f",
            "id": "571fab09dbe2d933e891028f",
            "description": "Get insights for an image sent in the POST body. ",
            "serviceName": "Bing Image Search",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "multipart/form-data"
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "q",
                "description": "The user's search query string",
                "value": null,
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);
    };

    self.search = ({
        parameters
    }) => {

        const operation = {
            "name": "Search",
            "path": "bing/v5.0/images/search",
            "method": "GET",
            "serviceId": "56b43f0ccf5ff8098cef3808",
            "operationId": "56b4433fcf5ff8098cef380c",
            "id": "56b4433fcf5ff8098cef380c",
            "description": "Get relevant images for a given query.",
            "serviceName": "Bing Image Search",
            "headers": [],
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "q",
                "description": "The user's search query string",
                "value": "",
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of image results to return in the response. The actual number delivered may be less than requested.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of image results to skip before returning results.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.\n\n<br>\n<br>\nFull list of supported markets:\n<br>\nes-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US",
                "value": "en-us",
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
            }]
        };

        const headers = null;
        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.trending = () => {

        const operation = {
            "name": "Trending",
            "path": "bing/v5.0/images/trending",
            "method": "GET",
            "serviceId": "56b43f0ccf5ff8098cef3808",
            "operationId": "56b44b8ccf5ff81038d15ce0",
            "id": "56b44b8ccf5ff81038d15ce0",
            "description": "Get currently trending images.",
            "serviceName": "Bing Image Search",
            "headers": [],
            "endpoints": [
                "api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        const parameters = null;
        const headers = null;
        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };

    return self;
};

module.exports = bingImageSearch;