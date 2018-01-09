/**
 * Microsoft Translator APIs can be seamlessly integrated into your applications, websites, tools, or other solutions to provide multi-language user experiences. 
 * Leveraging industry standards, it can be used on any hardware platform and with any operating system to perform language translation and other language-related operations such as text language detection or text to speech
 */

export class textTranslator {

	constructor(options: TextTranslatorOptions);
	
	/**
	 * Adds a translation to the translation memory.
	 */
	addTranslation(options: AddTranslationOptions): Promise<void>;

	/**
	 * Adds an array of translations to add translation memory. This is an array version of AddTranslation. 
	 */
	addTranslationArray(options: AddTranslationArrayOptions): Promise<void>;
	
	/**
	 * Breaks a piece of text into sentences and returns an array containing the lengths in each sentence.
	 * The return value: An array of integers representing the lengths of the sentences. The length of the array is the number of sentences, and the values are the length of each sentence.
	 */
	breakSentences(options: BreakSentencesOptions): Promise<void>;
	
	/**
	 * Use the Detect method to identify the language of a selected piece of text.
	 * The return value: A string containing a two-character Language code for the given text.
	 */
	detect(options: DetectOptions): Promise<void>;
	
	/**
	 * Use the DetectArray method to identify the language of an array of string at once. 
	 * Performs independent detection of each individual array element and returns a result for each row of the array.
	 */
	detectArray(options: DetectArrayOptions): Promise<DetectArrayReturnValue>;
	
	/**
	 * Retrieves friendly names for the languages passed in as the parameter languageCodes, and localized using the passed locale language.
	 */
	getLanguageNames(options: GetLanguageNamesOptions): Promise<void>;

	/**
	 * Retrieves the languages available for speech synthesis.
	 * A return value: A string array containing the language codes supported for speech synthesis by the Translator Service.
	 */
	getLanguagesForSpeak(): Promise<void>;
	
	/**
	 * Obtain a list of language codes representing languages that are supported by the Translation Service. 
	 * Translate and TranslateArray can translate between any two of these languages.
	 * A return value: A string array containing the language codes supported by the Translator Services.
	 */
	getLanguagesForTranslate(): Promise <void>;

	/**
	 * Retrieves an array of translations for a given language pair from the store and the MT engine. 
	 * GetTranslations differs from Translate as it returns all available translations.
	 */
	getTranslations(options: GetTranslationsOptions): Promise<GetTranslationsReturnValue>;

	/**
	 * Retrieve multiple translation candidates for multiple source texts.
	 */
	getTranslationsArray(options: GetTranslationsArrayOptions): Promise<GetTranslationsArrayReturnValue>;
	
	/**
	 * Returns a wave or mp3 stream of the passed-in text being spoken in the desired language.
	 */
	speak(options: SpeakOptions): Promise<void>;
	
	/**
	 * Translates a text string from one language to another.
	 */
	translate(options: TranslateOptions): Promise<void>;
	
	/**
	 * Use the TranslateArray method to retrieve translations for multiple source texts.
	 */
	translateArray(options: TranslateArrayOptions): Promise<TranslateArrayReturnValue>;
}

export interface TextTranslatorOptions {
	apiKey: string,
	endpoint: string
}

export interface AddTranslationOptions {
	parameters: AddTranslationParameters
}

export interface AddTranslationParameters {
	
	/**
	 * A string containing the text to translate from. 
	 * The string has a maximum length of 1000 characters.
	 */
	originalText: string,

	/**
	 * A string containing translated text in the target language. 
	 * The string has a maximum length of 2000 characters.
	 */
	translatedText: string,

	/**
	 *  A string representing the language code of the translation text. 
	 *  en = english, de = german etc...
	 */
	from: string,

	/**
	 *  A string representing the language code to translate the text into.
	 */
	to: string,

	/**
	 * An integer representing the quality rating for this string. 
	 * Value between -10 and 10. Defaults to 1.
	 */
	rating?: number,

	/**
	 * The format of the text being translated. The supported formats are "text/plain" and "text/html".
	 * Any HTML needs to be a well-formed, complete element.
	 */
	contentType?: string,

	/**
	 * A string containing the category (domain) of the translation. Defaults to "general".
	 */
	category?: string, 

	/**
	 *  A string used to track the originator of the submission.
	 */
	user: string,

	/**
	 * A string containing the content location of this translation.
	 */
	uri?: string
}

export interface AddTranslationArrayOptions {
	body: AddTranslationArrayBody
}


