const commonService = require('../commonService');

/**
 * Entity Linking is a natural language processing tool to help analyzing text for your application. 
 * 
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/56f0eabfca730713cc392442/operations/56f0eabfca73070e44d0f39c|documentation}
 */
class entityLinking extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "56f0eabfca730713cc392442"
        this.endpoints = [
            "westus.api.cognitive.microsoft.com"
        ];
    }

    /**
	Recognize a named-entity from given text and aligning a textual mention of the entity to an appropriate entry in a knowledge base.
	Example Parameters: {
        "selection": null,
        "offset": null
    }
    @returns {Promise.<object>}
    */
    linkEntity({ parameters, headers, body }) {

        const operation = {
            "path": "entitylinking/v1.0/link",
            "method": "POST",
            "operationId": "56f0eabfca73070e44d0f39c",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "text/plain",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "selection",
                "description": "The specific word or phrase within the text that is to be entity linked. If not specified, the service will try to recognize and identify all the entities within the input text.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The location (in offset by characters) of the selected word or phrase within the input text. Used to distinguish when there are multiple instances of the same words or phrases within the input text. Only valid when the selection is specified.",
                "value": null,
                "required": false,
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
    }

};

module.exports = entityLinking;