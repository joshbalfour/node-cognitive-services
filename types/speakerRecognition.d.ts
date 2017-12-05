import { exec } from "child_process";

export class speakerRecognition {
	constructor(options: SpeakerRecognitionOptions);

	/**
	 * Enrollment for speaker identification is text-independent, which means that there are no restrictions on what the speaker says in the audio.
	 * You should include the enrollment audio file in the request body. The audio file should be at least 5 seconds long and no longer than 5 minutes. 
	 * The minimum recommended amount of accumulated speech for enrollment, after removing silence, is 30 seconds.
	 * After accumulating 30 seconds of speech, the profile’s enrollment status is changed from enrolling to enrolled to indicate that it is ready for identification.
	 * In the case you wish to enroll using any amount of speech time, you should include the "shortAudio" parameter.
	 * It instructs the service to waive the recommended amount of audio limit needed for enrollment and accordingly the profile’s enrollment status is changed from enrolling to enrolled. 
	 * When doing so you can send audio files starting 1-second-long but no longer than 5 minutes.
	 * The audio file format must meet the following requirements.
	 * Container: WAV
	 * Encoding: PCM
	 * Rate: 16K
	 * Sample Format: 16 bit
	 * Channels: Mono
	 */
	identificationProfileCreateEnrollment(options: IdentificationProfileCreateEnrollmentOptions): Promise <void>;

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
	identificationProfileDeleteProfile(options: identificationProfileDeleteProfileOptions): Promise<void>;

	/**
	 * Get a speaker identification profile by identificationProfileId.
	 */
	identificationProfileGet(options: identificationProfileGetOptions): Promise<identificationProfileGetReturnValue>;
	
	
	/**
	 * Get all speaker identification profiles within the subscription.
	 */
	identificationProfileGetAll(options: identificationProfileGetAllOptions): Promise<identificationProfileGetAllReturnValue>;

	/**
	 * Deletes all enrollments associated with the given speaker identification profile permanently from the service.
	 */
	identificationProfileResetEnrollments(options: identificationProfileResetEnrollmentsOptions): Promise<void>;

	/**
	 * Returns the list of supported verification phrases that can be used 
	 * for Verification Profile - Create Enrollment and Speaker Recognition - Verification.
	 * Request processed successfully and the list of supported phrases are returned. 
	 * The returned JSON array consists of a list of objects that contain the supported phrases.
	 */
	listAllSupportedVerificationPhrases(options: listAllSupportedVerificationPhrasesOptions): Promise<ListAllSupportedVerificationPhrasesReturnValue[]>;
	
	/**
	 * Get operation status or result. The operation should be created by Speaker Recognition - Identification or Identification Profile - Create Enrollment. 
	 * And the URL should be retrieved from Operation-Location header of initial POST 202 response
	 */
	speakerRecognitionGetStatus(options: SpeakerRecognitionGetStatusOptions): Promise<SpeakerRecognitionGetStatusReturnValue>;
	
	/**
	 * To automatically identify who is speaking given a group of speakers.
	 * You should include the enrollment audio file in the request body. 
	 * The minimum recommended amount of accumulated speech for identification, after removing silence, is 30 seconds.
	 * In the case you wish to start identification using any amount of speech time, you should include the "shortAudio" parameter. 
	 * It instructs the service to waive the recommended 30 seconds of audio needed to do identification. 
	 * When doing so you can send audio files starting 1-second-long but no longer than 5 minutes.
	 * The audio file format must meet the following requirements.
	 * Container: WAV
	 * Encoding: PCM
	 * Rate: 16K
	 * Sample Format: 16 bit
	 * Channels: Mono
	 */
	speakerRecognitionIdentification(options: SpeakerRecognitionIdentificationOptions): Promise<void>;
	