export interface AddTranslationArrayBody {
	
	/**
	 * A string containing the language code of the source language. 
	 * Must be one of the languages returned by theGetLanguagesForTranslate method.
	 */
	from: string,
	
	/**
	 * A string containing the language code of the target language. 
	 * Must be one of the languages returned by the GetLanguagesForTranslate method.
	 */

	to: string,
	/**
	 * An array of translations to add to translation memory. Each translation must contain: originalText, translatedText and rating. 
	 * The size of each originalText and translatedText is limited to 1000 chars. The total of all the originalText(s) and translatedText(s) must not exceed 10000 characters. 
	 * The maximum number of array elements is 100.
	 */

	Translations:{
		OriginalText: string,
		Rating: number,
		Sequence: number,
		TranslatedText: string
	}[],

	/**
	 * A set of options, including Category, ContentType, Uri, and User. 
	 * Specified elements must be listed in alphabetical order.
	 */
	Options: {
		category?: string,
		contentType: string,
		user: string,
		uri: string
	}
}

export interface BreakSentencesOptions {
	parameters: BreakSentencesParameters
}

export interface BreakSentencesParameters {
	/**
	 * A string representing the text to split into sentences. 
	 * The size of the text must not exceed 10000 characters.
	 */
	text: string,

	/**
	 * A string representing the language code of input text.
	 */
	language: string
}

export interface DetectOptions {
	parameters: DetectParameters
}

export interface DetectParameters {
	
	/**
	 * A string representing the text to split into sentences. 
	 * The size of the text must not exceed 10000 characters.
	 */
	text: string,
}

export interface DetectArrayOptions {
	/**
	 * The size of the text must not exceed 10000 characters.
	 */
	body: DetectArrayBody
}

export interface DetectArrayBody {
	ArrayOfstring: {
		string: string []
	}
}

/**
 *  A string array containing a two-character Language codes for each row of the input array.
 */
export interface DetectArrayReturnValue {
	ArrayOfstring: {
		string: string[]
	}
}

export interface GetLanguageNamesOptions {
	parameters: GetLanguageNamesParameters
	body: GetLanguageNamesBody
}

export interface GetLanguageNamesParameters {
	
	/**
	 * A string representing a combination of an ISO 639 two-letter lowercase culture code associated with 
	 * a language and an ISO 3166 two-letter uppercase subculture code to localize the language names or a ISO 639 lowercase culture code by itself.
	 */
	locale: string,

	/**
	 * A string array representing the ISO 639-1 language codes to retrieve the friendly name for.
	 */
	languageCodes: {
		string:string[]
	}
}

export interface GetLanguageNamesBody {
	ArrayOfstring: {
		string: string[]
	}
}

export interface GetTranslationsOptions {
	parameters: GetTranslationsParameters
}

export interface GetTranslationsParameters {
	
	/**
	 * A string representing the text to translate. 
	 * The size of the text must not exceed 10000 characters.
	 */
	text: string,

	/**
	 * A string representing the language code of the translation text.
	 */
	from: string,

	/**
	 *  A string representing the language code to translate the text into.
	 */
	to: string,

	/**
	 *  An integer representing the maximum number of translations to return.
	 */
	maxTranslations: number,

	/**
	 * object contains the values listed below. They are all optional and default to the most common settings. Specified elements must be listed in alphabetical order.
	 */
	translateOptions: {
		/**
		 * A string containing the category (domain) of the translation. Defaults to "general".
		 */
		category?: string,
		
		/**
		 * The only supported, and the default, option is "text/plain".
		 */
		contentType?: "text/plain",
		
		/**
		 * boolean flag to determine whether more than one alternatives should be returned from the MT engine. 
		 * Valid values are true and false (case-sensitive). Default is false and includes only 1 alternative. 
		 * Setting the flag to true allows for generating artificial alternatives in translation, fully integrated with the collaborative translations framework (CTF). 
		 * The feature allows for returning alternatives for sentences that have no alternatives in CTF, by adding artificial alternatives from the n-best list of the decoder.
		 */
		includeMultipleMTAlternatives: boolean,
		
	
		/**
		 * User state to help correlate request and response. The same contents will be returned in the response.
		 */
		state?: number,

		/**
		 * Filter results by this URI. If no value is set, the default is all.
		 */
		uri?: string,

		/**
		 * Filter results by this user. If no value is set, the default is all.
		 */
		user?: string
	}
}

