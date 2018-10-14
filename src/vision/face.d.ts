import { ContentTypeHeaders, CommonConstructorOptions, OcpApimSubscriptionKeyHeaders } from "..";

export class face {
	constructor(options:CommonConstructorOptions);

	/**
	 * Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
	 */
	detect(options: DetectOptions): Promise<DetectReturnValue>;

	/**
	 * Given query face's faceId, to search the similar-looking faces from a faceId array or a faceListId.
	 * faceId array contains the faces created by Face - Detect, which will expire 24 hours after creation.
	 * While "faceListId" is created by Face List - Create a Face List containing persistedFaceIds that will not expire.
	 * Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.
	 *
	 * Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds.
	 * It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds.
	 * "matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.
	 */
	findSimilar(options: FindSimilarOptions): Promise<FindSimilarReturnValue>;

	/**
	 * Divide candidate faces into groups based on face similarity.
	 *
	 * The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
	 * MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.
	 * Group API needs at least 2 candidate faces and 1000 at most. We suggest to try Face - Verify when you only have 2 candidate faces.
	 */
	group(options: GroupOptions): Promise<GroupReturnValue>;

	/**
	 * For each face in the faceIds array, Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId), and returns candidate person(s) for that face ranked by similarity confidence.
	 * The person group should be trained to make it ready for identification
	 */
	identify(options: IdentifyOptions): Promise<IdentifyReturnValue>;

	/**
	 * Verify whether two faces belong to a same person or whether one face belongs to a person.
	 */
	verify(options: VerifyOptions): Promise<VerifyReturnValue>;

	/**
	 * Add a face to a face list. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face, and persistedFaceId will not expire.
	 */
	addAFaceToAFaceList(options: AddAFaceToAFaceListOptions): Promise<AddAFaceToAFaceListReturnValue>;

	/**
	 * Create an empty face list with user-specified faceListId, name and an optional userData. Up to 64 face lists are allowed to exist in one subscription.
	 * Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in Face - Find Similar.
	 * Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.
	 *
	 * A face list can have a maximum of 1000 faces.
	 */
	createAFaceList(options: CreateAFaceListOptions): Promise<any>;

	/**
	 * Delete an existing face from a face list (given by a persisitedFaceId and a faceListId). Persisted image related to the face will also be deleted.
	 * Concurrency is supported in adding or deleting faces against different face lists. Operations on a same face list will be processed sequentially.
	 */
	deleteAFaceFromAFaceList(options: DeleteAFaceFromAFaceListOptions): Promise<any>;

	/**
	 * Delete an existing face list according to faceListId. Persisted face images in the face list will also be deleted.
	 */
	deleteAFaceList(options: DeleteAFaceListOptions): Promise<any>;

	/**
	 * Retrieve a face list's information, including faceListId, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in Face - Find Similar.
	 */
	getAFaceList(options: GetAFaceListOptions): Promise<GetAFaceListReturnValue>;

	/**
	 * Retrieve information about all existing face lists. Only faceListId, name and userData will be returned. Try Face List - Get a Face List to retrieve face information inside faceList.
	 */
	listFaceLists(): ListFaceListsReturnValue;

	/**
	 * Update information of a face list, including name and userData. Face List simply represents a list of persisted faces, and could be treated as a searchable data source in Face - Find Similar.
	 */
	updateAFaceList(options: UpdateAFaceListOptions): Promise<void>;

	/**
	 * Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face and this persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect.
	 *
	 * The persistedFaceId of person is used in Person - Delete a Person Face to remove a face from a person.
	 * Each person has a maximum of 248 faces.
	 * JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
	 * The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
	 * Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.
	 * The given rectangle specifies both face location and face size at the same time. There is no guarantee of correct result if you are using rectangle which is not returned from Face - Detect.
	 *
	 * Concurrency is supported in adding or deleting faces against different persons. Operations on a same person will be processed sequentially.
	 */
	addAPersonFace(options: AddAPersonFaceOptions): Promise<AddAPersonFaceReturnValue>;

	/**
	 * Add a face to a specified large face list, up to 1,000,000 faces.
	 */
	addAFaceToALargeFaceList(options: AddAFaceToALargeFaceListOptions): Promise<PersistedFaceId>;

