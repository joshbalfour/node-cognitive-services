import { ContentTypeHeaders } from "../index";

export class emotion {
	constructor(options: EmotionOptions);
	
	/**
	 * 
	 * Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. 
	 * The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. 
		• The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. 
		• If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. 
		• The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. 
		• For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order.
		  If no face is detected, an empty array will be returned. 
		• Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. 
		• The emotions contempt and disgust are experimental.
	 */
	emotionRecognition(options: EmotionRecognitionOptions): Promise<EmotionRecognitionReturnValue>;
	emotionRecognitionInVideo(options: any): any;
	
	/**
	 * 
	 * Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. 
	 * The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. 
		• The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. 
		• If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. 
		• The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. 
		• For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. 
		• Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. 
		• The emotions contempt and disgust are experimental.
	 */
	emotionRecognitionWithFaceRectangles(options: EmotionRecognitionWithFaceRectanglesOptions): Promise<EmotionRecognitionWithFaceRectanglesReturnValue>;
	getRecognitionInVideoOperationResult(options: any): any;
}

export interface EmotionOptions {
	apiKey: string,
	endpoint: string
}

export interface EmotionRecognitionOptions {
	headers: ContentTypeHeaders,
	body: { "url?: string" } | any
}

export interface EmotionRecognitionReturnValue {
	faceRectangle: {
		left: number,
		top: number,
		width: number,
		height: number
	  },
	  scores: {
		anger: string,
		contempt: string,
		disgust: string,
		fear: string,
		happiness: string,
		neutral: string,
		sadness: string,
		surprise: string
	  }
}

export interface EmotionRecognitionWithFaceRectanglesOptions {
	parameters: EmotionRecognitionWithFaceRectanglesParameters,
	headers: ContentTypeHeaders,
	body: {"url?: string"} | any
}

export interface EmotionRecognitionWithFaceRectanglesParameters {
	
	/**
	 * A face rectangle is in the form “left,top,width,height”. 
	 * Delimited multiple face rectangles with a “;”.
	 */
	faceRectangles: string
}

export interface EmotionRecognitionWithFaceRectanglesReturnValue {
	faceRectangle: {
		left: number,
		top: number,
		width: number,
		height: number
	},
	scores: {
		anger: string,
		contempt: string,
		disgust: string,
		fear: string,
		happiness: string,
		neutral: string,
		sadness: string,
		surprise: string
	}
}
