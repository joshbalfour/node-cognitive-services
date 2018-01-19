import { ContentTypeHeaders } from "../index";

export class speakerVerification {
	constructor(options: SpeakerVerification);
	listAllSupportedVerificationPhrases(options: ListAllSupportedVerificationPhrasesOptions): Promise<ListAllSupportedVerificationPhrasesReturnValue[]>;
	verify(options: SpeakerRecognitionVerificationOptions): Promise<SpeakerRecognitionVerificationReturnValue>;
	createEnrollment(options: VerificationProfileCreateEnrollmentOptions): Promise<VerificationProfileCreateEnrollmentReturnValue>;
	createProfile(options: VerificationProfileCreateProfileOptions): Promise<VerificationProfileCreateProfileReturnValue>;
	deleteProfile(options: VerificationProfileDeleteProfileOptions): Promise<void>;
	getAllProfiles(): Promise<VerificationProfileGetAllProfilesReturnValue>;
	getProfile(options: VerificationProfileGetProfileOptions): Promise<VerificationProfileGetProfileReturnValue>;
	resetEnrollments(options: VerificationProfileResetEnrollmentsOptions): Promise<void>;
}

export interface SpeakerVerification {
	apiKey: string,
	endpoint: string
}

export interface SpeakerRecognitionVerificationOptions {
	parameters: SpeakerRecognitionVerificationParameters,
	headers: ContentTypeHeaders,
	body: { "url?: string" } | any
}

export interface SpeakerRecognitionVerificationParameters {
	/**
	 * ID of speaker verification profile. It should be a GUID.
	 */
	verificationProfileId: string
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
	headers: ContentTypeHeaders
	body: { "url"?: string } | any
}

export interface VerificationProfileCreateEnrollmentParameters {
	/**
	 * ID of speaker verification profile. GUID returned from Verification Profile - Create Profile API
	 */
	verificationProfileId: string
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

export interface VerificationProfileCreateProfileOptions {
	body: { "url"?: string } | any
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
	phrase: string
}


