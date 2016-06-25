# node-cognitive-services

## Description
API for Microsoft Cognitive Services

## Installation
`npm i cognitive-services`

## Usage

```
const cs = require('cognitive-services');

const KEY = 'xxx';

const emotionRecognition = new cs.emotionRecognition({KEY});

const recognize = (mediaUrl) => (
	emotionRecognition.recognize({body: {url: mediaUrl} })
)

```

## Projects which use this

* [Recognition Hack 2016 Image Analysis Twitter Bot](https://github.com/joshbalfour/recognition-hack-banana-jam-openbracket-closebracket-semicolon/blob/master/src/cognition.js)