import { CommonConstructorOptions, ContentTypeHeaders } from "../index"

/**
 * The cloud-based Microsoft Speech API provides developers an easy way to create powerful speech-enabled features in their applications, like voice command control, user dialog using natural speech conversation, and speech transcription and dictation. The Microsoft Speech API supports both Speech to Text and Text to Speech conversion.

- Speech to Text API converts human speech to text that can be used as input or commands to control your application.
- Text to Speech API converts text to audio streams that can be played back to the user of your application.
 */
export class bingSpeech {
  
    constructor(options: BingSpeechOptions);
    getText(options: GetTextOptions): Promise<any>;
    getSpeech(options: GetSpeechOptions): Promise<any>;
}

export type recognitionModeOptions = 'interactive' | 'conversation' | 'dictation' ;
export type formatOptions = 'simple'|'detailed';
export type TransferEncodingHeaderTypes = 'chunked';

export type XMicrosoftOutputFormatHeaderTypes = 'ssml-16khz-16bit-mono-tts'|
                                                'raw-16khz-16bit-mono-pcm'|
                                                'raw-8khz-8bit-mono-mulaw'| 
                                                'riff-16khz-16kbps-mono-siren'|
                                                'riff-8khz-8bit-mono-mulaw'|
                                                'riff-16khz-16bit-mono-pcm'|
                                                'audio-16khz-16kbps-mono-siren'|
                                                'audio-16khz-128kbitrate-mono-mp3'|
                                                'audio-16khz-64kbitrate-mono-mp3'|
                                                'audio-16khz-32kbitrate-mono-mp3' ;
export type GenderTypes = 'Male'|'Female';
                                    
export interface BingSpeechOptions {
    apiKey: string
}

export interface GetTextOptions {
    parameters: GetTextParameters,
    headers: ContentTypeHeaders & GetTextHeaders,
    body: {"url"?: string} | any
}

export interface GetTextParameters {
    recognitionMode: recognitionModeOptions,
    language: string,
    format?: formatOptions
}

export interface GetTextHeaders {
    "Transfer-Encoding"?: TransferEncodingHeaderTypes
}

export interface GetSpeechOptions {
    headers: GetSpeechHeaders,
    body: GetSpeechBody
}

export interface GetSpeechHeaders {
    "X-Microsoft-OutputFormat": XMicrosoftOutputFormatHeaderTypes
}

export interface GetSpeechBody {
    language: string,
    text: string,
    voiceName: string,
    gender: GenderTypes
}

