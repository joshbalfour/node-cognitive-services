const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const academicKnowledge = ({
    API_KEY
}) => {

    let self = this;

    /**
	Name: Academic Knowledge: CalcHistogram
	Description: The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.
	Example Parameters: {
	"expr": null,
	"model": "latest",
	"attributes": null,
	"count": "10",
	"offset": "0"
}
*/
    self.calcHistogram = ({
        parameters
    }) => {

        const operation = {
            "name": "CalcHistogram",
            "path": "academic/v1.0/calchistogram",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "565d9001ca73072048922d97",
            "id": "565d9001ca73072048922d97",
            "description": "The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.",
            "serviceName": "Academic Knowledge",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "expr",
                "description": "A query expression that specifies the entities over which to calculate histograms.\n",
                "value": null,
                "options": [],
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "options": [
                    "beta-2015",
                    "latest"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "attributes",
                "description": "A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Number of results to return.",
                "value": "10",
                "options": [
                    "10"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first result to return.",
                "value": "0",
                "options": [
                    "0"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
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
	Name: Academic Knowledge: Evaluate
	Description: The evaluate REST API is used to return a set of academic entities based on a query expression.
	Example Parameters: {
	"expr": null,
	"model": "latest",
	"count": "10",
	"offset": "0",
	"orderby": null,
	"attributes": "Id"
}
*/
    self.evaluate = ({
        parameters
    }) => {

        const operation = {
            "name": "Evaluate",
            "path": "academic/v1.0/evaluate",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "565d753be597ed16ac3ffc03",
            "id": "565d753be597ed16ac3ffc03",
            "description": "The evaluate REST API is used to return a set of academic entities based on a query expression.",
            "serviceName": "Academic Knowledge",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "expr",
                "description": "A query expression that specifies which entities should be returned.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "options": [
                    "beta-2015",
                    "latest"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Number of results to return.",
                "value": "10",
                "options": [
                    "10"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first result to return.",
                "value": "0",
                "options": [
                    "0"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "orderby",
                "description": "Name of an attribute that is used for sorting the entities. Optionally, ascending/descending can be specified. The format is: name:asc or name:desc.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "attributes",
                "description": "A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.",
                "value": "Id",
                "options": [
                    "Id"
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
			Name: Academic Knowledge: Interpret
			Description: The interpret REST API takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent based on the Academic Graph data and the Academic Grammar.
To provide an interactive experience, you can call this method repeatedly after each character entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. If your application does not want auto-completion, you should set the complete parameter to 0.
			Example Parameters: {
			"query": null,
			"complete": "0",
			"count": "10",
			"offset": null,
			"timeout": null,
			"model": "latest"
		}
		*/
    self.interpret = ({
        parameters
    }) => {

        const operation = {
            "name": "Interpret",
            "path": "academic/v1.0/interpret",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "56332331778daf06340c9666",
            "id": "56332331778daf06340c9666",
            "description": "The interpret REST API takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent based on the Academic Graph data and the Academic Grammar.\nTo provide an interactive experience, you can call this method repeatedly after each character entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. If your application does not want auto-completion, you should set the complete parameter to 0.",
            "serviceName": "Academic Knowledge",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "query",
                "description": "Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "complete",
                "description": "1 means that auto-completion suggestions are generated based on the grammar and graph data.",
                "value": "0",
                "options": [
                    "0"
                ],
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "count",
                "description": "Maximum number of interpretations to return.",
                "value": "10",
                "options": [
                    "10"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3.",
                "value": null,
                "options": [
                    "0"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "timeout",
                "description": "Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned.",
                "value": null,
                "options": [
                    "1000"
                ],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "options": [
                    "beta-2015",
                    "latest"
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

module.exports = academicKnowledge;