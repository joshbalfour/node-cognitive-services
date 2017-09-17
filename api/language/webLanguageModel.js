const {
    makeRequest
} = require('../../lib/api');

const webLanguageModel = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self.endpoints = [
        "westus.api.cognitive.microsoft.com"
    ];
    self._apiKey = apiKey;
    self._endpoint = endpoint;

    /**
	Name: Web Language Model: Break Into Words
	Description: Insert spaces into a string of words lacking spaces, like a hashtag or part of a URL. Punctuation or exotic characters can prevent a string from being broken, so it’s best to limit input strings to lower-case, alpha-numeric characters.
	Example Parameters: {
	"model": null,
	"text": null,
	"order": null,
	"maxNumOfCandidatesReturned": null
}
*/
    self.breakIntoWords = ({
        parameters
    }) => {

        const operation = {
            "name": "Break Into Words",
            "path": "text/weblm/v1.0/breakIntoWords",
            "method": "POST",
            "serviceId": "55de9ca4e597ed1fd4e2f104",
            "operationId": "55de9ca4e597ed19b0de8a51",
            "id": "55de9ca4e597ed19b0de8a51",
            "description": "Insert spaces into a string of words lacking spaces, like a hashtag or part of a URL. Punctuation or exotic characters can prevent a string from being broken, so it’s best to limit input strings to lower-case, alpha-numeric characters.",
            "serviceName": "Web Language Model",
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "text",
                "description": "The line of text to break into words. If spaces are present, they will be interpreted as hard breaks and maintained, except for leading or trailing spaces, which will be trimmed.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "maxNumOfCandidatesReturned",
                "description": "Max number of candidates that would be returned. If not specified, use default value 5.",
                "value": "5",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Web Language Model: Calculate Conditional Probability
	Description: Calculate the conditional probability that a particular word will follow a given sequence of words.
	Example Parameters: {
	"model": null,
	"order": null
}
*/
    self.calculateConditionalProbability = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Calculate Conditional Probability",
            "path": "text/weblm/v1.0/calculateConditionalProbability",
            "method": "POST",
            "serviceId": "55de9ca4e597ed1fd4e2f104",
            "operationId": "55de9ca4e597ed19b0de8a4e",
            "id": "55de9ca4e597ed19b0de8a4e",
            "description": "Calculate the conditional probability that a particular word will follow a given sequence of words.",
            "serviceName": "Web Language Model",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "requestBody": [{
                "Fields": "queries",
                "Description": "Array of queries"
            }],
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
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

    /**
	Name: Web Language Model: Calculate Joint Probability
	Description: Calculate the joint probability that a particular sequence of words will appear together.
	Example Parameters: {
	"model": null,
	"order": null
}
*/
    self.calculateJointProbability = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Calculate Joint Probability",
            "path": "text/weblm/v1.0/calculateJointProbability",
            "method": "POST",
            "serviceId": "55de9ca4e597ed1fd4e2f104",
            "operationId": "55de9ca4e597ed19b0de8a4f",
            "id": "55de9ca4e597ed19b0de8a4f",
            "description": "Calculate the joint probability that a particular sequence of words will appear together.",
            "serviceName": "Web Language Model",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "requestBody": [{
                "Fields": "queries",
                "Description": "Array of queries"
            }],
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
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

    /**
	Name: Web Language Model: Generate Next Words
	Description: Get the list of words (completions) most likely to follow a given sequence of words.
	Example Parameters: {
	"model": null,
	"words": null,
	"order": null,
	"maxNumOfCandidatesReturned": null
}
*/
    self.generateNextWords = ({
        parameters
    }) => {

        const operation = {
            "name": "Generate Next Words",
            "path": "text/weblm/v1.0/generateNextWords",
            "method": "POST",
            "serviceId": "55de9ca4e597ed1fd4e2f104",
            "operationId": "55de9ca4e597ed19b0de8a50",
            "id": "55de9ca4e597ed19b0de8a50",
            "description": "Get the list of words (completions) most likely to follow a given sequence of words.",
            "serviceName": "Web Language Model",
            "parameters": [{
                "name": "model",
                "description": "Which model to use.",
                "value": null,
                "options": [
                    "title",
                    "anchor",
                    "query",
                    "body"
                ],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "words",
                "description": "A string containing a sequence of words from which to generate the list of words likely to follow. The words should be separated by spaces.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "order",
                "description": "The order of N-gram.",
                "value": "5",
                "options": [
                    "1", "2", "3", "4", "5"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "maxNumOfCandidatesReturned",
                "description": "Max number of candidates that would be returned. If not specified, use default value 5.",
                "value": "5",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Web Language Model: List Available Models
	Description: List models available currently.
	Example Parameters: {}
*/
    self.listAvailableModels = () => {

        const operation = {
            "name": "List Available Models",
            "path": "text/weblm/v1.0/models",
            "method": "GET",
            "serviceId": "55de9ca4e597ed1fd4e2f104",
            "operationId": "565bf87b778daf12447f43c1",
            "id": "565bf87b778daf12447f43c1",
            "description": "List models available currently.",
            "serviceName": "Web Language Model",
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint
        })
    };

    return self;
};

module.exports = webLanguageModel;