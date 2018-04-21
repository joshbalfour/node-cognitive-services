const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe.skip('Recommendations', () => {

    const client = new cognitive.recommendations({
        apiKey: config.recommendations.apiKey,
        endpoint: config.recommendations.endpoint
    });

    var modelId = null;
    var usageFileId;

    before(done => {
        console.log('Creating model...')
        const headers = {
            'Content-type': 'application/json'
        };

        const body = {
            modelName: 'testModel',
            description: 'test description'
        }

        client.createAModel({
            headers,
            body
        }).then(response => {
            should(response).have.properties(['id', 'name', 'description', 'createdDateTime', 'activeBuildId']);
            modelId = response.id;
            done();
        }).catch(err => {
            done(err)
        })
    })

    after(done => {
        if (modelId === null) {
            done();
            return;
        }
        console.log('Deleting model...')
        const parameters = {
            modelId: modelId
        };

        client.deleteAModel({
            parameters
        }).then(response => {
            should(response).be.undefined();
            done();
        }).catch(err => {
            done(err)
        })
    })

    describe('Get all models', () => {
        it('should get response', done => {
            client.getAllModels()
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.property('models');
                done();
            })
            .catch(err => {
                done(err);
            })
        })
    })

    describe('Get all builds', () => {
        it('should get response', done => {
            const parameters = {
                modelId: modelId
            }
            client.getAllBuilds({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.property('builds');
                done();
            })
            .catch(err => {
                done(err);
            })
        })
    })

    describe('Get all business rules', () => {
        it('should get response', done => {
            const parameters = {
                modelId: modelId
            }
            client.getAllBusinessRules({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.property('rules');
                done();
            })
            .catch(err => {
                done(err);
            })
        })
    })

    describe('Catalog and usage', () => {
        before(done => {
            var parameters = {
                modelId: modelId,
                catalogDisplayName: 'books catalog'
            }

            var body = fs.readFileSync('test/assets/books_catalog.txt');

            console.log("Uploading catalog...")
            client.uploadACatalogFileToAModel({
                parameters,
                body
            }).then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['processedLineCount', 'errorLineCount', 'importedLineCount'])
                parameters = {
                    modelId: modelId,
                    usageDisplayName: 'books usage'
                }
    
                body = fs.readFileSync('test/assets/books_usage.txt');

                console.log("Uploading usage...")
                return client.uploadAUsageFileToAModel({
                    parameters,
                    body
                })
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['fileId', 'processedLineCount', 'errorLineCount', 'importedLineCount'])
                usageFileId = response.fileId;
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        after(done => {
            console.log('Deleting all catalog items...')
            var parameters = {
                modelId: modelId,
                deleteAll: true
            }
            client.deleteCatalogItems({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.property('deletedItemCount');

                parameters = {
                    modelId: modelId
                }

                return client.deleteAllUsageFiles({
                    parameters
                })
            })
            .then(response => {
                should(response).be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should delete catalog items sent in the body', done => {
            const parameters = {
                modelId: modelId,
                deleteAll: false
            }
            const body = fs.readFileSync('test/assets/books_catalog_items.txt');

            client.deleteCatalogItems({
                parameters,
                body
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['processedLineCount', 'errorLineCount', 'deletedItemCount'])
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should get all catalog items', done => {
            const parameters = {
                modelId: modelId
            }
            client.getAllCatalogItems({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.property('value');
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should upload usage event', done => {
            const parameters = {
                modelId: modelId
            };
            const headers = {
                "Content-type": "application/json"
            };
            const body = {
                "userId": "11400",
                "events": [
                    {
                        "eventType": "Purchase",
                        "itemId": "20442602",
                        "timestamp": "2014-05-03T06:05:59",
                        "count": 1,
                        "unitPrice": 15.0
                    }
                ]
            };

            client.uploadUsageEvent({
                parameters,
                headers,
                body
            })
            .then(response => {
                should(response).be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })
        })
    })
})