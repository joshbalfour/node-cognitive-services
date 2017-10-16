const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Recommendations', () => {

    const client = new cognitive.recommendations({
        apiKey: config.recommendations.apiKey,
        endpoint: config.recommendations.endpoint
    });

    var modelId;

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

    describe('Get all catalog items', () => {
        it('should get response', done => {
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
    })

    describe('Catalog', () => {
        it('should upload in .txt format', done => {
            const parameters = {
                modelId: modelId,
                catalogDisplayName: 'books catalog'
            }

            const body = fs.readFileSync('test/assets/books_catalog.txt');

            client.uploadACatalogFileToAModel({
                parameters,
                body
            }).then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['processedLineCount', 'errorLineCount', 'importedLineCount'])
                done();
            })
            .catch(err => {
                done(err);
            })
        })
    })

})