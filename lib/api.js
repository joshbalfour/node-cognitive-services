const rp = require('request-promise');

const makeRequest = ({operation, parameters, body, API_KEY}) => {
	let headers = {
		'Ocp-Apim-Subscription-Key': API_KEY
	};
	let path = operation.uriTemplate;
	operation.parameters.forEach((param) => {
		if (parameters[param.name] && param.type == 1){
			path = path.split(`{${param.name}}`).join(parameters[param.name]);
			parameters[param.name] = undefined;
		}
	});

	let uri = `${operation.scheme}://${operation.host}/${path}`;
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

module.exports = {makeRequest, verifyParameters};