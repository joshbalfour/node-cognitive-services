/**
 * The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image. It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences. Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.
 */
export class computerVision {
	constructor(options: computerVisionOptions);

	/**
	 * This operation extracts a rich set of visual features based on the image content. 
	 * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response. 
	 * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
	 */
	analyzeImage(options: AnalyzeImageOptions): Promise<AnalyzeImageReturnValue>;

	/**
	 * This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English. 
	 */
	describeImage(options: DescribeImageOptions): Promise<DescribeImageReturnValue>;

	/**
	 * This interface is used for getting handwritten text operation result. The URL to this interface should be retrieved from “Operation-Location” field returned from Recognize Handwritten Text interface.
	 */
	getHandwrittenTextOperationResult(options: GetHandwrittenTextOperationResultOptions): Promise<GetHandwrittenTextOperationResultReturnValue>;

	/**
	 * This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image
	 * A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong. 
	 * Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError. 
	 */
	getThumbnail(options: GetThumbnailOptions): Promise<GetThumbnailReturnValue>;

	/**
	 * This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer. 
	 * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
	 */
	listDomainSpecificModels(): Promise<ListDomainSpecificModelsReturnValue>;

	/**
	 * Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
	 * Upon success, the OCR results will be returned. 
	 * Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError. 
	 */
	ocr(options: OCROptions): Promise<OCRReturnValue>;

	/**
	 * This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks. 
	 * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
	 * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
	 */
	recognizeDomainSpecificContent(options: RecognizeDomainSpecificContentOptions): Promise<RecognizeDomainSpecificContentReturnValue>;

	/**
	 * Use this interface to get the result of a Recognize Handwritten Text operation. When you use the Recognize Handwritten Text interface, the response contains a field called “Operation-Location”. The “Operation-Location” field contains the URL that you must use for your Get Handwritten Text Operation Result operation. 
	 * For the result of a Recognize Handwritten Text operation to be available, it requires an amount of time that depends on the length of the text. So, you may need to wait before using this Get Handwritten Text Operation Result interface. The time you need to wait may be up to a number of seconds. 
	 * Note: this technology is currently in preview and is only available for English text.
	 */
	recognizeHandwrittenText(options: RecognizeHandwrittenTextOptions): Promise<RecognizeHandwrittenTextReturnValue>;

	/**
	 * This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English. 
	 * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
	 * A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
	 */
	tagImage(options: TagImageOptions): Promise<TagImageReturnValue>;
}

export interface computerVisionOptions {
	apiKey: string,
	endpoint: string
}

// Analyze Image
export interface AnalyzeImageOptions {
	parameters?: AnalyzeImageParameters,
	headers?: AnalyzeImageHeaders,
	body?: { "url"?: string } | any
}

export interface AnalyzeImageParameters {
	/** 
	 * A string indicating what visual feature types to return. Multiple values should be comma-separated. 
	 */
	visualFeatures?: string,

	/** 
	 * A string indicating which domain-specific details to return. Multiple values should be comma-separated. 
	 */
	details?: string,

	/** 
	 * A string indicating which language to return. The service will return recognition results in specified language. If this parameter is not specified, the default value is "en".
	 */
	language?: string
}

export interface AnalyzeImageHeaders {
	/** 
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface AnalyzeImageReturnValue {
	categories: { name: string, score: number, detail: any }[],
	adult: { isAdultContent: boolean, isRacyContent: boolean, adultScore: number, racyScore: number },
	tags: { name: string, confidence: number }[],
	description: {
		tags: string[],
		captions: { text: string, confidence: number }[]
	}
	requestId: string,
	metadata: { width: number, height: number, format: string },
	faces: { age: number, gender: string, faceRectangle: { left?: number, top?: number, width?: number, height?: number } }[],
	color: {
		dominantColorForeground: string,
		dominantColorBackground: string,
		dominantColors: string[],
		accentColor: string,
		isBWImg: boolean
	},
	imageType: {
		clipArtType: number,
		lineDrawingType: number
	}
}

// Describe Image

export interface DescribeImageOptions {
	parameters?: DescribeImageParameters,
	headers?: DescribeImageHeaders,
	body: { "url"?: string } | any
}

export interface DescribeImageParameters {
	/**
	 * Maximum number of candidate descriptions to be returned. The default is 1.
	 */
	maxCandidates?: string
}

