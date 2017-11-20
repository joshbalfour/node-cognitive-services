import { CommonConstructorOptions, ContentTypeHeaders, OcpApimSubscriptionKeyHeaders} from "../index";

/**
 * The Linguistic Analysis APIs rovide access to natural language processing (NLP) tools that identify the structure of text. 
 * 
 * The current release provides three types of analysis:
    - Sentence separation and tokenization
    - Part-of-speech tagging
    - Constituency parsing
 */
export class linguisticAnalysis {
    /**
     * Constructor.
     */
    constructor(options: CommonConstructorOptions);
    
    /**
     * Analyze text with specific analyzers.
     */
    analyzeText(options: AnalyzeTextOptions): Promise<AnalyzeTextReturnValue>;

    /**
     * Returns a list of strings representing which analyzers are currently registered.
     */
    listAnalyzers(options?: ListAnalyzersOptions): Promise<ListAnalyzersReturnValue>;
}
    
export interface AnalyzeTextOptions {
    headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
    body: AnalyzeTextBody
} 

export interface AnalyzeTextBody {
    
    /** 
     * The language of input text.
    */
    language: String,

    /**
     * The analyzers array.
     */
    analyzerIds: String[],

    /**
     * The text to be analyzed. Its maximum length is 65536.
     */
    text: String
}

export interface AnalyzeTextReturnValue {
    
    analyzeResult:{
        /**
         * 	Id of the analyzer.
         */
        analyzerId: String,
        /**
         * Analyze result.
         */
        result: String[]	
    }[]
}

export interface ListAnalyzersOptions {
    headers?: OcpApimSubscriptionKeyHeaders
}

export interface ListAnalyzersReturnValue {
    analyzers:{
        /**
         * Id of the analyzer.
         */
        id:	String,	

        /**
         * Languages which the analyzer support.
         */
        languages: String[],

        /**
         * Describes at a broad brush the type of analysis provided.
         */
        kind: String,	

        /**
         * A name for the specification under which it operates.
         */
        specification: String,	

        /**
         * An implementation name of the analyzer.
         */
        implementation:	String	

    }[]
}