const commonService = require('../commonService');
const csv = require('fast-csv');
const _ = require("underscore");
const promiseRetry = require('promise-retry');
const promiseDelay = require('sleep-promise');

let count = 0;

/**
 * Language Understanding API is a cloud-based service that provides advanced natural language processing over raw text, and intent and entity detection.
 * Your LUIS domain-specific model must be in built, trained, and published before using this endpoint.
 * {@link https://docs.microsoft.com/en-us/azure/cognitive-services/luis/home}
 */
class languageUnderstanding {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.programmaticKey authoring key found in LUIS.ai user     * @param {string} obj.apiKey LUIS query endpoint key only
     * @param {string} obj.authoringEndpoint 3 authoring endpoints
     * @param {string} obj.endpoint 12 querying endpoints
     * @param {string} obj.appId LUIS application Id
     * @param {string} obj.versionId 10 alphanum char version
account
     */
    constructor({ programmaticKey, apiKey, authoringEndpoint, endpoint, appId, versionId}) {

        // endpoint query only due to regions and keys
        this.query = new commonService({ apiKey, endpoint });

        // authoring only due to regions and keys
        this.author = new commonService({apiKey:programmaticKey, endpoint: authoringEndpoint});
        
        this.author.endpoints = [
            "australiaeast.api.cognitive.microsoft.com",
            "westus.api.cognitive.microsoft.com",
            "westeurope.api.cognitive.microsoft.com"
        ];

        this.query.endpoints = [
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

        this.KeyLength = 36;
        this.APIVersion = "2.1.0";
        this.serviceId = "LUIS.v2.0";

        this.versionId = versionId;
        this.appId = appId;


        this.INFO = {
            APPS:"",
            ASSISTANTS: "assistants",
            DOMAINS: "domains",
            IMPORT: "import",
            USAGESCENARIOS: "usagescenarios",
            CULTURE: "cultures",
            CUSTOMPREBUILTDOMAINS: "customprebuiltdomains"
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
            //DEPRECATED - ASSIGNEDKEY:"assignedkey",
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
            EXPORT: "export",
            FEATURES: "features",
            HIERARCHICALENTITIES: "hierarchicalentities",
            INTENTS: "intents",
            LISTPREBUILTS: "listprebuilts",
            MODELS: "models",
            //PATTERNS: "patterns", //deprecated
            PHRASELISTS: "phraselists",
            PREBUILTS:"prebuilts",
            TRAIN: "train",
            TRAINSTATUS: "train"
        };
        this.PREBUILTDOMAINCULTURES = [
            {"en-us" : 21}, 
            {"zh-cn" : 13},
            {"fr-fr" : 0}, 
            {"fr-ca" : 0}, 
            {"es-es" : 0}, 
            {"es-mx" : 0}, 
            {"it-it" : 0}, 
            {"de-de" : 0}, 
            {"ja-jp" : 0}, 
            {"pt-br" : 0}, 
            {"ko-kr" : 0},
            {"nl-nl" : 0}
        ];
        this.CULTURECOUNT = this.PREBUILTDOMAINCULTURES.length;
        this.PREBUILTDOMAINTOTALCOUNT=0;
        this.PREBUILTDOMAINCULTURES.forEach((culture) => { 
            this.PREBUILTDOMAINTOTALCOUNT += Object.values(culture)[0];
        });
        
        this.retryInterval = 2000;
        this.retryCount = 10;

    }
    propertyNamesToArray(obj){

        let myNameArray = [];
        for (var key in obj) {
            myNameArray.push(key);
        }

        return myNameArray;
    }

    /**
     * info: INFO
     * culture: string "en-us"
     * Returns LUIS meta information using enum to determine request

     * @returns {Promise.<object>}    
     */
    getLUIS(info, cultureOnly){

        const validINFO=[
            this.INFO.ASSISTANTS,
            this.INFO.APPS,
            this.INFO.CULTURE,
            this.INFO.DOMAINS,
            this.INFO.USAGESCENARIOS,
            this.INFO.CUSTOMPREBUILTDOMAINS
        ];

        if(!_.contains(validINFO,info))throw Error("invalid info param '" + info + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + info,
            "method": "GET",
        };

        // add culture for prebuilt domain
        if (info===this.INFO.CUSTOMPREBUILTDOMAINS && cultureOnly) {
            operation.path += "/" + cultureOnly;
        }

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
            case this.INFO.CULTURE:
            case this.INFO.DOMAINS:
            case this.INFO.USAGESCENARIOS:
            case this.INFO.CUSTOMPREBUILTDOMAINS:
            case this.INFO.ASSISTANTS:
                break;
            default: throw Error(`error in switch - unknown info ${info}`);

        }

        return this.author.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'}
        })
        
    }
    /**
     * Set LUIS values
     * @param {*} info 
     * @param {*} body 
     * @param {*} params 
     * @returns {Promise.<object>}
     */
    setLUIS(info, body, parameters){
        const validINFO=[
            this.INFO.IMPORT,
            this.INFO.CUSTOMPREBUILTDOMAINS
        ];

        if(!_.contains(validINFO,info))throw Error("invalid info param '" + info + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + info,
            "method": "POST",
        };

        switch(info){
            case this.INFO.IMPORT: 
                operation.parameters = [{
                    "name": "appName",
                    "description": "The imported application name.",
                    "value": null,
                    "required": false,
                    "type": "queryStringParam",
                    "typeName": "string"
                }]
                break;
            case this.INFO.CUSTOMPREBUILTDOMAINS:
                operation.parameters =  [{
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
                }];
                break;
            default: throw Error(`error in switch - unknown info ${info}`);
        }

        return this.author.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body,
            parameters:parameters
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
            "path": "luis/api/v2.0/apps/" + this.appId + "/" + appinfo,
            "method": "GET",
        };

        switch(appinfo){
            case this.APPINFO.QUERYLOGS:
                return this.author.makeRequest({
                    operation: operation,
                    headers: {'Content-type': 'application/json'}
                }).then(csvString => {
                    return this.queryStringConversion(csvString);
                })
                break;
            default:
                return this.author.makeRequest({
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
            "path": "luis/api/v2.0/apps/" + this.appId + "/" + appinfo,
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
            default: throw Error(`error in switch - unknown appinfo ${appinfo}` );
        }

        return this.author.makeRequest({
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

        const validAPPINFO=[
            this.APPINFO.APP,
            this.APPINFO.SETTINGS,
            this.APPINFO.PERMISSIONS
        ];

        if(!_.contains(validAPPINFO,appinfo))throw Error("invalid info param '" + appinfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appId + "/" + appinfo,
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
            default: throw Error(`error in switch - unknown appinfo ${appinfo}`);

        }

        return this.author.makeRequest({
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

        const validAPPINFO=[this.APPINFO.PERMISSIONS,this.APPINFO.APP];

        if(!_.contains(validAPPINFO,appinfo))throw Error("invalid info param '" + appinfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appId + "/" + appinfo,
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
            case this.APPINFO.APP:
                // no params
                break;
            default: throw Error("error in switch");
        }

        return this.author.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })
       
    }
    /**
     * Returns version info
     * @returns {Promise.<object>}    
     */
    getVersionInfo(versioninfo, parameters){

        const validVERSIONINFO=[
            this.VERSIONINFO.EXPORT,
            this.VERSIONINFO.VERSION,
            this.VERSIONINFO.CLOSEDLISTS,
            this.VERSIONINFO.TRAINSTATUS,
            this.VERSIONINFO.ENTITIES,
            this.VERSIONINFO.EXAMPLES,
            this.VERSIONINFO.INTENTS,
            this.VERSIONINFO.FEATURES,
            this.VERSIONINFO.HIERARCHICALENTITIES,
            this.VERSIONINFO.LISTPREBUILTS,
            this.VERSIONINFO.MODELS
        ];

        if(!_.contains(validVERSIONINFO,versioninfo))throw Error("invalid info param '" + versioninfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appId + "/versions/" + this.versionId + "/" + versioninfo,
            "method": "GET"
        };

        switch(versioninfo){
            case this.VERSIONINFO.INTENTS:
            case this.VERSIONINFO.FEATURES:
            case this.VERSIONINFO.ENTITIES:
            case this.VERSIONINFO.EXAMPLES: 
            case this.VERSIONINFO.LISTPREBUILTS:
            case this.VERSIONINFO.HIERARCHICALENTITIES:   
            case this.VERSIONINFO.MODELS:
                operation.parameters = [{
                    "name": "skip",
                    "value": 0,
                    "required": false,
                    "typeName": "number",
                    "type": "queryStringParam"
                }, {
                    "name": "take",
                    "value": 100,
                    "required": false,
                    "typeName": "number",
                    "type": "queryStringParam"
                }];
                break;
            case this.VERSIONINFO.TRAINSTATUS:
                // no parameters
                break;
            default:
        };

        return this.author.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            parameters: parameters
        })
        
    }
    /**
     * Set Version info
     * @returns {Promise.<object>}    
     */
    setVersionInfo(parameters, body, versioninfo){

        if(parameters===undefined)parameters={};

        const validVERSIONINFO=[
            this.VERSIONINFO.CLONE,
            this.VERSIONINFO.TRAIN,
            this.VERSIONINFO.CLOSEDLISTS
        ];

        if(!_.contains(validVERSIONINFO,versioninfo))throw Error("invalid version info param '" + versioninfo + "'");

        const operation = {
            "path": "luis/api/v2.0/apps/" + this.appId + "/versions/" + this.versionId + "/" + versioninfo,
            "method": "POST",
        };

        switch(versioninfo){
            case this.VERSIONINFO.CLONE: 
            case this.VERSIONINFO.CLOSEDLISTS:
                operation.parameters =  [{
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
                }];
                parameters.appId = this.appId;
                parameters.versionId = this.versionId;
                break;
            case this.VERSIONINFO.TRAIN:
                // no parameters
                break;
            default: throw Error("error in switch - unexpected VERSIONINFO");
        }

        return this.author.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body,
            parameters: parameters
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
            "path": "luis/v2.0/apps/" + this.appId + "?" + "verbose=" + parameters.verbose + "&log=" + parameters.log,
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

        return this.query.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
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
    waitUntilTrained(client){

        count += 1;

        return promiseRetry((retry, number) => {

            return promiseDelay(this.retryInterval)
            .then( () => {
                return client.getVersionInfo(client.VERSIONINFO.TRAINSTATUS);
            }).then(response => {
                // 2xx http response 
                let trained = client.isTrained(response);

                if (count < this.retryCount && !trained) retry("not trained");
                
                return response;
            })
            .catch((err) => {
                throw err;
            });
        });  
    } 
    /**
     * Convert csv string to array
     * @param {string} csvString 
     * @returns {Promise.<object>}   
     */
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
};

module.exports = languageUnderstanding;