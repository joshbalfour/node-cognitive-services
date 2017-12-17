const commonService = require('../commonService');
const csv = require('fast-csv');

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
                "type": "queryStringParam",
                "typeName": "number"
            },{
                "name": "verbose",
                "description": "If true will return all intents instead of just the topscoring intent",
                "value": false,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            },{
                "name": "spellCheck",
                "description": "enable Bing Spell checking. You must have an Azure Bing spell checker subscription.",
                "value": false,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            },{
                "name": "staging",
                "description": "Use staging endpoint.",
                "value": false,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            },{
                "name": "log",
                "description": "Log query. Required for suggested review utterances.",
                "value": false,
                "required": false,
                "type": "queryStringParam",
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

    /** 
     * Exports Application version to JSON
     * @returns {Promise.<object>}
     */
    exportApplicationVersion(){
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/versions/" + this.versionID + "/export",
            "method": "GET"
        };

        return this.makeRequest({
            operation: operation
        })
        
    };     
    /** 
     * Gets the query logs of the past month for the application.
     * @returns {Promise.<object>}
     */
    downloadApplicationQuerylog(){
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/querylogs",
            "method": "GET"
        };

        let results = [];

        return this.makeRequest({
            operation: operation
        })
        .then(csvString => {
            return new Promise((resolve, reject) => {
                csv
                .fromString(csvString, {headers: true})
                .on("data", parsedObject => {
                    results.push(parsedObject);
                })
                .on("end", () => {
                    resolve(results);
                })
                .on("error", err => {
                    reject(err);
                })
            })
        })
    }; 
    /**
     * Publishes app. App must be trained before publishing.
     * @returns {Promise.<object>}
     */
    publish(body) {
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/publish",
            "method": "POST",
            "parameters": [{
                "name": "versionId",
                "description": "Version of the app. Default is '0.1', 10 char max ",
                "value": "0.1",
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "isStaging",
                "description": "Publish destination: staging or production.",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "boolean"
            }, {
                "name": "region",
                "description": "Azure region",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "string",
                "options" : ["westus", "eastus2", "westcentralus", "westeurope", "southeastasia"]
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body:body
        })
    };
};

module.exports = languageUnderstanding;