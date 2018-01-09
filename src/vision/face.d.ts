export class face {
	constructor(options: FaceOptions);

	/**
	 * Add a face to a face list. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face, and persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect. 
	 * The persistedFaceId of face list is used in Face List - Delete a Face from a Face List to remove face from a face list, or the output JSON of Face - Find Similar 
	 * JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
	 * The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
	 * Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.
	 * The given rectangle specifies both face location and face size at the same time. There is no guarantee of correct result if you are using rectangle which are not returned from Face - Detect. 
	 * Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in Face - Find Similar. Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.
	 * Concurrency is supported in adding or deleting faces against different face lists. Operations on a same face list will be processed sequentially. 
	 * A face list can have a maximum of 1000 faces. 
	 */
	addAFaceToAFaceList(options: AddAFaceToAFaceListOptions): Promise<AddAFaceToAFaceListReturnValue>;

	addAPersonFace(options: any): any;
	createAFaceList(options: any): any;
	createAPerson(options: any): any;
	createAPersonGroup(options: any): any;
	deleteAFaceFromAFaceList(options: any): any;
	deleteAFaceList(options: any): any;
	deleteAPerson(options: any): any;
	deleteAPersonFace(options: any): any;

	/**
	 * Delete an existing person group. Persisted face images of all people in the person group will also be deleted. 
	 */
	deleteAPersonGroup(options: DeleteAPersonGroupOptions): any;

	/**
	 * Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
	 * Optional parameters for returning faceId, landmarks, and attributes. Attributes include age, gender, smile intensity, facial hair, head pose, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise. faceId is for other APIs use including Face - Identify, Face - Verify, and Face - Find Similar. The faceId will expire 24 hours after detection call.
	 * JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
	 * The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
	 * A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.
	 * Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.
	 * Attributes (age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise) are still experimental and may not be very accurate. HeadPose's pitch value is a reserved field and will always return 0.
	 */
	detect(options: DetectOptions): Promise<DetectReturnValue>;

	/**
	 * Given query face's faceId, to search the similar-looking faces from a faceId array or a faceListId. faceId array contains the faces created by Face - Detect, which will expire 24 hours after creation. While "faceListId" is created by Face List - Create a Face List containing persistedFaceIds that will not expire. Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.
	 * Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. "matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces. 
	 */
	findSimilar(options: FindSimilarOptions): Promise<FindSimilarReturnValue>;

	/**
	 * Retrieve a face list's information, including faceListId, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in Face - Find Similar. 
	 */
	getAFaceList(options: GetAFaceListOptions): Promise<GetAFaceListReturnValue>;

	/**
	 * Retrieve a person's information, including registered persisted faces, name and userData. 
	 */
	getAPerson(options: GetAPersonOptions): Promise<GetAPersonReturnValue>;

	/**
	 * Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId). 
	 */
	getAPersonFace(options: GetAPersonFaceOptions): Promise<GetAPersonFaceReturnValue>;

	/**
	 * Retrieve the information of a person group, including its name and userData. This API returns person group information only, use Person - List Persons in a Person Group instead to retrieve person information under the person group. 
	 */
	getAPersonGroup(options: GetAPersonGroupOptions): Promise<GetAPersonGroupReturnValue>;

	/**
	 * Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the Person Group - Train Person Group API. The training will process for a while on the server side.. 
	 */
	getPersonGroupTrainingStatus(options: GetPersonGroupTrainingStatusOptions): Promise<GetPersonGroupTrainingStatusReturnValue>;

	/**
	 * Divide candidate faces into groups based on face similarity. 
	 * The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result. 
	 * MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.
	 * Group API needs at least 2 candidate faces and 1000 at most. We suggest to try Face - Verify when you only have 2 candidate faces.
	 */
	group(options: GroupOptions): Promise<GroupReturnValue>;

	/**
	 * Identify unknown faces from a person group. 
	 * For each face in the faceIds array, Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId), and returns candidate person(s) for that face ranked by similarity confidence. The person group should be trained to make it ready for identification. See more in Person Group - Train Person Group. 
	 * The algorithm allows more than one face to be identified independently at the same request, but the no more than 10 faces.
	 * Each person in the person group could have more than one face, but no more than 248 faces.
	 * Identification works well for frontal faces and near-frontal faces.
	 * Number of candidates returned is restricted by maxNumOfCandidatesReturned and confidenceThreshold. If no person is identified, the candidate returned will be an empty array.
	 * Try Face - Find Similar when you need to identify similar faces from a face list instead of a person group.
	 */
	identify(options: IdentifyOptions): Promise<IdentifyReturnValue>;

	/**
	 * Retrieve information about all existing face lists. Only faceListId, name and userData will be returned. Try Face List - Get a Face List to retrieve face information inside faceList. 
	 */
	listFaceLists(): ListFaceListsReturnValue;
	listPersonGroups(options: any): any;
	listPersonsInAPersonGroup(options: any): any;
	trainPersonGroup(options: any): any;
	updateAFaceList(options: any): any;
	updateAPerson(options: any): any;
	updateAPersonFace(options: any): any;
	updateAPersonGroup(options: any): any;

	/**
	 * Verify whether two faces belong to a same person or whether one face belongs to a person. 
	 * This API works well for frontal and near-frontal faces. 
	 * For the scenarios that are sensitive to accuracy please make your own judgment.
	 */
	verify(options: VerifyOptions): Promise<VerifyReturnValue>;
}

