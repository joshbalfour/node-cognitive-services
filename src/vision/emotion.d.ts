import { ContentTypeHeaders } from "..";

export class emotion {
	constructor(options: EmotionOptions);
	emotionRecognition(options: EmotionRecognitionOptions): Promise<EmotionRecognitionReturnValue>;
	emotionRecognitionWithFaceRectangles(options: EmotionRecognitionWithFaceRectanglesOptions): Promise<EmotionRecognitionWithFaceRectanglesReturnValue>;
}

export interface EmotionOptions {
	apiKey: string,
	endpoint: string
}

//# region emotionRecognition
export interface EmotionRecognitionOptions {
	headers: ContentTypeHeaders,
	body: { url?: string } | any
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
//# endregion

//# region emotionRecognitionWithFaceRectangles
export interface EmotionRecognitionWithFaceRectanglesOptions {
	parameters: EmotionRecognitionWithFaceRectanglesParameters,
	headers?: ContentTypeHeaders,
	body: {url?: string} | any
}

export interface EmotionRecognitionWithFaceRectanglesParameters {
	
	/**
	 * A face rectangle is in the form “left,top,width,height”. 
	 * Delimited multiple face rectangles with a “;”.
	 */
	faceRectangles: string
}

//TODO: add docs to properties if available
export interface EmotionRecognitionWithFaceRectanglesReturnValue {
	/**
	 * Rectangle location of face in the image.
	 */
	faceRectangle: {
		left: number,
		top: number,
		width: number,
		height: number
	},

	/**
	 * Emotion scores for each face in the image. 
	 */
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
//# endregion