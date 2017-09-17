const {
    makeRequest
} = require('../../lib/api');

const recommendations = ({
    apiKey
}) => {

    let self = this;

    self.endpoints = [
        "westus.api.cognitive.microsoft.com"
    ];
    self._apiKey = apiKey;
    self._endpoint = endpoint;

    /**
	Name: Recommendations: Delete/Cancel an ongoing operation
	Description: Cancels an ongoing operation. One example is to cancel a build request that was submitted.

To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.
*/
    self.cancelOperation = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete/Cancel an ongoing operation",
            "path": "recommendations/v4.0/operations/{id}",
            "method": "DELETE",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3db",
            "id": "56f30d77eda5650db055a3db",
            "description": "Cancels an ongoing operation. One example is to cancel a build request that was submitted.\
            To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "id",
                "description": "Operation ID",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })
        .then((operationIdUrl) => {
            var splittedUrl = operationIdUrl.split('/');
            return splittedUrl[splittedUrl.length - 1];
        })

    };

     /**
			Name: Recommendations: Create business rule
			Description: Adds a new business rule for a model. These are the types of rules supported: 
BlockList - BlockList enables you to provide a list of items that you do not want to return in the recommendation results. 
FeatureBlockList - Feature BlockList enables you to block items based on the values of its features. Do not send more than 1000 items in a single blocklist rule or your call may timeout. If you need to block more than 1000 items, you can make several blocklist calls.
Upsale - Upsale enables you to enforce items to return in the recommendation results.
WhiteList - White List enables you to only suggest recommendations from a list of items. 
FeatureWhiteList - Feature White List enables you to only recommend items that have specific feature values. 
PerSeedBlockList - Per Seed Block List enables you to provide per item a list of items that cannot be returned as recommendation results. 
Note: The call will fail if any of the itemIds or features provided are invalid. Make sure that the items are part of the catalog before creating a rule for those items.
		*/
        self.createBusinessRule = ({
            parameters,
            headers,
            body
        }) => {
    
            const operation = {
                "name": "Create business rule",
                "path": "recommendations/v4.0/models/{modelId}/rules",
                "method": "POST",
                "serviceId": "Recommendations.V4.0",
                "operationId": "577ec1847270320f24da25ab",
                "id": "577ec1847270320f24da25ab",
                "description": "Adds a new business rule for a model.",
                "serviceName": "Recommendations",
                "parameters": [{
                    "name": "modelId",
                    "description": "Unique identifier of the model",
                    "value": null,
                    "required": true,
                    "type": "routeParam",
                    "typeName": "string"
                }],
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
                }]
            };
    
            return makeRequest(self, {
                operation: operation,
                endpoint: endpoint,
                parameters: parameters,
                headers: headers,
                body: body
            })
    
        };

    /**
			Name: Recommendations: Create a model
			Description: A model is a container of your usage data, catalog data and the recommendation model.
Once you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating builds on that model.
You may create up to 10 models. If you need to delete unused models, you may use the "Delete a model" API.
		*/
    self.createAModel = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Create a model",
            "path": "recommendations/v4.0/models",
            "method": "POST",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d6",
            "id": "56f30d77eda5650db055a3d6",
            "description": "A model is a container of your usage data, catalog data and the recommendation model.\
            Once you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating builds on that model.\
            You may create up to 10 models. If you need to delete unused models, you may use the \"Delete a model\" API.",
            "serviceName": "Recommendations",
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
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            headers: headers,
            body: body
        })

    };

    /**
	Name: Recommendations: Create/Trigger a build
	Description: By creating a new build, you start the training process that will allow you to generate a machine learning model that you can later on query for recommendations.

Before triggering a build you first must upload catalog and usage data. Triggering a new build is an asynchronous operations. Once a build is triggered you will receive an operation (in the Operation-Location header of the response) that you can use to track the build status, or to cancel the build operation. See the "Retrieve the status of an operation" API.

There are 4 types of builds: a Recommendation build, a Rank build, an FBT (Frequently-Bought-Together) build and a SAR (Smart Adaptive Recommendations) build.
*/
    self.createOrTriggerABuild = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Create/Trigger a build",
            "path": "recommendations/v4.0/models/{modelId}/builds",
            "method": "POST",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d0",
            "id": "56f30d77eda5650db055a3d0",
            "description": "By creating a new build, you start the training process that will allow you to generate a machine learning model that you can later on query for recommendations.\
            Before triggering a build you first must upload catalog and usage data. Triggering a new build is an asynchronous operations. Once a build is triggered you will receive an operation (in the Operation-Location header of the response) that you can use to track the build status, or to cancel the build operation. See the \"Retrieve the status of an operation\" API.\
            There are 4 types of builds: a Recommendation build, a Rank build, an FBT (Frequently-Bought-Together) build and a SAR (Smart Adaptive Recommendations) build.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }],
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
            }],
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })
        .then((operationIdUrl) => {
            var splittedUrl = operationIdUrl.split('/');
            return splittedUrl[splittedUrl.length - 1];
        })

    };

    /**
	Name: Recommendations: Delete all business rules
	Description: Delete all rules
*/
    self.deleteAllBusinessRules = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete all business rules",
            "path": "recommendations/v4.0/models/{modelId}/rules",
            "method": "DELETE",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25ac",
            "id": "577ec1847270320f24da25ac",
            "description": "Delete all rules.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

     /**
	Name: Recommendations: Delete all usage files
	Description: Deletes all usage file of a model
*/
    self.deleteAllUsageFiles = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete all usage files",
            "path": "recommendations/v4.0/models/{modelId}/usage",
            "method": "DELETE",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25b0",
            "id": "577ec1847270320f24da25b0",
            "description": "Delete all rules.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
			Name: Recommendations: Delete a build
			Description:Deletes a build.

