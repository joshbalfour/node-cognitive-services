import { CommonConstructorOptions, ContentTypeHeaders } from "../index";

export class bingAutosuggest {
	constructor(options: CommonConstructorOptions);

	/**
	 * This operation provides suggestions for a given query or partial query.
	 */
	suggestions(options: SuggestionsOptions): Promise<SuggestionsReturnValue>;
}

export interface SuggestionsOptions {
	parameters: SuggestionsParameters,
	headers?: ContentTypeHeaders
}

export interface SuggestionsParameters {
	/**
	 * The user's search query string
	 */
	q: string
}

export interface SuggestionsReturnValue {
	_type: string,
	instrumentation: {
		pingUrlBase: string,
		pageLoadPingUrl: string
	},
	queryContext: {
		originalQuery: string
	},
	suggestionGroups: {
		name: string,
		searchSuggestions: {
			url: string,
			urlPingSuffix: string,
			displayText: string,
			query: string,
			searchKind: string
		}[]
	}[]
}


