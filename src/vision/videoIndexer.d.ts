import { CommonConstructorOptions, ContentTypeHeaders, OcpApimSubscriptionKeyHeaders, ContentTypeHeaderTypes } from "..";

/**
 * Video Indexer is a cloud service that enables you to extract the following insights from your videos using artificial intelligence technologies:
 * 
 * - Audio Transcription: Video Indexer has speech-to-text functionality, which enables customers to get a transcript of the spoken words. Supported languages include English, Spanish, French, German, Italian, Chinese (Simplified), Portuguese (Brazilian), Japanese and Russian (with many more to come in the future).
 * 
 * - Face tracking and identification: Face technologies enable detection of faces in a video. The detected faces are matched against a celebrity database to evaluate which celebrities are present in the video. Customers can also label faces that do not match a celebrity. Video Indexer builds a face model based on those labels and can recognize those faces in videos submitted in the future.
 * 
 * - Speaker indexing: Video Indexer has the ability to map and understand which speaker spoke which words and when.
 * 
 * - Visual text recognition: With this technology, Video Indexer service extracts text that is displayed in the videos.
 * 
 * - Voice activity detection: This enables Video Indexer to separate background noise and voice activity.
 * 
 * - Scene detection: Video Indexer has the ability to perform visual analysis on the video to determine when a scene changes in a video.
 * 
 * - Keyframe extraction: Video Indexer automatically detects keyframes in a video.
 * 
 * - Sentiment analysis: Video Indexer performs sentiment analysis on the text extracted using speech-to-text and optical character recognition, and provide that information in the form of positive, negative of neutral sentiments, along with timecodes.
 * 
 * - Translation: Video Indexer has the ability to translate the audio transcript from one language to another. The following languages are supported: English, Spanish, French, German, Italian, Chinese-Simplified, Portuguese-Brazilian, Japanese, and Russian. Once translated, the user can even get captioning in the video player in other languages.
 * 
 * - Visual content moderation: This technology enables detection of adult and/or racy material present in the video and can be used for content filtering.
 * 
 * - Keywords extraction: Video Indexer extracts keywords based on the transcript of the spoken words and text recognized by visual text recognizer.
 * 
 * - Annotation: Video Indexer annotates the video based on a pre-defined model of 2000 objects.
 */
export class videoIndexer {
  
    constructor(options: videoIndexerOptions);
    getAccounts(): Promise<any>; 
    upload(options: UploadOptions): Promise<any>;
    getProcessingStateOfBreakdown(options: GetProcessingStateOfBreakdownOptions): Promise<any>;
    deleteBreakdown(options: DeleteBreakdownOptions): Promise<any>;
    getInsightsWidgetUrl(options: GetInsightsWidgetUrlOptions): Promise<any>;
    getInsightsWidgetUrlByExternalId(options: GetInsightsWidgetUrlByExternalIdOptions): Promise<any>;
    getPlayerWidgetUrl(options: GetPlayerWidgetUrlOptions): Promise<any>;
    getCaptionsUrl(options: GetCaptionsUrlOptions): Promise<any>;
    reIndexBreakdown(options: ReIndexBreakdownOptions): Promise<any>;
    reIndexBreakdownByExternalId(options: ReIndexBreakdownByExternalIdOptions): Promise<any>;
    searchBy(options: SearchByOptions): Promise<any>;
    updateFaceName(options: UpdateFaceNameOptions): Promise<any>;
    updateTranscript(options: UpdateTranscriptOptions): Promise<any>;
}

export interface videoIndexerOptions {
    apiKey: string
}

export interface UploadOptions {
    parameters: UploadParameters,
    headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
}

export interface UploadParameters {
    
    /** 
     * The video name.
    */
    name: string,

    /** 
     * The video privacy (Private or Public).
    */
    privacy: string,

    /** 
     * A public url of the video/audio file (url encoded). If not specified, the file should be passed as a multipart/form body content.
    */
    videoUrl?: string,

    /** 
     * The language of the video, to be used when generating the transcript. Arabic: ar-EG, Chinese (Simplified): zh-Hans, English: en-US, French: fr-FR, German: de-DE, Italian: it-IT, Japanese: ja-JP, Portuguese: pt-BR, Russian: ru-RU, Spanish: es-ES.
    */
    language?: string,

    /**
     * An external id to associate with the video (can be searched for later).
     */
    externalId?: string,

    /** 
     * Metadata to associate with the video (will be returned in queries).
    */
    metadata?: string,

    /**
     * The video description.
     */
    description?: string,

    /** 
     * A partition to partition videos by (used for searching a specific partition)
    */
    partition?: string,

    /**
     * A url to notify when indexing is completed. It should be a POST url and VideoIndexer will add 2 additional query string parameters to it: id and state.
     */
    callbackUrl?: string,

    /**
     * The indexing preset to use (Default/AudioOnly/DefaultWithNoiseReduction).
     */
    indexingPreset?: string,

    /**
     * The streaming preset to use (Default/AdaptiveBitrate).
     */
    streamingPreset?: string,

    /**
     * Linguistic model id as received by 'create linguistic model' call
     */
    linguisticModelId?:string,

    /**
     * The path to the file
     */
    path?: string
}

export interface GetProcessingStateOfBreakdownOptions {
    parameters: GetProcessingStateOfBreakdownParameters
}

export interface GetProcessingStateOfBreakdownParameters {

    /**
     * The breakdown id.
     */
    breakdownId: string
}

export interface DeleteBreakdownOptions {
    parameters: DeleteBreakdownParameters
}

export interface DeleteBreakdownParameters {

