# Microsoft® Cognitive Services SDK for Node.JS
### By [Josh Balfour](https://joshbalfour.co.uk)

## Description

Unofficial SDK for [Microsoft® Cognitive Services](https://www.microsoft.com/cognitive-services) written for Node.JS.
	Usage of Microsoft® Cognitive Services is bound by their [Terms and Conditions](http://research.microsoft.com/en-us/um/legal/CognitiveServicesTerms20160628.htm).
	

## Installation

`npm i cognitive-services --save`

## Getting Started


To get started first [sign up](https://www.microsoft.com/cognitive-services/en-us/sign-up) and [grab your API keys](https://www.microsoft.com/cognitive-services/en-US/subscriptions).
Then figure out which API you want to use, you can find descriptions [here](https://www.microsoft.com/cognitive-services/en-us/apis).

 To use this SDK in your project, open a terminal and go to your project directory and go `npm init`, then `npm install cognitive-services --save`.

Then make a JS file in your project directory and add `const cognitiveServices = require('cognitive-services');` to the top of it. You're now ready to use the code samples below.
	

## Reference

### Index

* [Academic Knowledge](#academic-knowledge)
	* [CalcHistogram](#academic-knowledge---calchistogram)
	* [Evaluate](#academic-knowledge---evaluate)
	* [Interpret](#academic-knowledge---interpret)

* [Bing Autosuggest](#bing-autosuggest)
	* [Suggestions](#bing-autosuggest---suggestions)

* [Bing Image Search](#bing-image-search)
	* [Image Insights](#bing-image-search---image-insights)
	* [Search](#bing-image-search---search)
	* [Trending](#bing-image-search---trending)

* [Bing News Search](#bing-news-search)
	* [Category News](#bing-news-search---category-news)
	* [Search](#bing-news-search---search)
	* [Trending Topics](#bing-news-search---trending-topics)

* [Bing Spell Check](#bing-spell-check)
	* [Spell Check](#bing-spell-check---spell-check)

* [Bing Video Search](#bing-video-search)
	* [Search](#bing-video-search---search)
	* [Trending](#bing-video-search---trending)

* [Bing Web Search](#bing-web-search)
	* [Search](#bing-web-search---search)

* [Computer Vision](#computer-vision)
	* [Analyze Image](#computer-vision---analyze-image)
	* [Describe Image](#computer-vision---describe-image)
	* [Get Thumbnail](#computer-vision---get-thumbnail)
	* [List Domain Specific Models](#computer-vision---list-domain-specific-models)
	* [OCR](#computer-vision---ocr)
	* [Recognize Domain Specific Content](#computer-vision---recognize-domain-specific-content)
	* [Tag Image](#computer-vision---tag-image)

* [Emotion](#emotion)
	* [Emotion Recognition](#emotion---emotion-recognition)
	* [Emotion Recognition in Video](#emotion---emotion-recognition-in-video)
	* [Emotion Recognition with Face Rectangles](#emotion---emotion-recognition-with-face-rectangles)
	* [Get Recognition in Video Operation Result](#emotion---get-recognition-in-video-operation-result)

* [Entity Linking](#entity-linking)
	* [Link Entity](#entity-linking---link-entity)

* [Face](#face)
	* [Detect](#face---detect)
	* [Find Similar](#face---find-similar)
	* [Group](#face---group)
	* [Identify](#face---identify)
	* [Verify](#face---verify)
	* [Add a Face to a Face List](#face---add-a-face-to-a-face-list)
	* [Create a Face List](#face---create-a-face-list)
	* [Delete a Face from a Face List](#face---delete-a-face-from-a-face-list)
	* [Delete a Face List](#face---delete-a-face-list)
	* [Get a Face List](#face---get-a-face-list)
	* [List Face Lists](#face---list-face-lists)
	* [Update a Face List](#face---update-a-face-list)
	* [Add a Person Face](#face---add-a-person-face)
	* [Create a Person](#face---create-a-person)
	* [Delete a Person](#face---delete-a-person)
	* [Delete a Person Face](#face---delete-a-person-face)
	* [Get a Person](#face---get-a-person)
	* [Get a Person Face](#face---get-a-person-face)
	* [List Persons in a Person Group](#face---list-persons-in-a-person-group)
	* [Update a Person](#face---update-a-person)
	* [Update a Person Face](#face---update-a-person-face)
	* [Create a Person Group](#face---create-a-person-group)
	* [Delete a Person Group](#face---delete-a-person-group)
	* [Get a Person Group](#face---get-a-person-group)
	* [Get Person Group Training Status](#face---get-person-group-training-status)
	* [List Person Groups](#face---list-person-groups)
	* [Train Person Group](#face---train-person-group)
	* [Update a Person Group](#face---update-a-person-group)

* [Recommendations](#recommendations)
	* [Create a model](#recommendations---create-a-model)
	* [Create/Trigger a build](#recommendations---create/trigger-a-build)
	* [Delete a build](#recommendations---delete-a-build)
	* [Delete a model](#recommendations---delete-a-model)
	* [Delete/Cancel an ongoing operation](#recommendations---delete/cancel-an-ongoing-operation)
	* [Get a model by id](#recommendations---get-a-model-by-id)
	* [Get all models](#recommendations---get-all-models)
	* [Get build by id](#recommendations---get-build-by-id)
	* [Get build metrics](#recommendations---get-build-metrics)
	* [Get details of all builds](#recommendations---get-details-of-all-builds)
	* [Get recommendations based on items (I2I)](#recommendations---get-recommendations-based-on-items-(i2i))
	* [Get user recommendations (U2I)](#recommendations---get-user-recommendations-(u2i))
	* [Retrieve the status of an operation](#recommendations---retrieve-the-status-of-an-operation)
	* [Update a model](#recommendations---update-a-model)
	* [Upload a catalog file to a model](#recommendations---upload-a-catalog-file-to-a-model)
	* [Upload a usage file to a model](#recommendations---upload-a-usage-file-to-a-model)

* [Speaker Recognition](#speaker-recognition)
	* [Create Enrollment](#speaker-recognition---create-enrollment)
	* [Create Profile](#speaker-recognition---create-profile)
	* [Delete Profile](#speaker-recognition---delete-profile)
	* [Get All Profiles](#speaker-recognition---get-all-profiles)
	* [Get Profile](#speaker-recognition---get-profile)
	* [Reset Enrollments](#speaker-recognition---reset-enrollments)
	* [Get Operation Status](#speaker-recognition---get-operation-status)
	* [Identification](#speaker-recognition---identification)
	* [Verification](#speaker-recognition---verification)
	* [List All Supported Verification Phrases](#speaker-recognition---list-all-supported-verification-phrases)

* [Text Analytics](#text-analytics)
	* [Detect Language](#text-analytics---detect-language)
	* [Detect Topics](#text-analytics---detect-topics)
	* [Key Phrases](#text-analytics---key-phrases)
	* [Operation Status](#text-analytics---operation-status)
	* [Sentiment](#text-analytics---sentiment)

* [Video](#video)
	* [Face Detection and Tracking](#video---face-detection-and-tracking)
	* [Get Operation Result](#video---get-operation-result)
	* [Get Result Video](#video---get-result-video)
	* [Motion Detection](#video---motion-detection)
	* [Stabilization](#video---stabilization)
	* [Thumbnail](#video---thumbnail)

* [Web Language Model](#web-language-model)
	* [Break Into Words](#web-language-model---break-into-words)
	* [Calculate Conditional Probability](#web-language-model---calculate-conditional-probability)
	* [Calculate Joint Probability](#web-language-model---calculate-joint-probability)
	* [Generate Next Words](#web-language-model---generate-next-words)
	* [List Available Models](#web-language-model---list-available-models)

### Academic Knowledge

#### Academic Knowledge - CalcHistogram

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56332331778daf02acc0a50b/operations/565d9001ca73072048922d97)

##### Description

The calchistogram REST API is used to calculate the distribution of attribute values for a set of paper entities.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
expr | A query expression that specifies the entities over which to calculate histograms. | yes | string | 
model | Name of the model that you wish to query. Currently, the value defaults to "latest". | no | string | latest
attributes | A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive. | no | string | 
count | Number of results to return. | no | number | 10
offset | Index of the first result to return. | no | number | 0


#### Example

```javascript

const academicKnowledge = new cognitiveServices.academicKnowledge({
    API_KEY: yourApiKey
})

const parameters = {
    model: "latest"
    count: "10"
    offset: "0"
};

academicKnowledge.calcHistogram({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Academic Knowledge - Evaluate

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56332331778daf02acc0a50b/operations/565d753be597ed16ac3ffc03)

##### Description

The evaluate REST API is used to return a set of academic entities based on a query expression.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
expr | A query expression that specifies which entities should be returned. | yes | string | 
model | Name of the model that you wish to query. Currently, the value defaults to "latest". | no | string | latest
count | Number of results to return. | no | number | 10
offset | Index of the first result to return. | no | number | 0
orderby | Name of an attribute that is used for sorting the entities. Optionally, ascending/descending can be specified. The format is: name:asc or name:desc. | no | string | 
attributes | A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive. | no | string | Id


#### Example

```javascript

const academicKnowledge = new cognitiveServices.academicKnowledge({
    API_KEY: yourApiKey
})

const parameters = {
    model: "latest"
    count: "10"
    offset: "0"
    attributes: "Id"
};

academicKnowledge.evaluate({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Academic Knowledge - Interpret

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56332331778daf02acc0a50b/operations/56332331778daf06340c9666)

##### Description

The interpret REST API takes an end user query string (i.e., a query entered by a user of your application) and returns formatted interpretations of user intent based on the Academic Graph data and the Academic Grammar.
To provide an interactive experience, you can call this method repeatedly after each character entered by the user. In that case, you should set the complete parameter to 1 to enable auto-complete suggestions. If your application does not want auto-completion, you should set the complete parameter to 0.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
query | Query entered by user. If complete is set to 1, query will be interpreted as a prefix for generating query auto-completion suggestions. | yes | string | 
complete | 1 means that auto-completion suggestions are generated based on the grammar and graph data. | no | boolean | 0
count | Maximum number of interpretations to return. | no | number | 10
offset | Index of the first interpretation to return. For example, count=2&offset=0 returns interpretations 0 and 1. count=2&offset=2 returns interpretations 2 and 3. | no | number | 
timeout | Timeout in milliseconds. Only interpretations found before the timeout has elapsed are returned. | no | number | 
model | Name of the model that you wish to query. Currently, the value defaults to "latest". | no | string | latest


#### Example

```javascript

const academicKnowledge = new cognitiveServices.academicKnowledge({
    API_KEY: yourApiKey
})

const parameters = {
    complete: "0"
    count: "10"
    model: "latest"
};

academicKnowledge.interpret({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Autosuggest

#### Bing Autosuggest - Suggestions

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56c7694ecf5ff801a090fbd1/operations/56c769a2cf5ff801a090fbd2)

##### Description

This operation provides suggestions for a given query or partial query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | Query | yes | string | bill g


#### Example

```javascript

const bingAutosuggest = new cognitiveServices.bingAutosuggest({
    API_KEY: yourApiKey
})

const parameters = {
    q: "bill g"
};

bingAutosuggest.suggestions({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Image Search

#### Bing Image Search - Image Insights

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/571fab09dbe2d933e891028f)

##### Description

Get insights for an image sent in the POST body.


See full documentation for this API here

##### Parameters


#### Body
An image to retrieve insights for

#### Example

```javascript

const bingImageSearch = new cognitiveServices.bingImageSearch({
    API_KEY: yourApiKey
})

const body = {}; // An image to retrieve insights for


bingImageSearch.imageInsights({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Bing Image Search - Search

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/56b4433fcf5ff8098cef380c)

##### Description

Get relevant images for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | cats
count | The number of image results to return in the response. The actual number delivered may be less than requested. | no | number | 10
offset | The zero-based offset that indicates the number of image results to skip before returning results. | no | number | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.Full list of supported markets:es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
safeSearch | A filter used to filter results for adult content. | no | string | Moderate


#### Example

```javascript

const bingImageSearch = new cognitiveServices.bingImageSearch({
    API_KEY: yourApiKey
})

const parameters = {
    q: "cats"
    count: "10"
    offset: "0"
    mkt: "en-us"
    safeSearch: "Moderate"
};

bingImageSearch.search({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Bing Image Search - Trending

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/56b44b8ccf5ff81038d15ce0)

##### Description

Get currently trending images.

##### Parameters



#### Example

```javascript

const bingImageSearch = new cognitiveServices.bingImageSearch({
    API_KEY: yourApiKey
})


bingImageSearch.trending()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing News Search

#### Bing News Search - Category News

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f72cf5ff8098cef380a/operations/56f02400dbe2d91900c68553)

##### Description

Returns news for a provided category.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
Category | Specifies which category of news articles the caller wants returned. | no | string | 


#### Example

```javascript

const bingNewsSearch = new cognitiveServices.bingNewsSearch({
    API_KEY: yourApiKey
})


bingNewsSearch.categoryNews()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Bing News Search - Search

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f72cf5ff8098cef380a/operations/56b449fbcf5ff81038d15cdf)

##### Description

Get news articles relevant for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | microsoft
count | The number of news results to return in the response. The actual number delivered may be less than requested. | no | string | 10
offset | The zero-based offset that indicates the number of news results to skip before returning results. | no | string | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.Full list of supported markets:es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
safeSearch | A filter used to filter results for adult content. | no | string | Moderate


#### Example

```javascript

const bingNewsSearch = new cognitiveServices.bingNewsSearch({
    API_KEY: yourApiKey
})

const parameters = {
    q: "microsoft"
    count: "10"
    offset: "0"
    mkt: "en-us"
    safeSearch: "Moderate"
};

bingNewsSearch.search({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Bing News Search - Trending Topics

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f72cf5ff8098cef380a/operations/56c7a9a6cf5ff801a090fbdc)

##### Description

Get trending topics identified by Bing.  These are the same topics shown in the banner at the bottom of the Bing home page.

##### Parameters



#### Example

```javascript

const bingNewsSearch = new cognitiveServices.bingNewsSearch({
    API_KEY: yourApiKey
})


bingNewsSearch.trendingTopics()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Spell Check

#### Bing Spell Check - Spell Check

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56e73033cf5ff80c2008c679/operations/56e73036cf5ff81048ee6727)

##### Description



##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
mode | Mode of spellcheck:<ul><li>Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.</li><li>Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.</li></ul> | no | string | 


#### Example

```javascript

const bingSpellCheck = new cognitiveServices.bingSpellCheck({
    API_KEY: yourApiKey
})


bingSpellCheck.spellCheck()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Video Search

#### Bing Video Search - Search

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f3ccf5ff8098cef3809/operations/56b440d2cf5ff8098cef380b)

##### Description

Get videos relevant for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | cats
count | The number of video results to return in the response. The actual number delivered may be less than requested. | no | number | 10
offset | The zero-based offset that indicates the number of video results to skip before returning results. | no | number | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.Full list of supported markets:es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
safeSearch | A filter used to filter results for adult content. | no | string | Moderate


#### Example

```javascript

const bingVideoSearch = new cognitiveServices.bingVideoSearch({
    API_KEY: yourApiKey
})

const parameters = {
    q: "cats"
    count: "10"
    offset: "0"
    mkt: "en-us"
    safeSearch: "Moderate"
};

bingVideoSearch.search({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Bing Video Search - Trending

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f3ccf5ff8098cef3809/operations/56b44c36cf5ff81038d15ce1)

##### Description

Get currently trending videos.

##### Parameters



#### Example

```javascript

const bingVideoSearch = new cognitiveServices.bingVideoSearch({
    API_KEY: yourApiKey
})


bingVideoSearch.trending()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Web Search

#### Bing Web Search - Search

[API Endpoint Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43eeccf5ff8098cef3807/operations/56b4447dcf5ff8098cef380d)

##### Description

Get web, image, news, & videos results for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | bill gates
count | The number of search results to return in the response. The actual number delivered may be less than requested. | no | number | 10
offset | The zero-based offset that indicates the number of search results to skip before returning results. | no | number | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.Full list of supported markets:es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
safesearch | A filter used to filter results for adult content. | no | string | Moderate


#### Example

```javascript

const bingWebSearch = new cognitiveServices.bingWebSearch({
    API_KEY: yourApiKey
})

const parameters = {
    q: "bill gates"
    count: "10"
    offset: "0"
    mkt: "en-us"
    safesearch: "Moderate"
};

bingWebSearch.search({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Computer Vision

#### Computer Vision - Analyze Image

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fa)

##### Description

This operation extracts a rich set of visual features based on the image content. 
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response. 
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
visualFeatures | A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include:	<ul><li>Categories - categorizes image content according to a taxonomy defined in documentation. </li><li>Tags - tags the image with a detailed list of words related to the image content. </li><li>Description - describes the image content with a complete English sentence. </li><li>Faces - detects if faces are present. If present, generate coordinates, gender and age.</li> <li>ImageType - detects if image is clipart or a line drawing.</li><li> Color - determines the accent color, dominant color, and whether an image is black&white.</li><li>Adult - detects if the image is pornographic in nature (depicts nudity or a sex act).Sexually suggestive content is also detected.</li></ul> | no | string | Categories
details | A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include:	<ul><li>Celebrities - identifies celebrities if detected in the image.</li></ul> | no | string | 

#### Body
Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 
<ul>
<li>Supported image formats: JPEG, PNG, GIF, BMP. </li>
<li>Image file size must be less than 4MB.</li>
<li>Image dimensions must be at least 50 x 50.</li>
</ul>

#### Example

```javascript

const computerVision = cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    visualFeatures: "Categories"
};
/* Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 

Supported image formats: JPEG, PNG, GIF, BMP. 
Image file size must be less than 4MB.
Image dimensions must be at least 50 x 50.
 */
const body = {};


computerVision.analyzeImage({
        parameters,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Describe Image

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fe)

##### Description

This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
maxCandidates | Maximum number of candidate descriptions to be returned.The default is 1. | no | string | 1

#### Body
Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 
<ul>
<li>Supported image formats: JPEG, PNG, GIF, BMP. </li>
<li>Image file size must be less than 4MB.</li>
<li>Image dimensions should be greater than 50 x 50.</li>
</ul>

#### Example

```javascript

const computerVision = cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    maxCandidates: "1"
};
/* Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 

Supported image formats: JPEG, PNG, GIF, BMP. 
Image file size must be less than 4MB.
Image dimensions should be greater than 50 x 50.
 */
const body = {};


computerVision.describeImage({
        parameters,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Get Thumbnail

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fb)

##### Description

This operation generates a thumbnail image with the user-specified width and height.  By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI.  Smart cropping helps when you specify an aspect ratio that differs from that of the input image

A successful response contains the thumbnail image binary.  If the request failed, the response contains an error code and a message to help determine what went wrong.


Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

Http Method
POST


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
width | Width of the thumbnail.It must be between 1 and 1024. Recommended minimum of 50. | yes | number | 
height | Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50. | yes | number | 
smartCropping | Boolean flag for enabling smart cropping. | no | boolean | true

#### Body
Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 
<ul>
<li>Supported image formats: JPEG, PNG, GIF, BMP. </li>
<li>Image file size must be less than 4MB.</li>
<li>Image dimensions should be greater than 50 x 50.</li>
</ul>

#### Example

```javascript

const computerVision = cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    smartCropping: "true"
};
/* Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 

Supported image formats: JPEG, PNG, GIF, BMP. 
Image file size must be less than 4MB.
Image dimensions should be greater than 50 x 50.
 */
const body = {};


computerVision.getThumbnail({
        parameters,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - List Domain Specific Models

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fd)

##### Description

This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
GET

##### Parameters



#### Example

```javascript

const computerVision = cognitiveServices.computerVision({
    API_KEY: yourApiKey
})


computerVision.listDomainSpecificModels()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - OCR

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc)

##### Description

Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.   


Upon success, the OCR results will be returned. 

Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.

Http Method
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
language | The BCP-47 language code of the text to be detected in the image.The default value is &quot;unk&quot;, then the service will auto detect the language of the text in the image.Supported languages:<ul style="margin-left:.375in;direction:ltr;unicode-bidi:embed; margin-top:0in;margin-bottom:0in" type="disc"><li>unk (AutoDetect)</li><li>zh-Hans (ChineseSimplified)</li><li>zh-Hant (ChineseTraditional)</li><li>cs (Czech)</li><li>da (Danish)</li><li>nl (Dutch)</li><li>en (English)</li><li>fi (Finnish)</li><li>fr (French)</li><li>de (German)</li><li>el (Greek)</li><li>hu (Hungarian)</li><li>it (Italian)</li><li>Ja (Japanese)</li><li>ko (Korean)</li><li>nb (Norwegian)</li><li>pl (Polish)</li><li>pt (Portuguese,</li><li>ru (Russian)</li><li>es (Spanish)</li><li>sv (Swedish)</li><li>tr (Turkish)</li></ul> | no | string | unk
detectOrientation  | Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).  | no | boolean | true

#### Body
Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 
<ul>
<li>Supported image formats: JPEG, PNG, GIF, BMP. </li>
<li>Image file size must be less than 4MB.</li>
<li>Image dimensions must be between 40 x 40 and 3200 x 3200 pixels, and the image cannot be larger than 100 megapixels.</li>
</ul>


#### Example

```javascript

const computerVision = cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    language: "unk"
    detectOrientation: "true"
};
/* Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 

Supported image formats: JPEG, PNG, GIF, BMP. 
Image file size must be less than 4MB.
Image dimensions must be between 40 x 40 and 3200 x 3200 pixels, and the image cannot be larger than 100 megapixels.

 */
const body = {};


computerVision.ocr({
        parameters,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Recognize Domain Specific Content

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e200)

##### Description

This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | The domain-specific content to recognize. | yes | string | 

#### Body
Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 
<ul>
<li>Supported image formats: JPEG, PNG, GIF, BMP. </li>
<li>Image file size must be less than 4MB.</li>
<li>Image dimensions should be greater than 50 x 50.</li>
</ul>

#### Example

```javascript

const computerVision = cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

/* Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 

Supported image formats: JPEG, PNG, GIF, BMP. 
Image file size must be less than 4MB.
Image dimensions should be greater than 50 x 50.
 */
const body = {};


computerVision.recognizeDomainSpecificContent({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Tag Image

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1ff)

##### Description

This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST

##### Parameters


#### Body
Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 
<ul>
<li>Supported image formats: JPEG, PNG, GIF, BMP. </li>
<li>Image file size must be less than 4MB.</li>
<li>Image dimensions should be greater than 50 x 50.</li>
</ul>

#### Example

```javascript

const computerVision = cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

/* Input passed within the POST body. Supported input methods: raw image binary or image URL. 

Input requirements: 

Supported image formats: JPEG, PNG, GIF, BMP. 
Image file size must be less than 4MB.
Image dimensions should be greater than 50 x 50.
 */
const body = {};


computerVision.tagImage({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Emotion

#### Emotion - Emotion Recognition

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/563b31ea778daf121cc3a5fa)

##### Description

Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. &bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. &bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. &bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. &bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. &bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. &bull; The emotions contempt and disgust are experimental.

##### Parameters



#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})


emotion.emotionRecognition()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Emotion - Emotion Recognition in Video

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/56f8d40e1984551ec0a0984e)

##### Description

Welcome to the Microsoft Emotion API for Video. Emotion API for Video is a cloud-based API that recognizes the emotions expressed by the people in an image and returns an aggregate summary of their emotions. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. These APIs allow you to build more personalized and intelligent apps by understanding your video content. 

Emotion Recognition
Returns aggregate emotions for the faces in a video.
&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. 
&bull; For each video, the maximum number of faces returned is 64. 
&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. 
&bull; Output files are deleted after 24 hours. 

##### Parameters



#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})


emotion.emotionRecognitionInVideo()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Emotion - Emotion Recognition with Face Rectangles

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/56f23eb019845524ec61c4d7)

##### Description

Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. &bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. &bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. &bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. &bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. &bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. &bull; The emotions contempt and disgust are experimental.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceRectangles | A face rectangle is in the form “left,top,width,height”. Delimited multiple face rectangles with a “;”.  | yes | string | 


#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})


emotion.emotionRecognitionWithFaceRectangles()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Emotion - Get Recognition in Video Operation Result

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/56f8d4471984551ec0a0984f)

##### Description

Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result. Below is an example: 

Example JSON:

            
            
            
            
{
	"status": "Running",
	"createdDateTime":  "2015-09-30T01:28:23.4493273Z",
	"lastActionDateTime": "2015-09-30T01:32:23.0895791Z",
}
             
            



Possible values of "status" field are:
Not Started - video content is received/uploaded but the process has not started.
Uploading - the video content is being uploaded by the URL client side provides.
Running - the process is running.
Failed - the process is failed. Detailed information will be provided in "message" field.
Succeeded - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:

The result (as a JSON in string) is available in processingResult field.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
oid |  | yes | string | 


#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})


emotion.getRecognitionInVideoOperationResult()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Entity Linking

#### Entity Linking - Link Entity

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/56f0eabfca730713cc392442/operations/56f0eabfca73070e44d0f39c)

##### Description

Entity Linking is a natural language processing tool to help analyzing text for your application. Entity Linking recognize a named-entity from given text and  aligning a textual mention of the entity to an appropriate entry in a knowledge base. 

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
selection | The specific word or phrase within the text that is to be entity linked. If not specified, the service will try to recognize and identify all the entities within the input text. | no | string | 
offset | The location (in offset by characters) of the selected word or phrase within the input text. Used to distinguish when there are multiple instances of the same words or phrases within the input text. Only valid when the selection is specified. | no | string | 

#### Body
Given a specific paragraph of text within a document, the Entity Linking Intelligence Service will recognize and identify each separate entity based on the context

#### Example

```javascript

const entityLinking = new cognitiveServices.entityLinking({
    API_KEY: yourApiKey
})

const body = {}; // Given a specific paragraph of text within a document, the Entity Linking Intelligence Service will recognize and identify each separate entity based on the context


entityLinking.linkEntity({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Face

#### Face - Detect

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236)

##### Description

Detect human faces in an image and returns face locations, and optionally with face ID, landmarks, and attributes. 

  <ul>
  <li>Optional parameters for returning face ID, landmarks, and attributes. Attributes include age, gender, smile intensity, 
  facial hair and head-pose. Face ID is for other APIs use including 
  Face - Identify, 
  Face - Verify, and 
  Face - Find Similar. 
  The face ID will expire in 24 hours after detection call.</li>
  <ul>
  <li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
  <li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
  <li>A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.</li>
  <li>Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.</li>
  <li>Attributes (age, gender, headPose, smile and facialHair, and glasses) are still experimental and may not be very accurate. HeadPose's pitch value is reserved as 0.</li>
  </ul>
  Http Method
  POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
returnFaceId | Return face IDs of the detected faces or not. The default value is true.  | no | boolean | true
returnFaceLandmarks | Return face landmarks of the detected faces or not. The default value is false.  | no | boolean | false
returnFaceAttributes | Analyze and return the one or more specified face attributes in the comma-separated string like "returnFaceAttributes=age,gender".Supported face attributes include age, gender, headPose, smile, facialHair, and glasses. Note that each face attribute analysis has additional computational and time cost. | no | string | 

#### Body
Name | Description
--- | ---
url | URL of input image


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {
    returnFaceId: "true"
    returnFaceLandmarks: "false"
};
const body = {
    "url": "URL of input image"
};


face.detect({
        parameters,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Find Similar

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237)

##### Description


  Find similar - looking faces for a query face from a list of candidate faces (given by a face list or a face ID array) and return similar face IDs ranked by similarity.
  The candidate face list has a limitation of 1000 faces.
  Http Method
  POST


##### Parameters


#### Body
Name | Description
--- | ---
faceId | Query face The faceId comes from the 
faceIds | faceListId
maxNumOfCandidatesReturned |  for more detail faceListId and faceIds should not be provided at the same time


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "faceId": "Query face The faceId comes from the ",
    "faceIds": "faceListId",
    "maxNumOfCandidatesReturned": " for more detail faceListId and faceIds should not be provided at the same time"
};


face.findSimilar({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Group

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395238)

##### Description


  Divide candidate faces into groups based on face similarity.
  
  <ul>
  <li>The output is one or more disjointed face groups and a messyGroup. A face group contains faces
  that have similar looking, often of the same person. Face groups are ranked by
  group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
  </li>
  <li>MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces
  found their counterparts.</li>
  <li>Group API needs at least 2 candidate faces and 1000 at most. We suggest to try Face - Verify when you only have 2 candidate faces.</li>
  </ul>
  Http Method
  POST


##### Parameters


#### Body
Name | Description
--- | ---
faceIds | Candidate face IDs The maximum is 1000 faces


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "faceIds": "Candidate face IDs The maximum is 1000 faces"
};


face.group({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Identify

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239)

##### Description


  Identify unknown faces from an person group.
  
  For each face in the faceIds array,
  Face Identify will compute similarity for the face among all faces within a person group (given by personGroupId),
  and returns candidate person(s) for that face ranked by similarity confidence.
  The person group should be trained to make it ready for identify. See more in Person Group - Train Person Group.
  
  Remarks:
  <ul>
  <li>The algorithm allows more than one face to be identified, but the no more than 10 faces.</li>
  <li>Each person in the person group could have more than one face, but no more than 64 faces.</li>
  <li>Identification works well for frontal faces and near-frontal faces.</li>
  <li>Number of candidates returned is restricted by maxNumOfCandidatesReturned. If no person is identified, the candidate returned will be an empty array.</li>
  <li>Try Face - Find Similar when you need to identify similar faces from a face list instead of a person group.</li>
  </ul>
  Http Method
  POST


##### Parameters


#### Body
Name | Description
--- | ---
faceIds | Query faces' IDs The length of faceIds is between [1, 10]
personGroupId | Target person group's ID
maxNumOfCandidatesReturned | The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1)


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "faceIds": "Query faces' IDs The length of faceIds is between [1, 10]",
    "personGroupId": "Target person group's ID",
    "maxNumOfCandidatesReturned": "The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1)"
};


face.identify({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Verify

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a)

##### Description


  Verify whether two faces belong to a same person.
  
  Remarks:
  <ul>
  <li>Verify works well for frontal and near-frontal faces. </li>
  <li>For the scenarios that are sensitive to accuracy please use with own judgment.</li>
  </ul>
  Http Method
  POST


##### Parameters


#### Body
Name | Description
--- | ---
faceId1 | ID of one face
faceId2 | ID of another face


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "faceId1": "ID of one face",
    "faceId2": "ID of another face"
};


face.verify({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Add a Face to a Face List

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250)

##### Description

Add a face to a face list. The input face is specified as an image with a targetFace rectangle.
        It returns an persistedFaceId representing the added face, and persistedFaceId will not expire.
        <ul>
<li>The persistedFaceId will be used in output JSON of
        Face - Find Similar, 
  or in Face List - Delete a Face from a Face List to remove face from a face list.</li>
<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> 
<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from Face - Detect.  </li> 
</ul>

Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in 
  Face - Find Similar. 
  Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.
        
  A face list can have a maximum of 1000 faces.

  Http Method
  POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 
userData | User-specified data for any purpose. Themaximum length is 1KB. | no | string | 
targetFace | A face rectangle to specify the target face to be added into the face list, in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". No targetFace means to detect the only face in the entire image. | no | string | 

#### Body
Name | Description
--- | ---
url | Image url Image file size should between 1KB to 4MB Only one face is allowed per image


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "url": "Image url Image file size should between 1KB to 4MB Only one face is allowed per image"
};


face.addAFaceToAFaceList({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Create a Face List

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b)

##### Description


        Create an empty face list with user-specified face list ID, name and an optional user-data. 64 face lists are allowed to exist in one subscription.

Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in 
  Face - Find Similar. 
  Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.

A face list can have a maximum of 1000 faces.
 Http Method
  PUT


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 

#### Body
Name | Description
--- | ---
name | Name of the created face list, maximum length is 128
userData | Optional user defined data for the face list Length should not exceed 16KB


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "name": "Name of the created face list, maximum length is 128",
    "userData": "Optional user defined data for the face list Length should not exceed 16KB"
};


face.createAFaceList({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Face from a Face List

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251)

##### Description


  Delete an existing face from a face list (given by a face ID and a face list ID). Persisted image related to the face will also be deleted.
  Http Method
  DELETE


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 
persistedFaceId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.deleteAFaceFromAFaceList()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Face List

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f)

##### Description


  Delete an existing face list according to face list ID. Persisted face images in the face list will also be deleted.
  Http Method
  DELETE


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.deleteAFaceList()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Face List

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c)

##### Description


  Retrieve a face list's information, including face list ID, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in
  Face - Find Similar.
  Http Method
  GET


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.getAFaceList()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - List Face Lists

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524d)

##### Description


  Retrieve information about all existing face lists. Only face list ID, name and user data will be returned. Try Face List - Get a Face List to retrieve face information inside faceList.
  Http Method
  GET


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.listFaceLists()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Face List

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524e)

##### Description


  Update face changes to a face list. Face list simply represents a list of faces, and could be treat as a searchable data source in
  Face - Find Similar.
  Http Method
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 

#### Body
Name | Description
--- | ---
name | Name of the face list, maximum length is 128
userData | Optional user defined data for the face list Length should not exceed 16KB


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "name": "Name of the face list, maximum length is 128",
    "userData": "Optional user defined data for the face list Length should not exceed 16KB"
};


face.updateAFaceList({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Add a Person Face

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b)

##### Description

Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle.
        It returns an persistedFaceId representing the added face and this persistedFaceId will not expire. 
<ul>
<li>The persistedFaceId is only used in
        Face - Identify
and 
Person - Delete a Person Face</li>
<li>Each person has a maximum of 248 faces.</li>
<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> 
<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from Face - Detect.  </li> 
</ul>
  Http Method
  POST


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Target person that the face is added to. | yes | string | 
userData | User-specified data for any purpose. The maximum length is 1KB.  | no | string | 
targetFace | A face rectangle to specify the target face to be added to a person, in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". No targetFace means to detect the only face in the entire image.  | no | string | 

#### Body
Name | Description
--- | ---
url | Face image URL Valid image size is from 1KB to 4MB Only one face is allowed per image


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "url": "Face image URL Valid image size is from 1KB to 4MB Only one face is allowed per image"
};


face.addAPersonFace({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Create a Person

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523c)

##### Description


  Create a new person in a specified person group for identify. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person.
  
  The number of persons has a subscription limit. For free subscription, the limit is 1000. 
  Http Method
  POST


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 

#### Body
Name | Description
--- | ---
name | Target person's display name The maximum length is 128
userData | Optional fields for user-provided data attached to a person Size limit is 16KB


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "name": "Target person's display name The maximum length is 128",
    "userData": "Optional fields for user-provided data attached to a person Size limit is 16KB"
};


face.createAPerson({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Person

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d)

##### Description


  Delete an existing person from a person group. Persisted face images of the person will also be deleted.
  Http Method
  DELETE


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | The target personId to delete. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.deleteAPerson()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Person Face

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e)

##### Description


  Delete a face from a person. Relative image for the persisted face will also be deleted.
  Http Method
  DELETE


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Belonging person ID. | yes | string | 
persistedFaceId | The face to remove. This persisted face ID is returned from Person - Add a Person Face. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.deleteAPersonFace()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Person

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523f)

##### Description


  Retrieve a person's information, including registered faces, name and userData.
  Http Method
  GET


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | The target person ID. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.getAPerson()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Person Face

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395240)

##### Description


  Retrieve information about a face (specified by face ID, person ID and its belonging person group ID).
  Http Method
  GET


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | The target person ID the face belongs to. | yes | string | 
persistedFaceId | The target face ID. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.getAPersonFace()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - List Persons in a Person Group

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241)

##### Description


  List all people in a person group, and retrieve person information (including person ID, name, user data and registered faces of the person).
  Http Method
  GET


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | Target person group's ID. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.listPersonsInAPersonGroup()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Person

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395242)

##### Description


  Update a person's name or userData field.
  Http Method
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Target person's ID. | yes | string | 

#### Body
Name | Description
--- | ---
name | Target person's display name Maximum length is 128
userData | User-provided data attached to the person Maximum length is 16KB


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "name": "Target person's display name Maximum length is 128",
    "userData": "User-provided data attached to the person Maximum length is 16KB"
};


face.updateAPerson({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Person Face

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395243)

##### Description


  Update a person face's userData field.
  Http Method
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Target person's ID. | yes | string | 
persistedFaceId | Target face's ID. | yes | string | 

#### Body
Name | Description
--- | ---
userData | Optional Attach user data to person's face The size limit is 1KB


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "userData": "Optional Attach user data to person's face The size limit is 1KB"
};


face.updateAPersonFace({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Create a Person Group

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244)

##### Description


  Create a new person group with specified person group ID, name and user-provided data.
  
  A person group is one of the most important parameters for the Face - Identify API. The Identify
  searches person faces in a specified person group.
  Http Method
  PUT


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | User-provided person group ID as a string. The valid characters include numbers, english letters in lower case, '-' and '_'. The maximum length of the personGroupId is 64. | yes | string | 

#### Body
Name | Description
--- | ---
name | Person group display name The maximum length is 128
userData | User-provided data attached to the person group The size limit is 16KB


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "name": "Person group display name The maximum length is 128",
    "userData": "User-provided data attached to the person group The size limit is 16KB"
};


face.createAPersonGroup({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Person Group

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245)

##### Description


  Delete an existing person group. Persisted face images of all people in the person group will also be deleted.
  Http Method
  DELETE


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The ID of the person group to be deleted. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.deleteAPersonGroup()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Person Group

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395246)

##### Description


  Retrieve the information of a person group, including its name and userData. This API returns person group information only, use Person - List Persons in a Person Group instead to retrieve person information under the person group.
  Http Method
  GET


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | ID of the target person group. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.getAPersonGroup()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get Person Group Training Status

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395247)

##### Description


  Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the Person Group - Train Person Group API. The training will process for a while on the server side..
  Http Method
  GET


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | ID of target person group. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.getPersonGroupTrainingStatus()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - List Person Groups

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395248)

##### Description


  List all person groups and their information.
  Http Method
  GET


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.listPersonGroups()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Train Person Group

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249)

##### Description


  Queue a person group training task, the training task may not be started immediately.
  
  Any updates to person group will not take effect in Face - Identify until person group is successfully trained.
  You can query the training status by calling Person Group - Get Person Group Training Status API.
  Http Method
  POST


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | Target person group to be trained. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.trainPersonGroup()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Person Group

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524a)

##### Description


  Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
  Http Method
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | ID of the person group to be updated. | yes | string | 

#### Body
Name | Description
--- | ---
name | Person group display name The maximum length is 128
userData | User-provided data attached to the person group The size limit is 16KB


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const body = {
    "name": "Person group display name The maximum length is 128",
    "userData": "User-provided data attached to the person group The size limit is 16KB"
};


face.updateAPersonGroup({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Recommendations

#### Recommendations - Create a model

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d6)

##### Description

Create a new model.  A model is a container of your usage data, catalog data and the recommendation model.
Once you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating a new build in that model.

Note:
You may create up to 10 models. If you need to delete unused models, you may use the "Delete a model" API.

##### Parameters



#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.createAModel()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Create/Trigger a build

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d0)

##### Description

Trigger a recommendation model build. Before triggering a build you first must upload catalog and usage data. Once a build is triggered you will receive an operation that you can use to track the build status, or to cancel the build operation.There are 3 types of builds: a Recommendation build, a Rank build and an  FBT (frequently bought together) build.The recommendation build's purpose is to generate a recommendation model used for predictions. Predictions (for this type of build) come in two flavors: * Item to Item recommendations (I2I)Given an item or a list of items this option will predict a list of items that are likely to be of high interest. * User to Item recommendations (U2I) Given a user id (and optionally a list of items) this option will predict a list of items that are likely to be of high interest for the given user (and its additional choice of items). The U2I recommendations are based on the history of items that were of interest for the user up to the time the model was built.An FBT (Frequently bought together) build is yet another recommendations algorithm called sometimes a "conservative" recommender, which is good for catalogs that are not homogeneous in nature (homogeneous: books, movies, some food, fashion; non-homogeneous: computer and devices, cross-domain, highly diverse).Note: If the usage files that you uploaded contain the optional field "event type" then for FBT modelling only "Purchase" events will be used. If no event type is provided all events will be considered as purchase.A rank build is a technical build that allows you to learn about the usefulness of your features. It is not currently supported on this API version.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.createOrTriggerABuild()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Delete a build

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d2)

##### Description

Delete a build.
You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it. 
You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId |  | yes | string | 
buildId | Format - int64. Unique identifier of the build | yes | integer | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.deleteABuild()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Delete a model

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d8)

##### Description

Deletes an existing model by ID.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Unique identifier of the model. | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.deleteAModel()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Delete/Cancel an ongoing operation

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3db)

##### Description

Cancels an ongoing operation. One example is to cancel a build request that was submitted.To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Operation ID | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.deleteOrCancelAnOngoingOperation()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get a model by id

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d7)

##### Description

Gets a model by ID.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Unique identifier of the model to be fetched. | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getAModelById()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get all models

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d5)

##### Description

Retrieves all models.

##### Parameters



#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getAllModels()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get build by id

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d1)

##### Description

Retrieves information about the build, including parameters used to build it.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 
buildId | Format - int64. Unique identifier of the build | yes | integer | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getBuildById()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get build metrics

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/573e43bb3e9d4627a8c4bd3e)

##### Description

Retrieves the build metrics for the given build of the model. This will return metrics such as precision and diversity for the build. As part of the precision and diversity metrics evaluation, the system finds a sample of users, and then the transactions for those users are split into two groups: the training dataset and the test dataset. In order to get metrics, you should have set the enableModelingInsights parameter to true at build time.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 
buildId | Format - int64. Unique identifier of the build | yes | integer | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getBuildMetrics()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get details of all builds

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3cf)

##### Description

Retrieves the status of all builds for a model.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 
onlyLastRequestedBuild | true to return only the last build of the model, false to return all the builds | no | boolean | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getDetailsOfAllBuilds()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get recommendations based on items (I2I)

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d4)

##### Description

Get recommendations for one or more items based on a specific build.Special cases: 1. If the item list contains just a single item that is not in the catalog - an empty list is returned.2. If the item list contains some items that don't appear in the catalog - these are removed and a result is generated based on the other items.3. If an item list contains only cold items the most popular recommendation list is generated as a response.4. If the items list contains some cold items (after removing the items that don't appear in the catalog) - the result is generated based on the other items only.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 
itemIds | Comma-separated list of the items to recommend for. If the active build is of type FBT, then you can send only one item.  Max length: 1024 | yes | string | 
numberOfResults | Format - int32. Number of recommended items to return | yes | integer | 
minimalScore | Format - double. Minmal score, currently honored for only FBT builds. | yes | number | 
includeMetadata | Future use, always false. | no | boolean | 
buildId | Format - int64. The build id to use for this recommendation request. If the number is less than 0, uses the active build of the model instead. | no | integer | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getRecommendationsBasedOnItems(I2I)()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get user recommendations (U2I)

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3dd)

##### Description

Get user recommendations of a build of type "Recommendation" marked as active build.
The API will return a list of predicted items according to the usage history of the user.
Note:  There is no user recommendation for an FBT build. If the active build is FBT, this method will return an error.

Note
The EnableU2I build parameter needs to be set to true in order to train the model so that it can support user recommendations.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model. | yes | string | 
userId | Unique user identifier. | yes | string | 
numberOfResults | Format - int32. Number of recommended items to return. | yes | integer | 
itemsIds | The unique identifiers of the items to consider in addition to user history. | no | string | 
includeMetadata | Set to false. (For future use) | no | boolean | 
buildId | Format - int64. Build identifier, if the number is less than 0, uses the active build of the model instead. | no | integer | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getUserRecommendations(U2I)()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Retrieve the status of an operation

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3da)

##### Description

Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Operation ID | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.retrieveTheStatusOfAnOperation()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Update a model

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d9)

##### Description

Allows you to update the description or the active build for a model.Active build ID – Every build for every model has a build ID. The active build ID is the first successful build of every new model. Once you have an active build ID and you do additional builds for the same model, you need to explicitly set it as the default build ID if you want to. When you consume recommendations, if you do not specify the build ID that you want to use, the default one will be used automatically.This mechanism enables you - once you have a recommendation model in production - to build new models and test them before you promote them to production.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Unique identifier of the model. | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.updateAModel()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Upload a catalog file to a model

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f316efeda5650db055a3e1)

##### Description

If you upload to the same model with several calls, the system will insert only the new catalog items; Existing items will remain with the original values.  You cannot update catalog items by using this API.The catalog data should follow the following format: Item Id, Item Name, Item Category, Description, Features list.
The first 3 attributes (Item Id, Name and Category) are mandatory, while others are optional.Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). Item Name can have max length of 255 characters and can contain alphanumeric characters.Item Category can have max length of 255 characters and can contain alphanumeric characters.Item Description can have max length of 4000 characters and can contain alphanumeric characters.Item Features List can have max length of 4000 characters and can contain alphanumeric characters.Note: The maximum size of data that can be sent in POST call for this API is 200MB.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 
catalogDisplayName | Display name of the catalog data. e.g. "CatalogFile1"
Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50 | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.uploadACatalogFileToAModel()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Upload a usage file to a model

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f316efeda5650db055a3e2)

##### Description

Before you upload usage files, you need to upload the catalog files that describe the items that will be taken into consideration in the model.The maximum size of data that can be sent in POST call for this API is 200MB.  If you need to upload more than 200MB of usage data, you may call this API several times.Usage data format: User Id, Item Id, Time, Event type.The first 3 attributes (User Id, Item Id, Time) are mandatory, while others are optional for each usage event. User Id can have max length of 255 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). Time should be in date type in format: YYYY/MM/DDTHH:MM:SS (e.g. 2013/06/20T10:00:00).Event can be one of the following: Click, RecommendationClick, AddShopCart, RemoveShopCart, Purchase. Note: The maximum number of usage points that are kept is ~5,000,000. The oldest will be deleted if new ones will be uploaded or reported.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model. | yes | string | 
usageDisplayName | Display name of the usage data. e.g. "UsageFile1"Only letters(A-Z, a-z), numbers(0-9), hyphens(-) and underscore(_) are allowed. Max length: 50 | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.uploadAUsageFileToAModel()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Speaker Recognition

#### Speaker Recognition - Create Enrollment

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549c)

##### Description

Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in Verification Phrase - List All Supported Verification Phrases.
The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. GUID returned from Verification Profile - Create Profile API | yes | string | 

#### Body
Name | Example
--- | ---
Container | WAV
Encoding | PCM
Rate | 16K
SampleFormat | 16 bit
Channels | Mono


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const body = {
    "Container": "WAV",
    "Encoding": "PCM",
    "Rate": "16K",
    "SampleFormat": "16 bit",
    "Channels": "Mono"
};


speakerRecognition.createEnrollment({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Create Profile

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e)

##### Description

Create a new speaker identification profile with specified locale.
One subscription can only create 1000 speaker verification/identification profiles at most.

##### Parameters



#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})


speakerRecognition.createProfile({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Delete Profile

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9655)

##### Description

Deletes both speaker verification profile and all associated enrollments permanently from the service.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})


speakerRecognition.deleteProfile()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Get All Profiles

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9653)

##### Description

Get all speaker verification profiles within the subscription.

##### Parameters



#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})


speakerRecognition.getAllProfiles()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Get Profile

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56409ee2778daf19706420de)

##### Description

Get a speaker verification profile by verificationProfileId

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 111f427c-3791-468f-b709-fcef7660fff9


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const parameters = {
    verificationProfileId: "111f427c-3791-468f-b709-fcef7660fff9"
};

speakerRecognition.getProfile({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Reset Enrollments

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549b)

##### Description

Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})


speakerRecognition.resetEnrollments()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Get Operation Status

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c725ca73070ee8845bd6)

##### Description

Get operation status or result. The operation should be created by  Speaker Recognition - Identification or  Identification Profile - Create Enrollment. And the URL should be retrieved from Operation-Location header of initial POST 202 response

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
operationId | The operation Id, created by  Speaker Recognition - Identification or  Identification Profile - Create Enrollment.  | yes | string | EF217D0C-9085-45D7-AAE0-2B36471B89B5


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const parameters = {
    operationId: "EF217D0C-9085-45D7-AAE0-2B36471B89B5"
};

speakerRecognition.getOperationStatus({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Identification

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592)

##### Description

To automatically identify who is speaking given a group of speakers.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
identificationProfileIds | Comma-delimited identificationProfileIds, the id should be Guid.It can only support at most 10 profiles for one identification request. | yes | string | 111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9

#### Body
Name | Example
--- | ---
Container | WAV
Encoding | PCM
Rate | 16K
SampleFormat | 16 bit
Channels | Mono


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const parameters = {
    identificationProfileIds: "111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9"
};
const body = {
    "Container": "WAV",
    "Encoding": "PCM",
    "Rate": "16K",
    "SampleFormat": "16 bit",
    "Channels": "Mono"
};


speakerRecognition.identification({
        parameters,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Verification

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d)

##### Description

To automatically verify and authenticate users using their voice or speech.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 

#### Body
Name | Example
--- | ---
Container | WAV
Encoding | PCM
Rate | 16K
SampleFormat | 16 bit
Channels | Mono


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const body = {
    "Container": "WAV",
    "Encoding": "PCM",
    "Rate": "16K",
    "SampleFormat": "16 bit",
    "Channels": "Mono"
};


speakerRecognition.verification({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - List All Supported Verification Phrases

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d)

##### Description

Returns the list of supported verification phrases that can be used for Verification Profile - Create Enrollment and Speaker Recognition - Verification.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
locale | Locale for the language when retrieving verification phrases. | yes | string | en-US


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const parameters = {
    locale: "en-US"
};

speakerRecognition.listAllSupportedVerificationPhrases({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Text Analytics

#### Text Analytics - Detect Language

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c7)

##### Description

The API returns the detected language and a numeric score between 0 and 1. 
            Scores close to 1 indicate 100% certainty that the identified language is true. 
            A total of 120 languages are supported.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
numberOfLanguagesToDetect | Format - int32. (Optional) Number of languages to detect. Set to 1 by default. | no | integer | 


#### Example

```javascript

const textAnalytics = new cognitiveServices.textAnalytics({
    API_KEY: yourApiKey
})


textAnalytics.detectLanguage()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Detect Topics

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3ca)

##### Description

The API returns the top detected topics for a list of submitted text documents. 
            A topic is identified with a key phrase, which can be one or more related words. 
            Use the URL parameters and stop word list to control which words or documents are filtered out. 
            You can also supply a list of topics to exclude from the response. 
            At least 100 text documents must be submitted, however it is designed to detect topics across hundreds to thousands of documents. 
            Note that one transaction is charged per text document submitted. 
            For best performance, limit each document to a short, human written text paragraph such as review, conversation or user feedback.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
minDocumentsPerWord | Format - int32. (optional) Words that occur in less than this many documents are ignored. 
Use this parameter to help exclude rare document topics.
Omit to let the service choose appropriate value. | no | integer | 
maxDocumentsPerWord | Format - int32. (optional) Words that occur in more than this many documents are ignored. 
Use this parameter to help exclude ubiquitous document topics.
Omit to let the service choose appropriate value. | no | integer | 


#### Example

```javascript

const textAnalytics = new cognitiveServices.textAnalytics({
    API_KEY: yourApiKey
})


textAnalytics.detectTopics()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Key Phrases

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c6)

##### Description

The API returns a list of strings denoting the key talking points in the input text. 
            We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit. 
            Currently, the following languages are supported: English, German, Spanish and Japanese.

##### Parameters



#### Example

```javascript

const textAnalytics = new cognitiveServices.textAnalytics({
    API_KEY: yourApiKey
})


textAnalytics.keyPhrases()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Operation Status

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c8)

##### Description

Get the status of an operation submitted for processing. If the the operation has reached a 'Succeeded' state, will also return the result.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
operationId | A unique id for the submitted operation. | yes | string | 


#### Example

```javascript

const textAnalytics = new cognitiveServices.textAnalytics({
    API_KEY: yourApiKey
})


textAnalytics.operationStatus()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Sentiment

[API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c9)

##### Description

The API returns a numeric score between 0 and 1. 
            Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. 
            Sentiment score is generated using classification techniques. 
            The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings. 
            Currently, the following languages are supported: English, Spanish, French, Portuguese.

##### Parameters



#### Example

```javascript

const textAnalytics = new cognitiveServices.textAnalytics({
    API_KEY: yourApiKey
})


textAnalytics.sentiment()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Video

#### Video - Face Detection and Tracking

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e39)

##### Description

Detects and tracks human faces in a video and returns face locations. &bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. &bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. &bull; For each video, the maximum number of faces returned is 64. &bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. &bull; Output files are deleted after 24 hours.


##### Parameters



#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.faceDetectionAndTracking()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Get Operation Result

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e36)

##### Description

Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status. Below is an example:

Example JSON:

            
            
            
            
{
	"status": "Running",
	"createdDateTime":  "2015-09-30T01:28:23.4493273Z",
	"lastActionDateTime": "2015-09-30T01:32:23.0895791Z",
}
             
            



Possible values of "status" field are:
Not Started - video content is received/uploaded but the process has not started.
Uploading - the video content is being uploaded by the URL client side provides.
Running - the process is running.
Failed - the process is failed. Detailed information will be provided in "message" field.
Succeeded - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:


            
            Video OperationHow to Retrieve Result
            
            
            StabilizationThe result (as a video file) can be retrieved from the URL specified in resourceLocation field.
            Face Detection and TrackingMotion Detection 
The result (as a JSON in string) is available in processingResult field.
             


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
oid | OperationId | yes | string | 


#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.getOperationResult()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Get Result Video

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d81f4ca73072048922d95)

##### Description

This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from resourceLocation field of JSON returned from Get Operation Result interface.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
oid |  | yes | string | 


#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.getResultVideo()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Motion Detection

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e3a)

##### Description

Detects motion in a video, and returns the frame and duration of the motion that was captured. &bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. &bull; User can input detection zones to set up as areas to detect motion. &bull; User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.&bull; Motion Detection is optimized for stationary background videos. &bull; User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.&bull; User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.&bull; User can specify which frames to be detected by passing in a parameter (frameSamplingValue).&bull; Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects. &bull; Output files are deleted after 24 hours.


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
sensitivityLevel | Specify the detection sensitivity level: “low”, “medium”, “high”. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported. The default value is “medium”. | no | string | 
frameSamplingValue | User may skip frames by setting this parameter. It can be used as a tradeoff between performance and cost, skipping frames may reduce processing time but result in worse detection performance. The default value is 1, meaning detecting motion for every frame. If set to 2, then the algorithm will detect one frame for every two frames. The upper bound is 20. | no | number | 
detectionZones | User can setup detection zones by passing in a string like “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5 |0.3,0.3;0.55,0.3;0.8,0.3; 0.8,0.55;0.8,0.8;0.55,0.8;0.3,0.8;0.3,0.55;| 0,0;1,0;1,1;0,1”, each detection zone is separated by a “|” and each point is defined by a “x,y” pair and separated by a “;”. At most 8 detection zones are supported and each detection zone should be defined by at least 3 points and no more than 16 points. The default setting is “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5”, i.e. the whole frame defined by an 8-point polygon. | no | string | 
detectLightChange | Specify whether light change events should be detected. The default value is false. | no | boolean | 
mergeTimeThreshold | Specify the threshold on whether successive motions should be merged together, if the interval between successive motions is  | no | number | 


#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.motionDetection()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Stabilization

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e35)

##### Description

Smooths and stabilizes a video.  &bull;  The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. &bull;  Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). &bull;  Both width and height of the input video must be even numbers. &bull;  The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). &bull; Output files are deleted after 24 hours.

##### Parameters



#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.stabilization()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Thumbnail

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/56f8acb0778daf23d8ec6738)

##### Description

Generates a motion thumbnail from a video. The Video Thumbnail API provides an automatic summary for videos to let people see a preview or snapshot quickly. Selection of scenes from a video create a preview in form of a short video. 
&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
&bull; The number of scenes displayed in the thumbnail is either chosen by the user or defaults to the optimal duration supported by the Video API’s algorithm.
&bull; A scene is a collection of indexed frames. Scenes are mapped according to sequence in video. 
&bull; Fade in/fade out effects are included in the thumbnail by default, but can be turned off by the user. 
&bull; Audio is included by default, but can be turned off by the user. Pauses in audio are detected to divide video into coherent scenes and avoid breaking sentences of speech.
&bull; Output files are deleted after 24 hours.

* Optimal Duration of Video Thumbnail Supported by Video API shown in table below.






Motion Thumbnail


Video duration (d)
d < 3min
3min < d < 15min
15min < d < 30min
30min < d


Thumbnail duration
15sec (2-3 scenes)
30sec (3-5 scenes)
60sec (5-10 scenes)
90sec (10-15 scenes)




##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
maxMotionThumbnailDurationInSecs | Specifies maximum duration of output video (in seconds). The default value is 0, which indicates the duration will be automatically decided by the algorithm. | no | number | 
outputAudio | Indicates whether output video should include audio track. The default value is true. | no | boolean | 
fadeInFadeOut | Indicates whether output video should have fade in/out effect during scene changes. The default value is true. | no | boolean | 


#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.thumbnail()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Web Language Model

#### Web Language Model - Break Into Words

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a51)

##### Description

Insert spaces into a string of words lacking spaces, like a hashtag or part of a URL. Punctuation or exotic characters can prevent a string from being broken, so it’s best to limit input strings to lower-case, alpha-numeric characters.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | Which model to use, supported value: title/anchor/query/body | yes | string | 
text | The line of text to break into words. If spaces are present, they will be interpreted as hard breaks and maintained, except for leading or trailing spaces, which will be trimmed. | yes | string | 
order | The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5. | no | number | 
maxNumOfCandidatesReturned | Max number of candidates would be returned. If not specified, use default value 5. | no | number | 

#### Body
empty post body

#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})

const body = {}; // empty post body


webLanguageModel.breakIntoWords({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - Calculate Conditional Probability

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a4e)

##### Description

Calculate the conditional probability that a particular word will follow a given sequence of words.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | Which model to use, supported value: title/anchor/query/body | yes | string | 
order | The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5.  | no | number | 


#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})


webLanguageModel.calculateConditionalProbability()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - Calculate Joint Probability

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a4f)

##### Description

Calculate the joint probability that a particular sequence of words will appear together.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | Which model to use, supported value: title/anchor/query/body | yes | string | 
order | The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5. | no | number | 


#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})


webLanguageModel.calculateJointProbability()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - Generate Next Words

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a50)

##### Description

Get the list of words (completions) most likely to follow a given sequence of words.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | Which model to use, supported value: title/anchor/query/body | yes | string | 
words | A string containing a sequence of words from which to generate the list of words likely to follow. The words should be separated by spaces. | yes | string | 
order | The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5. | no | number | 
maxNumOfCandidatesReturned | Max number of candidates would be returned. If not specified, use default value 5.  | no | number | 

#### Body
empty post body

#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})

const body = {}; // empty post body


webLanguageModel.generateNextWords({,
        body
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - List Available Models

[API Endpoint Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/565bf87b778daf12447f43c1)

##### Description

List models available currently.

##### Parameters



#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})


webLanguageModel.listAvailableModels()
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



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
	