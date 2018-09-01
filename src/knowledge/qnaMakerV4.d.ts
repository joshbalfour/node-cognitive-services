import { OcpApimSubscriptionKeyHeaders, ContentTypeHeaders, CommonConstructorOptions } from "../index";

export class qnaMakerV4 {
	constructor(options: CommonConstructorOptions);

	/**
	 * Creates a new knowledge base.
	 */
	createKnowledgeBase(options: CreateKnowledgeBaseOptions): Promise<CreateKnowledgeBaseReturnValue>;

	/**
	 * Deletes the specified knowledge base and all data associated with it.
	 */
	deleteKnowledgeBase(options: DeleteKnowledgeBaseOptions): Promise<any>;
    
    /**
     * Get operation details
     */
    getOperationDetails(options: OperationDetailsOptions) :Promise<string>;

    /**
	 * Downloads all the data associated with the specified knowledge base.
	 */
    downloadKnowledgeBase(options: DownloadKnowledgeBaseOptions): Promise<string>;

    /**
	 * Publish all unpublished in the knowledgebase to the prod endpoint
	 */
	publishKnowledgeBase(options: PublishKnowledgeBaseOptions): Promise<any>;

	/**
	 * Download alterations from runtime.
	 */
	getAlterations(): Promise<ANY>;

	/**
	 * Replaces word alterations (synonyms) for the KB with the give records.
	 */
	updateAlterations(options: UpdateAlterationsOptions): Promise<any>;

	/**
	 * Add or delete QnA Pairs and / or URLs to an existing knowledge base.
	 */
	updateKnowledgeBase(options: UpdateKnowledgeBaseOptions): Promise<any>;
}

//#region createKnowledgeBase
export interface CreateKnowledgeBaseOptions {
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: CreateKnowledgeBaseBody
}

export interface CreateKnowledgeBaseBody {

	/**
	 * Friendly name for the knowledge base (Required).
	 */
	name: string,

	/**
	 * List of question and answer pairs to be added to the knowledge base. Max 1000 Q-A pairs per request.
	 */
	qnapairs: { answer?: string, question?: string }[],

	/**
	 * List of URLs to be processed and indexed in the knowledge base. In case of existing URL, it will be fetched again and KB will be updated with new data. Max 5 urls per request.
	 */
	urls: string[]
}


export interface CreateKnowledgeBaseReturnValue {
	/**
	 * Holds the unique guid representing the knowledge base.
	 */
	kbId: string,

	/**
	 * Data extraction results.
	 */
	dataExtractionResults: {
		sourceType: string,
		extractionStatusCode: string,
		source: string
	}[]
}
//#endregion

//#region deleteKnowledgeBase
export interface DeleteKnowledgeBaseOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters: DeleteKnowledgeBaseParameters
}

export interface DeleteKnowledgeBaseParameters {
	/**
	 * knowledge base identity
	 */
	knowledgeBaseId: string
}

//#endregion

//#region getOperationDetails
export interface OperationDetailsOptions {
    parameters: OperationDetailsParameters
}

export interface OperationDetailsParameters {
	/**
	 * operation id
	 */
	id: string
}

//#endregion

//#region downloadKnowledgeBase
export interface DownloadKnowledgeBaseOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters: DownloadKnowledgeBaseParameters
}

export interface DownloadKnowledgeBaseParameters {
	/**
	 * knowledge base identity
	 */
	knowledgeBaseId: string
}
//#endregion

//#region getAlterations
export interface GetAlterationsOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters: GetAlterationsParameters
}

export interface GetAlterationsParameters {
	/**
	 * knowledge base identity
	 */
	knowledgeBaseId: string
}

export interface GetAlterationsReturnValue {
	wordAlterations: {
		word: string,
		alterations: string[]
	}[]
}
//#endregion

//#region publishKnowledgeBase
export interface PublishKnowledgeBaseOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters?: PublishKnowledgeBaseParameters
}

export interface PublishKnowledgeBaseParameters {
	/**
	 * knowledge base identity
	 */
	knowledgeBaseId: string
}

//#endregion

//#region updateAlterations
export interface UpdateAlterationsOptions {
	parameters: UpdateAlterationsParameters,
	body: UpdateAlterationsBody,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface UpdateAlterationsParameters {
	/**
	 * knowledge base identity
	 */
	knowledgeBaseId: string
}

export interface UpdateAlterationsBody {
	add: {
            word: string,
            alterations: string[]
        }[],
    delete: {
            word: string,
            alterations: string[]
        }[]
}
//#endregion

//#region updateKnowledgeBase
export interface UpdateKnowledgeBaseOptions {
	parameters: UpdateKnowledgeBaseParameters,
	body: UpdateKnowledgeBaseBody,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface UpdateKnowledgeBaseParameters {
	/**
	 * knowledge base identity
	 */
	knowledgeBaseId: string
}

export interface UpdateKnowledgeBaseBody {
	add: {
		qnaPairs: {
                answer: string,
                question: string
            }[],
        urls: string[]
	},
	delete: {
		qnaPairs: {
			answer: string,
			question: string
		}[]
	}
}
//#endregion