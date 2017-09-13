const cognitive = require('../index.js');
const config = require('./config.js');
const should = require('should');

describe.only('Web language model', () => {

    const client = cognitive.webLanguageModel({
        API_KEY: config.webLanguageModel.apiKey,
        endpoint: config.webLanguageModel.endpoint
    });

    describe('Break into words (POST)', () => {
        it('should return response', (done) => {
            const parameters = {
                "model": "body",
                "text": "hello seattle"
            };

            const headers = {};

            client.breakIntoWords({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['candidates'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Calculate Conditional Probability (POST)', () => {
        it('should return response', (done) => {
            const parameters = {
                "model": "body",
                "text": "hello seattle"
            };

            const headers = {
                "Content-type": "application/json"
            };

            const body = {
                "queries": [
                    {
                        "words": "hello world wide",
                        "word": "web"
                    },
                    {
                        "words": "hello world wide",
                        "word": "range"
                    },
                    {
                        "words": "hello world wide",
                        "word": "open"
                    }
                ]
            }

            client.calculateConditionalProbability({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['results'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Calculate Joint Probability (POST)', () => {
        it('should return response', (done) => {
            const parameters = {
                "model": "body",
            };

            const headers = {
                "Content-type": "application/json"
            };

            const body = {
                "queries":
                [
                    "this",
                    "is",
                    "this is"
                ]
            };

            client.calculateJointProbability({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['results'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Generate Next Words (POST)', () => {
        it('should return response', (done) => {
            const parameters = {
                "model": "body",
                "words": "range open angle happy"
            };

            client.generateNextWords({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['candidates'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('List Available Models (GET)', () => {
        it('should return response', (done) => {

            client.listAvailableModels()
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['models'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})