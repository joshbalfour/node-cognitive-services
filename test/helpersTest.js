const should = require('should');
const api = require('../src/helpers');

describe('API Test', () => {
    it('should throw an error if a body parameter is required for json and not present', (done) => {
        const expectedBody = [{
            "name": "expr",
            "required": true,
            "type": "inBody"
        }];
        const actualBody = {};
        const contentType = "application/json"
        
        api.verifyBody(expectedBody, actualBody, contentType)
        .then((response) => {
            done(new Error("Expected error message!"));
        }).catch((err) => {
            done();
        });
    });

    it('should throw an error if the boolean body parameter has a value other than true or false', (done) => {
        const expectedBody = [{
            name: 'name',
            typeName: 'boolean',
            type: "inBody"
        }];
        const actualBody = {
            'name': '50'
        };
        const contentType = "application/json"

        api.verifyBody(expectedBody, actualBody, contentType)
        .then((response) => {
            done(new Error("Should have failed. '50' is not a boolean."))
        }).catch((err) => {
            done();
        })
    });

    it('should throw an error if a body parameter is required and its value is not in the list of options', (done) => {
        const expectedBody = [{
            "name": "expr",
            "required": true,
            "type": "inBody",
            "options": [1,2,3]
        }];
        const actualBody = {
            "expr": 4
        };
        const contentType = "application/json"
        
        api.verifyBody(expectedBody, actualBody, contentType)
        .then((response) => {
            done(new Error("Expected error message!"));
        }).catch((err) => {
            done();
        });
    });

    it('should throw an error if a parameter is required and not present', (done) => {
        const expectedParams = [{
            "name": "expr",
            "required": true,
        }];
        const actualParams = {};
        
        api.verifyParameters(expectedParams, actualParams)
        .then((response) => {
            done(new Error("Expected error message!"));
        }).catch((err) => {
            done();
        });
    });

    it('should throw an error if more than one parameter is required but not present', (done) => {
        const expectedParams = [{
            name: 'name1',
            required: true
        }, {
            name: 'name2',
            required: true
        }];
        const actualParams = {
            'blarh': '50'
        };

        api.verifyParameters(expectedParams, actualParams)
        .then((response) => {
            done(new Error("Should have failed. 2 parameters is required."))
        }).catch((err) => {
            done();
        })
    });

    it('should throw an error if a parameter is required and its value is not in the list of options', (done) => {
        const expectedParams = [{
            name: 'name',
            options: ["type1", "type2", "type3"]
        }];
        const actualParams = {
           'name': 'type4'
        };

        api.verifyParameters(expectedParams, actualParams)
        .then((response) => {
            done(new Error("Expected error message!"));
        }).catch((err) => {
            done();
        })
    });

    it('should accept a list of options for parameters', (done) => {
        const expectedParams = [{
            name: 'name',
            options: ["type1", "type2", "type3"]
        }];
        const actualParams = {
            'name': 'type1,type2'
        };

        api.verifyParameters(expectedParams, actualParams)
        .then((response) => {
            done();
        }).catch((err) => {
            done(err);
        })
    });

    it('should throw an error if the boolean parameter has a value other than true or false', (done) => {
        const expectedParams = [{
            name: 'name',
            typeName: 'boolean'
        }];
        const actualParams = {
            'name': '50'
        };

        api.verifyParameters(expectedParams, actualParams)
        .then((response) => {
            done(new Error("Should have failed. '50' is not a boolean."))
        }).catch((err) => {
            done();
        })
    });

    it('should not throw an error if the endpoint is supported', (done) => {
        const endpoints = [
            "westus.api.cognitive.microsoft.com"
        ];
        const endpoint = "westus.api.cognitive.microsoft.com";

        api.verifyEndpoint(endpoints, endpoint)
        .then((response) => {
            done();
        }).catch((err) => {
            done(err);
        })
    });

    it('should throw an error if the endpoint is not supported', (done) => {
        const endpoints = [
            "westus.api.cognitive.microsoft.com"
        ];
        const endpoint = "westus2.api.cognitive.microsoft.com";

        api.verifyEndpoint(endpoints, endpoint)
        .then((response) => {
            done(new Error("Should have failed. The endpoint is not supported."))
        }).catch((err) => {
            done();
        })
    });

    it('should throw an error if a header is required but not present', (done) => {
        const expectedHeaders = [{
            name: 'name',
            required: true
        }];
        const actualHeaders = {
            'blarh': '50'
        };

        api.verifyHeaders(expectedHeaders, actualHeaders)
        .then((response) => {
            done(new Error("Should have failed. The header is required."))
        }).catch((err) => {
            done();
        })
    });

    it('should throw an error if more than one headers are required but not present', (done) => {
        const expectedHeaders = [{
            name: 'name1',
            required: true
        }, {
            name: 'name2',
            required: true
        }];
        const actualHeaders = {
            'blarh': '50'
        };

        api.verifyHeaders(expectedHeaders, actualHeaders)
        .then((response) => {
            done(new Error("Should have failed. The header is required."))
        }).catch((err) => {
            done();
        })
    });
});