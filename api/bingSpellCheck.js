const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const bingSpellCheck = ({
    API_KEY
}) => {

    let self = this;

    /**
	Name: Bing Spell Check: Spell Check
	Description: null
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
            "host": "api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56e73033cf5ff80c2008c679",
            "operationId": "56e73036cf5ff81048ee6727",
            "id": "56e73036cf5ff81048ee6727",
            "description": null,
            "serviceName": "Bing Spell Check",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "mode",
                "description": "Mode of spellcheck:\n<ul><li>Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.</li>\n<li>Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.</li></ul>\n",
                "value": null,
                "options": [
                    "spell",
                    "proof"
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

    return self;
};

module.exports = bingSpellCheck;