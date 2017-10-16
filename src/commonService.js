const { verifyBody, verifyEndpoint, verifyHeaders, verifyParameters } = require('./helpers');
const request = require('request-promise');

class commonService {
    constructor({ apiKey, endpoint }) {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }

    getOperationIdFromUrl(url) {
        let splittedUrl = url.split('/');
        return splittedUrl[splittedUrl.length - 1];
    }

    makeRequest(data = {}) {
        const operation = data.operation || {};
        operation.parameters = operation.parameters || [];
        const parameters = data.parameters || {};
        const headers = data.headers || {};
        const body = data.body || null;
    
        const contentTypeHeader = headers['Content-type'] || headers['Content-Type'] || "";
    
        return verifyBody(operation.parameters, body, contentTypeHeader)
            .then(params => {
                operation.parameters = params;
                return verifyParameters(operation.parameters, parameters);
            })
            .then(() => {
                return verifyHeaders(operation.headers, headers);
            })
            .then(() => {
                return verifyEndpoint(this.endpoints, this.endpoint)
            })
            .then(() => {
                headers['Ocp-Apim-Subscription-Key'] = this.apiKey;
    
                let path = operation.path;
    
                // mandatory route params
                operation.parameters.forEach((param) => {
                    if (parameters[param.name] && param.type == 'routeParam') {
                        path = path.split(`{${param.name}}`).join(parameters[param.name]);
                    }
                });
    
                // query params
                let i = 0;
                operation.parameters.forEach((param) => {
                    if (parameters[param.name] && param.type == 'queryStringParam') {
                        if (i == 0)
                            path += '?'
                        else
                            path += '&'
                        path += `${param.name}="${parameters[param.name]}"`
                        i++;
                    }
                });
    
                let host = operation.host || this.endpoint;
    
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
                    if (contentTypeHeader && contentTypeHeader.indexOf('json') == -1) {
                        options.json = false; // do not stringify the request body to JSON
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
}

module.exports = commonService;