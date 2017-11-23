const commonService = require('../commonService');

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
    constructor({ apiKey, appID, endpoint }) {
        super({ apiKey, endpoint });
        this.appID = appID;
        this.serviceId = "LUIS.v2.0"
        this.endpoints = [
            "westus.api.cognitive.microsoft.com",
            "eastus2.api.cognitive.microsoft.com",
            "westcentralus.api.cognitive.microsoft.com",
            "westeurope.api.cognitive.microsoft.com",
            "southeastasia.api.cognitive.microsoft.com"
        ];
    }

    /**
     * Returns the detected intent, entities and entity values with a score for each intent. 
     * Scores close to 1 indicate 100% certainty that the identified intent is correct. 
     * Irrespective of the value, the intent with the highest score is returned.
     * @returns {Promise.<object>}
     */
    detectIntent({ headers, body }) {

        const operation = {
            "path": "luis/v2.0/apps/" + this.appID,
            "method": "POST"
        };

        console.log(operation);
        console.log(headers);
        console.log(body);

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        })

    };
};

module.exports = languageUnderstanding;