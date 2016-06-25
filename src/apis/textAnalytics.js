const rp = require('request-promise');

const apiRoot = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/';

function textAnalytics({KEY}){
	
	const baseOptions = {
		baseUrl: apiRoot,
		headers: {
			'Ocp-Apim-Subscription-Key' : KEY
		},
		json: true,
	};

	this.makeRequest = function(reqOptions){
		let options = {};

		for (var i in baseOptions){
			options[i] = baseOptions[i];
		}

		for (var j in reqOptions){
			options[j] = reqOptions[j];
		}

		return rp(options);
	};


	this.detectLanguage = ({numberOfLanguagesToDetect, body}) => {
		
		const options = {
			method: 'POST',
			uri: '/languages',
			qs: { numberOfLanguagesToDetect },
			body,
		};

		return this.makeRequest(options);
	};

	this.detectTopics = ({minDocumentsPerWord, maxDocumentsPerWord, body}) => {
		
		const options = {
			method: 'POST',
			uri: '/topics',
			qs: { minDocumentsPerWord, maxDocumentsPerWord },
			body,
		};
		
		return this.makeRequest(options);
	};

	this.keyPhrases = ({body}) => {
		
		const options = {
			method: 'POST',
			uri: '/keyPhrases',
			body,
		};
		
		return this.makeRequest(options);
	};



	return this;
}

module.exports = textAnalytics;