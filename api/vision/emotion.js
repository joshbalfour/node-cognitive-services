const {
    makeRequest,
    verify
} = require('../../lib/api');

const emotion = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    /**
	Name: Emotion: Emotion Recognition
	Description: Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. 
• The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. 
• If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. 
• The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. 
• For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. 
• Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. 
• The emotions contempt and disgust are experimental.
*/
    self.emotionRecognition = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Emotion Recognition",
            "path": "emotion/v1.0/recognize",
            "method": "POST",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "563b31ea778daf121cc3a5fa",
            "id": "563b31ea778daf121cc3a5fa",
            "description": "Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. ",
            "serviceName": "Emotion",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
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

        const parameters = null;

        return verify(operation, parameters, headers, endpoint)
        .then(() => {
            return makeRequest({
                operation,
                parameters,
                body,
                apiKey,
                endpoint,
                headers
            })}
        )
    };

    /**
			Name: Emotion: Emotion Recognition in Video
			Description: Emotion API for Video is a cloud-based API that recognizes the emotions expressed by the people in an image and returns their emotions. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. These APIs allow you to build more personalized and intelligent apps by understanding your video content.
		*/
    self.emotionRecognitionInVideo = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Emotion Recognition in Video",
            "path": "emotion/v1.0/recognizeinvideo",
            "method": "POST",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "56f8d40e1984551ec0a0984e",
            "id": "56f8d40e1984551ec0a0984e",
            "description": "Returns aggregate emotions for the faces in a video.\
            • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. \
            • The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. \
            • For each video, the maximum number of faces returned is 64. \
            • Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large \occlusion. Frontal and near-frontal faces have the best results. \
            • Output files are deleted after 24 hours. ",
            "serviceName": "Emotion",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "outputStyle",
                "description": "Defaults to “aggregate” style, but a user can specify “perFrame” style.",
                "value": "aggregate",
                "options": [
                    "aggregate",
                    "perFrame"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        const headers = null;

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    apiKey,
                    endpoint,
                    headers
                })}
            )
            .then((operationIdUrl) => {
                var splittedUrl = operationIdUrl.split('/');
                return splittedUrl[splittedUrl.length - 1];
            })

    };
    /**
	Name: Emotion: Emotion Recognition with Face Rectangles
	Description: <p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>
	Example Parameters: {
	"faceRectangles": null
}
*/
    self.emotionRecognitionWithFaceRectangles = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Emotion Recognition with Face Rectangles",
            "path": "emotion/v1.0/recognize?faceRectangles={faceRectangles}",
            "method": "POST",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "56f23eb019845524ec61c4d7",
            "id": "56f23eb019845524ec61c4d7",
            "description": "Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral.\
            • The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. \
            • If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. \
            • The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. \
            • For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. \
            • Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. \
            • The emotions contempt and disgust are experimental. ",
            "serviceName": "Emotion",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
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
                apiKey,
                endpoint,
                headers
            })}
        )

    };

    /**
			Name: Emotion: Get Recognition in Video Operation Result
			Description: Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result. Below is an example: 

    Example JSON:

    {
    "status": "Running",
    "createdDateTime": "2015-09-30T01:28:23.4493273Z",
    "lastActionDateTime": "2015-09-30T01:32:23.0895791Z",
    }

    Possible values of "status" field are:
    Not Started - video content is received/uploaded but the process has not started.
    Uploading - the video content is being uploaded by the URL client side provides.
    Running - the process is running.
    Failed - the process is failed. Detailed information will be provided in "message" field.
    Succeeded - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:
    The result (as a JSON in string) is available in processingResult field.
    Open API testing console

		*/
    self.getRecognitionInVideoOperationResult = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Recognition in Video Operation Result",
            "path": "emotion/v1.0/operations/{oid}",
            "method": "GET",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "56f8d4471984551ec0a0984f",
            "id": "56f8d4471984551ec0a0984f",
            "description": "Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result.",
            "serviceName": "Emotion",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "oid",
                "description": "",
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
                apiKey,
                endpoint,
                headers
            })}
        )

    };

    return self;
};

module.exports = emotion;