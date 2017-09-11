const {
    makeRequest,
    verify
} = require('../lib/api');

const computerVision = ({
    API_KEY,
    endpoint
}) => {

    let self = this;

    /**
			Name: Computer Vision: Analyze Image
			Description: This operation extracts a rich set of visual features based on the image content. 
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response. 
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST
			Example Parameters: {
			"visualFeatures": "Categories",
			"details": null
		}
		*/
    self.analyzeImage = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Analyze Image",
            "path": "vision/v1.0/analyze",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56f91f2d778daf23d8ec6739",
            "operationId": "56f91f2e778daf14a499e1fa",
            "id": "56f91f2e778daf14a499e1fa",
            "description": "This operation extracts a rich set of visual features based on the image content. \n				<br>\n				<br>\n				Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.	Within your request, there is an optional parameter to allow you to choose which features to return.	By default, image categories are returned in the response. \n				<br>\n				<br>\n				A successful response will be returned in JSON.	If the request failed, the response will contain an error code and a message to help understand what went wrong. \n\n<h4>Http Method</h4>\nPOST",
            "serviceName": "Computer Vision",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "visualFeatures",
                "description": "A string indicating what visual feature types to return. Multiple values should be comma-separated. \n<br/>Valid visual feature types include:\n<br/>\t\n<ul>\n<li><b>Categories</b> - categorizes image content according to a taxonomy defined in documentation. </li>\n<li><b>Tags</b> - tags the image with a detailed list of words related to the image content. </li>\n<li><b>Description</b> - describes the image content with a complete English sentence. </li>\n<li><b>Faces</b> - detects if faces are present. If present, generate coordinates, gender and age.</li> \n<li><b >ImageType</b> - detects if image is clipart or a line drawing.</li>\n<li><b> Color</b> - determines the accent color, dominant color, and whether an image is black&white.</li>\n<li><b>Adult</b> - detects if the image is pornographic in nature (depicts nudity or a sex act).	Sexually suggestive content is also detected.</li>\n</ul>",
                "value": "Categories",
                "options": [
                    "ImageType",
                    "Faces",
                    "Adult",
                    "Categories",
                    "Color",
                    "Tags",
                    "Description"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "details",
                "description": "A string indicating which domain-specific details to return. Multiple values should be comma-separated. \n<br/>Valid visual feature types include:\n<br/>\t\n<ul>\n<li><b >Celebrities</b> - identifies celebrities if detected in the image.</li>\n</ul>\n",
                "value": null,
                "options": [
                    "Celebrities",
                    "Landmarks"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            },{
                "name": "language",
                "description": "A string indicating which language to return. The service will return recognition results in specified language. If this parameter is not specified, the default value is \"en\".",
                "value": "en",
                "options": [
                    "en",
                    "es"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Computer Vision: Describe Image
			Description: This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English.
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST
			Example Parameters: {
			"maxCandidates": "1"
		}
		*/
    self.describeImage = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Describe Image",
            "path": "vision/v1.0/describe",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56f91f2d778daf23d8ec6739",
            "operationId": "56f91f2e778daf14a499e1fe",
            "id": "56f91f2e778daf14a499e1fe",
            "description": "This operation generates a description of an image in human readable language with complete sentences.	The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.	Descriptions are ordered by their confidence score. All descriptions are in English.\n				<br>\n				<br>\n				Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.	\n				<br>\n				<br>\n				A successful response will be returned in JSON.	If the request failed, the response will contain an error code and a message to help understand what went wrong. \n\n<h4>Http Method</h4>\nPOST",
            "serviceName": "Computer Vision",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "maxCandidates",
                "description": "Maximum number of candidate descriptions to be returned.	The default is 1.",
                "value": "1",
                "options": [
                    "1"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Computer Vision: Get Thumbnail
			Description: This operation generates a thumbnail image with the user-specified width and height.  By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI.  Smart cropping helps when you specify an aspect ratio that differs from that of the input image
<p/>
A successful response contains the thumbnail image binary.  If the request failed, the response contains an error code and a message to help determine what went wrong.

<p/>
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

<h4>Http Method</h4>
POST

			Example Parameters: {
			"width": null,
			"height": null,
			"smartCropping": "true"
		}
		*/
    self.getThumbnail = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Get Thumbnail",
            "path": "vision/v1.0/generateThumbnail",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56f91f2d778daf23d8ec6739",
            "operationId": "56f91f2e778daf14a499e1fb",
            "id": "56f91f2e778daf14a499e1fb",
            "description": "This operation generates a thumbnail image with the user-specified width and height.	By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI.	Smart cropping helps when you specify an aspect ratio that differs from that of the input image\n<p/>\nA successful response contains the thumbnail image binary.	If the request failed, the response contains an error code and a message to help determine what went wrong.\n\n<p/>\nUpon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.\n\n<h4>Http Method</h4>\nPOST\n",
            "serviceName": "Computer Vision",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "width",
                "description": "Width of the thumbnail.	It must be between 1 and 1024. Recommended minimum of 50.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "height",
                "description": "Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 2,
                "typeName": "number"
            }, {
                "name": "smartCropping",
                "description": "Boolean flag for enabling smart cropping.",
                "value": "true",
                "options": [
                    "true",
                    "false"
                ],
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
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Computer Vision: List Domain Specific Models
			Description: This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer.
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
GET
			Example Parameters: {}
		*/
    self.listDomainSpecificModels = ({
        parameters,
        headers,
    }) => {

        const operation = {
            "name": "List Domain Specific Models",
            "path": "vision/v1.0/models",
            "method": "GET",
            "scheme": "https",
            "serviceId": "56f91f2d778daf23d8ec6739",
            "operationId": "56f91f2e778daf14a499e1fd",
            "id": "56f91f2e778daf14a499e1fd",
            "description": "This operation returns the list of domain-specific models that are supported by the Computer Vision API.	Currently, the API only supports one domain-specific model: a celebrity recognizer.\n				<br>\n				<br>\n				A successful response will be returned in JSON.	If the request failed, the response will contain an error code and a message to help understand what went wrong. \n\n<h4>Http Method</h4>\nGET",
            "serviceName": "Computer Vision",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        const body = null;

        return verify(operation, parameters, headers, endpoint)
            .then(makeRequest({
                operation,
                parameters,
                body,
                API_KEY,
                endpoint,
                headers
            }));

    };
    /**
			Name: Computer Vision: OCR
			Description: Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.   

<p/>
Upon success, the OCR results will be returned. 
<p/>
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.

<h4>Http Method</h4>
POST
			Example Parameters: {
			"language": "unk",
            "detectOrientation ": "true"
		}
		*/
    self.ocr = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "OCR",
            "path": "vision/v1.0/ocr",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56f91f2d778daf23d8ec6739",
            "operationId": "56f91f2e778daf14a499e1fc",
            "id": "56f91f2e778daf14a499e1fc",
            "description": "Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.	 \n\n<p/>\nUpon success, the OCR results will be returned. \n<p/>\nUpon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,	NotSupportedLanguage, or InternalServerError.\n\n<h4>Http Method</h4>\nPOST",
            "serviceName": "Computer Vision",
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "language",
                "description": "The BCP-47 language code of the text to be detected in the image.The default value is &quot;unk&quot;, then the service will auto detect the language of the text in the image.<br />\n		<br />\n		Supported languages:\n		<ul style=\"margin-left:.375in;direction:ltr;unicode-bidi:embed;\n margin-top:0in;margin-bottom:0in\" type=\"disc\">\n				<li>unk (AutoDetect)</li>\n				<li>zh-Hans (ChineseSimplified)</li>\n				<li>zh-Hant (ChineseTraditional)</li>\n				<li>cs (Czech)</li>\n				<li>da (Danish)</li>\n				<li>nl (Dutch)</li>\n				<li>en (English)</li>\n				<li>fi (Finnish)</li>\n				<li>fr (French)</li>\n				<li>de (German)</li>\n				<li>el (Greek)</li>\n				<li>hu (Hungarian)</li>\n				<li>it (Italian)</li>\n				<li>Ja (Japanese)</li>\n				<li>ko (Korean)</li>\n				<li>nb (Norwegian)</li>\n				<li>pl (Polish)</li>\n				<li>pt (Portuguese,</li>\n				<li>ru (Russian)</li>\n				<li>es (Spanish)</li>\n				<li>sv (Swedish)</li>\n				<li>tr (Turkish)</li>\n		</ul>",
                "value": "unk",
                "options": [
                    "unk",
                    "zh-Hans",
                    " zh-Hant",
                    "cs",
                    "da",
                    "nl",
                    "en",
                    "fi",
                    "fr",
                    "de",
                    "el",
                    "hu",
                    "it",
                    "ja",
                    "ko",
                    "nb",
                    "pl",
                    "pt",
                    "ru",
                    "es",
                    "sv",
                    "tr"
                ],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "detectOrientation",
                "description": "Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down). ",
                "value": "true",
                "options": [
                    "true",
                    "false"
                ],
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
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Computer Vision: Recognize Domain Specific Content
			Description: This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities.
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST
			Example Parameters: {
			"model": null
		}
		*/
    self.recognizeDomainSpecificContent = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Recognize Domain Specific Content",
            "path": "vision/v1.0/models/{model}/analyze",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56f91f2d778daf23d8ec6739",
            "operationId": "56f91f2e778daf14a499e200",
            "id": "56f91f2e778daf14a499e200",
            "description": "This operation recognizes content within an image by applying a domain-specific model.	The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.	Currently, the API only provides a single domain-specific model: celebrities.\n				<br>\n				<br>\n				Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.	\n				<br>\n				<br>\n				A successful response will be returned in JSON.	If the request failed, the response will contain an error code and a message to help understand what went wrong. \n\n<h4>Http Method</h4>\nPOST",
            "serviceName": "Computer Vision",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "model",
                "description": "The domain-specific content to recognize.",
                "value": null,
                "options": [],
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
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Computer Vision: Tag Image
			Description: This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English.
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST
			Example Parameters: {}
		*/
    self.tagImage = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Tag Image",
            "path": "vision/v1.0/tag",
            "method": "POST",
            "scheme": "https",
            "serviceId": "56f91f2d778daf23d8ec6739",
            "operationId": "56f91f2e778daf14a499e1ff",
            "id": "56f91f2e778daf14a499e1ff",
            "description": "This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English.\n				<br>\n				<br>\n				Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.	\n				<br>\n				<br>\n				A successful response will be returned in JSON.	If the request failed, the response will contain an error code and a message to help understand what went wrong. \n\n<h4>Http Method</h4>\nPOST",
            "serviceName": "Computer Vision",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                    "multipart/form-data",
                ],
                "required": false,
                "typeName": "string"
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Computer Vision: Get Handwritten Text Operation Result
			Description: This interface is used for getting handwritten text operation result. The URL to this interface should be retrieved from “Operation-Location” field returned from Recognize Handwritten Text interface.
        <br>
        <br>
        Returns the operation status. Possible values of "status" field are: Not Started, Running, Failed, Succeeded. If the status is "Succeeded", the response JSON will include the text recognition result. The result is organized in the hierarchy of Line/Word/Text. Result fields include lines, words, bounding box and text.

<h4>Http Method</h4>
GET
		*/
        self.getHandwrittenTextOperationResult = ({
            parameters,
            headers,
            body
        }) => {
    
            const operation = {
                "name": "Get Handwritten Text Operation Result",
                "path": "vision/v1.0/textOperations/{operationId}",
                "method": "GET",
                "scheme": "https",
                "serviceId": "56f91f2d778daf23d8ec6739",
                "operationId": "587f2cf1154055056008f201",
                "id": "587f2cf1154055056008f201",
                "description": "This interface is used for getting handwritten text operation result. The URL to this interface should be retrieved from “Operation-Location” field returned from Recognize Handwritten Text interface.",
                "serviceName": "Computer Vision",
                "headers": [],
                "endpoints": [
                    "westus.api.cognitive.microsoft.com",
                    "eastus2.api.cognitive.microsoft.com",
                    "westcentralus.api.cognitive.microsoft.com",
                    "westeurope.api.cognitive.microsoft.com",
                    "southeastasia.api.cognitive.microsoft.com"
                ],
                "parameters": [{
                    "name": "operationId",
                    "description": "Id of the text operation returned in the response of the Recognize Handwritten Text interface.",
                    "value": null,
                    "options": [],
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
                        API_KEY,
                        endpoint,
                        headers
                    })}
                );
    
        };
    
         /**
			Name: Computer Vision: Get Handwritten Text Operation Result
			Description: This interface is used for getting handwritten text operation result. The URL to this interface should be retrieved from “Operation-Location” field returned from Recognize Handwritten Text interface.
        <br>
        <br>
        Returns the operation status. Possible values of "status" field are: Not Started, Running, Failed, Succeeded. If the status is "Succeeded", the response JSON will include the text recognition result. The result is organized in the hierarchy of Line/Word/Text. Result fields include lines, words, bounding box and text.

<h4>Http Method</h4>
GET
		*/
        self.recognizeHandwrittenText = ({
            parameters,
            headers,
            body
        }) => {
    
            const operation = {
                "name": "Recognize Handwritten Text",
                "path": "vision/v1.0/recognizeText",
                "method": "POST",
                "scheme": "https",
                "serviceId": "56f91f2d778daf23d8ec6739",
                "operationId": "587f2c6a154055056008f200",
                "id": "587f2c6a154055056008f200",
                "description": "Use this interface to get the result of a Recognize Handwritten Text operation. When you use the Recognize Handwritten Text interface, the response contains a field called “Operation-Location”. The “Operation-Location” field contains the URL that you must use for your Get Handwritten Text Operation Result operation.  \
                    For the result of a Recognize Handwritten Text operation to be available, it requires an amount of time that depends on the length of the text. So, you may need to wait before using this Get Handwritten Text Operation Result interface. The time you need to wait may be up to a number of seconds. ",
                "serviceName": "Computer Vision",
                "headers": [{
                    "name": "Content-Type",
                    "description": "Media type of the body sent to the API.",
                    "options": [
                        "application/json",
                        "application/octet-stream",
                    ],
                    "required": false,
                    "typeName": "string"
                }],
                "endpoints": [
                    "westus.api.cognitive.microsoft.com",
                    "eastus2.api.cognitive.microsoft.com",
                    "westcentralus.api.cognitive.microsoft.com",
                    "westeurope.api.cognitive.microsoft.com",
                    "southeastasia.api.cognitive.microsoft.com"
                ],
                "parameters": [{
                    "name": "handwriting",
                    "description": "If this parameter is set to “true” or is not specified, handwriting recognition is performed. If “false” is specified, printed text recognition is performed by calling OCR operation.",
                    "value": null,
                    "options": [
                        "false",
                        "true"
                    ],
                    "required": true,
                    "kind": 1,
                    "typeName": "boolean"
                }]
            };
    
            return verify(operation, parameters, headers, endpoint)
                .then(() => {
                    return makeRequest({
                        operation,
                        parameters,
                        body,
                        API_KEY,
                        endpoint,
                        headers
                    })}
                );
    
        };

    return self;
};

module.exports = computerVision;