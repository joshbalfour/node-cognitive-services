import { CommonConstructorOptions } from "..";

/**
 * Content moderation is the process of monitoring User Generated Content (UGC) on online and social media web sites, chat and messaging platforms, enterprise environments, gaming platforms, and peer communication platforms. 
 * The goal is to track, flag, assess, and filter out offensive and unwanted content that creates risks for businesses. 
 * The content can include text, images, and videos.
 * 
 */
export class contentModerator {
    
    constructor(options: CommonConstructorOptions);
    detectLanguage(): Promise<any>;
    screenText(): Promise<any>;
    evaluateImage(): Promise<any>;
    findFacesInImage(): Promise<any>;
    ocr(): Promise<any>;
    matchImageAgainstList(): Promise<any>;
    createImageList(): Promise<any>;
    addImageToList(): Promise<any>;
    deleteAllImagesFromList(): Promise<any>;
    deleteImageList(): Promise<any>;
    deleteImageFromList(): Promise<any>;
    getDetailsForImageList(): Promise<any>;
    getAllImageIdsFromList(): Promise<any>;
    getAllImageLists(): Promise<any>;
    refreshSearchIndexOfImageList(): Promise<any>;
    updateImageList(): Promise<any>;
    createTermList(): Promise<any>;
    addTermToList(): Promise<any>;
    deleteAllTermsFromList(): Promise<any>;
    deleteTermList(): Promise<any>;
    deleteTermFromList(): Promise<any>;
    getDetailsForTermList(): Promise<any>;
    getAllTermsFromList(): Promise<any>;
    getAllTermLists(): Promise<any>;
    refreshSearchIndexOfTermList(): Promise<any>;
    updateTermList(): Promise<any>;
}