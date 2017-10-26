const commonSpeaker = require('./commonSpeaker');

/**
 * Speaker Verification APIs can automatically verify and authenticate users using their voice or speech.
 * 
 * Enrollment for speaker verification is text-dependent, which means speakers need to choose a specific pass phrase to use during both enrollment and verification phases.
 * In enrollment, the speaker's voice is recorded saying a specific phrase, then a number of features are extracted and the chosen phrase is recognized. 
 * Together, both extracted features and the chosen phrase form a unique voice signature.
 * 
 * In verification, an input voice and phrase are compared against the enrollment's voice signature and phrase – 
 * in order to verify whether or not they are from the same person, and if they are saying the correct phrase.
 */
class speakerVerification extends commonSpeaker {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
    }

    /**
     * Returns the list of supported verification phrases that can be used for "Create Enrollment" and "Verification".
     * @returns {Promise.<object>}
     */
    listAllSupportedVerificationPhrases({ parameters }) {

        const operation = {
            "path": "spid/v1.0/verificationPhrases",
            "method": "GET",
            "operationId": "5652c0801984551c3859634d",
            "parameters": [{
                "name": "locale",
                "description": "Locale for the language when retrieving verification phrases.",
                "value": "en-US",
                "options": ['en-US', 'zh-CN'],
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Create a new speaker verification profile with specific locale.
     * One subscription can only create 1000 speaker verification/identification profiles at most.
     * @returns {Promise.<object>}
     */
    createProfile({ body }) {

        const operation = {
            "path": "spid/v1.0/verificationProfiles",
            "method": "POST",
            "operationId": "5645c068e597ed22ec38f42e",
            "parameters": [{
                "name": "locale",
                "description": "Locale for language of the new speaker verification profile. ",
                "value": null,
                "options": ['en-US', 'zh-CN'],
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })

    };

    /**
     * Deletes both speaker verification profile and all associated enrollments permanently from the service.
     * @returns {Promise.<object>}
     */
    deleteProfile({ parameters }) {

        const operation = {
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}",
            "method": "DELETE",
            "operationId": "563309b7778daf06340c9655",
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Get all speaker verification profiles within the subscription.
     * @returns {Promise.<object>}
     */
    getAllProfiles() {

        const operation = {
            "path": "spid/v1.0/verificationProfiles",
            "method": "GET",
            "operationId": "563309b7778daf06340c9653",
        };

        return this.makeRequest({
            operation: operation,
        })

    };

    /**
     * Get a speaker verification profile by verificationProfileId
     * @returns {Promise.<object>}
     */
    getProfile({ parameters }) {

        const operation = {
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}",
            "method": "GET",
            "operationId": "56409ee2778daf19706420de",
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": "",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })

    };

    /**
     * Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. 
     * List of supported phrases can be found in "List All Supported Verification Phrases".
     * The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. 
     * It is recommended to use the same device (mic) in both enrollment and verification.
     * @returns {Promise.<object>}
     */
    createEnrollment({ parameters, headers, body }) {
        
        const operation = {
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}/enroll",
            "method": "POST",
            "operationId": "56406930e597ed20c8d8549c",
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
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. GUID returned from Verification Profile - Create Profile API",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    /**
     * Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.
     * @returns {Promise.<object>}
     */
    resetEnrollments({ parameters }) {

        const operation = {
            "path": "spid/v1.0/verificationProfiles/{verificationProfileId}/reset",
            "method": "POST",
            "operationId": "56406930e597ed20c8d8549b",
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": "",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    };

    /**
     * Automatically verify and authenticate users using their voice or speech.
     * @returns {Promise.<object>}
     */
    verify({ parameters, headers, body }) {
        
        const operation = {
            "path": "spid/v1.0/verify",
            "method": "POST",
            "operationId": "5645c725ca73070ee8845bd6",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/octet-stream",
                    "multipart/form-data"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "verificationProfileId",
                "description": "ID of speaker verification profile. It should be a GUID.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };
}

module.exports = speakerVerification;