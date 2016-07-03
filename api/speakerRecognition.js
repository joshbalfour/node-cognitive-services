const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const speakerRecognition = ({
    API_KEY
}) => {

    let self = this;

    /**
			Name: Speaker Recognition: Create Enrollment
			Description: Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d">Verification Phrase - List All Supported Verification Phrases</a>.<br/><br/>
The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.
			Example Parameters: {
			"verificationProfileId": null
		}
		*/
    self.createEnrollment = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Create Enrollment",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}/enroll",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56406930e597ed20c8d8549c",
            "id": "56406930e597ed20c8d8549c",
            "description": "Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d\">Verification Phrase - List All Supported Verification Phrases</a>.<br/><br/>\nThe service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.",
            "serviceName": "Speaker Recognition",
            "requestBody": [{
                "Container": "WAV"
            }, {
                "Encoding": "PCM"
            }, {
                "Rate": "16K"
            }, {
                "SampleFormat": "16 bit"
            }, {
                "Channels": "Mono"
            }],
            "headers": {
                "Content-Type": "multipart/form-data",
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. GUID returned from <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9652\">Verification Profile - Create Profile</a> API",
                "value": null,
                "options": [
                    "94BC205B-FACD-42A7-9D80-485403106627"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
			Name: Speaker Recognition: Create Profile
			Description: Create a new speaker identification profile with specified locale.<br/>
One subscription can only create 1000 speaker verification/identification profiles at most.<br/>
			Example Parameters: {}
		*/
    self.createProfile = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Create Profile",
            "path": "spid/v1.0/identificationProfiles",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c068e597ed22ec38f42e",
            "id": "5645c068e597ed22ec38f42e",
            "description": "Create a new speaker identification profile with specified locale.<br/>\nOne subscription can only create 1000 speaker verification/identification profiles at most.<br/>",
            "serviceName": "Speaker Recognition",
            "requestBody": [{
                "Fields": "Locale for the language of this speaker identification profile ."
            }, {
                "Fields": "A complete supported locale list is here:\n					"
            }, {
                "Fields": "\n					"
            }, {
                "Fields": "\n				"
            }],
            "headers": {
                "Content-Type": "application/json",
                "Host": "api.projectoxford.ai"
            },
            "parameters": []
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: Delete Profile
	Description: Deletes both speaker verification profile and all associated enrollments permanently from the service.
	Example Parameters: {
	"verificationProfileId": null
}
*/
    self.deleteProfile = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Delete Profile",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}",
            "host": "api.projectoxford.ai",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "563309b7778daf06340c9655",
            "id": "563309b7778daf06340c9655",
            "description": "Deletes both speaker verification profile and all associated enrollments permanently from the service.",
            "serviceName": "Speaker Recognition",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": null,
                "options": [
                    "7180c319-88b5-4cf0-824d-1dfd5d4854f4"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: Get All Profiles
	Description: Get all speaker verification profiles within the subscription.
	Example Parameters: {}
*/
    self.getAllProfiles = ({
        parameters
    }) => {

        const operation = {
            "name": "Get All Profiles",
            "path": "spid/v1.0/verificationProfiles",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "563309b7778daf06340c9653",
            "id": "563309b7778daf06340c9653",
            "description": "Get all speaker verification profiles within the subscription.",
            "serviceName": "Speaker Recognition",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": []
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: Get Profile
	Description: Get a speaker verification profile by verificationProfileId
	Example Parameters: {
	"verificationProfileId": "111f427c-3791-468f-b709-fcef7660fff9"
}
*/
    self.getProfile = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Profile",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56409ee2778daf19706420de",
            "id": "56409ee2778daf19706420de",
            "description": "Get a speaker verification profile by verificationProfileId",
            "serviceName": "Speaker Recognition",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": "111f427c-3791-468f-b709-fcef7660fff9",
                "options": [
                    "111f427c-3791-468f-b709-fcef7660fff9"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: Reset Enrollments
	Description: Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.
	Example Parameters: {
	"verificationProfileId": null
}
*/
    self.resetEnrollments = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Reset Enrollments",
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}/reset",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56406930e597ed20c8d8549b",
            "id": "56406930e597ed20c8d8549b",
            "description": "Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.",
            "serviceName": "Speaker Recognition",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": null,
                "options": [
                    "7180c319-88b5-4cf0-824d-1dfd5d4854f4"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: Get Operation Status
	Description: Get operation status or result. The operation should be created by <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592"> Speaker Recognition - Identification</a> or <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797"> Identification Profile - Create Enrollment</a>. And the URL should be retrieved from Operation-Location header of initial POST 202 response
	Example Parameters: {
	"operationId": "EF217D0C-9085-45D7-AAE0-2B36471B89B5"
}
*/
    self.getOperationStatus = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Operation Status",
            "path": "spid/v1.0/operations/{operationId}",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c725ca73070ee8845bd6",
            "id": "5645c725ca73070ee8845bd6",
            "description": "Get operation status or result. The operation should be created by <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592\"> Speaker Recognition - Identification</a> or <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797\"> Identification Profile - Create Enrollment</a>. And the URL should be retrieved from Operation-Location header of initial POST 202 response",
            "serviceName": "Speaker Recognition",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "operationId",
                "description": "The operation Id, created by <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592\"> Speaker Recognition - Identification</a> or <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797\"> Identification Profile - Create Enrollment</a>. ",
                "value": "EF217D0C-9085-45D7-AAE0-2B36471B89B5",
                "options": [
                    "EF217D0C-9085-45D7-AAE0-2B36471B89B5"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: Identification
	Description: To automatically identify who is speaking given a group of speakers.
	Example Parameters: {
	"identificationProfileIds": "111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9"
}
*/
    self.identification = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Identification",
            "path": "spid/v1.0/identify?identificationProfileIds={identificationProfileIds}",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5645c523778daf217c292592",
            "id": "5645c523778daf217c292592",
            "description": "To automatically identify who is speaking given a group of speakers.",
            "serviceName": "Speaker Recognition",
            "requestBody": [{
                "Container": "WAV"
            }, {
                "Encoding": "PCM"
            }, {
                "Rate": "16K"
            }, {
                "SampleFormat": "16 bit"
            }, {
                "Channels": "Mono"
            }],
            "headers": {
                "Content-Type": "application/octet-stream",
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "identificationProfileIds",
                "description": "Comma-delimited identificationProfileIds, the id should be Guid.<br/>It can only support at most 10 profiles for one identification request.",
                "value": "111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9",
                "options": [
                    "111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: Verification
	Description: To automatically verify and authenticate users using their voice or speech.
	Example Parameters: {
	"verificationProfileId": null
}
*/
    self.verification = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Verification",
            "path": "spid/v1.0/verify?verificationProfileId={verificationProfileId}",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "56406930e597ed20c8d8549d",
            "id": "56406930e597ed20c8d8549d",
            "description": "To automatically verify and authenticate users using their voice or speech.",
            "serviceName": "Speaker Recognition",
            "requestBody": [{
                "Container": "WAV"
            }, {
                "Encoding": "PCM"
            }, {
                "Rate": "16K"
            }, {
                "SampleFormat": "16 bit"
            }, {
                "Channels": "Mono"
            }],
            "headers": {
                "Content-Type": "application/octet-stream",
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": null,
                "options": [
                    "94BC205B-FACD-42A7-9D80-485403106627"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };
    /**
	Name: Speaker Recognition: List All Supported Verification Phrases
	Description: Returns the list of supported verification phrases that can be used for <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549c">Verification Profile - Create Enrollment</a> and <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d">Speaker Recognition - Verification</a>.
	Example Parameters: {
	"locale": "en-US"
}
*/
    self.listAllSupportedVerificationPhrases = ({
        parameters
    }) => {

        const operation = {
            "name": "List All Supported Verification Phrases",
            "path": "spid/v1.0/verificationPhrases?locale={locale}",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563309b6778daf02acc0a508",
            "operationId": "5652c0801984551c3859634d",
            "id": "5652c0801984551c3859634d",
            "description": "Returns the list of supported verification phrases that can be used for <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549c\">Verification Profile - Create Enrollment</a> and <a href=\"https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d\">Speaker Recognition - Verification</a>.",
            "serviceName": "Speaker Recognition",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "locale",
                "description": "Locale for the language when retrieving verification phrases.",
                "value": "en-US",
                "options": [
                    "en-US"
                ],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verifyParameters(operation, parameters)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY
            }));

    };

    return self;
};

module.exports = speakerRecognition;