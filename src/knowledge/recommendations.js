const commonService = require('../commonService');

/**
 * The Recommendations API built with Microsoft Azure Machine Learning helps your customer discover items in your catalog. 
 * Customer activity in your digital store is used to recommend items and to improve conversion in your digital store.
 * 
 * The recommendation engine may be trained by uploading data about past customer activity or by collecting data directly from your digital store. 
 * When the customer returns to your store you are able to feature recommended items from your catalog that may increase your conversion rate.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3db|documentation}
 */
class recommendations extends commonService {
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
     * Cancels an ongoing operation. One example is to cancel a build request that was submitted.

    To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.
    
    @returns {Promise.<string>}  ID of operation
    */
    cancelOperation({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/operations/{id}",
            "method": "DELETE",
            "operationId": "56f30d77eda5650db055a3db",
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
        }).then(operationIdUrl => {
            return this.getOperationIdFromUrl(operationIdUrl);
        })

    };

    /**
     *  Adds a new business rule for a model. These are the types of rules supported: 
- BlockList - BlockList enables you to provide a list of items that you do not want to return in the recommendation results. 
- FeatureBlockList - Feature BlockList enables you to block items based on the values of its features. Do not send more than 1000 items in a single blocklist rule or your call may timeout. If you need to block more than 1000 items, you can make several blocklist calls.
- Upsale - Upsale enables you to enforce items to return in the recommendation results.
- WhiteList - White List enables you to only suggest recommendations from a list of items. 
- FeatureWhiteList - Feature White List enables you to only recommend items that have specific feature values. 
- PerSeedBlockList - Per Seed Block List enables you to provide per item a list of items that cannot be returned as recommendation results. 

Note: The call will fail if any of the itemIds or features provided are invalid. Make sure that the items are part of the catalog before creating a rule for those items.
@returns {Promise.<object>}
       */
    createBusinessRule({ parameters, headers, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/rules",
            "method": "POST",
            "operationId": "577ec1847270320f24da25ab",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
     * A model is a container of your usage data, catalog data and the recommendation model.
     * 
Once you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating builds on that model.
You may create up to 10 models. If you need to delete unused models, you may use the "Delete a model" API.
@returns {Promise.<object>}
		*/
    createAModel({ headers, body }) {

        const operation = {
            "path": "recommendations/v4.0/models",
            "method": "POST",
            "operationId": "56f30d77eda5650db055a3d6",
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
                "name": "modelName",
                "description": "Name of the model",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "description",
                "description": "Description of the model",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }],

        };

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        })

    };

    /**
     * By creating a new build, you start the training process that will allow you to generate a machine learning model that you can later on query for recommendations.

    Before triggering a build you first must upload catalog and usage data. Triggering a new build is an asynchronous operations. Once a build is triggered you will receive an operation (in the Operation-Location header of the response) that you can use to track the build status, or to cancel the build operation. See the "Retrieve the status of an operation" API.

    There are 4 types of builds: a Recommendation build, a Rank build, an FBT (Frequently-Bought-Together) build and a SAR (Smart Adaptive Recommendations) build.
    
    @returns {Promise.<string>}  ID of operation
    */
    createOrTriggerABuild({ parameters, headers, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/builds",
            "method": "POST",
            "operationId": "56f30d77eda5650db055a3d0",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        }).then(operationIdUrl => {
            return this.getOperationIdFromUrl(operationIdUrl);
        })

    };

    /**
     * Delete all rules.
     * @returns {Promise.<object>}
    */
    deleteAllBusinessRules({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/rules",
            "method": "DELETE",
            "operationId": "577ec1847270320f24da25ac",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
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
     * Deletes all usage file of a model.
     * @returns {Promise.<object>}
    */
    deleteAllUsageFiles({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/usage",
            "method": "DELETE",
            "operationId": "577ec1847270320f24da25b0",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
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
     * Deletes a build.

    You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it.

    You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.
    @returns {Promise.<object>}
		*/
    deleteABuild({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}",
            "method": "DELETE",
            "operationId": "56f30d77eda5650db055a3d2",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Deletes a rule by ID.
     * @returns {Promise.<object>}
       */
    deleteBusinessRule({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/rules/{ruleId}",
            "method": "DELETE",
            "operationId": "577ec1847270320f24da25ae",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Deletes a set of items from the catalog. The set of items should be passed in the request body, unless deleteAll is set to true.

    Notes:
    1. Item Ids can have a max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash).
    2.	Deleting a catalog item will not impact the recommendations served by previous builds. 
    The request body should contain one line per item that must be deleted. The first entry per line should contain the item id to be deleted. This allows you to either pass just the item id, or in the same format that is used to upload items to the catalog.

    @returns {Promise.<object>}

    */
    deleteCatalogItems({ parameters, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "DELETE",
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
                "value": false,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-type': "application/octet-stream"},
            body: body
        })

    };

    /**
     * Deletes an existing model by ID.
	Example Parameters: {
        "id": null
    }
    @returns {Promise.<object>}
*/
    deleteAModel({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}",
            "method": "DELETE",
            "operationId": "56f30d77eda5650db055a3d8",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
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
     * Deletes a specific usage file
     * @returns {Promise.<object>}
    */
    deleteUsageFile({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/usage/{fileId}",
            "method": "DELETE",
            "operationId": "577ec1847270320f24da25b3",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Download a specific usage file
     * @returns {Promise.<object>}
    */
    downloadUsageFile({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/usage/{fileId}",
            "method": "GET",
            "operationId": "577ec1847270320f24da25b2",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Get information about an ongoing batch jobs.
     * @returns {Promise.<object>}
    */
    getAllBatchJobs({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/batchjobs/{jobId}",
            "method": "GET",
            "operationId": "5788771e727032196c8b3d44",
            "parameters": [{
                "name": "jobId",
                "description": "Unique identifier of the job.",
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
     *  Retrieves information on all builds for a given model.
     * @returns {Promise.<object>}
    */
    getAllBuilds({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/builds",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3cf",
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
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Retrieves information on all rules for a given model.
     * @returns {Promise.<object>}
    */
    getAllBusinessRules({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/rules",
            "method": "GET",
            "operationId": "577ec1847270320f24da25aa",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
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
     *  Retrieves a list of catalog items.
     * @returns {Promise.<object>}
    */
    getAllCatalogItems({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "GET",
            "operationId": "577ec1847270320f24da25a8",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers
        })

    };

    /**
     *  Retrieves all models.
     * @returns {Promise.<object>}
    */
    getAllModels() {

        const operation = {
            "path": "recommendations/v4.0/models",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3d5",
        };

        return this.makeRequest({
            operation: operation,

        })

    };

    /**
     * Retrieves information about the build, including parameters used to build it.
    Example Parameters: {
        "modelId": null,
        "buildId": null
        }
        @returns {Promise.<object>}
    */
    getBuildById({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3d1",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };


    /**
     * Retrieves the statistics about the data used to create a given build of the model.
     * @returns {Promise.<object>}
    */
    getBuildDataStatistics({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}/datastatistics",
            "method": "GET",
            "operationId": "57b4e53ab439b304fc1d9378",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Retrieves the build metrics for the given build of the model. This will return metrics such as precision and diversity for the build. As part of the precision and diversity metrics evaluation, the system finds a sample of users, and then the transactions for those users are split into two groups: the training dataset and the test dataset. In order to get metrics, you should have set the enableModelingInsights parameter to true at build time.
        Example Parameters: {
            "modelId": null,
            "buildId": null
        }
        @returns {Promise.<object>}
    */
    getBuildMetrics({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}/metrics",
            "method": "GET",
            "operationId": "573e43bb3e9d4627a8c4bd3e",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Retrieves information about a rule.
     * @returns {Promise.<object>}
    */
    getBusinessRule({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/rules/{ruleId}",
            "method": "GET",
            "operationId": "577ec1847270320f24da25ad",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Get recommendations for one or more items based on a specific build.

    Special cases (If AllowColdItemPlacement option is not set when building the model): 
    1. If the item list contains just a single item that is not in the catalog - an empty list is returned.
    2. If the item list contains some items that don't appear in the catalog - these are removed and a result is generated based on the other items.
    3. If an item list contains only cold items the most popular recommendation list is generated as a response.
    4. If the items list contains some cold items (after removing the items that don't appear in the catalog) - the result is generated based on the other items only.
    Empty recommendations may be returned if none of the items are in the catalog or if the trained model did not have sufficient data to provide recommendations for the items.

    If a build id is not specified, the active build will be used to return recommendations. Ranking builds are not supported for getting recommendations. A ranking build is used for getting the features ranking only.

    Note that the recommendation scores for different build types will be in different ranges, and should not be compared across build types.

    @returns {Promise.<object>}
*/
    getItemToItemRecommendations({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/recommend/item",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3d4",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     *  Gets a model by ID.
    Example Parameters: {
        "id": null
        }
        @returns {Promise.<object>}
*/
    getAModelById({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{id}",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3d7",
            "parameters": [{
                "name": "id",
                "description": "Unique identifier of the model to be fetched.",
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
     * Get Feature info from given modelId and rankBuildId
     * @returns {Promise.<object>}
    */
    getModelFeatures({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/features",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3d7",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.

        To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.
        @returns {Promise.<object>}
    */
    getOperationStatus({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/operations/{id}",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3da",
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
     * Search for catalog items.

        Retrieves a list of catalog items using the ids provided or items that contain the given search term. The 'ids' and 'searchTerm' parameters cannot be used together. If both are provided, only the searchTerm parameter will be ignored. If provided, the searchTerm parameters must be at least 3 characters long.
        @returns {Promise.<object>}
    */
    getSpecificCatalogItemsBySearchTerm({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/catalog/items",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3d7",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Gets statistics about the user interactions (usage) during a given time interval for a particular build. This can be helpful in order to calculate conversion rates
     * @returns {Promise.<object>}
    */
    getUsageStatisticsForABuild({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}/usagestatistics",
            "method": "GET",
            "operationId": "57b4e53ab439b304fc1d937a",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Gets statistics about the user interactions (usage) during a given time interval for a particular model. This can be helpful in order to calculate conversion rates.
     * @returns {Promise.<object>}
    */
    getUsageStatisticsForAModel({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/usagestatistics",
            "method": "GET",
            "operationId": "57b4e53ab439b304fc1d9379",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Get user recommendations of a build of type "Recommendation" marked as active build.
    The API will return a list of predicted items according to the usage history of the user.
    Note: There is no user recommendation for an FBT build. If the active build is FBT, this method will return an error.

    The EnableU2I build parameter needs to be set to true in order to train the model so that it can support user recommendations.

    Note that the recommendation scores for different build types will be in different ranges, and should not be compared across build types.
    @returns {Promise.<object>}
		*/
    getUserToItemRecommendations({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/recommend/user",
            "method": "GET",
            "operationId": "56f30d77eda5650db055a3dd",
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
                "description": "Number of recommended items to return.",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Lists all the usage events files of a model
     * @returns {Promise.<object>}
    */
    listUsageFiles({ parameters }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/usage",
            "method": "GET",
            "operationId": "577ec1847270320f24da25af",
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
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
     * Submits a Batch Execution job.
    There are situations when you need to get recommendations for more than one item at a time. 
    For instance, you may be interested in creating a recommendations cache or even doing an analysis on the types of recommendations you are getting.

    Batch scoring operations are asynchronous operations. This API allows you to kick start the scoring operation. 
    Once the operation is started, you need to wait for it to complete before you can gather the results of the operation. The response from the creation call with contain a header called Operation-Location. You can use this operation location to query the status of the batch processing. See the "Get operation status" API.

    @returns {Promise.<string>}  ID of operation
    */
    startBatchJob({ headers, body }) {

        const operation = {
            "path": "recommendations/v4.0/batchjobs",
            "method": "POST",
            "operationId": "5788771e727032196c8b3d43",
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

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        }).then(operationIdUrl => {
            return this.getOperationIdFromUrl(operationIdUrl);
        })

    };

    /**
     * Updates a set of items in the catalog.

        The catalog items to be updated should be provided in the request body.
        If an item exists, it is updated with the new information provided.
        If an item was not previously in the catalog, it will be added to the catalog.
        The format used is the same as the format for uploading catalog files

        @returns {Promise.<object>}
    */
    updateCatalogItems({ parameters, headers, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "PATCH",
            "operationId": "58926221b439b30ef8b40f58",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
     * Allows you to update the description or the active build for a model.

    Active build ID – Every build for every model has a build ID. By default the first build produced is set as the active build for the model. Once you have an active build ID and you do additional builds for the same model, you need to explicitly set it as the default build ID if you want to. When you consume recommendations, if you do not specify the build ID that you want to use, the default one will be used automatically.

    This mechanism enables you - once you have a recommendation model in production - to build new models and test them before you promote them to production.

    @returns {Promise.<object>}
    */
    updateModel({ parameters, headers, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{id}",
            "method": "PATCH",
            "operationId": "56f30d77eda5650db055a3d9",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
     * Once you have created a model, you will need to upload catalog data and usage data to it before you can train the system and create a build. The catalog data contains information about the items you are offering to your customer.

    It needs to be passed as the content of body request and it should follow this format.

    <Id>,<Item Name>,<Item Category>,[<Description>],<Features list>

    @returns {Promise.<object>}
    */
    uploadACatalogFileToAModel({ parameters, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/catalog",
            "method": "POST",
            "operationId": "56f316efeda5650db055a3e1",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-type': "application/octet-stream"},
            body: body
        })

    };

    /**
     *  Upload a usage event to a model. If buildId is set to "-1", the event is ingested against the Active Build of the model. Set the buildId is set to null or 0, the events are ingested against the Active build, if Active build doesn't exist, the events are not associated with any build.
     * 
     * @returns {Promise.<object>}
    */
    uploadUsageEvent({ parameters, headers, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/usage/events",
            "method": "POST",
            "operationId": "577ec1847270320f24da25b1",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
     * Once you have created a model and uploaded catalog data, you should upload usage data to it before you can train the system and create a build. The usage data describes all the transactions that your customers have made in the past; in essence the interactions between users and items.

    It needs to be passed as the content of body request and it should follow the format below:
    <User Id>,<Item Id>,<Time>,[<Event type>]

    @returns {Promise.<object>}
    */
    uploadAUsageFileToAModel({ parameters, body }) {

        const operation = {
            "path": "recommendations/v4.0/models/{modelId}/usage",
            "method": "POST",
            "operationId": "56f316efeda5650db055a3e2",
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

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {"Content-type": "application/octet-stream"},
            body: body
        })

    };

};

module.exports = recommendations;