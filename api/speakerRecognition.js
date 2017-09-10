const {
    makeRequest,
    verify,
} = require('../lib/api');

const speakerRecognition = ({
    API_KEY,
    endpoint
}) => {

    let self = this;

    self.verificationProfileCreateEnrollment = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Verification profile - Create Enrollment",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}/enroll",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56406930e597ed20c8d8549c",
            "id": "56406930e597ed20c8d8549c",
            "description": "Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d\">Verification Phrase - List All Supported Verification Phrases</a>.<br/><br/>\nThe service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.",
            "serviceName": "Speaker Recognition",
            "requestBody": [],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. GUID returned from Verification Profile - Create Profile API",
                "value": null,
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.verificationProfileCreateProfile = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Verification profile - Create Profile",
            "path": "spid/v1.0/verificationProfiles",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c068e597ed22ec38f42e",
            "id": "5645c068e597ed22ec38f42e",
            "description": "Create a new speaker verification profile with specific locale. One subscription can only create 1000 speaker verification/identification profiles at most.",
            "serviceName": "Speaker Recognition",
            "requestBody": [{
                "Fields": "locale",
                "Description": "Locale for language of the new speaker verification profile. "
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json"
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.verificationProfileDeleteProfile = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Verification profile - Delete Profile",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "563309b7778daf06340c9655",
            "id": "563309b7778daf06340c9655",
            "description": "Deletes both speaker verification profile and all associated enrollments permanently from the service.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": null,
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.verificationProfileGetAllProfiles = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Verification profile - Get All Profiles",
            "path": "spid/v1.0/verificationProfiles",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "563309b7778daf06340c9653",
            "id": "563309b7778daf06340c9653",
            "description": "Get all speaker verification profiles within the subscription.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
            ],           
            "parameters": []
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };

    self.verificationProfileGetProfile = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Verification Profile - Get Profile",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56409ee2778daf19706420de",
            "id": "56409ee2778daf19706420de",
            "description": "Get a speaker verification profile by verificationProfileId",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": "",
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.verificationProfileResetEnrollments = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Verification Profile - Reset Enrollments",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}/reset",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56406930e597ed20c8d8549b",
            "id": "56406930e597ed20c8d8549b",
            "description": "Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": "",
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };

    self.speakerRecognitionGetOperationStatus = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Speaker Recognition - Get Operation Status",
            "path": "spid/v1.0/operations/{operationId}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c725ca73070ee8845bd6",
            "id": "5645c725ca73070ee8845bd6",
            "description": "Get operation status or result. The operation should be created by <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592\"> Speaker Recognition - Identification</a> or <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797\"> Identification Profile - Create Enrollment</a>. And the URL should be retrieved from Operation-Location header of initial POST 202 response",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "operationId",
                "description": "The operation Id, created by <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592\"> Speaker Recognition - Identification</a> or <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797\"> Identification Profile - Create Enrollment</a>. ",
                "value": "",
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.speakerRecognitionIdentification = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Speaker Recognition - Identification",
            "path": "spid/v1.0/identify?identificationProfileIds={identificationProfileIds}[&shortAudio]",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c523778daf217c292592",
            "id": "5645c523778daf217c292592",
            "description": "To automatically identify who is speaking given a group of speakers.",
            "serviceName": "Speaker Recognition",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
            ],
            "parameters": [{
                "name": "identificationProfileIds",
                "description": "Comma-delimited identificationProfileIds, the id should be Guid. It can only support at most 10 profiles for one identification request.",
                "value": "",
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "shortAudio",
                "description": "Instruct the service to waive the recommended minimum audio limit needed for identification. Set value to “true” to force identification using any audio length (min. 1 second).",
                "value": "",
                "required": false,
                "kind": 1,
                "typeName": "boolean"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.speakerRecognitionVerification = ({
        parameters,
        heaers,
        body
    }) => {

        const operation = {
            "name": "Speaker Recognition - Verification",
            "path": "spid/v1.0/verify?verificationProfileId={verificationProfileId}",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56406930e597ed20c8d8549d",
            "id": "56406930e597ed20c8d8549d",
            "description": "To automatically verify and authenticate users using their voice or speech.",
            "serviceName": "Speaker Recognition",
            "requestBody": [],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": null,
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    
    self.listAllSupportedVerificationPhrases = ({
        parameters
    }) => {

        const operation = {
            "name": "List All Supported Verification Phrases",
            "path": "spid/v1.0/verificationPhrases?locale={locale}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5652c0801984551c3859634d",
            "id": "5652c0801984551c3859634d",
            "description": "Returns the list of supported verification phrases that can be used for <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549c\">Verification Profile - Create Enrollment</a> and <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d\">Speaker Recognition - Verification</a>.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "locale",
                "description": "Locale for the language when retrieving verification phrases.",
                "value": "en-US",
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        const body = null;
        const headers = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };

    self.identificationProfileCreateEnrollment = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Identification Profile - Create Enrollment",
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}/enroll[?shortAudio]",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c3271984551c84ec6797",
            "id": "5645c3271984551c84ec6797",
            "description": "Enrollment for speaker identification is text-independent, which means that there are no restrictions on \
                 what the speaker says in the audio. The speaker's voice is recorded, and a number of features are extracted to form a unique voiceprint.",
            "serviceName": "Speaker Recognition",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
                "value": null,
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "shortAudio",
                "description": "Instruct the service to waive the recommended minimum audio limit needed for enrollment. \
                    Set value to 'true' to force enrollment using any audio length (min. 1 second).",
                "value": null,
                "required": false,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };

    self.identificationProfileCreateProfile = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Identification Profile - Create Profile",
            "path": "spid/v1.0/identificationProfiles",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c068e597ed22ec38f42e",
            "id": "5645c068e597ed22ec38f42e",
            "description": "Create a new speaker identification profile with specified locale.\
                One subscription can only create 1000 speaker verification/identification profiles at most.",
            "serviceName": "Speaker Recognition",
            "requestBody": [{
                "Fields": "locale",
                "Description":  "Locale for the language of this speaker identification profile. A complete supported locale list is here:\
                    en-US (English US)\
                    zh-CN (Chinese Mandarin)"
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };

    self.identificationProfileDeleteProfile = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Identification Profile - Create Profile",
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c068e597ed22ec38f42e",
            "id": "5645c068e597ed22ec38f42e",
            "description": "Create a new speaker identification profile with specified locale.\
                One subscription can only create 1000 speaker verification/identification profiles at most.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
                "value": null,
                "required": string,
                "kind": 1,
                "typeName": "string"
            }]
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };

    self.identificationProfileGetAll = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Identification Profile - Get All Profiles",
            "path": "spid/v1.0/identificationProfiles",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c211e597ed22ec38f431",
            "id": "5645c211e597ed22ec38f431",
            "description": "Get all speaker identification profiles within the subscription.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };

    self.identificationProfileGet = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Identification Profile - Get Profile",
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c211e597ed22ec38f431",
            "id": "5645c0d9e597ed22ec38f42f",
            "description": "Get a speaker identification profile by identificationProfileId.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
                "value": null,
                "required": string,
                "kind": 1,
                "typeName": "string"
            }]
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };

    self.identificationProfileResetEnrollments = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Identification Profile - Reset Enrollments",
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}/reset",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c211e597ed22ec38f431",
            "id": "5645c2c1e597ed22ec38f433",
            "description": "Deletes all enrollments associated with the given speaker identification profile permanently from the service.",
            "serviceName": "Speaker Recognition",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
                "value": null,
                "required": string,
                "kind": 1,
                "typeName": "string"
            }]
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );
    };


    return self;
};

module.exports = speakerRecognition;