const commonService = require('../commonService');

/**
 * The Video Search API lets you send a search query to Bing and get back a list of videos that are relevant to the search query. 
 * @augments commonService
 * {@link https://docs.microsoft.com/en-gb/rest/api/cognitiveservices/bing-video-api-v7-reference|documentation}
 */
class bingVideoSearchV7 extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     */
    constructor({ apiKey }) {
        const endpoint = "api.cognitive.microsoft.com";
        super({ apiKey, endpoint });
        this.endpoints = [
            endpoint
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
        this.parameters = [
            {
            "name": "cc",
            "description": "A 2-character country code of the country where the results come from.\
            If you set this parameter, you must also specify the Accept-Language header.\
            Use this query parameter and the Accept-Language header only if you specify multiple languages.\
            Otherwise, you should use the mkt and setLang query parameters.",
            "value": 0,
            "options": ['AR', 'AU', 'AT', 'BE', 'BR', 'CA', 'CL', 'DK', 'FI', 'FR', 'DE', 'HK', 'IN',
                        'ID', 'IT', 'JP', 'KR', 'MY', 'MX', 'NL', 'NZ', 'NO', 'CN', 'PL', 'PT', 'PH',
                        'RU', 'SA', 'ZA', 'ES', 'SE', 'CH', 'TW', 'TR', 'GB', 'US'],
            "required": false,
            "type": "queryStringParam",
            "typeName": "string"
            }, {
                "name": "count",
                "description": "The number of videos to return in the response. The actual number delivered may be less than requested. The default is 35. The maximum is 105.",
                "value": 35,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "id",
                "description": "An ID that uniquely identifies a video. The Video object's videoId field contains the ID that you set this parameter to.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "modules",
                "description": "A comma-delimited list of insights to request.",
                "options": ['All', 'RelatedVideos', 'VideoResult'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "mkt",
                "description": "The market where the results come from. Typically, mkt is the country where the user is making the request from. However, \
                it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. \
                This parameter and the cc query parameter are mutually exclusive—do not specify both.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of videos to skip before returning videos. The default is 0.",
                "value": "0",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "q",
                "description": "The user's search query string. The query string cannot be empty.\
                The query string may contain Bing Advanced Operators. For example, to limit videos to a specific domain, use the site: operator.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "safeSearch",
                "description": "Filter videos for adult content. The following are the possible filter values.",
                "value": "Moderate",
                "options": [
                    "Off",
                    "Moderate",
                    "Strict"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "setLang",
                "description": "The language to use for user interface strings.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "textDecorations",
                "description": "A Boolean value that determines whether display strings should contain decoration markers such as hit highlighting characters.",
                "value": false,
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "textFormat",
                "description": "The type of markers to use for text decorations (see the textDecorations query parameter).",
                "value": "Raw",
                "options": [
                    "Raw",
                    "HTML"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        this.filterQueryParams = [
            {
                "name": "freshness",
                "description": "Filter videos by the date and time that Bing discovered the video",
                "options": ['Day', 'Week', 'Month'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "pricing",
                "description": "Filter videos by the following pricing options:",
                "options": ['Free', 'Paid', 'All'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "resolution",
                "description": "Filter videos by the following resolutions:",
                "options": ['480p', '720p', '1080p', 'All'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "videoLength",
                "description": "Filter videos by the following lengths:",
                "options": ['Short', 'Medium', 'Long', 'All'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
        ]
    }

    /**
	Get videos relevant for a given query.
    @returns {Promise.<object>}
    */
    search({ parameters, headers }) {
        const operation = {
            "path": "bing/v7.0/videos/search",
            "method": "GET",
            "headers": this.headers,
            "parameters": this.parameters.filter(p => {
                return p.name == 'cc' || p.name == 'count' || p.name == 'id' || p.name == 'mkt' || p.name == 'offset' || p.name == 'q' || p.name == 'safeSearch' || p.name == 'setLang' || p.name == 'textDecorations' || p.name == 'textFormat'
            }).concat(this.filterQueryParams)
        };

        return this.makeRequest({
            operation: operation,
            headers: headers,
            parameters: parameters
        })

    };

    /**
    Get currently trending videos.
    @returns {Promise.<object>}
    */
    trending({parameters, headers}) {

        const operation = {
            "path": "bing/v7.0/videos/trending",
            "method": "GET",
            "headers": this.headers,
            "parameters": this.parameters.filter(p => {
                return p.name == 'cc' || p.name == 'mkt' || p.name == 'safeSearch' || p.name == 'setLang' || p.name == 'textDecorations' || p.name == 'textFormat'
            })
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers
        })

    };

    /**
    Get details about a video.
    Example Parameters: {
        "id": "cats",
        "modulesRequested": 
        }
    @returns {Promise.<object>}
    */
    details({ parameters, headers }) {

        const operation = {
            "path": "bing/v7.0/videos/details",
            "method": "GET",
            "headers": this.headers,
            "parameters": this.parameters.filter(p => {
                return p.name == 'cc' || p.name == 'id' || p.name == 'modules' || p.name == 'mkt' || p.name == 'safeSearch' || p.name == 'setLang' || p.name == 'textDecorations' || p.name == 'textFormat'
            })
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers
        })

    };
}

module.exports = bingVideoSearchV7;