	/**
	 * Create an empty large face list with user-specified largeFaceListId, name and an optional userData.
	 */
	createALargeFaceList(options: CreateALargeFaceListOptions): Promise<void>;

	/**
	 * Delete a specified large face list. The related face images in the large face list will be deleted, too. 
	 */
	deleteALargeFaceList(options: DeleteALargeFaceListOptions): Promise<void>;

	/**
	 * Delete a face from a large face list by specified largeFaceListId and persisitedFaceId. The related face image will be deleted, too.
	 */
	deleteAFaceFromALargeFaceList(options: DeleteAFaceFromALargeFaceListOptions): Promise<void>;

	/**
	 *Retrieve a large face list’s largeFaceListId, name, userData.
	 */
	getALargeFaceList(options: GetALargeFaceListOptions): Promise<LargeFaceListDescription>;

	/**
	 * Retrieve persisted face in large face list by largeFaceListId and persistedFaceId.
	 */
	getAFaceFromALargeFaceList(options: GetAFaceFromALargeFaceListOptions): Promise<LargeFaceListFaceDescription>;

	/**
	 * List large face lists’ information of largeFaceListId, name and userData.
	 */
	listLargeFaceLists(options?: ListLargeFaceListsOptions): Promise<LargeFaceListDescription[]>;

	/**
	 * List faces' persistedFaceId and userData in a specified large face list.
	 */
	 listFacesInALargeFaceList(options: ListFacesInLargeFaceListOptions): Promise<LargeFaceListFaceDescription[]>;

	/**
	 * Update information of a large face list, including name and userData.
	 */
	updateALargeFaceList(options: UpdateALargeFaceListOptions): Promise<void>;

	/**
	 * Update a specified face's userData field in a large face list by its persistedFaceId.
	 */
	updateAFaceInALargeFaceList(options: UpdateAFaceInALargeFaceListOptions): Promise<void>;

	/**
	 * Submit a large face list training task. Training is a crucial step that only a trained large face list can be used by Face - Find Similar.
	 * The training task is an asynchronous task. Training time depends on the number of face entries in a large face list. It could be in seconds, or up to half an hour for 1,000,000 faces.
	 */
	trainALargeFaceList(options: TrainALargeFaceListOptions): Promise<void>;

	/**
	 * To check the large face list training status completed or still ongoing.
	 */
	getALargeFaceListTrainingStatus(options: GetALargeFaceListTrainingStatusOptions): Promise<LargeFaceListTraningStatus>;

	/**
	 * Create a new person in a specified person group. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person.
	 *
	 * The number of persons has a subscription level limit and a person group level limit. Free tier subscriptions have a limit of 1,000 persons per Person Group and 1,000 persons total per subscription.
	 * The S0 tier subscriptions have these limits: 10,000 Persons per Person Group, 100M Persons total and 1M Person Groups per subscription.
	 */
	createAPerson(options: CreateAPersonOptions): Promise<CreateAPersonReturnValue>;

	/**
	 * Delete an existing person from a person group. Persisted face images of the person will also be deleted.
	 */
	deleteAPerson(options: DeleteAPersonOptions): Promise<any>;

	/**
	 * Delete a face from a person. Relative image for the persisted face will also be deleted.
	 */
	deleteAPersonFace(options: DeleteAPersonFaceOptions): Promise<any>;

	/**
	 * Retrieve a person's information, including registered persisted faces, name and userData.
	 */
	getAPerson(options: GetAPersonOptions): Promise<GetAPersonReturnValue>;

	/**
	 * Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).
	 */
	getAPersonFace(options: GetAPersonFaceOptions): Promise<GetAPersonFaceReturnValue>;

	/**
	 * List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).
	 */
	listPersonsInAPersonGroup(options: ListPersonsInAPersonGroupOptions): Promise<ListPersonsInAPersonGroupReturnValue>;

	/**
	 * Update name or userData of a person.
	 */
	updateAPerson(options: UpdateAPersonOptions): Promise<any>;

	/**
	 * Update a person persisted face's userData field.
	 */
	updateAPersonFace(options: UpdateAPersonFaceOptions): Promise<any>;

