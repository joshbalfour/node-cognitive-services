const commonService = require('../commonService');
const csv = require('fast-csv');
const _ = require("underscore");

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
        this.serviceId = "LUIS.v2.0";
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
        this.INFO = {
            APPS:"",
            ASSISTANT: "assistants",
            DOMAIN: "domains",
            USAGESCENARIO: "usagescenarios",
            CULTURE: "cultures",
            PREBUILTDOMAIN: "customprebuiltdomains"
        };
        this.APPINFO = {
            ENDPOINTS: "endpoints",
            SETTINGS: "settings",
            VERSIONS: "versions",
            PERMISSIONS: "permissions",
            PUBLISH: "publish",
            QUERYLOGS: "querylogs",
            APP: ""
        };
        
        this.VERSIONINFO = {
            ASSIGNEDKEY:"assignedkey",
            CLONE: "clone",
            CLOSEDLISTS: "closedlists",
            COMPOSITEENTITIES: "compositeentities",
            VERSION: "",
            //LISTS: "closedlists",
            PREBUILTDOMAINS: "customprebuiltdomains",
            PREBUILTENTITIES: "customprebuiltentities",
            PREBUILTINTENTS: "customprebuiltintents",
            PREBUILTMODELS: "customprebuiltmodels",
            ENTITIES:"entities",
            EXAMPLE: "example",
            EXAMPLES: "examples",
            FEATURES: "features",
            HIERARCHICALS: "hierarchical",
            INTENTS: "intents",
            LISTPREBUILTS: "listprebuilts",
            MODELS: "models",
            //PATTERNS: "patterns", //deprecated
            PHRASELISTS: "phraselists",
            PREBUILTS:"prebuilts" 
        }
    }

    /**
     * info: INFO
     * culture: string "en-us"
     * Returns LUIS meta information using enum to determine request

     * @returns {Promise.<object>}    
     */
    getLUIS(info, cultureOnly, parameters){

        const operation = {
            "path": "luis/api/v2.0/apps/" + info,
            "method": "GET",
        };

        // add culture for prebult domain
        if (info === this.INFO.PREBUILTDOMAIN && cultureOnly) operation.path += "/" + cultureOnly;

        switch(info){
            case this.INFO.APPS: 
                operation.parameters = [{
                    "name": "skip",
                    "description": "Used for paging. The number of entries to skip. Default value is 0.",
                    "value": 0,
                    "required": false,
                    "typeName": "number",
                    "type": "queryStringParam"
                }, {
                    "name": "take",
                    "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                    "value": 100,
                    "required": false,
                    "typeName": "number",
                    "type": "queryStringParam"
                }];
                break;
            default: 

        }

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'}
        })
        
    }
    /**
     * Get app info 
     * Returns app info
     * @param {APPINFO}
     * @returns {Promise.<object>}    
     */
    getAppInfo(appinfo){

        const validAPPINFO=[
            this.APPINFO.APP,
            this.APPINFO.ENDPOINTS,
            this.APPINFO.PERMISSIONS,
            this.APPINFO.QUERYLOGS,
            this.APPINFO.SETTINGS,
            this.APPINFO.VERSIONS
        ];

        if(!_.contains(validAPPINFO,appinfo))throw Error("invalid info param '" + appinfo + "'");

        switch(appinfo){
            case this.APPINFO.APP: 
            case this.APPINFO.ENDPOINTS: 
            case this.APPINFO.PERMISSIONS: 
            case this.APPINFO.QUERYLOGS: 
            case this.APPINFO.SETTINGS: 
            case this.APPINFO.VERSIONS: 
            /*
                operation.parameters = [{
                    "name": "email",
                    "description": "email",
                    "value": null,
                    "required": true,
                    "type": "inBody",
                    "typeName": "string"
                }];*/
                break;
            default: throw Error("error in switch");

        }


        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/" + appinfo,
            "method": "GET",
        };

        switch(appinfo){
            case this.APPINFO.QUERYLOGS:
                return this.makeRequest({
                    operation: operation,
                    headers: {'Content-type': 'application/json'}
                }).then(csvString => {
                    return this.queryStringConversion(csvString);
                })
                break;
            default:
                return this.makeRequest({
                    operation: operation,
                    headers: {'Content-type': 'application/json'}
                })
        }
    }

    /**
     * Set app info 
     * Returns no data
     * @returns {Promise.<object>}    
     */
    setAppInfo(body, appinfo){

        const validAPPINFO=[this.APPINFO.PUBLISH,this.APPINFO.PERMISSIONS];

        if(!_.contains(validAPPINFO,appinfo))throw Error("invalid info param '" + appinfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/" + appinfo,
            "method": "POST",
        };

        switch(appinfo){
            case this.APPINFO.PERMISSIONS: 
                operation.parameters = [{
                    "name": "email",
                    "description": "email",
                    "value": null,
                    "required": true,
                    "type": "inBody",
                    "typeName": "string"
                }];
                break;
            case this.APPINFO.PUBLISH:
                operation.parameters = [{
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
                }];
                break;
            default: throw Error("error in switch");
        }

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })
       
    }

    /**
     * Update app info 
     * Returns no data
     * @returns {Promise.<object>}    
     */
    updateAppInfo(body, appinfo){

        const validAPPINFO=[this.APPINFO.APP,this.APPINFO.SETTINGS,this.APPINFO.PERMISSIONS];

        if(!_.contains(validAPPINFO,appinfo))throw Error("invalid info param '" + appinfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/" + appinfo,
            "method": "PUT",
        };

        switch(appinfo){
            case this.APPINFO.APP: 
                operation.parameters = [{
                    "name": "name",
                    "description": "New name of the application",
                    "value": null,
                    "required": true,
                    "type": "inBody",
                    "typeName": "string"
                }, {
                    "name": "description",
                    "description": "New description of the application",
                    "value": null,
                    "required": true,
                    "type": "inBody",
                    "typeName": "string"
                }];
                break;
            case this.APPINFO.SETTINGS: 
                operation.parameters = [{
                    "name": "public",
                    "description": "",
                    "value": null,
                    "required": false,
                    "type": "inBody",
                    "typeName": "boolean"
                }];
                break;
            case this.APPINFO.PERMISSIONS: 
                operation.parameters = [{
                    "name": "emails",
                    "description": "array of emails",
                    "value": null,
                    "required": true,
                    "type": "inBody",
                    "typeName": "array"
                }];
                break;
            default: throw Error("error in switch");

        }

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })
       
    }

    /**
     * Delete app info 
     * Returns no data
     * @returns {Promise.<object>}    
     */
    deleteAppInfo(body, appinfo){

        const validAPPINFO=[this.APPINFO.PERMISSIONS];

        if(!_.contains(validAPPINFO,appinfo))throw Error("invalid info param '" + appinfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/" + appinfo,
            "method": "DELETE",
        };

        switch(appinfo){
            case this.APPINFO.PERMISSIONS: 
                operation.parameters = [{
                    "name": "email",
                    "description": "single email address",
                    "value": null,
                    "required": true,
                    "type": "inBody",
                    "typeName": "string"
                }];
                break;
            default: throw Error("error in switch");
        }

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })
       
    }
    /**
     * Get version info 
     * Returns version info
     * @returns {Promise.<object>}    
     */
    getVersionInfo(versioninfo){

        const validVERSIONINFO=[
            this.VERSIONINFO.VERSION,
            this.VERSIONINFO.CLOSEDLISTS
        ];

        if(!_.contains(validVERSIONINFO,versioninfo))throw Error("invalid info param '" + versioninfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/versions/" + this.versionID + "/" + versioninfo,
            "method": "GET",
            "parameters": [{
                "name": "skip",
                "description": "Used for paging. The number of entries to skip. Default value is 0.",
                "value": 0,
                "required": false,
                "typeName": "number",
                "type": "queryStringParam"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number",
                "type": "queryStringParam"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'}
        })
        
    }
    /**
     * Returns the detected intent, entities and entity values with a score for each intent. 
     * Scores close to 1 indicate 100% certainty that the identified intent is correct. 
     * Irrespective of the value, the intent with the highest score is returned.
     * @returns {Promise.<object>}
     */
    detectIntent({parameters, body}) {

        const operation = {
            "path": "luis/v2.0/apps/" + this.appID + "?" + "verbose=" + parameters.verbose + "&log=" + parameters.log,
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
     * Checks if all models of app are trained
     * @returns {Boolean}
     */
    isTrained(trainingStatus) {
        var untrainedModels = trainingStatus.filter(model => {
            return model.details.status == 'Fail' || model.details.status == 'InProgress';
        });
        return (untrainedModels.length===0);
    }
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
    queryStringConversion(csvString){
        return new Promise((resolve, reject) => {
            let results = [];
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
    }
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
                "typeName": "number",
                "type": "queryStringParam"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number",
                "type": "queryStringParam"
            }]

        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
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
                "typeName": "number",
                "type": "queryStringParam"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number",
                "type": "queryStringParam"
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
                "typeName": "number",
                "type": "queryStringParam"
            }, {
                "name": "take",
                "description": "Used for paging. The number of entries to return. Maximum page size is 500. Default is 100.",
                "value": 100,
                "required": false,
                "typeName": "number",
                "type": "queryStringParam"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters
        })
    };
    /**
     * Adds a prebuilt domain along with its models as a new application.
     * @returns {Promise.<object>}
     */
    addPrebuiltDomain(body) {
        
        const operation = {
            "path": "luis/api/v2.0/apps/customprebuiltdomains",
            "method": "POST",
            "parameters": [{
                "name": "domainName",
                "description": "The domain name",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "culture",
                "description": "The culture.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body:body
        })
    };
    /**
     * Get prebuilt domains.
     * @returns {Promise.<object>}
     */
    getPrebuiltDomain() {
        
        const operation = {
            "path": "luis/api/v2.0/apps/customprebuiltdomains",
            "method": "GET"
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'}
        })
    };
    /**
     * Delete app
     * @returns {Promise.<object>}
     */
    deleteApp() {
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID,
            "method": "DELETE"
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'}
        })
    };

    /**
     * Clone app
     * Body contains new version id: {"version":"0.2"}
     * @returns {Promise.<object>}
     */
    cloneApp(parameters, body) {
        
        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appID + "/versions/" + this.versionID + "/clone",
            "method": "POST",
            "parameters": [{
                "name": "appId",
                "description": "The application id to clone.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "versionId",
                "description": "The version id to clone.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }
        ]};

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body:body,
            parameters:parameters
        })
    };
    /**
     * Import app
     * @returns {Promise.<object>}
     */
    importApp(parameters, body) {
        
        const operation = {
            "path": "luis/api/v2.0/apps/import",
            "method": "POST",
            "parameters": [{
                "name": "appName",
                "description": "The imported application name.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body:body,
            parameters:parameters
        })
    };

};

module.exports = languageUnderstanding;