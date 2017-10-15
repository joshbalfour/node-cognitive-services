const request = require('request-promise');

function verifyBody(expected, actual, contentType) {
	return new Promise((resolve, reject) => {
		if (contentType.indexOf('json') > -1) {
			for(let i = 0; i < (expected || []).length; i++) {
				let expectedParam = expected[i];
				if (actual[expectedParam.name] && expectedParam.type == 'inBody') {
					if (actual[expectedParam.name]) {
						let listOfOptions = expectedParam.options;
						if (expectedParam.typeName === 'boolean') {
							listOfOptions = ["true", "false"];
						}
						if (Array.isArray(listOfOptions) && listOfOptions.indexOf(value) == -1) {
							reject(new Error(`Body parameter "${actual[expectedParam.name]}" had a value not supported. Valid values are ${listOfOptions.join(',')}`));
						}
						delete(expected[i]);
					} else {
						return reject(new Error(`Body parameter "${actual[expectedParam.name]} is required!`));
					}
				}
			}
		}
		
		resolve();
	});
}

function verifyParameters(expected, actual) {
	var expectedParameters = expected || [];
	var actualParameters = actual || {};

	return new Promise((resolve, reject) => {

		const missingParameters = expectedParameters
			.filter(param => param.required)
			.filter(param => !actualParameters[param.name]);

		const invalidValues = [];

		// validate that the parameters have valid values
		for (let paramName in actualParameters) {
			var values;
			if (typeof (actualParameters[paramName]) === 'string') {
				values = actualParameters[paramName].split(',');
			} else {
				values = [actualParameters[paramName]];
			}
			for (let i = 0; i < values.length; i++) {
				let value = values[i].toString();
				let expectedParam = expectedParameters.filter(p => p.name == paramName);
				if (expectedParam.length == 1) {
					let listOfOptions = expectedParam[0].options;
					if (expectedParam[0].typeName === 'boolean') {
						listOfOptions = ["true", "false"];
					}
					if (Array.isArray(listOfOptions) && listOfOptions.indexOf(value) == -1) {
						reject(new Error(`Parameter "${paramName}" had a value not supported. Valid values are ${listOfOptions.join(',')}`));
					}
				} else {
					reject(new Error(`Parameter "${paramName}" could not be found in the list of supported parameters`));
				}
			}
		}

		// validate that there aren't any missing parameters
		if (missingParameters.length !== 0) {
			if (missingParameters.length > 1) {
				reject(new Error(`Required parameters ${JSON.stringify(missingParameters)} were not present.`));
			} else {
				reject(new Error(`Required parameter "${missingParameters[0].name}" was not present.`));
			}
		} else {
			resolve();
		}
	});
}

function verifyHeaders(expected, actual) {
	var expectedHeaders = expected || [];
	var actualHeaders = actual || {};

	return new Promise((resolve, reject) => {

		const requiredPropsNotPresent = expectedHeaders
			.filter(param => param.required)
			.filter(param => !actualHeaders[param.name]);

		if (requiredPropsNotPresent.length !== 0) {
			if (requiredPropsNotPresent.length > 1) {
				reject(new Error(`Required headers ${JSON.stringify(requiredPropsNotPresent)} were not present.`));
			} else {
				reject(new Error(`Required header "${requiredPropsNotPresent[0].name}" was not present.`));
			}
		} else {
			resolve();
		}
	});
}

function verifyEndpoint(expected, endpoint) {
	const endpointsAllowed = expected || [];

	return new Promise((resolve, reject) => {
		if (endpointsAllowed && endpointsAllowed.indexOf(endpoint) != -1) {
			resolve();
		} else {
			reject('Endpoint ' + endpoint + ' is not supported.');
		}
	});
}

function makeRequest(client, data) {
	data = data || {};
	
	const operation = data.operation || {};
	const parameters = data.parameters || {};
	const headers = data.headers || {};
	const body = data.body || null;

	const contentTypeHeader = headers['Content-type'] || headers['Content-Type'] || "";

	return verifyBody(operation.parameters, body, contentTypeHeader)
		.then(() => {
			return verifyParameters(operation.parameters, parameters);
		})
		.then(() => {
			return verifyHeaders(operation.headers, headers);
		})
		.then(() => {
			return verifyEndpoint(client.endpoints, client._endpoint)
		})
		.then(() => {
			headers['Ocp-Apim-Subscription-Key'] = client._apiKey;

			let path = operation.path;
			
			// mandatory query params part of the path
			(operation.parameters || []).forEach((param) => {
				if (parameters[param.name] && param.type == 'routeParam') {
					path = path.split(`{${param.name}}`).join(parameters[param.name]);
				}
			});
			

			// other optional params
			let i = 0;
			(operation.parameters || []).forEach((param) => {
				if (parameters[param.name] && param.type == 'queryStringParam') {
					if (i == 0)
						path += '?'
					else
						path += '&'
					path += `${param.name}="${parameters[param.name]}"`
					i++;
				}
			});

			let host = operation.host || client._endpoint;

			let uri = `https://${host}/${path}`;

			var options = {
				uri,
				method: operation.method,
				headers,
				qs: parameters,
				json: true // GET: Automatically parses the JSON string in the response, POST: Automatically stringifies the body to JSON
			};

			if (body != null) {
				options.body = body;
				let contentTypeHeader = headers['Content-type'] || headers['Content-Type'];
				if (contentTypeHeader && contentTypeHeader != 'application/json') {
					options.json = false; //do not stringify the request body to JSON
				}
				// POST: receive the response properly
				options.transform = function (body, res) {
					let responseContentType = res.headers['content-type'];
					if (responseContentType && responseContentType.indexOf('application/json') != -1) {
						try {
							return JSON.parse(body);
						} catch (e) {
							// do nothing. return the body as it is
						}
					}
					if (res.headers['operation-location']) {
						return res.headers['operation-location'];
					}
					return body;
				}
				
			}
			return request(options);
		})
}

module.exports = { makeRequest, verifyParameters, verifyHeaders, verifyEndpoint };