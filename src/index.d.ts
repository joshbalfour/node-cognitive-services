export * from './knowledge/academicKnowledge';
export * from './knowledge/entityLinking';
export * from './knowledge/qnaMaker';
export * from './knowledge/recommendations';

export * from './language/bingSpellCheck';
export * from './language/textAnalytics';
export * from './language/textTranslator';
export * from './language/webLanguageModel';

export * from './search/bingAutosuggest';
export * from './search/bingImageSearch';
export * from './search/bingNewsSearch';
export * from './search/bingVideoSearch';
export * from './search/bingWebSearch';

export * from './speech/speakerIdentification';
export * from './speech/speakerVerification'

export * from './vision/computerVision';
export * from './vision/emotion';
export * from './vision/face';
export * from './vision/video';

export interface ContentTypeHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: ContentTypeHeaderTypes
}
export type ContentTypeHeaderTypes = 'application/json'|'application/octet-stream'|'multipart/form-data';

export interface CommonConstructorOptions {
	apiKey: string,
	endpoint: Endpoints
}
export type Endpoints = 'westus.api.cognitive.microsoft.com'|'eastus2.api.cognitive.microsoft.com'|'eastus.api.cognitive.microsoft.com'|'eastus2.api.cognitive.microsoft.com'|'westcentralus.api.cognitive.microsoft.com'|'southcentralus.api.cognitive.microsoft.com'|'westeurope.api.cognitive.microsoft.com'|'northeurope.api.cognitive.microsoft.com'|'southeastasia.api.cognitive.microsoft.com'|'eastasia.api.cognitive.microsoft.com'|'australiaeast.api.cognitive.microsoft.com'|'brazilsouth.api.cognitive.microsoft.co';