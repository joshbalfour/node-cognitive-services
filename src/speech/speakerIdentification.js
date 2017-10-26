const commonSpeaker = require('./commonSpeaker');

/**
 * Speaker Identification APIs can automatically identify the person speaking in an audio file, given a group of prospective speakers. 
 * The input audio is paired against the provided group of speakers, and in the case that there is a match found, the speaker’s identity is returned.
 * All speakers should go through an enrollment process first to get their voice registered to the system, and have a voice print created.
 * 
 * Enrollment for speaker identification is text-independent, which means that there are no restrictions on what the speaker says in the audio.
 * The speaker's voice is recorded, and a number of features are extracted to form a unique voice signature.
 * 
 * The audio of the unknown speaker, together with the prospective group of speakers, is provided during recognition. 
 * The input voice is compared against all speakers in order to determine whose voice it is, and if there is a match found, the identity of the speaker is returned.
 */
class speakerIdentification extends commonSpeaker {
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
     * Create a new speaker identification profile with specified locale.
     * One subscription can only create 1000 speaker verification/identification profiles at most.
     * @returns {Promise.<object>}
     */
    createProfile({ body }) {

        const operation = {
            "path": "spid/v1.0/identificationProfiles",
            "method": "POST",
            "operationId": "5645c068e597ed22ec38f42e",
            "parameters": [{
                "name": "locale",
                "description": "Locale for the language of this speaker identification profile. A complete supported locale list is here:\
                en-US (English US)\
                zh-CN (Chinese Mandarin)",
                "value": "en-US",
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
     * Delete profile
     * @returns {Promise.<object>}
     */
    deleteProfile({ parameters }) {

        const operation = {
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}",
            "method": "DELETE",
            "operationId": "5645c068e597ed22ec38f42e",
            "parameters": [{
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
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
     * Get all speaker identification profiles within the subscription.
     * @returns {Promise.<object>}
     */
    getAllProfiles() {

        const operation = {
            "path": "spid/v1.0/identificationProfiles",
            "method": "GET",
            "operationId": "5645c211e597ed22ec38f431",
        };

        return this.makeRequest({
            operation: operation,
        })
    };

    /**
     * Get a speaker identification profile by identificationProfileId.
     * @returns {Promise.<object>}
     */
    getProfile({ parameters }) {

        const operation = {
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}",
            "method": "GET",
            "operationId": "5645c211e597ed22ec38f431",
            "parameters": [{
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
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
     * Enrollment for speaker identification is text-independent, which means that there are no restrictions on
     * what the speaker says in the audio. The speaker's voice is recorded, and a number of features are extracted to form a unique voiceprint.
     * @returns {Promise.<string>} The operation id
     */
    createEnrollment({ parameters, headers, body }) {

        const operation = {
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}/enroll",
            "method": "POST",
            "operationId": "5645c3271984551c84ec6797",
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
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "shortAudio",
                "description": "Instruct the service to waive the recommended minimum audio limit needed for enrollment. \
                    Set value to 'true' to force enrollment using any audio length (min. 1 second).",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        }).then(response => {
            return this.getOperationIdFromUrl(response);
        })
    };
        
    /**
     * Deletes all enrollments associated with the given speaker identification profile permanently from the service.
     * @returns {Promise.<object>}
     */
    resetEnrollmentsForProfile({ parameters }) {

        const operation = {
            "path": "spid/v1.0/identificationProfiles/{identificationProfileId}/reset",
            "method": "POST",
            "operationId": "5645c211e597ed22ec38f431",
            "parameters": [{
                "name": "identificationProfileId",
                "description": "ID of speaker identification profile. GUID returned from Identification Profile - Create Profile API",
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
     * Get operation status or result. The operation should be created by Speaker Recognition - Identification or Identification Profile - Create Enrollment.
     * And the URL should be retrieved from Operation-Location header of initial POST 202 response.
     * @returns {Promise.<object>}
     */
    getOperationStatus({ parameters }) {

        const operation = {
            "path": "spid/v1.0/operations/{operationId}",
            "method": "GET",
            "operationId": "5645c725ca73070ee8845bd6",
            "parameters": [{
                "name": "operationId",
                "description": "The operation Id, created by Speaker Recognition - Identification or Identification Profile - Create Enrollment.",
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
     * Automatically identify who is speaking given a group of speakers
     * @returns {Promise.<string>} The ID of the operation
     */
    identify({ parameters, headers, body }) {

        const operation = {
            "path": "spid/v1.0/identify",
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
                "name": "identificationProfileIds",
                "description": "Comma-delimited identificationProfileIds, the id should be Guid. It can only support at most 10 profiles for one identification request.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "shortAudio",
                "description": "Instruct the service to waive the recommended minimum audio limit needed for identification. Set value to “true” to force identification using any audio length (min. 1 second).",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        }).then(response => {
            return this.getOperationIdFromUrl(response);
        })
    };
}

module.exports = speakerIdentification;