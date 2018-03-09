import { CommonConstructorOptions, OcpApimSubscriptionKeyHeaders } from "../index";

export class bingEntitySearch{

    constructor(options: CommonConstructorOptions);

    getEntities(options: GetEntitiesOptions): Promise<GetEntitiesReturnValue>;
}
 
export interface GetEntitiesOptions {
    parameters: GetEntitiesParameters,
    headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetEntitiesParameters {
    
    q: string,

    /** 
     * The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form 'language code-country code'. For example, en-US.
    */
    mkt: string,

    /** 
     * The number of search results to return in the response. The actual number delivered may be less than requested.
    */
    count?: number,

    /** 
     * The zero-based offset that indicates the number of search results to skip before returning results.
    */
    offset?: number,

    /** 
     * A filter used to filter results for adult content.
    */
    safesearch?: string,
}

export interface GetEntitiesReturnValue {
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
}