//#region Common Interfaces
export interface CommonHeaders {
	/**
	 * Media type of the body sent to the API. 
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface FaceOptions {
	//TODO
}
//#endregion

//#region addAFaceToAFaceList
export interface AddAFaceToAFaceListOptions {
	headers?: CommonHeaders	
}

export interface AddAFaceToAFaceListParameters {
	faceListId:string,
	userData?:string,
	targetFace?:string
}

export interface AddAFaceToAFaceListReturnValue {

}

//#endregion

//#region deleteAPersonGroup
export interface DeleteAPersonGroupOptions {
	headers?:DeleteAPersonGroupHeaders,
	parameters?:DeleteAPersonGroupParameters
}

export interface DeleteAPersonGroupHeaders {
	/**
	 * Subscription key which provides access to this API. Found in your Cognitive Services accounts. 
	 */
	"Ocp-Apim-Subscription-Key":string
}


export interface DeleteAPersonGroupParameters {
	/**
	 * The personGroupId of the person group to be deleted.
	 */
	personGroupId:string
}

//#endregion

//#region detect
export interface DetectOptions {
	body?: DetectBody,
	headers?: CommonHeaders,
	parameters?: DetectParameters
}

export interface DetectBody {
	/**
	 * URL of input image.
	 */
	url: string
}

export interface DetectParameters {

	/**
	 * Return faceIds of the detected faces or not. The default value is true.
	 */
	returnFaceId?: boolean,

	/**
	 * Return face landmarks of the detected faces or not. The default value is false.
	 */
	returnFaceLandmarks?: boolean,

	/**
	 * Analyze and return the one or more specified face attributes in the comma-separated string like "returnFaceAttributes=age,gender". Supported face attributes include age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise. Note that each face attribute analysis has additional computational and time cost.
	 */
	returnFaceAttributes?: string
}

