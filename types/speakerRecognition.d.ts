import { exec } from "child_process";

export class speakerRecognition {
	constructor(options: SpeakerRecognitionOptions);

	/**
	 * 
	 * Enrollment for speaker identification is text-independent,
	   which means that there are no restrictions on what the speaker says in the audio. 
	 */
	identificationProfileCreateEnrollment(options: identificationProfileCreateEnrollmentOptions): Promise<identificationProfileCreateEnrollmentReturnValue>;

	/**
	 * 
	 * Create a new speaker identification profile with specified locale.
	 * One subscription can only create 1000 speaker verification/identification profiles at most. 
	 */
	identificationProfileCreateProfile(options: identificationProfileCreateProfileOptions): Promise<identificationProfileCreateProfileReturnValue>;
	
	/**
	 * 
	 * Deletes both speaker identification profile and all associated enrollments permanently from the service.
	 */
	identificationProfileDeleteProfile(options: identificationProfileDeleteProfileOptions): Promise<identificationProfileDeleteProfileReturnValue>;



	/**
	 * 
	 * Get a speaker identification profile by identificationProfileId.
	 */
	identificationProfileGet(options: identificationProfileGetOptions): Promise<identificationProfileGetReturnValue>;
	
	
	/**
	 * Get all speaker identification profiles within the subscription.
	 */
	identificationProfileGetAll(options: identificationProfileGetAllOptions): Promise<identificationProfileGetAllReturnValue>;

	/**
	 * 
	 * Deletes all enrollments associated with the given speaker identification profile permanently from the service.
	 */
	identificationProfileResetEnrollments(options: identificationProfileResetEnrollmentsOptions): Promise<identificationProfileResetEnrollmentsReturnValue>;

