const commonService = require('../commonService');

/**
 * The Image Search API lets you send a search query to Bing and get back a list of relevant images.
 * @augments commonService
 * {@link https://docs.microsoft.com/en-gb/rest/api/cognitiveservices/bing-images-api-v7-reference|documentation}
 */
class bingImageSearchV7 extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
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
                "name": "Content-Type",
                "description": "If you set the modules query parameter to RecognizedEntities, you may specify the binary of an image in the body of a POST request. \
                If you specify the image in the body of a POST request, you must specify this header and set its value to multipart/form-data.",
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
                "name": "cab",
                "description": "The bottom coordinate of the region to crop.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "cal",
                "description": "The left coordinate of the region to crop.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "car",
                "description": "The right coordinate of the region to crop.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "cat",
                "description": "The top coordinate of the region to crop.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "ct",
                "description": "The crop type to use when cropping the image based on the coordinates specified in the cal, cat, car, and cab parameters.",
                "value": 0,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "cc",
                "description": "A 2-character country code of the country where the results come from.\
                If you set this parameter, you must also specify the Accept-Language header.\
                Use this query parameter and the Accept-Language header only if you specify multiple languages.\
                Otherwise, you should use the mkt and setLang query parameters.",
                "options": ['AR', 'AU', 'AT', 'BE', 'BR', 'CA', 'CL', 'DK', 'FI', 'FR', 'DE', 'HK', 'IN',
                            'ID', 'IT', 'JP', 'KR', 'MY', 'MX', 'NL', 'NZ', 'NO', 'CN', 'PL', 'PT', 'PH',
                            'RU', 'SA', 'ZA', 'ES', 'SE', 'CH', 'TW', 'TR', 'GB', 'US'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "count",
                "description": "The number of image results to return in the response. The actual number delivered may be less than requested.",
                "value": 35,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "id",
                "description": "An ID that uniquely identifies an image. Use this parameter to ensure that the specified image is the first image in the list of images that Bing returns.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "imgUrl",
                "description": "The URL of an image that you want to get insights of. The maximum supported image size is 1 MB.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "insightsToken",
                "description": "An image token. The Image object's imageInsightsToken contains the token. \
                Specify this parameter to get additional information about an image, such as a caption or shopping source.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, 
            {
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
            },
            {
                "name": "modules",
                "description": "A comma-delimited list of insights to request.",
                "options": ['All', 'Brq', 'Caption', 'Collections', 'Recipes', 'PagesIncluding', 'RecognizedEntities', 'RelatedSearches',
                            'ShoppingSources', 'SimilarImages', 'SimilarProducts', 'Tags'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "offset",
                "description": "The zero-based offset that indicates the number of image results to skip before returning results.\
                To page results, use this parameter along with the count parameter.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "q",
                "description": "The user's search query string",
                "value": "",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "safeSearch",
                "description": "A filter used to filter results for adult content.",
                "value": "Moderate",
                "options": [
                    "off",
                    "moderate",
                    "strict"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "setLang",
                "description": "The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code.",
                "value": "EN",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }
        ];
        this.filterQueryParams = [
            {
                "name": "aspect",
                "description": "Filter images by the following aspect ratios: ",
                "value": "All",
                "options": ['Square', 'Wide', 'Tall', 'All'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "color",
                "description": "Filter images by color.",
                "value": "ColorOnly",
                "options": ['ColorOnly', 'Monochrome', 'Black', 'Blue', 'Brown', 'Gray', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'Teal', 'White', 'Yellow'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "freshness",
                "description": "Filter images by the following discovery options.",
                "options": ['Day', 'Week', 'Month'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "height",
                "description": "Filter images that have the specified height, in pixels.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "imageContent",
                "description": "Filter images by the following content types:",
                "options": ['Face', 'Portrait'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "imageType",
                "description": "Filter images by the following image types:",
                "options": ['AnimatedGif', 'Clipart', 'Line', 'Photo', 'Shopping', 'Transparent'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "license",
                "description": "Filter images by the following license types:",
                "options": ['Any', 'Public', 'Share', 'ShareCommercially', 'Modify', 'ModifyCommercially', 'All'],
                "value": 'All',
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            },
            {
                "name": "maxFileSize",
                "description": "Filter images that are less than or equal to the specified file size.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "maxHeight",
                "description": "Filter images that have a height that is less than or equal to the specified height. Specify the height in pixels.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "maxWidth",
                "description": "Filter images that have a width that is less than or equal to the specified width. Specify the width in pixels.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "minFileSize",
                "description": "Filter images that are greater than or equal to the specified file size.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "minHeight",
                "description": "Filter images that have a height that is greater than or equal to the specified height. Specify the height in pixels.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "minWidth",
                "description": "Filter images that have a width that is greater than or equal to the specified width. Specify the width in pixels.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "size",
                "description": "Filter images by the following sizes:",
                "options": ['Small', 'Medium', 'Large', 'Wallpaper', 'All'],
                "value": "all",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            },
            {
                "name": "width",
                "description": "Filter images that have the specified width, in pixels.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }
        ]
    }

    /**
     * Get insights for an image sent in the POST body.
     * @returns {Promise.<object>}
     */
    imageInsights({ parameters, headers, body }) {

        const operation = {
            "path": "bing/v7.0/images/details",
            "method": "POST",
            "headers": this.headers,
            "parameters": this.parameters.filter(p => {
                return p.name == 'cab' || p.name == 'cal' || p.name == 'car' || p.name == 'cat' || p.name == 'ct'
                || p.name == 'cc' || p.name == 'id' || p.name == 'imgUrl' || p.name == 'insightsToken' || p.name == 'mkt' || p.name == 'modules' || p.name == 'safeSearch' || p.name == 'setLang'
            })
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    };

    /**
     * Get relevant images for a given query.
     * @returns {Promise.<object>}
     */
    search({ parameters, headers }) {

        const operation = {
            "path": "bing/v7.0/images/search",
            "method": "GET",
            "headers": this.headers,
            "parameters": this.parameters.filter(p => {
                return p.name == 'cc' || p.name == 'count' || p.name == 'id' || p.name == 'mkt' || p.name == 'offset' || p.name == 'q'
                || p.name == 'safeSearch' || p.name == 'setLang'
            }).concat(this.filterQueryParams)
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers
        })

    };

    /**
     * Get currently trending images.
     * @returns {Promise.<object>}
     */
    trending({parameters, headers}) {

        const operation = {
            "path": "bing/v7.0/images/trending",
            "method": "GET",
            "headers": this.headers,
            "parameters": this.parameters.filter(p => {
                return p.name == 'cc' || p.name == 'id' || p.name == 'mkt' || p.name == 'safeSearch' || p.name == 'setLang' 
            })
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
        })
    };

}

module.exports = bingImageSearchV7;