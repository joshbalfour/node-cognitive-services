const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const emotion = ({
    API_KEY
}) => {

    let self = this;

    /**
	Name: Emotion: Emotion Recognition
	Description: <p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>
	Example Parameters: {}
*/
    self.emotionRecognition = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Emotion Recognition",
            "path": "emotion/v1.0/recognize",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "563b31ea778daf121cc3a5fa",
            "id": "563b31ea778daf121cc3a5fa",
            "description": "<p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>",
            "serviceName": "Emotion",
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
			Name: Emotion: Emotion Recognition in Video
			Description: <p>Welcome to the Microsoft Emotion API for Video. Emotion API for Video is a cloud-based API that recognizes the emotions expressed by the people in an image and returns an aggregate summary of their emotions. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. These APIs allow you to build more personalized and intelligent apps by understanding your video content. </p>
<br/>
Emotion Recognition<br/>
Returns aggregate emotions for the faces in a video.<br/>
&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>
&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. <br/>
&bull; For each video, the maximum number of faces returned is 64. <br/>
&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. <br/>
&bull; Output files are deleted after 24 hours. <br/>
			Example Parameters: {}
		*/
    self.emotionRecognitionInVideo = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Emotion Recognition in Video",
            "path": "emotion/v1.0/recognizeinvideo",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "56f8d40e1984551ec0a0984e",
            "id": "56f8d40e1984551ec0a0984e",
            "description": "<p>Welcome to the Microsoft Emotion API for Video. Emotion API for Video is a cloud-based API that recognizes the emotions expressed by the people in an image and returns an aggregate summary of their emotions. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. These APIs allow you to build more personalized and intelligent apps by understanding your video content. </p>\n<br/>\nEmotion Recognition<br/>\nReturns aggregate emotions for the faces in a video.<br/>\n&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>\n&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. <br/>\n&bull; For each video, the maximum number of faces returned is 64. <br/>\n&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. <br/>\n&bull; Output files are deleted after 24 hours. <br/>",
            "serviceName": "Emotion",
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
	Name: Emotion: Emotion Recognition with Face Rectangles
	Description: <p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>
	Example Parameters: {
	"faceRectangles": null
}
*/
    self.emotionRecognitionWithFaceRectangles = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Emotion Recognition with Face Rectangles",
            "path": "emotion/v1.0/recognize?faceRectangles={faceRectangles}",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "56f23eb019845524ec61c4d7",
            "id": "56f23eb019845524ec61c4d7",
            "description": "<p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>",
            "serviceName": "Emotion",
            "headers": {
                "Content-Type": "application/json",
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "faceRectangles",
                "description": "A face rectangle is in the form “left,top,width,height”. Delimited multiple face rectangles with a “;”. ",
                "value": null,
                "options": [],
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
			Name: Emotion: Get Recognition in Video Operation Result
			Description: Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result. Below is an example: <br/>

Example JSON:
<table class="element table">
            <thead>
            </thead>
            <tbody>
            <tr>
{<br/>
	"status": "Running",<br/>
	"createdDateTime":  "2015-09-30T01:28:23.4493273Z",<br/>
	"lastActionDateTime": "2015-09-30T01:32:23.0895791Z",<br/>
}<br/>
             </tr>
            </tbody>
</table>
<br/>
<p>
Possible values of "status" field are:<br/>
<b>Not Started</b> - video content is received/uploaded but the process has not started.<br/>
<b>Uploading</b> - the video content is being uploaded by the URL client side provides.<br/>
<b>Running</b> - the process is running.<br/>
<b>Failed</b> - the process is failed. Detailed information will be provided in "message" field.<br/>
<b>Succeeded</b> - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:<br/>
</p>
The result (as a JSON in string) is available in <b>processingResult</b> field.
			Example Parameters: {
			"oid": null
		}
		*/
    self.getRecognitionInVideoOperationResult = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Recognition in Video Operation Result",
            "path": "emotion/v1.0/operations/{oid}",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "5639d931ca73072154c1ce89",
            "operationId": "56f8d4471984551ec0a0984f",
            "id": "56f8d4471984551ec0a0984f",
            "description": "Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result. Below is an example: <br/>\n\nExample JSON:\n<table class=\"element table\">\n						<thead>\n						</thead>\n						<tbody>\n						<tr>\n{<br/>\n\t\"status\": \"Running\",<br/>\n\t\"createdDateTime\":	\"2015-09-30T01:28:23.4493273Z\",<br/>\n\t\"lastActionDateTime\": \"2015-09-30T01:32:23.0895791Z\",<br/>\n}<br/>\n						 </tr>\n						</tbody>\n</table>\n<br/>\n<p>\nPossible values of \"status\" field are:<br/>\n<b>Not Started</b> - video content is received/uploaded but the process has not started.<br/>\n<b>Uploading</b> - the video content is being uploaded by the URL client side provides.<br/>\n<b>Running</b> - the process is running.<br/>\n<b>Failed</b> - the process is failed. Detailed information will be provided in \"message\" field.<br/>\n<b>Succeeded</b> - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:<br/>\n</p>\nThe result (as a JSON in string) is available in <b>processingResult</b> field.",
            "serviceName": "Emotion",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "oid",
                "description": "",
                "value": null,
                "options": [],
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

module.exports = emotion;