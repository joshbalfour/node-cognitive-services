const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const entityLinking = ({
    API_KEY
}) => {

    let self = this;

    /**
	Name: Entity Linking: Link Entity
	Description: Entity Linking is a natural language processing tool to help analyzing text for your application. Entity Linking recognize a named-entity from given text and  aligning a textual mention of the entity to an appropriate entry in a knowledge base. 
	Example Parameters: {
	"selection": null,
	"offset": null
}
*/
    self.linkEntity = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Link Entity",
            "path": "entitylinking/v1.0/link",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56f0eabfca730713cc392442",
            "operationId": "56f0eabfca73070e44d0f39c",
            "id": "56f0eabfca73070e44d0f39c",
            "description": "Entity Linking is a natural language processing tool to help analyzing text for your application. Entity Linking recognize a named-entity from given text and	aligning a textual mention of the entity to an appropriate entry in a knowledge base. ",
            "serviceName": "Entity Linking",
            "requestBody": "Given a specific paragraph of text within a document, the Entity Linking Intelligence Service will recognize and identify each separate entity based on the context",
            "headers": {
                "Content-Type": "text/plain",
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "selection",
                "description": "The specific word or phrase within the text that is to be entity linked. If not specified, the service will try to recognize and identify all the entities within the input text.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The location (in offset by characters) of the selected word or phrase within the input text. Used to distinguish when there are multiple instances of the same words or phrases within the input text. Only valid when the selection is specified.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
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

module.exports = entityLinking;