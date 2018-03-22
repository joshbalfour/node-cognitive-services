import { ContentTypeHeaders, CommonConstructorOptions, OcpApimSubscriptionKeyHeaders } from "../index";

export class webLanguageModel {
	constructor(options: CommonConstructorOptions);

	/**
	 * 
	 * Insert spaces into a string of words lacking spaces, like a hashtag or part of a URL. 
	 * Punctuation or exotic characters can prevent a string from being broken, so it’s best to limit input strings to lower-case, alpha-numeric characters.
	 */
	breakIntoWords(options: BreakIntoWordsOptions): Promise<BreakIntoWordsReturnValue>;

	/**
	 * Calculate the conditional probability that a particular word will follow a given sequence of words.
	 */
	calculateConditionalProbability(options: CalculateConditionalProbabilityOptions): Promise<CalculateConditionalProbabilityReturnValue>;

	/**
	 * Calculate the joint probability that a particular sequence of words will appear together.
	 */
	calculateJointProbability(options: CalculateJointProbabilityOptions): Promise<CalculateJointProbabilityReturnValue>;

	/**
	 * Get the list of words (completions) most likely to follow a given sequence of words.
	 */
	generateNextWords(options: GenerateNextWordsOptions): Promise<GenerateNextWordsReturnValue>;

	/**
	 * List models available currently.
	 */
	listAvailableModels(): Promise<ListAvailableModelsReturnValue>;
}

export interface BreakIntoWordsOptions {
	parameters: BreakIntoWordsParameters
}

export interface BreakIntoWordsParameters {

	/**
	 * Which model to use, supported value: title/anchor/query/body
	 */
	model: string,

	/**
	 * The line of text to break into words. If spaces are present, they will be interpreted as hard breaks and maintained, except for leading or trailing spaces, which will be trimmed.
	 */
	text: string,

	/**
	 * The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5.
	 */
	order?: number,

	/**
	 * Max number of candidates would be returned. If not specified, use default value 5.
	 */
	maxNumOfCandidatesReturned?: number
}

export interface BreakIntoWordsReturnValue {
	candidates: {
		words: string,
		probability: string
	}[]
}

export interface CalculateConditionalProbabilityOptions {
	parameters: CalculateConditionalProbabilityParameters,
	headers: ContentTypeHeaders,
	body: CalculateConditionalProbabilityBody
}

export interface CalculateConditionalProbabilityParameters {

	/**
	 * Which model to use, supported value: title/anchor/query/body
	 */
	model: string,

	/**
	 * The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5.
	 */
	order?: number,

	/**
	 * Array of queries
	 */
	queries?: {
		words: string
	}[]
}

export interface CalculateConditionalProbabilityBody {
	queries: {
		words: string,
		word: string
	}[]
}

export interface CalculateConditionalProbabilityReturnValue {
	queries: {
		words: string,
		word: string,
		probability: string
	}[]
}

export interface CalculateJointProbabilityOptions {
	parameters: CalculateJointProbabilityParameters,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: CalculateJointProbabilityBody
}

export interface CalculateJointProbabilityParameters {
	/**
	 * Which model to use, supported value: title/anchor/query/body
	 */
	model: string,

	/**
	 * The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5.
	 */
	order?: number
}

export interface CalculateJointProbabilityBody {
	queries: string[]
}

export interface CalculateJointProbabilityReturnValue {
	results: {
		word: string,
		probability: string
	}[]
}

export interface GenerateNextWordsOptions {
	parameters: GenerateNextWordsParameters
}

export interface GenerateNextWordsParameters {

	/**
	 * Which model to use, supported value: title/anchor/query/body
	 */
	model: string,

	/**
	 * A string containing a sequence of words from which to generate the list of words likely to follow. The words should be separated by spaces.
	 */
	words: string,

	/**
	 * The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5.
	 */
	order?: number,

	/**
	 * Max number of candidates would be returned. If not specified, use default value 5. 
	 */
	maxNumOfCandidatesReturned?: number
}

export interface GenerateNextWordsReturnValue {
	candidates: {
		word: string,
		probability: string
	}[]
}

export interface ListAvailableModelsReturnValue {
	models: {
		corpus: string,
		model: string,
		maxOrder: number,
		supportedOperations: {
			string: string
		}[]
	}[]
}

