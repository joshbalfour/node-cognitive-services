const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');
const fs = require('fs');

describe('Bing speech', () => {

    const client = new cognitive.bingSpeech({
        apiKey: config.bingSpeech.apiKey,
    });

    describe('Speech to text', () => {
        it.skip('should get text', done => {
            const parameters = {
                recognitionMode: 'dictation',
                language: 'en-US',
                format: 'simple'
            };

            const headers = {
                'Content-Type': "audio/wav; codec=audio/pcm; samplerate=16000"
            }

            const body = fs.readFileSync('./test/assets/whatstheweatherlike.wav');

            client.getText({
                parameters,
                headers,
                body
            }).then(response => {
                should(response).not.be.undefined();
                done();
            }).catch(err => {
                done(err);
            });
        })
    })

    describe('Text to speech', () => {
        it('should get speech', done => {
            const headers = {
                "X-Microsoft-OutputFormat": "riff-8khz-8bit-mono-mulaw"
            }

            const body = {
                text: "response audio payload",
                language: "en-US",
                voiceName: "Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)",
                gender: "Female"
            };

            client.getSpeech({
                headers,
                body
            }).then(response => {
                should(response).not.be.empty();
                //fs.writeFileSync("./test/output.mp3", response, "binary");
                done();
            }).catch(err => {
                done(err);
            });
        })
    })
})