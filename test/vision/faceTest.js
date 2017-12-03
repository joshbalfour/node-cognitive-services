const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

function makeId(length) {
    var text = "";
    var possible = "0123456789abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

describe('Face', () => {

    const SATYA_NADELLA_IMAGE_URL = "http://s3.amazonaws.com/digitaltrends-uploads-prod/2014/02/Satya-Nadella-quotes.jpg";

    const personGroupId = "test-" + makeId(8);
    var personId = null;

    const face = new cognitive.face({
        apiKey: config.face.apiKey,
        endpoint: config.face.endpoint
    });

    before((done) => {
        // create a person group
        var parameters = {
            "personGroupId": personGroupId
        };
        var body = {
            "name": personGroupId
        };

        face.createAPersonGroup({
            parameters,
            body
        }).then((response) => {
            should(response).be.undefined();
            // create a person
            body = {
                "name": "johndoe"
            }
            parameters = {
                'personGroupId': personGroupId
            }

            return face.createAPerson({
                parameters,
                body
            })
        }).then((response) => {
            should(response).not.be.undefined();
            should(response).has.property('personId');
            personId = response.personId;
            done();
        }).catch((err) => {
            done(err);
        })

    })

    describe('Face', () => {
        var faceId1, faceId2;

        it('should detect when body is in json format', (done) => {
            const parameters = {
                returnFaceId: "true",
                returnFaceLandmarks: "true",
                returnFaceAttributes: "age,gender,headPose,smile,facialHair,glasses"
            };
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": SATYA_NADELLA_IMAGE_URL
            };

            face.detect({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response.length).eql(1);
                should(response[0]).have.properties(['faceAttributes', 'faceId', 'faceLandmarks', 'faceRectangle']);
                faceId1 = response[0].faceId;
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should detect when body is in binary', (done) => {
            const parameters = {
                returnFaceId: "true",
                returnFaceLandmarks: "true",
                returnFaceAttributes: "age,gender,headPose,smile,facialHair,glasses"
            };
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            const body = fs.readFileSync('./test/assets/happy_face.jpg');
            
            face.detect({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response.length).eql(1);
                should(response[0]).have.properties(['faceAttributes', 'faceId', 'faceLandmarks', 'faceRectangle']);
                faceId2 = response[0].faceId;
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should find similar', (done) => {
            const body = {
                "faceId": faceId1,
                "faceIds": [faceId1, faceId2]
            }
            
            face.findSimilar({
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array;
                should(response[0]).have.properties(['faceId', 'confidence']);
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should group faces', done => {
            const body = {
                "faceIds": [faceId1, faceId2]
            }
            
            face.group({
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['groups', 'messyGroup']);
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should verify faces', done => {
            const body = {
                "faceId1": faceId1,
                "faceId2": faceId2
            }
            
            face.verify({
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['isIdentical', 'confidence']);
                done();
            }).catch((err) => {
                done(err);
            });
        })

    })

    describe('Face list', () => {
        const faceListId = 'test-faceid';

        before((done) => {
            // create a face list
            const parameters = {
                faceListId: faceListId,
            };
            const body = {
                "name": "this is a sample face list",
            }

            face.createAFaceList({
                parameters,
                body
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            })
        })

        after((done) => {
            // delete the face list
            const parameters = {
                faceListId: faceListId
            };

            face.deleteAFaceList({
                parameters
            })
            .then((response) => {
                done();
            })
            .catch((err) => {
                done(err);
            })
        })

        it('should get a face list, list them all', (done) => {
            var parameters = {
                faceListId: faceListId
            };

            face.getAFaceList({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['faceListId', 'name', 'userData', 'persistedFaces']);

                return face.listFaceLists();
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(1);
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should add a face to the face list and delete it', (done) => {
            var parameters = {
                faceListId: faceListId
            };

            const headers = {
                'Content-type': 'application/octet-stream'
            };

            const body = fs.readFileSync('./test/assets/happy_face.jpg');

            face.addAFaceToAFaceList({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');

                parameters = {
                    faceListId: faceListId,
                    persistedFaceId: response.persistedFaceId
                };

                return face.deleteAFaceFromAFaceList({
                    parameters
                })
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should update a face list', (done) => {
            // create a face list
            const parameters = {
                faceListId: faceListId,
            };
            const body = {
                "name": "updated",
                "userData": "updated"
            }

            face.updateAFaceList({
                parameters,
                body
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            })
        })
    })

    describe('Person', () => {
        it('should add a person face with a picture in a URL', (done) => {
            const headers = {
                'Content-type': 'application/json'
            };
            const body = {
                "url": "https://randomuser.me/api/portraits/women/65.jpg"
            }
            const parameters = {
                "personGroupId": personGroupId,
                "personId": personId
            };

            face.addAPersonFace({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should add a person face with a binary image', (done) => {
            const headers = {
                'Content-type': 'application/octet-stream'
            };
            
            const body = fs.readFileSync('test/assets/happy_face.jpg');
            const parameters = {
                "personGroupId": personGroupId,
                "personId": personId
            };

            face.addAPersonFace({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })

    describe('Person group', () => {
        const personGroupId = 'test-persongroupid';

        before((done) => {
            // create a face group
            const parameters = {
                personGroupId: personGroupId,
            };
            const body = {
                "name": "this is a sample person group",
            }

            face.createAPersonGroup({
                parameters,
                body
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            })
        })

        after((done) => {
            // delete the person groups
            const parameters = {
                personGroupId: personGroupId,
            };

            face.deleteAPersonGroup({
                parameters
            })
            .then((response) => {
                done();
            })
            .catch((err) => {
                done(err);
            })
        })

        it('should get a person group, and list them all', (done) => {
            var parameters = {
                personGroupId: personGroupId,
            };

            face.getAPersonGroup({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['personGroupId', 'name', 'userData']);

                parameters = {};

                return face.listPersonGroups({
                    parameters
                });
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array();
                let matches = response.filter((pg) => {
                    return pg.personGroupId == personGroupId
                });
                should(matches).be.Array().with.length(1);
                done();
            }).catch((err) => {
                done(err);
            });
        })

        it('should update a person group', (done) => {
            // create a face list
            var parameters = {
                personGroupId: personGroupId,
            };
            const body = {
                "name": "updated",
                "userData": "updated"
            }

            face.updateAPersonGroup({
                parameters,
                body
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            })
        })

        it('should train a person group', (done) => {
            // create a face list
            var parameters = {
                personGroupId: personGroupId,
            };

            face.trainPersonGroup({
                parameters
            }).then((response) => {
                should(response).be.undefined();

                return face.getPersonGroupTrainingStatus({
                    parameters
                })
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['status']);
                done();
            }).catch((err) => {
                done(err);
            })
        })
    })
})
