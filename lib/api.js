const rp = require('request-promise');

const makeRequest = ({ operation, parameters, body, API_KEY, endpoint, headers }) => {
	if (!headers) {
		headers = {};
	}
	headers['Ocp-Apim-Subscription-Key'] = API_KEY;
	let path = operation.path;
	operation.parameters.forEach((param) => {
		if (parameters[param.name] && param.type == 1){
			path = path.split(`{${param.name}}`).join(parameters[param.name]);
			parameters[param.name] = undefined;
		}
	});

	let host = operation.host || endpoint;
	let scheme = operation.scheme || 'https';

	let uri = `${operation.scheme}://${host}/${path}`;
	const options = {
		uri,
		method: operation.method,
		headers,
		qs: parameters,
		json: true,
		body
	};
	return rp(options);
};

const verifyParameters = (operation, actual) => {
	
	return new Promise((resolve, reject) => {
		
		const expected = operation.parameters;
		const requiredPropsNotPresent = expected
			.filter(param => param.required)
			.filter(param => !actual[param.name]);
		
		if (requiredPropsNotPresent.length !== 0){
			if (requiredPropsNotPresent.length > 1){
				reject(new Error(`Required parameters ${JSON.stringify(requiredPropsNotPresent)} were not present in "${operation.serviceName}" "${operation.name}" request.`));
			} else {
				reject(new Error(`Required parameter "${requiredPropsNotPresent[0]}" was not present in "${operation.serviceName}" "${operation.name}" request`));
			}
		} else {
			resolve();
		}
	});
};

const verifyHeaders = (operation, actual) => {
	return new Promise((resolve, reject) => {
		const expected = operation.headers;
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
};

var verifyEndpoint = function (operation, endpoint) {
	return new Promise((resolve, reject) => {
		const endpointsAllowed = operation.endpoints;
		if (endpointsAllowed && endpointsAllowed.indexOf(endpoint) != -1) {
			resolve();
		} else {
			reject('Endpoint ' + endpoint + ' is not supported.');
		}
	});
}

var verify = function (operation, parameters, headers, endpoint, body) {
	//TODO if request body, validate it
	return verifyParameters(operation, parameters)
		.then(() => {
			return verifyHeaders(operation, headers);
		})
		.then(() => {
			return verifyEndpoint(operation, endpoint)
		})
}

module.exports = { makeRequest, verifyParameters, verifyHeaders, verifyEndpoint, verify };