
const commonService = require('../commonService');

/**
 * The Microsoft Academic Graph is a heterogeneous graph containing scientific publication records, citation relationships between those publications, 
 * as well as authors, institutions, journals, conferences, and fields of study. 
 * This graph is used to power experiences in Bing, Cortana, Word, and in Microsoft Academic.
 * The graph is currently being updated on a weekly basis.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/56332331778daf02acc0a50b/operations/565d9001ca73072048922d97|documentation}
 */
class academicKnowledge extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.endpoints = [
            "westus.api.cognitive.microsoft.com",
            "api.labs.cognitive.microsoft.com"
        ];
    }


    /**
     * Calculate the distribution of attribute values for a set of paper entities.
     * @returns {Promise.<object>}
     */
    calcHistogram({ parameters }) {

        const operation = {
            "path": "academic/v1.0/calchistogram",
            "method": "GET",
            "operationId": "565d9001ca73072048922d97",
            "parameters": [{
                "name": "expr",
                "description": "A query expression that specifies the entities over which to calculate histograms.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "attributes",
                "description": "A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Number of results to return.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first result to return.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Calculate the distribution of attribute values for a set of paper entities.
     * @returns {Promise.<object>}
     */
    calcHistogramPost({ body }) {

        const operation = {
            "path": "academic/v1.0/calchistogram",
            "method": "POST",
            "operationId": "5951f894d2864531c0129ba2"
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': "application/x-www-form-urlencoded"},
            body: body
        })

    };

    /**
     * Return a set of academic entities based on a query expression.
     * @returns {Promise.<object>}
     */
    evaluate({ parameters }) {

        const operation = {
            "path": "academic/v1.0/evaluate",
            "method": "GET",
            "operationId": "565d753be597ed16ac3ffc03",
            "parameters": [{
                "name": "expr",
                "description": "A query expression that specifies which entities should be returned.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Number of results to return.",
                "value": "10",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first result to return.",
                "value": "0",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "orderby",
                "description": "Name of an attribute that is used for sorting the entities. Optionally, ascending/descending can be specified. The format is: name:asc or name:desc.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "attributes",
                "description": "A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.",
                "value": "Id",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Return a set of academic entities based on a query expression.
     * @returns {Promise.<object>}
     */
    evaluatePost({ body }) {

        const operation = {
            "path": "academic/v1.0/evaluate",
            "method": "POST",
            "operationId": "5951f78363b4fb31286b8ef4",
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': "application/x-www-form-urlencoded"},
            body: body
        })
    };

    /**
     * Allows us to not only query entities that meet certain criteria (e.g. find a paper with a given title), bu
     * t also perform pattern matching via graph exploration (e.g. detect co-authorship).
     * @returns {Promise.<object>}
     */
    graphSearch({ parameters, headers, body }) {

        const operation = {
            "path": "academic/v1.0/graph/search",
            "method": "POST",
            "operationId": "5951f78363b4fb31286b8ef4",
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
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };

    /**
     * Takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent 
     * based on the Academic Graph data and the Academic Grammar. To provide an interactive experience, you can call this method repeatedly after each character 
     * entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. 
     * If your application does not want auto-completion, you should set the complete parameter to 0.
     * @returns {Promise.<object>}
     */
    interpret({ parameters }) {

        const operation = {
            "path": "academic/v1.0/interpret",
            "method": "GET",
            "operationId": "56332331778daf06340c9666",
            "parameters": [{
                "name": "query",
                "description": "Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "complete",
                "description": "1 means that auto-completion suggestions are generated based on the grammar and graph data.",
                "value": "0",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "count",
                "description": "Maximum number of interpretations to return.",
                "value": "10",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "offset",
                "description": "Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "timeout",
                "description": "Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "model",
                "description": "Name of the model that you wish to query. Currently, the value defaults to \"latest\".\n",
                "value": "latest",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent 
     * based on the Academic Graph data and the Academic Grammar. To provide an interactive experience, you can call this method repeatedly after each character 
     * entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. 
     * If your application does not want auto-completion, you should set the complete parameter to 0.
     * @returns {Promise.<object>}
     */
    interpretPost({ body }) {

        const operation = {
            "path": "academic/v1.0/interpret",
            "method": "POST",
            "operationId": "5951f6260ecf2621902c89e4"
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': "application/x-www-form-urlencoded"},
            body: body
        })

    };

    /**
     * Calculate a floating point value based on 2 text inputs
     * @returns {Promise.<object>}
     */
    getSimilarity({ parameters }) {

        const operation = {
            "path": "academic/v1.0/similarity",
            "method": "GET",
            "operationId": "58076bdadcf4c40708f83791",
            "parameters": [{
                "name": "s1",
                "description": "String to be compared, input length is bounded by the limitation of the length of URL. When the strings are too long to be processed using GET, use POST instead.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "s2",
                "description": "String to be compared, input length is bounded by the limitation of the length of URL. When the strings are too long to be processed using GET, use POST instead.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Calculate a floating point value based on 2 text inputs
     * @returns {Promise.<object>}
     */
    postSimilarity({ body }) {

        const operation = {
            "path": "academic/v1.0/similarity",
            "method": "POST",
            "operationId": "58172b97dbe2d91538cc000b",
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': "application/x-www-form-urlencoded"},
            body: body
        })

    };
}

module.exports = academicKnowledge;