	/**
	 * Create a new person group with specified personGroupId, name and user-provided userData.
	 */
	createAPersonGroup(options: CreateAPersonGroupOptions): Promise<any>;

	/**
	 * Delete an existing person group. Persisted face images of all people in the person group will also be deleted.
	 */
	deleteAPersonGroup(options: DeleteAPersonGroupOptions): Promise<any>;

	/**
	 * Retrieve the information of a person group, including its name and userData.
	 * This API returns person group information only, use Person - List Persons in a Person Group instead to retrieve person information under the person group.
	 */
	getAPersonGroup(options: GetAPersonGroupOptions): Promise<GetAPersonGroupReturnValue>;

	/**
	 * Retrieve the training status of a person group (completed or ongoing).
	 * Training can be triggered by the Person Group - Train Person Group API.
	 * The training will process for a while on the server side.
	 */
	getPersonGroupTrainingStatus(options: GetPersonGroupTrainingStatusOptions): Promise<GetPersonGroupTrainingStatusReturnValue>;

	/**
	 * List person groups and their information.
	 */
	listPersonGroups(options: ListPersonGroupsOptions): Promise<ListPersonGroupsReturnValue>;

	/**
	 * Queue a person group training task, the training task may not be started immediately.
	 */
	trainPersonGroup(options: TrainPersonGroupOptions): Promise<any>;

	/**
	 * Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
	 */
	updateAPersonGroup(options: UpdateAPersonGroupOptions): Promise<any>;
}

//#region detect (DONE)
export interface DetectOptions {
	body?: { url?: string },
	headers?: ContentTypeHeaders,
	parameters?: DetectParameters
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
			age: number,

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

//#region findSimilar (DONE)
export interface FindSimilarOptions {
	body?: FindSimilarBody,
	headers?: ContentTypeHeaders
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

//#region group (DONE)
export interface GroupOptions {
	body?: GroupBody,
	headers?: ContentTypeHeaders
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
	headers?: ContentTypeHeaders
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
	Results: {
		faceId: string,
		candidates: {
			personId: string,
			confidence: number
		}[]
	}[]
}
//#endregion

//#region verify
export interface VerifyOptions {
	body?: VerifyBody,
	headers?: ContentTypeHeaders
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

//#region addAFaceToAFaceList
export interface AddAFaceToAFaceListOptions {
	headers?: ContentTypeHeaders
}

export interface AddAFaceToAFaceListParameters {
	faceListId: string,
	userData?: string,
	targetFace?: string
}

export interface AddAFaceToAFaceListReturnValue {

}
//#endregion

//#region createAFaceList
//#endregion

//#region deleteAFaceFromAFaceList
//#endregion

//#region deleteAFaceList
//#endregion

//#region getAFaceList
export interface GetAFaceListOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters?: GetAFaceListParameters
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

//#region updateAFaceList (DONE)
export interface UpdateAFaceListOptions {
	headers?: ContentTypeHeaders,
	parameters?: UpdateAFaceListParameters,
	body?: UpdateAFaceListBody
}

export interface UpdateAFaceListParameters {
	/**
	 * Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	faceListId: string
}

export interface UpdateAFaceListBody {
	/**
	 * Name of the face list, maximum length is 128
	 */
	name: string,

	/**
	 * Optional user defined data for the face list. Length should not exceed 16KB
	 */
	userData?: string
}
//#endregion

//#region addAPersonFace
//#endregion

//#region createAPerson
//#endregion

//#region deleteAPerson
//#endregion

//#region deleteAPersonFace
//#endregion

//#region addAFaceToALargeFaceList
export interface AddAFaceToALargeFaceListOptions {
	headers?: ContentTypeHeaders;
	parameters: AddAFaceToALargeFaceListParameters;
	body: AddAFaceToALargeFaceListBody | Buffer;
}

export interface AddAFaceToALargeFaceListParameters extends LargeFaceListId {
	/**
	 * User-specified data about the target face to add for any purpose. The maximum length is 1KB.
	 */
	userData?: string;

