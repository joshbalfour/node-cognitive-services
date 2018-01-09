export class bingImageSearch {
	constructor(options: BingImageSearchOptions);
	
	/**
	 * Returns insights about an image, such as webpages that include the image.
	 */
	imageInsights(options: ImageInsightsOptions): Promise<void>;

	/**
	 * Get relevant images for a given query.
	 */
	search(options: SearchOptions): Promise<SearchReturnValue>;
	
	/**
	 * Get currently trending images.
	 */
	trending(options: TrendingOptions): Promise<TrendingReturnValue>;
}

export interface BingImageSearchOptions {
	apiKey: string,
	endpoint: string
}

export interface ImageInsightsOptions {
	parameters: ImageInsightsParameters,
	headers: any,
	body: { "url"?: string } | any
}

export interface ImageInsightsParameters {

	/**
	 * The token from a previous Image API call
	 */
	insightsToken: string,

	/**
	 * The user's search query string
	 */
	query?: string
}

export interface SearchOptions {
	parameters: SearchParameters,
	header: any
}

export interface SearchParameters {
	
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

export interface SearchReturnValue {
	_type: string,
    instrumentation: {
        pingUrlBase: string,
        pageLoadPingUrl: string
    },
    readLink: string,
    webSearchUrl: string,
    webSearchUrlPingSuffix: string,
    totalEstimatedMatches: number,
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
		},
		imageInsightsToken: string,
		insightsSourcesSummary: {
			shoppingSourcesCount: number,
			recipeSourcesCount: number
		},
		imageId: string,
		accentColor: string
	}[],
    queryExpansions: {
		text: string,
		displayText: string,
		webSearchUrl: string,
		webSearchUrlPingSuffix: string,
		searchLink: string,
		thumbnail: {
			thumbnailUrl: string
		}
	}[],
    nextOffsetAddCount: number,
    pivotSuggestions: {
		pivot: string,
		suggestions: {
			text: string,
			displayText: string,
			webSearchUrl: string,
			webSearchUrlPingSuffix: string,
			searchLink: string,
			thumbnail: {
				thumbnailUrl: string
			}
		}[]
	}[],
    displayShoppingSourcesBadges: boolean,
    displayRecipeSourcesBadges: boolean
}

export interface TrendingOptions {
	parameters: TrendingParameters,
	headers: any
}

export interface TrendingReturnValue {
	_type: TrendingImages,
    instrumentation: {
        pingUrlBase: string,
        pageLoadPingUrl: string
    },
    categories: {
        title: string,
		tiles: {
			query: {
				text: string,
				displayText: string,
				webSearchUrl: string,
				webSearchUrlPingSuffix: string
			},
			image: {
				thumbnailUrl: string,
				contentUrl: string,
				thumbnail: {
					width: number,
					height: number
				},
				imageId: string
			}
		}[]
    }[]
}
