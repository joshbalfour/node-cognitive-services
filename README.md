# Microsoft® Cognitive Services SDK for Node.JS
### By [Josh Balfour](https://joshbalfour.co.uk)

![npm-version](https://img.shields.io/npm/v/cognitive-services.svg)
![npm-installs](https://img.shields.io/npm/dw/cognitive-services.svg)
![dev-deps](https://david-dm.org/joshbalfour/node-cognitive-services.svg)
![issues](https://img.shields.io/github/issues/joshbalfour/node-cognitive-services.svg)

## Description

Unofficial SDK for [Microsoft® Cognitive Services](https://www.microsoft.com/cognitive-services) written for Node.JS.
	Usage of Microsoft® Cognitive Services is bound by their [Terms and Conditions](http://research.microsoft.com/en-us/um/legal/CognitiveServicesTerms20160628.htm).
	
## Getting Started

To get started first [sign up](https://www.microsoft.com/cognitive-services/en-us/sign-up) and [grab your API keys](https://www.microsoft.com/cognitive-services/en-US/subscriptions).
Then figure out which API you want to use, you can find descriptions [here](https://www.microsoft.com/cognitive-services/en-us/apis).

To use this SDK in your project, run `npm install cognitive-services --save`. 

> **Note**: this SDK only works with Node 6.0 or higher.

Then make a JS file in your project directory and add 

```javascript
const cognitiveServices = require('cognitive-services');
```

You are now ready to use the APIs, for example:

```javascript
const parameters = {
    "mode": "proof",
    "mkt": "en-us"
};

const body = "Text=Bill+Gatas";

const client = cognitiveServices.bingSpellCheck({
    apiKey: "YOUR-API-KEY",
    endpoint: "YOUR-ENDPOINT"
});

client.spellCheck({
    parameters,
    body
})
```

If you want to see more examples of use you can see within the `test` folder.

## Contributing

1. Download the source code and run `npm install`.
1. Update the file `tests/config.js` with your own API keys.
1. Run `gulp test`.

## Supported APIs

- Knowledge
    - [x] Academic knowledge
    - [x] Entity Linking
    - [x] Recommendations
    - [ ] Knowledge exploration
    - [ ] QnA maker
    - [ ] Custom decision service
- Language
    - [x] Bing spell check
    - [x] Text analytics
    - [x] Web language model
    - [ ] LUIS
    - [ ] Translator Text
    - [ ] Linguistic Analysis
- Search
    - [x] Bing Autosuggest
    - [x] Bing Image Search
    - [x] Bing News Search
    - [x] Bing Video Search
    - [x] Bing Web Search
    - [ ] Bing Custom Search
    - [ ] Bing Entity Search
- Speech
    - [x] Speaker recognition
    - [ ] Translator
    - [ ] Bing Speech
    - [ ] Custom speech service
- Vision
    - [x] Computer vision
    - [x] Emotion
    - [x] Face
    - [x] Video
    - [ ] Content moderator
    - [ ] Custom vision service
    - [ ] Video indexer

## License


Copyright (c) 2016, Josh Balfour

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.


## Legal


Microsoft, Microsoft Cognitive Services, and Windows are either registered trademarks or trademarks of Microsoft Corporation in the United States and/or other countries.
This project was done without the knowledge or endorsement of Microsoft®.
	
