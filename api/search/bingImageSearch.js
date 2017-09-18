const {
    makeRequest
} = require('../../lib/api');

const bingImageSearch = ({
    apiKey,
    endpoint
}) => {

    let self = this;
    self.endpoints = [
        "api.cognitive.microsoft.com"
    ],
    self._apiKey = apiKey;
    self._endpoint = endpoint;

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
            
            "parameters": [{
                "name": "q",
                "description": "The user's search query string",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })
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

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

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
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint
        })
    };

    return self;
};

module.exports = bingImageSearch;