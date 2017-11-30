export class speakerRecognition {
	constructor(options: speakerRecognitionOptions);

	/**
	 * 
	 * Enrollment for speaker identification is text-independent, which means that there are no restrictions on what the speaker says in the audio. 
	 */
	identificationProfileCreateEnrollment(options: identificationProfileCreateEnrollmentOptions): Promise<identificationProfileCreateEnrollmentReturnValue>;

	/**
	 * 
	 * @param _ref3 
	 */
	identificationProfileCreateProfile(options: identificationProfileCreateProfileOptions): Promise<identificationProfileCreateProfileReturnValue>;
	
	
	identificationProfileDeleteProfile(_ref4: any): any;
	identificationProfileGet(_ref5: any): any;
	identificationProfileGetAll(): any;
	identificationProfileResetEnrollments(_ref6: any): any;
	listAllSupportedVerificationPhrases(_ref10: any): any;
	speakerRecognitionGetStatus(_ref7: any): any;
	speakerRecognitionIdentification(_ref8: any): any;
	speakerRecognitionVerification(_ref9: any): any;
	verificationProfileCreateEnrollment(_ref11: any): any;
	verificationProfileCreateProfile(_ref12: any): any;
	verificationProfileDeleteProfile(_ref13: any): any;
	verificationProfileGetAllProfiles(): any;
	verificationProfileGetProfile(_ref14: any): any;
	verificationProfileResetEnrollments(_ref15: any): any;

	
}

export interface speakerRecognitionOptions {
	apiKey: string,
	endpoint: string
}

//Identification Profile Create Enrollment Options
export interface identificationProfileCreateEnrollmentOptions {
	parameters?: identificationProfileCreateEnrollmentParameters,
	headers?: identificationProfileCreateEnrollmentHeaders
    body?: string
}

export interface identificationProfileCreateEnrollmentParameters {

	/**
	 * ID of speaker identification profile
	 */
	identificationProfileId: string,

	/**
	 * Instruct the service to waive the recommended minimum audio limit needed for enrollment. 
	 * Set value to “true” to force enrollment using any audio length (min. 1 second).
	 */

	shortAudio?: boolean
}

export interface identificationProfileCreateEnrollmentHeaders {

	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string,

	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface identificationProfileCreateEnrollmentReturnValue {
	error?: [{ code : number, message : string }]
	 
}

export interface identificationProfileCreateProfileOptions {
	headers?: identificationProfileCreateProfileHeaders
    body?: identificationProfileCreateProfileBody
}

export interface identificationProfileCreateProfileHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string,
	
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface identificationProfileCreateProfileBody {
	locale: string
}

export interface identificationProfileCreateProfileReturnValue {
	error?: [{ code : number, message : string }],
	identificationProfileId?: string
}

