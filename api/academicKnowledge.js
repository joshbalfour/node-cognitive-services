const {
    makeRequest,
    verify
} = require('../lib/api');

const academicKnowledge = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self.calcHistogram = ({
        parameters
    }) => {

        const operation = {
            "name": "CalcHistogram",
            "path": "academic/v1.0/calchistogram",
            "method": "GET",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "565d9001ca73072048922d97",
            "id": "565d9001ca73072048922d97",
            "description": "The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "expr",
                "description": "A query expression that specifies the entities over which to calculate histograms.",
                "value": null,
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "attributes",
                "description": "A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Number of results to return.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first result to return.",
                "value": "",
                "required": false,
                "kind": 2,
                "typeName": "number"
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
                    apiKey,
                    endpoint,
                    headers
                })}
            );

    };

    self.calcHistogramPost = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "CalcHistogramPost",
            "path": "academic/v1.0/calchistogram",
            "method": "POST",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "5951f894d2864531c0129ba2",
            "id": "5951f894d2864531c0129ba2",
            "description": "The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        const parameters = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    apiKey,
                    endpoint,
                    headers
                })}
            );

    };

    self.evaluate = ({
        parameters
    }) => {

        const operation = {
            "name": "Evaluate",
            "path": "academic/v1.0/evaluate",
            "method": "GET",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "565d753be597ed16ac3ffc03",
            "id": "565d753be597ed16ac3ffc03",
            "description": "The evaluate REST API is used to return a set of academic entities based on a query expression.",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "expr",
                "description": "A query expression that specifies which entities should be returned.",
                "value": null,
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Number of results to return.",
                "value": "10",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first result to return.",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "orderby",
                "description": "Name of an attribute that is used for sorting the entities. Optionally, ascending/descending can be specified. The format is: name:asc or name:desc.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "attributes",
                "description": "A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.",
                "value": "Id",
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
                    apiKey,
                    endpoint,
                    headers
                })}
            );

    };

    self.evaluatePost = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Evaluate Post",
            "path": "academic/v1.0/evaluate",
            "method": "POST",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "5951f78363b4fb31286b8ef4",
            "id": "5951f78363b4fb31286b8ef4",
            "description": "The evaluate REST API is used to return a set of academic entities based on a query expression.",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        const parameters = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    apiKey,
                    endpoint,
                    headers
                })}
            );
    };

    self.graphSearch = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Graph Search",
            "path": "academic/v1.0/graph/search",
            "method": "POST",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "5951f78363b4fb31286b8ef4",
            "id": "5951f78363b4fb31286b8ef4",
            "description": "The graph query interface powered by Graph Engine allows us to not only query entities that meet certain criteria (e.g. find a paper with a given title), but also perform pattern matching via graph exploration (e.g. detect co-authorship).",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/plain"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "mode",
                "description": "Request type of query. Should be \"json\" or \"lambda\"",
                "value": null,
                "options": ["json", "lambda"],
                "required": true,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    apiKey,
                    endpoint,
                    headers
                })}
            );
    };

    self.interpret = ({
        parameters
    }) => {

        const operation = {
            "name": "Interpret",
            "path": "academic/v1.0/interpret",
            "method": "GET",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "56332331778daf06340c9666",
            "id": "56332331778daf06340c9666",
            "description": "The interpret REST API takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent based on the Academic Graph data and the Academic Grammar. To provide an interactive experience, you can call this method repeatedly after each character entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. If your application does not want auto-completion, you should set the complete parameter to 0..",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "query",
                "description": "Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions.",
                "value": null,
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "complete",
                "description": "1 means that auto-completion suggestions are generated based on the grammar and graph data.",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Maximum number of interpretations to return.",
                "value": "10",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "timeout",
                "description": "Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned.",
                "value": null,
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
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
                    apiKey,
                    endpoint,
                    headers
                })}
            );

    };

    self.interpretPost = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Interpret Post",
            "path": "academic/v1.0/interpret",
            "method": "POST",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "5951f6260ecf2621902c89e4",
            "id": "5951f6260ecf2621902c89e4",
            "description": "The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        const parameters = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    apiKey,
                    endpoint,
                    headers
                })}
            );

    };

    self.getSimilarity = ({
        parameters
    }) => {

        const operation = {
            "name": "Get similarity",
            "path": "academic/v1.0/similarity",
            "method": "GET",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "58076bdadcf4c40708f83791",
            "id": "58076bdadcf4c40708f83791",
            "description": "The similarity REST API is used to calculate a floating point value based on 2 text inputs.",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "s1",
                "description": "String to be compared, input length is bounded by the limitation of the length of URL. When the strings are too long to be processed using GET, use POST instead.",
                "value": null,
                "required": true,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "s2",
                "description": "String to be compared, input length is bounded by the limitation of the length of URL. When the strings are too long to be processed using GET, use POST instead.",
                "value": null,
                "required": true,
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
                    apiKey,
                    endpoint,
                    headers
                })}
            );

    };

    self.postSimilarity = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Post similarity",
            "path": "academic/v1.0/similarity",
            "method": "POST",
            "serviceId": "56332331778daf02acc0a50b",
            "operationId": "58172b97dbe2d91538cc000b",
            "id": "58172b97dbe2d91538cc000b ",
            "description": "The similarity REST API is used to calculate a floating point value based on 2 text inputs.",
            "serviceName": "Academic Knowledge",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/x-www-form-urlencoded"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": []
        };

        const parameters = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    apiKey,
                    endpoint,
                    headers
                })}
            );

    };

    return self;
};

module.exports = academicKnowledge;