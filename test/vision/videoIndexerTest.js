const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Video indexer', () => {

    const client = new cognitive.videoIndexer({
        apiKey: config.videoIndexer.apiKey,
    });

    const videoUrl = 'https://mparnisari.blob.core.windows.net/storage/video_girl_laughing.mp4';
    const videoPath = './test/assets/video_girl_laughing.mp4';
    const externalVideoId = 'testingExternalId';

    function waitForProcessingToFinish(breakdownId) {
        return new Promise((resolve, reject) => {
            client.getProcessingStateOfBreakdown({
                parameters: {
                    breakdownId: breakdownId
                }
            })
            .then(response => {
                console.log(response)
                if (response.state == 'Processed') {
                    resolve();
                } else {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve();
                        }, 2000); // Wait 2s then resolve.
                    })
                    .then(() => {
                        return waitForProcessingToFinish(breakdownId);
                    })
                }
            })
            .catch(err => { reject(err); })
        })
    }

    describe('Upload video in body', () => {
        var breakdownId = null;

        before(done => {
            console.log('Uploading video...')
            const parameters = {
                name: 'A girl laughing',
                privacy: 'Public',
                path: videoPath,
                externalId: externalVideoId
            };

            client.upload({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).be.String();
                breakdownId = response;
                done();
            }).catch(err => {
                done(err);
            });
        })

        after(done => {
            if (breakdownId === undefined || breakdownId === null) {
                done();
                return;
            }
            console.log('Deleting breakdown...')
            const parameters = {
                breakdownId: breakdownId,
                deleteInsights: true
            }
                
            client.deleteBreakdown({
                parameters
            }).then(response => {
                should(response).be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })

        it('should fail if format unsupported', done => {
            const parameters = {
                name: 'A girl laughing',
                privacy: 'Public',
                path: './test/assets/video_girl_laughing.txt'
            };

            client.upload({
                parameters
            })
            .then(() => {
                done(new Error('Should have failed! Format txt is not a video!'))
            })
            .catch(err => {
                should(err).be.Error();
                done();
            })
        })

        it('should get state of processing', done => {
            const parameters = {
                breakdownId: breakdownId
            }
            
            client.getProcessingStateOfBreakdown({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['state', 'progress']);
                done();
            }).catch(err => {
                done(err);
            });
        })

        it('should get insights widget URL', done => {
            const parameters = {
                breakdownId: breakdownId,
                widgetType: 'People',
                allowEdit: true
            }
            
            client.getInsightsWidgetUrl({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).match(/^https/);
                done();
            }).catch(err => {
                done(err);
            });
        })

        it('should get insights widget URL by externalId', done => {
            const parameters = {
                externalId: externalVideoId
            }
            
            client.getInsightsWidgetUrlByExternalId({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).match(/^https/);
                done();
            }).catch(err => {
                done(err);
            });
        })

        it('should get player widget URL', done => {
            const parameters = {
                breakdownId: breakdownId
            }
            
            client.getPlayerWidgetUrl({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).match(/^https/);
                done();
            }).catch(err => {
                done(err);
            });
        })

        it('should get URL to captions of video', done => {
            const parameters = {
                breakdownId: breakdownId,
                language: 'en-US'
            }
            
            client.getCaptionsUrl({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).match(/^https/);
                done();
            }).catch(err => {
                done(err);
            });
        })

        it.skip('should upload transcript in body', done => {
            const parameters = {
                breakdownId: breakdownId,
                language: 'English'
            }

            const body = "\"WEBVTT\
            00:00:00.000 --> 00:00:02.000 This is line number 1\
            00:00:35.110 --> 00:00:50.010 This is line number 2 \""

            client.updateTranscript({
                parameters,
                body
            }).then(response => {
                should(response).not.be.undefined();
                console.log(response);
                done();
            }).catch(err => {
                done(err);
            });
        })

        it.skip('should re-index breakdown', done => {
            const parameters = {
                breakdownId: breakdownId
            }
            
            client.reIndexBreakdown({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                console.log(response);
                done();
            }).catch(err => {
                done(err);
            });
        })

        it.skip('should re-index breakdown by external ID', done => {
            const parameters = {
                externalId: externalVideoId
            }
            
            client.reIndexBreakdownByExternalId({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                console.log(response);
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

    describe('Accounts', () => {
        it('should get accounts', done => {
            client.getAccounts()
            .then(response => {
                should(response).not.be.undefined();
                should(response).be.Array();
                should(response).matchEach(acc => should(acc).have.properties(['name', 'id']));
                done();         
            })
            .catch(err => {
                done(err);
            })
        })
    })

    describe('Upload video in URL', () => {
        var breakdownId = null;

        before(done => {
            console.log('Uploading video...')
            var parameters = {
                name: 'A girl laughing',
                privacy: 'Public',
                videoUrl: videoUrl
            };

            client.upload({
                parameters,
            }).then(response => {
                should(response).not.be.undefined();
                should(response).be.String();
                breakdownId = response;
                done();
            }).catch(err => {
                done(err);
            })
        })

        after(done => {
            if (breakdownId === undefined || breakdownId === null) {
                done();
                return;
            }
            console.log('Deleting breakdown...')
            const parameters = {
                breakdownId: breakdownId,
                deleteInsights: true
            }
                
            client.deleteBreakdown({
                parameters
            }).then(response => {
                should(response).be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

    describe('Search', () => {
        it('should search', done => {
            const parameters = {
                language: 'en-US',
                externalId: externalVideoId
            }
            
            client.searchBy({
                parameters
            }).then(response => {
                should(response).not.be.undefined();
                should(response).have.properties(['results', 'nextPage']);
                should(response.results).be.Array();
                if (response.results.length > 0) {
                    should(response.results).matchEach(breakdown => {
                        should(breakdown).have.properties(['accountId', 'id', 'partition', 'externalId', 'metadata', 
                        'name', 'description', 'organization', 'privacyMode', 'userName', 'isOwned', 'isBase', 
                        'state', 'processingProgress', 'durationInSeconds', 'thumbnailUrl', 'social', 'searchMatches'])
                    });
                }
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

})