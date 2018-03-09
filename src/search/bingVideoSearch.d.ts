import { CommonConstructorOptions } from "../index";

/**
 * The Video API lets partners send a search query to Bing and get back a list of relevant videos. 
 * Note you should call the Video API if you need video content only. 
 * If you need other content such as news and webpages in addition to videos, you must call the Search API which includes videos in the response. 
 * You must display the videos in the order provided in the response.
 */
export class bingVideoSearch {
	constructor(options: CommonConstructorOptions);

	/**
	 * Get videos relevant for a given query.
	 */
	search(options: SearchOptions): Promise<SearchReturnValue>;
	
	/**
	 * 
	 */
	details(options: DetailsOptions): Promise<DetailsReturnValue>;
	
	/**
	 * Get currently trending videos.
	 */
	trending(): Promise<TrendingReturnValue>;
}

export interface SearchOptions {
	parameters: SearchParameters
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
		description: string,
		webSearchUrl: string,
		webSearchUrlPingSuffix: string,
		thumbnailUrl: string,
		datePublished: string,
		publisher: {
			name: string
		},
		creator: {
			name: string
		},
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
		},
		videoId: string
	}[],
    nextOffsetAddCount: number,
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
    }[]
}

export interface DetailsOptions {
	parameters: DetailsParameters
}

export interface DetailsParameters {
	
	/**
	 * An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.
	 */
	id: string,
	
	/**
	 * A comma-delimited list of one or more insights to request.
	 */
	modulesRequested: string
}

export interface DetailsReturnValue {
	_type: string,
    instrumentation: {
      pingUrlBase: string,
      pageLoadPingUrl: string
    },
    videoResult: {
      webSearchUrl: string,
      webSearchUrlPingSuffix: string,
      name: string,
      description: string,
      thumbnailUrl: string,
      datePublished: string,
      publisher: {
        name: string
      }[],
      creator: {
        name: string
      },
      contentUrl: string,
      hostPageUrl: string,
      hostPageUrlPingSuffix: string,
      encodingFormat: string,
      hostPageDisplayUrl: string,
      width: number,
      height: number,
      embedHtml: string,
      allowHttpsEmbed: boolean,
      thumbnail: {
        width: 480,
        height: 270
      },
      videoId: string,
      allowMobileEmbed: boolean,
      isSuperfresh: boolean
    }
}

export interface TrendingReturnValue {
	_type: string,
    instrumentation: {
        pingUrlBase: string,
        pageLoadPingUrl: string
    },
    bannerTiles: {
		query: {
			text: string,
			displayText: string,
			webSearchUrl: string,
			webSearchUrlPingSuffix: string
		},
		image: {
			description: string,
			thumbnailUrl: string,
			headLine: string,
			contentUrl: string
		}
	}[],
    categories: {
		title: string,
		subcategories: {
			tiles: {
				query: {
					text: string,
					displayText: string,
					webSearchUrl: string,
					webSearchUrlPingSuffix: string
				},
				image: {
					description: string,
					thumbnailUrl: string,
					contentUrl: string
				}
			}[],
			title: string
		}[]
     }[]
}