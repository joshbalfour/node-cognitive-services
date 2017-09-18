const {
    makeRequest
} = require('../../lib/api');

const textAnalytics = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self.endpoints = [
        "westus.api.cognitive.microsoft.com",
        "eastus2.api.cognitive.microsoft.com",
        "westcentralus.api.cognitive.microsoft.com",
        "westeurope.api.cognitive.microsoft.com",
        "southeastasia.api.cognitive.microsoft.com"
    ];
    self._apiKey = apiKey;
    self._endpoint = endpoint;

    /**
			Name: Text Analytics: Detect Language
			Description: The Text Analytics API is a suite of text analytics web services built with best-in-class Microsoft machine learning algorithms. The API can be used to analyze unstructured text for tasks such as sentiment analysis, key phrase extraction and language detection. No training data is needed to use this API; just bring your text data. This API uses advanced natural language processing techniques to deliver best in class predictions.
		*/
    self.detectLanguage = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Detect Language",
            "path": "text/analytics/v2.0/languages",
            "method": "POST",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3c7",
            "id": "56f30ceeeda5650db055a3c7",
            "description": "The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.   Irrespective of the value, the language with the highest score is returned.",
            "serviceName": "Text Analytics",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json"
                ],
                "required": false,
                "typeName": "string"
            }],
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            headers: headers,
            body: body
        })

    };
    
    /**
			Name: Text Analytics: Key Phrases
			Description: The API returns a list of strings denoting the key talking points in the input text. We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit.
		*/
    self.keyPhrases = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Key Phrases",
            "path": "text/analytics/v2.0/keyPhrases",
            "method": "POST",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3c6",
            "id": "56f30ceeeda5650db055a3c6",
            "description": "The API returns a list of strings denoting the key talking points in the input text. We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit. Each document supplied must have a language. Pass in one of: de,en,es,fi,fr,it,ja,pl,pt-BR,pt-PT,sv. See https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview for the complete list of support languages.",
            "serviceName": "Text Analytics",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json"
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
			Name: Text Analytics: Sentiment
			Description: The API returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. Sentiment score is generated using classification techniques. The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings.
		*/
    self.sentiment = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Sentiment",
            "path": "text/analytics/v2.0/sentiment",
            "method": "POST",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3c9",
            "id": "56f30ceeeda5650db055a3c9",
            "description": "The API returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. Sentiment score is generated using classification techniques. The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings.",
            "serviceName": "Text Analytics",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "text/json"
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

    return self;
};

module.exports = textAnalytics;