const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const promiseDelay = require('sleep-promise');

describe('QnA maker', () => {

    const client = new cognitive.qnaMaker({
        apiKey: config.qnaMaker.apiKey,
        endpoint: config.qnaMaker.endpoint,
        runtimeEndpoint: config.qnaMaker.runtimeEndpoint,
    });

    var knowledgeBaseId = false;

    before(done => {
        console.log('Generating knowledge base...')
        const body = {
            "name": "QnA Maker FAQ Bot",
            "qnapairs": [
                {
                    "answer": "You can change the default message if you use the QnAMakerDialog. See this for details: https://docs.botframework.com/en-us/azure-bot-service/templates/qnamaker/#navtitle",
                    "question": "How can I change the default message from QnA Maker?"
                },
                {
                    "answer": "You can use our REST apis to manage your KB. See here for details: https://westus.dev.cognitive.microsoft.com/docs/services/58994a073d9e04097c7ba6fe/operations/58994a073d9e041ad42d9baa",
                    "question": "How do I programmatically update my KB?"
                }
            ],
            "urls": [
                "https://docs.microsoft.com/en-in/azure/cognitive-services/qnamaker/faqs"
            ]
        };

        client.createKnowledgeBase({
            body
      }).then(response => {
          should(response).not.be.undefined();
          should(response).have.properties(['operationState', 'userId', 'operationId', 'createdTimestamp', 'lastActionTimestamp']);
          var parameters = {
            operationId: response.operationId
          }
          return promiseDelay(client.retryInterval)
            .then(() => {
              return client.getOperationStatus({
                parameters
            })
          });
          
        }).then(response => {
          should(response).not.be.undefined();
          should(response).have.properties(['resourceLocation']);
          const regex = /\/knowledgebases\/(.*)/gm;
          knowledgeBaseId = regex.exec(response['resourceLocation'])[1];

          const parameters = {
            knowledgeBaseId: knowledgeBaseId
          };

          return client.publishKnowledgeBase({
            parameters
        })
        }).then(response => {
            should(response).be.undefined();
            done();
        }).catch(err => {
            done(err);
        });
    })

    after(done => {
        if (!knowledgeBaseId) {
            return done();
        }
        console.log('Deleting knowledge base...')
        const parameters = {
            knowledgeBaseId: knowledgeBaseId
        };

        client.deleteKnowledgeBase({
            parameters
        }).then(response => {
            should(response).be.undefined();
            done();
            console.log('Deleted')
        }).catch(err => {
            done(err);
            console.log('Not deleted')
        });
    })

    describe('Download knowledge base', () => {
        it('should return response', (done) => {
            const parameters = {
                knowledgeBaseId: knowledgeBaseId
            };

            client.downloadKnowledgeBase({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

    describe('Generate answer', () => {
        it('should return response', (done) => {
            const parameters = {
                knowledgeBaseId: knowledgeBaseId
            };

            const body = {
                "question": "is qna maker free?",
                "top": 3
            };

            client.generateAnswer({
                parameters,
                body
            }).then(response => {
                should(response).not.be.undefined();
                should(response).have.property('answers');
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

    describe('Get alterations', () => {
        it('should return response', (done) => {
            const parameters = {
                knowledgeBaseId: knowledgeBaseId
            };

            client.getAlterations({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).have.property('wordAlterations')
                should(response.wordAlterations).be.Array();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })


    describe('Train knowledge base', () => {
        it('should return response', (done) => {
            const parameters = {
                knowledgeBaseId: knowledgeBaseId
            };

            const body = {
                "feedbackRecords": [
                    {
                        "userId": "1",
                        "userQuestion": "hey",
                        "kbQuestion": "hi",
                        "kbAnswer": "hey"
                    }
                ]
            };

            client.trainKnowledgeBase({
                parameters,
                body
            }).then(response => {
                should(response).be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

    describe('Update alterations', () => {
        it('should return response', (done) => {
            const parameters = {
                knowledgeBaseId: knowledgeBaseId
            };

            const body = {
                "add": [
                    {
                        "word": "botframework",
                        "alterations": [
                            "bot frame work"
                        ]
                    }
                ]
            };

            client.updateAlterations({
                parameters,
                body
            }).then(response => {
                should(response).be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

    describe('Update knowledge base', () => {
        it('should return response', (done) => {
            const parameters = {
                knowledgeBaseId: knowledgeBaseId
            };

            const body = {
                "add": {
                    "qnaPairs": [
                        {
                            "answer": "Hello, How can I help you?",
                            "question": "Hello"
                        }
                    ],
                    "urls": [
                        "https://docs.microsoft.com/en-in/azure/cognitive-services/qnamaker/faqs"
                    ]
                },
                "delete": {
                    "qnaPairs": [
                        {
                            "answer": "The QnA Maker tool ingests and matches data in UTF-16 encoding. This means that any language should work as is. Having said that, we have only extensively tested the relevance of the service for EN yet.",
                            "question": "Does the QnA Maker support non-EN languages?"
                        }
                    ]
                }
            };

            client.updateKnowledgeBase({
                parameters,
                body
            }).then(response => {
                should(response).be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })
})