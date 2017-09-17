const cognitive = require('../../index.js');
const config = require('../config.js');
const should = require('should');

describe('Academic knowledge', () => {

    const client = cognitive.academicKnowledge({
        apiKey: config.academicKnowledge.apiKey,
        endpoint: config.academicKnowledge.endpoint
    });

    describe('Calchistogram', () => {
        it('should return response', (done) => {
            const parameters = {
                "expr": "And(Composite(AA.AuN=='jaime teevan'),Y>2012)"
            };

            client.calcHistogram({
                parameters,
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['expr', 'num_entities', 'histograms'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Calchistogram Post', () => {
        it('should return response', (done) => {
            const body = "expr=And(Composite(AA.AuN=='jaime teevan'),Y>2012)";
            const headers = {
                "Content-type": "application/x-www-form-urlencoded"
            }

            client.calcHistogramPost({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['expr', 'num_entities', 'histograms'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Evaluate', () => {
        it('should return response', (done) => {
            const parameters = {
                "expr": "Composite(AA.AuN=='jaime teevan')"
            }

            client.evaluate({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['expr', 'entities'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Evaluate Post', () => {
        it('should return response', (done) => {
            const body = "expr=Composite(AA.AuN=='jaime teevan')";
            const headers = {
                "Content-type": "application/x-www-form-urlencoded"
            }

            client.evaluatePost({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['expr', 'entities'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('GraphSearch', () => {
        it('should return response', (done) => {
            const parameters = {
                "mode": "json"
            };
            const body = {
                "path": "/paper/AuthorIDs/author",
                "paper": {
                    "type": "Paper",
                    "NormalizedTitle": "graph engine",
                    "select": [
                        "OriginalTitle"
                    ]
                },
                "author": {
                    "return": {
                        "type": "Author",
                        "Name": "bin shao"
                    }
                }
            };
            const headers = {
                "Content-type": "application/json"
            };

            client.graphSearch({
                parameters,
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property("Results")
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Interpret', () => {
        it('should return response', (done) => {
            const parameters = {
                "query": "papers by jaime"
            }

            client.interpret({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['query', 'interpretations'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Interpret Post', () => {
        it('should return response', (done) => {
            const body = "query=\"papers by jaime\"";
            const headers = {
                "Content-type": "application/x-www-form-urlencoded"
            }

            client.interpretPost({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['query', 'interpretations'])
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Get similarity', () => {
        it('should return response', (done) => {
            const parameters = {
                "s1": "home",
                "s2": "house"
            };

            client.getSimilarity({
                parameters
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Number;
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Post similarity', () => {
        it('should return response', (done) => {
            const body = "s1=home&s2=house";
            const headers = {
                "Content-type": "application/x-www-form-urlencoded"
            }

            client.postSimilarity({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Number;
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})