	/**
	 * To automatically verify and authenticate users using their voice or speech.
	 * You should include the test (verification) audio file in the request body. 
	 * The audio file should be at least 1-second-long and no longer than 15 seconds.
	 * It is recommended to use the same device (mic) used in enrollment.
	 * The audio file format must meet the following requirements.
	 * Container: WAV
	 * Encoding: PCM
	 * Rate: 16K
	 * Sample Format: 16 bit
	 * Channels: Mono
	 */
	speakerRecognitionVerification(options: SpeakerRecognitionVerificationOptions): Promise<SpeakerRecognitionVerificationReturnValue>;
	
	
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
export interface IdentificationProfileCreateEnrollmentOptions {
	parameters?: identificationProfileCreateEnrollmentParameters,
	headers?: identificationProfileCreateEnrollmentHeaders
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
	"Ocp-Apim-Subscription-Key"?: string
}

export interface identificationProfileCreateProfileBody {
	/**
	 * Locale for the language of this speaker identification profile .
	 * A complete supported locale list is here: 
	 * en-US (English US)
	 * zh-CN (Chinese Mandarin)
	 */
	locale?: string
}

export interface identificationProfileCreateProfileReturnValue {
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
	"Ocp-Apim-Subscription-Key"?: string
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
	"Ocp-Apim-Subscription-Key"?: string
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
	"Ocp-Apim-Subscription-Key"?: string
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
	 * Enrolling: profile is currently enrolling and is not ready for identification.
	 * Training: profile is currently training and is not ready for identification.
	 * Enrolled: profile is currently enrolled and is ready for identification.
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
	"Ocp-Apim-Subscription-Key"?: string
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
	"Ocp-Apim-Subscription-Key"?: string
}

//to-do rename the interface
export interface ListAllSupportedVerificationPhrasesReturnValue {
	phrase:string
}

export interface SpeakerRecognitionGetStatusOptions {
	parameters?: SpeakerRecognitionGetStatusParameters,
	headers?: SpeakerRecognitionGetStatusHeaders
}

export interface SpeakerRecognitionGetStatusParameters {
	/**
	 * The operation Id, created by Speaker Recognition - Identification or Identification Profile - Create Enrollment.
	 */
	operationId: string
}

export interface SpeakerRecognitionGetStatusHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface SpeakerRecognitionGetStatusReturnValue {
	/**
	 * The status of the operation.
	 * notstarted: The operation is not started.
	 * running: The operation is running.
	 * failed: The operation is finished and failed.
	 * succeeded: The operation is finished and succeeded.
	 */
	status: string,
	
	/**
	 * Created date of the operation.
	 */
	createdDateTime: Date,
	
	/**
	 * Last date of usage for this operation.
	 */
	lastActionDateTime: Date,
	
	/**
	 * Detail message returned by this operation. 
	 * Used in operations with failed status to show detail failure message.
	 */
	message: string,
	
	/**
	 * An Json Object contains the processing result. 
	 * This object exists only when the operation status is succeeded.
	 */
	processingResult: string,
	
	/**
	 * Speaker identification profile enrollment status:
		-	Enrolling: profile is currently enrolling and is not ready for identification.
		-	Training: profile is currently training and is not ready for identification.
		-	Enrolled: profile is currently enrolled and is ready for identification.
	 */
	EnrollmentStatus: string,
	
	/**
	 * Speaker identification profile enrollment length in seconds of speech.
	 */
	enrollmentSpeechTime: number,
	
	/**
	 * Remaining number of speech seconds to complete minimum enrollment.
	 */
	remainingEnrollmentSpeechTime: number,
	
	/**
	 * Seconds of useful speech in enrollment audio.
	 */
	speechTime: number,
	
	/**
	 * The identified speaker identification profile id.
	 * If this value is 00000000-0000-0000-0000-000000000000, it means there's no speaker identification profile identified and the audio file to be identified belongs to none of the provided speaker identification profiles.
	 */
	identifiedProfileId: string,
	
	/**
	 * The confidence value of the identification.
	 * Low: The confidence of the identification is low.
	 * Normal: The confidence of the identification is normal.
	 * High: The confidence of the identification is high.
	 */
	confidence: string
}

export interface SpeakerRecognitionIdentificationOptions {
	parameters?: SpeakerRecognitionIdentificationParameters,
	headers?: SpeakerRecognitionIdentificationHeaders
}

export interface SpeakerRecognitionIdentificationParameters {
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

export interface SpeakerRecognitionIdentificationHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string,
	
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface SpeakerRecognitionVerificationOptions {
	parameters?: SpeakerRecognitionVerificationParameters,
	headers?: SpeakerRecognitionVerificationHeaders
}

export interface SpeakerRecognitionVerificationParameters {
	/**
	 * ID of speaker verification profile. It should be a GUID.
	 */
	verificationProfileId: string
}

export interface SpeakerRecognitionVerificationHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string,
	
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key"?: string
}

export interface SpeakerRecognitionVerificationReturnValue {
	/**
	 * The result of the verification operation.
	 * Accept: The verification is accepted.
	 * Reject: The verification is rejected.
	 */
	result: string,
	
	/**
	 * 	The confidence level of the verification.
	 * Low: The confidence of the verification is low.
	 * Normal: The confidence of the verification is normal.
	 * High: The confidence of the verification is high.
	 */
	confidence: string,
	
	/**
	 * The recognized phrase of the verification audio file.
	 */
	phrase: string
}

