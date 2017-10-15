const {
    makeRequest
} = require('../../lib/api');

const qnaMaker = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self.endpoints = [
        "westus.api.cognitive.microsoft.com"
    ];
    self._apiKey = apiKey;
    self._endpoint = endpoint;
    self._serviceId = "58994a073d9e04097c7ba6fe";

    /**
        Name: QnAMaker - V2.0
        Description: Creates a new knowledge base.
    */
    self.createKnowledgeBase = ({
        body
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/create",
            "method": "POST",
            "operationId": "58994a073d9e041ad42d9baa",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "name",
                "description": "Friendly name for the knowledge base (Required).",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "qnapairs",
                "description": "List of question and answer pairs to be added to the knowledge base. Max 1000 Q-A pairs per request.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "array"
            }, {
                "name": "urls",
                "description": "List of URLs to be processed and indexed in the knowledge base. In case of existing URL, it will be fetched again and KB will be updated with new data. Max 5 urls per request.",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        const headers = {
            'Content-type': operation.headers[0].options[0]
        };

		return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            headers: headers,
            body: body
        })
    };

    /**
        Name: QnAMaker - V2.0
        Description: Deletes the specified knowledge base and all data associated with it.
    */
    self.deleteKnowledgeBase = ({
        parameters
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}",
            "method": "DELETE",
            "operationId": "58994a073d9e041ad42d9bab",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
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
     * 
        Name: QnAMaker - V2.0
        Description: Downloads all the data associated with the specified knowledge base.
    */
    self.downloadKnowledgeBase = ({
        parameters
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}",
            "method": "GET",
            "operationId": "58994a073d9e041ad42d9bac",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
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
        Name: QnAMaker - V2.0
        Description: Returns the list of answers for the given question sorted in descending order of ranking score.
    */
    self.generateAnswer = ({
        parameters,
        body
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}/generateAnswer",
            "method": "POST",
            "operationId": "58994a073d9e041ad42d9baa",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "question",
                "description": "User question to be queried against your knowledge base.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "top",
                "description": "Number of ranked results you want in the output. Default is 1.",
                "value": 1,
                "required": false,
                "type": "inBody",
                "typeName": "number"
            }]
        };

        const headers = {
            'Content-type': operation.headers[0].options[0]
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
        Name: QnAMaker - V2.0
        Description: Downloads all word alterations (synonyms) that have been automatically mined or added by the user.
    */
    self.getAlterations = ({
        parameters
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}/downloadAlterations",
            "method": "GET",
            "operationId": "597804332bcd591200beb3a1",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
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
        Name: QnAMaker - V2.0
        Description: Publish all unpublished in the knowledgebase to the prod endpoint.
    */
    self.publishKnowledgeBase = ({
        parameters
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}",
            "method": "PUT",
            "operationId": "589ab9223d9e041d18da6433",
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
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
        Name: QnAMaker - V2.0
        Description: Submit user feedback for tuning question-answer matching. QnA Maker uses active learning to learn from the user utterances that come on a published Knowledge base service. In this process, QnA Maker records user feedback from different users and trains the knowledge base to respond accordingly, when there are sufficient number of users sending the same feedback. Every user feedback is logged and model training is triggered when there are 50 new feedback instances. Typically, the model updates are reflected when same question-answer pair from the knowledge base is sent as feedback for a given user query by at least 20 users. Most changes are immediately reflected in both the published and the saved knowledge bases. Some new question-answer pairs are only added to the saved knowledge base and they are moved to the published version in the next knowledge base publish operation by the developer. This gives the flexibility to the developer to keep or discard the newly added question-answer pairs.
    */
    self.trainKnowledgeBase = ({
        parameters,
        body
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}/train",
            "method": "PATCH",
            "operationId": "58edd31c3d9e041ffcef000f",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "feedbackRecords",
                "description": "Feedback data. Each entry indicates a query asked by a user and the correct question-answer response for this query as given by the user.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        const headers = {
            'Content-type': operation.headers[0].options[0]
        }

		return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };

    /**
        Name: QnAMaker - V2.0
        Description: Replaces word alterations (synonyms) for the KB with the give records.
    */
    self.updateAlterations = ({
        parameters,
        body
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}/updateAlterations",
            "method": "PATCH",
            "operationId": "597804082bcd591200beb3a0",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "add",
                "description": "Word alterations to be added.\
                WordAlterationsData\
                word: Word for which alterations have to be added. (required)\
                alterations: List of alterations for the word. (required)",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "array"
            }, {
                "name": "delete",
                "description": "Word alterations to be removed.\
                WordAlterationsData\
                word: Word for which alterations have to be added. (required)\
                alterations: List of alterations for the word. (required)",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        const headers = {
            'Content-type': operation.headers[0].options[0]
        }

		return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };

     /**
        Name: QnAMaker - V2.0
        Description: Add or delete QnA Pairs and / or URLs to an existing knowledge base.
    */
    self.updateKnowledgeBase = ({
        parameters,
        body
    }) => {

        const operation = {
            "path": "qnamaker/v2.0/knowledgebases/{knowledgeBaseId}",
            "method": "PATCH",
            "operationId": "58994a083d9e041ad42d9bad",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "knowledgeBaseId",
                "description": "KB id",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "add",
                "description": "Data to be added to the knowledge base.",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "object"
            }, {
                "name": "delete",
                "description": "Data to be deleted from the knowledge base",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "object"
            }]
        };

        const headers = {
            'Content-type': operation.headers[0].options[0]
        }

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

module.exports = qnaMaker;