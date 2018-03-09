import { ContentTypeHeaders, CommonConstructorOptions } from "../index";

/**
* Entity Linking is a natural language processing tool to help analyzing text for your application. 
* Entity Linking recognize a named-entity from given text and aligning a textual mention of the entity to an appropriate entry in a knowledge base.
*/
export class entityLinking {
	constructor(options: CommonConstructorOptions);
	linkEntity(options: LinkEntityOptions): Promise<LinkEntityReturnValue>;
}

export interface LinkEntityOptions {
	parameters: LinkEntityParameters,
	headers?: ContentTypeHeaders,
	body: string
}

export interface LinkEntityParameters {
	/**
	 * The specific word or phrase within the text that is to be entity linked. If not specified, the service will try to recognize and identify all the entities within the input text.
	 */
	selection?: string,

	/**
	 * The location (in offset by characters) of the selected word or phrase within the input text. Used to distinguish when there are multiple instances of the same words or phrases within the input text. Only valid when the selection is specified.
	 */
	offset?: string
}

export interface LinkEntityReturnValue {
	entities: {
		matches: {
			text: string,
			entries: {
				offset: number
			}[]
		}[],
		name: string,
		wikipediaId: string,
		score: number
	}[]
}