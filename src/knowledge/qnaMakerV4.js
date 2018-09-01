const commonService = require('../commonService');

/**
 * Microsoft QnA Maker is a free, easy-to-use, REST API and web-based service that trains AI to respond to user's questions in a more natural, conversational way. Compatible across development platforms, hosting services, and channels, QnA Maker is the only question and answer service with a graphical user interface—meaning you don’t need to be a developer to train, manage, and use it for a wide range of solutions.
 * 
 * With optimized machine learning logic and the ability to integrate industry-leading language processing with ease, QnA Maker distills masses of information into distinct, helpful answers
 * 
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/5a93fcf85b4ccd136866eb37/operations/5ac266295b4ccd1554da75ff|documentation}
 */
class qnaMakerV4 extends commonService {
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
            "westus.api.cognitive.microsoft.com"
        ];
    }

    /**
     * Creates a new knowledge base.
     * @returns {Promise.<object>}
    */
    createKnowledgeBase({ body }) {

        const operation = {
            "path": "qnamaker/v4.0/knowledgebases/create",
            "method": "POST",
            "operationId": "5ac266295b4ccd1554da75ff",
            "parameters": [{
                "name": "name",
                "description": "Friendly name for the knowledge base (Required).",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "qnaList",
                "description": "List of question and answer pairs to be added to the knowledge base. Max 1000 Q-A pairs per request.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "array"
            }, {
                "name": "urls",
                "description": "List of URLs to be processed and indexed in the knowledge base. In case of existing URL, it will be fetched again and KB will be updated with new data. Max 5 urls per request.",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "array"
            }, {
                "name": "files",
                "description": "List of files",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })
    };

    /**
     * Deletes the specified knowledge base and all data associated with it.
     * @returns {Promise.<object>}
    */
    deleteKnowledgeBase({ parameters }) {

        const operation = {
            "path": "qnamaker/v4.0/knowledgebases/{knowledgeBaseId}",
            "method": "DELETE",
            "operationId": "58994a073d9e041ad42d9bab",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    };

    /**
     * Gets details of a specific long running operation.
        @returns {Promise.<object>}
    */
    getOperationDetails({ parameters }) {

        const operation = {
            "path": "qnamaker/v4.0/operations/{id}",
            "method": "GET",
            "operationId": "operations_getoperationdetails",
            "parameters": [{
                "name": "id",
                "description": "Operation ID",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     *  Downloads all the data associated with the specified knowledge base.
     * @returns {Promise.<object>}
    */
    downloadKnowledgeBase({ parameters }) {

        const operation = {
            "path": "qnamaker/v4.0/knowledgebases/{knowledgeBaseId}/{environment}/qna",
            "method": "GET",
            "operationId": "knowledgebases_download",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "environment",
                "description": "Specifies whether environment is Test or Prod.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    };

    /**
     * Publishes all changes in test index of a knowledge base to its prod index.
     * @returns {Promise.<object>}
    */
    publishKnowledgeBase({ parameters }) {

        const operation = {
            "path": "qnamaker/v4.0/knowledgebases/{knowledgeBaseId}",
            "method": "POST",
            "operationId": "5ac266295b4ccd1554da75feS",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    };

    /**
     * Download alterations from runtime.
     * @returns {Promise.<object>}
    */
    getAlterations() {

        const operation = {
            "path": "qnamaker/v4.0/alterations",
            "method": "GET",
            "operationId": "5ac266295b4ccd1554da75fc",
            "parameters": [ ]
        };

        return this.makeRequest({
            operation: operation,
        })
    };

    
    /**
     * Replaces word alterations (synonyms) for the KB with the give records.
     * @returns {Promise.<object>}
    */
    updateAlterations({ parameters, body }) {

        const operation = {
            "path": "qnamaker/v4.0/alterations",
            "method": "PATCH",
            "operationId": "597804082bcd591200beb3a0",
            "parameters": [ ]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-type': 'application/json'},
            body: body
        })
    };

    /**
     * Add or delete QnA Pairs and / or URLs to an existing knowledge base.
     * @returns {Promise.<object>}
     */
    updateKnowledgeBase({ parameters, body }) {

        const operation = {
            "path": "qnamaker/v4.0/knowledgebases/{knowledgeBaseId}",
            "method": "PATCH",
            "operationId": "58994a083d9e041ad42d9bad",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "add",
                "description": "Data to be added to the knowledge base.",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "object"
            }, {
                "name": "delete",
                "description": "Data to be deleted from the knowledge base",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "object"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-type': 'application/json'},
            body: body
        })
    };


}

module.exports = qnaMakerV4;