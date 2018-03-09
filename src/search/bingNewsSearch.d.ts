import { CommonConstructorOptions, OcpApimSubscriptionKeyHeaders, ContentTypeHeaders } from "../index";
/**
 * The News API lets partners send a search query to Bing and get back a list of relevant news articles. Note you should call the News API if you need news content only. If you need other content such as images and webpages in addition to images, you must call the Search API which includes news articles in the response. You must display the news articles in the order provided in the response.
 */
export class bingNewsSearch {
	constructor(options: CommonConstructorOptions);

	/**
	 * Returns news for a provided category.
	 */
	categoryNews(options: CategoryNewsOptions): Promise<void>;

	search(options: SearchNewsOptions): Promise<SearchNewsReturnValue>;

	trendingTopics(options: TrendingTopicsOptions): Promise<TrendingTopicsReturnValue>;

}

export interface CategoryNewsOptions {
	parameters: CategoryNewsParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface CategoryNewsParameters {

	/**
	 * Specifies which category of news articles the caller wants returned.
	 */
	category?: string
}

export interface SearchNewsOptions {
	parameters: SearchNewsParameters,
	headers?: ContentTypeHeaders
}

export interface SearchNewsParameters {

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

export interface SearchNewsReturnValue {
	_type: string,
	instrumentation: {
		pingUrlBase: string,
		pageLoadPingUrl: string
	},
	readLink: string,
	totalEstimatedMatches: number,
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
}

export interface TrendingTopicsOptions {
	parameters?: any,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface TrendingTopicsReturnValue {

	_type: string,
	instrumentation: {
		pingUrlBase: string,
		pageLoadPingUrl: string
	},
	value: {
		name: string,
		image: {
			url: string,
			provider: {
				_type: string,
				name: string
			}[],
			webSearchUrl: string,
			webSearchUrlPingSuffix: string,
			isBreakingNews: boolean
		}
	}[]
}

