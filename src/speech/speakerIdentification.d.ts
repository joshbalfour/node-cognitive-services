import { exec } from "child_process";

export class speakerIdentification {
	constructor(options: SpeakerIdentificationOptions);
	createEnrollment(options: IdentificationProfileCreateEnrollmentOptions): Promise <void>;
	createProfile(options: IdentificationProfileCreateProfileOptions): Promise<IdentificationProfileCreateProfileReturnValue>;
	deleteProfile(options: IdentificationProfileDeleteProfileOptions): Promise<void>;
	getProfile(options: IdentificationProfileGetOptions): Promise<IdentificationProfileGetReturnValue>;
	getAllProfiles(): Promise<IdentificationProfileGetAllReturnValue>;
	resetEnrollmentsForProfile(options: IdentificationProfileResetEnrollmentsOptions): Promise<void>;
	getOperationStatus(options: GetOperationStatusOptions): Promise<GetOperationStatusReturnValue>;
	identify(options: IdentifyOptions): Promise<void>;
}

export interface SpeakerIdentificationOptions {
	apiKey: string,
	endpoint: string
}

//Identification Profile Create Enrollment Options
export interface IdentificationProfileCreateEnrollmentOptions {
	parameters: IdentificationProfileCreateEnrollmentParameters,
	headers?: IdentificationProfileCreateEnrollmentHeaders,
	body: { "url"?: string } | any
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
	shortAudio?: string
}

export interface IdentificationProfileCreateEnrollmentHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string
}

export interface IdentificationProfileCreateProfileOptions {
	/**
	 * Locale for the language of this speaker identification profile .
	 * A complete supported locale list is here: 
	 * en-US (English US)
	 * zh-CN (Chinese Mandarin)
	 */
    body: { "locale": string }
}

export interface IdentificationProfileCreateProfileReturnValue {
	/**
	 * Id of the created speaker identification profile.
	 */
	identificationProfileId?: string
}

export interface IdentificationProfileDeleteProfileOptions {
	parameters: IdentificationProfileDeleteProfileParameters
}

export interface IdentificationProfileDeleteProfileParameters {
	/**
	 * ID of speaker identification profile.
	 * GUID returned from Identification Profile - Create Profile API
	 */
	identificationProfileId: string
}

export interface IdentificationProfileGetOptions {
	parameters: IdentificationProfileGetParameters
}

export interface IdentificationProfileGetParameters {
	/**
	 * ID of speaker identification profile.
	 * GUID returned from Identification Profile - Create Profile API
	 */
	identificationProfileId: string
}

export interface IdentificationProfileGetReturnValue {
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

export interface IdentificationProfileGetAllReturnValue {
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

export interface IdentificationProfileResetEnrollmentsOptions {
	parameters: IdentificationProfileResetEnrollmentsParameters
}

export interface IdentificationProfileResetEnrollmentsParameters {
	/**
	 * ID of speaker identification profile.
	 * GUID returned from Identification Profile - Create Profile API
	 */
	identificationProfileId: string
}


export interface getOperationStatusOptions {
	parameters: getOperationStatusParameters
}

export interface getOperationStatusParameters {
	/**
	 * The operation Id, created by Speaker Recognition - Identification or Identification Profile - Create Enrollment.
	 */
	operationId: string
}

export interface getOperationStatusReturnValue {
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

export interface IdentifyOptions {
    parameters: IdentifyParameters,
    headers: IdentifyHeaaders,
    body: { "url"?: string } | any
}

export interface IdentifyParameters {
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

export interface IdentifyHeaders {
   /**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?: string
}