You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it.

You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.
		*/
    self.deleteABuild = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete a build",
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}",
            "method": "DELETE",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d2",
            "id": "56f30d77eda5650db055a3d2",
            "description": "Deletes a build.\
            You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it.\
            You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "Format - int64. Unique identifier of the build",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

     /**
			Name: Recommendations: Delete business rule
			Description: Deletes a rule by ID

		*/
        self.deleteBusinessRule = ({
            parameters
        }) => {
    
            const operation = {
                "name": "Delete business rule",
                "path": "recommendations/v4.0/models/{modelId}/rules/{ruleId}",
                "method": "DELETE",
                "serviceId": "Recommendations.V4.0",
                "operationId": "577ec1847270320f24da25ae",
                "id": "577ec1847270320f24da25ae",
                "description": "Deletes a rule by ID",
                "serviceName": "Recommendations",
                "parameters": [{
                    "name": "modelId",
                    "description": "",
                    "value": null,
                    "required": true,
                    "type": "routeParam",
                    "typeName": "string"
                }, {
                    "name": "buildId",
                    "description": "Format - int64. Unique identifier of the build",
                    "value": null,
                    "required": true,
                    "type": "routeParam",
                    "typeName": "number"
                }]
            };
    
            return makeRequest(self, {
                operation: operation,
                endpoint: endpoint,
                parameters: parameters
            })
    
        };

    /**
        Name: Recommendations: Delete catalog items
        Description: Deletes a set of items from the catalog. The set of items should be passed in the request body, unless deleteAll is set to true.

Notes:
1. Item Ids can have a max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash).
2.	Deleting a catalog item will not impact the recommendations served by previous builds. 
The request body should contain one line per item that must be deleted. The first entry per line should contain the item id to be deleted. This allows you to either pass just the item id, or in the same format that is used to upload items to the catalog.

    */
    self.deleteCatalogItems = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Delete catalog items",
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "DELETE",
            "serviceId": "Recommendations.V4.0",
            "operationId": "58926221b439b30ef8b40f57",
            "id": "58926221b439b30ef8b40f57",
            "description": "Deletes a set of items from the catalog. The set of items should be passed in the request body, unless deleteAll is set to true.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "deleteAll",
                "description": "If set to true, the entire catalog is deleted, else items received in request body are deleted. Set to false by default.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream"
                ],
                "required": false,
                "typeName": "string"
            }],
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers
        })

    };

    /**
	Name: Recommendations: Delete a model
	Description: Deletes an existing model by ID.
	Example Parameters: {
	"id": null
}
*/
    self.deleteAModel = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete a model",
            "path": "recommendations/v4.0/models/{id}",
            "method": "DELETE",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d8",
            "id": "56f30d77eda5650db055a3d8",
            "description": "Deletes an existing model by ID.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "id",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Recommendations: Delete usage file
	Description: Deletes a specific usage file
