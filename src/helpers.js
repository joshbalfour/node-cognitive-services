function verifyBody(expected = [], actual = {}, contentType) {
	return new Promise((resolve, reject) => {
		if (contentType.indexOf('json') > -1) {
			for (let i = 0; i < expected.length; i++) {
				let expectedParam = expected[i];
				if (expectedParam.type == 'inBody') {
					// if the property exists
					// NOT is the property true
					if (actual.hasOwnProperty(expectedParam.name)) {
						let listOfOptions = expectedParam.options;
						if (expectedParam.typeName === 'boolean') {
							listOfOptions = ["true", "false"];
						}
						if (Array.isArray(listOfOptions) && listOfOptions.indexOf((actual[expectedParam.name].toString())) == -1) {
							return reject(new Error(`Body parameter "${actual[expectedParam.name]}" had a value not supported. Valid values are ${listOfOptions.join(',')}`));
						}
					}
					else if (expectedParam.required) {
						return reject(new Error(`Body parameter "${expectedParam.name}" is required!`));
					}
				}
			}
		}

		expected = expected.filter(p => p && p.type != "inBody");

		resolve(expected);
	});
}

function verifyParameters(expected = [], actual = {}) {

	return new Promise((resolve, reject) => {

		const missingParameters = expected
			.filter(param => param.required)
			.filter(param => !actual[param.name]);

		// validate that the parameters have valid values
		for (let paramName in actual) {
			var values;
			if (typeof (actual[paramName]) === 'string') {
				values = actual[paramName].split(',');
			} else {
				values = [actual[paramName]];
			}
			for (let i = 0; i < values.length; i++) {
				let value = values[i].toString();
				let expectedParam = expected.filter(p => p.name == paramName);
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

function verifyHeaders(expectedHeaders = [], actualHeaders = {}) {
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

function verifyEndpoint(endpointsAllowed = [], endpoint) {
	return new Promise((resolve, reject) => {
		if (endpointsAllowed && endpointsAllowed.indexOf(endpoint) != -1) {
			resolve();
		} else {
			reject('Endpoint ' + endpoint + ' is not supported.');
		}
	});
}

module.exports = { verifyParameters, verifyHeaders, verifyEndpoint, verifyBody };