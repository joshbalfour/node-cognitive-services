const rp = require('request-promise');

const makeRequest = ({ operation, parameters, body, API_KEY, endpoint, headers }) => {
	headers = headers || {};
	parameters = parameters || {};
	headers['Ocp-Apim-Subscription-Key'] = API_KEY;

	let path = operation.path;
	// mandatory query params part of the path
	(operation.parameters || []).forEach((param) => {
		if (parameters[param.name] && param.kind == 1) {
			path = path.split(`{${param.name}}`).join(parameters[param.name]);
		}
	});
	// other optional params
	var optionalParams = Object.keys(parameters);
	for (var i = 0; i < optionalParams.length; i++) {
		if (i == 0)
			path += '?'
		else
			path += '&'
		path += `${optionalParams[i]}="${parameters[optionalParams[i]]}"`
	}

	let host = operation.host || endpoint;

	let uri = `https://${host}/${path}`;
	console.log("URI: " + uri);

	var options = {
		uri,
		method: operation.method,
		headers,
		qs: parameters,
		json: true // GET: Automatically parses the JSON string in the response, POST: Automatically stringifies the body to JSON
	};
	if (body != null) {
		options.body = body;
		if (headers['Content-type'] && headers['Content-type'] != 'application/json') {
			options.json = false;
			// POST: receive the response properly
			options.transform = function (body, res) {
				if (res.headers['content-type'] && res.headers['content-type'].indexOf('application/json') != -1) {
					return JSON.parse(body);
				}
				if (res.headers['operation-location']) {
					return res.headers['operation-location'];
				}
				return body;
			}
		}
	}
	return rp(options);
};

function verifyParameters(expected, actual) {
	var expectedParameters = expected || [];
	var actualParameters = actual || {};

	return new Promise((resolve, reject) => {

		const missingParameters = expectedParameters
			.filter(param => param.required)
			.filter(param => !actualParameters[param.name]);
		
		const invalidValues = [];
		
		// validate that the parameters have valid values
		for(let paramName in actualParameters) {
			var values;
			if (typeof(actualParameters[paramName]) === 'string') {
				values = actualParameters[paramName].split(',');
			} else {
				values = [actualParameters[paramName]];
			}
			for(let i = 0; i < values.length; i++) {
				let value = values[i].toString();
				let expectedParam = expectedParameters.filter(p => p.name == paramName);
				if (expectedParam.length == 1) {
					let listOfOptions = expectedParam[0].options;
					if (expectedParam[0].typeName === 'boolean') {
						listOfOptions = ["true", "false"];
					}
					if (Array.isArray(listOfOptions) && listOfOptions.indexOf(value) == -1) {
						reject(new Error( `Parameter "${paramName}" had a value not supported. Valid values are ${listOfOptions.join(',')}`));
					}
				} else {
					reject(new Error( `Parameter "${paramName}" could not be found in the list of supported parameters`));
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

function verify(operation, parameters, headers, endpoint, body) {
	//TODO if request body, validate it
	return verifyParameters(operation.parameters, parameters)
		.then(() => {
			return verifyHeaders(operation.headers, headers);
		})
		.then(() => {
			return verifyEndpoint(operation.endpoints, endpoint)
		})
		.catch((err) => {
			throw err;
		})
}

module.exports = { makeRequest, verifyParameters, verifyHeaders, verifyEndpoint, verify };