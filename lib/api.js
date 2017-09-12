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
	let scheme = operation.scheme || 'https';

	let uri = `${operation.scheme}://${host}/${path}`;
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
			options.transform = function (body, response) {
				if (response.headers['content-type'].indexOf('application/json') != -1) {
					return JSON.parse(body);
				}
				return body;
			}
		}
	}
	return rp(options);
};

function verifyParameters(operation, actual) {

	return new Promise((resolve, reject) => {
		actual = actual || {};

		const expected = operation.parameters || [];
		const requiredPropsNotPresent = expected
			.filter(param => param.required)
			.filter(param => !actual[param.name]);

		if (requiredPropsNotPresent.length !== 0) {
			if (requiredPropsNotPresent.length > 1) {
				reject(new Error(`Required parameters ${JSON.stringify(requiredPropsNotPresent)} were not present in "${operation.serviceName}" "${operation.name}" request.`));
			} else {
				reject(new Error(`Required parameter "${requiredPropsNotPresent[0].name}" was not present in "${operation.serviceName}" "${operation.name}" request`));
			}
		} else {
			resolve();
		}
	});
}

function verifyHeaders(operation, actual) {
	return new Promise((resolve, reject) => {
		actual = actual || {};

		const expected = operation.headers || [];
		const requiredPropsNotPresent = expected
			.filter(param => param.required)
			.filter(param => !actual[param.name]);

		if (requiredPropsNotPresent.length !== 0) {
			if (requiredPropsNotPresent.length > 1) {
				reject(new Error(`Required headers ${JSON.stringify(requiredPropsNotPresent)} were not present in "${operation.serviceName}" "${operation.name}" request.`));
			} else {
				reject(new Error(`Required header "${requiredPropsNotPresent[0]}" was not present in "${operation.serviceName}" "${operation.name}" request`));
			}
		} else {
			resolve();
		}
	});
}

function verifyEndpoint(operation, endpoint) {
	return new Promise((resolve, reject) => {
		const endpointsAllowed = operation.endpoints;
		if (endpointsAllowed && endpointsAllowed.indexOf(endpoint) != -1) {
			resolve();
		} else {
			reject('Endpoint ' + endpoint + ' is not supported.');
		}
	});
}

function verify(operation, parameters, headers, endpoint, body) {
	//TODO if request body, validate it
	return verifyParameters(operation, parameters)
		.then(() => {
			return verifyHeaders(operation, headers);
		})
		.then(() => {
			return verifyEndpoint(operation, endpoint)
		})
		.catch((err) => {
			throw err;
		})
}

module.exports = { makeRequest, verifyParameters, verifyHeaders, verifyEndpoint, verify };