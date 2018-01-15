import { ContentTypeHeader, ContentTypeHeaders } from "..";

export class computerVision {
	constructor(options: computerVisionOptions);
	analyzeImage(options: AnalyzeImageOptions): Promise<AnalyzeImageReturnValue>;
	describeImage(options: DescribeImageOptions): Promise<DescribeImageReturnValue>;
	getHandwrittenTextOperationResult(options: GetHandwrittenTextOperationResultOptions): Promise<GetHandwrittenTextOperationResultReturnValue>;
	getThumbnail(options: GetThumbnailOptions): Promise<GetThumbnailReturnValue>;
	listDomainSpecificModels(): Promise<void>;
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
	headers?: ContentTypeHeaders,
	body?: { "url"?: string } | any
}

export interface AnalyzeImageParameters {
	/** 
	 * A string indicating what visual feature types to return. Multiple values should be comma-separated.
	 * Valid visual feature types include: 
	 * Categories - categorizes image content according to a taxonomy defined in documentation. 
	 * Tags - tags the image with a detailed list of words related to the image content. 
	 * Description - describes the image content with a complete English sentence. 
	 * Faces - detects if faces are present. If present, generate coordinates, gender and age.
	 * ImageType - detects if image is clipart or a line drawing.
	 * Color - determines the accent color, dominant color, and whether an image is black&white.
	 * Adult - detects if the image is pornographic in nature (depicts nudity or a sex act). Sexually suggestive content is also detected.
	 */
	visualFeatures?: string,

	/** 
	 * A string indicating which domain-specific details to return. Multiple values should be comma-separated. 
	 * Valid visual feature types include: 
	 * Celebrities - identifies celebrities if detected in the image.
	 * Landmarks - identifies landmarks if detected in the image
	 */
	details?: string,

	/** 
	 * A string indicating which language to return. The service will return recognition results in specified language. If this parameter is not specified, the default value is "en".
	 */
	language?: string
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
		clipArtType: ClipartType,
		lineDrawingType: LineDrawingType
	}
}

export enum ClipartType {
	"Non-clipart" = 0,
	"ambiguous" = 1,
	"normal-clipart" = 2,
	"good-clipart" = 3
}

export enum LineDrawingType {
	"Non-LineDrawing" = 0,
	"LineDrawing" = 1
}

// Describe Image

export interface DescribeImageOptions {
	parameters?: DescribeImageParameters,
	headers?: ContentTypeHeaders,
	body: { "url"?: string } | any
}

export interface DescribeImageParameters {
	/**
	 * Maximum number of candidate descriptions to be returned. The default is 1.
	 */
	maxCandidates?: string
}
export interface DescribeImageReturnValue {
	"description"?: {
		"tags"?: string[],
		"captions"?: { "text": string, "confidence": number }[]
	},
	"requestId"?: string,
	"metadata"?: { "width": number, "height": number, "format": number }
}

//# region getHandwrittenTextOperationResult

export interface GetHandwrittenTextOperationResultOptions {
	parameters?: GetHandwrittenTextOperationResultParameters
}

export interface GetHandwrittenTextOperationResultParameters {
	/**
	 * Id of the text operation returned in the response of the Recognize Handwritten Text interface.
	 */
	operationId?: string
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
//# endregion

//# region getThumbnail
export interface GetThumbnailOptions {
	parameters?: GetThumbnailParameters,
	headers?: ContentTypeHeaders,
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

export interface GetThumbnailReturnValue {
	"models": { "name": string, "categories": string[] }[]
}
//# endregion

//# region List Domain Specific Models
export interface ListDomainSpecificModelsReturnValue {
	"models": { "name": string, "categories": string[] }[]
}
//# endregion

//# region OCR
export interface OCROptions {
	parameters?: OCRParameters,
	headers?: ContentTypeHeaders,
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
//# endregion

//# region Recognize Domain Specific Content
export interface RecognizeDomainSpecificContentOptions {
	parameters?: RecognizeDomainSpecificContentParameters,
	headers?: ContentTypeHeaders,
	body?: { "url"?: string } | any
}

export interface RecognizeDomainSpecificContentParameters {
	/**
	 * The domain-specific content to recognize.
	 */
	model: string
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
//# endregion

//# region Recognize Domain Specific Content
export interface RecognizeHandwrittenTextOptions {
	parameters?: RecognizeHandwrittenTextParameters,
	headers?: ContentTypeHeaders,
	body?: { "url"?: string } | any
}

export interface RecognizeHandwrittenTextParameters {
	/**
	 * If this parameter is set to “true” or is not specified, handwriting recognition is performed. If “false” is specified, printed text recognition is performed by calling OCR operation.
	 */
	handwriting: boolean
}

export interface RecognizeHandwrittenTextReturnValue {
	/**
	 * Client side should use this URL to query operation status/result. 
	 * Example: https://cognitiveservice/vision/v1.0/textOperations/49a36324-fc4b-4387-aa06-090cfbf0064f .
	 */
	"Operation-Location"?: string
}
//# endregion


//# region Tag Image

export interface TagImageOptions {
	headers?: ContentTypeHeaders,
	body?: { "url"?: string } | any
}

export interface TagImageReturnValue {
	tags: { name: string, confidence: number }[],
	requestId: string,
	metadata: { width: number, height: number, format: string }
}
//# endregion