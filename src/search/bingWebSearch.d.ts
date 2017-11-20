import { CommonConstructorOptions } from "../index";

export class bingWebSearch {
	constructor(options: CommonConstructorOptions);

	/**
	 * Get web, image, news, & videos results for a given query.
	 */
	search(options: SearchWebOptions): Promise<SearchWebReturnValue>;
}

export interface SearchWebOptions {
	parameters: SearchWebParameters
}

export interface SearchWebParameters {

	/**
	 * The user's search query string
	 */
	q: string,

	/**
	 * The number of video results to return in the response. The actual number delivered may be less than requested.
	 */
	count?: number,

	/**
	 * The zero-based offset that indicates the number of video results to skip before returning results.
	 */
	offset?: number,

	/**
	 * The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form -. For example, en-US.
	 */
	mkt?: string,

	/**
	 * A filter used to filter results for adult content.
	 */
	safeSearch?: string
}

export interface SearchWebReturnValue {
	_type: string,
	instrumentation: {
		pingUrlBase: string,
		pageLoadPingUrl: string
	},
	webPages: {
		webSearchUrl: string,
		webSearchUrlPingSuffix: string,
		totalEstimatedMatches: number,
		value: {
			id: string,
			name: string,
			url: string,
			urlPingSuffix: string,
			about: {
				name: string
			}[],
			displayUrl: string,
			snippet: string,
			deepLinks: {
				name: string,
				url: string,
				urlPingSuffix: string
			}[],
			dateLastCrawled: string
		}[]
	},
	images: {
		id: string,
		readLink: string,
		webSearchUrl: string,
		webSearchUrlPingSuffix: string,
		isFamilyFriendly: boolean,
		value: {
			name: string,
			webSearchUrl: string,
			webSearchUrlPingSuffix: string,
			thumbnailUrl: string,
			datePublished: string,
			contentUrl: string,
			hostPageUrl: string,
			hostPageUrlPingSuffix: string,
			contentSize: string,
			encodingFormat: string,
			hostPageDisplayUrl: string,
			width: number,
			height: number,
			thumbnail: {
				width: number,
				height: number
			}
		}[],
		displayShoppingSourcesBadges: boolean,
		displayRecipeSourcesBadges: boolean
	},
	news: {
		id: string,
		readLink: string,
		value: {
			name: string,
			url: string,
			urlPingSuffix: string,
			image: {
				thumbnail: {
					contentUrl: string,
					width: number,
					height: number
				}
			},
			description: string,
			about: {
				readLink: string,
				name: string
			}[],
			provider: {
				_type: string,
				name: string
			}[],
			datePublished: string,
			category: string
		}[]
	},
	relatedSearches: {
		id: string,
		value: {
			text: string,
			displayText: string,
			webSearchUrl: string,
			webSearchUrlPingSuffix: string
		}[],
	},
	videos: {
		id: string,
		readLink: string,
		webSearchUrl: string,
		webSearchUrlPingSuffix: string,
		isFamilyFriendly: boolean,
		value: {
			name: string,
			description: string,
			webSearchUrl: string,
			webSearchUrlPingSuffix: string,
			thumbnailUrl: string,
			datePublished: string,
			publisher: {
				name: string
			}[],
			contentUrl: string,
			hostPageUrl: string,
			hostPageUrlPingSuffix: string,
			encodingFormat: string,
			hostPageDisplayUrl: string,
			width: number,
			height: number,
			duration: string,
			motionThumbnailUrl: string,
			embedHtml: string,
			allowHttpsEmbed: boolean,
			viewCount: number,
			thumbnail: {
				width: number,
				height: number
			}
		}[],
		scenario: string
	}
}