export interface GetTranslationsReturnValue {
	/**
	 * An array of matches found, stored in TranslationMatch objects. The translations may include slight variants of the original text (fuzzy matching).
	 * The translations will be sorted: 100% matches first, fuzzy matches below. 
	 */
	translations: {
		/**
		 * If the method did not specify a From language, this will be the result of auto language detection. 
		 * Otherwise it will be the given From language.
		 */
		from: string, 
		
		/**
		 * User state to help correlate request and response. Contains the same value as given in the TranslateOptions parameter.
		 */
		state: string, 

		translationMatch: {
			/**
			 * If an error has occurred for a specific input string, the error code is stored. Otherwise the field is empty.
			 */
			error: string, 

			/**
			 * The system matches input sentences against the store, including inexact matches.  MatchDegree indicates how closely the input text matches the original text found in the store. 
			 * The value returned ranges from 0 to 100, where 0 is no similarity and 100 is an exact case sensitive match.
			 */
			matchDegree: number, 
			
			/**
			 * Original text that was matched for this result. Only returned if the matched original text was different than the input text. 
			 * Used to return the source text of a fuzzy match. Not returned for Microsoft Translator results.
			 */
			matchedOriginalText: string, 
			
			/**
			 * Indicates the authority of the person making the quality decision. 
			 * Machine Translation results will have a rating of 5. Anonymously provided translations will generally have a rating of 1 to 4, whilst authoritatively provided translations will generally have a rating of 6 to 10.
			 */
			rating: number,

			/**
			 * The number of times this translation with this rating has been selected. 
			 * The value will be 0 for the automatically translated response. 
			 */
			count: number,

			/**
			 * The translated text.
			 */
			translatedText: string
		}
	}[]
}

export interface GetTranslationsArrayOptions {
	body: GetTranslationsArrayBody
}

export interface GetTranslationsArrayBody {

	/**
	 * A string representing the language code of the translation text.
	 */
	from: string,

	/**
	 * An integer representing the maximum number of translations to return.
	 */
	maxTranslations: number,

	/**
	 * They are all optional and default to the most common settings. Specified elements must be listed in alphabetical order.
	 */
	options?: {
		/**
		 * A string containing the category (domain) of the translation. Defaults to general.
		 */
		category?: string,
			
		/**
		 * lag to determine whether more than one alternatives should be returned from the MT engine. Valid values are true and false (case-sensitive). Default is false and includes only 1 alternative. 
		 * Setting the flag to true allows for generating artificial alternatives in translation, fully integrated with the collaborative translations framework (CTF). 
		 * The feature allows for returning alternatives for sentences that have no alternatives in CTF, by adding artificial alternatives from the n-best list of the decoder.
		 */
		includeMultipleMTAlternatives?: boolean,
			
		/**
		 * User state to help correlate request and response. The same contents will be returned in the response.
		 */
		state?: number,

		/**
		 * Filter results by this URI. If no value is set, the default is all.
		 */
		uri?: string,

		/**
		 * Filter results by this user. If no value is set, the default is all.
		 */
		user?: string
	},
	/**
	 * An array containing the texts for translation. All strings must be of the same language. 
	 * The total of all texts to be translated must not exceed 10000 characters. The maximum number of array elements is 10.
	 */
	texts: {
	  string: string[]
	},

	/**
	 * A string representing the language code to translate the text into.
	 */
	to: string
}

export interface GetTranslationsArrayReturnValue {
	/**
	 * An array of matches found, stored in TranslationMatch objects. The translations may include slight variants of the original text (fuzzy matching).
	 * The translations will be sorted: 100% matches first, fuzzy matches below. 
	 */
	translations: {
		/**
		 * If the method did not specify a From language, this will be the result of auto language detection. 
		 * Otherwise it will be the given From language.
		 */
		from: string, 
		
		/**
		 * User state to help correlate request and response. Contains the same value as given in the TranslateOptions parameter.
		 */
		state: string, 

		translationMatch: {
			/**
			 * If an error has occurred for a specific input string, the error code is stored. Otherwise the field is empty.
			 */
			error: string, 

			/**
			 * The system matches input sentences against the store, including inexact matches.  MatchDegree indicates how closely the input text matches the original text found in the store. 
			 * The value returned ranges from 0 to 100, where 0 is no similarity and 100 is an exact case sensitive match.
			 */
			matchDegree: number, 
			
			/**
			 * Original text that was matched for this result. Only returned if the matched original text was different than the input text. 
			 * Used to return the source text of a fuzzy match. Not returned for Microsoft Translator results.
			 */
			matchedOriginalText: string, 
			
			/**
			 * Indicates the authority of the person making the quality decision. 
			 * Machine Translation results will have a rating of 5. Anonymously provided translations will generally have a rating of 1 to 4, whilst authoritatively provided translations will generally have a rating of 6 to 10.
			 */
			rating: number,

			/**
			 * The number of times this translation with this rating has been selected. 
			 * The value will be 0 for the automatically translated response. 
			 */
			count: number,

			/**
			 * The translated text.
			 */
			translatedText: string
		}
	}[]
}

