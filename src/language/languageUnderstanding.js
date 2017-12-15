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
        this.serviceId = "LUIS.v2.0",
        this.endpoints = [
            "australiaeast.api.cognitive.microsoft.com",
            "brazilsouth.api.cognitive.microsoft.com",
            "eastasia.api.cognitive.microsoft.com",
            "eastus.api.cognitive.microsoft.com",
            "eastus2.api.cognitive.microsoft.com",
            "northeurope.api.cognitive.microsoft.com",
            "southcentralus.api.cognitive.microsoft.com",
            "southeastasia.api.cognitive.microsoft.com",            
            "westus.api.cognitive.microsoft.com",
            "westus2.api.cognitive.microsoft.com",
            "westcentralus.api.cognitive.microsoft.com",
            "westeurope.api.cognitive.microsoft.com",
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
    /** 
     * Returns list of applications for this subscription
     * skip: default = 0
     * take: default = 100, max = 500
     * @returns {Promise.<object>}
     */
    getApplications(parameters){
        
        const operation = {
            "path": "luis/api/v2.0/apps/",
            "method": "GET",
            "parameters": [{
                "name": "skip",
                "description": "Used for paging. The number of entries to skip. Default value is 0.",
                "value": 0,
                "required": false,
                "typeName": "number"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number"
            }]

        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
        
    };     
    /** 
     * Returns list of labeled example utterances
     * skip: default = 0
     * take: default = 100, max = 500
     * @returns {Promise.<object>}
     */
    getLabeledExamples(parameters){
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID  + "/versions/" + this.versionID + "/examples",
            "method": "GET",
            "parameters": [{
                "name": "skip",
                "description": "Used for paging. The number of entries to skip. Default value is 0.",
                "value": 0,
                "required": false,
                "typeName": "number"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number"
            }]

        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
        
    };     
    /** 
     * Returns user access list
     * @returns {Promise.<object>}
     */
    getUserAcessList(){
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID  + "/permissions",
            "method": "GET",
        };

        return this.makeRequest({
            operation: operation
        })
        
    }; 
    /** 
     * Returns list of entities in version
     * @returns {Promise.<object>}
     */
    getVersionEntities(parameters){
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID  + "/versions/" + this.versionID + "/entities",
            "method": "GET",
            "parameters": [{
                "name": "skip",
                "description": "Used for paging. The number of entries to skip. Default value is 0.",
                "value": 0,
                "required": false,
                "typeName": "number"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters
        })
    }; 
    /** 
     * Returns list of intents in version
     * @returns {Promise.<object>}
     */
    getVersionIntents(parameters){
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID  + "/versions/" + this.versionID + "/intents",
            "method": "GET",
            "parameters": [{
                "name": "skip",
                "description": "Used for paging. The number of entries to skip. Default value is 0.",
                "value": 0,
                "required": false,
                "typeName": "number"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters
        })
    };
};

module.exports = languageUnderstanding;