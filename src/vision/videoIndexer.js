const commonService = require('../commonService');

/**
 * Video Indexer is a cloud service that enables you to extract the following insights from your videos using artificial intelligence technologies:
 * 
 * - Audio Transcription: Video Indexer has speech-to-text functionality, which enables customers to get a transcript of the spoken words. Supported languages include English, Spanish, French, German, Italian, Chinese (Simplified), Portuguese (Brazilian), Japanese and Russian (with many more to come in the future).
 * 
 * - Face tracking and identification: Face technologies enable detection of faces in a video. The detected faces are matched against a celebrity database to evaluate which celebrities are present in the video. Customers can also label faces that do not match a celebrity. Video Indexer builds a face model based on those labels and can recognize those faces in videos submitted in the future.
 * 
 * - Speaker indexing: Video Indexer has the ability to map and understand which speaker spoke which words and when.
 * 
 * - Visual text recognition: With this technology, Video Indexer service extracts text that is displayed in the videos.
 * 
 * - Voice activity detection: This enables Video Indexer to separate background noise and voice activity.
 * 
 * - Scene detection: Video Indexer has the ability to perform visual analysis on the video to determine when a scene changes in a video.
 * 
 * - Keyframe extraction: Video Indexer automatically detects keyframes in a video.
 * 
 * - Sentiment analysis: Video Indexer performs sentiment analysis on the text extracted using speech-to-text and optical character recognition, and provide that information in the form of positive, negative of neutral sentiments, along with timecodes.
 * 
 * - Translation: Video Indexer has the ability to translate the audio transcript from one language to another. The following languages are supported: English, Spanish, French, German, Italian, Chinese-Simplified, Portuguese-Brazilian, Japanese, and Russian. Once translated, the user can even get captioning in the video player in other languages.
 * 
 * - Visual content moderation: This technology enables detection of adult and/or racy material present in the video and can be used for content filtering.
 * 
 * - Keywords extraction: Video Indexer extracts keywords based on the transcript of the spoken words and text recognized by visual text recognizer.
 * 
 * - Annotation: Video Indexer annotates the video based on a pre-defined model of 2000 objects.
 * 
 * {@link https://videobreakdown.portal.azure-api.net/docs/services/582074fb0dc56116504aed75|documentation}
 */
