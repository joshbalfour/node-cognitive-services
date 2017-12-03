const { verifyBody, verifyEndpoint, verifyHeaders, verifyParameters } = require('./helpers');
const request = require('request-promise');
const fs = require('fs');

class commonService {
    constructor({ apiKey, endpoint }) {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }

    getIso3CodesForLanguages() {
        return [ 'afr',
            'sqi',
            'amh',
            'ara',
            'hye',
            'asm',
            'aze',
            'bng',
            'ben',
            'eus',
            'bel',
            'bos',
            'bsb',
            'bre',
            'bul',
            'cat',
            'kur',
            'chr',
            'zho',
            'zh-hk',
            'zh-tw',
            'hrv',
            'ces',
            'dan',
            'prs',
            'nld',
            'eng',
            'est',
            'fil',
            'fin',
            'fra',
            'glg',
            'kat',
            'deu',
            'ell',
            'guj',
            'hau',
            'heb',
            'hin',
            'hun',
            'isl',
            'ibo',
            'ind',
            'iku',
            'gle',
            'xho',
            'zul',
            'ita',
            'jpn',
            'kan',
            'kaz',
            'khm',
            'quc',
            'kin',
            'swa',
            'kok',
            'kor',
            'kir',
            'lao',
            'lav',
            'lit',
            'ltz',
            'mac',
            'msa',
            'mym',
            'mlt',
            'mri',
            'mar',
            'mon',
            'nep',
            'nob',
            'nno',
            'ori',
            'pus',
            'fas',
            'pol',
            'por',
            '1or',
            'ful',
            'pan',
            'pnb',
            'qup',
            'ron',
            'rus',
            'gla',
            'srp',
            'srn',
            '1rp',
            'sot',
            'nso',
            'tsn',
            'sin',
            'sin',
            'slk',
            'slv',
            'spa',
            'swe',
            'tgk',
            'tam',
            'tat',
            'tel',
            'tha',
            'tir',
            'tur',
            'tuk',
            'ukr',
            'urd',
            'uig',
            'uzb',
            'cat',
            'vie',
            'cym',
            'wol',
            'yor'                    
        ];
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
                let queryStringParams = {};
                operation.parameters.forEach((param) => {
                    if (parameters[param.name] && param.type == 'queryStringParam') {
                        queryStringParams[param.name] = parameters[param.name];
                    }
                });
    
                let uri = `https://${this.endpoint}/${path}`;
    
                var options = {
                    uri,
                    method: operation.method,
                    headers,
                    qs: queryStringParams,
                    json: true // GET: Automatically parses the JSON string in the response, POST: Automatically stringifies the body to JSON
                };

                if (contentTypeHeader == 'multipart/form-data' && parameters.path && parameters.path !== null) {
                    options.formData = {
                        file: fs.createReadStream(parameters.path)
                    }
                }
    
                else if (body != null) {
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