*/
    self.deleteUsageFile = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete usage file",
            "path": "recommendations/v4.0/models/{modelId}/usage/{fileId}",
            "method": "DELETE",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25b3",
            "id": "577ec1847270320f24da25b3",
            "description": "Deletes an existing model by ID.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "fileId",
                "description": "The usage file id to delete.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Recommendations: Download usage file
	Description: Download a specific usage file
*/
    self.downloadUsageFile = ({
        parameters
    }) => {

        const operation = {
            "name": "Download usage file",
            "path": "recommendations/v4.0/models/{modelId}/usage/{fileId}",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25b2",
            "id": "577ec1847270320f24da25b2",
            "description": "Download a specific usage file",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "fileId",
                "description": "The usage file id to delete.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	Name: Recommendations: Get all batch jobs
	Description: Get information about an ongoing batch jobs.
*/
    self.getAllBatchJobs = ({
        parameters
    }) => {

        const operation = {
            "name": "Get all batch jobs",
            "path": "recommendations/v4.0/batchjobs/{jobId}",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "5788771e727032196c8b3d44",
            "id": "5788771e727032196c8b3d44",
            "description": "Get information about an ongoing batch jobs.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "jobId",
                "description": "Unique identifier of the job.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

            /**
	Name: Recommendations: Get all builds
	Description: Retrieves information on all builds for a given model.

*/
    self.getAllBuilds = ({
        parameters
    }) => {

        const operation = {
            "name": "Get all builds",
            "path": "recommendations/v4.0/models/{modelId}/builds",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3cf",
            "id": "56f30d77eda5650db055a3cf",
            "description": "Retrieves information on all builds for a given model.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "onlyLastRequestedBuild",
                "description": "true to return only the last build of the model, false to return all the builds",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "boolean"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Recommendations: Get all business rules
	Description: Retrieves information on all rules for a given model.

*/
    self.getAllBusinessRules = ({
        parameters
    }) => {

        const operation = {
            "name": "Get all builds",
            "path": "recommendations/v4.0/models/{modelId}/rules",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25aa",
            "id": "577ec1847270320f24da25aa",
            "description": "Retrieves the details of all rules for a model.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	Name: Recommendations: Get all catalog items

	Description: Retrieves information on all rules for a given model.

*/
    self.getAllCatalogItems = ({
        parameters
    }) => {

        const operation = {
            "name": "Get all catalog items",
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25a8",
            "id": "577ec1847270320f24da25a8",
            "description": "Retrieves a list of catalog items. ",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "$top",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "$skip",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "$maxpagesize",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        const headers = {
            'Accept': 'application/json'
        }

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers
        })

    };

        /**
	Name: Recommendations: Get all models
	Description: Retrieves all models.
	Example Parameters: {}
*/
    self.getAllModels = () => {

        const operation = {
            "name": "Get all models",
            "path": "recommendations/v4.0/models",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d5",
            "id": "56f30d77eda5650db055a3d5",
            "description": "Retrieves all models.",
            "serviceName": "Recommendations",
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint
        })

    };

        /**
	Name: Recommendations: Get build by id
	Description: Retrieves information about the build, including parameters used to build it.
	Example Parameters: {
	"modelId": null,
	"buildId": null
}
*/
    self.getBuildById = ({
        parameters
    }) => {

        const operation = {
            "name": "Get build by id",
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d1",
            "id": "56f30d77eda5650db055a3d1",
            "description": "Retrieves information about the build, including parameters used to build it.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "Format - int64. Unique identifier of the build",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };



        /**
	Name: Recommendations: Get build data statistics
	Description: Retrieves the statistics about the data used to create a given build of the model.
*/
    self.getBuildDataStatistics = ({
        parameters
    }) => {

        const operation = {
            "name": "Get build data statistics",
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}/datastatistics",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "57b4e53ab439b304fc1d9378",
            "id": "57b4e53ab439b304fc1d9378",
            "description": "Retrieves the statistics about the data used to create a given build of the model.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "Format - int64. Unique identifier of the build",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	   /**
	Name: Recommendations: Get build metrics
	Description: Retrieves the build metrics for the given build of the model. This will return metrics such as precision and diversity for the build. As part of the precision and diversity metrics evaluation, the system finds a sample of users, and then the transactions for those users are split into two groups: the training dataset and the test dataset. In order to get metrics, you should have set the enableModelingInsights parameter to true at build time.
	Example Parameters: {
	"modelId": null,
	"buildId": null
}
*/
    self.getBuildMetrics = ({
        parameters
    }) => {

        const operation = {
            "name": "Get build metrics",
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}/metrics",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "573e43bb3e9d4627a8c4bd3e",
            "id": "573e43bb3e9d4627a8c4bd3e",
            "description": "Retrieves the build metrics for the given build of the model. This will return metrics such as precision and diversity for the build. As part of the precision and diversity metrics evaluation, the system finds a sample of users, and then the transactions for those users are split into two groups: the training dataset and the test dataset. In order to get metrics, you should have set the enableModelingInsights parameter to true at build time.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "Format - int64. Unique identifier of the build",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	   /**
	Name: Recommendations: Get build metrics
	Description: Retrieves information about a rule
*/
    self.getBusinessRule = ({
        parameters
    }) => {

        const operation = {
            "name": "Get build metrics",
            "path": "recommendations/v4.0/models/{modelId}/rules/{ruleId}",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25ad",
            "id": "577ec1847270320f24da25ad",
            "description": "Retrieves information about a rule.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "ruleId",
                "description": "Format - int64. Unique identifier of the rule",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Recommendations: Get item-to-item recommendations
	Description: Get recommendations for one or more items based on a specific build.

Special cases (If AllowColdItemPlacement option is not set when building the model): 
1. If the item list contains just a single item that is not in the catalog - an empty list is returned.
2. If the item list contains some items that don't appear in the catalog - these are removed and a result is generated based on the other items.
3. If an item list contains only cold items the most popular recommendation list is generated as a response.
4. If the items list contains some cold items (after removing the items that don't appear in the catalog) - the result is generated based on the other items only.
Empty recommendations may be returned if none of the items are in the catalog or if the trained model did not have sufficient data to provide recommendations for the items.

If a build id is not specified, the active build will be used to return recommendations. Ranking builds are not supported for getting recommendations. A ranking build is used for getting the features ranking only.

Note that the recommendation scores for different build types will be in different ranges, and should not be compared across build types.
*/
    self.getItemToItemRecommendations = ({
        parameters
    }) => {

        const operation = {
            "name": "Get recommendations based on items (I2I)",
            "path": "recommendations/v4.0/models/{modelId}/recommend/item",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d4",
            "id": "56f30d77eda5650db055a3d4",
            "description": "Get recommendations for one or more items based on a specific build.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "itemIds",
                "description": "Comma-separated list of the items to recommend for. If the active build is of type FBT, then you can send only one item. <br> Max length: 1024",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "numberOfResults",
                "description": "Format - int32. Number of recommended items to return",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "minimalScore",
                "description": "Format - double. Minmal score, currently honored for only FBT builds.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "includeMetadata",
                "description": "Future use, always false.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "buildId",
                "description": "Format - int64. The build id to use for this recommendation request. If the number is less than 0, uses the active build of the model instead.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	Name: Recommendations: Get a model by id
	Description: Gets a model by ID.
	Example Parameters: {
	"id": null
}
*/
    self.getAModelById = ({
        parameters
    }) => {

        const operation = {
            "name": "Get a model by id",
            "path": "recommendations/v4.0/models/{id}",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d7",
            "id": "56f30d77eda5650db055a3d7",
            "description": "Gets a model by ID.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "id",
                "description": "Unique identifier of the model to be fetched.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	Name: Recommendations: Get model features
	Description: Get Feature info from given modelId and rankBuildId
*/
    self.getModelFeatures = ({
        parameters
    }) => {

        const operation = {
            "name": "Get model features",
            "path": "recommendations/v4.0/models/{modelId}/features",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d7",
            "id": "56f30d77eda5650db055a3d7",
            "description": "Get Feature info from given modelId and rankBuildId",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "rankBuildId",
                "description": "Format - int64. The buildId used for the ranking request.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	Name: Recommendations: Get operation status
	Description: Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.

To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.
*/
    self.getOperationStatus = ({
        parameters
    }) => {

        const operation = {
            "name": "Retrieve the status of an operation",
            "path": "recommendations/v4.0/operations/{id}",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3da",
            "id": "56f30d77eda5650db055a3da",
            "description": "Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.\
            To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "id",
                "description": "Operation ID",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	Name: Recommendations: Get specific catalog items by search term
	Description: Search for catalog items.

Retrieves a list of catalog items using the ids provided or items that contain the given search term. The 'ids' and 'searchTerm' parameters cannot be used together. If both are provided, only the searchTerm parameter will be ignored. If provided, the searchTerm parameters must be at least 3 characters long.
*/
    self.getSpecificCatalogItemsBySearchTerm = ({
        parameters
    }) => {

        const operation = {
            "name": "Get specific catalog items by search term",
            "path": "recommendations/v4.0/models/{modelId}/catalog/items",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d7",
            "id": "56f30d77eda5650db055a3d7",
            "description": "Search for catalog items.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "ids",
                "description": "The ids of the catalog items to retrieve",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "searchTerm",
                "description": "The search term to filter by catalog items by",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
	Name: Recommendations: Get usage statistics for a build
	Description: Gets statistics about the user interactions (usage) during a given time interval for a particular build. This can be helpful in order to calculate conversion rates
*/
    self.getUsageStatisticsForABuild = ({
        parameters
    }) => {

        const operation = {
            "name": "Get usage statistics for a build",
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}/usagestatistics",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "57b4e53ab439b304fc1d937a",
            "id": "57b4e53ab439b304fc1d937a",
            "description": "Gets statistics about the user interactions (usage) during a given time interval for a particular build. This can be helpful in order to calculate conversion rates",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "The ids of the catalog items to retrieve",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "interval",
                "description": "It specifies the start and end date in ISO 8601 format. For instance: \"2007-03-01T13:00:00Z/2008-05-11T15:30:00Z\"",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "eventTypes",
                "description": "Comma separated list of \"EventTypes\". Empty string or null to get all events",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
	Name: Recommendations: Get usage statistics for a model
    Description: Gets statistics about the user interactions (usage) during a given time interval for a particular model. This can be helpful in order to calculate conversion rates.
    
    */
    self.getUsageStatisticsForAModel = ({
        parameters
    }) => {

        const operation = {
            "name": "Get usage statistics for a model",
            "path": "recommendations/v4.0/models/{modelId}/usagestatistics",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "57b4e53ab439b304fc1d9379",
            "id": "57b4e53ab439b304fc1d9379",
            "description": "Gets statistics about the user interactions (usage) during a given time interval for a particular model. This can be helpful in order to calculate conversion rates.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "interval",
                "description": "It specifies the start and end date in ISO 8601 format. For instance: \"2007-03-01T13:00:00Z/2008-05-11T15:30:00Z\"",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "eventTypes",
                "description": "Comma separated list of \"EventTypes\". Empty string or null to get all events",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

    /**
			Name: Recommendations: Get user-to-item recommendations
			Description: Get user recommendations of a build of type "Recommendation" marked as active build.
The API will return a list of predicted items according to the usage history of the user.
Note: There is no user recommendation for an FBT build. If the active build is FBT, this method will return an error.

Note

The EnableU2I build parameter needs to be set to true in order to train the model so that it can support user recommendations.

Note that the recommendation scores for different build types will be in different ranges, and should not be compared across build types.
		*/
    self.getUserToItemRecommendations = ({
        parameters
    }) => {

        const operation = {
            "name": "Get user recommendations (U2I)",
            "path": "recommendations/v4.0/models/{modelId}/recommend/user",
            "method": "GET",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3dd",
            "id": "56f30d77eda5650db055a3dd",
            "description": "Get user recommendations of a build of type \"Recommendation\" marked as active build.\
            The API will return a list of predicted items according to the usage history of the user.\
            Note: There is no user recommendation for an FBT build. If the active build is FBT, this method will return an error.",
            "serviceName": "Recommendations",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "userId",
                "description": "Unique user identifier.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "numberOfResults",
                "description": "Format - int32. Number of recommended items to return.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "itemsIds",
                "description": "The unique identifiers of the items to consider in addition to user history.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "includeMetadata",
                "description": "Set to false. (For future use)",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "buildId",
                "description": "Format - int64. Build identifier, if the number is less than 0, uses the active build of the model instead.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };

        /**
			Name: Recommendations: List usage files
			Description: Lists all the usage events files of a model
		*/
        self.listUsageFiles = ({
            parameters
        }) => {
    
            const operation = {
                "name": "List usage files",
                "path": "recommendations/v4.0/models/{modelId}/usage",
                "method": "GET",
                "serviceId": "Recommendations.V4.0",
                "operationId": "577ec1847270320f24da25af",
                "id": "577ec1847270320f24da25af",
                "description": "Lists all the usage events files of a model",
                "serviceName": "Recommendations",
                "parameters": [{
                    "name": "modelId",
                    "description": "Unique identifier of the model.",
                    "value": null,
                    "required": true,
                    "type": "routeParam",
                    "typeName": "string"
                }]
            };
    
            return makeRequest(self, {
                operation: operation,
                endpoint: endpoint,
                parameters: parameters
            })
    
        };

    /**
        Name: Recommendations: Start batch job
        Description: Submits a Batch Execution job.

There are situations when you need to get recommendations for more than one item at a time. For instance, you may be interested in creating a recommendations cache or even doing an analysis on the types of recommendations you are getting.

Batch scoring operations are asynchronous operations. This API allows you to kick start the scoring operation. Once the operation is started, you need to wait for it to complete before you can gather the results of the operation. The response from the creation call with contain a header called Operation-Location. You can use this operation location to query the status of the batch processing. See the "Get operation status" API.
    */
    self.startBatchJob = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Start batch job",
            "path": "recommendations/v4.0/batchjobs",
            "method": "POST",
            "serviceId": "Recommendations.V4.0",
            "operationId": "5788771e727032196c8b3d43",
            "id": "5788771e727032196c8b3d43",
            "description": "Submits a Batch Execution job.",
            "serviceName": "Recommendations",
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
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            headers: headers,
            body: body
        })
        .then((operationIdUrl) => {
            var splittedUrl = operationIdUrl.split('/');
            return splittedUrl[splittedUrl.length - 1];
        })

    };

        /**
	Name: Recommendations: Update catalog items
	Description: Updates a set of items in the catalog.

The catalog items to be updated should be provided in the request body.
If an item exists, it is updated with the new information provided.
If an item was not previously in the catalog, it will be added to the catalog.
The format used is the same as the format for uploading catalog files
*/
    self.updateCatalogItems = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Update catalog items",
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "PATCH",
            "serviceId": "Recommendations.V4.0",
            "operationId": "58926221b439b30ef8b40f58",
            "id": "58926221b439b30ef8b40f58",
            "description": "Updates a set of items in the catalog.\
            The catalog items to be updated should be provided in the request body.\
            If an item exists, it is updated with the new information provided.\
            If an item was not previously in the catalog, it will be added to the catalog.\
            The format used is the same as the format for uploading catalog files",
            "serviceName": "Recommendations",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model. Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
	Name: Recommendations: Update a model
	Description: Allows you to update the description or the active build for a model.

Active build ID – Every build for every model has a build ID. By default the first build produced is set as the active build for the model. Once you have an active build ID and you do additional builds for the same model, you need to explicitly set it as the default build ID if you want to. When you consume recommendations, if you do not specify the build ID that you want to use, the default one will be used automatically.

This mechanism enables you - once you have a recommendation model in production - to build new models and test them before you promote them to production.
*/
    self.updateModel = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Update a model",
            "path": "recommendations/v4.0/models/{id}",
            "method": "PATCH",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d9",
            "id": "56f30d77eda5650db055a3d9",
            "description": "Allows you to update the description or the active build for a model.",
            "serviceName": "Recommendations",
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
            }],
            "parameters": [{
                "name": "id",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
			Name: Recommendations: Upload catalog file
			Description: Once you have created a model, you will need to upload catalog data and usage data to it before you can train the system and create a build. The catalog data contains information about the items you are offering to your customer.

It needs to be passed as the content of body request and it should follow this format.

< Id>,<Item Name>,<Item Category>,[<Description>],<Features list>
		*/
    self.uploadACatalogFileToAModel = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Upload a catalog file to a model",
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "POST",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f316efeda5650db055a3e1",
            "id": "56f316efeda5650db055a3e1",
            "description": "Once you have created a model, you will need to upload catalog data and usage data to it before you can train the system and create a build. The catalog data contains information about the items you are offering to your customer.",
            "serviceName": "Recommendations",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model. Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "catalogDisplayName",
                "description": "Display name of the catalog data. e.g. \"CatalogFile1\" Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

        /**
	Name: Recommendations: Upload usage event
	Description: Upload a usage event to a model. If buildId is set to "-1", the event is ingested against the Active Build of the model. Set the buildId is set to null or 0, the events are ingested against the Active build, if Active build doesn't exist, the events are not associated with any build.
*/
    self.uploadUsageEvent = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Upload usage event",
            "path": "recommendations/v4.0/models/{modelId}/usage/events",
            "method": "POST",
            "serviceId": "Recommendations.V4.0",
            "operationId": "577ec1847270320f24da25b1",
            "id": "577ec1847270320f24da25b1",
            "description": "Upload a usage event to a model. If buildId is set to \"-1\", the event is ingested against the Active Build of the model. Set the buildId is set to null or 0, the events are ingested against the Active build, if Active build doesn't exist, the events are not associated with any build.",
            "serviceName": "Recommendations",
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
            }],
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
	Name: Recommendations: Upload a usage file to a model
	Description: Once you have created a model and uploaded catalog data, you should upload usage data to it before you can train the system and create a build. The usage data describes all the transactions that your customers have made in the past; in essence the interactions between users and items.

It needs to be passed as the content of body request and it should follow the format below:
<User Id>,<Item Id>,<Time>,[<Event type>]
*/
    self.uploadAUsageFileToAModel = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Upload a usage file to a model",
            "path": "recommendations/v4.0/models/{modelId}/usage",
            "method": "POST",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f316efeda5650db055a3e2",
            "id": "56f316efeda5650db055a3e2",
            "description": "Once you have created a model and uploaded catalog data, you should upload usage data to it before you can train the system and create a build. The usage data describes all the transactions that your customers have made in the past; in essence the interactions between users and items.\
            It needs to be passed as the content of body request and it should follow the format below:\
            <User Id>,<Item Id>,<Time>,[<Event type>]",
            "serviceName": "Recommendations",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "usageDisplayName",
                "description": "Display name of the usage data. e.g. \"UsageFile1\" Only letters(A-Z, a-z), numbers(0-9), hyphens(-) and underscore(_) are allowed. Max length: 50",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    return self;
};

module.exports = recommendations;