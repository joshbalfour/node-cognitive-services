export class qnaMaker {
	constructor(_ref: any);

	/**
	 * Creates a new knowledge base.
	 */
	createKnowledgeBase(options: CreateKnowledgeBaseOptions): CreateKnowledgeBaseReturnValue;
	deleteKnowledgeBase(_ref3: any): any;
	downloadKnowledgeBase(_ref4: any): any;
	generateAnswer(_ref5: any): any;
	getAlterations(_ref6: any): any;
	publishKnowledgeBase(_ref7: any): any;
	trainKnowledgeBase(_ref8: any): any;
	updateAlterations(_ref9: any): any;
	updateKnowledgeBase(_ref10: any): any;
}

//#region createKnowledgeBase
export interface CreateKnowledgeBaseOptions {
	headers?: CreateKnowledgeBaseHeaders,
	body: {
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

}

export interface CreateKnowledgeBaseHeaders {


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