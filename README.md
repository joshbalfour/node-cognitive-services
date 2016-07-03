# Microsoft Cognitive Services SDK for Node.JS
### By [Josh Balfour](https://joshbalfour.co.uk)

## Description

Unofficial SDK for [Microsoft Cognitive Services](https://www.microsoft.com/cognitive-services) written for Node.JS

## Installation

`npm i cognitive-services --save`

## Usage

### Index
* [Academic Knowledge](#academic-knowledge)
* [Bing Autosuggest](#bing-autosuggest)
* [Bing Image Search](#bing-image-search)
* [Bing News Search](#bing-news-search)
* [Bing Spell Check](#bing-spell-check)
* [Bing Video Search](#bing-video-search)
* [Bing Web Search](#bing-web-search)
* [Computer Vision](#computer-vision)
* [Emotion](#emotion)
* [Entity Linking](#entity-linking)
* [Face](#face)
* [Recommendations](#recommendations)
* [Speaker Recognition](#speaker-recognition)
* [Text Analytics](#text-analytics)
* [Video](#video)
* [Web Language Model](#web-language-model)

### Academic Knowledge

#### Academic Knowledge - CalcHistogram

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56332331778daf02acc0a50b/operations/565d9001ca73072048922d97)

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

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56332331778daf02acc0a50b/operations/565d753be597ed16ac3ffc03)

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

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56332331778daf02acc0a50b/operations/56332331778daf06340c9666)

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

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56c7694ecf5ff801a090fbd1/operations/56c769a2cf5ff801a090fbd2)

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

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/571fab09dbe2d933e891028f)

##### Description

Get insights for an image sent in the POST body.
<br/>
<br/>
See full documentation for this API <a target="_blank" href="https://msdn.microsoft.com/en-us/library/dn760791.aspx">here<a>

##### Parameters



#### Example

```javascript

const bingImageSearch = new cognitiveServices.bingImageSearch({
    API_KEY: yourApiKey
})


bingImageSearch.imageInsights({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Bing Image Search - Search

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/56b4433fcf5ff8098cef380c)

##### Description

Get relevant images for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | cats
count | The number of image results to return in the response. The actual number delivered may be less than requested. | no | number | 10
offset | The zero-based offset that indicates the number of image results to skip before returning results. | no | number | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.<br><br>Full list of supported markets:<br>es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
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

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/56b44b8ccf5ff81038d15ce0)

##### Description

Get currently trending images.

##### Parameters



#### Example

```javascript

const bingImageSearch = new cognitiveServices.bingImageSearch({
    API_KEY: yourApiKey
})


bingImageSearch.trending({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing News Search

#### Bing News Search - Category News

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f72cf5ff8098cef380a/operations/56f02400dbe2d91900c68553)

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

const parameters = {

};

bingNewsSearch.categoryNews({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Bing News Search - Search

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f72cf5ff8098cef380a/operations/56b449fbcf5ff81038d15cdf)

##### Description

Get news articles relevant for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | microsoft
count | The number of news results to return in the response. The actual number delivered may be less than requested. | no | string | 10
offset | The zero-based offset that indicates the number of news results to skip before returning results. | no | string | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.<br><br>Full list of supported markets:<br>es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
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

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f72cf5ff8098cef380a/operations/56c7a9a6cf5ff801a090fbdc)

##### Description

Get trending topics identified by Bing.  These are the same topics shown in the banner at the bottom of the Bing home page.

##### Parameters



#### Example

```javascript

const bingNewsSearch = new cognitiveServices.bingNewsSearch({
    API_KEY: yourApiKey
})


bingNewsSearch.trendingTopics({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Spell Check

#### Bing Spell Check - Spell Check

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56e73033cf5ff80c2008c679/operations/56e73036cf5ff81048ee6727)

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

const parameters = {

};

bingSpellCheck.spellCheck({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Video Search

#### Bing Video Search - Search

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f3ccf5ff8098cef3809/operations/56b440d2cf5ff8098cef380b)

##### Description

Get videos relevant for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | cats
count | The number of video results to return in the response. The actual number delivered may be less than requested. | no | number | 10
offset | The zero-based offset that indicates the number of video results to skip before returning results. | no | number | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.<br><br>Full list of supported markets:<br>es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
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

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f3ccf5ff8098cef3809/operations/56b44c36cf5ff81038d15ce1)

##### Description

Get currently trending videos.

##### Parameters



#### Example

```javascript

const bingVideoSearch = new cognitiveServices.bingVideoSearch({
    API_KEY: yourApiKey
})


bingVideoSearch.trending({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Bing Web Search

#### Bing Web Search - Search

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43eeccf5ff8098cef3807/operations/56b4447dcf5ff8098cef380d)

##### Description

Get web, image, news, & videos results for a given query.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
q | The user's search query string | yes | string | bill gates
count | The number of search results to return in the response. The actual number delivered may be less than requested. | no | number | 10
offset | The zero-based offset that indicates the number of search results to skip before returning results. | no | number | 0
mkt | The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form {language code}-{country code}. For example, en-US.<br><br>Full list of supported markets:<br>es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US | no | string | en-us
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

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fa)

##### Description

This operation extracts a rich set of visual features based on the image content. 
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response. 
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
visualFeatures | A string indicating what visual feature types to return. Multiple values should be comma-separated. <br/>Valid visual feature types include:<br/>	<ul><li><b>Categories</b> - categorizes image content according to a taxonomy defined in documentation. </li><li><b>Tags</b> - tags the image with a detailed list of words related to the image content. </li><li><b>Description</b> - describes the image content with a complete English sentence. </li><li><b>Faces</b> - detects if faces are present. If present, generate coordinates, gender and age.</li> <li><b >ImageType</b> - detects if image is clipart or a line drawing.</li><li><b> Color</b> - determines the accent color, dominant color, and whether an image is black&white.</li><li><b>Adult</b> - detects if the image is pornographic in nature (depicts nudity or a sex act).  Sexually suggestive content is also detected.</li></ul> | no | string | Categories
details | A string indicating which domain-specific details to return. Multiple values should be comma-separated. <br/>Valid visual feature types include:<br/>	<ul><li><b >Celebrities</b> - identifies celebrities if detected in the image.</li></ul> | no | string | 


#### Example

```javascript

const computerVision = new cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    visualFeatures: "Categories"
};

computerVision.analyzeImage({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Describe Image

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fe)

##### Description

This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English.
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
maxCandidates | Maximum number of candidate descriptions to be returned.  The default is 1. | no | string | 1


#### Example

```javascript

const computerVision = new cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    maxCandidates: "1"
};

computerVision.describeImage({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Get Thumbnail

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fb)

##### Description

This operation generates a thumbnail image with the user-specified width and height.  By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI.  Smart cropping helps when you specify an aspect ratio that differs from that of the input image
<p/>
A successful response contains the thumbnail image binary.  If the request failed, the response contains an error code and a message to help determine what went wrong.

<p/>
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

<h4>Http Method</h4>
POST


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
width | Width of the thumbnail.  It must be between 1 and 1024. Recommended minimum of 50. | yes | number | 
height | Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50. | yes | number | 
smartCropping | Boolean flag for enabling smart cropping. | no | boolean | true


#### Example

```javascript

const computerVision = new cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    smartCropping: "true"
};

computerVision.getThumbnail({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - List Domain Specific Models

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fd)

##### Description

This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer.
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
GET

##### Parameters



#### Example

```javascript

const computerVision = new cognitiveServices.computerVision({
    API_KEY: yourApiKey
})


computerVision.listDomainSpecificModels({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - OCR

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc)

##### Description

Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.   

<p/>
Upon success, the OCR results will be returned. 
<p/>
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.

<h4>Http Method</h4>
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
language | The BCP-47 language code of the text to be detected in the image.The default value is &quot;unk&quot;, then the service will auto detect the language of the text in the image.<br />    <br />    Supported languages:    <ul style="margin-left:.375in;direction:ltr;unicode-bidi:embed; margin-top:0in;margin-bottom:0in" type="disc">        <li>unk (AutoDetect)</li>        <li>zh-Hans (ChineseSimplified)</li>        <li>zh-Hant (ChineseTraditional)</li>        <li>cs (Czech)</li>        <li>da (Danish)</li>        <li>nl (Dutch)</li>        <li>en (English)</li>        <li>fi (Finnish)</li>        <li>fr (French)</li>        <li>de (German)</li>        <li>el (Greek)</li>        <li>hu (Hungarian)</li>        <li>it (Italian)</li>        <li>Ja (Japanese)</li>        <li>ko (Korean)</li>        <li>nb (Norwegian)</li>        <li>pl (Polish)</li>        <li>pt (Portuguese,</li>        <li>ru (Russian)</li>        <li>es (Spanish)</li>        <li>sv (Swedish)</li>        <li>tr (Turkish)</li>    </ul> | no | string | unk
detectOrientation  | Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).  | no | boolean | true


#### Example

```javascript

const computerVision = new cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {
    language: "unk"
    detectOrientation: "true"
};

computerVision.ocr({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Recognize Domain Specific Content

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e200)

##### Description

This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities.
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | The domain-specific content to recognize. | yes | string | 


#### Example

```javascript

const computerVision = new cognitiveServices.computerVision({
    API_KEY: yourApiKey
})

const parameters = {

};

computerVision.recognizeDomainSpecificContent({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Computer Vision - Tag Image

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1ff)

##### Description

This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English.
        <br>
        <br>
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        <br>
        <br>
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

<h4>Http Method</h4>
POST

##### Parameters



#### Example

```javascript

const computerVision = new cognitiveServices.computerVision({
    API_KEY: yourApiKey
})


computerVision.tagImage({
        parameters
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

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/563b31ea778daf121cc3a5fa)

##### Description

<p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>

##### Parameters



#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})


emotion.emotionRecognition({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Emotion - Emotion Recognition in Video

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/56f8d40e1984551ec0a0984e)

##### Description

<p>Welcome to the Microsoft Emotion API for Video. Emotion API for Video is a cloud-based API that recognizes the emotions expressed by the people in an image and returns an aggregate summary of their emotions. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. These APIs allow you to build more personalized and intelligent apps by understanding your video content. </p>
<br/>
Emotion Recognition<br/>
Returns aggregate emotions for the faces in a video.<br/>
&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>
&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. <br/>
&bull; For each video, the maximum number of faces returned is 64. <br/>
&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. <br/>
&bull; Output files are deleted after 24 hours. <br/>

##### Parameters



#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})


emotion.emotionRecognitionInVideo({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Emotion - Emotion Recognition with Face Rectangles

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/56f23eb019845524ec61c4d7)

##### Description

<p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceRectangles | A face rectangle is in the form “left,top,width,height”. Delimited multiple face rectangles with a “;”.  | yes | string | 


#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})

const parameters = {

};

emotion.emotionRecognitionWithFaceRectangles({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Emotion - Get Recognition in Video Operation Result

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/56f8d4471984551ec0a0984f)

##### Description

Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result. Below is an example: <br/>

Example JSON:
<table class="element table">
            <thead>
            </thead>
            <tbody>
            <tr>
{<br/>
	"status": "Running",<br/>
	"createdDateTime":  "2015-09-30T01:28:23.4493273Z",<br/>
	"lastActionDateTime": "2015-09-30T01:32:23.0895791Z",<br/>
}<br/>
             </tr>
            </tbody>
</table>
<br/>
<p>
Possible values of "status" field are:<br/>
<b>Not Started</b> - video content is received/uploaded but the process has not started.<br/>
<b>Uploading</b> - the video content is being uploaded by the URL client side provides.<br/>
<b>Running</b> - the process is running.<br/>
<b>Failed</b> - the process is failed. Detailed information will be provided in "message" field.<br/>
<b>Succeeded</b> - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:<br/>
</p>
The result (as a JSON in string) is available in <b>processingResult</b> field.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
oid |  | yes | string | 


#### Example

```javascript

const emotion = new cognitiveServices.emotion({
    API_KEY: yourApiKey
})

const parameters = {

};

emotion.getRecognitionInVideoOperationResult({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Entity Linking

#### Entity Linking - Link Entity

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/56f0eabfca730713cc392442/operations/56f0eabfca73070e44d0f39c)

##### Description

Entity Linking is a natural language processing tool to help analyzing text for your application. Entity Linking recognize a named-entity from given text and  aligning a textual mention of the entity to an appropriate entry in a knowledge base. 

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
selection | The specific word or phrase within the text that is to be entity linked. If not specified, the service will try to recognize and identify all the entities within the input text. | no | string | 
offset | The location (in offset by characters) of the selected word or phrase within the input text. Used to distinguish when there are multiple instances of the same words or phrases within the input text. Only valid when the selection is specified. | no | string | 


#### Example

```javascript

const entityLinking = new cognitiveServices.entityLinking({
    API_KEY: yourApiKey
})

const parameters = {

};

entityLinking.linkEntity({
        parameters
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

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236)

##### Description

Detect human faces in an image and returns face locations, and optionally with face ID, landmarks, and attributes. 

  <ul>
  <li>Optional parameters for returning face ID, landmarks, and attributes. Attributes include age, gender, smile intensity, 
  facial hair and head-pose. Face ID is for other APIs use including 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a>, 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a">Face - Verify</a>, and 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>. 
  The face ID will expire in 24 hours after detection call.</li>
  <ul>
  <li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
  <li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
  <li>A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.</li>
  <li>Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.</li>
  <li>Attributes (age, gender, headPose, smile and facialHair, and glasses) are still experimental and may not be very accurate. HeadPose's pitch value is reserved as 0.</li>
  </ul>
  <h4>Http Method</h4>
  POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
returnFaceId | Return face IDs of the detected faces or not. The default value is true.  | no | boolean | true
returnFaceLandmarks | Return face landmarks of the detected faces or not. The default value is false.  | no | boolean | false
returnFaceAttributes | Analyze and return the one or more specified face attributes in the comma-separated string like "returnFaceAttributes=age,gender".Supported face attributes include age, gender, headPose, smile, facialHair, and glasses. Note that each face attribute analysis has additional computational and time cost. | no | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {
    returnFaceId: "true"
    returnFaceLandmarks: "false"
};

face.detect({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Find Similar

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237)

##### Description


  Find similar - looking faces for a query face from a list of candidate faces (given by a face list or a face ID array) and return similar face IDs ranked by similarity.
  The candidate face list has a limitation of 1000 faces.
  <h4>Http Method</h4>
  POST


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.findSimilar({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Group

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395238)

##### Description


  Divide candidate faces into groups based on face similarity.
  <br/>
  <ul>
  <li>The output is one or more disjointed face groups and a messyGroup. A face group contains faces
  that have similar looking, often of the same person. Face groups are ranked by
  group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
  </li>
  <li>MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces
  found their counterparts.</li>
  <li>Group API needs at least 2 candidate faces and 1000 at most. We suggest to try <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a">Face - Verify</a> when you only have 2 candidate faces.</li>
  </ul>
  <h4>Http Method</h4>
  POST


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.group({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Identify

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239)

##### Description


  Identify unknown faces from an person group.
  <br/><br/>
  For each face in the faceIds array,
  Face Identify will compute similarity for the face among all faces within a person group (given by personGroupId),
  and returns candidate person(s) for that face ranked by similarity confidence.
  The person group should be trained to make it ready for identify. See more in <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249">Person Group - Train Person Group</a>.
  <br/><br/>
  Remarks:
  <ul>
  <li>The algorithm allows more than one face to be identified, but the no more than 10 faces.</li>
  <li>Each person in the person group could have more than one face, but no more than 64 faces.</li>
  <li>Identification works well for frontal faces and near-frontal faces.</li>
  <li>Number of candidates returned is restricted by maxNumOfCandidatesReturned. If no person is identified, the candidate returned will be an empty array.</li>
  <li>Try <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a> when you need to identify similar faces from a face list instead of a person group.</li>
  </ul>
  <h4>Http Method</h4>
  POST


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.identify({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Verify

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a)

##### Description


  Verify whether two faces belong to a same person.
  <br/><br/>
  Remarks:
  <ul>
  <li>Verify works well for frontal and near-frontal faces. </li>
  <li>For the scenarios that are sensitive to accuracy please use with own judgment.</li>
  </ul>
  <h4>Http Method</h4>
  POST


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.verify({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Add a Face to a Face List

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250)

##### Description

<p>Add a face to a face list. The input face is specified as an image with a targetFace rectangle.
        It returns an persistedFaceId representing the added face, and persistedFaceId will not expire.
        <ul>
<li>The persistedFaceId will be used in output JSON of
        <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>, 
  or in <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251">Face List - Delete a Face from a Face List</a> to remove face from a face list.</li>
<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> 
<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236">Face - Detect</a>.  </li> 
</ul>
<p>
Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>. 
  Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.</p>
        <p>
  A face list can have a maximum of 1000 faces.
</p>
  <h4>Http Method</h4>
  POST

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 
userData | User-specified data for any purpose. The  maximum length is 1KB. | no | string | 
targetFace | A face rectangle to specify the target face to be added into the face list, in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". No targetFace means to detect the only face in the entire image. | no | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.addAFaceToAFaceList({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Create a Face List

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b)

##### Description


        <p>Create an empty face list with user-specified face list ID, name and an optional user-data. 64 face lists are allowed to exist in one subscription.</p>
<p>
Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in 
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>. 
  Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.
</p>
<p>A face list can have a maximum of 1000 faces.</p>
 <h4>Http Method</h4>
  PUT


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId |     Valid character is letter in lower case or digit or '-' or '_', maximum length is 64.   | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.createAFaceList({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Face from a Face List

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251)

##### Description


  Delete an existing face from a face list (given by a face ID and a face list ID). Persisted image related to the face will also be deleted.
  <h4>Http Method</h4>
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

const parameters = {

};

face.deleteAFaceFromAFaceList({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Face List

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f)

##### Description


  Delete an existing face list according to face list ID. Persisted face images in the face list will also be deleted.
  <h4>Http Method</h4>
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

const parameters = {

};

face.deleteAFaceList({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Face List

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c)

##### Description


  Retrieve a face list's information, including face list ID, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>.
  <h4>Http Method</h4>
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

const parameters = {

};

face.getAFaceList({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - List Face Lists

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524d)

##### Description


  Retrieve information about all existing face lists. Only face list ID, name and user data will be returned. Try <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c">Face List - Get a Face List</a> to retrieve face information inside faceList.
  <h4>Http Method</h4>
  GET


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.listFaceLists({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Face List

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524e)

##### Description


  Update face changes to a face list. Face list simply represents a list of faces, and could be treat as a searchable data source in
  <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237">Face - Find Similar</a>.
  <h4>Http Method</h4>
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceListId | Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.updateAFaceList({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Add a Person Face

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b)

##### Description

<p>Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle.
        It returns an persistedFaceId representing the added face and this persistedFaceId will not expire. </p>
<ul>
<li>The persistedFaceId is only used in
        <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a>
and 
<a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e">Person - Delete a Person Face</a></li>
<li>Each person has a maximum of 248 faces.</li>
<li>JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be no larger than 4MB.</li>
<li>The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.</li>
<li>Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.</li> 
<li>The given rectangle specifies both face location and face size at the same time. There is no guarantee of corrent result if you are using rectangle which are not returned from <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236">Face - Detect</a>.  </li> 
</ul>
  <h4>Http Method</h4>
  POST


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Target person that the face is added to. | yes | string | 
userData | User-specified data for any purpose. The maximum length is 1KB.  | no | string | 
targetFace | A face rectangle to specify the target face to be added to a person, in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". No targetFace means to detect the only face in the entire image.  | no | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.addAPersonFace({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Create a Person

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523c)

##### Description


  Create a new person in a specified person group for identify. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person.
  <br/><br/>
  The number of persons has a subscription limit. For free subscription, the limit is 1000. 
  <h4>Http Method</h4>
  POST


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.createAPerson({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Person

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d)

##### Description


  Delete an existing person from a person group. Persisted face images of the person will also be deleted.
  <h4>Http Method</h4>
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

const parameters = {

};

face.deleteAPerson({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Person Face

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e)

##### Description


  Delete a face from a person. Relative image for the persisted face will also be deleted.
  <h4>Http Method</h4>
  DELETE


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Belonging person ID. | yes | string | 
persistedFaceId | The face to remove. This persisted face ID is returned from <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b">Person - Add a Person Face</a>. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.deleteAPersonFace({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Person

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523f)

##### Description


  Retrieve a person's information, including registered faces, name and userData.
  <h4>Http Method</h4>
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

const parameters = {

};

face.getAPerson({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Person Face

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395240)

##### Description


  Retrieve information about a face (specified by face ID, person ID and its belonging person group ID).
  <h4>Http Method</h4>
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

const parameters = {

};

face.getAPersonFace({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - List Persons in a Person Group

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241)

##### Description


  List all people in a person group, and retrieve person information (including person ID, name, user data and registered faces of the person).
  <h4>Http Method</h4>
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

const parameters = {

};

face.listPersonsInAPersonGroup({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Person

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395242)

##### Description


  Update a person's name or userData field.
  <h4>Http Method</h4>
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Target person's ID. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.updateAPerson({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Person Face

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395243)

##### Description


  Update a person face's userData field.
  <h4>Http Method</h4>
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | The target person's belonging person group's ID. | yes | string | 
personId | Target person's ID. | yes | string | 
persistedFaceId | Target face's ID. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.updateAPersonFace({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Create a Person Group

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244)

##### Description


  Create a new person group with specified person group ID, name and user-provided data.
  <br/><br/>
  A person group is one of the most important parameters for the <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a> API. The Identify
  searches person faces in a specified person group.
  <h4>Http Method</h4>
  PUT


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId |     User-provided person group ID as a string. The valid characters include numbers, english letters in lower case, '-' and '_'. The maximum length of the personGroupId is 64.   | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.createAPersonGroup({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Delete a Person Group

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245)

##### Description


  Delete an existing person group. Persisted face images of all people in the person group will also be deleted.
  <h4>Http Method</h4>
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

const parameters = {

};

face.deleteAPersonGroup({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get a Person Group

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395246)

##### Description


  Retrieve the information of a person group, including its name and userData. This API returns person group information only, use <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241">Person - List Persons in a Person Group</a> instead to retrieve person information under the person group.
  <h4>Http Method</h4>
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

const parameters = {

};

face.getAPersonGroup({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Get Person Group Training Status

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395247)

##### Description


  Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249">Person Group - Train Person Group</a> API. The training will process for a while on the server side..
  <h4>Http Method</h4>
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

const parameters = {

};

face.getPersonGroupTrainingStatus({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - List Person Groups

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395248)

##### Description


  List all person groups and their information.
  <h4>Http Method</h4>
  GET


##### Parameters



#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})


face.listPersonGroups({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Train Person Group

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249)

##### Description


  Queue a person group training task, the training task may not be started immediately.
  <br/><br/>
  Any updates to person group will not take effect in <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239">Face - Identify</a> until person group is successfully trained.
  You can query the training status by calling <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395247">Person Group - Get Person Group Training Status</a> API.
  <h4>Http Method</h4>
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

const parameters = {

};

face.trainPersonGroup({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Face - Update a Person Group

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524a)

##### Description


  Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
  <h4>Http Method</h4>
  PATCH


##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
personGroupId | ID of the person group to be updated. | yes | string | 


#### Example

```javascript

const face = new cognitiveServices.face({
    API_KEY: yourApiKey
})

const parameters = {

};

face.updateAPersonGroup({
        parameters
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

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d6)

##### Description

Create a new model.  A model is a container of your usage data, catalog data and the recommendation model.<br>
Once you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating a new build in that model.

<p><b>Note:</b></p>
<p>You may create up to 10 models. If you need to delete unused models, you may use the "Delete a model" API.</p>

##### Parameters



#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.createAModel({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Create/Trigger a build

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d0)

##### Description

Trigger a recommendation model build. Before triggering a build you first must upload catalog and usage data. Once a build is triggered you will receive an <i>operation</i> that you can use to track the build status, or to cancel the build operation.<p>There are 3 types of builds: a <i>Recommendation</i> build, a <i>Rank</i> build and an <i> FBT (frequently bought together) build.</i></p><p>The recommendation build's purpose is to generate a recommendation model used for predictions. Predictions (for this type of build) come in two flavors: <br><p>* <i>Item to Item recommendations (I2I)</i><br>Given an item or a list of items this option will predict a list of items that are likely to be of high interest. </p><p>* <i>User to Item recommendations (U2I) </i><br>Given a user id (and optionally a list of items) this option will predict a list of items that are likely to be of high interest for the given user (and its additional choice of items). The U2I recommendations are based on the history of items that were of interest for the user up to the time the model was built.</p><p>An FBT (Frequently bought together) build is yet another recommendations algorithm called sometimes a "conservative" recommender, which is good for catalogs that are not homogeneous in nature (homogeneous: books, movies, some food, fashion; non-homogeneous: computer and devices, cross-domain, highly diverse).</p><p><b>Note:</b> If the usage files that you uploaded contain the optional field "event type" then for FBT modelling only "Purchase" events will be used. If no event type is provided all events will be considered as purchase.</p><p>A rank build is a technical build that allows you to learn about the usefulness of your features. It is not currently supported on this API version.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})

const parameters = {

};

recommendations.create / TriggerABuild({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Delete a build

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d2)

##### Description

Delete a build.
<p>You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it. </p>
<p>You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.</p>

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

const parameters = {

};

recommendations.deleteABuild({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Delete a model

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d8)

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

const parameters = {

};

recommendations.deleteAModel({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Delete/Cancel an ongoing operation

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3db)

##### Description

<p>Cancels an ongoing operation. One example is to cancel a build request that was submitted.</p><p>To get the operation ID location, you should check the <i>Operation-Location</i> header that is returned on the response when you are triggering a build.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Operation ID | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})

const parameters = {

};

recommendations.delete / CancelAnOngoingOperation({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get a model by id

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d7)

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

const parameters = {

};

recommendations.getAModelById({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get all models

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d5)

##### Description

Retrieves all models.

##### Parameters



#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})


recommendations.getAllModels({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get build by id

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d1)

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

const parameters = {

};

recommendations.getBuildById({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get build metrics

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/573e43bb3e9d4627a8c4bd3e)

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

const parameters = {

};

recommendations.getBuildMetrics({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get details of all builds

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3cf)

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

const parameters = {

};

recommendations.getDetailsOfAllBuilds({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get recommendations based on items (I2I)

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d4)

##### Description

<p>Get recommendations for one or more items based on a specific build.</p><p>Special cases: <br>1. If the item list contains just a single item that is not in the catalog - an empty list is returned.<br>2. If the item list contains some items that don't appear in the catalog - these are removed and a result is generated based on the other items.<br>3. If an item list contains only <i>cold items</i> the <i>most popular</i> recommendation list is generated as a response.<br>4. If the items list contains some <i>cold</i> items (after removing the items that don't appear in the catalog) - the result is generated based on the other items only.<br>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 
itemIds | Comma-separated list of the items to recommend for. If the active build is of type FBT, then you can send only one item. <br> Max length: 1024 | yes | string | 
numberOfResults | Format - int32. Number of recommended items to return | yes | integer | 
minimalScore | Format - double. Minmal score, currently honored for only FBT builds. | yes | number | 
includeMetadata | Future use, always false. | no | boolean | 
buildId | Format - int64. The build id to use for this recommendation request. If the number is less than 0, uses the active build of the model instead. | no | integer | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})

const parameters = {

};

recommendations.getRecommendationsBasedOnItems(I2I)({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Get user recommendations (U2I)

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3dd)

##### Description

Get user recommendations of a build of type "Recommendation" marked as active build.<br>
The API will return a list of predicted items according to the usage history of the user.<br>
Note:  There is no user recommendation for an <i>FBT</i> build. If the active build is <i>FBT</i>, this method will return an error.

<p><b>Note</b></p>
<p>The EnableU2I build parameter needs to be set to true in order to train the model so that it can support user recommendations.</p>

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

const parameters = {

};

recommendations.getUserRecommendations(U2I)({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Retrieve the status of an operation

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3da)

##### Description

<p>Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.</p><p>To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Operation ID | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})

const parameters = {

};

recommendations.retrieveTheStatusOfAnOperation({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Update a model

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d9)

##### Description

<p>Allows you to update the description or the active build for a model.</p><p><b>Active build ID</b> – Every build for every model has a build ID. The active build ID is the first successful build of every new model. Once you have an active build ID and you do additional builds for the same model, you need to explicitly set it as the default build ID if you want to. When you consume recommendations, if you do not specify the build ID that you want to use, the default one will be used automatically.</p><p>This mechanism enables you - once you have a recommendation model in production - to build new models and test them before you promote them to production.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Unique identifier of the model. | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})

const parameters = {

};

recommendations.updateAModel({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Upload a catalog file to a model

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f316efeda5650db055a3e1)

##### Description

<p>If you upload to the same model with several calls, the system will insert only the new catalog items; Existing items will remain with the original values.  You cannot update catalog items by using this API.</p><p>The catalog data should follow the following format: <br><i>Item Id, Item Name, Item Category, Description, Features list.</i></p>
<p>The first 3 attributes (Item Id, Name and Category) are mandatory, while others are optional.</p><p>Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Item Name can have max length of 255 characters and can contain alphanumeric characters.</p><p>Item Category can have max length of 255 characters and can contain alphanumeric characters.</p><p>Item Description can have max length of 4000 characters and can contain alphanumeric characters.</p><p>Item Features List can have max length of 4000 characters and can contain alphanumeric characters.</p>Note: The maximum size of data that can be sent in POST call for this API is 200MB.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 
catalogDisplayName | Display name of the catalog data. e.g. "CatalogFile1"            Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50 | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})

const parameters = {

};

recommendations.uploadACatalogFileToAModel({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Recommendations - Upload a usage file to a model

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f316efeda5650db055a3e2)

##### Description

<p>Before you upload usage files, you need to upload the catalog files that describe the items that will be taken into consideration in the model.</p><p>The maximum size of data that can be sent in POST call for this API is 200MB.  If you need to upload more than 200MB of usage data, you may call this API several times.</p><p>Usage data format: <i>User Id, Item Id, Time, Event type</i>.</p><p>The first 3 attributes (User Id, Item Id, Time) are mandatory, while others are optional for each usage event. </p><p>User Id can have max length of 255 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Item Id can have max length of 50 characters and allowed characters are [A-z], [a-z], [0-9], [_] (Underscore), [-] (Dash). </p><p>Time should be in date type in format: YYYY/MM/DDTHH:MM:SS (e.g. 2013/06/20T10:00:00).</p><p>Event can be one of the following: <i>Click, RecommendationClick, AddShopCart, RemoveShopCart, Purchase. </i></p><p><b>Note: </b>The maximum number of usage points that are kept is ~5,000,000. The oldest will be deleted if new ones will be uploaded or reported.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model. | yes | string | 
usageDisplayName | Display name of the usage data. e.g. "UsageFile1"<br>Only letters(A-Z, a-z), numbers(0-9), hyphens(-) and underscore(_) are allowed. <br>Max length: 50 | yes | string | 


#### Example

```javascript

const recommendations = new cognitiveServices.recommendations({
    API_KEY: yourApiKey
})

const parameters = {

};

recommendations.uploadAUsageFileToAModel({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Speaker Recognition

#### Speaker Recognition - Create Enrollment

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549c)

##### Description

Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d">Verification Phrase - List All Supported Verification Phrases</a>.<br/><br/>
The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. GUID returned from <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9652">Verification Profile - Create Profile</a> API | yes | string | 


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const parameters = {

};

speakerRecognition.createEnrollment({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Create Profile

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e)

##### Description

Create a new speaker identification profile with specified locale.<br/>
One subscription can only create 1000 speaker verification/identification profiles at most.<br/>

##### Parameters



#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})


speakerRecognition.createProfile({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Delete Profile

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9655)

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

const parameters = {

};

speakerRecognition.deleteProfile({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Get All Profiles

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9653)

##### Description

Get all speaker verification profiles within the subscription.

##### Parameters



#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})


speakerRecognition.getAllProfiles({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Get Profile

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56409ee2778daf19706420de)

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

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549b)

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

const parameters = {

};

speakerRecognition.resetEnrollments({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Get Operation Status

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c725ca73070ee8845bd6)

##### Description

Get operation status or result. The operation should be created by <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592"> Speaker Recognition - Identification</a> or <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797"> Identification Profile - Create Enrollment</a>. And the URL should be retrieved from Operation-Location header of initial POST 202 response

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
operationId | The operation Id, created by <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592"> Speaker Recognition - Identification</a> or <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797"> Identification Profile - Create Enrollment</a>.  | yes | string | EF217D0C-9085-45D7-AAE0-2B36471B89B5


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

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592)

##### Description

To automatically identify who is speaking given a group of speakers.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
identificationProfileIds | Comma-delimited identificationProfileIds, the id should be Guid.<br/>It can only support at most 10 profiles for one identification request. | yes | string | 111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const parameters = {
    identificationProfileIds: "111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9"
};

speakerRecognition.identification({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - Verification

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d)

##### Description

To automatically verify and authenticate users using their voice or speech.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 


#### Example

```javascript

const speakerRecognition = new cognitiveServices.speakerRecognition({
    API_KEY: yourApiKey
})

const parameters = {

};

speakerRecognition.verification({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Speaker Recognition - List All Supported Verification Phrases

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d)

##### Description

Returns the list of supported verification phrases that can be used for <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549c">Verification Profile - Create Enrollment</a> and <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d">Speaker Recognition - Verification</a>.

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

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c7)

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

const parameters = {

};

textAnalytics.detectLanguage({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Detect Topics

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3ca)

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
minDocumentsPerWord | Format - int32. (optional) Words that occur in less than this many documents are ignored.             Use this parameter to help exclude rare document topics.            Omit to let the service choose appropriate value. | no | integer | 
maxDocumentsPerWord | Format - int32. (optional) Words that occur in more than this many documents are ignored.             Use this parameter to help exclude ubiquitous document topics.            Omit to let the service choose appropriate value. | no | integer | 


#### Example

```javascript

const textAnalytics = new cognitiveServices.textAnalytics({
    API_KEY: yourApiKey
})

const parameters = {

};

textAnalytics.detectTopics({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Key Phrases

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c6)

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


textAnalytics.keyPhrases({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Operation Status

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c8)

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

const parameters = {

};

textAnalytics.operationStatus({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Text Analytics - Sentiment

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c9)

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


textAnalytics.sentiment({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Video

#### Video - Face Detection and Tracking

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e39)

##### Description

<p>Detects and tracks human faces in a video and returns face locations. <br/>&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. <br/>&bull; For each video, the maximum number of faces returned is 64. <br/>&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; Output files are deleted after 24 hours.
</p>

##### Parameters



#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.faceDetectionAndTracking({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Get Operation Result

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e36)

##### Description

Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status. Below is an example:

Example JSON:
<table class="element table">
            <thead>
            </thead>
            <tbody>
            <tr>
{<br/>
	"status": "Running",<br/>
	"createdDateTime":  "2015-09-30T01:28:23.4493273Z",<br/>
	"lastActionDateTime": "2015-09-30T01:32:23.0895791Z",<br/>
}<br/>
             </tr>
            </tbody>
</table>
<br/>
<p>
Possible values of "status" field are:<br/>
<b>Not Started</b> - video content is received/uploaded but the process has not started.<br/>
<b>Uploading</b> - the video content is being uploaded by the URL client side provides.<br/>
<b>Running</b> - the process is running.<br/>
<b>Failed</b> - the process is failed. Detailed information will be provided in "message" field.<br/>
<b>Succeeded</b> - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:<br/>
</p>
<table class="element table">
            <thead>
            <tr><th>Video Operation</th><th>How to Retrieve Result</th></tr>
            </thead>
            <tbody>
            <tr><td>Stabilization</td><td>The result (as a video file) can be retrieved from the URL specified in <b>resourceLocation</b> field.</td></tr>
            <tr><td>Face Detection and Tracking<br/>Motion Detection 
</td><td>The result (as a JSON in string) is available in <b>processingResult</b> field.</td></tr>
             </tbody>
</table>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
oid | OperationId | yes | string | 


#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})

const parameters = {

};

video.getOperationResult({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Get Result Video

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d81f4ca73072048922d95)

##### Description

This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from <b>resourceLocation</b> field of JSON returned from Get Operation Result interface.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
oid |  | yes | string | 


#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})

const parameters = {

};

video.getResultVideo({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Motion Detection

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e3a)

##### Description

<p>Detects motion in a video, and returns the frame and duration of the motion that was captured. <br/>&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull; User can input detection zones to set up as areas to detect motion. <br/>&bull; User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.<br/>&bull; Motion Detection is optimized for stationary background videos. <br/>&bull; User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.<br/>&bull; User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.<br/>&bull; User can specify which frames to be detected by passing in a parameter (frameSamplingValue).<br/>&bull; Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects. <br/>&bull; Output files are deleted after 24 hours.
</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
sensitivityLevel | Specify the detection sensitivity level: “low”, “medium”, “high”. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported. The default value is “medium”. | no | string | 
frameSamplingValue | User may skip frames by setting this parameter. It can be used as a tradeoff between performance and cost, skipping frames may reduce processing time but result in worse detection performance. The default value is 1, meaning detecting motion for every frame. If set to 2, then the algorithm will detect one frame for every two frames. The upper bound is 20. | no | number | 
detectionZones | User can setup detection zones by passing in a string like “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5 |0.3,0.3;0.55,0.3;0.8,0.3; 0.8,0.55;0.8,0.8;0.55,0.8;0.3,0.8;0.3,0.55;| 0,0;1,0;1,1;0,1”, each detection zone is separated by a “|” and each point is defined by a “x,y” pair and separated by a “;”. At most 8 detection zones are supported and each detection zone should be defined by at least 3 points and no more than 16 points. The default setting is “detectionZones=0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5”, i.e. the whole frame defined by an 8-point polygon. | no | string | 
detectLightChange | Specify whether light change events should be detected. The default value is false. | no | boolean | 
mergeTimeThreshold | Specify the threshold on whether successive motions should be merged together, if the interval between successive motions is <= mergeTimeThreshold, they will be merged. The default value is 0.0 and upper bound is 10.0. | no | number | 


#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})

const parameters = {

};

video.motionDetection({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Stabilization

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e35)

##### Description

<p>Smooths and stabilizes a video.  <br/>&bull;  The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull;  Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). <br/>&bull;  Both width and height of the input video must be even numbers. <br/>&bull;  The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). <br/>&bull; Output files are deleted after 24 hours.</p>

##### Parameters



#### Example

```javascript

const video = new cognitiveServices.video({
    API_KEY: yourApiKey
})


video.stabilization({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Video - Thumbnail

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/56f8acb0778daf23d8ec6738)

##### Description

Generates a motion thumbnail from a video. The Video Thumbnail API provides an automatic summary for videos to let people see a preview or snapshot quickly. Selection of scenes from a video create a preview in form of a short video. <br/>
&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>
&bull; The number of scenes displayed in the thumbnail is either chosen by the user or defaults to the optimal duration supported by the Video API’s algorithm.<br/>
&bull; A scene is a collection of indexed frames. Scenes are mapped according to sequence in video. <br/>
&bull; Fade in/fade out effects are included in the thumbnail by default, but can be turned off by the user. <br/>
&bull; Audio is included by default, but can be turned off by the user. Pauses in audio are detected to divide video into coherent scenes and avoid breaking sentences of speech.<br/>
&bull; Output files are deleted after 24 hours.<br/>
<br/>
* Optimal Duration of Video Thumbnail Supported by Video API shown in table below.

<table class="element table">
<thead>
</thead>
<tbody>
<tr>
<td>Motion Thumbnail</td>
</tr>
<tr>
<td>Video duration (d)</td>
<td>d < 3min</td>
<td>3min < d < 15min</td>
<td>15min < d < 30min</td>
<td>30min < d</td>
</tr>
<tr>
<td>Thumbnail duration</td>
<td>15sec (2-3 scenes)</td>
<td>30sec (3-5 scenes)</td>
<td>60sec (5-10 scenes)</td>
<td>90sec (10-15 scenes)</td>
</tr>
<tbody>
</table>

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

const parameters = {

};

video.thumbnail({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```



### Web Language Model

#### Web Language Model - Break Into Words

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a51)

##### Description

Insert spaces into a string of words lacking spaces, like a hashtag or part of a URL. Punctuation or exotic characters can prevent a string from being broken, so it’s best to limit input strings to lower-case, alpha-numeric characters.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | Which model to use, supported value: title/anchor/query/body | yes | string | 
text | The line of text to break into words. If spaces are present, they will be interpreted as hard breaks and maintained, except for leading or trailing spaces, which will be trimmed. | yes | string | 
order | The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5. | no | number | 
maxNumOfCandidatesReturned | Max number of candidates would be returned. If not specified, use default value 5. | no | number | 


#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})

const parameters = {

};

webLanguageModel.breakIntoWords({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - Calculate Conditional Probability

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a4e)

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

const parameters = {

};

webLanguageModel.calculateConditionalProbability({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - Calculate Joint Probability

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a4f)

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

const parameters = {

};

webLanguageModel.calculateJointProbability({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - Generate Next Words

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/55de9ca4e597ed19b0de8a50)

##### Description

Get the list of words (completions) most likely to follow a given sequence of words.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
model | Which model to use, supported value: title/anchor/query/body | yes | string | 
words | A string containing a sequence of words from which to generate the list of words likely to follow. The words should be separated by spaces. | yes | string | 
order | The order of N-gram. If not specified, use default value 5 .Supported value: 1, 2, 3, 4, 5. | no | number | 
maxNumOfCandidatesReturned | Max number of candidates would be returned. If not specified, use default value 5.  | no | number | 


#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})

const parameters = {

};

webLanguageModel.generateNextWords({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

#### Web Language Model - List Available Models

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/565bf87b778daf12447f43c1)

##### Description

List models available currently.

##### Parameters



#### Example

```javascript

const webLanguageModel = new cognitiveServices.webLanguageModel({
    API_KEY: yourApiKey
})


webLanguageModel.listAvailableModels({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });

```