	/**
	 * A face rectangle to specify the target face to be added to a large face list, in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
	 */
	targetFace?: string;
}

export interface AddAFaceToALargeFaceListBody {
	/**
	 * Face image URL. Valid image size is from 1KB to 6MB. Only one face is allowed per image.
	 */
	url: string;
}
//#endregion

//#region createALargeFaceList
export interface CreateALargeFaceListOptions {
	parameters: LargeFaceListId;
	body: CreateALargeFaceListBody;
}

export type CreateALargeFaceListBody = CreateUpdateLargeFaceListPayload;
//#endregion

//#region deleteALargeFaceList
export interface DeleteALargeFaceListOptions {
	parameters: LargeFaceListId;
}
//#region

//#region deleteAFaceFromALargeFaceList
export interface DeleteAFaceFromALargeFaceListOptions {
	parameters: LargeFaceListFaceId;
}
//#endregion

//#region getALargeFaceList
export interface GetALargeFaceListOptions {
	parameters: LargeFaceListId;
}
//#endregion

//#region getAFaceFromALargeFaceList
export interface GetAFaceFromALargeFaceListOptions {
	parameters: LargeFaceListFaceId;
}
//#endregion

//#region listLargeFaceLists
export interface ListLargeFaceListsOptions {
	parameters: LargeFaceListRange;
}
//#endregion

//#region listFacesInALargeFaceList
export interface ListFacesInLargeFaceListOptions {
	parameters: ListFacesInLargeFaceListParameters;
}

export type ListFacesInLargeFaceListParameters = LargeFaceListId & LargeFaceListRange;
//#endregion

//#region updateALargeFaceList
export interface UpdateALargeFaceListOptions {
	parameters: LargeFaceListId;
	body: UpdateALargeFaceListBody;
}

export type UpdateALargeFaceListBody = CreateUpdateLargeFaceListPayload;
//#endregion

//#region updateAFaceInALargeFaceList
export interface UpdateAFaceInALargeFaceListOptions {
	parameters: LargeFaceListFaceId;
	body: UpdateAFaceInALargeFaceListBody;
}

export interface UpdateAFaceInALargeFaceListBody {
	/**
	 * User-specified data about the target face to add for any purpose. The maximum length is 1KB.
	 */
	userData: string;
}
//#endregion

//#region trainALargeFaceList
export interface TrainALargeFaceListOptions {
	parameters: LargeFaceListId;
}
//#endregion

//#region getALargeFaceListTrainingStatus
export interface GetALargeFaceListTrainingStatusOptions {
	parameters: LargeFaceListId;
}

export interface LargeFaceListTraningStatus {
	/**
	 * Training status: notstarted, running, succeeded, failed. If the training process is waiting to perform, the status is notstarted. If the training is ongoing, the status is running. Status succeed means this large face list is ready for Face - Find Similar. Status failed is often caused by no person or no persisted face exist in the large face list.
	 */
	status: string;

	/**
	 * A combined UTC date and time string that describes large face list created time, delimited by a space. E.g. 12/21/2017 12:55:39.
	 */
	createDateTime: string;

	/**
	 * A combined UTC date and time string that describes large face list last modify time, delimited by a space. E.g. 12/21/2017 12:55:39.
	 */
	lastActionDateTime: string;

	/**
	 * A combined UTC date and time string that describes large face list last successful training time, delimited by a space. E.g. 12/21/2017 12:55:39.
	 */
	lastSuccessfulTrainingDateTime: string;

	/**
	 * Show failure message when training failed (omitted when training succeed).
	 */
	message: string;
}
//#endregion

export interface LargeFaceListId {
	/**
	 * Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	largeFaceListId: string;
}

export interface PersistedFaceId {
	/**
	 * persistedFaceId of an existing face. Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	persistedFaceId: string;
}

export type LargeFaceListFaceId = LargeFaceListId & PersistedFaceId;

export interface LargeFaceListDescription extends LargeFaceListId {
	/**
	 * Large face list's display name.
	 */
	name: string;
	/**
	 * User-provided data attached to this large face list.
	 */
	userData: string;
}

export interface LargeFaceListFaceDescription extends PersistedFaceId {
	/**
	 * User-provided data attached to this persisted face.
	 */
	userData: string;
}

interface CreateUpdateLargeFaceListPayload {
	/**
	 * Name of the created large face list, maximum length is 128.
	 */
	name: string;