class videoIndexer extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     */
    constructor({ apiKey }) {
        const endpoint = "videobreakdown.azure-api.net/Breakdowns/Api";
        super({ apiKey, endpoint });
        this.endpoints = [
            endpoint
        ];
        // https://docs.microsoft.com/en-us/azure/media-services/media-services-media-encoder-standard-formats
        this.supportedFormats = ['flv', 'mxf', 'gxf', 'ts', 'ps', '3gp', '3gpp', 'mpg', 'wmv', 'asf', 'avi', 'mp4', 'm4a', 'm4v', 'isma', 'ismv', 'dvr-ms', 'mkv', 'wav', 'mov']
    }

    getAccounts() {
        const operation = {
            "path": "Partner/Accounts",
            "operationId": "5911d0130dc561079497d9a2",
            "method": "GET"
        }

        return this.makeRequest({
            operation: operation
        })
    }

    /**
     * Uploads the given video, starts indexing it and returns a new breakdown id.
     * @returns {Promise.<string>}
     * @throws If the video format is not supported
     */
    upload({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns",
            "operationId": "582074fb0dc5610e14c75ec7",
            "method": "POST",
            "parameters": [{
                "name": "name",
                "description": "The video name.",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "privacy",
                "description": "The video privacy",
                "required": true,
                "options": ['Private', 'Public'],
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "videoUrl",
                "description": "A public url of the video/audio file. If not specified, the file should be passed as a multipart/form body content.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "The language of the video, to be used when generating the transcript.",
                "required": false,
                "options": ['ar-EG', 'en-US', 'es-ES', 'ru-RU', 'ja-JP', 'de-DE', 'fr-FR', 'pt-BR', 'it-IT', 'zh-CN'],
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "externalId",
                "description": "An external id to associate with the video (can be searched for later).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "metadata",
                "description": "Metadata to associate with the video (will be returned in queries).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "description",
                "description": "Description of the video",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "partition",
                "description": "A partition to partition videos by (used for searching a specific partition).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "callbackUrl",
                "description": "A url to notify when indexing is completed. It should be a POST url and VideoIndexer will add 2 additional query string parameters to it: id and state.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "indexingPreset",
                "description": "The indexing preset to use (Default/AudioOnly).",
                "options": ['Default', 'AudioOnly'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "streamingPreset",
                "description": "The streaming preset to use (Default/AdaptiveBitrate).",
                "options": ['Default', 'AdaptiveBitrate'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "path",
                "description": "The path to the file",
                "required": false,
                "typeName": "string"
            }]
        }

        var headers;
        if (parameters.path) {
            const isFormatSupported = this.supportedFormats.filter(sf => {
                return parameters.path.endsWith(sf);
            }).length
            if (isFormatSupported == 0) {
                return new Promise((resolve, reject) => {
                    reject(new Error('Unsupported format. Supported formats are ' + this.supportedFormats.join(',')))
                })
            }
            headers = {'Content-Type': 'multipart/form-data'}
        } else {
            headers = {}
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
        }).then(resp => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(resp);
                }, 3000); // Wait 3s then resolve.
            })
        })
    }

    /**
     * Gets the processing state of the given breakdown id (Uploaded, Processing, Processed, Failed) and if Processing it returns the progress (e.g. 30%).
     * @returns {Promise.<object>}
     */
    getProcessingStateOfBreakdown({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/{breakdownId}/State",
            "operationId": "582074fb0dc5610e14c75ec8",
            "method": "GET",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id from \"upload\"",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

     /**
     * Deletes the uploaded video and if deleteInsights=true, then deletes the generated insights as well.
     * @returns {Promise.<undefined>}
     */
    deleteBreakdown({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/{breakdownId}",
            "operationId": "5857caeb0dc5610f9ce979e4",
            "method": "DELETE",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id from \"upload\"",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "deleteInsights",
                "description": "Whether to delete the generated insights as well.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Gets a url to the cognitive insights widget url, including an access token.
     * @returns {Promise.<string>}
     */
    getInsightsWidgetUrl({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/{breakdownId}/InsightsWidgetUrl",
            "operationId": "582074fb0dc5610e14c75ecb",
            "method": "GET",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id from \"upload\"",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "widgetType",
                "description": "A type of a sub-widget to include",
                "options": ["People", "Sentiments", "Keywords", "Search"],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "allowEdit",
                "description": "A boolean that if set to true will return accessToken with editing permissions. (remove face, edit text, etc.)",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Gets a url to the cognitive insights widget url, including an access token, based on a given external id.
     * @returns {Promise.<string>}
     */
    getInsightsWidgetUrlByExternalId({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/GetInsightsWidgetUrlByExternalId",
            "operationId": "588a03710dc5610e446342ec",
            "method": "GET",
            "parameters": [{
                "name": "externalId",
                "description": "An external id to search for (which was associated with a video of this subscription at upload).",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "widgetType",
                "description": "A type of a sub-widget to include",
                "options": ["People", "Sentiments", "Keywords", "Search"],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "allowEdit",
                "description": "A boolean that if set to true will return accessToken with editing permissions. (remove face, edit text, etc.)",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Gets a url to the player widget url, including an access token.
     * @returns {Promise.<string>}
     */
    getPlayerWidgetUrl({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/{breakdownId}/PlayerWidgetUrl",
            "operationId": "588a03710dc5610e446342ec",
            "method": "GET",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id.",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Gets a url to a VTT file with the given breakdown's captions.
     * @returns {Promise.<string>}
     */
    getCaptionsUrl({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/{breakdownId}/VttUrl",
            "operationId": "588a03710dc5610e446342ec",
            "method": "GET",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id.",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "The breakdown id.",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Re-indexes the given breakdown.
     * @returns {Promise.<object>}
     */
    reIndexBreakdown({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/reindex/{breakdownId}",
            "operationId": "592ac3d50dc56105b44f0608",
            "method": "PUT",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id.",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "callbackUrl",
                "description": "A url to notify when indexing is completed. It should be a POST url",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "indexingPreset",
                "description": "The indexing preset to use (Default/AudioOnly).",
                "options": ['Default', 'AudioOnly'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "streamingPreset",
                "description": "The streaming preset to use (Default/AdaptiveBitrate).",
                "options": ['Default', 'AdaptiveBitrate'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Re-indexes the video of the given external id.
     * @returns {Promise.<object>}
     */
    reIndexBreakdownByExternalId({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/reindexbyexternalid/{externalId}",
            "operationId": "592ac3d50dc56105b44f0608",
            "method": "PUT",
            "parameters": [{
                "name": "externalId",
                "description": "An external id (which was associated with a video of this subscription at upload).",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "callbackUrl",
                "description": "A url to notify when indexing is completed. It should be a POST url",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "indexingPreset",
                "description": "The indexing preset to use (Default/AudioOnly).",
                "options": ['Default', 'AudioOnly'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "streamingPreset",
                "description": "The streaming preset to use (Default/AdaptiveBitrate).",
                "options": ['Default', 'AdaptiveBitrate'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Performs search and returns the search results. If available, returns the matches of the search filters in the results.
     * @returns {Promise.<object>}
     */
    searchBy({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/Search",
            "operationId": "582074fb0dc5610e14c75ec9",
            "method": "GET",
            "parameters": [{
                "name": "privacy",
                "description": "The video privacy",
                "required": false,
                "options": ['Private', 'Public', 'Organization'],
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "id",
                "description": "A breakdown id to search for.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "partition",
                "description": "A partition to search for.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "owner",
                "description": "An owner to search for.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "face",
                "description": "An face to search for.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "query",
                "description": "Free text to search for.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "textScope",
                "description": "The text scope to search in.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "pageSize",
                "description": "The number of results to return.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "skip",
                "description": "The number of results to skip (used for paging).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "externalId",
                "description": "An external id to search for (which was associated with the video at upload).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "The language to search in.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "searchInPublicAccount",
                "description": "Whether to look in the Public account (otherwise, in the user's account).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Updates the name of the given face and trains the face model to recognize that face in future videos.
     * @returns {Promise.<object>}
     */
    updateFaceName({parameters}) {
        const operation = {
            "path": "Partner/Breakdowns/UpdateFaceName/{breakdownId}",
            "operationId": "592c245e0dc56105b44f0610",
            "method": "PUT",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id.",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "faceId",
                "description": "The face id (from the video's json).",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "newName",
                "description": "The new name for the face (use 'Unknown #1/2/3...' to make it anonymous again)",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Updates the video with the given transcript. 
     * If the specified language is the source language of the video, then the video will be re-indexed with the given transcript, and the transcript of all the other languages will be re-generated. 
     * If the specified language is not the source language, the transcript of that language will be updated and the new text will be written into the existing lines and blocks of that language.
     * 
     * The body must be a json string containing the full video VTT. For example (notice the surrounding ""):
     * 
        "WEBVTT

        00:00:00.000 --> 00:00:30.000 This is line number 1

        00:00:35.110 --> 00:00:50.010 This is line number 2 

        "

     * @returns {Promise.<object>}
     */
    updateTranscript({parameters, body}) {
        const operation = {
            "path": "Partner/Breakdowns/UpdateTranscript/{breakdownId}",
            "operationId": "592c245e0dc56105b44f0610",
            "method": "PUT",
            "parameters": [{
                "name": "breakdownId",
                "description": "The breakdown id.",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "The language to update",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "callbackUrl",
                "description": "For example, if the callback url is 'https://test.com/notifyme?projectName=MyProject', the notification will be sent with additional parameters to 'https://test.com/notifyme?projectName=MyProject&id=1234abcd&state=Processed'.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        }

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-Type': 'application/json'},
            body: body
        })
    }
}

module.exports = videoIndexer;