export interface DetectReturnValue {
	faces: {
		/**
		 * Unique faceId of the detected face, created by detection API and it will expire 24 hours after detection call. To return this, it requires "returnFaceId" parameter to be true.
		 */
		faceId: string,

		/**
		 * A rectangle area for the face location on image.
		 */
		faceRectangle: {
			width: number,
			height: number,
			left: number,
			top: number
		},

		/**
		 * An array of 27-point face landmarks pointing to the important positions of face components. To return this, it requires "returnFaceLandmarks" parameter to be true.
		 */
		faceLandmarks: {

			pupilLeft: Coordinate,
			pupilRight: Coordinate,
			noseTip: Coordinate,
			mouthLeft: Coordinate,
			mouthRight: Coordinate,
			eyebrowLeftOuter: Coordinate,
			eyebrowLeftInner: Coordinate,
			eyeLeftOuter: Coordinate,
			eyeLeftTop: Coordinate,
			eyeLeftBottom: Coordinate,
			eyeLeftInner: Coordinate,
			eyebrowRightInner: Coordinate,
			eyebrowRightOuter: Coordinate,
			eyeRightInner: Coordinate,
			eyeRightTop: Coordinate,
			eyeRightBottom: Coordinate,
			eyeRightOuter: Coordinate,
			noseRootLeft: Coordinate,
			noseRootRight: Coordinate,
			noseLeftAlarTop: Coordinate,
			noseRightAlarTop: Coordinate,
			noseLeftAlarOutTip: Coordinate,
			noseRightAlarOutTip: Coordinate,
			upperLipTop: Coordinate,
			upperLipBottom: Coordinate,
			underLipTop: Coordinate,
			underLipBottom: Coordinate
		},
		faceAttributes: {
			/**
			 * an age number in years. 
			 */
			age: 71.0,

			/**
			 * male or female
			 */
			gender: string,

			/**
			 * smile intensity, a number between [0,1] 
			 */
			smile: number,

			/**
			 * consists of lengths of three facial hair areas: moustache, beard and sideburns. 
			 */
			facialHair: {
				moustache: number,
				beard: number,
				sideburns: number
			}
		},

		/**
		 * glasses type. Possible values are 'NoGlasses', 'ReadingGlasses', 'Sunglasses', 'SwimmingGoggles'. 
		 */
		glasses: string,

		/**
		 * 3-D roll/yew/pitch angles for face direction. Pitch value is a reserved field and will always return 0.
		 */
		headPose: {
			roll: number,
			yaw: number,
			pitch: number
		},

		/**
		 * emotions intensity expressed by the face, incluing anger, contempt, disgust, fear, happiness, neutral, sadness and surprise. 
		 */
		emotion: {
			anger: number,
			contempt: number,
			disgust: number,
			fear: number,
			happiness: number,
			neutral: number,
			sadness: number,
			surprise: number
		},

		/**
		 * return face features indicating whether the hair is visible, bald or not also including hair color if available.
		 */
		hair: {
			bald: number,
			invisible: boolean,
			hairColor: { color: string, confidence: number }[],
		},

		/**
		 * whether face area (eye, lip) is made-up or not. 
		 */
		makeup: {
			eyeMakeup: boolean,
			lipMakeup: boolean
		},

		/**
		 * whether face area (forehead, eye, mouth) is occluded or not. 
		 */
		occlusion: {
			foreheadOccluded: boolean,
			eyeOccluded: boolean,
			mouthOccluded: boolean
		},

		/**
		 * accessory types on face or around face area, including headwear, glasses and mask. Empty array means no accessories detected.
		 */
		accessories: { type: string, confidence: number }[],

		/**
		 * blur level of the face. The level include `Low`, `Medium` and `High`. Larger value means more blury the face is.
		 */
		blur: { blurLevel: string, value: number },

		/**
		 * exposure level of the face. The level include `GoodExposure`, `OverExposure` and `UnderExposure`.
		 */
		exposure: { exposureLevel: string, value: number },

		/**
		 * noise level of the face. The level include `Low`, `Medium` and `High`. Larger value means more noisy the face is.
		 */
		noise: {
			noiseLevel: string, value: number
		}
	}[]
}

export interface Coordinate { x: number, y: number }
//#endregion

//#region findSimilar
export interface FindSimilarOptions {
	body?: FindSimilarBody,
	headers?: CommonHeaders
}

export interface FindSimilarBody {
	/**
	 * faceId of the query face. User needs to call Face - Detect first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call.
	 */
	faceId: string,

	/**
	 * An array of candidate faceIds. All of them are created by Face - Detect and the faceIds will expire 24 hours after the detection call. The number of faceIds is limited to 1000. Parameter faceListId and faceIds should not be provided at the same time.
	 */
	faceIds: string[]

	/**
	 * An existing user-specified unique candidate face list, created in Face List - Create a Face List. Face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId and faceIds should not be provided at the same time.
	 */
	faceListId: string,

	/**
	 * The number of top similar faces returned. 
	 * The valid range is [1, 1000].It defaults to 20.
	 */
	maxNumOfCandidatesReturned?: number,

	/**
	 * Similar face searching mode. It can be "matchPerson" or "matchFace". It defaults to "matchPerson".
	 */
	mode?: string
}

