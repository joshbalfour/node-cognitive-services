import { CommonConstructorOptions, ContentTypeHeaders, OcpApimSubscriptionKeyHeaders, ContentTypeHeaderTypes } from "../index";

/**
 * Video Indexer is a cloud service that enables you to extract the following insights from your videos using artificial intelligence technologies:
 */
export class videoIndexer {
  
    constructor(options: videoIndexerV2Options);
    getAccounts(options: GetAccountOptions): Promise<Object[]>;
    getAccountAccessToken(options: GetAccountAccessTokenOptions): Promise<string>
}

export interface videoIndexerV2Options {
    apiKey: string
}

export interface GetAccountOptions {
    location: string
    generateAccessTokens?: boolean,
    allowEdit?: boolean,
}

export interface GetAccountAccessTokenOptions {
    location: string,
    accountId: string,
    allowEdit?: boolean
}
