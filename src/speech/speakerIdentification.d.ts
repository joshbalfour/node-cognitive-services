import { exec } from "child_process";

export class speakerIdentification {
	constructor(options: SpeakerIdentificationOptions);

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
	createEnrollment(options: IdentificationProfileCreateEnrollmentOptions): Promise <void>;

	/**
	 * 
	 * Create a new speaker identification profile with specified locale.
	 * One subscription can only create 1000 speaker verification/identification profiles at most. 
	 */
	createProfile(options: IdentificationProfileCreateProfileOptions): Promise<IdentificationProfileCreateProfileReturnValue>;
	
	/**
	 * 
	 * Deletes both speaker identification profile and all associated enrollments permanently from the service.
	 */
	deleteProfile(options: IdentificationProfileDeleteProfileOptions): Promise<void>;

	/**
	 * Get a speaker identification profile by identificationProfileId.
	 */
	getProfile(options: IdentificationProfileGetOptions): Promise<IdentificationProfileGetReturnValue>;
	
	
	/**
	 * Get all speaker identification profiles within the subscription.
	 */
	getAllProfiles(): Promise<IdentificationProfileGetAllReturnValue>;

	/**
	 * Deletes all enrollments associated with the given speaker identification profile permanently from the service.
	 */
	resetEnrollmentsForProfile(options: IdentificationProfileResetEnrollmentsOptions): Promise<void>;

	
	/**
	 * Get operation status or result. The operation should be created by Speaker Recognition - Identification or Identification Profile - Create Enrollment. 
	 * And the URL should be retrieved from Operation-Location header of initial POST 202 response
	 */
	getOperationStatus(options: GetOperationStatusOptions): Promise<GetOperationStatusReturnValue>;
	
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