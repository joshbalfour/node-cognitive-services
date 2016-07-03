const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const bingAutosuggest = ({
    API_KEY
}) => {

    let self = this;

    /**
	Name: Bing Autosuggest: Suggestions
	Description: This operation provides suggestions for a given query or partial query.
	Example Parameters: {
	"q": "bill g"
}
*/
    self.suggestions = ({
        parameters
    }) => {

        const operation = {
            "name": "Suggestions",
            "path": "bing/v5.0/suggestions/",
            "host": "api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56c7694ecf5ff801a090fbd1",
            "operationId": "56c769a2cf5ff801a090fbd2",
            "id": "56c769a2cf5ff801a090fbd2",
            "description": "This operation provides suggestions for a given query or partial query.",
            "serviceName": "Bing Autosuggest",
            "headers": {
                "Host": "api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "q",
                "description": "Query",
                "value": "bill g",
                "options": [
                    "bill g"
                ],
                "required": true,
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

module.exports = bingAutosuggest;