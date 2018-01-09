import { exec } from "child_process";

export class speakerRVerification {
	constructor(options: SpeakerRVerification);

	/**
	 * Returns the list of supported verification phrases that can be used 
	 * for Verification Profile - Create Enrollment and Speaker Recognition - Verification.
	 * Request processed successfully and the list of supported phrases are returned. 
	 * The returned JSON array consists of a list of objects that contain the supported phrases.
	 */
	listAllSupportedVerificationPhrases(options: ListAllSupportedVerificationPhrasesOptions): Promise<ListAllSupportedVerificationPhrasesReturnValue[]>;
	
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
	
	verify(options: SpeakerRecognitionVerificationOptions): Promise<SpeakerRecognitionVerificationReturnValue>;
	
	/**
	 * 
	 * Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. 
	 * List of supported phrases can be found in Verification Phrase - List All Supported Verification Phrases.
	 * The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. 
	 * It is recommended to use the same device (mic) in both enrollment and verification.
	 * You should include the enrollment audio file in the request body. The audio file should be at least 1-second-long and no longer than 15 seconds. 
	 * Each speaker must provide at least three enrollments to the service.
	 * The audio file format must meet the following requirements.
	 * Container: WAV
	 * Encoding: PCM
	 * Rate: 16K
	 * Sample Format: 16 bit
	 * Channels: Mono
	 */
	createEnrollment(options: VerificationProfileCreateEnrollmentOptions): Promise<VerificationProfileCreateEnrollmentReturnValue>;
	
	/**
	 * Create a new speaker verification profile with specific locale.
	 * One subscription can only create 1000 speaker verification/identification profiles at most.
	 */
	createProfile(options: VerificationProfileCreateProfileOptions): Promise<VerificationProfileCreateProfileReturnValue>;
	
	/**
	 * Deletes both speaker verification profile and all associated enrollments permanently from the service.
	 */
	deleteProfile(options: VerificationProfileDeleteProfileOptions): Promise<void>;
	
	/**
	 * Get all speaker verification profiles within the subscription.
	 */
	getAllProfiles(): Promise<VerificationProfileGetAllProfilesReturnValue>;
	
	/**
	 * Get a speaker verification profile by verificationProfileId
	 */
	getProfile(options: VerificationProfileGetProfileOptions): Promise<VerificationProfileGetProfileReturnValue>;
	
	/**
	 * Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.
	 */
	resetEnrollments(options: VerificationProfileResetEnrollmentsOptions): Promise<void>;

}

export interface SpeakerIdentificationOptions {
	apiKey: string,
	endpoint: string
}

export interface SpeakerRecognitionVerificationOptions {
	parameters: SpeakerRecognitionVerificationParameters,
	headers: SpeakerRecognitionVerificationHeaders,
	body: {"url?: string"} | any
}

export interface SpeakerRecognitionVerificationParameters {
	/**
	 * ID of speaker verification profile. It should be a GUID.
	 */
	verificationProfileId: string
}

export interface SpeakerRecognitionVerificationHeaders{
	"Content-Type"?: string
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

export interface VerificationProfileCreateEnrollmentOptions {
	parameters: VerificationProfileCreateEnrollmentParameters,
	headers: VerificationProfileCreateEnrollmentHeaders
	body: {"url"?: string} | any
}

export interface VerificationProfileCreateEnrollmentParameters {
	/**
	 * ID of speaker verification profile. GUID returned from Verification Profile - Create Profile API
	 */
	verificationProfileId: string
}

export interface VerificationProfileCreateEnrollmentHeaders {
	"Content-Type"?: string
}

export interface VerificationProfileCreateEnrollmentReturnValue {
	/**
	 * Speaker identification profile enrollment status:
	 * Enrolling: profile is currently enrolling and is not ready for identification.
	 * Training: profile is currently training and is not ready for identification.
	 * Enrolled: profile is currently enrolled and is ready for identification.
	 */
	enrollmentStatus: string,

	/**
	 * The current speaker verification profile enrollments count.
	 */
	enrollmentsCount: number,
	
	/**
	 * Remaining number of required enrollments if enrollmentStatus== Enrolling.
	 */
	remainingEnrollments: number,	

	/**
	 * Recognized phrase of the enrollment audio.
	 */
	phrase: string
}

export interface VerificationProfileCreateProfileOptions{
	body: {"url"?: string} | any
}

export interface VerificationProfileCreateProfileReturnValue {
	/**
	 * Id of the created speaker verification profile.
	 */
	verificationProfileId: string
}

export interface VerificationProfileDeleteProfileOptions {
	parameters: VerificationProfileDeleteProfileParameters
}

export interface VerificationProfileDeleteProfileParameters {
	/**
	 * ID of speaker verification profile. It should be a GUID.
	 */
	verificationProfileId: string
}

export interface VerificationProfileGetAllProfilesReturnValue {
	/**
	 * Id of the speaker verification profile.
	 */
	verificationProfileId: string,
	
	/**
	 * Language locale of the speaker verification profile.
	 */
	locale: string,

	/**
	 * Speaker enrollments count.
	 */
	enrollmentsCount: number,

	/**
	 * Remaining number of required enrollments if enrollmentStatus== Enrolling.
	 */
	remainingEnrollmentsCount: number,

	/**
	 * Created date of the speaker verification profile.
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

export interface VerificationProfileGetProfileOptions {
	parameters: VerificationProfileGetProfileParameters
}

export interface VerificationProfileGetProfileParameters {
	/**
	 * Id of the speaker verification profile.
	 */
	verificationProfileId: string
}

export interface VerificationProfileGetProfileReturnValue {
	/**
	 * Id of the speaker verification profile.
	 */
	verificationProfileId: string,
	
	/**
	 * Language locale of the speaker verification profile.
	 */
	locale: string,

	/**
	 * Speaker enrollments count.
	 */
	enrollmentsCount: number,

	/**
	 * Remaining number of required enrollments if enrollmentStatus== Enrolling.
	 */
	remainingEnrollmentsCount: number,

	/**
	 * Created date of the speaker verification profile.
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

export interface VerificationProfileResetEnrollmentsOptions {
	parameters: VerificationProfileResetEnrollmentsParameters
}

export interface VerificationProfileResetEnrollmentsParameters {
	/**
	 * Id of the speaker verification profile.
	 */
	verificationProfileId: string
}

export interface ListAllSupportedVerificationPhrasesOptions {
	parameters: ListAllSupportedVerificationPhrasesParameters
}

export interface ListAllSupportedVerificationPhrasesParameters {
	/**
	 * Locale for the language when retrieving verification phrases.
	 */
	locale: string
}

export interface ListAllSupportedVerificationPhrasesReturnValue {
	phrase:string
}


