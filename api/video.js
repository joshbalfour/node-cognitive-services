const {
    makeRequest,
    verify
} = require('../lib/api');

const video = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    /**
			Name: Video: Face Detection and Tracking
			Description: Detects and tracks human faces in a video and returns face locations. 
• The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
• The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. 
• For each video, the maximum number of faces returned is 64. 
• Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. 
• Output files are deleted after 24 hours.
		*/
    self.faceDetectionAndTracking = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Face Detection and Tracking",
            "path": "video/v1.0/trackface",
            "method": "POST",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e39",
            "id": "565d6517778daf0978c45e39",
            "description": "Detects and tracks human faces in a video and returns face locations. \
            • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. \
            • The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. \
            • For each video, the maximum number of faces returned is 64. \
            • Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large \occlusion. Frontal and near-frontal faces have the best results. \
            • Output files are deleted after 24 hours.",
            "serviceName": "Video",
            "endpoints": [
                "westus.api.cognitive.microsoft.com"
            ],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            }],
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
        .then((operationIdUrl) => {
            var splittedUrl = operationIdUrl.split('/');
            return splittedUrl[splittedUrl.length - 1];
        })

    };
    /**
			Name: Video: Get Operation Result
			Description: Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status. Below is an example:

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
Succeeded - the process succeeded.
		*/
    self.getOperationResult = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Operation Result",
            "path": "video/v1.0/operations/{oid}",
            "method": "GET",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e36",
            "id": "565d6517778daf0978c45e36",
            "description": "Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status. ",
            "serviceName": "Video",
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
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

        const headers = null;
        const body = null;

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
	Name: Video: Get Result Video
	Description: This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from <b>resourceLocation</b> field of JSON returned from Get Operation Result interface.
	Example Parameters: {
	"oid": null
}
*/
    self.getResultVideo = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Result Video",
            "path": "video/v1.0/operations/{oid}/content",
            "method": "GET",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d81f4ca73072048922d95",
            "id": "565d81f4ca73072048922d95",
            "description": "This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from <b>resourceLocation</b> field of JSON returned from Get Operation Result interface.",
            "serviceName": "Video",
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
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
    /**
			Name: Video: Motion Detection
			Description: Detects motion in a video, and returns the frame and duration of the motion that was captured. 
• The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
• User can input detection zones to set up as areas to detect motion. 
• User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.
• Motion Detection is optimized for stationary background videos. 
• User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.
• User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.
• User can specify which frames to be detected by passing in a parameter (frameSamplingValue).
• Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects. 
• Output files are deleted after 24 hours.
		*/
    self.motionDetection = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Motion Detection",
            "path": "video/v1.0/detectmotion",
            "method": "POST",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e3a",
            "id": "565d6517778daf0978c45e3a",
            "description": "Detects motion in a video, and returns the frame and duration of the motion that was captured. \
            • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. \
            • User can input detection zones to set up as areas to detect motion. \
            • User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.\
            • Motion Detection is optimized for stationary background videos. \
            • User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.\
            • User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.\
            • User can specify which frames to be detected by passing in a parameter (frameSamplingValue).\
            • Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects.\
            • Output files are deleted after 24 hours.",
            "serviceName": "Video",
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
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
                "name": "sensitivityLevel",
                "description": "Specify the detection sensitivity level: “low”, “medium”, “high”. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported. The default value is “medium”.",
                "value": "medium",
                "options": [
                    "low",
                    "medium",
                    "high"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "frameSamplingValue",
                "description": "User may skip frames by setting this parameter. It can be used as a tradeoff between performance and cost, skipping frames may reduce processing time but result in worse detection performance. The default value is 1, meaning detecting motion for every frame. If set to 2, then the algorithm will detect one frame for every two frames. The upper bound is 20.",
                "value": 1,
                "options": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "detectionZones",
                "description": "User can setup detection zones by passing in a string like “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5 |0.3,0.3;0.55,0.3;0.8,0.3; 0.8,0.55;0.8,0.8;0.55,0.8;0.3,0.8;0.3,0.55;| 0,0;1,0;1,1;0,1”, each detection zone is separated by a “|” and each point is defined by a “x,y” pair and separated by a “;”. At most 8 detection zones are supported and each detection zone should be defined by at least 3 points and no more than 16 points. The default setting is “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5”, i.e. the whole frame defined by an 8-point polygon.",
                "value": "0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5",
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "detectLightChange",
                "description": "Specify whether light change events should be detected. The default value is false.",
                "value": false,
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "mergeTimeThreshold",
                "description": "Specify the threshold on whether successive motions should be merged together, if the interval between successive motions is <= mergeTimeThreshold, they will be merged. The default value is 0.0 and upper bound is 10.0.",
                "value": 0.0,
                "required": false,
                "kind": 2,
                "typeName": "number"
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
        .then((operationIdUrl) => {
            var splittedUrl = operationIdUrl.split('/');
            return splittedUrl[splittedUrl.length - 1];
        })

    };
    /**
	Name: Video: Stabilization
	Description: Smooths and stabilizes a video. 
• The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
• Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). 
• Both width and height of the input video must be even numbers. 
• The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). 
• Output files are deleted after 24 hours.
*/
    self.stabilization = ({
        headers,
        body
    }) => {

        const operation = {
            "name": "Stabilization",
            "path": "video/v1.0/stabilize",
            "method": "POST",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e35",
            "id": "565d6517778daf0978c45e35",
            "description": "Smooths and stabilizes a video. \
            • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. \
            • Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). \
            • Both width and height of the input video must be even numbers. \
            • The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). \
            • Output files are deleted after 24 hours.",
            "serviceName": "Video",
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
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
        .then((operationIdUrl) => {
            var splittedUrl = operationIdUrl.split('/');
            return splittedUrl[splittedUrl.length - 1];
        })

    };
    /**
			Name: Video: Thumbnail
			Description: Generates a motion thumbnail from a video. The Video Thumbnail API provides an automatic summary for videos to let people see a preview or snapshot quickly. Selection of scenes from a video create a preview in form of a short video. 
• The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
• The number of scenes displayed in the thumbnail is either chosen by the user or defaults to the optimal duration supported by the Video API’s algorithm.
• A scene is a collection of indexed frames. Scenes are mapped according to sequence in video. 
• Fade in/fade out effects are included in the thumbnail by default, but can be turned off by the user. 
• Audio is included by default, but can be turned off by the user. Pauses in audio are detected to divide video into coherent scenes and avoid breaking sentences of speech.
• Output files are deleted after 24 hours.
		*/
    self.thumbnail = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Thumbnail",
            "path": "video/v1.0/generatethumbnail",
            "method": "POST",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "56f8acb0778daf23d8ec6738",
            "id": "56f8acb0778daf23d8ec6738",
            "description": "Generates a motion thumbnail from a video. The Video Thumbnail API provides an automatic summary for videos to let people see a preview or snapshot quickly. Selection of scenes from a video create a preview in form of a short video. \
            • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. \
            • The number of scenes displayed in the thumbnail is either chosen by the user or defaults to the optimal duration supported by the Video API’s algorithm.\
            • A scene is a collection of indexed frames. Scenes are mapped according to sequence in video. \
            • Fade in/fade out effects are included in the thumbnail by default, but can be turned off by the user. \
            • Audio is included by default, but can be turned off by the user. Pauses in audio are detected to divide video into coherent scenes and avoid breaking sentences of speech.\
            • Output files are deleted after 24 hours.",
            "serviceName": "Video",
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
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
                "name": "maxMotionThumbnailDurationInSecs",
                "description": "Specifies maximum duration of output video (in seconds). The default value is 0, which indicates the duration will be automatically decided by the algorithm.",
                "value": "0",
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "outputAudio",
                "description": "Indicates whether output video should include audio track. The default value is true.",
                "value": true,
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "fadeInFadeOut",
                "description": "Indicates whether output video should have fade in/out effect during scene changes. The default value is true.",
                "value": true,
                "required": false,
                "kind": 2,
                "typeName": "boolean"
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
        .then((operationIdUrl) => {
            var splittedUrl = operationIdUrl.split('/');
            return splittedUrl[splittedUrl.length - 1];
        })

    };

    return self;
};

module.exports = video;