export interface FindSimilarReturnValue {
	/**
	 * persistedFaceId of candidate face when find by faceListId. persistedFaceId in face list is persisted and will not expire. As showed in below response.
	 */
	persistedFaceId: string,

	/**
	 * faceId of candidate face when find by faceIds. faceId is created by Face - Detect and will expire 24 hours after the detection call. 
	 */
	faceId: string,

	/**
	 * Similarity confidence of the candidate face. The higher confidence, the more similar. Range between [0,1].
	 */
	confidence: number
}
//#endregion

//#region getAFaceList
export interface GetAFaceListOptions {
	headers?: GetAFaceListHeaders,
	parameters?: GetAFaceListParameters
}

export interface GetAFaceListHeaders {
	/**
	 * Subscription key which provides access to this API. Found in your Cognitive Services accounts. 
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface GetAFaceListParameters {
	/**
	 * Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	faceListId?: string
}

export interface GetAFaceListReturnValue {
	/**
	 * faceListId of the target face list.
	 */
	faceListId: string,

	/**
	 * Face list's display name.
	 */
	name: string,

	/**
	 * User-provided data attached to this face list.
	 */
	userData: string,

	/**
	 * Faces in the face list.
	 */
	persistedFaces: {
		persistedFaceId: string,
		userData: string
	}[]
}

//#endregion

//#region getAPerson
export interface GetAPersonOptions {
	headers?: GetAPersonHeaders,
	parameters?: GetAPersonParameters
}

export interface GetAPersonHeaders {
	/**
	 * Subscription key which provides access to this API. Found in your Cognitive Services accounts. 
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface GetAPersonParameters {
	/**
	 * Specifying the person group containing the target person.
	 */
	personGroupId: string,

	/**
	 * Specifying the target person.
	 */
	personId: string
}

export interface GetAPersonReturnValue {
	/**
	 * personId of the retrieved person.
	 */
	personId: string,

	/**
	 * persistedFaceIds of registered faces in the person. These persistedFaceIds are returned from Person - Add a Person Face, and will not expire.
	 */
	persistedFaceIds: string[],

	/**
	 * Person's display name.
	 */
	name: string,

	/**
	 * User-provided data attached to the person.
	 */
	userData: string
}
//#endregion

//#region getAPersonFace
export interface GetAPersonFaceOptions {
	headers?: GetAPersonFaceHeaders,
	parameters?: GetAPersonFaceParameters
}

export interface GetAPersonFaceHeaders {
	"Ocp-Apim-Subscription-Key": string
}

export interface GetAPersonFaceParameters {
	/**
	 * Specifying the person group containing the target person.
	 */
	personGroupId: string,

	/**
	 * Specifying the target person that the face belongs to.
	 */
	personId: string,

	/**
	 * The persistedFaceId of the target persisted face of the person.
	 */
	persistedFaceId: string
}

export interface GetAPersonFaceReturnValue {
	/**
	 * The persistedFaceId of the target face, which is persisted and will not expire. Different from faceId created by Face - Detect and will expire in 24 hours after the detection call.
	 */
	persistedFaceId: string,

	/**
	 * User-provided data attached to the face.
	 */
	userData: string
}
//#endregion

//#region getAPersonGroup
export interface GetAPersonGroupOptions {
	headers?: GetAPersonGroupHeaders,
	parameters?: GetAPersonGroupParameters
}

export interface GetAPersonGroupHeaders {
	"Ocp-Apim-Subscription-Key": string
}

export interface GetAPersonGroupParameters {
	/**
	 * personGroupId of the target person group.
	 */
	personGroupId: string,
}

export interface GetAPersonGroupReturnValue {
	/**
	 * Target personGroupId provided in request parameter.
	 */
	personGroupId: string,

	/**
	 * Person group's display name.
	 */
	name: string,

	/**
	 * User-provided data attached to this person group.
	 */
	userData: string
}
//#endregion

//#region getPersonGroupTrainingStatus
export interface GetPersonGroupTrainingStatusOptions {
	headers?: GetPersonGroupTrainingStatusHeaders,
	parameters?: GetPersonGroupTrainingStatusParameters
}