	/**
	 * 
	 * Returns the list of supported verification phrases that can be used 
	   for Verification Profile - Create Enrollment and Speaker Recognition - Verification.
	 * Request processed successfully and the list of supported phrases are returned. 
	 * The returned JSON array consists of a list of objects that contain the supported phrases.
	 */
	listAllSupportedVerificationPhrases(options: listAllSupportedVerificationPhrasesOptions): Promise<listAllSupportedVerificationPhrasesReturnValue>;
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

export interface SpeakerRecognitionOptions {
	apiKey: string,
	endpoint: string
}

//Identification Profile Create Enrollment Options
export interface identificationProfileCreateEnrollmentOptions {
	parameters?: identificationProfileCreateEnrollmentParameters,
	headers?: identificationProfileCreateEnrollmentHeaders
	/**
	 * You should include the enrollment audio file in the request body. The audio file should be at least 5 seconds long and no longer than 5 minutes. 
	 * The minimum recommended amount of accumulated speech for enrollment, after removing silence, is 30 seconds.
	 * After accumulating 30 seconds of speech, the profile’s enrollment status is changed from enrolling to enrolled to indicate that it is ready for identification.
	 * In the case you wish to enroll using any amount of speech time, you should include the "shortAudio" parameter.
	 * It instructs the service to waive the recommended amount of audio limit needed for enrollment and accordingly the profile’s enrollment status is changed from enrolling to enrolled. 
	 * When doing so you can send audio files starting 1-second-long but no longer than 5 minutes.
	 
	 * The audio file format must meet the following requirements.

		Container	     WAV
		Encoding	     PCM
		Rate	         16K
		Sample Format	 16 bit
		Channels	     Mono
	 */
	body: string 
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
	/**
	 * Locale for the language of this speaker identification profile .
	 * A complete supported locale list is here: 
		- en-US (English US)
		- zh-CN (Chinese Mandarin)
	 */
	locale: string
}

export interface identificationProfileCreateProfileReturnValue {
	/**
	 * Internal Server Error
	 */
	error?: [{ code : number, message : string }],
	/**
	 * Id of the created speaker identification profile.
	 */
	identificationProfileId?: string
}

export interface identificationProfileDeleteProfileOptions {
	parameters?: identificationProfileDeleteProfileParameters,
	headers?: identificationProfileDeleteProfileHeaders
}

export interface identificationProfileDeleteProfileParameters {
	/**
	 * ID of speaker identification profile.
	 * GUID returned from Identification Profile - Create Profile API
	 */
	identificationProfileId: string
}

export interface identificationProfileDeleteProfileHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface identificationProfileDeleteProfileReturnValue {
	/**
	 * Internal Server Error
	 */
	error?: [{ code : number, message : string }]
}

export interface identificationProfileGetOptions {
	parameters?: identificationProfileGetParameters,
	headers?: identificationProfileGetHeaders
}

export interface identificationProfileGetParameters {
	/**
	 * ID of speaker identification profile.
	 * GUID returned from Identification Profile - Create Profile API
	 */
	identificationProfileId: string
}

export interface identificationProfileGetHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface identificationProfileGetReturnValue {
	/**
	 * Id of the created speaker identification profile.
	 */
	identificationProfileId: string,
	/**
	 * Language locale of the speaker identification profile.
	 */
	locale: string,
	/**
	 * Total number of useful speech detected in all enrollment audio files provided (seconds).
	 */
	enrollmentSpeechTime: number,
	/**
	 * Remaining number of speech needed for a successful enrollment (seconds).
	 */
	remainingEnrollmentSpeechTime: number,
	/**
	 * Created date of the speaker identification profile.
	 */
	createdDateTime: Date,
	/**
	 * Last date of usage for this profile.
	 */
	lastActionDateTime: Date,
	/**
	 * Speaker identification profile enrollment status:
			Enrolling: profile is currently enrolling and is not ready for identification.
			Training: profile is currently training and is not ready for identification.
			Enrolled: profile is currently enrolled and is ready for identification.
	 */
	EnrollmentStatus: string
}

export interface identificationProfileGetAllOptions {
	headers?: identificationProfileGetAllHeaders
}

export interface identificationProfileGetAllHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface identificationProfileGetAllReturnValue {
	/**
	 * Id of the created speaker identification profile.
	 */
	identificationProfileId: string,
	/**
	 * Language locale of the speaker identification profile.
	 */
	locale: string,
	/**
	 * Total number of useful speech detected in all enrollment audio files provided (seconds).
	 */
	enrollmentSpeechTime: number,
	/**
	 * Remaining number of speech needed for a successful enrollment (seconds).
	 */
	remainingEnrollmentSpeechTime: number,
	/**
	 * Created date of the speaker identification profile.
	 */
	createdDateTime: Date,
	/**
	 * Last date of usage for this profile.
	 */
	lastActionDateTime: Date,
	/**
	 * Speaker identification profile enrollment status:
			Enrolling: profile is currently enrolling and is not ready for identification.
			Training: profile is currently training and is not ready for identification.
			Enrolled: profile is currently enrolled and is ready for identification.
	 */
	EnrollmentStatus: string
}

export interface identificationProfileResetEnrollmentsOptions {
	parameters?: identificationProfileResetEnrollmentsParameters,
	headers?: identificationProfileResetEnrollmentsHeaders
}

export interface identificationProfileResetEnrollmentsParameters {
	/**
	 * ID of speaker identification profile.
	 * GUID returned from Identification Profile - Create Profile API
	 */
	identificationProfileId: string
}

export interface identificationProfileResetEnrollmentsHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface identificationProfileResetEnrollmentsReturnValue {
	/**
	 * Internal Server Error
	 */
	error?: [{ code : number, message : string }]
}

export interface listAllSupportedVerificationPhrasesOptions {
	parameters?: listAllSupportedVerificationPhrasesParameters,
	headers?: listAllSupportedVerificationPhrasesOptionsHeaders
}

export interface listAllSupportedVerificationPhrasesParameters {
	/**
	 * Locale for the language when retrieving verification phrases.
	 */
	locale: string
}

export interface listAllSupportedVerificationPhrasesOptionsHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface listAllSupportedVerificationPhrasesReturnValue {
	phrase: string []
}
