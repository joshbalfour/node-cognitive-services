const {
    makeRequest
} = require('../../lib/api');

const face = ({
    apiKey, 
    endpoint
}) => {

    let self = this;

    self.endpoints = [
        "westus.api.cognitive.microsoft.com",
        "eastus2.api.cognitive.microsoft.com",
        "westcentralus.api.cognitive.microsoft.com",
        "westeurope.api.cognitive.microsoft.com",
        "southeastasia.api.cognitive.microsoft.com"
    ];
    self._apiKey = apiKey;
    self._endpoint = endpoint;

    /**
			Name: Face: Detect
			Description:Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.

Optional parameters for returning faceId, landmarks, and attributes. Attributes include age, gender, smile intensity, facial hair, head pose, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise. faceId is for other APIs use including Face - Identify, Face - Verify, and Face - Find Similar. The faceId will expire 24 hours after detection call.
JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.
Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.
Attributes (age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise) are still experimental and may not be very accurate. HeadPose's pitch value is a reserved field and will always return 0.
		*/
    self.detect = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Detect",
            "path": "face/v1.0/detect",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395236",
            "id": "563879b61984550f30395236",
            "description": "Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.\
            Optional parameters for returning faceId, landmarks, and attributes. Attributes include age, gender, smile intensity, facial hair, head pose, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise. faceId is for other APIs use including Face - Identify, Face - Verify, and Face - Find Similar. The faceId will expire 24 hours after detection call.\
            JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.\
            The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.\
            A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.\
            Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.\
            Attributes (age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise) are still experimental and may not be very accurate. HeadPose's pitch value is a reserved field and will always return 0.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "url",
                "Description": "URL of input image."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "returnFaceId",
                "description": "Return face IDs of the detected faces or not. The default value is true. ",
                "value": "true",
                "options": [
                    "false",
                    "true"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "returnFaceLandmarks",
                "description": "Return face landmarks of the detected faces or not. The default value is false. ",
                "value": "false",
                "options": [
                    "false",
                    "true"
                ],
                "required": false,
                "type": "queryStringParam",
                "typeName": "boolean"
            }, {
                "name": "returnFaceAttributes",
                "description": "Analyze and return the one or more specified face attributes in the comma-separated string like \"returnFaceAttributes=age,gender\".Supported face attributes include age, gender, headPose, smile, facialHair, and glasses. Note that each face attribute analysis has additional computational and time cost.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Find Similar
			Description: Given query face's faceId, to search the similar-looking faces from a faceId array or a faceListId. faceId array contains the faces created by Face - Detect, which will expire 24 hours after creation. While "faceListId" is created by Face List - Create a Face List containing persistedFaceIds that will not expire. Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.
Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. "matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.
		*/
    self.findSimilar = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Find Similar",
            "path": "face/v1.0/findsimilars",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395237",
            "id": "563879b61984550f30395237",
            "description": "Given query face's faceId, to search the similar-looking faces from a faceId array or a faceListId. faceId array contains the faces created by Face - Detect, which will expire 24 hours after creation. While \"faceListId\" is created by Face List - Create a Face List containing persistedFaceIds that will not expire. Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.\
            Find similar has two working modes, \"matchPerson\" and \"matchFace\". \"matchPerson\" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. \"matchFace\" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "faceId",
                "Description": "faceId of the query face. User needs to call Face - Detect first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call."
            }, {
                "Fields": "faceListId",
                "Description": "	An existing user-specified unique candidate face list, created in Face List - Create a Face List. Face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId and faceIds should not be provided at the same time."
            }, {
                "Fields": "faceIds",
                "Description": "An array of candidate faceIds. All of them are created by Face - Detect and the faceIds will expire 24 hours after the detection call. The number of faceIds is limited to 1000. Parameter faceListId and faceIds should not be provided at the same time."
            }, {
                "Fields": "maxNumOfCandidatesReturned",
                "Description": "Optional parameter. The number of top similar faces returned. The valid range is [1, 1000].It defaults to 20."
            }, {
                "Fields": "mode",
                "Description": "Optional parameter. Similar face searching mode. It can be \"matchPerson\" or \"matchFace\". It defaults to \"matchPerson\"."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Group
			Description: Divide candidate faces into groups based on face similarity. 

The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.
Group API needs at least 2 candidate faces and 1000 at most. We suggest to try Face - Verify when you only have 2 candidate faces.
		*/
    self.group = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Group",
            "path": "face/v1.0/group",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395238",
            "id": "563879b61984550f30395238",
            "description": "Divide candidate faces into groups based on face similarity. \
            The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.\
            MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.\
            Group API needs at least 2 candidate faces and 1000 at most. We suggest to try Face - Verify when you only have 2 candidate faces.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "faceIds",
                "Description": "Array of candidate faceId created by Face - Detect. The maximum is 1000 faces."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Identify
			Description: Identify unknown faces from a person group. 

For each face in the faceIds array, Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId), and returns candidate person(s) for that face ranked by similarity confidence. The person group should be trained to make it ready for identification. See more in Person Group - Train Person Group. 

Remarks:

The algorithm allows more than one face to be identified independently at the same request, but the no more than 10 faces.
Each person in the person group could have more than one face, but no more than 248 faces.
Identification works well for frontal faces and near-frontal faces.
Number of candidates returned is restricted by maxNumOfCandidatesReturned and confidenceThreshold. If no person is identified, the candidate returned will be an empty array.
Try Face - Find Similar when you need to identify similar faces from a face list instead of a person group.
		*/
    self.identify = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Identify",
            "path": "face/v1.0/identify",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395239",
            "id": "563879b61984550f30395239",
            "description": "Identify unknown faces from a person group. \
            For each face in the faceIds array, Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId), and returns candidate person(s) for that face ranked by similarity confidence. The person group should be trained to make it ready for identification. See more in Person Group - Train Person Group. \
            Remarks:\
            - The algorithm allows more than one face to be identified independently at the same request, but the no more than 10 faces.\
            - Each person in the person group could have more than one face, but no more than 248 faces.\
            - Identification works well for frontal faces and near-frontal faces.\
            - Number of candidates returned is restricted by maxNumOfCandidatesReturned and confidenceThreshold. If no person is identified, the candidate returned will be an empty array.\
            - Try Face - Find Similar when you need to identify similar faces from a face list instead of a person group.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "faceIds",
                "Description": "Array of query faces faceIds, created by the Face - Detect. Each of the faces are identified independently. The valid number of faceIds is between [1, 10]."
            }, {
                "Fields": "personGroupId",
                "Description": "personGroupId of the target person group, created by Person Group - Create a Person Group."
            }, {
                "Fields": "maxNumOfCandidatesReturned",
                "Description": "The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1)."
            }, {
                "Fields": "confidenceThreshold",
                "Description": "Optional parameter. Confidence threshold of identification, used to judge whether one face belong to one person. The range of confidenceThreshold is [0, 1] (default specified by algorithm)."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Verify
			Description: Verify whether two faces belong to a same person or whether one face belongs to a person. 

Remarks:

This API works well for frontal and near-frontal faces.
For the scenarios that are sensitive to accuracy please make your own judgment.
		*/
    self.verify = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Verify",
            "path": "face/v1.0/verify",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523a",
            "id": "563879b61984550f3039523a",
            "description": "Verify whether two faces belong to a same person or whether one face belongs to a person. \
            Remarks:\
            This API works well for frontal and near-frontal faces.\
            For the scenarios that are sensitive to accuracy please make your own judgment.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "faceId1",
                "Description": "faceId of one face, comes from Face - Detect."
            }, {
                "Fields": "faceId2",
                "Description": "faceId of another face, comes from Face - Detect."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Add a Face to a Face List
			Description: Add a face to a face list. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face, and persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect.

The persistedFaceId of face list is used in Face List - Delete a Face from a Face List to remove face from a face list, or the output JSON of Face - Find Similar
JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.
The given rectangle specifies both face location and face size at the same time. There is no guarantee of correct result if you are using rectangle which are not returned from Face - Detect.
Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in Face - Find Similar. Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.

Concurrency is supported in adding or deleting faces against different face lists. Operations on a same face list will be processed sequentially.

A face list can have a maximum of 1000 faces.
		*/
    self.addAFaceToAFaceList = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Add a Face to a Face List",
            "path": "face/v1.0/facelists/{faceListId}/persistedFaces",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395250",
            "id": "563879b61984550f30395250",
            "description": "Add a face to a face list. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face, and persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "url",
                "Description": "Image url. Image file size should between 1KB to 4MB. Only one face is allowed per image."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "userData",
                "description": "User-specified data for any purpose. The	maximum length is 1KB.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "targetFace",
                "description": "A face rectangle to specify the target face to be added into the face list, in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". No targetFace means to detect the only face in the entire image.",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Create a Face List
			Description: Create an empty face list with user-specified faceListId, name and an optional userData. Up to 64 face lists are allowed to exist in one subscription.

Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in Face - Find Similar. Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.

A face list can have a maximum of 1000 faces.
		*/
    self.createAFaceList = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Create a Face List",
            "path": "face/v1.0/facelists/{faceListId}",
            "method": "PUT",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524b",
            "id": "563879b61984550f3039524b",
            "description": "Create an empty face list with user-specified faceListId, name and an optional userData. Up to 64 face lists are allowed to exist in one subscription.\
            Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in Face - Find Similar. Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.\
            A face list can have a maximum of 1000 faces.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "name",
                "Description": "Name of the created face list, maximum length is 128."
            }, {
                "Fields": "userData",
                "Description": "Optional user defined data for the face list. Length should not exceed 16KB."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.\n	",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Delete a Face from a Face List
			Description: Delete an existing face from a face list (given by a persisitedFaceId and a faceListId). Persisted image related to the face will also be deleted.

Concurrency is supported in adding or deleting faces against different face lists. Operations on a same face list will be processed sequentially.
		*/
    self.deleteAFaceFromAFaceList = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete a Face from a Face List",
            "path": "face/v1.0/facelists/{faceListId}/persistedFaces/{persistedFaceId}",
            "method": "DELETE",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395251",
            "id": "563879b61984550f30395251",
            "description": "Delete an existing face from a face list (given by a persisitedFaceId and a faceListId). Persisted image related to the face will also be deleted.\
            Concurrency is supported in adding or deleting faces against different face lists. Operations on a same face list will be processed sequentially.",
            "serviceName": "Face",
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Delete a Face List
			Description: Delete an existing face list according to faceListId. Persisted face images in the face list will also be deleted.
		*/
    self.deleteAFaceList = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete a Face List",
            "path": "face/v1.0/facelists/{faceListId}",
            "method": "DELETE",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524f",
            "id": "563879b61984550f3039524f",
            "description": "Delete an existing face list according to faceListId. Persisted face images in the face list will also be deleted.",
            "serviceName": "Face",
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Get a Face List
			Description: Retrieve a face list's information, including faceListId, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in Face - Find Similar.
		*/
    self.getAFaceList = ({
        parameters
    }) => {

        const operation = {
            "name": "Get a Face List",
            "path": "face/v1.0/facelists/{faceListId}",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524c",
            "id": "563879b61984550f3039524c",
            "description": "Retrieve a face list's information, including faceListId, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in Face - Find Similar.",
            "serviceName": "Face",
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: List Face Lists
			Description: Retrieve information about all existing face lists. Only faceListId, name and userData will be returned. Try Face List - Get a Face List to retrieve face information inside faceList.
		*/
    self.listFaceLists = () => {

        const operation = {
            "name": "List Face Lists",
            "path": "face/v1.0/facelists",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524d",
            "id": "563879b61984550f3039524d",
            "description": "Retrieve information about all existing face lists. Only faceListId, name and userData will be returned. Try Face List - Get a Face List to retrieve face information inside faceList.",
            "serviceName": "Face",
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint
        })

    };
    /**
			Name: Face: Update a Face List
			Description: Update information of a face list, including name and userData. Face List simply represents a list of persisted faces, and could be treated as a searchable data source in Face - Find Similar.
		*/
    self.updateAFaceList = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Update a Face List",
            "path": "face/v1.0/facelists/{faceListId}",
            "method": "PATCH",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524e",
            "id": "563879b61984550f3039524e",
            "description": "Update information of a face list, including name and userData. Face List simply represents a list of persisted faces, and could be treated as a searchable data source in Face - Find Similar.",
            "serviceName": "Face",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                ],
                "required": false,
                "typeName": "string"
            }],
            "requestBody": [{
                "Fields": "name",
                "Description": "Name of the face list, maximum length is 128"
            }, {
                "Fields": "userData",
                "Description": "Optional user defined data for the face list. Length should not exceed 16KB"
            }],
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Add a Person Face
			Description:Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face and this persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect.

