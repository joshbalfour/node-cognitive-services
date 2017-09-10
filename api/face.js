const {
    makeRequest,
    verify
} = require('../lib/api');

const face = ({
    API_KEY, 
    endpoint
}) => {

    let self = this;

    /**
			Name: Face: Detect
			Description: Detect human faces in an image and returns face locations, and optionally with face ID, landmarks, and attributes. 

  <ul>
  <li>Optional parameters for returning face ID, landmarks, and attributes. Attributes include age, gender, smile intensity, 
  facial hair and head-pose. Face ID is for other APIs use including 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a>, 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a">Face - Verify</a>, and 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>. 
  The face ID will expire in 24 hours after detection call.</li>
  <ul>
  <li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
  <li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
  <li>A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.</li>
  <li>Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.</li>
  <li>Attributes (age, gender, headPose, smile and facialHair, and glasses) are still experimental and may not be very accurate. HeadPose's pitch value is reserved as 0.</li>
  </ul>
  <h4>Http Method</h4>
  POST
			Example Parameters: {
			"returnFaceId": "true",
			"returnFaceLandmarks": "false",
			"returnFaceAttributes": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395236",
            "id": "563879b61984550f30395236",
            "description": "Detect human faces in an image and returns face locations, and optionally with face ID, landmarks, and attributes. \n\n	<ul>\n	<li>Optional parameters for returning face ID, landmarks, and attributes. Attributes include age, gender, smile intensity, \n	facial hair and head-pose. Face ID is for other APIs use including \n	<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239\">Face - Identify</a>, \n	<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a\">Face - Verify</a>, and \n	<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237\">Face - Find Similar</a>. \n	The face ID will expire in 24 hours after detection call.</li>\n	<ul>\n	<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>\n	<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>\n	<li>A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.</li>\n	<li>Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.</li>\n	<li>Attributes (age, gender, headPose, smile and facialHair, and glasses) are still experimental and may not be very accurate. HeadPose's pitch value is reserved as 0.</li>\n	</ul>\n	<h4>Http Method</h4>\n	POST",
            "serviceName": "Face",
            "requestBody": [{
                "Fields": "url",
                "Description": "URL of input image."
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
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
                "kind": 2,
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
                "kind": 2,
                "typeName": "boolean"
            }, {
                "name": "returnFaceAttributes",
                "description": "Analyze and return the one or more specified face attributes in the comma-separated string like \"returnFaceAttributes=age,gender\".Supported face attributes include age, gender, headPose, smile, facialHair, and glasses. Note that each face attribute analysis has additional computational and time cost.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Find Similar
			Description: 
  Find similar - looking faces for a query face from a list of candidate faces (given by a face list or a face ID array) and return similar face IDs ranked by similarity.
  The candidate face list has a limitation of 1000 faces.
  <h4>Http Method</h4>
  POST

			Example Parameters: {}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395237",
            "id": "563879b61984550f30395237",
            "description": "\n	Find similar - looking faces for a query face from a list of candidate faces (given by a face list or a face ID array) and return similar face IDs ranked by similarity.\n	The candidate face list has a limitation of 1000 faces.\n	<h4>Http Method</h4>\n	POST\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Group
			Description: 
  Divide candidate faces into groups based on face similarity.
  <br/>
  <ul>
  <li>The output is one or more disjointed face groups and a messyGroup. A face group contains faces
  that have similar looking, often of the same person. Face groups are ranked by
  group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
  </li>
  <li>MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces
  found their counterparts.</li>
  <li>Group API needs at least 2 candidate faces and 1000 at most. We suggest to try <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a">Face - Verify</a> when you only have 2 candidate faces.</li>
  </ul>
  <h4>Http Method</h4>
  POST

			Example Parameters: {}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395238",
            "id": "563879b61984550f30395238",
            "description": "\n	Divide candidate faces into groups based on face similarity.\n	<br/>\n	<ul>\n	<li>The output is one or more disjointed face groups and a messyGroup. A face group contains faces\n	that have similar looking, often of the same person. Face groups are ranked by\n	group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.\n	</li>\n	<li>MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces\n	found their counterparts.</li>\n	<li>Group API needs at least 2 candidate faces and 1000 at most. We suggest to try <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a\">Face - Verify</a> when you only have 2 candidate faces.</li>\n	</ul>\n	<h4>Http Method</h4>\n	POST\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Identify
			Description: 
  Identify unknown faces from an person group.
  <br/><br/>
  For each face in the faceIds array,
  Face Identify will compute similarity for the face among all faces within a person group (given by personGroupId),
  and returns candidate person(s) for that face ranked by similarity confidence.
  The person group should be trained to make it ready for identify. See more in <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249">Person Group - Train Person Group</a>.
  <br/><br/>
  Remarks:
  <ul>
  <li>The algorithm allows more than one face to be identified, but the no more than 10 faces.</li>
  <li>Each person in the person group could have more than one face, but no more than 64 faces.</li>
  <li>Identification works well for frontal faces and near-frontal faces.</li>
  <li>Number of candidates returned is restricted by maxNumOfCandidatesReturned. If no person is identified, the candidate returned will be an empty array.</li>
  <li>Try <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a> when you need to identify similar faces from a face list instead of a person group.</li>
  </ul>
  <h4>Http Method</h4>
  POST

			Example Parameters: {}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395239",
            "id": "563879b61984550f30395239",
            "description": "\n	Identify unknown faces from an person group.\n	<br/><br/>\n	For each face in the faceIds array,\n	Face Identify will compute similarity for the face among all faces within a person group (given by personGroupId),\n	and returns candidate person(s) for that face ranked by similarity confidence.\n	The person group should be trained to make it ready for identify. See more in <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249\">Person Group - Train Person Group</a>.\n	<br/><br/>\n	Remarks:\n	<ul>\n	<li>The algorithm allows more than one face to be identified, but the no more than 10 faces.</li>\n	<li>Each person in the person group could have more than one face, but no more than 64 faces.</li>\n	<li>Identification works well for frontal faces and near-frontal faces.</li>\n	<li>Number of candidates returned is restricted by maxNumOfCandidatesReturned. If no person is identified, the candidate returned will be an empty array.</li>\n	<li>Try <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237\">Face - Find Similar</a> when you need to identify similar faces from a face list instead of a person group.</li>\n	</ul>\n	<h4>Http Method</h4>\n	POST\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Verify
			Description: 
  Verify whether two faces belong to a same person.
  <br/><br/>
  Remarks:
  <ul>
  <li>Verify works well for frontal and near-frontal faces. </li>
  <li>For the scenarios that are sensitive to accuracy please use with own judgment.</li>
  </ul>
  <h4>Http Method</h4>
  POST

			Example Parameters: {}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523a",
            "id": "563879b61984550f3039523a",
            "description": "\n	Verify whether two faces belong to a same person.\n	<br/><br/>\n	Remarks:\n	<ul>\n	<li>Verify works well for frontal and near-frontal faces. </li>\n	<li>For the scenarios that are sensitive to accuracy please use with own judgment.</li>\n	</ul>\n	<h4>Http Method</h4>\n	POST\n",
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
            }],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Add a Face to a Face List
			Description: <p>Add a face to a face list. The input face is specified as an image with a targetFace rectangle.
        It returns an persistedFaceId representing the added face, and persistedFaceId will not expire.
        <ul>
<li>The persistedFaceId will be used in output JSON of
        <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>, 
  or in <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251">Face List - Delete a Face from a Face List</a> to remove face from a face list.</li>
<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> 
<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236">Face - Detect</a>.  </li> 
</ul>
<p>
Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>. 
  Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.</p>
        <p>
  A face list can have a maximum of 1000 faces.
</p>
  <h4>Http Method</h4>
  POST
			Example Parameters: {
			"faceListId": null,
			"userData": null,
			"targetFace": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395250",
            "id": "563879b61984550f30395250",
            "description": "<p>Add a face to a face list. The input face is specified as an image with a targetFace rectangle.\n				It returns an persistedFaceId representing the added face, and persistedFaceId will not expire.\n				<ul>\n<li>The persistedFaceId will be used in output JSON of\n				<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237\">Face - Find Similar</a>, \n	or in <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251\">Face List - Delete a Face from a Face List</a> to remove face from a face list.</li>\n<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>\n<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>\n<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> \n<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236\">Face - Detect</a>.	</li> \n</ul>\n<p>\nFace list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in \n	<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237\">Face - Find Similar</a>. \n	Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.</p>\n				<p>\n	A face list can have a maximum of 1000 faces.\n</p>\n	<h4>Http Method</h4>\n	POST",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],           
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "userData",
                "description": "User-specified data for any purpose. The	maximum length is 1KB.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "targetFace",
                "description": "A face rectangle to specify the target face to be added into the face list, in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". No targetFace means to detect the only face in the entire image.",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Create a Face List
			Description: 
        <p>Create an empty face list with user-specified face list ID, name and an optional user-data. 64 face lists are allowed to exist in one subscription.</p>
<p>
Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>. 
  Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.
</p>
<p>A face list can have a maximum of 1000 faces.</p>
 <h4>Http Method</h4>
  PUT

			Example Parameters: {
			"faceListId": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524b",
            "id": "563879b61984550f3039524b",
            "description": "\n				<p>Create an empty face list with user-specified face list ID, name and an optional user-data. 64 face lists are allowed to exist in one subscription.</p>\n<p>\nFace list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in \n	<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237\">Face - Find Similar</a>. \n	Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.\n</p>\n<p>A face list can have a maximum of 1000 faces.</p>\n <h4>Http Method</h4>\n	PUT\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "faceListId",
                "description": "\n		Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.\n	",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Delete a Face from a Face List
			Description: 
  Delete an existing face from a face list (given by a face ID and a face list ID). Persisted image related to the face will also be deleted.
  <h4>Http Method</h4>
  DELETE

			Example Parameters: {
			"faceListId": null,
			"persistedFaceId": null
		}
		*/
    self.deleteAFaceFromAFaceList = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Delete a Face from a Face List",
            "path": "face/v1.0/facelists/{faceListId}/persistedFaces/{persistedFaceId}",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395251",
            "id": "563879b61984550f30395251",
            "description": "\n	Delete an existing face from a face list (given by a face ID and a face list ID). Persisted image related to the face will also be deleted.\n	<h4>Http Method</h4>\n	DELETE\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Delete a Face List
			Description: 
  Delete an existing face list according to face list ID. Persisted face images in the face list will also be deleted.
  <h4>Http Method</h4>
  DELETE

			Example Parameters: {
			"faceListId": null
		}
		*/
    self.deleteAFaceList = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Delete a Face List",
            "path": "face/v1.0/facelists/{faceListId}",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524f",
            "id": "563879b61984550f3039524f",
            "description": "\n	Delete an existing face list according to face list ID. Persisted face images in the face list will also be deleted.\n	<h4>Http Method</h4>\n	DELETE\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Get a Face List
			Description: 
  Retrieve a face list's information, including face list ID, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>.
  <h4>Http Method</h4>
  GET

			Example Parameters: {
			"faceListId": null
		}
		*/
    self.getAFaceList = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Get a Face List",
            "path": "face/v1.0/facelists/{faceListId}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524c",
            "id": "563879b61984550f3039524c",
            "description": "\n	Retrieve a face list's information, including face list ID, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in\n	<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237\">Face - Find Similar</a>.\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "faceListId",
                "description": "Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: List Face Lists
			Description: 
  Retrieve information about all existing face lists. Only face list ID, name and user data will be returned. Try <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c">Face List - Get a Face List</a> to retrieve face information inside faceList.
  <h4>Http Method</h4>
  GET

			Example Parameters: {}
		*/
    self.listFaceLists = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "List Face Lists",
            "path": "face/v1.0/facelists",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524d",
            "id": "563879b61984550f3039524d",
            "description": "\n	Retrieve information about all existing face lists. Only face list ID, name and user data will be returned. Try <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c\">Face List - Get a Face List</a> to retrieve face information inside faceList.\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": []
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Update a Face List
			Description: 
  Update face changes to a face list. Face list simply represents a list of faces, and could be treat as a searchable data source in
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>.
  <h4>Http Method</h4>
  PATCH

			Example Parameters: {
			"faceListId": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524e",
            "id": "563879b61984550f3039524e",
            "description": "\n	Update face changes to a face list. Face list simply represents a list of faces, and could be treat as a searchable data source in\n	<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237\">Face - Find Similar</a>.\n	<h4>Http Method</h4>\n	PATCH\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
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
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Add a Person Face
			Description: <p>Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle.
        It returns an persistedFaceId representing the added face and this persistedFaceId will not expire. </p>
<ul>
<li>The persistedFaceId is only used in
        <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a>
and 
<a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e">Person - Delete a Person Face</a></li>
<li>Each person has a maximum of 248 faces.</li>
<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> 
<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236">Face - Detect</a>.  </li> 
</ul>
  <h4>Http Method</h4>
  POST

			Example Parameters: {
			"personGroupId": null,
			"personId": null,
			"userData": null,
			"targetFace": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523b",
            "id": "563879b61984550f3039523b",
            "description": "<p>Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle.\n				It returns an persistedFaceId representing the added face and this persistedFaceId will not expire. </p>\n<ul>\n<li>The persistedFaceId is only used in\n				<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239\">Face - Identify</a>\nand \n<a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e\">Person - Delete a Person Face</a></li>\n<li>Each person has a maximum of 248 faces.</li>\n<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>\n<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>\n<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> \n<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236\">Face - Detect</a>.	</li> \n</ul>\n	<h4>Http Method</h4>\n	POST\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Target person that the face is added to.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "userData",
                "description": "User-specified data for any purpose. The maximum length is 1KB. ",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "targetFace",
                "description": "A face rectangle to specify the target face to be added to a person, in the format of \"targetFace=left,top,width,height\". E.g. \"targetFace=10,10,100,100\". No targetFace means to detect the only face in the entire image. ",
                "value": null,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Create a Person
			Description: 
  Create a new person in a specified person group for identify. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person.
  <br/><br/>
  The number of persons has a subscription limit. For free subscription, the limit is 1000. 
  <h4>Http Method</h4>
  POST

			Example Parameters: {
			"personGroupId": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523c",
            "id": "563879b61984550f3039523c",
            "description": "\n	Create a new person in a specified person group for identify. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person.\n	<br/><br/>\n	The number of persons has a subscription limit. For free subscription, the limit is 1000. \n	<h4>Http Method</h4>\n	POST\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };


        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Delete a Person
			Description: 
  Delete an existing person from a person group. Persisted face images of the person will also be deleted.
  <h4>Http Method</h4>
  DELETE

			Example Parameters: {
			"personGroupId": null,
			"personId": null
		}
		*/
    self.deleteAPerson = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Delete a Person",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523d",
            "id": "563879b61984550f3039523d",
            "description": "\n	Delete an existing person from a person group. Persisted face images of the person will also be deleted.\n	<h4>Http Method</h4>\n	DELETE\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "The target personId to delete.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

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
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Delete a Person Face",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523e",
            "id": "563879b61984550f3039523e",
            "description": "\n	Delete a face from a person. Relative image for the persisted face will also be deleted.\n	<h4>Http Method</h4>\n	DELETE\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Belonging person ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "The face to remove. This persisted face ID is returned from <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b\">Person - Add a Person Face</a>.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Get a Person
			Description: 
  Retrieve a person's information, including registered faces, name and userData.
  <h4>Http Method</h4>
  GET

			Example Parameters: {
			"personGroupId": null,
			"personId": null
		}
		*/
    self.getAPerson = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Get a Person",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039523f",
            "id": "563879b61984550f3039523f",
            "description": "\n	Retrieve a person's information, including registered faces, name and userData.\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "The target person ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Get a Person Face
			Description: 
  Retrieve information about a face (specified by face ID, person ID and its belonging person group ID).
  <h4>Http Method</h4>
  GET

			Example Parameters: {
			"personGroupId": null,
			"personId": null,
			"persistedFaceId": null
		}
		*/
    self.getAPersonFace = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Get a Person Face",
            "path": "face/v1.0/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395240",
            "id": "563879b61984550f30395240",
            "description": "\n	Retrieve information about a face (specified by face ID, person ID and its belonging person group ID).\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "The target person ID the face belongs to.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "The target face ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: List Persons in a Person Group
			Description: 
  List all people in a person group, and retrieve person information (including person ID, name, user data and registered faces of the person).
  <h4>Http Method</h4>
  GET

			Example Parameters: {
			"personGroupId": null
		}
		*/
    self.listPersonsInAPersonGroup = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "List Persons in a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}/persons",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395241",
            "id": "563879b61984550f30395241",
            "description": "\n	List all people in a person group, and retrieve person information (including person ID, name, user data and registered faces of the person).\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "Target person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "start",
                "description": "List persons from the least personId greater than the \"start\". It contains no more than 64 characters. Default is empty.",
                "value": "",
                "options": [],
                "required": false,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "top",
                "description": "The number of persons to list, ranging in [1, 1000]. Default is 1000.",
                "value": 1000,
                "options": [],
                "required": false,
                "kind": 1,
                "typeName": "number"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Update a Person
			Description: 
  Update a person's name or userData field.
  <h4>Http Method</h4>
  PATCH

			Example Parameters: {
			"personGroupId": null,
			"personId": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395242",
            "id": "563879b61984550f30395242",
            "description": "\n	Update a person's name or userData field.\n	<h4>Http Method</h4>\n	PATCH\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],           
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Target person's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
            .then(() => {
                return makeRequest({
                    operation,
                    parameters,
                    body,
                    API_KEY,
                    endpoint,
                    headers
                })}
            );

    };
    /**
			Name: Face: Update a Person Face
			Description: 
  Update a person face's userData field.
  <h4>Http Method</h4>
  PATCH

			Example Parameters: {
			"personGroupId": null,
			"personId": null,
			"persistedFaceId": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395243",
            "id": "563879b61984550f30395243",
            "description": "\n	Update a person face's userData field.\n	<h4>Http Method</h4>\n	PATCH\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The target person's belonging person group's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "personId",
                "description": "Target person's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }, {
                "name": "persistedFaceId",
                "description": "Target face's ID.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };
    /**
			Name: Face: Create a Person Group
			Description: 
  Create a new person group with specified person group ID, name and user-provided data.
  <br/><br/>
  A person group is one of the most important parameters for the <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a> API. The Identify
  searches person faces in a specified person group.
  <h4>Http Method</h4>
  PUT

			Example Parameters: {
			"personGroupId": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395244",
            "id": "563879b61984550f30395244",
            "description": "\n	Create a new person group with specified person group ID, name and user-provided data.\n	<br/><br/>\n	A person group is one of the most important parameters for the <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239\">Face - Identify</a> API. The Identify\n	searches person faces in a specified person group.\n	<h4>Http Method</h4>\n	PUT\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "\n		User-provided person group ID as a string. The valid characters include numbers, english letters in lower case, '-' and '_'. The maximum length of the personGroupId is 64.\n	",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };
    /**
			Name: Face: Delete a Person Group
			Description: 
  Delete an existing person group. Persisted face images of all people in the person group will also be deleted.
  <h4>Http Method</h4>
  DELETE

			Example Parameters: {
			"personGroupId": null
		}
		*/
    self.deleteAPersonGroup = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Delete a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}",
            "method": "DELETE",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395245",
            "id": "563879b61984550f30395245",
            "description": "\n	Delete an existing person group. Persisted face images of all people in the person group will also be deleted.\n	<h4>Http Method</h4>\n	DELETE\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "The ID of the person group to be deleted.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };
    /**
			Name: Face: Get a Person Group
			Description: 
  Retrieve the information of a person group, including its name and userData. This API returns person group information only, use <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241">Person - List Persons in a Person Group</a> instead to retrieve person information under the person group.
  <h4>Http Method</h4>
  GET

			Example Parameters: {
			"personGroupId": null
		}
		*/
    self.getAPersonGroup = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Get a Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395246",
            "id": "563879b61984550f30395246",
            "description": "\n	Retrieve the information of a person group, including its name and userData. This API returns person group information only, use <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241\">Person - List Persons in a Person Group</a> instead to retrieve person information under the person group.\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "ID of the target person group.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };
    /**
			Name: Face: Get Person Group Training Status
			Description: 
  Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249">Person Group - Train Person Group</a> API. The training will process for a while on the server side..
  <h4>Http Method</h4>
  GET

			Example Parameters: {
			"personGroupId": null
		}
		*/
    self.getPersonGroupTrainingStatus = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "Get Person Group Training Status",
            "path": "face/v1.0/persongroups/{personGroupId}/training",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395247",
            "id": "563879b61984550f30395247",
            "description": "\n	Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249\">Person Group - Train Person Group</a> API. The training will process for a while on the server side..\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "personGroupId of target person group.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };
    /**
			Name: Face: List Person Groups
			Description: 
  List all person groups and their information.
  <h4>Http Method</h4>
  GET

			Example Parameters: {}
		*/
    self.listPersonGroups = ({
        parameters,
        headers
    }) => {

        const operation = {
            "name": "List Person Groups",
            "path": "face/v1.0/persongroups",
            "method": "GET",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395248",
            "id": "563879b61984550f30395248",
            "description": "\n	List all person groups and their information.\n	<h4>Http Method</h4>\n	GET\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "start",
                "description": "List person groups from the least personGroupId greater than the \"start\". It contains no more than 64 characters. Default is empty.",
                "value": "",
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "string"
            }, {
                "name": "top",
                "description": "The number of person groups to list, ranging in [1, 1000]. Default is 1000.",
                "value": 1000,
                "options": [],
                "required": false,
                "kind": 2,
                "typeName": "number"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };
    /**
			Name: Face: Train Person Group
			Description: 
  Queue a person group training task, the training task may not be started immediately.
  <br/><br/>
  Any updates to person group will not take effect in <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a> until person group is successfully trained.
  You can query the training status by calling <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395247">Person Group - Get Person Group Training Status</a> API.
  <h4>Http Method</h4>
  POST

			Example Parameters: {
			"personGroupId": null
		}
		*/
    self.trainPersonGroup = ({
        parameters,
        headers,
        body
    }) => {

        const operation = {
            "name": "Train Person Group",
            "path": "face/v1.0/persongroups/{personGroupId}/train",
            "method": "POST",
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f30395249",
            "id": "563879b61984550f30395249",
            "description": "\n	Queue a person group training task, the training task may not be started immediately.\n	<br/><br/>\n	Any updates to person group will not take effect in <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239\">Face - Identify</a> until person group is successfully trained.\n	You can query the training status by calling <a href=\"/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395247\">Person Group - Get Person Group Training Status</a> API.\n	<h4>Http Method</h4>\n	POST\n",
            "serviceName": "Face",
            "headers": [],
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "Target person group to be trained.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };
    /**
			Name: Face: Update a Person Group
			Description: 
  Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
  <h4>Http Method</h4>
  PATCH

			Example Parameters: {
			"personGroupId": null
		}
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
            "scheme": "https",
            "serviceId": "563879b61984550e40cbbe8d",
            "operationId": "563879b61984550f3039524a",
            "id": "563879b61984550f3039524a",
            "description": "\n	Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.\n	<h4>Http Method</h4>\n	PATCH\n",
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
            "endpoints": [
                "westus.api.cognitive.microsoft.com",
                "eastus2.api.cognitive.microsoft.com",
                "westcentralus.api.cognitive.microsoft.com",
                "westeurope.api.cognitive.microsoft.com",
                "southeastasia.api.cognitive.microsoft.com"
            ],
            "parameters": [{
                "name": "personGroupId",
                "description": "personGroupId of the person group to be updated.",
                "value": null,
                "options": [],
                "required": true,
                "kind": 1,
                "typeName": "string"
            }]
        };

        return verify(operation, parameters, headers, endpoint)
		.then(() => {
			return makeRequest({
				operation,
				parameters,
				body,
				API_KEY,
				endpoint,
				headers
			})}
		);

    };

    return self;
};

module.exports = face;