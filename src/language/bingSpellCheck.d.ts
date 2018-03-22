import { ContentTypeHeaders, CommonConstructorOptions } from "../index";

export class bingSpellCheck {
	constructor(options: CommonConstructorOptions);
	spellCheck(options: SpellCheckOptions): Promise<SpellCheckReturnValue>;
}

export interface SpellCheckOptions {
	parameters: SpellCheckParameters,
	headers?: ContentTypeHeaders,
	body: { "url"?: string } | any
}

export interface SpellCheckParameters {

	/**
	 *Mode of spellcheck:
	 Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.
	 Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries. 
	 */
	mode?: string,

	/**
	 * For proof mode, only support en-us, es-es, pt-br, For spell mode, support all language codes.
	 */
	mkt?: string

}

export interface SpellCheckReturnValue {
	_type: string,
	flaggedTokens: {
		offset: number,
		token: string,
		type: string,
		suggestions: {
			suggestion: string,
			score: number
		}[]
	}[]
}
