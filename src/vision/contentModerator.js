const commonService = require('../commonService');

/**
 * Content moderation is the process of monitoring User Generated Content (UGC) on online and social media web sites, chat and messaging platforms, enterprise environments, gaming platforms, and peer communication platforms. 
 * The goal is to track, flag, assess, and filter out offensive and unwanted content that creates risks for businesses. 
 * The content can include text, images, and videos.
 * 
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/57cf753a3f9b070c105bd2c1/operations/57cf753a3f9b070868a1f66f|documentation}
 */
class contentModerator extends commonService {
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
            "westus.api.cognitive.microsoft.com",
            "westus2.api.cognitive.microsoft.com",
            "eastus.api.cognitive.microsoft.com",
            "eastus2.api.cognitive.microsoft.com",
            "westcentralus.api.cognitive.microsoft.com",
            "southcentralus.api.cognitive.microsoft.com",
            "westeurope.api.cognitive.microsoft.com",
            "northeurope.api.cognitive.microsoft.com",
            "southeastasia.api.cognitive.microsoft.com",
            "eastasia.api.cognitive.microsoft.com",
            "australiaeast.api.cognitive.microsoft.com",
            "brazilsouth.api.cognitive.microsoft.com"
        ];
    }

    /**
     * Detect the language of given input content. Returns the ISO 639-3 code for the predominant language comprising the submitted text. Over 110 languages supported.
     * @returns {Promise.<string>}
    */
    detectLanguage({ parameters, headers, body }) {

        const operation = {
            "path": "contentmoderator/moderate/v1.0/ProcessText/DetectLanguage",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "text/plain",
                    "text/html",
                    "text/xml",
                    "text/markdown"
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        }).then(response => {
            return response.DetectedLanguage;
        })
    }

    /**
     * Detects profanity in more than 100 languages and matches against custom and shared blacklists.
     * @returns {Promise.<object>}
    */
    screenText({ parameters, headers, body }) {
        
        const operation = {
            "path": "contentmoderator/moderate/v1.0/ProcessText/Screen/",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "text/plain",
                    "text/html",
                    "text/xml",
                    "text/markdown"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "language",
                "description": "The language of the input text.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "autocorrect",
                "description": "Runs auto correction on the input, before running other operations.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "PII",
                "description": "Detects Personal Identifiable Information (PII) in the input.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "listId",
                "description": "The Term list to be for matching",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    /**
     * Returns probabilities of the image containing racy or adult content.
     * @returns {Promise.<object>}
     */
    evaluateImage({ parameters, headers, body}) {
        const operation = {
            "path": "contentmoderator/moderate/v1.0/ProcessImage/Evaluate",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "image/gif",
                    "image/jpeg",
                    "image/png", 
                    "image/bmp",
                    "image/tiff"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "cacheImage",
                "description": "Whether to retain the submitted image for future use; defaults to false.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "DataRepresentation",
                "options": ['URL'],
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "Value",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    /**
     * Returns probabilities of the image containing racy or adult content.
     * @returns {Promise.<object>}
     */
    findFacesInImage({ parameters, headers, body}) {
        const operation = {
            "path": "contentmoderator/moderate/v1.0/ProcessImage/FindFaces",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "image/gif",
                    "image/jpeg",
                    "image/png", 
                    "image/bmp",
                    "image/tiff"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "cacheImage",
                "description": "Whether to retain the submitted image for future use; defaults to false.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "DataRepresentation",
                "options": ['URL'],
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "Value",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    /**
     * Returns probabilities of the image containing racy or adult content.
     * @returns {Promise.<object>}
     */
    ocr({ parameters, headers, body}) {
        const operation = {
            "path": "contentmoderator/moderate/v1.0/ProcessImage/OCR",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "image/gif",
                    "image/jpeg",
                    "image/png", 
                    "image/bmp",
                    "image/tiff"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "cacheImage",
                "description": "Whether to retain the submitted image for future use; defaults to false.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "language",
                "description": "The language of the input image.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "enhanced",
                "description": "When set to True, the image goes through additional processing to come with additional candidates.\
                    image/tiff is not supported when enhanced is set to true.\
                    Note: This impacts the response time.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "DataRepresentation",
                "options": ['URL'],
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "Value",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    /**
     * Fuzzily match an image against one of your custom Image Lists. Returns ID and tags of matching image.
     * 
     * NOTE: Refresh Index must be run on the corresponding Image List before additions and removals are reflected in the response.
     * @returns {Promise.<object>}
     */
    matchImageAgainstList({ parameters, headers, body}) {
        const operation = {
            "path": "contentmoderator/moderate/v1.0/ProcessImage/Match",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "image/gif",
                    "image/jpeg",
                    "image/png", 
                    "image/bmp",
                    "image/tiff"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "cacheImage",
                "description": "Whether to retain the submitted image for future use; defaults to false.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "listId",
                "description": "A list of images to match against",
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "DataRepresentation",
                "options": ['URL'],
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "Value",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    /**
     * Create a custom list of Images. When using the API, images need to have a minimum of 128 pixels and a maximum file size of 4MB. Text can be at most 1024 characters long. If the content passed to the text API or the image API exceeds the size limits, the API will return an error code that informs about the issue.
     * @returns {Promise.<object>}
     */
    createImageList({ body}) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists",
            "method": "POST"
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })
    }

    /**
     * Add an Image to your image list. The image list can be used to do fuzzy matching against other images when using Image/Match API.
     * 
     * NOTE: Remember to call Refresh Search Index for this list before you want to use it on the Image/Match API
     * @returns {Promise.<object>}
     */
    addImageToList({ parameters, headers, body}) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}/images",
            "method": "POST",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "image/gif",
                    "image/jpeg",
                    "image/png", 
                    "image/bmp",
                    "image/tiff"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "tag",
                "description": "A tag for the image.",
                "options": ['101', '102', '201', '202', '203', '301', '401', '402', '403', '501', '502'],
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }, {
                "name": "label",
                "description": "Any additional information about the reference image.",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "DataRepresentation",
                "options": ['URL'],
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "Value",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: headers,
            body: body
        })
    }

    /**
     * Delete all images from your list.
     * @returns {Promise.<object>}
     */
    deleteAllImagesFromList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}/images",
            "method": "DELETE",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Delete an image list.
     * @returns {Promise.<object>}
     */
    deleteImageList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}",
            "method": "DELETE",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Delete an image from an image list.
     * @returns {Promise.<object>}
     */
    deleteImageFromList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}/images/{imageId}",
            "method": "DELETE",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "imageId",
                "description": "The image ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Get details of an image list.
     * @returns {Promise.<object>}
     */
    getDetailsForImageList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}",
            "method": "GET",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Get all the image IDs from a list.
     * @returns {Promise.<object>}
     */
    getAllImageIdsFromList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}/images",
            "method": "GET",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Get all image lists in the subscription.
     * @returns {Promise.<object>}
     */
    getAllImageLists() {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists",
            "method": "GET"
        };

        return this.makeRequest({
            operation: operation
        })
    }

    /**
     * Refresh the search index of an image list.
     * @returns {Promise.<object>}
     */
    refreshSearchIndexOfImageList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}/RefreshIndex",
            "method": "POST",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Update the details of an image list.
     * @returns {Promise.<object>}
     */
    updateImageList({ parameters, body }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/imagelists/{listId}",
            "method": "PUT",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "Name",
                "description": "The name of the list",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "Description",
                "description": "The description of the list",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-type': 'application/json'},
            body: body
        })
    }

    /**
     * Create a custom list of terms.
     * @returns {Promise.<object>}
     */
    createTermList({ body}) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists",
            "method": "POST"
        };

        return this.makeRequest({
            operation: operation,
            headers: {'Content-type': 'application/json'},
            body: body
        })
    }

    /**
     * Add a term to a term list.
     * @returns {Promise.<object>}
     */
    addTermToList({ parameters}) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}/terms/{term}",
            "method": "POST",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "term",
                "description": "The term to add.",
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "language",
                "description": "The language the term is in.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Delete all terms from a list.
     * @returns {Promise.<object>}
     */
    deleteAllTermsFromList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}/terms",
            "method": "DELETE",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "language",
                "description": "The language the term is in.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Delete a term list.
     * @returns {Promise.<object>}
     */
    deleteTermList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}",
            "method": "DELETE",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "language",
                "description": "The language the term is in.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Delete a term from a term list.
     * @returns {Promise.<object>}
     */
    deleteTermFromList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}/terms/{term}",
            "method": "DELETE",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "term",
                "description": "The term to delete",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "language",
                "description": "The language the term is in.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Get details of a term list.
     * @returns {Promise.<object>}
     */
    getDetailsForTermList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}",
            "method": "GET",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Get all the terms from a list.
     * @returns {Promise.<object>}
     */
    getAllTermsFromList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}/terms",
            "method": "GET",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "language",
                "description": "The language the term is in.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Get all term lists in the subscription.
     * @returns {Promise.<object>}
     */
    getAllTermLists() {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists",
            "method": "GET"
        };

        return this.makeRequest({
            operation: operation
        })
    }

    /**
     * Refresh the search index of a term list.
     * @returns {Promise.<object>}
     */
    refreshSearchIndexOfTermList({ parameters }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}/RefreshIndex",
            "method": "POST",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "language",
                "description": "The language the term is in.",
                "options": this.getIso3CodesForLanguages(),
                "required": true,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters
        })
    }

    /**
     * Update the details of a term list.
     * @returns {Promise.<object>}
     */
    updateTermList({ parameters, body }) {
        const operation = {
            "path": "contentmoderator/lists/v1.0/termlists/{listId}",
            "method": "PUT",
            "parameters": [{
                "name": "listId",
                "description": "The list ID",
                "required": true,
                "type": "routeParam",
                "typeName": "number"
            }, {
                "name": "Name",
                "description": "The name of the list",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }, {
                "name": "Description",
                "description": "The description of the list",
                "required": false,
                "type": "inBody",
                "typeName": "string"
            }]
        };

        return this.makeRequest({
            operation: operation,
            parameters: parameters,
            headers: {'Content-type': 'application/json'},
            body: body
        })
    }

};

module.exports = contentModerator;