	/**
	 * Optional user defined data for the large face list. Length should not exceed 16KB.
	 */
	userData?: string;
}

export interface LargeFaceListRange {
	start?: string;
	top?: number;
}

//#region getAPerson
export interface GetAPersonOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters?: GetAPersonParameters
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
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters?: GetAPersonFaceParameters
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
}//#endregion

//#region listPersonsInAPersonGroup
//#endregion

//#region updateAPerson
//#endregion

//#region updateAPersonFace
//#endregion

//#region createAPersonGroup
//#endregion

//#region deleteAPersonGroup
export interface DeleteAPersonGroupOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters?: DeleteAPersonGroupParameters
}

export interface DeleteAPersonGroupParameters {
	/**
	 * The personGroupId of the person group to be deleted.
	 */
	personGroupId: string
}
//#endregion

//#region getAPersonGroup
export interface GetAPersonGroupOptions {
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters?: GetAPersonGroupParameters
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
	headers?: OcpApimSubscriptionKeyHeaders,
	parameters?: GetPersonGroupTrainingStatusParameters
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

export interface CreateAFaceListOptions {
	parameters: CreateAFaceListParameters,
	headers: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface CreateAFaceListParameters {

	/**
	 * Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	faceListId: string,

	/**
	 * Name of the created face list, maximum length is 128.
	 */
	name: String,

	/**
	 * Optional user defined data for the face list. Length should not exceed 16KB.
	 */
	userData?: String
}

export interface DeleteAFaceFromAFaceListOptions {
	parameters: DeleteAFaceFromAFaceListParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface DeleteAFaceFromAFaceListParameters {
	/**
	 * faceListId of an existing face list. Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	faceListId: string,

	/**
	 * persistedFaceId of an existing face. Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	persistedFaceId: string
}

export interface DeleteAFaceListOptions {
	parameters: DeleteAFaceListParameters,
	Headers: OcpApimSubscriptionKeyHeaders
}

export interface DeleteAFaceListParameters {
	/**
	 * faceListId of an existing face list. Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.
	 */
	faceListId: string
}

export interface AddAPersonFaceOptions {
	parameters: AddAPersonFaceParameters,
	headers: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface AddAPersonFaceParameters {

	/**
	 * Specifying the person group containing the target person.
	 */
	personGroupId: String,

	/**
	 * Target person that the face is added to.
	 */
	personId: String,

	/**
	 * User-specified data about the target face to add for any purpose. The maximum length is 1KB.
	 */
	userData?: String,

	/**
	 * A face rectangle to specify the target face to be added to a person, in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
	 */
	targetFace?: String
}

export interface AddAPersonFaceReturnValue {

	/**
	 * persistedFaceId of the added face, which is persisted and will not expire. Different from faceId which is created in Face - Detect and will expire in 24 hours after the detection call.
	 */
	"persistedFaceId": String
}

export interface CreateAPersonOptions {
	parameters: CreateAPersonParameters,
	body: CreateAPersonBody,
	headers: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface CreateAPersonParameters {
	/**
	 * personGroupId of the target person group, created by Person Group - Create a Person Group.
	 */
	personGroupId: string
}

export interface CreateAPersonBody {
	/**
	 * Display name of the target person. The maximum length is 128.
	 */
	"name": String,

	/**
	 * Optional fields for user-provided data attached to a person. Size limit is 16KB.
	 */
	"userData"?: String
}

export interface CreateAPersonReturnValue {

	/**
	 * personID of the new created person.
	 */
	"personId":	String
}

export interface DeleteAPersonOptions {
	parameters: DeleteAPersonParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface DeleteAPersonParameters {

	/**
	 * Specifying the person group containing the person.
	 */
	personGroupId: String,

	/**
	 * The target personId to delete.
	 */
	personId: String
}

export interface DeleteAPersonFaceOptions {
	parameters: DeleteAPersonFaceParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface DeleteAPersonFaceParameters {

	/**
	 * Specifying the person group containing the target person.
	 */
	personGroupId: String,

	/**
	 * Specifying the person that the target persisted face belong to.
	 */
	personId: String,

	/**
	 * The persisted face to remove. This persistedFaceId is returned from Person - Add a Person Face.
	 */
	persistedFaceId: String
}

export interface ListPersonsInAPersonGroupOptions {
	parameters: ListPersonsInAPersonGroupParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface ListPersonsInAPersonGroupParameters {

	/**
	 * personGroupId of the target person group.
	 */
	personGroupId: String,

	/**
	 * List persons from the least personId greater than the "start". It contains no more than 64 characters. Default is empty.
	 */
	start?: String,

	/**
	 * The number of persons to list, ranging in [1, 1000]. Default is 1000.
	 */
	top?: number
}

export interface ListPersonsInAPersonGroupReturnValue {
	/**
	 * 	personId of the person in the person group.
	 */
	"personId":	String,

