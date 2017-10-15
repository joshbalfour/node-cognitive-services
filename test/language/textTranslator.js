const cognitive = require('../../index.js');
const config = require('../config.js');
const should = require('should');

describe('Text translator', () => {

    const client = cognitive.textTranslator({
        apiKey: config.textTranslator.apiKey,
        endpoint: config.textTranslator.endpoint
    });

    describe('translate array', () => {
        it('should return response', (done) => {
            const parameters = {
                from: "en",
                to: "es",
                sourceTexts: [
                    "The answer lies in machine translation.",
                    "the best machine translation technology cannot always provide translations tailored to a site or users like a human ",
                    "Simply copy and paste a code snippet anywhere "
                ],
                contentType: "text/plain"
            }

            client.translateArray({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(3);
                should(response[0]).have.properties(["From", "OriginalTextSentenceLengths", "TranslatedText", "TranslatedTextSentenceLengths"]);
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })

        it('should mark profan words when auto-detecting language', (done) => {
            const parameters = {
                to: "en",
                sourceTexts: [
                    "She is a stupid bitch"
                ],
                profanityAction: "Marked",
                contentType: "text/plain"
            }

            client.translateArray({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(1);
                should(response[0]).have.properties(["From", "OriginalTextSentenceLengths", "TranslatedText", "TranslatedTextSentenceLengths"]);
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('translate', () => {
        it('should return response', (done) => {
            const parameters = {
                from: "en",
                to: "es",
                text: "The answer lies in machine translation.",
                contentType: "text/plain"
            }

            client.translate({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).be.String();
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('get language names', () => {
        it('should return response', (done) => {
            const parameters = {
                languageCodes: ['es', 'en'],
                locale: 'en-US'
            }

            client.getLanguageNames({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(2);
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('get languages for translate', () => {
        it('should return response', (done) => {
            client.getLanguagesForTranslate()
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.Array();
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('get languages for speak', () => {
        it('should return response', (done) => {
            client.getLanguagesForSpeak()
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.Array();
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('speak', () => {
        it('should return response', (done) => {
            const parameters = {
                text: "hello world. my name is peter.",
                language: "en",
                format: "audio/mp3"
            }

            client.speak({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined(); //raw mp3!
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('detect', () => {
        it('should return response', (done) => {
            const parameters = {
                text: "hello world. my name is peter."
            }

            client.detect({
                parameters
            })
            .then(response => {
                should(response).equal('en');
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('detect array', () => {
        it('should return response', (done) => {
            const parameters = {
                texts: [
                    "hello world. my name is peter.",
                    "hola mundo. mi nombre es pedro"
                ]
            };

            client.detectArray({
                parameters
            })
            .then(response => {
                should(response).be.Array().and.have.length(2);
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('add translation', () => {
        it('should return response', (done) => {
            const parameters = {
                originalText: "mi nombre es pedro",
                translatedText: "my name is peter",
                from: "es",
                to: "en",
                user: "default"
            };

            client.addTranslation({
                parameters
            })
            .then(response => {
                should(response).be.undefined();
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('add translation array', () => {
        it('should return response', (done) => {
            const parameters = {
                from: "es",
                to: "en",
                user: "default",
                translations: [{
                    originalText: "mi nombre es pedro",
                    translatedText: "my name is peter",
                    rating: 1
                }, {
                    originalText: "como te va?",
                    translatedText: "how are you doing?",
                    rating: 1
                }],
                contentType: "text/plain"
            };

            client.addTranslationArray({
                parameters
            })
            .then(response => {
                should(response).eql("");
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('break sentences', () => {
        it('should return response', (done) => {
            const parameters = {
                text: "hello world my name is peter i am 26 years old i am a software engineer",
                language: "en"
            };
            client.breakSentences({
                parameters
            })
            .then(response => {
                should(response).be.Array();
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('get translations', () => {
        it('should return response', (done) => {
            const parameters = {
                from: "en",
                to: "es",
                text: "The answer lies in machine translation.",
                maxTranslations: 5,
            }

            client.getTranslations({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['From', 'Translations']);
                should(response.Translations).be.Array();
                should(response.Translations[0]).have.properties(['TranslationMatch']);
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('get translations array', () => {
        it('should return response', (done) => {
            const parameters = {
                from: "en",
                to: "es",
                texts: [
                    "The answer lies in machine translation.",
                    "the best machine translation technology cannot always provide translations tailored to a site or users like a human ",
                    "Simply copy and paste a code snippet anywhere "
                ],
                maxTranslations: 5,
            }

            client.getTranslationsArray({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(3);
                should(response[0]).have.properties(['From', 'Translations']);
                done();
            }).catch(err => {
                done(new Error("Error making request:" + err));
            });
        })
    })

})