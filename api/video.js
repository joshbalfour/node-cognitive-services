const {
    makeRequest,
    verifyParameters
} = require('../lib/api');

const video = ({
    API_KEY
}) => {

    let self = this;

    /**
			Name: Video: Face Detection and Tracking
			Description: <p>Detects and tracks human faces in a video and returns face locations. <br/>&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. <br/>&bull; For each video, the maximum number of faces returned is 64. <br/>&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; Output files are deleted after 24 hours.
</p>
			Example Parameters: {}
		*/
    self.faceDetectionAndTracking = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Face Detection and Tracking",
            "path": "video/v1.0/trackface",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e39",
            "id": "565d6517778daf0978c45e39",
            "description": "<p>Detects and tracks human faces in a video and returns face locations. <br/>&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. <br/>&bull; For each video, the maximum number of faces returned is 64. <br/>&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; Output files are deleted after 24 hours.\n</p>",
            "serviceName": "Video",
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
			Name: Video: Get Operation Result
			Description: Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status. Below is an example:

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
<table class="element table">
            <thead>
            <tr><th>Video Operation</th><th>How to Retrieve Result</th></tr>
            </thead>
            <tbody>
            <tr><td>Stabilization</td><td>The result (as a video file) can be retrieved from the URL specified in <b>resourceLocation</b> field.</td></tr>
            <tr><td>Face Detection and Tracking<br/>Motion Detection 
</td><td>The result (as a JSON in string) is available in <b>processingResult</b> field.</td></tr>
             </tbody>
</table>
			Example Parameters: {
			"oid": null
		}
		*/
    self.getOperationResult = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Operation Result",
            "path": "video/v1.0/operations/{oid}",
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e36",
            "id": "565d6517778daf0978c45e36",
            "description": "Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status. Below is an example:\n\nExample JSON:\n<table class=\"element table\">\n						<thead>\n						</thead>\n						<tbody>\n						<tr>\n{<br/>\n\t\"status\": \"Running\",<br/>\n\t\"createdDateTime\":	\"2015-09-30T01:28:23.4493273Z\",<br/>\n\t\"lastActionDateTime\": \"2015-09-30T01:32:23.0895791Z\",<br/>\n}<br/>\n						 </tr>\n						</tbody>\n</table>\n<br/>\n<p>\nPossible values of \"status\" field are:<br/>\n<b>Not Started</b> - video content is received/uploaded but the process has not started.<br/>\n<b>Uploading</b> - the video content is being uploaded by the URL client side provides.<br/>\n<b>Running</b> - the process is running.<br/>\n<b>Failed</b> - the process is failed. Detailed information will be provided in \"message\" field.<br/>\n<b>Succeeded</b> - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:<br/>\n</p>\n<table class=\"element table\">\n						<thead>\n						<tr><th>Video Operation</th><th>How to Retrieve Result</th></tr>\n						</thead>\n						<tbody>\n						<tr><td>Stabilization</td><td>The result (as a video file) can be retrieved from the URL specified in <b>resourceLocation</b> field.</td></tr>\n						<tr><td>Face Detection and Tracking<br/>Motion Detection \n</td><td>The result (as a JSON in string) is available in <b>processingResult</b> field.</td></tr>\n						 </tbody>\n</table>",
            "serviceName": "Video",
            "headers": {
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "oid",
                "description": "OperationId",
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
            "host": "api.projectoxford.ai",
            "method": "GET",
            "scheme": "https",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d81f4ca73072048922d95",
            "id": "565d81f4ca73072048922d95",
            "description": "This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from <b>resourceLocation</b> field of JSON returned from Get Operation Result interface.",
            "serviceName": "Video",
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
    /**
			Name: Video: Motion Detection
			Description: <p>Detects motion in a video, and returns the frame and duration of the motion that was captured. <br/>&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull; User can input detection zones to set up as areas to detect motion. <br/>&bull; User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.<br/>&bull; Motion Detection is optimized for stationary background videos. <br/>&bull; User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.<br/>&bull; User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.<br/>&bull; User can specify which frames to be detected by passing in a parameter (frameSamplingValue).<br/>&bull; Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects. <br/>&bull; Output files are deleted after 24 hours.
</p>
			Example Parameters: {
			"sensitivityLevel": null,
			"frameSamplingValue": null,
			"detectionZones": null,
			"detectLightChange": null,
			"mergeTimeThreshold": null
		}
		*/
    self.motionDetection = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Motion Detection",
            "path": "video/v1.0/detectmotion",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e3a",
            "id": "565d6517778daf0978c45e3a",
            "description": "<p>Detects motion in a video, and returns the frame and duration of the motion that was captured. <br/>&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull; User can input detection zones to set up as areas to detect motion. <br/>&bull; User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.<br/>&bull; Motion Detection is optimized for stationary background videos. <br/>&bull; User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.<br/>&bull; User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.<br/>&bull; User can specify which frames to be detected by passing in a parameter (frameSamplingValue).<br/>&bull; Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects. <br/>&bull; Output files are deleted after 24 hours.\n</p>",
            "serviceName": "Video",
            "headers": {
                "Content-Type": "application/json",
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "sensitivityLevel",
                "description": "Specify the detection sensitivity level: “low”, “medium”, “high”. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported. The default value is “medium”.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "frameSamplingValue",
                "description": "User may skip frames by setting this parameter. It can be used as a tradeoff between performance and cost, skipping frames may reduce processing time but result in worse detection performance. The default value is 1, meaning detecting motion for every frame. If set to 2, then the algorithm will detect one frame for every two frames. The upper bound is 20.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "detectionZones",
                "description": "User can setup detection zones by passing in a string like “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5 |0.3,0.3;0.55,0.3;0.8,0.3; 0.8,0.55;0.8,0.8;0.55,0.8;0.3,0.8;0.3,0.55;| 0,0;1,0;1,1;0,1”, each detection zone is separated by a “|” and each point is defined by a “x,y” pair and separated by a “;”. At most 8 detection zones are supported and each detection zone should be defined by at least 3 points and no more than 16 points. The default setting is “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5”, i.e. the whole frame defined by an 8-point polygon.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "detectLightChange",
                "description": "Specify whether light change events should be detected. The default value is false.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "mergeTimeThreshold",
                "description": "Specify the threshold on whether successive motions should be merged together, if the interval between successive motions is <= mergeTimeThreshold, they will be merged. The default value is 0.0 and upper bound is 10.0.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "number"
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
	Name: Video: Stabilization
	Description: <p>Smooths and stabilizes a video.  <br/>&bull;  The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull;  Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). <br/>&bull;  Both width and height of the input video must be even numbers. <br/>&bull;  The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). <br/>&bull; Output files are deleted after 24 hours.</p>
	Example Parameters: {}
*/
    self.stabilization = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Stabilization",
            "path": "video/v1.0/stabilize",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "565d6517778daf0978c45e35",
            "id": "565d6517778daf0978c45e35",
            "description": "<p>Smooths and stabilizes a video.	<br/>&bull;	The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull;	Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). <br/>&bull;	Both width and height of the input video must be even numbers. <br/>&bull;	The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). <br/>&bull; Output files are deleted after 24 hours.</p>",
            "serviceName": "Video",
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
			Name: Video: Thumbnail
			Description: Generates a motion thumbnail from a video. The Video Thumbnail API provides an automatic summary for videos to let people see a preview or snapshot quickly. Selection of scenes from a video create a preview in form of a short video. <br/>
&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>
&bull; The number of scenes displayed in the thumbnail is either chosen by the user or defaults to the optimal duration supported by the Video API’s algorithm.<br/>
&bull; A scene is a collection of indexed frames. Scenes are mapped according to sequence in video. <br/>
&bull; Fade in/fade out effects are included in the thumbnail by default, but can be turned off by the user. <br/>
&bull; Audio is included by default, but can be turned off by the user. Pauses in audio are detected to divide video into coherent scenes and avoid breaking sentences of speech.<br/>
&bull; Output files are deleted after 24 hours.<br/>
<br/>
* Optimal Duration of Video Thumbnail Supported by Video API shown in table below.

<table class="element table">
<thead>
</thead>
<tbody>
<tr>
<td>Motion Thumbnail</td>
</tr>
<tr>
<td>Video duration (d)</td>
<td>d < 3min</td>
<td>3min < d < 15min</td>
<td>15min < d < 30min</td>
<td>30min < d</td>
</tr>
<tr>
<td>Thumbnail duration</td>
<td>15sec (2-3 scenes)</td>
<td>30sec (3-5 scenes)</td>
<td>60sec (5-10 scenes)</td>
<td>90sec (10-15 scenes)</td>
</tr>
<tbody>
</table>
			Example Parameters: {
			"maxMotionThumbnailDurationInSecs": null,
			"outputAudio": null,
			"fadeInFadeOut": null
		}
		*/
    self.thumbnail = ({
        parameters,
        body
    }) => {

        const operation = {
            "name": "Thumbnail",
            "path": "video/v1.0/generatethumbnail",
            "host": "api.projectoxford.ai",
            "method": "POST",
            "scheme": "https",
            "serviceId": "565d6516778daf15800928d5",
            "operationId": "56f8acb0778daf23d8ec6738",
            "id": "56f8acb0778daf23d8ec6738",
            "description": "Generates a motion thumbnail from a video. The Video Thumbnail API provides an automatic summary for videos to let people see a preview or snapshot quickly. Selection of scenes from a video create a preview in form of a short video. <br/>\n&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>\n&bull; The number of scenes displayed in the thumbnail is either chosen by the user or defaults to the optimal duration supported by the Video API’s algorithm.<br/>\n&bull; A scene is a collection of indexed frames. Scenes are mapped according to sequence in video. <br/>\n&bull; Fade in/fade out effects are included in the thumbnail by default, but can be turned off by the user. <br/>\n&bull; Audio is included by default, but can be turned off by the user. Pauses in audio are detected to divide video into coherent scenes and avoid breaking sentences of speech.<br/>\n&bull; Output files are deleted after 24 hours.<br/>\n<br/>\n* Optimal Duration of Video Thumbnail Supported by Video API shown in table below.\n\n<table class=\"element table\">\n<thead>\n</thead>\n<tbody>\n<tr>\n<td>Motion Thumbnail</td>\n</tr>\n<tr>\n<td>Video duration (d)</td>\n<td>d < 3min</td>\n<td>3min < d < 15min</td>\n<td>15min < d < 30min</td>\n<td>30min < d</td>\n</tr>\n<tr>\n<td>Thumbnail duration</td>\n<td>15sec (2-3 scenes)</td>\n<td>30sec (3-5 scenes)</td>\n<td>60sec (5-10 scenes)</td>\n<td>90sec (10-15 scenes)</td>\n</tr>\n<tbody>\n</table>",
            "serviceName": "Video",
            "headers": {
                "Content-Type": "application/json",
                "Host": "api.projectoxford.ai"
            },
            "parameters": [{
                "name": "maxMotionThumbnailDurationInSecs",
                "description": "Specifies maximum duration of output video (in seconds). The default value is 0, which indicates the duration will be automatically decided by the algorithm.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "outputAudio",
                "description": "Indicates whether output video should include audio track. The default value is true.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "fadeInFadeOut",
                "description": "Indicates whether output video should have fade in/out effect during scene changes. The default value is true.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "boolean"
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

module.exports = video;