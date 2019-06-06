const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Academic knowledge', () => {

    const client = new cognitive.academicKnowledge({
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
                done(err);
            });
        })
    })

    describe('Calchistogram Post', () => {
        it('should return response', (done) => {
            const body = "expr=And(Composite(AA.AuN=='jaime teevan'),Y>2012)";

            client.calcHistogramPost({
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['expr', 'num_entities', 'histograms'])
                done();
            }).catch((err) => {
                done(err);
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
                done(err);
            });
        })
    })

    describe('Evaluate Post', () => {
        it('should return response', (done) => {
            const body = "expr=Composite(AA.AuN=='jaime teevan')";

            client.evaluatePost({
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['expr', 'entities'])
                done();
            }).catch((err) => {
                done(err);
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
                done(err);
            });
        })
    })

    describe('Interpret Post', () => {
        it('should return response', (done) => {
            const body = "query=\"papers by jaime\"";

            client.interpretPost({
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['query', 'interpretations'])
                done();
            }).catch((err) => {
                done(err);
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
                done(err);
            });
        })
    })

    describe('Post similarity', () => {
        it('should return response', (done) => {
            const body = "s1=home&s2=house";

            client.postSimilarity({
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).be.Number;
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})