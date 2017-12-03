const commonService = require('../commonService');

/**
 * The cloud-based Computer Vision API provides developers with access to advanced algorithms for processing images and returning information. By uploading an image or specifying an image URL, Microsoft Computer Vision algorithms can analyze visual content in different ways based on inputs and user choices. With the Computer Vision API users can analyze images to:
 * 
- Tag images based on content.
- Categorize images.
- Identify the type and quality of images.
- Detect human faces and return their coordinates.
- Recognize domain-specific content.
- Generate descriptions of the content.
- Use optical character recognition to identify printed text found in images.
- Recognize handwritten text.
- Distinguish color schemes.
- Flag adult content.
- Crop photos to be used as thumbnails.

Requirements
- Supported input methods: Raw image binary in the form of an application/octet stream or image URL.
- Supported image formats: JPEG, PNG, GIF, BMP.
- Image file size: Less than 4 MB.
- Image dimension: Greater than 50 x 50 pixels.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fa|documentation}
 */
class computerVision extends commonService {
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
            "westus.api.cognitive.microsoft.com",
            "westus2.api.cognitive.microsoft.com",
            "eastus.api.cognitive.microsoft.com",
            "eastus2.api.cognitive.microsoft.com",
            "westcentralus.api.cognitive.microsoft.com",
            "southcentralus.api.cognitive.microsoft.com",
            "westeurope.api.cognitive.microsoft.com",
            "northeurope.api.cognitive.microsoft.com",
            "southeastasia.api.cognitive.microsoft.com",
            "eastasia.api.cognitive.microsoft.com",
            "australiaeast.api.cognitive.microsoft.com",
            "brazilsouth.api.cognitive.microsoft.com"
        ]
        this.imageCategories = ["abstract_", "abstract_net", "abstract_nonphoto", "abstract_rect", "abstract_shape", "abstract_texture", "animal_", "animal_bird", "animal_cat", "animal_dog", "animal_horse", "animal_panda", "building_", "building_arch", "building_brickwall", "building_church", "building_corner", "building_doorwindows", "building_pillar", "building_stair", "building_street", "dark_", "drink_", "drink_can", "dark_fire", "dark_fireworks", "sky_object", "food_", "food_bread", "food_fastfood", "food_grilled", "food_pizza", "indoor_", "indoor_churchwindow", "indoor_court", "indoor_doorwindows", "indoor_marketstore", "indoor_room", "indoor_venue", "dark_light", "others_", "outdoor_", "outdoor_city", "outdoor_field", "outdoor_grass", "outdoor_house", "outdoor_mountain", "outdoor_oceanbeach", "outdoor_playground", "outdoor_railway", "outdoor_road", "outdoor_sportsfield", "outdoor_stonerock", "outdoor_street", "outdoor_water", "outdoor_waterside", "people_", "people_baby", "people_crowd", "people_group", "people_hand", "people_many", "people_portrait", "people_show", "people_tattoo", "people_young", "plant_", "plant_branch", "plant_flower", "plant_leaves", "plant_tree", "object_screen", "object_sculpture", "sky_cloud", "sky_sun", "people_swimming", "outdoor_pool", "text_", "text_mag", "text_map", "text_menu", "text_sign", "trans_bicycle", "trans_bus", "trans_car", "trans_trainstation"];
    }

    /**
     * Extracts a rich set of visual features based on the image content. 

    Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response. 

    A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
    */
    analyzeImage({ parameters, headers, body }) {

        const operation = {
            "path": "vision/v1.0/analyze",
            "method": "POST",
            "operationId": "56f91f2e778daf14a499e1fa",
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
                "name": "visualFeatures",
                "description": "A string indicating what visual feature types to return. Multiple values should be comma-separated.",
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
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "details",
                "description": "A string indicating which domain-specific details to return. Multiple values should be comma-separated.",
                "value": null,
                "options": [
                    "Celebrities",
                    "Landmarks"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "A string indicating which language to return. The service will return recognition results in specified language. If this parameter is not specified, the default value is \"en\".",
                "value": "en",
                "options": [
                    "en",
                    "zh"
                ],
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
        })

    };

    /**
     * Generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English. 

    Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.

    A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
    */
    describeImage({ parameters, headers, body }) {

        const operation = {
            "path": "vision/v1.0/describe",
            "method": "POST",
            "operationId": "56f91f2e778daf14a499e1fe",
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
                "name": "maxCandidates",
                "description": "Maximum number of candidate descriptions to be returned. The default is 1.",
                "value": "1",
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
        })

    };

    /**
     * Generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image

    A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.

    Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
    */
    getThumbnail({ parameters, headers, body }) {

        const operation = {
            "path": "vision/v1.0/generateThumbnail",
            "method": "POST",
            "operationId": "56f91f2e778daf14a499e1fb",
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
                "name": "width",
                "description": "Width of the thumbnail.	It must be between 1 and 1024. Recommended minimum of 50.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "height",
                "description": "Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "smartCropping",
                "description": "Boolean flag for enabling smart cropping.",
                "value": "true",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
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
     * Returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer. 

    A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
    */
    listDomainSpecificModels() {

        const operation = {
            "path": "vision/v1.0/models",
            "method": "GET",
            "operationId": "56f91f2e778daf14a499e1fd",
        };

        return this.makeRequest({
            operation: operation,
        })

    };

    /**
     * Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.

    Upon success, the OCR results will be returned.

    Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.
    */
    ocr({ parameters, headers, body }) {

        const operation = {
            "path": "vision/v1.0/ocr",
            "method": "POST",
            "operationId": "56f91f2e778daf14a499e1fc",
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
                "description": "The BCP-47 language code of the text to be detected in the image.The default value is \"unk\", then the service will auto detect the language of the text in the image.",
                "value": "unk",
                "options": [
                    "unk",
                    "zh-Hans",
                    "zh-Hant",
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
                    "tr",
                    "ar",
                    "ro",
                    "sr-Cyrl",
                    "sr-Latn",
                    "sk"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "detectOrientation",
                "description": "Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down). ",
                "value": "true",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
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
     * Recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities.

    Two input methods are supported:
    - Uploading an image
    - Specifying an image URL. 

    A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

    Example Parameters: {
        "model": null
    }
    */
    recognizeDomainSpecificContent({ parameters, headers, body }) {

        const operation = {
            "path": "vision/v1.0/models/{model}/analyze",
            "method": "POST",
            "operationId": "56f91f2e778daf14a499e200",
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
                "name": "model",
                "description": "The domain-specific content to recognize.",
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
     * Generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English. 
     * 
     Two input methods are supported:
    - Uploading an image
    - Specifying an image URL. 

     * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
    */
    tagImage({ headers, body }) {

        const operation = {
            "path": "vision/v1.0/tag",
            "method": "POST",
            "operationId": "56f91f2e778daf14a499e1ff",
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
        };

        return this.makeRequest({
            operation: operation,
            headers: headers,
            body: body
        })

    };

    /**
     * Getting handwritten text operation result. The URL to this interface should be retrieved from “Operation-Location” field returned from Recognize Handwritten Text interface.
    */
    getHandwrittenTextOperationResult({ parameters }) {

        const operation = {
            "path": "vision/v1.0/textOperations/{operationId}",
            "method": "GET",
            "operationId": "587f2cf1154055056008f201",
            "parameters": [{
                "name": "operationId",
                "description": "Id of the text operation returned in the response of the Recognize Handwritten Text interface.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
        })

    };

    /**
     * get the result of a Recognize Handwritten Text operation. When you use the Recognize Handwritten Text interface, the response contains a field called “Operation-Location”. The “Operation-Location” field contains the URL that you must use for your Get Handwritten Text Operation Result operation. 
 
    For the result of a Recognize Handwritten Text operation to be available, it requires an amount of time that depends on the length of the text. So, you may need to wait before using this Get Handwritten Text Operation Result interface. The time you need to wait may be up to a number of seconds. 
 
    Note: this technology is currently in preview and is only available for English text.

    @returns {Promise.<string>}  ID of operation
   */
    recognizeHandwrittenText({ parameters, headers, body }) {

        const operation = {
            "path": "vision/v1.0/recognizeText",
            "method": "POST",
            "operationId": "587f2c6a154055056008f200",
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
            "parameters": [{
                "name": "handwriting",
                "description": "If this parameter is set to “true” or is not specified, handwriting recognition is performed. If “false” is specified, printed text recognition is performed by calling OCR operation.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "boolean"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        }).then(operationIdUrl => {
            return this.getOperationIdFromUrl(operationIdUrl);
        })

    };

}

module.exports = computerVision;