    /**
     * The breakdown id (video id), returned by the Upload or Search APIs.
     */
    breakdownId: string,

    /** 
     * Whether to delete the generated insights as well.
    */
    deleteInsights?: boolean
}

export interface GetInsightsWidgetUrlOptions {
    parameters: GetInsightsWidgetUrlParameters
}

export interface GetInsightsWidgetUrlParameters {

    /**
    * The breakdown id.
    */
   breakdownId: string,

    /** 
     * A type of a sub-widget to include (People, Sentiments, Keywords, Search)
    */
    widgetType?: string,

    /**
     * Whether to allow the user to edit the insights (faces names, transcript, etc).
     */
    allowEdit?: boolean
}

export interface GetInsightsWidgetUrlByExternalIdOptions {
    parameters: GetInsightsWidgetUrlByExternalIdParameters
}

export interface GetInsightsWidgetUrlByExternalIdParameters {
    
    /** 
     * An external id to search for (which was associated with a video of this subscription at upload).
    */
    externalId: string,

    /**
     * A type of a sub-widget to include (People, Sentiments, Keywords, Search)
     */
    widgetType?: string,

    /**
     * Whether to allow the user to edit the insights (faces names, transcript, etc).
     */
    allowEdit?: boolean
}

export interface GetPlayerWidgetUrlOptions {
    parameters: GetPlayerWidgetUrlParameters   
}

export interface GetPlayerWidgetUrlParameters {
    /**
    * The breakdown id.
    */
   breakdownId: string
}

export interface GetCaptionsUrlOptions {
    parameters: GetCaptionsUrlParameters
}

export interface GetCaptionsUrlParameters {
     /**
    * The breakdown id.
    */
   breakdownId: string,

   /**
    * The requested language of the VTT
    */
   language: string
}

export interface ReIndexBreakdownOptions {
    parameters: ReIndexBreakdownParameters
}

export interface ReIndexBreakdownParameters {
    
    /** 
     * The breakdown id.
    */
    id: string,

    /** 
     * A url to notify when indexing is completed. It should be a POST url and VideoIndexer will add 2 additional query string parameters to it: id and state.
    */
    callbackUrl?: string,

    /** 
     * Whether to index audio dimensions (transcript, sentiment, etc).
    */
    indexAudio?: boolean,

    /** 
     * Whether to index video dimensions (faces, OCR, etc).
    */
    indexVideo?: boolean,

    /**
     * Whether to publish the video via adaptive bitrate (to support different network conditions)
     */
    publishAdaptiveBitrate?: boolean,

    /** 
     * The indexing preset to use (Default/AudioOnly)
    */
    indexingPreset?: string,

    /**
     * The streaming preset to use (Default/AdaptiveBitrate)
     */
    streamingPreset?: string,

    /**
     * Linguistic model id as received by 'create linguistic model' call
     */
    linguisticModelId?: string
}

export interface ReIndexBreakdownByExternalIdOptions {
    parameters: ReIndexBreakdownByExternalIdParameters
}

export interface ReIndexBreakdownByExternalIdParameters {
    /** 
     * An external id (which was associated with a video of this subscription at upload).
    */
   externalId: string,

   /** 
    * A url to notify when indexing is completed. It should be a POST url and VideoIndexer will add 2 additional query string parameters to it: id and state.
   */
   callbackUrl?: string,

   /** 
    * The indexing preset to use (Default/AudioOnly)
   */
   indexingPreset?: string,

   /**
    * The streaming preset to use (Default/AdaptiveBitrate)
    */
   streamingPreset?: string
}

export interface SearchByOptions {
    parameters: SearchByParameters
}

export interface SearchByParameters {
    
    /**
     * A privacy level (Private, Organization, Public).
     */
    privacy?: string,

    /** 
     * A breakdown id to search for.
    */
    id?: string,

    /**
     * A partition to search for.
     */
    partition?: string,

    /** 
     * An owner to search for.
    */
    owner?: string,

    /** 
     * A face to search for.
    */
    face?: string,

    /**
     * Free text to search for.
     */
    query?: string,

    /** 
     * The text scope to search in.
    */
    textScope?: string,

    /**
     * The number of results to return.
     */
    pageSize?: number,

    /**
     * The number of results to skip (used for paging).
     */
    skip?: number,

    /** 
     * An external id to search for (which was associated with the video at upload).
    */
    externalId?: string,

    /**
     * The language to search in.
     */
    language?: string,

    /**
     * Whether to look in the Public account (otherwise, in the user's account).
     */
    searchInPublicAccount?: boolean
}

export interface UpdateFaceNameOptions {
    parameters: UpdateFaceNameParameters
}

export interface UpdateFaceNameParameters {

    /**
     * The breakdown id.
     */
    breakdownId: string,

    /**
     * The face id (from the video's json)
     */
    faceId: number,
    
    /**
     * The new name for the face (use 'Unknown #1/2/3...' to make it anonymous again)
     */
    newName: string
}

export interface UpdateTranscriptOptions {
    parameters: UpdateTranscriptParameters,
    headers?: ContentTypeHeaderTypes & OcpApimSubscriptionKeyHeaders,
    body: {url?: string} | any
}

export interface UpdateTranscriptParameters {

    /**
    * The breakdown id.
    */
   breakdownId: string,

   /**
    * The language to update
    */
   language: string,

   /** 
    * For example, if the callback url is 'https://test.com/notifyme?projectName=MyProject', the notification will be sent with additional parameters to 'https://test.com/notifyme?projectName=MyProject&id=1234abcd&state=Processed'.
   */
   callbackUrl?: string
}