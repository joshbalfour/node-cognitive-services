const {
    makeRequest
} = require('../../lib/api');

const bingSpellCheck = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self.endpoints = [
        "api.cognitive.microsoft.com"
    ];
    self._apiKey = apiKey;
    self._endpoint = endpoint;

    /**
	Name: Bing Spell Check: Spell Check
	Description: The Spell Check API lets you perform contextual grammar and spell checking.
	Example Parameters: {
	"mode": null
}
*/
    self.spellCheck = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Spell Check",
            "path": "bing/v5.0/spellcheck/",
            "method": "POST",
            "serviceId": "56e73033cf5ff80c2008c679",
            "operationId": "56e73036cf5ff81048ee6727",
            "id": "56e73036cf5ff81048ee6727",
            "description": null,
            "serviceName": "Bing Spell Check",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "mode",
                "description": "Mode of spellcheck:\
                Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.\
                Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.",
                "value": null,
                "options": [
                    "spell",
                    "proof"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "For proof mode, only support en-us, es-es, pt-br, For spell mode, support all language codes.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        const headers = {
            "Content-type": "application/x-www-form-urlencoded"
        };

		return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };

    return self;
};

module.exports = bingSpellCheck;