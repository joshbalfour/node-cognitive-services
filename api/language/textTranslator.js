const {
    makeRequest
} = require('../../lib/api');

const xmlBuilder = require('xmlBuilder');
const xmlParser = require('xml2js');

const textTranslator = ({
    apiKey,
    endpoint
}) => {

    let self = this;

    self.endpoints = [
        "api.microsofttranslator.com"
    ];
    self._apiKey = apiKey;
    self._endpoint = endpoint;

    /**
     * Translate array: retrieve translations for multiple source texts
     * Docs: http://docs.microsofttranslator.com/text-translate.html#!/default/post_TranslateArray
     */
    self.translateArray = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/TranslateArray",
            "method": "POST",
            "parameters": [{
                "name": "from",
                "description": "A string representing the language code to translate the text from. If left empty the response will include the result of language auto-detection",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "to",
                "description": "A string representing the language code to translate the text into.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "category",
                "description": "A string containing the category (domain) of the translation.",
                "value": "general",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "profanityAction",
                "description": "Specifies how profanities are handled. Normally the Translator service will retain profanity that is present in the source in the translation. The degree of profanity and the context that makes words profane differ between cultures, and as a result the degree of profanity in the target language may be amplified or reduced.\
                If you want to avoid getting profanity in the translation, regardless of the presence of profanity in the source text, you can use the profanity filtering option for the methods that support it. The option allows you to choose whether you want to see profanity deleted or marked with appropriate tags, or no action taken. The accepted values of ProfanityAction are NoAction (default), Marked and  Deleted.\
                ",
                "value": "NoAction",
                "options": [
                    "NoAction",
                    "Marked",
                    "Deleted"
                ],
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "contentType",
                "description": "The format of the text being translated. Any HTML needs to be well-formed.",
                "options": [
                    "text/plain",
                    "text/xml",
                    "text/html",
                    "application/xml"
                ],
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "state",
                "description": "User state to help correlate request and response. The same contents will be returned in the response.",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "sourceTexts",
                "description": "An array containing the texts for translation. All strings must be of the same language. The total of all texts to be translated must not exceed 10000 characters. The maximum number of array elements is 2000",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "uri",
                "description": "Filter results by this URI.",
                "value": "all",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "user",
                "description": "Filter results by this user.",
                "value": "all",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        const optionsNamespace = "http://schemas.datacontract.org/2004/07/Microsoft.MT.Web.Service.V2";
        const textNamespace = "http://schemas.microsoft.com/2003/10/Serialization/Arrays"

        // Note: API expect XML elements to be sorted alphabetically
        let TranslateArrayRequest = xmlBuilder.create("TranslateArrayRequest");
        TranslateArrayRequest.ele("AppId");
        if (parameters["from"]) {
            TranslateArrayRequest.ele("From", null, parameters["from"])
        }

        let options = TranslateArrayRequest.ele("Options");

        if (parameters["category"]) {
            options.ele("Category", { xmlns: optionsNamespace }, parameters["category"])
        }
        if (parameters["contentType"]) {
            options.ele("ContentType", { xmlns: optionsNamespace }, parameters["contentType"])
        }
        if (parameters["profanityAction"]) {
            options.ele("ProfanityAction", { xmlns: optionsNamespace }, parameters["profanityAction"])
        }
        options.ele("ReservedFlags", { xmlns: optionsNamespace });
        if (parameters["state"]) {
            options.ele("State", { xmlns: optionsNamespace }, parameters["state"])
        }
        if (parameters["uri"]) {
            options.ele("Uri", { xmlns: optionsNamespace }, parameters["uri"])
        }
        if (parameters["user"]) {
            options.ele("User", { xmlns: optionsNamespace }, parameters["user"])
        }

        if (parameters["sourceTexts"]) {
            let texts = TranslateArrayRequest.ele("Texts");
            for (let i in parameters["sourceTexts"]) {
                texts.ele("string", { xmlns: textNamespace }, parameters["sourceTexts"][i])
            }
        }

        if (parameters["to"]) {
            TranslateArrayRequest.ele("To", null, parameters["to"])
        }

        let body = TranslateArrayRequest.toString();

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: { "Content-type": "text/xml" },
            body: body
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.ArrayOfTranslateArrayResponse.TranslateArrayResponse);
                    }
                })
            })
        })
    };

    /**
     * Translates a text string from one language to another.
     */
    self.translate = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/Translate",
            "method": "GET",
            "parameters": [{
                "name": "text",
                "description": "Required. A string representing the text to translate. The size of the text must not exceed 10000 characters.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "from",
                "description": "Optional. A string representing the language code of the translation text. For example, en for English.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "to",
                "description": "Required. A string representing the language code to translate the text into.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "category",
                "description": "Optional. A string containing the category (domain) of the translation",
                "value": "general",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "contentType",
                "description": "The format of the text being translated. Any HTML needs to be well-formed.",
                "options": [
                    "text/plain",
                    "text/html"
                ],
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.string._);
                    }
                })
            })
        })
    };

    /**
     * Retrieves friendly names for the languages passed in as the parameter languageCodes, and localized using the passed locale language.
     */
    self.getLanguageNames = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/GetLanguageNames",
            "method": "POST",
            "parameters": [{
                "name": "locale",
                "description": "A string representing a combination of an ISO 639 two-letter lowercase culture code associated with a language and an ISO 3166 two-letter uppercase subculture code to localize the language names or a ISO 639 lowercase culture code by itself.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "languageCodes",
                "description": "A string array representing the ISO 639-1 language codes to retrieve the friendly name for.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        let ArrayOfstring = xmlBuilder.create("ArrayOfstring");

        ArrayOfstring.attribute("xmlns:i", "http://www.w3.org/2001/XMLSchema-instance");
        ArrayOfstring.attribute("xmlns", "http://schemas.microsoft.com/2003/10/Serialization/Arrays");

        if (parameters["languageCodes"]) {
            for (let i = 0; i < parameters.languageCodes.length; i++) {
                ArrayOfstring.ele("string", null, parameters.languageCodes[i])
            }
        }

        const body = ArrayOfstring.toString();

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: { "Content-type": "text/xml" },
            body: body
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.ArrayOfstring.string);
                    }
                })
            })
        })
    };

    /**
     * Obtain a list of language codes representing languages that are supported by the Translation Service.  Translate and TranslateArray can translate between any two of these languages.
     */
    self.getLanguagesForTranslate = () => {

        const operation = {
            "path": "V2/Http.svc/GetLanguagesForTranslate",
            "method": "GET",
            "parameters": []
        };
        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.ArrayOfstring.string);
                    }
                })
            })
        })
    };

    /**
     * Retrieves the languages available for speech synthesis.
     */
    self.getLanguagesForSpeak = () => {

        const operation = {
            "path": "V2/Http.svc/GetLanguagesForSpeak",
            "method": "GET",
            "parameters": []
        };
        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.ArrayOfstring.string);
                    }
                })
            })
        })
    };

    /**
     * Returns a string which is a URL to a wave or mp3 stream of the passed-in text being spoken in the desired language.
     */
    self.speak = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/Speak",
            "method": "GET",
            "parameters": [{
                "name": "text",
                "description": "A string containing a sentence or sentences of the specified language to be spoken for the wave stream. The size of the text to speak must not exceed 2000 characters.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "A string representing the supported language code to speak the text in. The code must be present in the list of codes returned from the method GetLanguagesForSpeak.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "format",
                "description": "A string specifying the content-type ID. Currently, \"audio/wav\" and “\"audio/mp3\" are available.",
                "value": "audio/wav",
                "options": [
                    "audio/wav",
                    "audio/mp3"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "options",
                "description": "A string specifying the quality of the audio signals. Currently, \"MaxQuality\" and \"MinSize\" are available. With \"MaxQuality\", you can get the voice(s) with the highest quality, and with \"MinSize\", you can get the voices with the smallest size.",
                "value": "MinSize",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };
        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        });
    };

    /**
     * Identify the language of a selected piece of text.
     */
    self.detect = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/Detect",
            "method": "GET",
            "parameters": [{
                "name": "text",
                "description": "A string containing a sentence or sentences of the specified language to be spoken for the wave stream. The size of the text to speak must not exceed 2000 characters.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };
        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.string._);
                    }
                })
            })
        })
    };

    /**
     * Identify the language of an array of string at once. Performs independent detection of each individual array element and returns a result for each row of the array.
     */
    self.detectArray = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/DetectArray",
            "method": "POST",
            "parameters": [{
                "name": "texts",
                "description": "A string containing a sentence or sentences of the specified language to be spoken for the wave stream. The size of the text to speak must not exceed 2000 characters.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "array"
            }]
        };

        let ArrayOfstring = xmlBuilder.create("ArrayOfstring");
        ArrayOfstring.attribute("xmlns", "http://schemas.microsoft.com/2003/10/Serialization/Arrays");

        if (parameters["texts"]) {
            for (let i = 0; i < parameters.texts.length; i++) {
                ArrayOfstring.ele("string", null, parameters.texts[i])
            }
        }

        const body = ArrayOfstring.toString();

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: { "Content-type": "text/xml" },
            body: body
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.ArrayOfstring.string);
                    }
                })
            })
        })
    };

    /**
     * Adds a translation to the translation memory.
     */
    self.addTranslation = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/AddTranslation",
            "method": "GET",
            "parameters": [{
                "name": "originalText",
                "description": "A string containing the text to translate from. The string has a maximum length of 1000 characters.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "translatedText",
                "description": "A string containing translated text in the target language. The string has a maximum length of 2000 characters.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "from",
                "description": "A string representing the language code of the translation text.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "to",
                "description": "A string representing the language code to translate the text into.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "rating",
                "description": "An integer representing the quality rating for this string. Value between -10 and 10. Defaults to 1.",
                "value": 1,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "contentType",
                "description": "The format of the text being translated.",
                "value": "text/plain",
                "options": [
                    "text/plain",
                    "text/html"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "category",
                "description": "A string containing the category (domain) of the translation.",
                "value": "general",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "user",
                "description": "A string used to track the originator of the submission.",
                "value": "general",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "uri",
                "description": "A string containing the content location of this translation.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        });
    };

    /**
     * Adds an array of translations to add translation memory. This is an array version of AddTranslation.
     */
    self.addTranslationArray = ({
        parameters
    }) => {

        const operation = {
            "path": "V2/Http.svc/AddTranslationArray",
            "method": "POST",
            "parameters": [{
                "name": "from",
                "description": "A string containing the language code of the source language. Must be one of the languages returned by theGetLanguagesForTranslate method.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "to",
                "description": "A string containing the language code of the target language. Must be one of the languages returned by the GetLanguagesForTranslate method.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "translations",
                "description": "An array of translations to add to translation memory. Each translation must contain: originalText, translatedText and rating. The size of each originalText and translatedText is limited to 1000 chars. The total of all the originalText(s) and translatedText(s) must not exceed 10000 characters. The maximum number of array elements is 100.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "array"
            }, {
                "name": "contentType",
                "description": "The format of the text being translated. Any HTML needs to be well-formed.",
                "options": [
                    "text/plain",
                    "text/xml",
                    "text/html",
                    "application/xml"
                ],
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "category",
                "description": "",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "uri",
                "description": "",
                "value": null,
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "user",
                "description": "",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        // Note: API expect XML elements to be sorted alphabetically
        let AddtranslationsRequest = xmlBuilder.create("AddtranslationsRequest");
        AddtranslationsRequest.ele("AppId");
        if (parameters["from"]) {
            AddtranslationsRequest.ele("From", null, parameters["from"])
        }
        const namespace = "http://schemas.datacontract.org/2004/07/Microsoft.MT.Web.Service.V2";
        let options = AddtranslationsRequest.ele("Options");

        if (parameters["category"]) {
            options.ele("Category", { xmlns: namespace }, parameters["category"]);
        }
        if (parameters["contentType"]) {
            options.ele("ContentType", { xmlns: namespace }, parameters["contentType"]);
        }
        if (parameters["user"]) {
            options.ele("User", { xmlns: namespace }, parameters["user"]);
        }
        if (parameters["uri"]) {
            options.ele("Uri", { xmlns: namespace }, parameters["uri"]);
        }
        if (parameters["to"]) {
            AddtranslationsRequest.ele("To", null, parameters["to"]);
        }

        if (parameters["translations"]) {
            let translations = AddtranslationsRequest.ele("Translations");
            for (let i in parameters["translations"]) {
                let t = parameters["translations"][i];
                let translation = translations.ele("Translation", { xmlns: namespace });
                translation.ele("OriginalText", t["originalText"]);
                translation.ele("Rating", t["rating"]);
                translation.ele("Sequence", i);
                translation.ele("TranslatedText", t["translatedText"]);

            }
        }

        let body = AddtranslationsRequest.toString();

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: { "Content-type": "text/xml" },
            body: body
        })
    };

    /**
     * Breaks a piece of text into sentences and returns an array containing the lengths in each sentence.
     */
    self.breakSentences = ({
        parameters
    }) => {
        const operation = {
            "path": "V2/Http.svc/BreakSentences",
            "method": "GET",
            "parameters": [{
                "name": "text",
                "description": "A string representing the text to split into sentences. The size of the text must not exceed 10000 characters.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "A string representing the language code of input text.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };
        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.ArrayOfint.int);
                    }
                })
            })
        })
    };

    /**
     * Retrieves an array of translations for a given language pair from the store and the MT engine. GetTranslations differs from Translate as it returns all available translations.
     */
    self.getTranslations = ({
        parameters
    }) => {
        const operation = {
            "path": "V2/Http.svc/GetTranslations",
            "method": "POST",
            "parameters": [{
                "name": "text",
                "description": "Required. A string representing the text to translate. The size of the text must not exceed 10000 characters.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "from",
                "description": "Required. A string representing the language code of the translation text.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "to",
                "description": "Required. A string representing the language code to translate the text into.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "maxTranslations",
                "description": "Required. An integer representing the maximum number of translations to return.",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "category",
                "description": "A string containing the category (domain) of the translation. Defaults to \"general\".",
                "value": "general",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "includeMultipleMTAlternatives",
                "description": "Boolean flag to determine whether more than one alternatives should be returned from the MT engine. Valid values are true and false (case-sensitive). Default is false and includes only 1 alternative. Setting the flag to true allows for generating artificial alternatives in translation, fully integrated with the collaborative translations framework (CTF). The feature allows for returning alternatives for sentences that have no alternatives in CTF, by adding artificial alternatives from the n-best list of the decoder.",
                "value": false,
                "required": false,
                "type": "inBody",
                "typeName": "boolean"
            }, {
                "name": "state",
                "description": "User state to help correlate request and response. The same contents will be returned in the response.",
                "value": "",
                "required": false,
                "type": "inBody",
                "typeName": "number"
            }, {
                "name": "uri",
                "description": "Filter results by this URI. If no value is set, the default is all.",
                "value": "all",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "user",
                "description": "Filter results by this user. If no value is set, the default is all.",
                "value": "all",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        // Note: API expect XML elements to be sorted alphabetically
        let options = xmlBuilder.create("TranslateOptions");
        options.attribute("xmlns", "http://schemas.datacontract.org/2004/07/Microsoft.MT.Web.Service.V2");

        if (parameters["category"]) {
            options.ele("Category", parameters["category"]);
        }
        options.ele("ContentType", "text/plain");
        options.ele("ReservedFlags");
        if (parameters["includeMultipleMTAlternatives"]) {
            options.ele("IncludeMultipleMTAlternatives", parameters["includeMultipleMTAlternatives"]);
        }
        if (parameters["state"]) {
            options.ele("State", parameters["state"]);
        }
        if (parameters["uri"]) {
            options.ele("Uri", parameters["uri"]);
        }
        if (parameters["user"]) {
            options.ele("User", parameters["user"]);
        }

        let body = options.toString();

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: { "Content-type": 'text/xml' },
            body: body
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.GetTranslationsResponse);
                    }
                })
            })
        })
    };

    /**
     * Retrieve multiple translation candidates for multiple source texts.
     */
    self.getTranslationsArray = ({
        parameters
    }) => {
        const operation = {
            "path": "V2/Http.svc/GetTranslationsArray",
            "method": "POST",
            "parameters": [{
                "name": "texts",
                "description": "Required. An array containing the texts for translation. All strings must be of the same language. The total of all texts to be translated must not exceed 10000 characters. The maximum number of array elements is 10.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "array"
            }, {
                "name": "from",
                "description": "Required. A string representing the language code of the translation text.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "to",
                "description": "Required. A string representing the language code to translate the text into.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "maxTranslations",
                "description": "Required. An integer representing the maximum number of translations to return.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "number"
            }, {
                "name": "category",
                "description": "A string containing the category (domain) of the translation. Defaults to \"general\".",
                "value": "general",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "includeMultipleMTAlternatives",
                "description": "Boolean flag to determine whether more than one alternatives should be returned from the MT engine. Valid values are true and false (case-sensitive). Default is false and includes only 1 alternative. Setting the flag to true allows for generating artificial alternatives in translation, fully integrated with the collaborative translations framework (CTF). The feature allows for returning alternatives for sentences that have no alternatives in CTF, by adding artificial alternatives from the n-best list of the decoder.",
                "value": false,
                "required": false,
                "type": "inBody",
                "typeName": "boolean"
            }, {
                "name": "state",
                "description": "User state to help correlate request and response. The same contents will be returned in the response.",
                "value": "",
                "required": false,
                "type": "inBody",
                "typeName": "number"
            }, {
                "name": "uri",
                "description": "Filter results by this URI. If no value is set, the default is all.",
                "value": "all",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "user",
                "description": "Filter results by this user. If no value is set, the default is all.",
                "value": "all",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        const optionsNamespace = "http://schemas.datacontract.org/2004/07/Microsoft.MT.Web.Service.V2";
        const textNamespace = "http://schemas.microsoft.com/2003/10/Serialization/Arrays"

        let GetTranslationsArrayRequest = xmlBuilder.create("GetTranslationsArrayRequest");
        GetTranslationsArrayRequest.ele("AppId");
        if (parameters["from"]) {
            GetTranslationsArrayRequest.ele("From", null, parameters["from"])
        }

        let options = GetTranslationsArrayRequest.ele("Options");

        if (parameters["category"]) {
            options.ele("Category", { xmlns: optionsNamespace }, parameters["category"])
        }
        if (parameters["contentType"]) {
            options.ele("ContentType", { xmlns: optionsNamespace }, parameters["contentType"])
        }
        options.ele("ReservedFlags", { xmlns: optionsNamespace });
        if (parameters["state"]) {
            options.ele("State", { xmlns: optionsNamespace }, parameters["state"])
        }
        if (parameters["uri"]) {
            options.ele("Uri", { xmlns: optionsNamespace }, parameters["uri"])
        }
        if (parameters["user"]) {
            options.ele("User", { xmlns: optionsNamespace }, parameters["user"])
        }

        if (parameters["texts"]) {
            let texts = GetTranslationsArrayRequest.ele("Texts");
            for (let i in parameters["texts"]) {
                texts.ele("string", { xmlns: textNamespace }, parameters["texts"][i])
            }
        }

        if (parameters["to"]) {
            GetTranslationsArrayRequest.ele("To", null, parameters["to"])
        }

        if (parameters["maxTranslations"]) {
            GetTranslationsArrayRequest.ele("MaxTranslations", null, parameters["maxTranslations"])
        }

        let body = GetTranslationsArrayRequest.toString();

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: { "Content-type": 'text/xml' },
            body: body
        }).then(xmlResponse => {
            return new Promise((resolve, reject) => {
                xmlParser.parseString(xmlResponse, (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.ArrayOfGetTranslationsResponse.GetTranslationsResponse);
                    }
                })
            })
        })
    };


    return self;
};

module.exports = textTranslator;