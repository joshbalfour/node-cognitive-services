const rp = require('request-promise');

const apiRoot = 'https://api.projectoxford.ai/emotion/v1.0';

function emotionRecognition({KEY}){
	
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


	this.recognize = ({body}) => {
		
		const options = {
			method: 'POST',
			uri: '/recognize',
			body,
		};

		return this.makeRequest(options);
	};


	this.recognizeWithFaceRectangles = ({body, faceRectangles}) => {
		
		const options = {
			method: 'POST',
			uri: '/recognize',
			body,
			qs: { faceRectangles }
		};

		return this.makeRequest(options);
	};

	this.operationStatus = ({operationId}) => {
		
		const options = {
			method: 'GET',
			uri: `/operations/${operationId}`,
		};

		return this.makeRequest(options);
	};

	return this;
}

module.exports = emotionRecognition;