const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const textAnalytics = ({
    API_KEY
}) => {

    let self = this;

    /**
			Name: Text Analytics: Detect Language
			Description: The API returns the detected language and a numeric score between 0 and 1. 
            Scores close to 1 indicate 100% certainty that the identified language is true. 
            A total of 120 languages are supported.
			Example Parameters: {
			"numberOfLanguagesToDetect": null
		}
		*/
    self.detectLanguage = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Detect Language",
            "path": "text/analytics/v2.0/languages",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3c7",
            "id": "56f30ceeeda5650db055a3c7",
            "description": "The API returns the detected language and a numeric score between 0 and 1. \r\n						Scores close to 1 indicate 100% certainty that the identified language is true. \r\n						A total of 120 languages are supported.",
            "serviceName": "Text Analytics",
            "headers": {
                "Content-Type": "application/json",
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "numberOfLanguagesToDetect",
                "description": "Format - int32. (Optional) Number of languages to detect. Set to 1 by default.",
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
			Name: Text Analytics: Detect Topics
			Description: The API returns the top detected topics for a list of submitted text documents. 
            A topic is identified with a key phrase, which can be one or more related words. 
            Use the URL parameters and stop word list to control which words or documents are filtered out. 
            You can also supply a list of topics to exclude from the response. 
            At least 100 text documents must be submitted, however it is designed to detect topics across hundreds to thousands of documents. 
            Note that one transaction is charged per text document submitted. 
            For best performance, limit each document to a short, human written text paragraph such as review, conversation or user feedback.
			Example Parameters: {
			"minDocumentsPerWord": null,
			"maxDocumentsPerWord": null
		}
		*/
    self.detectTopics = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Detect Topics",
            "path": "text/analytics/v2.0/topics",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3ca",
            "id": "56f30ceeeda5650db055a3ca",
            "description": "The API returns the top detected topics for a list of submitted text documents. \r\n						A topic is identified with a key phrase, which can be one or more related words. \r\n						Use the URL parameters and stop word list to control which words or documents are filtered out. \r\n						You can also supply a list of topics to exclude from the response. \r\n						At least 100 text documents must be submitted, however it is designed to detect topics across hundreds to thousands of documents. \r\n						Note that one transaction is charged per text document submitted. \r\n						For best performance, limit each document to a short, human written text paragraph such as review, conversation or user feedback.",
            "serviceName": "Text Analytics",
            "headers": {
                "Content-Type": "application/json",
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "minDocumentsPerWord",
                "description": "Format - int32. (optional) Words that occur in less than this many documents are ignored. \r\n						Use this parameter to help exclude rare document topics.\r\n						Omit to let the service choose appropriate value.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "integer"
            }, {
                "name": "maxDocumentsPerWord",
                "description": "Format - int32. (optional) Words that occur in more than this many documents are ignored. \r\n						Use this parameter to help exclude ubiquitous document topics.\r\n						Omit to let the service choose appropriate value.",
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
			Name: Text Analytics: Key Phrases
			Description: The API returns a list of strings denoting the key talking points in the input text. 
            We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit. 
            Currently, the following languages are supported: English, German, Spanish and Japanese.
			Example Parameters: {}
		*/
    self.keyPhrases = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Key Phrases",
            "path": "text/analytics/v2.0/keyPhrases",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3c6",
            "id": "56f30ceeeda5650db055a3c6",
            "description": "The API returns a list of strings denoting the key talking points in the input text. \r\n						We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit. \r\n						Currently, the following languages are supported: English, German, Spanish and Japanese.",
            "serviceName": "Text Analytics",
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
	Name: Text Analytics: Operation Status
	Description: Get the status of an operation submitted for processing. If the the operation has reached a 'Succeeded' state, will also return the result.
	Example Parameters: {
	"operationId": null
}
*/
    self.operationStatus = ({
        parameters
    }) => {

        const operation = {
            "name": "Operation Status",
            "path": "text/analytics/v2.0/operations/{operationId}",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "GET",
            "scheme": "https",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3c8",
            "id": "56f30ceeeda5650db055a3c8",
            "description": "Get the status of an operation submitted for processing. If the the operation has reached a 'Succeeded' state, will also return the result.",
            "serviceName": "Text Analytics",
            "headers": {
                "Host": "westus.api.cognitive.microsoft.com"
            },
            "parameters": [{
                "name": "operationId",
                "description": "A unique id for the submitted operation.",
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
			Name: Text Analytics: Sentiment
			Description: The API returns a numeric score between 0 and 1. 
            Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. 
            Sentiment score is generated using classification techniques. 
            The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings. 
            Currently, the following languages are supported: English, Spanish, French, Portuguese.
			Example Parameters: {}
		*/
    self.sentiment = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Sentiment",
            "path": "text/analytics/v2.0/sentiment",
            "host": "westus.api.cognitive.microsoft.com",
            "method": "POST",
            "scheme": "https",
            "serviceId": "TextAnalytics.V2.0",
            "operationId": "56f30ceeeda5650db055a3c9",
            "id": "56f30ceeeda5650db055a3c9",
            "description": "The API returns a numeric score between 0 and 1. \r\n						Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. \r\n						Sentiment score is generated using classification techniques. \r\n						The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings. \r\n						Currently, the following languages are supported: English, Spanish, French, Portuguese.",
            "serviceName": "Text Analytics",
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

    return self;
};

module.exports = textAnalytics;