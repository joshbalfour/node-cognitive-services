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

}

module.exports = emotion;