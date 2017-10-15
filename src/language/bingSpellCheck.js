const commonService = require('../commonService');

/**
 * The Spell Check API lets you perform contextual grammar and spell checking.
 * 
 * What’s the difference between regular spell-checkers and Bing’s 3rd generation spell-checker? Current spell-checkers rely on verifying spelling and grammar against dictionary-based rule sets, which get updated and expanded periodically. In other words, the spell-checker is only as strong as the dictionary that supports it, and the editorial staff who supports the dictionary. You know this type of spell-checker from Microsoft Word and other word processors.
 * 
 * In contrast, Bing has developed a web-based spell-checker that leverages machine learning and statistical machine translation to dynamically train a constantly evolving and highly contextual algorithm. The spell-checker is based on a massive corpus of web searches and documents.
 * 
    - This spell-checker can handle any word-processing scenario:
    - Recognizes slang and informal language
    - Recognizes common name errors in context
    - Corrects word breaking issues with a single flag
    - Is able to correct homophones in context, and other difficult to spot errors
    - Supports new brands, digital entertainment, and popular expressions as they emerge
    - Words that sound the same but differ in meaning and spelling, for example “see” and “sea.”
 * @augments commonService
 * {@link https://dev.cognitive.microsoft.com/docs/services/56e73033cf5ff80c2008c679/operations/56e73036cf5ff81048ee6727|documentation}
 */
class bingSpellCheck extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "56e73033cf5ff80c2008c679"
        this.endpoints = [
            "api.cognitive.microsoft.com"
        ];
    }

    /**
     * Perform contextual grammar and spell checking.
     * @returns {Promise.<object>}
     */
    spellCheck({ parameters, body }) {

        const operation = {
            "path": "bing/v5.0/spellcheck/",
            "method": "POST",
            "operationId": "56e73036cf5ff81048ee6727",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/x-www-form-urlencoded",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "mode",
                "description": "Mode of spellcheck:\
            Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.\
            Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.",
                "value": null,
                "options": [
                    "spell",
                    "proof"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "For proof mode, only support en-us, es-es, pt-br, For spell mode, support all language codes.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        const headers = {
            "Content-type": "application/x-www-form-urlencoded"
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }
}

module.exports = bingSpellCheck;