The persistedFaceId of person is used in Person - Delete a Person Face to remove a face from a person.
Each person has a maximum of 248 faces.
JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.
The given rectangle specifies both face location and face size at the same time. There is no guarantee of correct result if you are using rectangle which is not returned from Face - Detect.
Concurrency is supported in adding or deleting faces against different persons. Operations on a same person will be processed sequentially.
		*/
    self.addAPersonFace = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Add a Person Face",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}/persistedFaces",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523b",
            "id": "563879b61984550f3039523b",
            "description": "Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face and this persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "url",
                "Description": "Face image URL. Valid image size is from 1KB to 4MB. Only one face is allowed per image."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json",
                    "application/octet-stream",
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Target person that the face is added to.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "userData",
                "description": "User-specified data for any purpose. The maximum length is 1KB. ",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "targetFace",
                "description": "A face rectangle to specify the target face to be added to a person, in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". No targetFace means to detect the only face in the entire image. ",
                "value": null,
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Create a Person
			Description: Create a new person in a specified person group. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person. 

The number of persons has a subscription level limit and a person group level limit. Free tier subscriptions have a limit of 1,000 persons per Person Group and 1,000 persons total per subscription. The S0 tier subscriptions have these limits: 10,000 Persons per Person Group, 100M Persons total and 1M Person Groups per subscription.
		*/
    self.createAPerson = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Create a Person",
            "path": "face/v1.0/persongroups/{personGroupId}/persons",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523c",
            "id": "563879b61984550f3039523c",
            "description": "Create a new person in a specified person group. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person. \
            The number of persons has a subscription level limit and a person group level limit. Free tier subscriptions have a limit of 1,000 persons per Person Group and 1,000 persons total per subscription. The S0 tier subscriptions have these limits: 10,000 Persons per Person Group, 100M Persons total and 1M Person Groups per subscription.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "name",
                "Description": "Display name of the target person. The maximum length is 128."
            }, {
                "Fields": "userData",
                "Description": "Optional fields for user-provided data attached to a person. Size limit is 16KB."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Delete a Person
			Description: Delete an existing person from a person group. Persisted face images of the person will also be deleted.
		*/
    self.deleteAPerson = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete a Person",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}",
            "method": "DELETE",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523d",
            "id": "563879b61984550f3039523d",
            "description": "Delete an existing person from a person group. Persisted face images of the person will also be deleted.",
            "serviceName": "Face",
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "The target personId to delete.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Delete a Person Face
			Description: 
  Delete a face from a person. Relative image for the persisted face will also be deleted.
  <h4>Http Method</h4>
  DELETE

			Example Parameters: {
			"personGroupId": null,
			"personId": null,
			"persistedFaceId": null
		}
		*/
    self.deleteAPersonFace = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete a Person Face",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}",
            "method": "DELETE",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523e",
            "id": "563879b61984550f3039523e",
            "description": "\n	Delete a face from a person. Relative image for the persisted face will also be deleted.\n	<h4>Http Method</h4>\n	DELETE\n",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Belonging person ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "The face to remove. This persisted face ID is returned from <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b\">Person - Add a Person Face</a>.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Get a Person
			Description: Retrieve a person's information, including registered persisted faces, name and userData.
		*/
    self.getAPerson = ({
        parameters
    }) => {

        const operation = {
            "name": "Get a Person",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523f",
            "id": "563879b61984550f3039523f",
            "description": "Retrieve a person's information, including registered persisted faces, name and userData.",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "The target person ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Get a Person Face
			Description: Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).
		*/
    self.getAPersonFace = ({
        parameters
    }) => {

        const operation = {
            "name": "Get a Person Face",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395240",
            "id": "563879b61984550f30395240",
            "description": "Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "The target person ID the face belongs to.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "The target face ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: List Persons in a Person Group
			Description: List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).

Optional string parameter "start" and int parameter "top" are adopted to specify the starting point and total number of persons to return. All of the persons are stored in alphabetical order of personId. And the list starting point is defined as the first person whose personId is greater than the "start". Beginning from this starting point, this API returns the first "top" persons.
Defaults to return the first 1,000 persons, where the value of "start" is empty and "top" is 1,000. Empty array returned indicates that there is no person whose personId is lager than the "start". E.g., given two persons: "first_person" and "second_person", these two persons are returned with default parameter, "second_person" is returned if specify "first_person" as "start", and if specify "second_person" as "start", empty array is returned.
The last personId returned by current call can be used as the "start" of the next call to continuously list the persons.
		*/
    self.listPersonsInAPersonGroup = ({
        parameters
    }) => {

        const operation = {
            "name": "List Persons in a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}/persons",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395241",
            "id": "563879b61984550f30395241",
            "description": "List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "Target person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "start",
                "description": "List persons from the least personId greater than the \"start\". It contains no more than 64 characters. Default is empty.",
                "value": "",
                "required": false,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "top",
                "description": "The number of persons to list, ranging in [1, 1000]. Default is 1000.",
                "value": 1000,
                "required": false,
                "type": "routeParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Update a Person
			Description: Update name or userData of a person.
		*/
    self.updateAPerson = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Update a Person",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}",
            "method": "PATCH",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395242",
            "id": "563879b61984550f30395242",
            "description": "Update name or userData of a person.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "name",
                "Description": "Target person's display name. Maximum length is 128."
            }, {
                "Fields": "userData",
                "Description": "User-provided data attached to the person. Maximum length is 16KB."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json"
                ],
                "required": false,
                "typeName": "string"
            }],         
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Target person's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Update a Person Face
			Description: Update a person persisted face's userData field.
		*/
    self.updateAPersonFace = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Update a Person Face",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}",
            "method": "PATCH",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395243",
            "id": "563879b61984550f30395243",
            "description": "Update a person persisted face's userData field.",
            "serviceName": "Face",
            "requestBody": [{
                "name": "userData",
                "description":  "Optional. Attach user data to person's face. The size limit is 1KB."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Target person's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "Target face's ID.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Create a Person Group
			Description: Create a new person group with specified personGroupId, name and user-provided userData. 

A person group is one of the most important parameters for the Face - Identify API. The Identify searches person faces in a specified person group.
		*/
    self.createAPersonGroup = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Create a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}",
            "method": "PUT",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395244",
            "id": "563879b61984550f30395244",
            "description": "Create a new person group with specified personGroupId, name and user-provided userData.\
            A person group is one of the most important parameters for the Face - Identify API. The Identify searches person faces in a specified person group.",
            "serviceName": "Face",
            "requestBody": [{
                "name": "name",
                "description": "Person group display name. The maximum length is 128."
            }, {
                "name": "userData",
                "description": "Optional. User-provided data attached to the person group. The size limit is 16KB."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "personGroupId",
                "description": "User-provided person group ID as a string. The valid characters include numbers, english letters in lower case, '-' and '_'. The maximum length of the personGroupId is 64.\n	",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };
    /**
			Name: Face: Delete a Person Group
			Description: Delete an existing person group. Persisted face images of all people in the person group will also be deleted.


		*/
    self.deleteAPersonGroup = ({
        parameters
    }) => {

        const operation = {
            "name": "Delete a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}",
            "method": "DELETE",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395245",
            "id": "563879b61984550f30395245",
            "description": "Delete an existing person group. Persisted face images of all people in the person group will also be deleted.",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "The ID of the person group to be deleted.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Get a Person Group
			Description: Retrieve the information of a person group, including its name and userData. This API returns person group information only, use Person - List Persons in a Person Group instead to retrieve person information under the person group.
		*/
    self.getAPersonGroup = ({
        parameters
    }) => {

        const operation = {
            "name": "Get a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395246",
            "id": "563879b61984550f30395246",
            "description": "Retrieve the information of a person group, including its name and userData. This API returns person group information only, use Person - List Persons in a Person Group instead to retrieve person information under the person group.",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "ID of the target person group.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Get Person Group Training Status
			Description: Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the Person Group - Train Person Group API. The training will process for a while on the server side.
		*/
    self.getPersonGroupTrainingStatus = ({
        parameters
    }) => {

        const operation = {
            "name": "Get Person Group Training Status",
            "path": "face/v1.0/persongroups/{personGroupId}/training",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395247",
            "id": "563879b61984550f30395247",
            "description": "Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the Person Group - Train Person Group API. The training will process for a while on the server side.",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "personGroupId of target person group.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: List Person Groups
			Description: List person groups and their information.

Optional string parameter "start" and int parameter "top" are adopted to specify the starting point and total number of person groups to return. All of the person groups are stored in alphabetical order of personGroupId. And the list starting point is defined as the first person group whose personGroupId is greater than the "start". Beginning from this starting point, this API returns the first "top" person groups.
Defaults to return the first 1,000 person groups, where the value of "start" is empty and "top" is 1,000. Empty array returned indicates that there is no person group whose personGroupId is lager than the "start". E.g., given two person groups: "first_group" and "second_group", these two groups are returned with default parameter, "second_group" is returned if specify "first_group" as "start", and if specify "second_group" as "start", empty array is returned.
The last personGroupId returned by current call can be used as the "start" of the next call to continuously list the person groups.
		*/
    self.listPersonGroups = ({
        parameters
    }) => {

        const operation = {
            "name": "List Person Groups",
            "path": "face/v1.0/persongroups",
            "method": "GET",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395248",
            "id": "563879b61984550f30395248",
            "description": "List person groups and their information.\
            Optional string parameter \"start\" and int parameter \"top\" are adopted to specify the starting point and total number of person groups to return. All of the person groups are stored in alphabetical order of personGroupId. And the list starting point is defined as the first person group whose personGroupId is greater than the \"start\". Beginning from this starting point, this API returns the first \"top\" person groups.\
            Defaults to return the first 1,000 person groups, where the value of \"start\" is empty and \"top\" is 1,000. Empty array returned indicates that there is no person group whose personGroupId is lager than the \"start\". E.g., given two person groups: \"first_group\" and \"second_group\", these two groups are returned with default parameter, \"second_group\" is returned if specify \"first_group\" as \"start\", and if specify \"second_group\" as \"start\", empty array is returned.\
            The last personGroupId returned by current call can be used as the \"start\" of the next call to continuously list the person groups.",
            "serviceName": "Face",
            "parameters": [{
                "name": "start",
                "description": "List person groups from the least personGroupId greater than the \"start\". It contains no more than 64 characters. Default is empty.",
                "value": "",
                "required": false,
                "type": "queryStringParam",
                "typeName": "string"
            }, {
                "name": "top",
                "description": "The number of person groups to list, ranging in [1, 1000]. Default is 1000.",
                "value": 1000,
                "required": false,
                "type": "queryStringParam",
                "typeName": "number"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Train Person Group
			Description: Queue a person group training task, the training task may not be started immediately. 

Any updates to person group will not take effect in Face - Identify until person group is successfully trained. You can query the training status by calling Person Group - Get Person Group Training Status API.
		*/
    self.trainPersonGroup = ({
        parameters
    }) => {

        const operation = {
            "name": "Train Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}/train",
            "method": "POST",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395249",
            "id": "563879b61984550f30395249",
            "description": "Queue a person group training task, the training task may not be started immediately. \
            Any updates to person group will not take effect in Face - Identify until person group is successfully trained. You can query the training status by calling Person Group - Get Person Group Training Status API.",
            "serviceName": "Face",
            "parameters": [{
                "name": "personGroupId",
                "description": "Target person group to be trained.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters
        })

    };
    /**
			Name: Face: Update a Person Group
			Description: Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
		*/
    self.updateAPersonGroup = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Update a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}",
            "method": "PATCH",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524a",
            "id": "563879b61984550f3039524a",
            "description": "Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "name",
                "Description": "Person group display name. The maximum length is 128."
            }, {
                "Fields": "userData",
                "Description": "User-provided data attached to the person group. The size limit is 16KB."
            }],
            "headers": [{
                "name": "Content-Type",
                "description": "Media type of the body sent to the API.",
                "options": [
                    "application/json"
                ],
                "required": false,
                "typeName": "string"
            }],
            "parameters": [{
                "name": "personGroupId",
                "description": "personGroupId of the person group to be updated.",
                "value": null,
                "required": true,
                "type": "routeParam",
                "typeName": "string"
            }]
        };

        return makeRequest(self, {
            operation: operation,
            endpoint: endpoint,
            parameters: parameters,
            headers: headers,
            body: body
        })

    };

    return self;
};

module.exports = face;