	/**
	 * Person's display name.
	 */
	"name": String,

	/**
	 * User-provided data attached to the person.
	 */
	"userData":	String,

	/**
	 * persistedFaceId array of registered faces of the person.
	 */
	"persistedFaceIds":	String[]
}

export interface UpdateAPersonOptions {
	parameters: UpdateAPersonParameters,
	body: UpdateAPersonBody,
	headers: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface UpdateAPersonParameters {

	/**
	 * Specifying the person group containing the target person.
	 */
	personGroupId: String,

	/**
	 * Specifying the person that the target persisted face belong to.
	 */
	personId: String
}

export interface UpdateAPersonBody {

	/**
	 * Target person's display name. Maximum length is 128.
	 */
	name: String,

	/**
	 * User-provided data attached to the person. Maximum length is 16KB.
	 */
	userData: String
}

export interface UpdateAPersonFaceOptions {
	parameters: UpdateAPersonFaceParameters,
	body: UpdateAPersonFaceBody,
	headers: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface UpdateAPersonFaceParameters {

	/**
	 * Specifying the person group containing the target person.
	 */
	personGroupId: String,

	/**
	 * Specifying the person that the target persisted face belong to.
	 */
	personId: String,

	/**
	 * persistedFaceId of target face, which is persisted and will not expire.
	 */
	persistedFaceId: String
}

export interface UpdateAPersonFaceBody {
	/**
	 * Attach userData to person's persisted face. The size limit is 1KB.
	 */
	userData?: String
}

export interface CreateAPersonGroupOptions {
	parameters: CreateAPersonGroupParameters,
	body: CreateAPersonGroupBody,
	headers: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface CreateAPersonGroupParameters {

	/**
	 * User-provided personGroupId as a string. The valid characters include numbers, English letters in lower case, '-' and '_'.
	 * The maximum length of the personGroupId is 64.
	 */
	personGroupId: String
}

export interface CreateAPersonGroupBody {
	/**
	 * Person group display name. The maximum length is 128.
	 */
	name: String,

	/**
	 * User-provided data attached to the person group. The size limit is 16KB.
	 */
	userData?: String
}

export interface ListPersonGroupsOptions {
	parameters: ListPersonGroupsParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface ListPersonGroupsParameters {

	/**
	 * List person groups from the least personGroupId greater than the "start".
	 * It contains no more than 64 characters. Default is empty.
	 */
	start?: String,

	/**
	 * The number of person groups to list, ranging in [1, 1000]. Default is 1000.
	 */
	top?: number
}

export interface ListPersonGroupsReturnValue {

	/**
	 * personGroupId of the existing person groups, created in Person Group - Create a Person Group.
	 */
	"personGroupId":  String,

	/**
	 * Person group's display name.
	 */
	"name": String,

	/**
	 * User-provided data attached to this person group.
	 */
	"userData":	String
}

export interface TrainPersonGroupOptions {
	parameters: TrainPersonGroupParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface TrainPersonGroupParameters {

	/**
	 * Target person group to be trained.
	 */
	personGroupId: String
}

export interface UpdateAPersonGroupOptions {
	parameters: UpdateAPersonGroupParameters,
	body: UpdateAPersonGroupBody,
	headers: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface UpdateAPersonGroupParameters {
	/**
	 * personGroupId of the person group to be updated.
	 */
	personGroupId: String
}

export interface UpdateAPersonGroupBody {
	/**
	 * Person group's display name. The maximum is 128.
	 */
	name: String,

	/**
	 * User-provided data attached to this person group. The size limit is 16KB.
	 */
	userData:	String
}