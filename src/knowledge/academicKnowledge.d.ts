import { OcpApimSubscriptionKeyHeaders, ContentTypeHeaders, CommonConstructorOptions } from "../index";

export class academicKnowledge {
	constructor(options: CommonConstructorOptions);

	/**
	 * The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.
	 */
	calcHistogram(options: CalcHistogramOptions): Promise<CalcHistogramReturnValue>;

	/**
	 * The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.
	 */
	calcHistogramPost(options: CalcHistogramPostOptions): Promise<CalcHistogramReturnValue>;

	/**
	 * The evaluate REST API is used to return a set of academic entities based on a query expression.
	 */
	evaluate(options: EvaluateOptions): Promise<EvaluateReturnValue>;

	/**
	 * The evaluate REST API is used to return a set of academic entities based on a query expression.
	 */
	evaluatePost(options: EvaluatePostOptions): Promise<EvaluateReturnValue>;

	/**
	 * The similarity REST API is used to calculate a floating point value based on 2 text inputs.
	 */
	getSimilarity(options: GetSimilarityOptions): Promise<string>;

	/**
	 * For retrieving paths and subgraphs from Microsoft Academic Graph. The graph query interface powered by Graph Engine allows us to not only query entities that meet certain criteria (e.g. find a paper with a given title), but also perform pattern matching via graph exploration (e.g. detect co-authorship).
	 */
	graphSearch(options: GraphSearchOptions): Promise<GraphSearchReturnValue>;

	/**
	 * The interpret REST API takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent based on the Academic Graph data and the Academic Grammar. To provide an interactive experience, you can call this method repeatedly after each character entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. If your application does not want auto-completion, you should set the complete parameter to 0.
	 */
	interpret(options: InterpretOptions): Promise<InterpretReturnValue>;

	/**
	 * The interpret REST API takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent based on the Academic Graph data and the Academic Grammar. To provide an interactive experience, you can call this method repeatedly after each character entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. If your application does not want auto-completion, you should set the complete parameter to 0.
	 */
	interpretPost(options: InterpretPostOptions): Promise<InterpretReturnValue>;

	/**
	 * The similarity REST API is used to calculate a floating point value based on 2 text inputs.
	 */
	postSimilarity(options: PostSimilarityOptions): Promise<string>;
}

// Calc Histogram
export interface CalcHistogramOptions {
	parameters?: CalcHistogramParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface CalcHistogramParameters {
	/**
	 * A query expression that specifies the entities over which to calculate histograms.
	 */
	expr: string,

	/**
	 * Name of the model that you wish to query. Currently, the value defaults to "latest".
	 */
	model?: string,

	/**
	 * A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.
	 */
	attributes?: string,

	/**
	 * Number of results to return.
	 */
	count?: number,

	/**
	 * Index of the first result to return.
	 */
	offset?: number
}

export interface CalcHistogramReturnValue {
	expr: string,
	num_entities: number,
	histograms:
	{
		attribute: string,
		distinct_values: number,
		total_count: number,
		histogram: {
			value: number,
			prob: number,
			count: number
		}[]
	}[]
}

//Calc Histogram POST
export interface CalcHistogramPostOptions {
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body?: CalcHistogramPostBody
}

export interface CalcHistogramPostBody {
	expr: string,
	model?: any,
	attributes?: string,
	count?: number,
	offset?: number
}

//Evaluate
export interface EvaluateOptions {
	parameters?: EvaluateParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface EvaluateParameters {
	/** 
	 * A query expression that specifies which entities should be returned.
	 */
	expr: string,

	/** 
	 * Name of the model that you wish to query. Currently, the value defaults to "latest".
	 */
	model?: string,

	/** 
	 * Number of results to return.
	*/
	count?: number,

	/** 
	 * Index of the first result to return.
	 */
	offset?: number,

	/** 
	 * Name of an attribute that is used for sorting the entities. Optionally, ascending/descending can be specified. The format is: name:asc or name:desc.
	 */
	orderby?: string,

	/** 
	 * A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.
	 */
	attributes?: string,
}

export interface EvaluateReturnValue {
	expr: string,
	entities: {
		prob: number,
		Ti: string,
		Y: number,
		CC: number,
		AA: {
			AuN: string,
			AuId: number
		}[]
	}[]
}

//Evaluate POST
export interface EvaluatePostOptions {
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: EvaluatePostBody
}

export interface EvaluatePostBody {
	expr: string,
	model?: any,
	attributes?: string,
	count?: number,
	offset?: number
}

//Get Similarity
export interface GetSimilarityOptions {
	parameters?: GetSimilarityParameters,
	headers?: OcpApimSubscriptionKeyHeaders,
}

export interface GetSimilarityParameters {
	/**
	 * String to be compared, input length is bounded by the limitation of the length of URL. When the strings are too long to be processed using GET, use POST instead.
	 */
	s1: string,

	/**
	 * String to be compared, input length is bounded by the limitation of the length of URL. When the strings are too long to be processed using GET, use POST instead.
	 */
	s2: string
}

//Graph Search
export interface GraphSearchOptions {
	body: GraphSearchBody,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	parameters: GraphSearchParameters
}

export interface GraphSearchParameters {
	/**
	 * Request type of query. Should be "json" or "lambda".
	 */
	mode: string
}

export interface GraphSearchBody {
	path: string,
	paper: {
		type: string,
		NormalizedTitle: string,
		select: string[]
	},
	author: {
		return: {
			type: string,
			Name: string
		}
	}
}

/**
 * A successful call returns an array of entities for a given query.
 */
export interface GraphSearchReturnValue {
	Results: [{ CellID: number, OriginalTitle: string }, { CellID: number }][]
}

//Interpret
export interface InterpretOptions {
	parameters?: InterpretParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface InterpretParameters {
	/**
	 * Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions.
	 */
	query: string,

	/**
	 * 1 means that auto-completion suggestions are generated based on the grammar and graph data.
	 */
	complete?: boolean,

	/**
	 * Maximum number of interpretations to return.
	 */
	count?: number,

	/**
	 * Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3.
	 */
	offset?: number,

	/**
	 * Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned.
	 */
	timeout?: number,

	/**
	 * Name of the model that you wish to query. Currently, the value defaults to "latest".
	 */
	model?: string
}

export interface InterpretReturnValue {
	query: string,
	interpretations: {
		prob: number,
		parse: string,
		rules: {
			name: string,
			output: {
				type: string,
				value: string
			}
		}[]
	}[]
}

//Interpret POST
export interface InterpretPostOptions {
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: InterpretPostBody
}

export interface InterpretPostBody {
	/**
	 * Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions.
	 */
	query: string,

	/**
	 * 1 means that auto-completion suggestions are generated based on the grammar and graph data.
	 */
	complete?: boolean,

	/**
	 * Maximum number of interpretations to return.
	 */
	count?: number,

	/**
	 * Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3.
	 */
	offset?: number,

	/**
	 * Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned.
	 */
	timeout?: number,

	/**
	 * Name of the model that you wish to query. Currently, the value defaults to "latest".
	 */
	model?: string
}

//Post Similarity
export interface PostSimilarityOptions {
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: PostSimilarityBody
}

export interface PostSimilarityBody {
	s1: string,
	s2: string
}