export interface GetPersonGroupTrainingStatusHeaders {
	"Ocp-Apim-Subscription-Key": string
}

export interface GetPersonGroupTrainingStatusParameters {
	/**
	 * personGroupId of target person group.
	 */
	personGroupId: string
}

export interface GetPersonGroupTrainingStatusReturnValue {
	/**
	 * Training status: notstarted, running, succeeded, failed. If the training process is waiting to perform, the status is notstarted. If the training is ongoing, the status is running. Status succeed means this person group is ready for Face - Identify. Status failed is often caused by no person or no persisted face exist in the person group. 
	 */
	status: string,

	/**
	 * A combined UTC date and time string that describes person group created time, delimited by the letter T. E.g. 1/3/2017 4:11:35 AM.
	 */
	createdDateTime: string,

	/**
	 * Person group last modify time in the UTC, could be null value when the person group is not successfully trained.
	 */
	lastActionDateTime: string,

	/**
	 * Show failure message when training failed (omitted when training succeed).
	 */
	message: string
}

//#endregion

//#region group
export interface GroupOptions {
	body?: GroupBody,
	headers?: CommonHeaders
}

export interface GroupBody {
	/**
	 * Array of candidate faceId created by Face - Detect. The maximum is 1000 faces.
	 */
	faceIds: string[]
}

export interface GroupReturnValue {

	/**
	 * A partition of the original faces based on face similarity. Groups are ranked by number of faces.
	 */
	groups: [
		string[],
		string[]
	],

	/**
	 * Face ids array of faces that cannot find any similar faces from original faces.
	 */
	messyGroup: string[]
}
//#endregion

//#region identify
export interface IdentifyOptions {
	body?: IdentifyBody,
	headers?: CommonHeaders
}

export interface IdentifyBody {
	/**
	 * personGroupId of the target person group, created by Person Group - Create a Person Group.
	 */
	personGroupId: string,

	/**
	 * Array of query faces faceIds, created by the Face - Detect. Each of the faces are identified independently. The valid number of faceIds is between [1, 10].
	 */
	faceIds: [string, string],

	/**
	 * The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1).
	 */
	maxNumOfCandidatesReturned?: number,

	/**
	 * Confidence threshold of identification, used to judge whether one face belong to one person. The range of confidenceThreshold is [0, 1] (default specified by algorithm).
	 */
	confidenceThreshold?: number
}

export interface IdentifyReturnValue {

}
//#endregion

//#region listFaceLists
export interface ListFaceListsHeaders {
	/**
	 * Subscription key which provides access to this API. Found in your Cognitive Services accounts. 
	 */
	"Ocp-Apim-Subscription-Key ": string
}

export interface ListFaceListsReturnValue {
	faceLists: {
		/**
		 * Face list ID
		 */
		faceListId: string,

		/**
		 * Face list name which user assigned
		 */
		name: string,

		/**
		 * User-provided data attached to the face list
		 */
		userData: string
	}[]
}
//#endregion

//#region verify
export interface VerifyOptions {
	body?: VerifyBody,
	headers?: CommonHeaders
}

export interface VerifyBody {
	/**
	 * faceId of one face, comes from Face - Detect.
	 */
	faceId1: string,

	/**
	 * faceId of another face, comes from Face - Detect.
	 */
	faceId2: string,

	/**
	 * faceId the face, comes from Face - Detect.
	 */
	faceId: string,

	/**
	 * Using existing personGroupId and personId for fast loading a specified person. personGroupId is created in Person Group - Create a Person Group.
	 */
	personId: string,

	/**
	 * Specify a certain person in a person group. personId is created in Person - Create a Person.
	 */
	personGroupId: string
}

export interface VerifyReturnValue {
	/**
	 * True if the two faces belong to the same person or the face belongs to the person, otherwise false.
	 */
	isIdentical: boolean,

	/**
	 * A number indicates the similarity confidence of whether two faces belong to the same person, or whether the face belongs to the person. By default, isIdentical is set to True if similarity confidence is greater than or equal to 0.5. This is useful for advanced users to override "isIdentical" and fine-tune the result on their own data.
	 */
	confidence: number
}
//#endregion