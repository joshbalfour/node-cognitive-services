
/**
 * The Text Analytics API is a suite of text analytics web services built with best-in-class Microsoft machine learning algorithms. 
 * The API can be used to analyze unstructured text for tasks such as sentiment analysis, key phrase extraction and language detection. 
 * No training data is needed to use this API; just bring your text data. 
 * This API uses advanced natural language processing techniques to deliver best in class predictions.
 */
export class textAnalytics {
	constructor(options: TextAnalyticsOptions);

	/**
	 * The API returns the detected language and a numeric score between 0 and 1. 
	 * Scores close to 1 indicate 100% certainty that the identified language is true. 
	 * A total of 120 languages are supported.
	 */
	detectLanguage(options: DetectLanguageOptions): Promise<DetectLanguageReturnValue>;
	
	/**
	 * The API returns a list of strings denoting the key talking points in the input text. 
	 * We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit.
	 */
	keyPhrases(options: KeyPhrasesOptions): Promise<KeyPhrasesReturnValue>;
	
	/**
	 *  The API returns a numeric score between 0 and 1. 
	 * Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. 
	 * Sentiment score is generated using classification techniques. The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings.
	 */
	sentiment(options: SentimentOptions): Promise<SentimentReturnValue>;
}

export interface TextAnalyticsOptions {
	akiKey: string,
	endpoint: string
}

export interface DetectLanguageOptions {
	headers: DetectLanguageHeaders,
	body: DetectLanguageBody
}

export interface DetectLanguageHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string
}

export interface DetectLanguageBody {
	documents: {
		  id: string,
		  text: string
		}[]
}

export interface DetectLanguageReturnValue {
	documents: {
		  id: string,
		  detectedLanguages: {
			  name: string,
			  iso6391Name: string,
			  score: number
			}[]
		}[]
}

export interface KeyPhrasesOptions {
	headers: KeyPhrasesHeaders,
	body: KeyPhrasesBody
}

export interface KeyPhrasesHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string
}

export interface KeyPhrasesBody {
	documents: {
		language: string,
		id: string,
		text: string
	  }[]
}

export interface KeyPhrasesReturnValue {
	documents: {
		keyPhrases: string[],
		id: string
	}[]
}

export interface SentimentOptions {
	headers: SentimentHeaders,
	body: SentimentBody
}

export interface SentimentHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string
}

export interface SentimentBody {
	documents: {
		language: string,
		id: string,
		text: string
	}[]
}

export interface SentimentReturnValue {
	documents: {
		score: number,
		  id: string
		}[]
}