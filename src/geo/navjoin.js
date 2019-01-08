const commonService = require('../commonService');

/**
 * Project Local Insights - Preview
Score the attractiveness of a location, based on how many of a particular amenity are within a specific distance. 10,000 transactions per month, 1 per second.
 */
class navJoin extends commonService {
  /**
   * Constructor.
   * 
   * @param {Object} obj
   * @param {string} obj.apiKey
   */
  constructor({ apiKey }) {
    super({ apiKey, endpoint: "api.labs.cognitive.microsoft.com" });
    this.endpoints = ["api.labs.cognitive.microsoft.com"];
  }

  /**
   * GetNavJoinResults
   * @returns {Promise.<object>}
  */
  getNavJoinResults({ parameters }) {

    const operation = {
      "path": "BingMaps/NavJoin",
      "method": "GET",
      "operationId": "58f0410559c83010380741ae",
      "parameters": [{
        "name": "startPoint",
        "required": true,
        "type": "queryStringParam",
        "typeName": "string"
      }, {
        "name": "routeMode",
        "required": true,
        "type": "queryStringParam",
        "typeName": "string",
        "options": ["driving", "walking"]
      }, {
        "name": "categoryIds",
        "required": true,
        "type": "queryStringParam",
        "typeName": "string"
      }, {
        "name": "maxDistance",
        "required": false,
        "type": "queryStringParam",
        "typeName": "number"
      }, {
        "name": "maxTime",
        "required": false,
        "type": "queryStringParam",
        "typeName": "number"
      }, {
        "name": "routeAvoid",
        "required": false,
        "type": "queryStringParam",
        "typeName": "string"
      }, {
        "name": "culture",
        "required": false,
        "type": "queryStringParam",
        "typeName": "string"
      }, {
        "name": "departTime",
        "required": false,
        "type": "queryStringParam",
        "typeName": "string"
      }]
    };

    return this.makeRequest({
      operation: operation,
      parameters: parameters
    })
  };
}

module.exports = navJoin;