export interface DescribeImageHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface DescribeImageReturnValue {
	"description"?: {
		"tags"?: string[],
		"captions"?: { "text": string, "confidence": number }[]
	},
	"requestId"?: string,
	"metadata"?: { "width": number, "height": number, "format": number }
}

// getHandwrittenTextOperationResult

export interface GetHandwrittenTextOperationResultOptions {
	parameters?: GetHandwrittenTextOperationResultParameters,
	headers?: GetHandwrittenTextOperationResultHeaders
}

export interface GetHandwrittenTextOperationResultParameters {
	/**
	 * Id of the text operation returned in the response of the Recognize Handwritten Text interface.
	 */
	operationId?: string
}

export interface GetHandwrittenTextOperationResultHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface GetHandwrittenTextOperationResultReturnValue {
	status: string,
	recognitionResult: {
		lines: {
			boundingBox: number[],
			text: string,
			words: { boundingBox: number[], text: string }[]
		}[]
	}

}

// getThumbnail
export interface GetThumbnailOptions {
	parameters?: GetThumbnailParameters,
	headers?: GetThumbnailHeaders,
	body?: { "url"?: string } | any
}

export interface GetThumbnailParameters {
	/**
	 * Width of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
	 */
	width: number,

	/**
	 * Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
	 */
	height: number,

	/**
	 * Boolean flag for enabling smart cropping.
	 */
	smartCropping?: boolean
}

export interface GetThumbnailHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface GetThumbnailReturnValue {
	"models": { "name": string, "categories": string[] }[]
}

// List Domain Specific Models
export interface ListDomainSpecificModelsOptions {
	headers?: ListDomainSpecificModelsHeaders,
}

export interface ListDomainSpecificModelsHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface ListDomainSpecificModelsReturnValue {
	"models": { "name": string, "categories": string[] }[]
}

// OCR
export interface OCROptions {
	parameters?: OCRParameters,
	headers?: OCRHeaders,
	body?: { "url"?: string } | any
}

export interface OCRParameters {
	/**
	 * The BCP-47 language code of the text to be detected in the image.The default value is "unk", then the service will auto detect the language of the text in the image.
	 */
	language?: string,

	/**
	 * Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).
	 */
	detectOrientation?: boolean
}

export interface OCRHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface OCRReturnValue {
	language?: string,
	textAngle?: number,
	orientation?: string,
	regions?:
	{
		boundingBox: string,
		lines:
		{
			boundingBox: string,
			words: { boundingBox: string, text: string }[]
		}[]
	}[]
}

// Recognize Domain Specific Content
export interface RecognizeDomainSpecificContentOptions {
	parameters?: RecognizeDomainSpecificContentParameters,
	headers?: RecognizeDomainSpecificContentHeaders,
	body?: { "url"?: string } | any
}

export interface RecognizeDomainSpecificContentParameters {
	/**
	 * The domain-specific content to recognize.
	 */
	model: string
}

export interface RecognizeDomainSpecificContentHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface RecognizeDomainSpecificContentReturnValue {
	requestId: string,
	metadata?: { width: number, height: number, format: string },
	result: {
		"celebrities": {
			name?: string,
			faceRectangle?: { left: number, top: number, width: number, height: number },
			confidence?: number
		}[]
	}
}

// Recognize Domain Specific Content
export interface RecognizeHandwrittenTextOptions {
	parameters?: RecognizeHandwrittenTextParameters,
	headers?: RecognizeHandwrittenTextHeaders,
	body?: { "url"?: string } | any
}

export interface RecognizeHandwrittenTextParameters {
	/**
	 * If this parameter is set to “true” or is not specified, handwriting recognition is performed. If “false” is specified, printed text recognition is performed by calling OCR operation.
	 */
	handwriting: boolean
}

export interface RecognizeHandwrittenTextHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface RecognizeHandwrittenTextReturnValue {
	/**
	 * Client side should use this URL to query operation status/result. 
	 * Example: https://cognitiveservice/vision/v1.0/textOperations/49a36324-fc4b-4387-aa06-090cfbf0064f .
	 */
	"Operation-Location"?: string
}


// Tag Image

export interface TagImageOptions {
	headers?: TagImageHeaders,
	body?: { "url"?: string } | any
}

export interface TagImageHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface TagImageReturnValue {
	tags: { name: string, confidence: number }[],
	requestId: string,
	metadata: { width: number, height: number, format: string }
}
