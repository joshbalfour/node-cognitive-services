const commonService = require('../commonService');

/**
 *  The Emotion API beta takes an image as an input, and returns the confidence across a set of emotions for each face in the image, as well as bounding box for the face, from the Face API. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, disgust or neutral. These emotions are communicated cross-culturally and universally via the same basic facial expressions, where are identified by Emotion API.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/5639d931ca73072154c1ce89/operations/563b31ea778daf121cc3a5fa|documentation}
 */
class emotion extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "5639d931ca73072154c1ce89"
        this.endpoints = [
            "westus.api.cognitive.microsoft.com"
        ];
    }

    /**
     * Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. 
    
    - The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. 
    - If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. 
    - The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. 
    - For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. 
    - Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. 
    - The emotions contempt and disgust are experimental.
    @returns {Promise.<object>}
    */
    emotionRecognition({ headers, body }) {

        const operation = {
            "path": "emotion/v1.0/recognize",
            "method": "POST",
            "operationId": "563b31ea778daf121cc3a5fa",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream"
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        })
    };

    /**
     * Returns aggregate emotions for the faces in a video.
    - The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
    - The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. 
    - For each video, the maximum number of faces returned is 64. 
    - Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. 
    - Output files are deleted after 24 hours. 

    @returns {Promise.<string>}  ID of operation
     */
    emotionRecognitionInVideo({ parameters, body }) {

        const operation = {
            "path": "emotion/v1.0/recognizeinvideo",
            "method": "POST",
            "operationId": "56f8d40e1984551ec0a0984e",
            "parameters": [{
                "name": "outputStyle",
                "description": "Defaults to “aggregate” style, but a user can specify “perFrame” style.",
                "value": "aggregate",
                "options": [
                    "aggregate",
                    "perFrame"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            body: body
        }).then(operationIdUrl => {
            return this.getOperationIdFromUrl(operationIdUrl);
        })

    };

    /**
     * Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. 
    - The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. 
    - If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. 
    - The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. 
    - For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. 
    - Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. 
    - The emotions contempt and disgust are experimental.
    @returns {Promise.<object>}
     */
    emotionRecognitionWithFaceRectangles({ parameters, headers, body }) {

        const operation = {
            "path": "emotion/v1.0/recognize?faceRectangles={faceRectangles}",
            "method": "POST",
            "operationId": "56f23eb019845524ec61c4d7",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "faceRectangles",
                "description": "A face rectangle is in the form “left,top,width,height”. Delimited multiple face rectangles with a “;”. ",
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
     * Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result. Below is an example: 

    Example JSON:

    {
    "status": "Running",
    "createdDateTime": "2015-09-30T01:28:23.4493273Z",
    "lastActionDateTime": "2015-09-30T01:32:23.0895791Z",
    }

    Possible values of "status" field are:
    - Not Started - video content is received/uploaded but the process has not started.
    - Uploading - the video content is being uploaded by the URL client side provides.
    - Running - the process is running.
    - Failed - the process is failed. Detailed information will be provided in "message" field.
    - Succeeded - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:
    
    The result (as a JSON in string) is available in processingResult field.
    @returns {Promise.<object>}
     */
    getRecognitionInVideoOperationResult({ parameters }) {
        const operation = {
            "path": "emotion/v1.0/operations/{oid}",
            "method": "GET",
            "operationId": "56f8d4471984551ec0a0984f",
            "parameters": [{
                "name": "oid",
                "description": "",
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

}

module.exports = emotion;