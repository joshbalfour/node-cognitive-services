/**
 * The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image. It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences. Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.
 */
export class computerVision {
	constructor(options: computerVisionOptions);
	analyzeImage(options: AnalyzeImageOptions): Promise<AnalyzeImageReturnValue>;
	describeImage(options: DescribeImageOptions): Promise<DescribeImageReturnValue>;
	getHandwrittenTextOperationResult(options: GetHandwrittenTextOperationResultOptions): Promise<GetHandwrittenTextOperationResultReturnValue>;
	getThumbnail(options: GetThumbnailOptions): Promise<GetThumbnailReturnValue>;
	listDomainSpecificModels(): Promise<ListDomainSpecificModelsReturnValue>;
	ocr(options: OCROptions): Promise<OCRReturnValue>;
	recognizeDomainSpecificContent(options: RecognizeDomainSpecificContentOptions): Promise<RecognizeDomainSpecificContentReturnValue>;
	recognizeHandwrittenText(options: RecognizeHandwrittenTextOptions): Promise<RecognizeHandwrittenTextReturnValue>;
	tagImage(options: TagImageOptions): Promise<TagImageReturnValue>;
}

export interface computerVisionOptions {
	apiKey: string,
	endpoint: string
}

// Analyze Image
export interface AnalyzeImageOptions {
	parameters: AnalyzeImageParameters,
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
