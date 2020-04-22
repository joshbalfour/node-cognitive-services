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

    predictImage({parameters, headers, body}){

        const operation = {
            "path": "customvision/v1.0/Prediction/{projectId}/image",
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
                "name": "PredictionKey",
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
                "name": "iterationId",
                "description": "Format - uuid. Optional. Specifies the id of a particular iteration to evaluate against. The default iteration for the project will be used when not specified.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            },{
                "name": "application",
                "description": "Optional. Specifies the name of application using the endpoint.",
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
    };


    PredictImageAndSaveResults({parameters, headers, body}){
        const operations= {
            "path": "customvision/v1.0/Prediction/{projectId}/inline/image",
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
                "name": "PredictionKey",
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
                "name": "iterationId",
                "description": "Format - uuid. Optional. Specifies the id of a particular iteration to evaluate against. The default iteration for the project will be used when not specified.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            },{
                "name": "application",
                "description": "Optional. Specifies the name of application using the endpoint.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };


    PredictImageUrl({parameters, headers, body}){
        const operations= {
            "path": "customvision/v1.0/Prediction/{projectId}/url",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json",
                    "application/xml",
                    "text/xml",
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            },{
                "name": "PredictionKey",
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
                "name": "iterationId",
                "description": "Format - uuid. Optional. Specifies the id of a particular iteration to evaluate against. The default iteration for the project will be used when not specified.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            },{
                "name": "application",
                "description": "Optional. Specifies the name of application using the endpoint.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };


    PredictImageUrlAndSaveResults({parameters, headers, body}){
        const operations= {
            "path": "customvision/v1.0/Prediction/{projectId}/inline/url",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json",
                    "application/xml",
                    "text/xml",
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            },{
                "name": "PredictionKey",
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
                "name": "iterationId",
                "description": "Format - uuid. Optional. Specifies the id of a particular iteration to evaluate against. The default iteration for the project will be used when not specified.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            },{
                "name": "application",
                "description": "Optional. Specifies the name of application using the endpoint.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName" : "string",
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };

}


module.exports = customVision;