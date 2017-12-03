const commonService = require('../commonService');
const tokenService = require('../tokenService');
const xmlBuilder = require('xmlbuilder');

/**
 * The cloud-based Microsoft Speech API provides developers an easy way to create powerful speech-enabled features in their applications, like voice command control, user dialog using natural speech conversation, and speech transcription and dictation. The Microsoft Speech API supports both Speech to Text and Text to Speech conversion.

- Speech to Text API converts human speech to text that can be used as input or commands to control your application.
- Text to Speech API converts text to audio streams that can be played back to the user of your application.
 * 
 * @augments commonService
 * @link https://docs.microsoft.com/en-us/azure/cognitive-services/speech/home
 */
class bingSpeech extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     */
    constructor({ apiKey }) {
        const endpoint = "speech.platform.bing.com";
        super({ apiKey, endpoint });
        this.appName = 'node-cognitive-services';
        this.endpoints = [
            endpoint
        ];
    }

    /**
    Get text.
    @returns {Promise.<object>}
    */
    getText({ parameters, headers, body }) {

        const operation = {
            "path": "speech/{recognitionMode}/cognitiveservices/v1",
            "method": "POST",
            "headers": [{
                "name": "Transfer-Encoding",
                "description": "The field Transfer-Encoding is optional. Setting this field to chunked allows you to chop the audio into small chunks",
                "options": [
                    "chunked",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "recognitionMode",
                "description": "Specifies the recognition mode.",
                "value": null,
                "required": true,
                "options": [
                    "interactive",
                    "conversation",
                    "dictation"
                ],
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "Defines the target language for audio conversion",
                "value": null,
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "format",
                "description": "Defines the target language for audio conversion",
                "value": "simple",
                "options": [
                    "simple", "detailed"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-type': "audio/wav; codec=audio/pcm; samplerate=16000"},
            body: body
        })
    }

    /**
    Get speech.
    @returns {Promise.<object>}
    */
    getSpeech({ headers, body }) {

        const operation = {
            "path": "synthesize",
            "method": "POST",
            "headers": [{
                "name": "X-Microsoft-OutputFormat",
                "description": "The output audio format.",
                "options": [
                    "ssml-16khz-16bit-mono-tts",
                    "raw-16khz-16bit-mono-pcm", //streaming
                    "raw-8khz-8bit-mono-mulaw", //non-streaming
                    "riff-16khz-16kbps-mono-siren", //non-streaming
                    "riff-8khz-8bit-mono-mulaw", //non-streaming
                    "riff-16khz-16bit-mono-pcm", //non-streaming
                    "audio-16khz-16kbps-mono-siren", //streaming
                    "audio-16khz-128kbitrate-mono-mp3", //streaming
                    "audio-16khz-64kbitrate-mono-mp3", //streaming
                    "audio-16khz-32kbitrate-mono-mp3" //streaming
                ],
                "required": true,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "language",
                "description": "Specifies the language.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "text",
                "description": "The text to translate.",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "voiceName",
                "description": "The name of the voice",
                "value": null,
                "required": true,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "gender",
                "description": "Specifies the language.",
                "value": null,
                "required": true,
                "options": [
                    "Male",
                    "Female"
                ],
                "type": "inBody",
                "typeName": "string"
            }]
        };

        let SpeakRequest = xmlBuilder.create("speak");
        SpeakRequest.attribute("version", "1.0");

        let voice = SpeakRequest.element("voice");

        if (body["text"]) {
            voice.text(body["text"])
        }

        if (body["language"]) {
            voice.attribute("xml:lang", body["language"])
            SpeakRequest.attribute("xml:lang", body["language"])
        }

        if (body["voiceName"]) {
            voice.attribute("name", body["voiceName"])
        }

        if (body["gender"]) {
            voice.attribute("xml:gender", body["gender"])
        }

        body = SpeakRequest.toString();

        if (body.length > 1024) {
            return new Promise(resolve, reject => {
                reject("The body parameter must be less than 1024 characters long.")
            })
        }

        var tokenS = new tokenService({
            apiKey: this.apiKey
        })

        return tokenS.getToken()
            .then(token => {
                headers.Authorization = 'Bearer ' + token;
                headers['Content-Type'] = 'application/ssml+xml';
                headers['User-Agent'] = this.appName;
                return this.makeRequest({
                    operation: operation,
                    headers: headers,
                    body: body
                })
            })


    }
};

module.exports = bingSpeech;