const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const recommendations = ({
    API_KEY
}) => {

    let self = this;

    /**
			Name: Recommendations: Create a model
			Description: Create a new model.  A model is a container of your usage data, catalog data and the recommendation model.<br>
Once you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating a new build in that model.

<p><b>Note:</b></p>
<p>You may create up to 10 models. If you need to delete unused models, you may use the "Delete a model" API.</p>
			Example Parameters: {}
		*/
    self.createAModel = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Create a model",
            "path": "recommendations/v4.0/models",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d6",
            "id": "56f30d77eda5650db055a3d6",
            "description": "Create a new model.	A model is a container of your usage data, catalog data and the recommendation model.<br>\nOnce you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating a new build in that model.\n\n<p><b>Note:</b></p>\n<p>You may create up to 10 models. If you need to delete unused models, you may use the \"Delete a model\" API.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Content-Type": "application/json",
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": []
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Create/Trigger a build
	Description: Trigger a recommendation model build. Before triggering a build you first must upload catalog and usage data. Once a build is triggered you will receive an <i>operation</i> that you can use to track the build status, or to cancel the build operation.<p>There are 3 types of builds: a <i>Recommendation</i> build, a <i>Rank</i> build and an <i> FBT (frequently bought together) build.</i></p><p>The recommendation build's purpose is to generate a recommendation model used for predictions. Predictions (for this type of build) come in two flavors: <br><p>* <i>Item to Item recommendations (I2I)</i><br>Given an item or a list of items this option will predict a list of items that are likely to be of high interest. </p><p>* <i>User to Item recommendations (U2I) </i><br>Given a user id (and optionally a list of items) this option will predict a list of items that are likely to be of high interest for the given user (and its additional choice of items). The U2I recommendations are based on the history of items that were of interest for the user up to the time the model was built.</p><p>An FBT (Frequently bought together) build is yet another recommendations algorithm called sometimes a "conservative" recommender, which is good for catalogs that are not homogeneous in nature (homogeneous: books, movies, some food, fashion; non-homogeneous: computer and devices, cross-domain, highly diverse).</p><p><b>Note:</b> If the usage files that you uploaded contain the optional field "event type" then for FBT modelling only "Purchase" events will be used. If no event type is provided all events will be considered as purchase.</p><p>A rank build is a technical build that allows you to learn about the usefulness of your features. It is not currently supported on this API version.</p>
	Example Parameters: {
	"modelId": null
}
*/
    self.createOrTriggerABuild = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Create/Trigger a build",
            "path": "recommendations/v4.0/models/{modelId}/builds",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d0",
            "id": "56f30d77eda5650db055a3d0",
            "description": "Trigger a recommendation model build. Before triggering a build you first must upload catalog and usage data. Once a build is triggered you will receive an <i>operation</i> that you can use to track the build status, or to cancel the build operation.<p>There are 3 types of builds: a <i>Recommendation</i> build, a <i>Rank</i> build and an <i> FBT (frequently bought together) build.</i></p><p>The recommendation build's purpose is to generate a recommendation model used for predictions. Predictions (for this type of build) come in two flavors: <br><p>* <i>Item to Item recommendations (I2I)</i><br>Given an item or a list of items this option will predict a list of items that are likely to be of high interest. </p><p>* <i>User to Item recommendations (U2I) </i><br>Given a user id (and optionally a list of items) this option will predict a list of items that are likely to be of high interest for the given user (and its additional choice of items). The U2I recommendations are based on the history of items that were of interest for the user up to the time the model was built.</p><p>An FBT (Frequently bought together) build is yet another recommendations algorithm called sometimes a \"conservative\" recommender, which is good for catalogs that are not homogeneous in nature (homogeneous: books, movies, some food, fashion; non-homogeneous: computer and devices, cross-domain, highly diverse).</p><p><b>Note:</b> If the usage files that you uploaded contain the optional field \"event type\" then for FBT modelling only \"Purchase\" events will be used. If no event type is provided all events will be considered as purchase.</p><p>A rank build is a technical build that allows you to learn about the usefulness of your features. It is not currently supported on this API version.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Content-Type": "application/json",
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
			Name: Recommendations: Delete a build
			Description: Delete a build.
<p>You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it. </p>
<p>You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.</p>
			Example Parameters: {
			"modelId": null,
			"buildId": null
		}
		*/
    self.deleteABuild = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Delete a build",
            "path": "recommendations/v4.0/models/{modelId}/builds/{buildId}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d2",
            "id": "56f30d77eda5650db055a3d2",
            "description": "Delete a build.\n<p>You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it. </p>\n<p>You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "Format - int64. Unique identifier of the build",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "integer"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Delete a model
	Description: Deletes an existing model by ID.
	Example Parameters: {
	"id": null
}
*/
    self.deleteAModel = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Delete a model",
            "path": "recommendations/v4.0/models/{id}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d8",
            "id": "56f30d77eda5650db055a3d8",
            "description": "Deletes an existing model by ID.",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "id",
                "description": "Unique identifier of the model.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Delete/Cancel an ongoing operation
	Description: <p>Cancels an ongoing operation. One example is to cancel a build request that was submitted.</p><p>To get the operation ID location, you should check the <i>Operation-Location</i> header that is returned on the response when you are triggering a build.</p>
	Example Parameters: {
	"id": null
}
*/
    self.deleteOrCancelAnOngoingOperation = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Delete/Cancel an ongoing operation",
            "path": "recommendations/v4.0/operations/{id}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3db",
            "id": "56f30d77eda5650db055a3db",
            "description": "<p>Cancels an ongoing operation. One example is to cancel a build request that was submitted.</p><p>To get the operation ID location, you should check the <i>Operation-Location</i> header that is returned on the response when you are triggering a build.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "id",
                "description": "Operation ID",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

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
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d7",
            "id": "56f30d77eda5650db055a3d7",
            "description": "Gets a model by ID.",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "id",
                "description": "Unique identifier of the model to be fetched.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Get all models
	Description: Retrieves all models.
	Example Parameters: {}
*/
    self.getAllModels = ({
        parameters
    }) => {

        const operation = {
            "name": "Get all models",
            "path": "recommendations/v4.0/models",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d5",
            "id": "56f30d77eda5650db055a3d5",
            "description": "Retrieves all models.",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": []
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

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
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d1",
            "id": "56f30d77eda5650db055a3d1",
            "description": "Retrieves information about the build, including parameters used to build it.",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "Format - int64. Unique identifier of the build",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "integer"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
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
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "573e43bb3e9d4627a8c4bd3e",
            "id": "573e43bb3e9d4627a8c4bd3e",
            "description": "Retrieves the build metrics for the given build of the model. This will return metrics such as precision and diversity for the build. As part of the precision and diversity metrics evaluation, the system finds a sample of users, and then the transactions for those users are split into two groups: the training dataset and the test dataset. In order to get metrics, you should have set the enableModelingInsights parameter to true at build time.",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "buildId",
                "description": "Format - int64. Unique identifier of the build",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "integer"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Get details of all builds
	Description: Retrieves the status of all builds for a model.
	Example Parameters: {
	"modelId": null,
	"onlyLastRequestedBuild": null
}
*/
    self.getDetailsOfAllBuilds = ({
        parameters
    }) => {

        const operation = {
            "name": "Get details of all builds",
            "path": "recommendations/v4.0/models/{modelId}/builds",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3cf",
            "id": "56f30d77eda5650db055a3cf",
            "description": "Retrieves the status of all builds for a model.",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "onlyLastRequestedBuild",
                "description": "true to return only the last build of the model, false to return all the builds",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Get recommendations based on items (I2I)
	Description: <p>Get recommendations for one or more items based on a specific build.</p><p>Special cases: <br>1. If the item list contains just a single item that is not in the catalog - an empty list is returned.<br>2. If the item list contains some items that don't appear in the catalog - these are removed and a result is generated based on the other items.<br>3. If an item list contains only <i>cold items</i> the <i>most popular</i> recommendation list is generated as a response.<br>4. If the items list contains some <i>cold</i> items (after removing the items that don't appear in the catalog) - the result is generated based on the other items only.<br>
	Example Parameters: {
	"modelId": null,
	"itemIds": null,
	"numberOfResults": null,
	"minimalScore": null,
	"includeMetadata": null,
	"buildId": null
}
*/
    self.getRecommendationsBasedOnItems(I2I) = ({
        parameters
    }) => {

        const operation = {
            "name": "Get recommendations based on items (I2I)",
            "path": "recommendations/v4.0/models/{modelId}/recommend/item?itemIds={itemIds}&numberOfResults={numberOfResults}&minimalScore={minimalScore}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d4",
            "id": "56f30d77eda5650db055a3d4",
            "description": "<p>Get recommendations for one or more items based on a specific build.</p><p>Special cases: <br>1. If the item list contains just a single item that is not in the catalog - an empty list is returned.<br>2. If the item list contains some items that don't appear in the catalog - these are removed and a result is generated based on the other items.<br>3. If an item list contains only <i>cold items</i> the <i>most popular</i> recommendation list is generated as a response.<br>4. If the items list contains some <i>cold</i> items (after removing the items that don't appear in the catalog) - the result is generated based on the other items only.<br>",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "itemIds",
                "description": "Comma-separated list of the items to recommend for. If the active build is of type FBT, then you can send only one item. <br> Max length: 1024",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "numberOfResults",
                "description": "Format - int32. Number of recommended items to return",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "integer"
            }, {
                "name": "minimalScore",
                "description": "Format - double. Minmal score, currently honored for only FBT builds.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "number"
            }, {
                "name": "includeMetadata",
                "description": "Future use, always false.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "buildId",
                "description": "Format - int64. The build id to use for this recommendation request. If the number is less than 0, uses the active build of the model instead.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "integer"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
			Name: Recommendations: Get user recommendations (U2I)
			Description: Get user recommendations of a build of type "Recommendation" marked as active build.<br>
The API will return a list of predicted items according to the usage history of the user.<br>
Note:  There is no user recommendation for an <i>FBT</i> build. If the active build is <i>FBT</i>, this method will return an error.

<p><b>Note</b></p>
<p>The EnableU2I build parameter needs to be set to true in order to train the model so that it can support user recommendations.</p>
			Example Parameters: {
			"modelId": null,
			"userId": null,
			"numberOfResults": null,
			"itemsIds": null,
			"includeMetadata": null,
			"buildId": null
		}
		*/
    self.getUserRecommendations(U2I) = ({
        parameters
    }) => {

        const operation = {
            "name": "Get user recommendations (U2I)",
            "path": "recommendations/v4.0/models/{modelId}/recommend/user?userId={userId}&numberOfResults={numberOfResults}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3dd",
            "id": "56f30d77eda5650db055a3dd",
            "description": "Get user recommendations of a build of type \"Recommendation\" marked as active build.<br>\nThe API will return a list of predicted items according to the usage history of the user.<br>\nNote:	There is no user recommendation for an <i>FBT</i> build. If the active build is <i>FBT</i>, this method will return an error.\n\n<p><b>Note</b></p>\n<p>The EnableU2I build parameter needs to be set to true in order to train the model so that it can support user recommendations.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "userId",
                "description": "Unique user identifier.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "numberOfResults",
                "description": "Format - int32. Number of recommended items to return.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "integer"
            }, {
                "name": "itemsIds",
                "description": "The unique identifiers of the items to consider in addition to user history.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "includeMetadata",
                "description": "Set to false. (For future use)",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "buildId",
                "description": "Format - int64. Build identifier, if the number is less than 0, uses the active build of the model instead.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "integer"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Retrieve the status of an operation
	Description: <p>Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.</p><p>To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.</p>
	Example Parameters: {
	"id": null
}
*/
    self.retrieveTheStatusOfAnOperation = ({
        parameters
    }) => {

        const operation = {
            "name": "Retrieve the status of an operation",
            "path": "recommendations/v4.0/operations/{id}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3da",
            "id": "56f30d77eda5650db055a3da",
            "description": "<p>Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.</p><p>To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "id",
                "description": "Operation ID",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Update a model
	Description: <p>Allows you to update the description or the active build for a model.</p><p><b>Active build ID</b> – Every build for every model has a build ID. The active build ID is the first successful build of every new model. Once you have an active build ID and you do additional builds for the same model, you need to explicitly set it as the default build ID if you want to. When you consume recommendations, if you do not specify the build ID that you want to use, the default one will be used automatically.</p><p>This mechanism enables you - once you have a recommendation model in production - to build new models and test them before you promote them to production.</p>
	Example Parameters: {
	"id": null
}
*/
    self.updateAModel = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Update a model",
            "path": "recommendations/v4.0/models/{id}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "PATCH",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f30d77eda5650db055a3d9",
            "id": "56f30d77eda5650db055a3d9",
            "description": "<p>Allows you to update the description or the active build for a model.</p><p><b>Active build ID</b> – Every build for every model has a build ID. The active build ID is the first successful build of every new model. Once you have an active build ID and you do additional builds for the same model, you need to explicitly set it as the default build ID if you want to. When you consume recommendations, if you do not specify the build ID that you want to use, the default one will be used automatically.</p><p>This mechanism enables you - once you have a recommendation model in production - to build new models and test them before you promote them to production.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Content-Type": "application/json",
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "id",
                "description": "Unique identifier of the model.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
			Name: Recommendations: Upload a catalog file to a model
			Description: <p>If you upload to the same model with several calls, the system will insert only the new catalog items; Existing items will remain with the original values.  You cannot update catalog items by using this API.</p><p>The catalog data should follow the following format: <br><i>Item Id, Item Name, Item Category, Description, Features list.</i></p>
<p>The first 3 attributes (Item Id, Name and Category) are mandatory, while others are optional.</p><p>Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Item Name can have max length of 255 characters and can contain alphanumeric characters.</p><p>Item Category can have max length of 255 characters and can contain alphanumeric characters.</p><p>Item Description can have max length of 4000 characters and can contain alphanumeric characters.</p><p>Item Features List can have max length of 4000 characters and can contain alphanumeric characters.</p>Note: The maximum size of data that can be sent in POST call for this API is 200MB.
			Example Parameters: {
			"modelId": null,
			"catalogDisplayName": null
		}
		*/
    self.uploadACatalogFileToAModel = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Upload a catalog file to a model",
            "path": "recommendations/v4.0/models/{modelId}/catalog?catalogDisplayName={catalogDisplayName}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f316efeda5650db055a3e1",
            "id": "56f316efeda5650db055a3e1",
            "description": "<p>If you upload to the same model with several calls, the system will insert only the new catalog items; Existing items will remain with the original values.	You cannot update catalog items by using this API.</p><p>The catalog data should follow the following format: <br><i>Item Id, Item Name, Item Category, Description, Features list.</i></p>\n<p>The first 3 attributes (Item Id, Name and Category) are mandatory, while others are optional.</p><p>Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Item Name can have max length of 255 characters and can contain alphanumeric characters.</p><p>Item Category can have max length of 255 characters and can contain alphanumeric characters.</p><p>Item Description can have max length of 4000 characters and can contain alphanumeric characters.</p><p>Item Features List can have max length of 4000 characters and can contain alphanumeric characters.</p>Note: The maximum size of data that can be sent in POST call for this API is 200MB.",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "catalogDisplayName",
                "description": "Display name of the catalog data. e.g. \"CatalogFile1\"\r\n						Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Recommendations: Upload a usage file to a model
	Description: <p>Before you upload usage files, you need to upload the catalog files that describe the items that will be taken into consideration in the model.</p><p>The maximum size of data that can be sent in POST call for this API is 200MB.  If you need to upload more than 200MB of usage data, you may call this API several times.</p><p>Usage data format: <i>User Id, Item Id, Time, Event type</i>.</p><p>The first 3 attributes (User Id, Item Id, Time) are mandatory, while others are optional for each usage event. </p><p>User Id can have max length of 255 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Time should be in date type in format: YYYY/MM/DDTHH:MM:SS (e.g. 2013/06/20T10:00:00).</p><p>Event can be one of the following: <i>Click, RecommendationClick, AddShopCart, RemoveShopCart, Purchase. </i></p><p><b>Note: </b>The maximum number of usage points that are kept is ~5,000,000. The oldest will be deleted if new ones will be uploaded or reported.</p>
	Example Parameters: {
	"modelId": null,
	"usageDisplayName": null
}
*/
    self.uploadAUsageFileToAModel = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Upload a usage file to a model",
            "path": "recommendations/v4.0/models/{modelId}/usage?usageDisplayName={usageDisplayName}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "Recommendations.V4.0",
            "operationId": "56f316efeda5650db055a3e2",
            "id": "56f316efeda5650db055a3e2",
            "description": "<p>Before you upload usage files, you need to upload the catalog files that describe the items that will be taken into consideration in the model.</p><p>The maximum size of data that can be sent in POST call for this API is 200MB.	If you need to upload more than 200MB of usage data, you may call this API several times.</p><p>Usage data format: <i>User Id, Item Id, Time, Event type</i>.</p><p>The first 3 attributes (User Id, Item Id, Time) are mandatory, while others are optional for each usage event. </p><p>User Id can have max length of 255 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Time should be in date type in format: YYYY/MM/DDTHH:MM:SS (e.g. 2013/06/20T10:00:00).</p><p>Event can be one of the following: <i>Click, RecommendationClick, AddShopCart, RemoveShopCart, Purchase. </i></p><p><b>Note: </b>The maximum number of usage points that are kept is ~5,000,000. The oldest will be deleted if new ones will be uploaded or reported.</p>",
            "serviceName": "Recommendations",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "modelId",
                "description": "Unique identifier of the model.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "usageDisplayName",
                "description": "Display name of the usage data. e.g. \"UsageFile1\"<br>Only letters(A-Z, a-z), numbers(0-9), hyphens(-) and underscore(_) are allowed. <br>Max length: 50",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };

    return self;
};

module.exports = recommendations;