export interface SpeakOptions {
	parameters: SpeakParameters
}

export interface SpeakParameters {
	
	/**
	 * A string containing a sentence or sentences of the specified language to be spoken for the wave stream. 
	 * The size of the text to speak must not exceed 2000 characters.
	 */
	text: string,

	/**
	 * A string representing the supported language code to speak the text in. 
	 * The code must be present in the list of codes returned from the method  GetLanguagesForSpeak.
	 */
	language: string,

	/**
	 * A string specifying the content-type ID. Currently,  audio/wav and audio/mp3 are available. The default value is audio/wav.
	 */
	format: string,

	/**
	 * A string specifying properties of the synthesized speech:
	 * - MaxQuality and MinSize are available to specify the quality of the audio signals. With MaxQuality, you can get voices with the highest quality, and with MinSize, you can get the voices with the smallest size. Default is  MinSize.
	 * - female and male are available to specify the desired gender of the voice. Default is female. Use the vertical bar | to include multiple options. For example  MaxQuality|Male.
	 */
	options?: string,
}

export interface TranslateOptions {
	parameter: TranslateParameters
}

export interface TranslateParameters {
	
	/**
	 * A string containing a sentence or sentences of the specified language to be spoken for the wave stream. 
	 * The size of the text to speak must not exceed 2000 characters.
	 */
	text: string,

	/**
	 * A string representing the language code of the translation text. For example, en for English.
	 */
	from?: string, 

	/**
	 * A string representing the language code to translate the text into.
	 */
	to: string,

	/**
	 * A string containing the category (domain) of the translation. Defaults to general.
	 */
	category?: string,

	/**
	 * The only supported, and the default, option is text/plain.
	 */
	contentType?: "text/plain"	
}

export interface TranslateArrayOptions {
	body: TranslateArrayBody
}

export interface TranslateArrayBody {

	/**
	 * A string representing the language code to translate the text from. 
	 * If left empty the response will include the result of language auto-detection.
	 */
	from?: string,

	/**
	 * An array containing the texts for translation. All strings must be of the same language. 
	 * The total of all texts to be translated must not exceed 10000 characters. 
	 * The maximum number of array elements is 2000.
	 */
	to: string,

	options?: {
		/**
		 * A string containing the category (domain) of the translation. Defaults to general.
		 */
		category?: string,

		/**
		 * Specifies how profanities are handled as explained above. 
		 * Accepted values of ProfanityAction are NoAction (default), Marked and Deleted. 
		 */
		profanityAction?: string, 

		/**
		 * The only supported, and the default, option is text/plain.
		 */
		contentType?: string,
			
		/**
		 * User state to help correlate request and response. The same contents will be returned in the response.
		 */
		state?: string,

		/**
		 * Filter results by this URI. If no value is set, the default is all.
		 */
		uri?: string,

		/**
		 * Filter results by this user. If no value is set, the default is all.
		 */
		user?: string
	},

	/**
	 * An array containing the texts for translation. All strings must be of the same language. 
	 * The total of all texts to be translated must not exceed 10000 characters.
	 * The maximum number of array elements is 2000.
	 */
	sourceTexts: {
		string: string[]
	}
}

export interface TranslateArrayReturnValue {
	translateArrayResponse: {
		translateArrayResponse: {
			/**
			 * Indicates an error if one has occurred. Otherwise set to null. 
			 */
			error: string,

			/**
			 * An array of integers indicating the length of each sentence in the original source text.
			 * The length of the array indicates the number of sentences.
			 */
			originalSentenceLengths: number [],
			
			/**
			 * The translated text.
			 */
			translatedText: string,
			
			/**
			 * An array of integers indicating the length of each sentence in the translated text. 
			 * The length of the array indicates the number of sentences.
			 */
			translatedSentenceLengths: number [],
			
			/**
			 * User state to help correlate request and response. Returns the same content as in the request.
			 */
			state: string
		}
	}[]
}
