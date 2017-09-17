const cognitive = require('../../index.js');
const config = require('../config.js');
const should = require('should');

describe('Text analytics', () => {

    const client = cognitive.textAnalytics({
        apiKey: config.textAnalytics.apiKey,
        endpoint: config.textAnalytics.endpoint
    });

    describe('Detect language (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/json'
            };

            const body = {
                "documents": [
                    {
                        "id": "inspanish",
                        "text": "hola como te va"
                    },
                    {
                        "id": "inenglish",
                        "text": "hello how are you"
                    }
                ]
            }

            client.detectLanguage({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['documents']);
                should(response.documents).be.Array().and.have.length(body.documents.length);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Key phrases (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/json'
            };

            const body = {
                "documents": [
                    {
                        "language": "en",
                        "id": "vancouver-en",
                        "text": "Vancouver is a coastal seaport city in Canada, located in the Lower Mainland region of British Columbia. As the most populous city in the province, the 2016 census recorded 631,486 people in the city, up from 603,502 in 2011. The Greater Vancouver area had a population of 2,463,431 in 2016, making it the third-largest metropolitan area in Canada. Vancouver has the highest population density in Canada with over 5,400 people per square kilometre. With over 250,000 residents, Vancouver is the fourth most densely populated city in North America behind New York City, San Francisco, and Mexico City according to the 2011 census. Vancouver is one of the most ethnically and linguistically diverse cities in Canada according to that census; 52% of its residents have a first language other than English. Vancouver is classed as a Beta global city."
                    }, {
                        "language": "es",
                        "id": "vancouver-es",
                        "text": "Vancouver es una ciudad de la costa pacífica de Canadá, ubicada en el suroeste de la provincia de Columbia Británica, entre el estrecho de Georgia y las Montañas Costeras. La ciudad fue llamada así en honor del capitán George Vancouver, un explorador inglés. Es parte del área metropolitana del Distrito Regional del Gran Vancouver, el cual, con una población de 2 313 328 habitantes (2011),​ constituye el área metropolitana más grande del oeste canadiense y la tercera en el país después de Toronto y Montreal. Vancouver en sí mismo cuenta con 603 502 habitantes."
                    }
                ]
            };

            client.keyPhrases({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('documents').and.be.Array().and.have.length(body.documents.length);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })

    describe('Sentiment (POST)', () => {
        it('should return response', (done) => {
            const headers = {
                'Content-type': 'application/json'
            };

            const body = {
                "documents": [
                    {
                        "language": "en",
                        "id": "happy",
                        "text": "I’m happy because when I look in the mirror, I don’t compare myself to anyone. Not anymore. I don’t compare the way I look, the way I feel, the work that I do. I don’t compare my level of happiness. I don’t compare my achievements. Because I spent years doing that. Years, comparing myself to everyone else."
                    }, {
                        "language": "es",
                        "id": "enojada-es",
                        "text": "Todos aquellos que tengan una cara extremadamente seria me entenderán al instante. ¿Y es que tanto cuesta entender que algunos simplemente no andamos por la vida sonriendo y que no por eso tenemos un problema? No soy más o menos feliz por la manera en que mi cara luce, de verdad. Tampoco lo planee así. Créanme que me gustaría tener una cara más amena para no recibir quejas todos los días y para que la gente no piense que la odio sin razón alguna. Soy así y no puedo hacer mucho para cambiarlo. Soy una buena persona y no tengo nada en contra de nadie, es solo mi genética. "
                    }
                ]
            };

            client.sentiment({
                headers,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.property('documents').and.be.Array().and.have.length(body.documents.length);
                done();
            }).catch((err) => {
                done(new Error("Error making request:" + err));
            });
        })
    })
})