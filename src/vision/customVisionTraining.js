const commonService = require('../commonService');

/**
Custom Vision Service brings the power of machine learning to your apps
Custom Vision Service is a tool for building custom image classifiers. 
It makes it easy and fast to build, deploy, and improve an image classifier. 
We provide a REST API and a web interface to upload your images and train.

Prerequisites
-To build a classifier, you must first have:
-A valid Microsoft Account or an Azure Active Directory OrgID ("work or school account"), so you can sign into customvision.ai and get started. Note that OrgID login for AAD users from national clouds is not currently supported.
-A series of images to train your classifier (minimum of 30 images per tag).
-A few images to test your classifier after the classifier is trained.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fa|documentation}
 */

class customvision extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "56f91f2d778daf23d8ec6739"
        this.endpoints = [
            "southcentralus.api.cognitive.microsoft.com",
        ]
    }

    CreateImagesFromData({parameters, headers, body}){

        const operation = {
            "path": "customvision/v1.0/Training/projects/{projectId}/images/image",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            },{
                "name": "TrainingKey",
                "description": "Subscription key which provides access to this API. Found in your Profile.",
                "required": true,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "projectId",
                "description": "Format - uuid. The project to evaluate against",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName" : "string",

            },{
                "name": "tagsId",
                "description": "The tags ids to associate with the image batch.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            }]
        
        };
        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }


    CreateImagesFromPredictions({parameters, headers, body}){
        
        const operation = {
            "path": "customvision/v1.0/Training/projects/{projectId}/images/predictions",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            },{
                "name": "TrainingKey",
                "description": "Subscription key which provides access to this API. Found in your Profile.",
                "required": true,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "projectId",
                "description": "Format - uuid. The project to evaluate against",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName" : "string",

            }]
        
        };
        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    CreateProject({parameters, headers, body}){
        
        const operation = {
            "path": "customvision/v1.0/Training/projects?name={name}",
            "method": "POST",
            "headers": [{
                "name": "TrainingKey",
                "description": "Subscription key which provides access to this API. Found in your Profile.",
                "required": true,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "name",
                "description": "Format - uuid. The project to evaluate against",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName" : "string",

            },{
                "name": "description",
                "description": "The description of the of the project",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",

            },{
                "name": "domainId",
                "description": "Format - uuid. The id of the domain to enable for this project",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",

            }]
    
        };
        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    CreateProject({parameters, headers, body}){
        
        const operation = {
            "path": "customvision/v1.0/Training/projects/{projectId}/tags?name={name}",
            "method": "POST",
            "headers": [{
                "name": "TrainingKey",
                "description": "Subscription key which provides access to this API. Found in your Profile.",
                "required": true,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "projectId",
                "description": "Format - uuid. The project to evaluate against",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName" : "string",

            },{
                "name": "name",
                "description": "The project name",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName" : "string",

            },{
                "name": "description",
                "description": "The descrpition of this project",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",

            }]
    
        };
        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }
}