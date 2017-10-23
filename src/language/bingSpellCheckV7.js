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
 * {@link https://dev.cognitive.microsoft.com/docs/services/5f7d486e04d2430193e1ca8f760cd7ed/operations/57855119bca1df1c647bc358|documentation}
 */
class bingSpellCheckV7 extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.serviceId = "5f7d486e04d2430193e1ca8f760cd7ed"
        this.endpoints = [
            "api.cognitive.microsoft.com"
        ];
        this.headers = [
            {
                "name": "Accept",
                "options": [
                    "application/json",
                    "application/ld+json"
                ],
                "required": false,
                "typeName": "string"
            },
            {
                "name": "Accept-Language",
                "description": "A comma-delimited list of languages to use for user interface strings. The list is in decreasing order of preference. \
                This header and the setLang query parameter are mutually exclusive—do not specify both.\
                If you set this header, you must also specify the cc query parameter.\
                Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the mkt and setLang query parameters.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "Pragma",
                "description": "By default, Bing returns cached content, if available. To prevent cached content, set the Pragma header to no-cache.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "User-Agent",
                "description": "The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience.\
                Although optional, you are encouraged to always specify this header.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "X-MSEdge-ClientID",
                "description": "Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables\
                1) the API consumer to receive a consistent user experience, and \
                2) higher click-through rates via better quality of results from the Bing APIs.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "X-MSEdge-ClientIP",
                "description": "The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior.\
                Although optional, you are encouraged to always specify this header and the X-Search-Location header.",
                "required": false,
                "typeName": "string"
            },
            {
                "name": "X-Search-Location",
                "description": "A semicolon-delimited list of key/value pairs that describe the client's geographical location.\
                Bing uses the location information to determine safe search behavior and to return relevant local content.\
                Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location:\
                - lat—Required. The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes.\
                - long—Required. The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes.\
                - re—Required. The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup.\
                - ts—Optional. The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.)\
                - head—Optional. The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero.\
                - sp—Optional. The horizontal velocity (speed), in meters per second, that the client device is traveling.\
                - alt—Optional. The altitude of the client device, in meters.\
                - are—Optional. The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key.",
                "required": false,
                "typeName": "string"
            }
        ];
    }

    /**
     * Perform contextual grammar and spell checking.
     * @returns {Promise.<object>}
     */
    spellCheck({ parameters, headers }) {

        const operation = {
            "path": "bing/v7.0/spellcheck/",
            "method": "GET",
            "operationId": "57855119bca1df1c647bc358",
            "headers": this.headers,
            "parameters": [{
                "name": "actionType",
                "description": "Used by logging to determine whether the request is coming from an interactive session or a page load.",
                "options": ['Edit', 'Load'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "appName",
                "description": "The unique name of your app. The name must be known by Bing. Do not include this parameter unless you have previously contacted Bing to get a unique app name.",
                "required": false,               
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from. ",
                "options": ['AR', 'AU', 'AT', 'BE', 'BR', 'CA', 'CL', 'DK', 'FI', 'FR', 'DE', 'HK', 'IN',
                'ID', 'IT', 'JP', 'KR', 'MY', 'MX', 'NL', 'NZ', 'NO', 'CN', 'PL', 'PT', 'PH',
                'RU', 'SA', 'ZA', 'ES', 'SE', 'CH', 'TW', 'TR', 'GB', 'US'],
                "required": false,               
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "clientMachineName",
                "description": "A unique name of the device that the request is being made from. Generate a unique value for each device (the value is unimportant).",
                "required": false,               
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "docId",
                "description": "A unique ID that identifies the document that the text belongs to. Generate a unique value for each document (the value is unimportant).",
                "required": false,               
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results.\
                The market must be in the form {language code}-{country code}.\
                This parameter and the cc query parameter are mutually exclusive—do not specify both.",
                "options": ['es-AR','en-AU','de-AT','nl-BE','fr-BE','pt-BR','en-CA','fr-CA','es-CL','da-DK','fi-FI','fr-FR','de-DE','zh-HK',
                'en-IN','en-ID','en-IE','it-IT','ja-JP','ko-KR','en-MY','es-MX','nl-NL','en-NZ','no-NO','zh-CN','pl-PL','pt-PT','en-PH','ru-RU','ar-SA','en-ZA',
                'es-ES','sv-SE','fr-CH','de-CH','zh-TW','tr-TR','en-GB','en-US','es-US'],
                "value": "en-US",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mode",
                "description": "The type of spelling and grammar checks to perform.",
                "options": ['proof', 'spell'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "preContextText",
                "description": "A string that gives context to the text string. For example, the text string petal is valid.\
                 However, if you set preContextText to bike, the context changes and the text string becomes not valid. In this case, the API suggests that you change petal to pedal (as in bike pedal).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "postContextText",
                "description": "A string that gives context to the text string. For example, the text string read is valid.\
                However, if you set postContextText to carpet, the context changes and the text string becomes not valid. In this case, the API suggests that you change read to red (as in red carpet).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "sessionId",
                "description": "A unique ID that identifies this user session. Generate a unique value for each user session (the value is unimportant).",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code.",
                "value": "EN",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "text",
                "description": "The text string to check for spelling and grammar errors.",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "userId",
                "description": "A unique ID that identifies the user. Generate a unique value for each user (the value is unimportant).",
                "value": "EN",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };
        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers
        })
    }
}

module.exports = bingSpellCheckV7;