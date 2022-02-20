import { CommonConstructorOptions } from "../index";

export class bingCustomSearchV7 {
    constructor(options: CommonConstructorOptions);

    /**
     * Get web, image, news, & videos results for a given query.
     */
    search(options: CustomSearchOptions): Promise<CustomSearchReturnValue>;
}

export interface CustomSearchOptions {
    parameters: CustomSearchParameters
}

export interface CustomSearchParameters {

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

export interface CustomSearchReturnValue {
    _type: string,
    queryContext: {
        originalQuery: string
    },
    entities: {
        queryScenario: string,
        value: {
            contractualRules: {
                _type: string,
                targetPropertyName: string,
                mustBeCloseToContent: true,
                license: {
                    name: string,
                    url: string
                },
                licenseNotice: string
            }[],
            webSearchUrl: string,
            name: string,
            description: string,
            entityPresentationInfo: {
                entityScenario: string,
                entityTypeHints: string[]
            },
            bingId: string
        }[]
    }
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
    webAnswers: {
        webSearchUrl: string,
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
}
