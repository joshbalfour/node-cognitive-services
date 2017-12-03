const commonService = require('../commonService');

/**
 * Speaker Recognition APIs are cloud-based APIs that provide the most advanced algorithms for speaker verification and speaker identification. 
 * Speaker Recognition can be divided into two categories: speaker verification and speaker identification.
 * @augments commonService
 * {@link https://westus.dev.cognitive.microsoft.com/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797|documentation}
 */
class commonSpeaker extends commonService {
    /**
     * Constructor.
     * 
     * @param {Object} obj
     * @param {string} obj.apiKey
     * @param {string} obj.endpoint
     */
    constructor({ apiKey, endpoint }) {
        super({ apiKey, endpoint });
        this.endpoints = [
            "westus.api.cognitive.microsoft.com"
        ];
    }
}

module.exports = commonSpeaker;