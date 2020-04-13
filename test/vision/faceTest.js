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
        face.createAPersonGroup({
          parameters: {
          "personGroupId": personGroupId
          },
          body: {
            "name" : "Test Person Group",
            "userData": "this-is-test-data"
          }
          }).then(res => {
            console.log(res);
            done();
          }).catch(err => {
            console.log("Create A PERSON Group: " + err);
            done(err)
          });
    })

    after(done => {
        if (!personId) {
            // no person ID, only delete the group
            var parameters = {
              personGroupId: personGroupId
          }
            return face.deleteAPersonGroup({parameters})
            .then((response) => {
              should(response).be.undefined();
              done();
          }).catch((err) => {
              done(err);
          })
        }
        // delete person
        var parameters = {
            personGroupId: personGroupId,
            personId: personId
        }

        face.deleteAPerson({
            parameters
        }).then((response) => {
            should(response).be.undefined();

            // delete person group
            parameters = {
                personGroupId: personGroupId
            }

            return face.deleteAPersonGroup({parameters})
        }).then((response) => {
            should(response).be.undefined();
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

    describe('Large face list', () => {
        const largeFaceListId = 'test-largefacelistid';

        before((done) => {
            const parameters = {
                largeFaceListId,
            };
            const body = {
                name: 'this is a sample large face list',
            }

            face.createALargeFaceList({
                parameters,
                body,
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        });

        after((done) => {
            const parameters = {
                largeFaceListId,
            };

            face.deleteALargeFaceList({
                parameters,
            })
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
        });

        it('should get a large face list, list them all', (done) => {
            var parameters = {
                largeFaceListId
            };

            face.getALargeFaceList({
                parameters,
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['largeFaceListId', 'name', 'userData']);

                return face.listLargeFaceLists();
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array().and.have.length(1);
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it('should add a face to the large face list, get it and delete it', (done) => {
            var parameters = {
                largeFaceListId,
            };

            const headers = {
                'Content-type': 'application/octet-stream',
            };

            const body = fs.readFileSync('./test/assets/happy_face.jpg');

            face.addAFaceToALargeFaceList({
                parameters,
                headers,
                body,
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');

                parameters = {
                    largeFaceListId,
                    persistedFaceId: response.persistedFaceId,
                };

                return face.getAFaceFromALargeFaceList({
                    parameters,
                });
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');

                parameters = {
                    largeFaceListId,
                    persistedFaceId: response.persistedFaceId,
                };

                return face.deleteAFaceFromALargeFaceList({
                    parameters,
                });
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it('should add a face to the large face list and update it and list it', (done) => {
            var parameters = {
                largeFaceListId,
            };

            const addFacePromise = face.addAFaceToALargeFaceList({
                parameters,
                headers: {'Content-type': 'application/octet-stream'},
                body: fs.readFileSync('./test/assets/happy_face.jpg'),
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');
                return response;
            });

            const updateFacePromise = addFacePromise.then((response) => {
                parameters = {
                    largeFaceListId,
                    persistedFaceId: response.persistedFaceId,
                };

                body = {
                    userData: 'updated user data',
                };

                return face.updateAFaceInALargeFaceList({
                    parameters,
                    body,
                });
            }).then((response) => {
                should(response).be.undefined();
                return response;
            });

            Promise.all([addFacePromise, updateFacePromise])
            .then(([addFaceResponse, _]) => {
                parameters = {
                    largeFaceListId,
                    persistedFaceId: addFaceResponse.persistedFaceId,
                };

                return face.deleteAFaceFromALargeFaceList({
                    parameters,
                });
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it('should list faces in a large face list', (done) => {
            var parameters = {
                largeFaceListId,
            };

            face.addAFaceToALargeFaceList({
                parameters,
                headers: {'Content-type': 'application/octet-stream'},
                body: fs.readFileSync('./test/assets/happy_face.jpg'),
            })
            .then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('persistedFaceId');

                return face.listFacesInALargeFaceList({
                    parameters,
                });
            })
            .then((response) => {
                should(response).be.not.undefined();
                should(response).be.Array().and.have.length(1);

                parameters = {
                    largeFaceListId,
                    persistedFaceId: response[0].persistedFaceId,
                };

                return face.deleteAFaceFromALargeFaceList({
                    parameters,
                });
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it('should update a large face list', (done) => {
            const parameters = {
                largeFaceListId,
            };

            const body = {
                name: 'updated',
                'userData': 'updated',
            };

            face.updateALargeFaceList({
                parameters,
                body,
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        });

        it('should train a large face list and get training status', (done) => {
            const parameters = {
                largeFaceListId,
            };

            face.trainALargeFaceList({
                parameters,
            }).then((response) => {
                should(response).be.undefined();

                return face.getALargeFaceListTrainingStatus({
                    parameters
                });
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['status']);
                done();
            }).catch((err) => {
                done(err);
            });
        });
    });

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

        it('should update a person', done => {
            const parameters = {
                "personGroupId": personGroupId,
                "personId": personId
            };

            const body = {
                name: 'paul smith',
                userData: 'updated 2'
            }

            face.updateAPerson({
                parameters,
                body
            }).then((response) => {
                should(response).be.undefined();
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })

    describe('Person group', () => {
        const personGroupId = 'test-persongroup' + makeId(8);

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

        it('should train a person group and get training status', (done) => {
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

        it('should list persons in a person group', (done) => {
            var parameters = {
                personGroupId: personGroupId,
            };

            face.listPersonsInAPersonGroup({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Array;
                done();
            }).catch((err) => {
                done(err);
            })
        })
    })
})
