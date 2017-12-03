const commonService = require('../commonService');

/**
 * Language Understanding API is a cloud-based service that provides advanced natural language processing over raw text, and intent and entity detection.
 * Your LUIS domain-specific model must be in built, trained, and published before using this endpoint.
 * @augments commonService
 * {@link https://docs.microsoft.com/en-us/azure/cognitive-services/luis/home}
 */
class languageUnderstanding extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, appID, versionID, endpoint }) {
        super({ apiKey, endpoint });
        this.versionID = versionID;
        this.appID = appID;
        this.serviceId = "LUIS.v2.0"
        this.endpoints = [
            "westus.api.cognitive.microsoft.com",
            "eastus2.api.cognitive.microsoft.com",
            "westcentralus.api.cognitive.microsoft.com",
            "westeurope.api.cognitive.microsoft.com",
            "southeastasia.api.cognitive.microsoft.com"
        ];
    }

    /**
     * Returns the detected intent, entities and entity values with a score for each intent. 
     * Scores close to 1 indicate 100% certainty that the identified intent is correct. 
     * Irrespective of the value, the intent with the highest score is returned.
     * @returns {Promise.<object>}
     */
    detectIntent({parameters, body}) {

        const operation = {
            "path": "luis/v2.0/apps/" + this.appID,
            "method": "POST",
            "parameters": [{
                "name": "timezoneOffset",
                "description": "The timezone offset for the location of the request",
                "value": null,
                "required": false,
                "typeName": "number"
            },{
                "name": "verbose",
                "description": "If true will return all intents instead of just the topscoring intent",
                "value": false,
                "required": false,
                "typeName": "boolean"
            },{
                "name": "spellCheck",
                "description": "enable Bing Spell checking. You must have an Azure Bing spell checker subscription.",
                "value": false,
                "required": false,
                "typeName": "boolean"
            },{
                "name": "staging",
                "description": "Use staging endpoint.",
                "value": false,
                "required": false,
                "typeName": "boolean"
            },{
                "name": "log",
                "description": "Log query. Required for suggested review utterances.",
                "value": false,
                "required": false,
                "typeName": "boolean"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })

    };

    /**
     * Trains app for that version. All changes since last training are applied.
     * @returns {Promise.<object>}
     */
    train() {
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/versions/" + this.versionID + "/train",
            "method": "POST"
        };

        return this.makeRequest({
            operation: operation
        })
    };
    /**
     * Gets training status for that version. 
     * @returns {Promise.<object>}
     */
    getTrainStatus() {
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/versions/" + this.versionID + "/train",
            "method": "GET"
        };

        return this.makeRequest({
            operation: operation
        })
    };        
};

module.exports = languageUnderstanding;