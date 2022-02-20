const commonService = require('../commonService');
const querystring = require('querystring');

/**
 * Video Indexer is a cloud service that enables you to extract the following insights from your videos using artificial intelligence technologies:
 */
class videoIndexerV2 extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     */
    constructor({ apiKey }) {
        const endpoint = "api.videoindexer.ai";
        super({ apiKey, endpoint });
        this.endpoints = [
            endpoint
        ];
        // https://docs.microsoft.com/en-us/azure/media-services/media-services-media-encoder-standard-formats
        this.supportedFormats = ['flv', 'mxf', 'gxf', 'ts', 'ps', '3gp', '3gpp', 'mpg', 'wmv', 'asf', 'avi', 'mp4', 'm4a', 'm4v', 'isma', 'ismv', 'dvr-ms', 'mkv', 'wav', 'mov']
    }

    /**
     * Get Accounts - returns the account details associated
     * with an API key.
     * @param {Object} obj
     * @param {string} obj.location
     * @param {boolean} obj.generateAccessTokens
     * @param {boolean} obj.allowEdit
     * @returns {Promise<[Object]>} A promise containing an array of objects
     */
    getAccounts({
            location,
            generateAccessTokens,
            allowEdit,
    }) {
        const operation = {
            parameters: [
                {
                    name: 'location',
                    required: true,
                    type: 'routeParam',
                    typeName: 'string'
                },
                {
                    name: 'generateAccessTokens',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'boolean',
                },{
                    name: 'allowEdit',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'boolean'
                },
            ],
            path: `auth/{location}/Accounts`,
            method: 'GET'
        };

        const requestParameters = {
            location,
            generateAccessTokens,
            allowEdit
        }

        return this.makeRequest({
            operation: operation,
            parameters: requestParameters
        })
    }

    /**
     * Get Account Access Token - returns an account access token as a string.
     * @param {Object} obj
     * @param {string} obj.location
     * @param {boolean} obj.accountId
     * @param {boolean} obj.allowEdit
     * @returns {Promise<string>} A promise containing an access token
     */
    getAccountAccessToken({
        location,
        accountId,
        allowEdit,
    }){
        const operation = {
            parameters: [
                {
                    name: 'location',
                    required: true,
                    type: 'routeParam',
                    typeName: 'string'
                },
                {
                    name: 'accountId',
                    required: true,
                    type: 'routeParam',
                    typeName: 'string',
                },{
                    name: 'allowEdit',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'boolean'
                },
            ],
            path: `auth/{location}/Accounts/{accountId}/AccessToken`,
            method: 'GET'
        };

        const requestParameters = {
            location,
            accountId,
            allowEdit
        }

        return this.makeRequest({
            operation: operation,
            parameters: requestParameters
        })
    }

    /**
     * Get User Access Token - returns a user access token as a string.
     * @param {Object} obj
     * @param {string} obj.location
     * @param {boolean} obj.allowEdit
     * @returns {Promise<string>} A promise containing an access token
     */
    getUserAccessToken({
        location,
        allowEdit,
    }){
        const operation = {
            parameters: [
                {
                    name: 'location',
                    required: true,
                    type: 'routeParam',
                    typeName: 'string'
                },{
                    name: 'allowEdit',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'boolean'
                },
            ],
            path: `auth/{location}/Users/Me/AccessToken`,
            method: 'GET'
        };

        const requestParameters = {
            location,
            allowEdit
        }

        return this.makeRequest({
            operation: operation,
            parameters: requestParameters
        })
    }

    /**
     * Uploads a video to the Video Indexer
     */
    uploadVideo(params){
        if(!params.path && !params.videoUrl) {
            throw new Error('no video to upload. A video must be specified, either via videoUrl or a path');
        }

        const pathToVideo = (params.path) ? params.path : params.videoUrl;

        const isFormatSupported = this.supportedFormats.filter(sf => {
            return pathToVideo.endsWith(sf);
        }).length
        if (isFormatSupported == 0) {
            return Promise.reject(reject(new Error('Unsupported format. Supported formats are ' + this.supportedFormats.join(','))));
        }

        const requestHeaders = {};

        if(params.videoUrl && !((/(http)s?(:\/\/)/).test(params.videoUrl))){
            // video should point to public url
            throw new Error('videoUrl is not an http/https link. A videoUrl must contain a public path');
        } else if(params.videoUrl) {
            // video needs to be url encoded
            params.videoUrl = querystring.stringify(params.videoUrl);
        }

        if(params.path && ((/(http)s?(:\/\/)/).test(params.path))){
            // path should not point to public url
            throw new Error('path is an http/https link. A path must point to a local path');
        } else if(params.path) {
            // set content type as video will be sent in request body
            requestHeaders['Content-Type'] = 'multipart/form-data';
        }
        
        const operation = {
            parameters: [
                {
                    name: 'location',
                    required: true,
                    type: 'routeParam',
                    typeName: 'string'
                },{
                    name: 'accountId',
                    required: true,
                    type: 'routeParam',
                    typeName: 'string',
                },{
                    name: 'accessToken',
                    required: true,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'name',
                    required: true,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'indexingPreset',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string',
                    options: ['Default',"AudioOnly","DefaultWithNoiseReduction"]
                },{
                    name: 'description',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'partition',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'externalId',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'callbackUrl',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'metadata',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'language',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string',
                    options: ['ar-EG',"zh-Hans","en-US","fr-FR", "de-DE", "it-IT", "ja-JP", "pt-BR", "ru-RU", "es-ES", "auto"]
                },{
                    name: 'videoUrl',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'fileName',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'streamingPreset',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string',
                    options: ['Default',"SingleBitrate","AdaptiveBitrate","NoStreaming"]
                },{
                    name: 'linguisticModelId',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'privacy',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string',
                    options: ['Private','Public']
                },{
                    name: 'externalUrl',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'assetId',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string'
                },{
                    name: 'priority',
                    required: false,
                    type: 'queryStringParam',
                    typeName: 'string',
                    options: ['Low','Normal','High']
                },{
                    "name": "path",
                    "description": "The path to the file",
                    "required": false,
                    "typeName": "string"
                }
            ],
            path: '{location}/Accounts/{accountId}/Videos',
            method: 'POST'
        };

        return this.makeRequest({
            operation: operation,
            parameters: params,
            headers: requestHeaders
        });
    }
}

module.exports = videoIndexerV2;