const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('QnA maker v4', () => {

    const client = new cognitive.qnaMakerV4({
        apiKey: config.qnaMaker.apiKey,
        endpoint: config.qnaMaker.endpoint
    });

    var knowledgeBaseId;

    before(done => {
        console.log('Generating knowledge base...')
        const body = {
            "name": "QnA Maker FAQ",
            "qnaList": [
              {
                "id": 0,
                "answer": "You can change the default message if you use the QnAMakerDialog. See this for details: https://docs.botframework.com/en-us/azure-bot-service/templates/qnamaker/#navtitle",
                "source": "Custom Editorial",
                "questions": [
                  "How can I change the default message from QnA Maker?"
                ],
                "metadata": []
              },
              {
                "id": 0,
                "answer": "You can use our REST apis to manage your KB. See here for details: https://westus.dev.cognitive.microsoft.com/docs/services/58994a073d9e04097c7ba6fe/operations/58994a073d9e041ad42d9baa",
                "source": "Custom Editorial",
                "questions": [
                  "How do I programmatically update my KB?"
                ],
                "metadata": [
                  {
                    "name": "category",
                    "value": "api"
                  }
                ]
              }
            ],
            "urls": [
              "https://docs.microsoft.com/en-in/azure/cognitive-services/qnamaker/faqs",
              "https://docs.microsoft.com/en-us/bot-framework/resources-bot-framework-faq"
            ],
            "files": [
              {
                "fileName": "SurfaceManual.pdf",
                "fileUri": "https://download.microsoft.com/download/2/9/B/29B20383-302C-4517-A006-B0186F04BE28/surface-pro-4-user-guide-EN.pdf"
              }
            ]
          }

        client.createKnowledgeBase({
            body
        }).then(response => {
            should(response).not.be.undefined();
            should(response).have.properties(['operationState', 'userId', 'operationId', 'createdTimestamp', 'lastActionTimestamp']);
            var parameters = {
                id: response.operationId
            }
            return client.getOperationDetails({
                parameters
            })
        }).then(response => {
            should(response).not.be.undefined();
            should(response).have.properties(['operationState', 'userId', 'operationId', 'createdTimestamp', 'lastActionTimestamp']);
            setTimeout(() => {
                done();
            }, 3000); // Wait 3s then resolve.
        }).catch(err => {
            done(err);
            console.error(err);
        });
    })

    it('gets alterations', done => {
        client.getAlterations()
        .then(response => {
            should(response).not.be.undefined();
            done();
        }).catch(err => {
            done(err);
            console.error(err);
        });
    })

    after(done => {
        if (!knowledgeBaseId) {
            done();
            return;
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
        }).catch(err => {
            done(err);
            console.error(err);
        });
    })
    
})