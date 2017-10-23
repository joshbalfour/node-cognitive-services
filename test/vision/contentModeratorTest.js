const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Content moderator', () => {

    const client = new cognitive.contentModerator({
        apiKey: config.contentModerator.apiKey,
        endpoint: config.contentModerator.endpoint
    });

    describe('Detect language in text', () => {
        it('should return response', (done) => {
            const body = "Is this a crap email abcdef@abcd.com, phone: 6657789887, IP: 255.255.255.255, 1 Microsoft Way, Redmond, WA 98052";
            
            const headers = {
                'Content-type': 'text/plain'
            };

            const parameters = {};

            client.detectLanguage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).eql("eng")
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Screen text', () => {
        it('should return response', (done) => {
            const body = "Is this a crap email abcdef@abcd.com, phone: 6657789887, IP: 255.255.255.255, 1 Microsoft Way, Redmond, WA 98052";
            
            const headers = {
                'Content-type': 'text/plain'
            };

            const parameters = {
                'PII': true,
                'language': 'eng',
                'autocorrect': true
            };

            client.screenText({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['OriginalText', 'NormalizedText', 'AutoCorrectedText', 'PII', 'Terms'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Evaluate image', () => {
        it('should return response when image is sent in body', (done) => {
            const body = fs.readFileSync('./test/assets/happy_face.jpg');
            
            const headers = {
                'Content-type': 'image/jpeg'
            };

            const parameters = {
                'cacheImage': false,
            };

            client.evaluateImage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['AdultClassificationScore', 'IsImageAdultClassified', 'RacyClassificationScore', 'IsImageRacyClassified'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })

        it('should return response when image is sent in JSON url', (done) => {
            const body = {
                "DataRepresentation": "URL",
                "Value": "https://raw.githubusercontent.com/Microsoft/Cognitive-Face-Windows/master/Data/detection1.jpg"
              }
            
            const headers = {
                'Content-type': 'application/json'
            };

            const parameters = {
                'cacheImage': false,
            };

            client.evaluateImage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['AdultClassificationScore', 'IsImageAdultClassified', 'RacyClassificationScore', 'IsImageRacyClassified'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Get faces from image', () => {
        it('should return response when image is sent in body', (done) => {
            const body = fs.readFileSync('./test/assets/happy_face.jpg');
            
            const headers = {
                'Content-type': 'image/jpeg'
            };

            const parameters = {
                'cacheImage': false,
            };

            client.findFacesInImage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['Result', 'Count', 'Faces']);
                should(response.Count).eql(1);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })

        it('should return response when image is sent in JSON url', (done) => {
            const body = {
                "DataRepresentation": "URL",
                "Value": "https://raw.githubusercontent.com/Microsoft/Cognitive-Face-Windows/master/Data/detection1.jpg"
              }
            
            const headers = {
                'Content-type': 'application/json'
            };

            const parameters = {
                'cacheImage': false,
            };

            client.findFacesInImage({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['Result', 'Count', 'Faces']);
                should(response.Count).eql(1);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('OCR', () => {
        it('should return response when image is sent in JSON url', (done) => {
            const body = {
                "DataRepresentation":"URL",
                "Value":"https://moderatorsampleimages.blob.core.windows.net/samples/sample.jpg"
              }
            
            const headers = {
                'Content-type': 'application/json'
            };

            const parameters = {
                'language': 'eng',
                'cacheImage': false,
                'enhanced': false
            };

            client.ocr({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['Language', 'Text', 'Candidates']);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Image Lists', () => {
        var imageListId;
        var imageId;

        before(done => {
            console.log('Creating image list...');
            const body = {
                "Name": "test image list",
                "Description": "some faces",
            };

            client.createImageList({
                body
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['Id', 'Description', 'Name', 'Metadata']);
                imageListId = response.Id;
                
                console.log('Adding image to list...');
                const body = {
                    "DataRepresentation": "URL",
                    "Value":"https://moderatorsampleimages.blob.core.windows.net/samples/img_300.jpg"
                };

                const parameters = {
                    listId: imageListId,
                    tag: 401, // violence
                    label: 'George Bush'
                }

                const headers = {
                    'Content-type': 'application/json'
                }

                return client.addImageToList({
                    parameters,
                    headers,
                    body
                })
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['ContentId', 'AdditionalInfo', 'Status', 'TrackingId']);
                imageId = response.ContentId;
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        after(done => {
            console.log('Deleting all images from list...');
            const parameters = {
                listId: imageListId
            };

            client.deleteAllImagesFromList({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                console.log('Deleting image list...');

                return client.deleteImageList({
                    parameters
                })
            })
            .then(response => {
                should(response).eql("");
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should get list details', done => {
            const parameters = {
                listId: imageListId
            };

            client.getDetailsForImageList({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['Id', 'Description', 'Metadata', 'Name'])
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should refresh search index', done => {
            const parameters = {
                listId: imageListId,
            };

            client.refreshSearchIndexOfImageList({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should update list details', done => {
            const parameters = {
                listId: imageListId
            };

            const body = {
                "Name": "test image list - UPDATED",
                "Description": "some faces - UPDATED",
            };

            client.updateImageList({
                parameters,
                body
            })
            .then(response => {
                should(response).not.be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should get all image lists', done => {
            client.getAllImageLists()
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.Array();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should get all image IDs from a list', done => {
            const parameters = {
                listId: imageListId,
            };

            client.getAllImageIdsFromList({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['ContentSource', 'ContentIds', 'Status']);
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should delete image from list', done => {
            const parameters = {
                listId: imageListId,
                imageId: imageId
            };

            client.deleteImageFromList({
                parameters
            })
            .then(response => {
                should(response).eql("");
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should match against an image list', done => {
            const parameters = {
                listId: imageListId,
                cacheImage: false
            };

            const body = {
                "DataRepresentation": "URL",
                "Value":"https://moderatorsampleimages.blob.core.windows.net/samples/img_300.jpg"
            }

            const headers = {
                'Content-type': 'application/json'
            }

            client.matchImageAgainstList({
                parameters,
                headers,
                body
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['TrackingId', 'Status', 'IsMatch', 'Matches']);
                done();
            })
            .catch(err => {
                done(err);
            })
        })
    })

    describe('Terms Lists', () => {
        var termListId;
        var termId;

        before(done => {
            console.log('Creating term list...');
            const body = {
                "Name": "test term list",
                "Description": "some banned terms",
            };

            client.createTermList({
                body
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['Id', 'Description', 'Name', 'Metadata']);
                termListId = response.Id;
                
                console.log('Adding term to list...');
                const parameters = {
                    listId: termListId,
                    term: 'cunt',
                    language: 'eng'
                };

                return client.addTermToList({
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

        after(done => {
            console.log('Deleting all terms from list...');
            const parameters = {
                listId: termListId,
                language: 'eng'
            };

            client.deleteAllTermsFromList({
                parameters
            })
            .then(response => {
                should(response).be.undefined();
                console.log('Deleting term list...');

                return client.deleteTermList({
                    parameters
                })
            })
            .then(response => {
                should(response).eql("");
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should get term list details', done => {
            const parameters = {
                listId: termListId
            };

            client.getDetailsForTermList({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['Id', 'Description', 'Metadata', 'Name'])
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should refresh search index', done => {
            const parameters = {
                listId: termListId,
                language: 'eng'
            };

            client.refreshSearchIndexOfTermList({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should update term list details', done => {
            const parameters = {
                listId: termListId
            };

            const body = {
                "Name": "test term list - UPDATED",
                "Description": "some banned terms - UPDATED",
            };

            client.updateTermList({
                parameters,
                body
            })
            .then(response => {
                should(response).not.be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should get all term lists', done => {
            client.getAllTermLists()
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.Array();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should get all terms from a list', done => {
            const parameters = {
                listId: termListId,
                language: 'eng'
            };

            client.getAllTermsFromList({
                parameters
            })
            .then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['Data', 'Paging']);
                should(response.Data).have.properties(['Language', 'Terms', 'Status', 'TrackingId']);
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should delete term from list', done => {
            const parameters = {
                listId: termListId,
                term: 'cunt',
                language: 'eng'
            };

            client.deleteTermFromList({
                parameters
            })
            .then(response => {
                should(response).be.undefined();
                done();
            })
            .catch(err => {
                done(err);
            })
        })

        it('should try to match term against list', (done) => {
            const parameters = {
                listId: termListId,
                term: '020-7031-3000',
                language: 'eng'
            };

            client.addTermToList({
                parameters
            })
            .then(response => {

                const parameters = {
                    listId: termListId,
                    language: 'eng'
                };
    
                return client.refreshSearchIndexOfTermList({
                    parameters
                })

            })
            .then(response => {
                const body = "phone: 020-1722-2301";
                
                const headers = {
                    'Content-type': 'text/plain'
                };
    
                const parameters = {
                    PII: true,
                    language: 'eng',
                    listId: termListId
                };
    
                return client.screenText({
                    parameters,
                    headers,
                    body
                })
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['OriginalText', 'NormalizedText', 'PII', 'Terms'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})