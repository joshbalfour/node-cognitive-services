# Microsoft Cognitive Services SDK for Node.JS
### By [Josh Balfour](https://joshbalfour.co.uk)

## Description

Unofficial SDK for [Microsoft Cognitive Services](https://www.microsoft.com/cognitive-services) written for Node.JS

## Installation

`npm i cognitive-services --save`

## Usage

### Index
* [Academic Knowledge](#Academic-Knowledge)
* [Bing Autosuggest](#Bing-Autosuggest)
* [Bing Image Search](#Bing-Image-Search)
* [Bing News Search](#Bing-News-Search)
* [Bing Spell Check](#Bing-Spell-Check)
* [Bing Video Search](#Bing-Video-Search)
* [Bing Web Search](#Bing-Web-Search)
* [Computer Vision](#Computer-Vision)
* [Emotion](#Emotion)
* [Entity Linking](#Entity-Linking)
* [Face](#Face)
* [Recommendations](#Recommendations)
* [Speaker Recognition](#Speaker-Recognition)
* [Text Analytics](#Text-Analytics)
* [Video](#Video)
* [Web Language Model](#Web-Language-Model)

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


			const academicKnowledge = new cognitiveServices.academicKnowledge({API_KEY: yourApiKey})
			
		const parameters = {
			model: "latest"
			count: "10"
			offset: "0"
		};

			academicKnowledge.calcHistogram({parameters})
				.then((response) => {
						/**
							Example response: {
		"expr": "And(Composite(AA.AuN=='jaime teevan'),Y>2012)",
		"num_entities": 37,
		"histograms": [
			{
				"attribute": "Y",
				"distinct_values": 3,
				"total_count": 37,
				"histogram": [
					{
						"value": 2014,
						"prob": 1.275e-7,
						"count": 15
					},
					{
						"value": 2013,
						"prob": 1.184e-7,
						"count": 12
					},
					{
						"value": 2015,
						"prob": 8.279e-8,
						"count": 10
					}
				]
			},
			{
				"attribute": "F.FN",
				"distinct_values": 34,
				"total_count": 53,
				"histogram": [
					{
						"value": "crowdsourcing",
						"prob": 7.218e-8,
						"count": 9
					},
					{
						"value": "information retrieval",
						"prob": 4.082e-8,
						"count": 4
					},
					{
						"value": "personalization",
						"prob": 2.384e-8,
						"count": 3
					},
					{
						"value": "mobile search",
						"prob": 2.119e-8,
						"count": 2
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const academicKnowledge = new cognitiveServices.academicKnowledge({API_KEY: yourApiKey})
			
		const parameters = {
			model: "latest"
			count: "10"
			offset: "0"
			attributes: "Id"
		};

			academicKnowledge.evaluate({parameters})
				.then((response) => {
						/**
							Example response: {
		"expr": "Composite(AA.AuN=='jaime teevan')",
		"entities": [
			{
				"prob": 2.266e-7,
				"Ti": "personalizing search via automated analysis of interests and activities",
				"Y": 2005,
				"CC": 372,
				"AA": [
					{
						"AuN": "jaime teevan",
						"AuId": 1968481722
					},
					{
						"AuN": "susan t dumais",
						"AuId": 676500258
					},
					{
						"AuN": "eric horvitz",
						"AuId": 1470530979
					}
				]
			},
			{
				"prob": 1.723e-7,
				"Ti": "the perfect search engine is not enough a study of orienteering behavior in directed search",
				"Y": 2004,
				"CC": 237,
				"AA": [
					{
						"AuN": "jaime teevan",
						"AuId": 1982462162
					},
					{
						"AuN": "christine alvarado",
						"AuId": 2163512453
					},
					{
						"AuN": "mark s ackerman",
						"AuId": 2055132526
					},
					{
						"AuN": "david r karger",
						"AuId": 2012534293
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const academicKnowledge = new cognitiveServices.academicKnowledge({API_KEY: yourApiKey})
			
		const parameters = {
			complete: "0"
			count: "10"
			model: "latest"
		};

			academicKnowledge.interpret({parameters})
				.then((response) => {
						/**
							Example response: {
		"query": "papers by jaime",
		"interpretations": [
			{
				"prob": 0.000002429,
				"parse": "<rule id=\"#GetPapers\">papers by <attr name=\"academic#AA.AuN\">jaime teevan</attr></rule>",
				"rules": [
					{
						"name": "#GetPapers",
						"output": {
							"type": "query",
							"value": "Composite(AA.AuN=='jaime teevan')"
						}
					}
				]
			},
			{
				"prob": 0.000001416,
				"parse": "<rule id=\"#GetPapers\">papers by <attr name=\"academic#AA.AuN\" canonical=\"j l green\">jaime green</attr></rule>",
				"rules": [
					{
						"name": "#GetPapers",
						"output": {
							"type": "query",
							"value": "Composite(AA.AuN=='j l green')"
						}
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const bingAutosuggest = new cognitiveServices.bingAutosuggest({API_KEY: yourApiKey})
			
		const parameters = {
			q: "bill g"
		};

			bingAutosuggest.suggestions({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "Suggestions",
		"instrumentation": {
			"pingUrlBase": "https://www.bing.com/api/ping?IG=0AE638F758E041DFA1A2B8B39848C280&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bing.com/api/ping/pageload?IG=0AE638F758E041DFA1A2B8B39848C280&CID=070910FF0C0362112C11188E0DD06323&Type=Event.CPT&DATA=0"
		},
		"queryContext": {
			"originalQuery": "bill gatis"
		},
		"suggestionGroups": [
			{
				"name": "Web",
				"searchSuggestions": [
					{
						"url": "https://www.bing.com/search?q=bill+gates+foundation&FORM=USBAPI",
						"urlPingSuffix": "DevEx,5003.1",
						"displayText": "bill gates foundation",
						"query": "bill gates foundation",
						"searchKind": "WebSearch"
					},
					{
						"url": "https://www.bing.com/search?q=bill+gates+scholarship&FORM=USBAPI",
						"urlPingSuffix": "DevEx,5004.1",
						"displayText": "bill gates scholarship",
						"query": "bill gates scholarship",
						"searchKind": "WebSearch"
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const bingImageSearch = new cognitiveServices.bingImageSearch({API_KEY: yourApiKey})
			

			bingImageSearch.imageInsights({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const bingImageSearch = new cognitiveServices.bingImageSearch({API_KEY: yourApiKey})
			
		const parameters = {
			q: "cats"
			count: "10"
			offset: "0"
			mkt: "en-us"
			safeSearch: "Moderate"
		};

			bingImageSearch.search({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "Images",
		"instrumentation": {
			"pingUrlBase": "https://www.bingapis.com/api/ping?IG=08FFB177A90A4DF585A703215CEC19AA&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bingapis.com/api/ping/pageload"
		},
		"readLink": "https://www.bing.com/api/v5/images/search?q=cats",
		"webSearchUrl": "https://www.bing.com/images/search?q=cats&FORM=OIIARP",
		"webSearchUrlPingSuffix": "DevEx,5042.1",
		"totalEstimatedMatches": 1000,
		"value": [
			{
				"name": "Proxecto Gato: cats wallpapers by bighdwallpapers",
				"webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=cats&id=DF010D14AC241C0AC39B5EAFD85F8B117825C79B&simid=608001210598098509",
				"webSearchUrlPingSuffix": "DevEx,5043.1",
				"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.M42428010d527fc1225757ada9d9a8bccH0&pid=Api",
				"datePublished": "2012-08-23T12:00:00",
				"contentUrl": "http://4.bp.blogspot.com/-XkviAtJ1s6Q/T3YFb2RUhDI/AAAAAAAAAVQ/EHomLZlFMKo/s1600/small+cat.jpg",
				"hostPageUrl": "http://proxectogato.blogspot.com/2012/08/cats-wallpapers-by-bighdwallpapers.html",
				"hostPageUrlPingSuffix": "DevEx,5006.1",
				"contentSize": "241661 B",
				"encodingFormat": "jpeg",
				"hostPageDisplayUrl": "proxectogato.blogspot.com/2012/08/cats-wallpapers-by",
				"width": 1600,
				"height": 1200,
				"thumbnail": {
					"width": 480,
					"height": 360
				},
				"imageInsightsToken": "ccid_QkKAENUn*mid_DF010D14AC241C0AC39B5EAFD85F8B117825C79B*simid_608001210598098509",
				"insightsSourcesSummary": {
					"shoppingSourcesCount": 1,
					"recipeSourcesCount": 0
				},
				"imageId": "DF010D14AC241C0AC39B5EAFD85F8B117825C79B",
				"accentColor": "5A4E46"
			},
			{
				"name": "Kitten - Cats Wallpaper (18565791) - Fanpop",
				"webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=cats&id=6119DF9238F0C40EC3C326F41919BAFBF88F5CA4&simid=608041523156487908",
				"webSearchUrlPingSuffix": "DevEx,5044.1",
				"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M7dfb8973bca22c4939102df3ae3de66do0&pid=Api",
				"datePublished": "2012-06-29T23:55:00",
				"contentUrl": "http://images4.fanpop.com/image/photos/18500000/Kitten-cats-18565791-1024-768.jpg",
				"hostPageUrl": "http://www.fanpop.com/clubs/cats/images/18565791/title/kitten-wallpaper",
				"hostPageUrlPingSuffix": "DevEx,5011.1",
				"contentSize": "207480 B",
				"encodingFormat": "jpeg",
				"hostPageDisplayUrl": "www.fanpop.com/clubs/cats/images/18565791/title/kitten-wallpaper",
				"width": 1024,
				"height": 768,
				"thumbnail": {
					"width": 300,
					"height": 225
				},
				"imageInsightsToken": "ccid_ffuJc7yi*mid_6119DF9238F0C40EC3C326F41919BAFBF88F5CA4*simid_608041523156487908",
				"insightsSourcesSummary": {
					"shoppingSourcesCount": 1,
					"recipeSourcesCount": 0
				},
				"imageId": "6119DF9238F0C40EC3C326F41919BAFBF88F5CA4",
				"accentColor": "7D694E"
			},
			{
				"name": "Wonderous Cats Admiration of the docile feline",
				"webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=cats&id=EDF89351A0ECA99617C859D06F71450FCB5EF2E3&simid=608032623984250213",
				"webSearchUrlPingSuffix": "DevEx,5045.1",
				"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M38d3aa9aa6cc8c444492212efdb3a91dH0&pid=Api",
				"datePublished": "2014-04-27T22:53:00",
				"contentUrl": "http://www.andrew.cmu.edu/user/cfperron/cats/images/cat8.jpg",
				"hostPageUrl": "http://www.andrew.cmu.edu/user/cfperron/cats/",
				"hostPageUrlPingSuffix": "DevEx,5016.1",
				"contentSize": "484631 B",
				"encodingFormat": "jpeg",
				"hostPageDisplayUrl": "www.andrew.cmu.edu/user/cfperron/cats",
				"width": 2015,
				"height": 1511,
				"thumbnail": {
					"width": 480,
					"height": 359
				},
				"imageInsightsToken": "ccid_ONOqmqbM*mid_EDF89351A0ECA99617C859D06F71450FCB5EF2E3*simid_608032623984250213",
				"insightsSourcesSummary": {
					"shoppingSourcesCount": 1,
					"recipeSourcesCount": 0
				},
				"imageId": "EDF89351A0ECA99617C859D06F71450FCB5EF2E3",
				"accentColor": "5F4937"
			}
		],
		"queryExpansions": [
			{
				"text": "Grumpy Cat",
				"displayText": "Grumpy",
				"webSearchUrl": "https://www.bing.com/images/search?q=Grumpy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Grumpy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
				"webSearchUrlPingSuffix": "DevEx,5049.1",
				"searchLink": "https://www.bing.com/api/v5/images/search?q=Grumpy+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Grumpy%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
				"thumbnail": {
					"thumbnailUrl": "https://tse3.mm.bing.net/th?q=Grumpy+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
				}
			},
			{
				"text": "Funny Cats",
				"displayText": "Funny",
				"webSearchUrl": "https://www.bing.com/images/search?q=Funny+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Funny%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRPATC",
				"webSearchUrlPingSuffix": "DevEx,5051.1",
				"searchLink": "https://www.bing.com/api/v5/images/search?q=Funny+Cats&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Funny%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
				"thumbnail": {
					"thumbnailUrl": "https://tse2.mm.bing.net/th?q=Funny+Cats&pid=Api&mkt=en-US&adlt=moderate&t=1"
				}
			}
		],
		"nextOffsetAddCount": 0,
		"pivotSuggestions": [
			{
				"pivot": "cats",
				"suggestions": [
					{
						"text": "Felidae",
						"displayText": "Felidae",
						"webSearchUrl": "https://www.bing.com/images/search?q=Felidae&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felidae%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
						"webSearchUrlPingSuffix": "DevEx,5134.1",
						"searchLink": "https://www.bing.com/api/v5/images/search?q=Felidae&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felidae%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
						"thumbnail": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?q=Felidae&pid=Api&mkt=en-US&adlt=moderate&t=1"
						}
					},
					{
						"text": "African Wildcat",
						"displayText": "African Wildcat",
						"webSearchUrl": "https://www.bing.com/images/search?q=African+Wildcat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22African+Wildcat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=IRQBPS",
						"webSearchUrlPingSuffix": "DevEx,5136.1",
						"searchLink": "https://www.bing.com/api/v5/images/search?q=African+Wildcat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22African+Wildcat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
						"thumbnail": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?q=African+Wildcat&pid=Api&mkt=en-US&adlt=moderate&t=1"
						}
					}
				]
			}
		],
		"displayShoppingSourcesBadges": false,
		"displayRecipeSourcesBadges": true
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Bing Image Search - Trending

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/56b44b8ccf5ff81038d15ce0)

##### Description

Get currently trending images.

##### Parameters



#### Example


			const bingImageSearch = new cognitiveServices.bingImageSearch({API_KEY: yourApiKey})
			

			bingImageSearch.trending({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "TrendingImages",
		"instrumentation": {
			"pingUrlBase": "https://www.bingapis.com/api/ping?IG=1815AC12747F4293BC4A7CC3F94A3E13&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bingapis.com/api/ping/pageload"
		},
		"categories": [
			{
				"title": "Popular people searches",
				"tiles": [
					{
						"query": {
							"text": "Eva Longoria",
							"displayText": "Eva Longoria",
							"webSearchUrl": "https://www.bing.com/images/search?q=Eva+Longoria&FORM=ISTRTH&id=5065F5D00666B6E92AD1EA2CD81237476514131E&cat=Popular%20people%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5000.1"
						},
						"image": {
							"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.M932a5af1c78df54abd79eb9cac4be7a5H1&pid=Api",
							"contentUrl": "http://www.thesportsbank.net/core/wp-content/uploads/2015/01/Eva-longoria.jpg",
							"thumbnail": {
								"width": 480,
								"height": 300
							},
							"imageId": "5065F5D00666B6E92AD1EA2CD81237476514131E"
						}
					},
					{
						"query": {
							"text": "Dakota Johnson",
							"displayText": "Dakota Johnson",
							"webSearchUrl": "https://www.bing.com/images/search?q=Dakota+Johnson&FORM=ISTRTH&id=E4FF6778EC4284B3E14017B34D2D3370019DCE43&cat=Popular%20people%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5001.1"
						},
						"image": {
							"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.M1fb1014a24f4516b9eda88fde3de48bco2&pid=Api",
							"contentUrl": "http://celebmafia.com/wp-content/uploads/2015/02/dakota-johnson-2015-oscars-red-carpet-in-hollywood_4.jpg",
							"thumbnail": {
								"width": 199,
								"height": 300
							},
							"imageId": "E4FF6778EC4284B3E14017B34D2D3370019DCE43"
						}
					}
				]
			},
			{
				"title": "Popular Valentine's Day searches",
				"tiles": [
					{
						"query": {
							"text": "Valentine's Day clip art",
							"displayText": "Valentine's Day clip art",
							"webSearchUrl": "https://www.bing.com/images/search?q=Valentine%27s+Day+clip+art&FORM=ISTRTH&id=6946A80D7BEDD33AFF153851D362B6AC9C47B6BA&cat=Popular%20Valentine's%20Day%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5009.1"
						},
						"image": {
							"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.Md7d6c480a213a3be5513676974028e62H0&pid=Api",
							"contentUrl": "http://nonsensetomomsense.com/wp-content/uploads/2013/02/valentines_day_clip_art_free_8.jpg",
							"thumbnail": {
								"width": 350,
								"height": 350
							},
							"imageId": "6946A80D7BEDD33AFF153851D362B6AC9C47B6BA"
						}
					},
					{
						"query": {
							"text": "Valentine's Day wallpaper",
							"displayText": "Valentine's Day wallpaper",
							"webSearchUrl": "https://www.bing.com/images/search?q=Valentine%27s+Day+wallpaper&FORM=ISTRTH&id=5CAD251A6FE2737B69321E30754EA54011703B0E&cat=Popular%20Valentine's%20Day%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5010.1"
						},
						"image": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M2faa3c908be02d6e68af0d8aa01f2da5H0&pid=Api",
							"contentUrl": "http://www.turnbacktogod.com/wp-content/uploads/2011/02/Happy-Valentines-Day-Wallpaper-09.jpg",
							"thumbnail": {
								"width": 480,
								"height": 300
							},
							"imageId": "5CAD251A6FE2737B69321E30754EA54011703B0E"
						}
					}
				]
			},
			{
				"title": "Popular Valentine's Day gift searches",
				"tiles": [
					{
						"query": {
							"text": "Chocolate truffles",
							"displayText": "Chocolate truffles",
							"webSearchUrl": "https://www.bing.com/images/search?q=Chocolate+truffles&FORM=ISTRTH&id=CDAEE4B26D53B9B4E59AC32D3FB98C0C96D7E745&cat=Popular%20Valentine's%20Day%20gift%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5018.1"
						},
						"image": {
							"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M3f64e93bcb033e3de35de0d5a88973bcH0&pid=Api",
							"contentUrl": "http://2.bp.blogspot.com/_VOgQl2P9kDs/SwXayDn-f0I/AAAAAAAAAlY/i7cJoTKwt94/s1600/Pic+5.jpg",
							"thumbnail": {
								"width": 480,
								"height": 320
							},
							"imageId": "CDAEE4B26D53B9B4E59AC32D3FB98C0C96D7E745"
						}
					},
					{
						"query": {
							"text": "Jewelry",
							"displayText": "Jewelry",
							"webSearchUrl": "https://www.bing.com/images/search?q=Jewelry&FORM=ISTRTH&id=C505AA98DA717EA4FD3F2830F5704E8D1CE2CDC9&cat=Popular%20Valentine's%20Day%20gift%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5019.1"
						},
						"image": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.Ma1b68f00b80bebb01f1c0b68b75d9a35o0&pid=Api",
							"contentUrl": "http://i00.i.aliimg.com/wsphoto/v2/1112415692_1/GVBORI-18K-Gold-0-5ct-Natural-Ruby-Gemstone-Ring-For-Women-Wedding-Jewelry-Diamond-Ring-Fine.jpg",
							"thumbnail": {
								"width": 300,
								"height": 300
							},
							"imageId": "C505AA98DA717EA4FD3F2830F5704E8D1CE2CDC9"
						}
					}
				]
			},
			{
				"title": "Popular animal searches",
				"tiles": [
					{
						"query": {
							"text": "Swimming penguins",
							"displayText": "Swimming penguins",
							"webSearchUrl": "https://www.bing.com/images/search?q=Swimming+penguins&FORM=ISTRTH&id=1BA871AE1EB3EF9163AC847F8EDAA54F35905B5D&cat=Popular%20animal%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5027.1"
						},
						"image": {
							"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M464ace9c4e95c3c22511a9a836b64f2cH0&pid=Api",
							"contentUrl": "http://www.playle.com/KDL/47648.jpg",
							"thumbnail": {
								"width": 480,
								"height": 351
							},
							"imageId": "1BA871AE1EB3EF9163AC847F8EDAA54F35905B5D"
						}
					},
					{
						"query": {
							"text": "Nudibranch",
							"displayText": "Nudibranch",
							"webSearchUrl": "https://www.bing.com/images/search?q=Nudibranch&FORM=ISTRTH&id=172031E74E62BEC7045190AB59128F7110360B6C&cat=Popular%20animal%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5028.1"
						},
						"image": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M40cca3099135b1b543a036dff9147f16o0&pid=Api",
							"contentUrl": "http://www.scubadiving.com/sites/scubadiving.com/files/styles/medium_1x_/public/import/2014/files/_images/201406/nudi-7-9x6.jpg?itok=q8gaBl6R",
							"thumbnail": {
								"width": 300,
								"height": 200
							},
							"imageId": "172031E74E62BEC7045190AB59128F7110360B6C"
						}
					}
				]
			},
			{
				"title": "Popular nature searches",
				"tiles": [
					{
						"query": {
							"text": "Horseshoe Bend",
							"displayText": "Horseshoe Bend",
							"webSearchUrl": "https://www.bing.com/images/search?q=Horseshoe+Bend&FORM=ISTRTH&id=C45A297C95C0E7D695151B0FEFEC91792DD4A44E&cat=Popular%20nature%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5036.1"
						},
						"image": {
							"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M5904df0397700e84dd1a52b2c101e397H0&pid=Api",
							"contentUrl": "http://www.paulreiffer.com/wp-content/uploads/2012/11/REIF_20120726_09310_HorseShoe_Bend_1500.jpg",
							"thumbnail": {
								"width": 480,
								"height": 320
							},
							"imageId": "C45A297C95C0E7D695151B0FEFEC91792DD4A44E"
						}
					},
					{
						"query": {
							"text": "Iridescent pileus cloud",
							"displayText": "Iridescent pileus cloud",
							"webSearchUrl": "https://www.bing.com/images/search?q=Iridescent+pileus+cloud&FORM=ISTRTH&id=FEE9F118C4B7F703A6DFA94B494E7D0621F06D79&cat=Popular%20nature%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5037.1"
						},
						"image": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.Mfb317ee59239f9595e1959d730e49d0do0&pid=Api",
							"contentUrl": "http://media-cache-ec0.pinimg.com/736x/21/92/85/219285ca1e9742a025ecf28c73e28578.jpg",
							"thumbnail": {
								"width": 300,
								"height": 219
							},
							"imageId": "FEE9F118C4B7F703A6DFA94B494E7D0621F06D79"
						}
					}
				]
			},
			{
				"title": "Popular wallpaper searches",
				"tiles": [
					{
						"query": {
							"text": "3D wallpaper",
							"displayText": "3D wallpaper",
							"webSearchUrl": "https://www.bing.com/images/search?q=3D+wallpaper&FORM=ISTRTH&id=AA5BC14810837A99EC7991D3FB6A2D68665D7C00&cat=Popular%20wallpaper%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5045.1"
						},
						"image": {
							"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.Mf65e35b814a21ccd4053e6e8ca494480H0&pid=Api",
							"contentUrl": "http://2.bp.blogspot.com/-hBQ9qcegKOc/UOBblytxYFI/AAAAAAAAQTE/N24pLpMkRFU/s1600/Shining+3D+Wallpapers.jpg",
							"thumbnail": {
								"width": 480,
								"height": 300
							},
							"imageId": "AA5BC14810837A99EC7991D3FB6A2D68665D7C00"
						}
					},
					{
						"query": {
							"text": "Supermodel wallpaper",
							"displayText": "Supermodel wallpaper",
							"webSearchUrl": "https://www.bing.com/images/search?q=Supermodel+wallpaper&FORM=ISTRTH&id=4A8130D2A0CCC877006563185007192ABA0E87CF&cat=Popular%20wallpaper%20searches&lpversion=",
							"webSearchUrlPingSuffix": "DevEx,5046.1"
						},
						"image": {
							"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.Mbfcf3a0c40729b08586875317e1566bfo2&pid=Api",
							"contentUrl": "http://www.mrwallpaper.com/wallpapers/barbara-palvin-supermodel.jpg",
							"thumbnail": {
								"width": 300,
								"height": 187
							},
							"imageId": "4A8130D2A0CCC877006563185007192ABA0E87CF"
						}
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const bingNewsSearch = new cognitiveServices.bingNewsSearch({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			bingNewsSearch.categoryNews({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const bingNewsSearch = new cognitiveServices.bingNewsSearch({API_KEY: yourApiKey})
			
		const parameters = {
			q: "microsoft"
			count: "10"
			offset: "0"
			mkt: "en-us"
			safeSearch: "Moderate"
		};

			bingNewsSearch.search({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "News",
		"instrumentation": {
			"pingUrlBase": "https://www.bingapis.com/api/ping?IG=8EAC3740311E4593BF35765B236F47AC&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bingapis.com/api/ping/pageload"
		},
		"readLink": "https://www.bing.com/api/v5/news/search?q=microsoft",
		"totalEstimatedMatches": 1170000,
		"value": [
			{
				"name": "Samsung Galaxy TabPro S First impressions: A serious competitor to Microsoft’s Surface lineup",
				"url": "http://tech.firstpost.com/news-analysis/samsung-galaxy-tabpro-s-first-impressions-a-serious-competitor-to-microsofts-surface-lineup-297978.html/",
				"urlPingSuffix": "DevEx,5020.1",
				"image": {
					"thumbnail": {
						"contentUrl": "https://www.bing.com/th?id=ON.25CDFDFD52AF92BA58B567A1EEFDDC45&pid=News",
						"width": 700,
						"height": 393
					}
				},
				"description": "We’ve seen a few tablets running Windows 10 announced in the past, but this one is sure to draw all the attention. Firstly, it is Samsung and Microsoft, rivals otherwise, coming together to show the best of both sides. A good looking hybrid with ",
				"about": [
					{
						"readLink": "https://www.bing.com/api/v5/entities/cfb4265c-a085-f5ab-f132-74c3ca86d376",
						"name": "Samsung Galaxy"
					},
					{
						"readLink": "https://www.bing.com/api/v5/entities/a093e9b9-90f5-a3d5-c4b8-5855e1b01f85",
						"name": "Microsoft"
					},
					{
						"readLink": "https://www.bing.com/api/v5/entities/46f1ab09-6fd7-5f05-6e27-3a1aeb6cae45",
						"name": "Impression"
					}
				],
				"provider": [
					{
						"_type": "Organization",
						"name": "Tech2"
					}
				],
				"datePublished": "2016-02-05T07:01:00",
				"category": "ScienceAndTechnology"
			},
			{
				"name": "Microsoft Releases Windows 10 Mobile Build 10586.71 to All Testers",
				"url": "http://news.softpedia.com/news/microsoft-releases-windows-10-mobile-build-10586-71-to-all-testers-499959.shtml",
				"urlPingSuffix": "DevEx,5022.1",
				"image": {
					"thumbnail": {
						"contentUrl": "https://www.bing.com/th?id=ON.5AD6B7BC824F5A8E6F6ED5B7DA1C906E&pid=News",
						"width": 700,
						"height": 452
					}
				},
				"description": "The Windows 10 Mobile development process seems to advance pretty nicely, with Microsoft deciding to roll out the most recent build to members of the slow ring too. Basically, builds are pushed to the slow ring only when the Windows development team ",
				"about": [
					{
						"readLink": "https://www.bing.com/api/v5/entities/16aeb6d9-9098-0a40-4970-8e46a4fcee12",
						"name": "Microsoft Windows"
					},
					{
						"readLink": "https://www.bing.com/api/v5/entities/a093e9b9-90f5-a3d5-c4b8-5855e1b01f85",
						"name": "Microsoft"
					},
					{
						"readLink": "https://www.bing.com/api/v5/entities/fd31547a-9016-4940-b644-78988670c18a",
						"name": "Build"
					}
				],
				"provider": [
					{
						"_type": "Organization",
						"name": "Softpedia News"
					}
				],
				"datePublished": "2016-02-05T05:35:00",
				"category": "ScienceAndTechnology"
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Bing News Search - Trending Topics

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f72cf5ff8098cef380a/operations/56c7a9a6cf5ff801a090fbdc)

##### Description

Get trending topics identified by Bing.  These are the same topics shown in the banner at the bottom of the Bing home page.

##### Parameters



#### Example


			const bingNewsSearch = new cognitiveServices.bingNewsSearch({API_KEY: yourApiKey})
			

			bingNewsSearch.trendingTopics({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "TrendingTopics",
		"instrumentation": {
			"pingUrlBase": "https://www.bing.com/api/ping?IG=DC9F5A1F6D134AC2B5CFD60E722661DB&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bing.com/api/ping/pageload?IG=DC9F5A1F6D134AC2B5CFD60E722661DB&CID=070910FF0C0362112C11188E0DD06323&Type=Event.CPT&DATA=0"
		},
		"value": [
			{
				"name": "DOJ: Motion to compel",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_oaqMhpCc4cTE7I7f&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© REUTERS/Stephen Lam"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=US+Justice+Department+Apple&filters=tnTID%3a%220C71A232-0D94-484f-986E-BE185141D09E%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5003.1",
				"isBreakingNews": false
			},
			{
				"name": "Once had an ocean?",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_qNPOi6HiyfKDutS6&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© NASA/JHUAPL/SWRI via Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Pluto+moon+ocean&filters=tnTID%3a%221E35703A-317D-4bd4-AC44-3781CECDCF65%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5004.1",
				"isBreakingNews": false
			},
			{
				"name": "Elevator art project",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_y9bRgo-HsLaUus-B&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Walter McBride/FilmMagic"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Shia+LaBeouf+elevator&filters=tnTID%3a%22872B3D41-271F-429f-88FE-AB3664E09899%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5005.1",
				"isBreakingNews": false
			},
			{
				"name": "NTSB probing crash",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_9tnTuszx1evwmr_g&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Shawn Winrich via the AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Pearl+Harbor+helicopter+crash&filters=tnTID%3a%22BCC5197A-6300-4535-AFDE-01693EAE38FD%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5006.1",
				"isBreakingNews": false
			},
			{
				"name": "43 years in solitary",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_y9bRgo-cvpuVstSf&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Bryn Stole/Reuters"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Albert+Woofox&filters=tnTID%3a%22B378564A-67CA-48c5-89DA-360A8DA3BD58%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5007.1",
				"isBreakingNews": false
			},
			{
				"name": "Parents not happy",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_gNDIi-jwiuz17P2D&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Provided by Good Housekeeping"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Lombardy+Elementary+%27Hurt+Feelings+Report%27&filters=tnTID%3a%2258664006-80D3-470a-BF74-87FA54BEA70B%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5008.1",
				"isBreakingNews": false
			},
			{
				"name": "Garbage departs ISS",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_1rrTguDX-_v20ebS&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Rex Shutterstock"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Cygnus+cargo+ship&filters=tnTID%3a%22DB2ABE22-2C1E-436e-B5CD-49567BA6B0BB%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5009.1",
				"isBreakingNews": false
			},
			{
				"name": "Declared unsafe",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_hM7FlqHpzuWUp9-D&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© FREDERIC J. BROWN/AFP/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Government+hoverboards+declared+unsafe&filters=tnTID%3a%2235952BB3-26AD-4641-8049-F27D84ED66A5%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5010.1",
				"isBreakingNews": false
			},
			{
				"name": "On replacing Scalia",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_y9bRgo-EkpuesNOS&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Harry Cabluck/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Sandra+Day+O%27Connor&filters=tnTID%3a%22DA2D9D91-90E0-454d-BA85-5D8385DFBCC3%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5011.1",
				"isBreakingNews": false
			},
			{
				"name": "China accuses US",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_lduh5Y-IuZ2esJOP&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© US Navy via Reuters"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=China+US+South+China+Sea&filters=tnTID%3a%22D83AC201-B788-4d69-91E1-B4C98120A51F%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5012.1",
				"isBreakingNews": false
			},
			{
				"name": "Shakeup at SeaWorld",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_gZLLleiYtJWnsMyN&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Mike Blake/Reuters"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=SeaWorld+executives&filters=tnTID%3a%226C0837A5-3C9A-451d-B209-37356A4DCE60%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5013.1",
				"isBreakingNews": false
			},
			{
				"name": "Hearing in lawsuit",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_lduh5Y-AtIeYvpCK&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Charles Sykes/Invision/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Kesha&filters=tnTID%3a%22D604E0E4-8B1F-496b-8FCB-CF7118B60A9B%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5014.1",
				"isBreakingNews": false
			},
			{
				"name": "Bronze Age wheel",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_pNvEy-X5xJueq9i5&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Joe Giddens/Press Association"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Bronze+Age+wheel&filters=tnTID%3a%22AA6BA3FB-F164-44d8-A9CC-D3C64AF8D555%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5015.1",
				"isBreakingNews": false
			},
			{
				"name": "To play Mary Poppins?",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_lduh5Y-JvYGeq5CK&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Dimitrios Kambouris/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Emily+Blunt&filters=tnTID%3a%2287EC70BA-941D-4619-8332-84FE6DF57D63%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5016.1",
				"isBreakingNews": false
			},
			{
				"name": "Marriage license bill",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_jN3GgKHq-My9v86S&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Timothy D. Easley/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Kentucky+2+marriage+licenses&filters=tnTID%3a%22FA066983-B845-4228-A5BC-97A0312E1490%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2220%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5017.1",
				"isBreakingNews": false
			},
			{
				"name": "'Flak' for voting GOP",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_j8zG5Y-BtJqeu8zL&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Danny Moloshok/Reuters"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Caitlyn+Jenner+Republican&filters=tnTID%3a%221B729C41-F1A8-4beb-8A38-204D595E3993%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2221%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5018.1",
				"isBreakingNews": false
			},
			{
				"name": "Russian asteroid plan",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_qNXSlub1wfSt3a_c&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Ivan Sekretarev/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Russia+destroy+asteroids&filters=tnTID%3a%221ACDD1B7-6E1B-453d-98D0-9B6DA4C70764%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2222%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5019.1",
				"isBreakingNews": false
			},
			{
				"name": "$500M for 2 paintings?",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_uv3TkaHm0_qWt9SI&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Bloomberg"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Kenneth+Griffin+paintings&filters=tnTID%3a%2265BC1089-F484-4982-83FA-570822CAB6AB%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2223%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5020.1",
				"isBreakingNews": false
			},
			{
				"name": "'Flies' through water",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_9ITpgOPu2_D-1_3i&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Alexander Semenov/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Limacina+helicina+flies+study&filters=tnTID%3a%2205B5381B-033A-480d-885C-4ACC58CD7DFC%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2224%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5021.1",
				"isBreakingNews": false
			},
			{
				"name": "Pay hike for execs",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_gc-Pj__hsrCeudqI&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Justin Sullivan/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=McDonald%e2%80%99s+execs+raises&filters=tnTID%3a%229755A3BA-CA46-4d0f-9B1E-09C5D36F630F%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2226%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5022.1",
				"isBreakingNews": false
			},
			{
				"name": "Saves grandmother",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_lt_UgKHnyOGUiuiB&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© WWL-TV Screenshot"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=5-year-old+saves+grandmother&filters=tnTID%3a%22AAD9DF17-52D2-4efe-8D4C-03D007D31D1A%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2227%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5023.1",
				"isBreakingNews": false
			},
			{
				"name": "Emotional eulogy",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_5c2N-pr70e751rn7&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© David Zalubowski/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Monty+Williams&filters=tnTID%3a%2271D5FC0B-1C08-4e62-9929-5B697B234E5D%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2228%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5024.1",
				"isBreakingNews": false
			},
			{
				"name": "Steeler hangs 'em up",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_j8zG5Y-GuJidscnI&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Nick Cammett/Diamond Images/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Heath+Miller&filters=tnTID%3a%2232D35058-528F-43ec-91F7-2BD194C8B787%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2230%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5025.1",
				"isBreakingNews": false
			},
			{
				"name": "Thieves' bad luck",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_t9PDh-r6yrvpy6q6&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=81-year-old+chases+robbers&filters=tnTID%3a%223AE1B2A9-E903-4434-A785-7ADA0223BB02%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2231%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5026.1",
				"isBreakingNews": false
			},
			{
				"name": "Signs of US inflation",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_hMjIiuGw6Nvfu9yL&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Joe Raedle/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=US+consumer+inflation&filters=tnTID%3a%2274ECCD08-BC41-4c95-9DBB-4B4F7CCEC419%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2232%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5027.1",
				"isBreakingNews": false
			},
			{
				"name": "Gray trials halted",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_jN3Ny-X8xJWJjumX&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Patrick Semansky/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Freddie+Gray&filters=tnTID%3a%224E13DEC3-1251-404d-975B-C5695D538517%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2233%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5028.1",
				"isBreakingNews": false
			},
			{
				"name": "Humbles chess hustler",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_j8zG5Y-KopydssPO&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Brian Cahn/ZUMA Press/Corbis"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Maurice+Ashley&filters=tnTID%3a%228BFADD82-93F1-43b2-87C9-416859221A4A%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2236%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5029.1",
				"isBreakingNews": false
			},
			{
				"name": "Republican town hall",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_iZLLleifvoOel9-L&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Randall Hill/Reuters"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=GOP+town+hall&filters=tnTID%3a%22C8180E68-61C4-4dc0-A7C9-E87D8C2BBD70%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2238%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5030.1",
				"isBreakingNews": false
			},
			{
				"name": "Hubble's successor",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_idnShuD19Yna-omA&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© NASA via Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=NASA+WFIRST&filters=tnTID%3a%2222BEA723-84D4-4709-8D3F-C721CAB43B57%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2243%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5031.1",
				"isBreakingNews": false
			},
			{
				"name": "South Carolina poll",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_gryh5Y-Io4GK8NSV&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Joshua Roberts/Reuters"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Trump+Cruz+South+Carolina+poll&filters=tnTID%3a%22EC5C67D8-93DE-4a88-9CF5-3F8D622882C9%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2246%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5032.1",
				"isBreakingNews": false
			},
			{
				"name": "'Affluenza' hearing",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_lduh5Y-IvoGTuZOO&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Mexico's Jalisco state prosecutor's office via AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Ethan+Couch&filters=tnTID%3a%22C0E6328A-59DA-4925-88DE-DF51D41EAC63%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2247%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5033.1",
				"isBreakingNews": false
			},
			{
				"name": "SpaceShipTwo unveiled",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_ot3NhOzp0eW41KTZ&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Mark Greenberg/Virgin Galactic/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Virgin+Galactic+spaceship&filters=tnTID%3a%22141AC0F1-D953-4e59-B1C5-31EA43C30EBE%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2248%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5034.1",
				"isBreakingNews": false
			},
			{
				"name": "Democratic town hall",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_i_TAieOh3unIi9GX&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© John Gurzinski/AFP/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Democratic+town+hall&filters=tnTID%3a%225F7DD5E2-7C3E-4eae-B4DC-BB9414356F2A%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2249%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5035.1",
				"isBreakingNews": false
			},
			{
				"name": "Illini player arrested",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_hN_Ky-X304aeu_iM&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Duane Burleson/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Leron+Black&filters=tnTID%3a%2220D9523B-3462-405e-9C8D-390010582B79%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2250%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5036.1",
				"isBreakingNews": false
			},
			{
				"name": "On This Day: 1945",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_n6v3hOiziaDOvLLs&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "Bing"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=On+this+day+in+history&filters=tnTID%3a%2222AF7874-C16D-4f9b-AF9D-2DF9C982F0D5%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2251%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5037.1",
				"isBreakingNews": false
			},
			{
				"name": "Spring break in Fla.?",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_jZLLleiDsIaTtc6B&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Gregory Shamus/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=NCAA+Michigan+spring+break&filters=tnTID%3a%22EE1F90E0-A643-4fc8-87E1-5C26DB60FA1C%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2255%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5038.1",
				"isBreakingNews": false
			},
			{
				"name": "Scalia memorial",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_j8zG5Y-YspWcuNzK&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Pablo Martinez Monsivais/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Antonin+Scalia&filters=tnTID%3a%22AAEC3CA9-C48F-4e0b-A41C-677FB0B24291%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2256%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5039.1",
				"isBreakingNews": false
			},
			{
				"name": "Harper Lee dies at 89",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_gryh5Y-DnZGV8dSW&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Rob Carr/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Harper+Lee&filters=tnTID%3a%22D768A588-D40A-462b-BAC7-4CE32CE34447%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2258%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5040.1",
				"isBreakingNews": false
			},
			{
				"name": "Strikes target ISIS",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_xuCi_o3058bG4K3x&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© US Air Force via Reuters"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=US+airstrikes+ISIS+Libya&filters=tnTID%3a%225071E17B-EA1C-40c3-A809-4806CDF4EF7B%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2259%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5041.1",
				"isBreakingNews": false
			},
			{
				"name": "Lions escape in Kenya",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_lduh5Y-HuJuerJCL&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Simon Maina/AFP/Getty Images"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Escaped+lions+Kenya&filters=tnTID%3a%22E2AC2C25-4530-4843-AC6B-C687A1541DFF%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2261%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5042.1",
				"isBreakingNews": false
			},
			{
				"name": "Test your smarts",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_yL76uobLtrWp3daF&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Bing"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Bing+news+quiz&filters=tnTID%3a%227A71233F-08EF-4ce5-8472-7A9BF8A29E06%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2262%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5043.1",
				"isBreakingNews": false
			},
			{
				"name": "Remains a Rocket",
				"image": {
					"url": "https://www.bing.com/th?id=OS.RTNews_j8zG5Y-DvoORrNjO&c=7&rs=2&qlt=80&pcl=f9f9f9&pid=News",
					"provider": [
						{
							"_type": "Organization",
							"name": "© Rick Scuteri/AP"
						}
					]
				},
				"webSearchUrl": "https://www.bing.com/search?q=Dwight+Howard&filters=tnTID%3a%22C58232A4-28C2-44a3-AA53-15F555EDA206%22+tnVersion%3a%221298376%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2263%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221f9bbfc8-8f92-47cb-b483-b22b329158ca%22",
				"webSearchUrlPingSuffix": "DevEx,5044.1",
				"isBreakingNews": false
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



### Bing Spell Check

#### Bing Spell Check - Spell Check

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56e73033cf5ff80c2008c679/operations/56e73036cf5ff81048ee6727)

##### Description



##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
mode | Mode of spellcheck:<ul><li>Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.</li><li>Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.</li></ul> | no | string | 


#### Example


			const bingSpellCheck = new cognitiveServices.bingSpellCheck({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			bingSpellCheck.spellCheck({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "SpellCheck",
		"flaggedTokens": [
			{
				"offset": 5,
				"token": "Gatas",
				"type": "UnknownToken",
				"suggestions": [
					{
						"suggestion": "Gates",
						"score": 1
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const bingVideoSearch = new cognitiveServices.bingVideoSearch({API_KEY: yourApiKey})
			
		const parameters = {
			q: "cats"
			count: "10"
			offset: "0"
			mkt: "en-us"
			safeSearch: "Moderate"
		};

			bingVideoSearch.search({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "Videos",
		"instrumentation": {
			"pingUrlBase": "https://www.bingapis.com/api/ping?IG=D0BBFF4C521545FA8B777E0A292DF1E4&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bingapis.com/api/ping/pageload"
		},
		"readLink": "https://www.bing.com/api/v5/videos/search?q=cats",
		"webSearchUrl": "https://www.bing.com/videos/search?q=cats",
		"webSearchUrlPingSuffix": "DevEx,5039.1",
		"totalEstimatedMatches": 1000,
		"value": [
			{
				"name": "Cats Compilation",
				"description": "Do yourself a favor and just watch it, okay? You won't be disappointed. Like Us on FACEBOOK http://www.facebook.com/Compilariz Follow Us on TWITTER https://twitter ",
				"webSearchUrl": "https://www.bing.com/videos/search?q=cats#view=detail&mid=1D6A38FAD52B765552FD1D6A38FAD52B765552FD",
				"webSearchUrlPingSuffix": "DevEx,5040.1",
				"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OVP.V769031160af314bf5ed81fd391a35948&pid=Api",
				"datePublished": "2013-03-05T21:07:17",
				"publisher": [
					{
						"name": "YouTube"
					}
				],
				"creator": {
					"name": "CompilarizTVi"
				},
				"contentUrl": "https://www.youtube.com/watch?v=xEhaVhta7sI",
				"hostPageUrl": "https://www.youtube.com/watch?v=xEhaVhta7sI",
				"hostPageUrlPingSuffix": "DevEx,5010.1",
				"encodingFormat": "h264",
				"hostPageDisplayUrl": "https://www.youtube.com/watch?v=xEhaVhta7sI",
				"width": 480,
				"height": 360,
				"duration": "PT5M5S",
				"motionThumbnailUrl": "https://tse4.mm.bing.net/th?id=OM.%2fVJVdivV%2bjhqHQ&pid=Api",
				"embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/xEhaVhta7sI?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
				"allowHttpsEmbed": true,
				"viewCount": 17012237,
				"thumbnail": {
					"width": 300,
					"height": 168
				},
				"videoId": "1D6A38FAD52B765552FD1D6A38FAD52B765552FD"
			},
			{
				"name": "Just A Bunch Of Scaredy Cats!",
				"description": "Curiosity definitely scares the cat! Check out these hilarious cats getting startled by all sorts of things including fake spiders, kitchen timers, and even their own ",
				"webSearchUrl": "https://www.bing.com/videos/search?q=cats#view=detail&mid=CA132277F780C44289CCCA132277F780C44289CC",
				"webSearchUrlPingSuffix": "DevEx,5041.1",
				"thumbnailUrl": "https://tse3.mm.bing.net/th?id=WN.MBwiImkclX59vDoQCaRo4w&pid=Api",
				"datePublished": "2015-06-24T00:08:05",
				"publisher": [
					{
						"name": "YouTube"
					}
				],
				"creator": {
					"name": "America's Funniest Home Videos"
				},
				"contentUrl": "https://www.youtube.com/watch?v=Xgm-iOW-uBY",
				"hostPageUrl": "https://www.youtube.com/watch?v=Xgm-iOW-uBY",
				"hostPageUrlPingSuffix": "DevEx,5019.1",
				"encodingFormat": "h264",
				"hostPageDisplayUrl": "https://www.youtube.com/watch?v=Xgm-iOW-uBY",
				"width": 1280,
				"height": 720,
				"duration": "PT1M32S",
				"motionThumbnailUrl": "https://tse1.mm.bing.net/th?id=OM.zIlCxID3dyITyg&pid=Api",
				"embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/Xgm-iOW-uBY?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
				"allowHttpsEmbed": true,
				"viewCount": 1513335,
				"thumbnail": {
					"width": 300,
					"height": 168
				},
				"videoId": "CA132277F780C44289CCCA132277F780C44289CC"
			},
			{
				"name": "Funny cats annoying owners - Cute cat compilation",
				"description": "Cats are funny and cute but sometimes they can be a real pain in the neck :P Soo annoying and destructive! They break lamps, glasses, scratch furniture, they",
				"webSearchUrl": "https://www.bing.com/videos/search?q=cats#view=detail&mid=2CEF7088658217B1B6702CEF7088658217B1B670",
				"webSearchUrlPingSuffix": "DevEx,5042.1",
				"thumbnailUrl": "https://tse4.mm.bing.net/th?id=WN.mp8NdJSJymZtnLHuOSEiDQ&pid=Api",
				"datePublished": "2014-11-07T21:55:27",
				"publisher": [
					{
						"name": "YouTube"
					}
				],
				"creator": {
					"name": "Tiger Productions"
				},
				"contentUrl": "https://www.youtube.com/watch?v=OnqnCoPLdyw",
				"hostPageUrl": "https://www.youtube.com/watch?v=OnqnCoPLdyw",
				"hostPageUrlPingSuffix": "DevEx,5028.1",
				"encodingFormat": "h264",
				"hostPageDisplayUrl": "https://www.youtube.com/watch?v=OnqnCoPLdyw",
				"width": 480,
				"height": 360,
				"duration": "PT5M58S",
				"motionThumbnailUrl": "https://tse3.mm.bing.net/th?id=OM.cLaxF4JliHDvLA&pid=Api",
				"embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/OnqnCoPLdyw?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
				"allowHttpsEmbed": true,
				"viewCount": 6475557,
				"thumbnail": {
					"width": 300,
					"height": 168
				},
				"videoId": "2CEF7088658217B1B6702CEF7088658217B1B670"
			}
		],
		"nextOffsetAddCount": 0,
		"queryExpansions": [
			{
				"text": "Cats Meowing",
				"displayText": "Meowing",
				"webSearchUrl": "https://www.bing.com/videos/search?q=Cats+Meowing&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Meowing%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRPATC",
				"webSearchUrlPingSuffix": "DevEx,5055.1",
				"searchLink": "https://www.bing.com/api/v5/videos/search?q=Cats+Meowing&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Meowing%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
				"thumbnail": {
					"thumbnailUrl": "https://tse2.mm.bing.net/th?q=Cats+Meowing&pid=Api&mkt=en-US&adlt=moderate&t=1"
				}
			},
			{
				"text": "Cat vs Dog",
				"displayText": "Vs Dog",
				"webSearchUrl": "https://www.bing.com/videos/search?q=Cat+vs+Dog&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Vs+Dog%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRPATC",
				"webSearchUrlPingSuffix": "DevEx,5057.1",
				"searchLink": "https://www.bing.com/api/v5/videos/search?q=Cat+vs+Dog&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Vs+Dog%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
				"thumbnail": {
					"thumbnailUrl": "https://tse4.mm.bing.net/th?q=Cat+vs+Dog&pid=Api&mkt=en-US&adlt=moderate&t=1"
				}
			},
			{
				"text": "Funny Cat",
				"displayText": "Funny",
				"webSearchUrl": "https://www.bing.com/videos/search?q=Funny+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Funny%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRPATC",
				"webSearchUrlPingSuffix": "DevEx,5059.1",
				"searchLink": "https://www.bing.com/api/v5/videos/search?q=Funny+Cat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Funny%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
				"thumbnail": {
					"thumbnailUrl": "https://tse3.mm.bing.net/th?q=Funny+Cat&pid=Api&mkt=en-US&adlt=moderate&t=1"
				}
			}
		],
		"pivotSuggestions": [
			{
				"pivot": "cats",
				"suggestions": [
					{
						"text": "Felidae",
						"displayText": "Felidae",
						"webSearchUrl": "https://www.bing.com/videos/search?q=Felidae&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felidae%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS",
						"webSearchUrlPingSuffix": "DevEx,5140.1",
						"searchLink": "https://www.bing.com/api/v5/videos/search?q=Felidae&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22Felidae%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
						"thumbnail": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?q=Felidae&pid=Api&mkt=en-US&adlt=moderate&t=1"
						}
					},
					{
						"text": "African Wildcat",
						"displayText": "African Wildcat",
						"webSearchUrl": "https://www.bing.com/videos/search?q=African+Wildcat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22African+Wildcat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d&FORM=VRQBPS",
						"webSearchUrlPingSuffix": "DevEx,5142.1",
						"searchLink": "https://www.bing.com/api/v5/videos/search?q=African+Wildcat&tq=%7b%22pq%22%3a%22cats%22%2c%22qs%22%3a%5b%7b%22cv%22%3a%22cats%22%2c%22pv%22%3a%22cats%22%2c%22hps%22%3atrue%2c%22iqp%22%3afalse%7d%2c%7b%22cv%22%3a%22African+Wildcat%22%2c%22pv%22%3a%22%22%2c%22hps%22%3afalse%2c%22iqp%22%3atrue%7d%5d%7d",
						"thumbnail": {
							"thumbnailUrl": "https://tse3.mm.bing.net/th?q=African+Wildcat&pid=Api&mkt=en-US&adlt=moderate&t=1"
						}
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Bing Video Search - Trending

[Original Microsoft Documentation](https://dev.cognitive.microsoft.com/docs/services/56b43f3ccf5ff8098cef3809/operations/56b44c36cf5ff81038d15ce1)

##### Description

Get currently trending videos.

##### Parameters



#### Example


			const bingVideoSearch = new cognitiveServices.bingVideoSearch({API_KEY: yourApiKey})
			

			bingVideoSearch.trending({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "TrendingVideos",
		"instrumentation": {
			"pingUrlBase": "https://www.bingapis.com/api/ping?IG=9AA1B29CDDE742C18DB8A9B443C1DB56&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bingapis.com/api/ping/pageload"
		},
		"bannerTiles": [
			{
				"query": {
					"text": "Country Nation - Brad Paisley",
					"displayText": "Country Nation - Brad Paisley",
					"webSearchUrl": "https://www.bing.com/videos/search?q=Country%20Nation%20-%20Brad%20Paisley&FORM=VSTREQ",
					"webSearchUrlPingSuffix": "DevEx,7424.1"
				},
				"image": {
					"description": "Image from: nashvillekat.com",
					"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M9c482cb00d98074e074d6b6f802406d0o1&pid=Api",
					"headLine": "\"Country Nation\" is a song recorded by American country music artist Brad Paisley. It was released on September 14, 2015 by Arista Nashville as the fourth single from his tenth studio album, Moonshine in the Trunk.",
					"contentUrl": "http://2.bp.blogspot.com/-UZiUlrQCYPw/UYzdwhUNf1I/AAAAAAAAHlM/aFyY7cVNPys/s1600/brad-paisley2.jpg"
				}
			},
			{
				"query": {
					"text": "Panda Bear's Adorable Reaction To Snow",
					"displayText": "Panda Bear's Adorable Reaction To Snow",
					"webSearchUrl": "https://www.bing.com/videos/search?q=Panda%20Bear's%20Adorable%20Reaction%20To%20Snow&FORM=VSTREQ",
					"webSearchUrlPingSuffix": "DevEx,7428.1"
				},
				"image": {
					"description": "Image from: lebanontimes.com",
					"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.M810b3f6695f27a55cb0034f713346eb1H0&pid=Api",
					"headLine": "Tian Tian, one of the giant pandas at Smithsonian's National Zoo, woke up to snow and was pretty excited about it.",
					"contentUrl": "http://www.lebanontimes.com/wp-content/uploads/2012/12/2dc3c2ae825_634x399.jpg"
				}
			}
		],
		"categories": [
			{
				"title": "Music videos",
				"subcategories": [
					{
						"tiles": [
							{
								"query": {
									"text": "Hello - Adele",
									"displayText": "Hello - Adele",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Hello%20-%20Adele&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7436.1"
								},
								"image": {
									"description": "Image from: beautyfrontline.com",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.Md36fe1c5fcc52da3d146106c9850aea2o0&pid=Api",
									"contentUrl": "http://1.bp.blogspot.com/-dPdrQYg-X-M/UG97BFb3DYI/AAAAAAAAAQI/KJ9DyNOaWio/s640/ADELE-VOGUE-PHOTOSHOOT.png"
								}
							},
							{
								"query": {
									"text": "Hotline Bling - Drake",
									"displayText": "Hotline Bling - Drake",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Hotline%20Bling%20-%20Drake&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7438.1"
								},
								"image": {
									"description": "Image from: hollywoodreporter.com",
									"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M301f6741e9ae38a00dbf6d0088b631c1o2&pid=Api",
									"contentUrl": "http://cdn2.thr.com/sites/default/files/imagecache/thr_style_news_image/2015/07/drake_2015_wimbledon_h_15.jpg"
								}
							}
						],
						"title": "Top "
					},
					{
						"tiles": [
							{
								"query": {
									"text": "Same Old Love - Selena Gomez",
									"displayText": "Same Old Love - Selena Gomez",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Same%20Old%20Love%20-%20Selena%20Gomez&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7452.1"
								},
								"image": {
									"description": "Image from: vegasseven.com",
									"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.M7b94b12412e1b6e30ca155e932ab6fe2H0&pid=Api",
									"contentUrl": "http://vegasseven.com/files/2013/11/selena-gomez-singing-wallpaper-3734.jpg"
								}
							},
							{
								"query": {
									"text": "Out Of The Woods - Taylor Swift",
									"displayText": "Out Of The Woods - Taylor Swift",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Out%20Of%20The%20Woods%20-%20Taylor%20Swift&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7454.1"
								},
								"image": {
									"description": "Image from: glamorhairstyles.com",
									"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M187bd46210527fe4b4a655be7e063a8bo2&pid=Api",
									"contentUrl": "http://www.glamorhairstyles.com/wp-content/uploads/2015/05/Taylor-Swift-Hairstyles-2015-6.jpg"
								}
							}
						],
						"title": "Trending"
					},
					{
						"tiles": [
							{
								"query": {
									"text": "Love Yourself - Justin Bieber",
									"displayText": "Love Yourself - Justin Bieber",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Love%20Yourself%20-%20Justin%20Bieber&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7468.1"
								},
								"image": {
									"description": "Image from: abitofpopmusic.com",
									"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M4e5d8f27e360982c5e461db28667a7e2o2&pid=Api",
									"contentUrl": "https://abitofpopmusic.files.wordpress.com/2015/09/justin-bieber-what-do-you-mean.png"
								}
							},
							{
								"query": {
									"text": "Don't - Bryson Tiller",
									"displayText": "Don't - Bryson Tiller",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Don't%20-%20Bryson%20Tiller&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7470.1"
								},
								"image": {
									"description": "Image from: genius.com",
									"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.M8f45ddabae61d342769af2a32a8751e9o0&pid=Api",
									"contentUrl": "http://images.rapgenius.com/a0e91b5f06cdd8c7b3f1a87ad853a604.640x640x1.jpg"
								}
							}
						],
						"title": "More music videos"
					}
				]
			},
			{
				"title": "Viral videos",
				"subcategories": [
					{
						"tiles": [
							{
								"query": {
									"text": "Russia's Arctic Troops Train With Reindeer",
									"displayText": "Russia's Arctic Troops Train With Reindeer",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Russia's%20Arctic%20Troops%20Train%20With%20Reindeer&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7478.1"
								},
								"image": {
									"description": "Image from: arcticrussiatravel.com",
									"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.Mc956d012aaef6bf4ec6bba03b9b85f3co0&pid=Api",
									"contentUrl": "http://www.arcticrussiatravel.com/wp-content/uploads/2012/05/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-531.jpg"
								}
							},
							{
								"query": {
									"text": "A Woman Pulls Over A Cop For Speeding",
									"displayText": "A Woman Pulls Over A Cop For Speeding",
									"webSearchUrl": "https://www.bing.com/videos/search?q=A%20Woman%20Pulls%20Over%20A%20Cop%20For%20Speeding&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7480.1"
								},
								"image": {
									"description": "Image from: photographyisnotacrime.com",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M01c52de0bdb4d38cc600d7347cf5d6a9o0&pid=Api",
									"contentUrl": "https://photographyisnotacrime.com/wp-content/uploads/2016/01/Miami-Dade-police-officer.jpg"
								}
							}
						],
						"title": "This week"
					},
					{
						"tiles": [
							{
								"query": {
									"text": "Female Shark Devours Smaller Rival",
									"displayText": "Female Shark Devours Smaller Rival",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Female%20Shark%20Devours%20Smaller%20Rival&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7494.1"
								},
								"image": {
									"description": "Image from: newsfine.com",
									"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.M58cd04532829899818cf23954c0f527fo0&pid=Api",
									"contentUrl": "http://assets.nydailynews.com/polopoly_fs/1.1777675.1399071199!/img/httpImage/image.jpg_gen/derivatives/article_970/shark3n-1-web.jpg"
								}
							},
							{
								"query": {
									"text": "Head-On Collision Created Earth's Moon",
									"displayText": "Head-On Collision Created Earth's Moon",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Head-On%20Collision%20Created%20Earth's%20Moon&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7496.1"
								},
								"image": {
									"description": "Image from: ircamera.as.arizona.edu",
									"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.Me0f25cac8d5b540a373daf994654e5d8o0&pid=Api",
									"contentUrl": "http://ircamera.as.arizona.edu/NatSci102/NatSci102/images/moon-formation.jpg"
								}
							}
						],
						"title": "Last week"
					},
					{
						"tiles": [
							{
								"query": {
									"text": "Curiosity's Selfie Amid Martian Dunes",
									"displayText": "Curiosity's Selfie Amid Martian Dunes",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Curiosity's%20Selfie%20Amid%20Martian%20Dunes&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7510.1"
								},
								"image": {
									"description": "Image from: news.yahoo.com",
									"thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.M97908257b701132e600cab70d2b37b1ao0&pid=Api",
									"contentUrl": "http://l.yimg.com/bt/api/res/1.2/p0xCUBEYYIstY7F.y4QDag--/YXBwaWQ9eW5ld3NfbGVnbztxPTg1/http://media.zenfs.com/en-US/homerun/mashable_science_572/d0927cec2fe7574b563e244b4d813a9f"
								}
							},
							{
								"query": {
									"text": "5 Optical Illusions Melt Your Mind",
									"displayText": "5 Optical Illusions Melt Your Mind",
									"webSearchUrl": "https://www.bing.com/videos/search?q=5%20Optical%20Illusions%20Melt%20Your%20Mind&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7512.1"
								},
								"image": {
									"description": "Image from: playbuzz.com",
									"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.M31356e70bb8a0b15f891d8ee6e31855ao0&pid=Api",
									"contentUrl": "http://cdn.playbuzz.com/cdn/230f2af8-44a5-41b4-8bfa-0d361e94faef/a8434f11-71d0-4126-9044-de052824300a.gif"
								}
							}
						],
						"title": "More viral videos"
					}
				]
			},
			{
				"title": "TV shows",
				"subcategories": [
					{
						"tiles": [
							{
								"query": {
									"text": "Arrow TV",
									"displayText": "Arrow TV",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Arrow%20TV&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7520.1"
								},
								"image": {
									"description": "Image from: moviepilot.com",
									"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.M2646679bc56c242627789de67adac400o0&pid=Api",
									"contentUrl": "http://images-cdn.moviepilot.com/image/upload/c_fill,h_900,w_1600/t_mp_quality/why-arrow-is-not-a-green-arrow-tv-show-arrow-season-3-poster-jpeg-249567.jpg"
								}
							},
							{
								"query": {
									"text": "Criminal Minds",
									"displayText": "Criminal Minds",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Criminal%20Minds&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7522.1"
								},
								"image": {
									"description": "Image from: mcla.libguides.com",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.Mb487666983a4401ca0a2e6b26ba7340aH0&pid=Api",
									"contentUrl": "http://haveuheard.net/wp-content/uploads/2013/04/Criminal-Minds-3.jpg"
								}
							}
						],
						"title": "Most watched"
					},
					{
						"tiles": [
							{
								"query": {
									"text": "The Mentalist",
									"displayText": "The Mentalist",
									"webSearchUrl": "https://www.bing.com/videos/search?q=The%20Mentalist&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7536.1"
								},
								"image": {
									"description": "Image from: meilleurvpn.org",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M322d0946721d458b8e3f123eca8f7383H0&pid=Api",
									"contentUrl": "http://meilleurvpn.org/wp-content/uploads/fichiers/2013/12/the-mentalist.jpg"
								}
							},
							{
								"query": {
									"text": "Once Upon a Time",
									"displayText": "Once Upon a Time",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Once%20Upon%20a%20Time&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7538.1"
								},
								"image": {
									"description": "Image from: neverlandbitch.unblog.fr",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.Mb189f46ee41efce0f79b8a775f0c8f20H0&pid=Api",
									"contentUrl": "http://www.wallpapersfolder.com/user-content/uploads/wall/o/64/once_upon_a_time_wallpaper.jpg"
								}
							}
						],
						"title": "Trending "
					},
					{
						"tiles": [
							{
								"query": {
									"text": "Coronation Street",
									"displayText": "Coronation Street",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Coronation%20Street&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7552.1"
								},
								"image": {
									"description": "Image from: coronationstreet.wikia.com",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.Mb36d93f596f74121258279547eaccc07H0&pid=Api",
									"contentUrl": "http://images2.wikia.nocookie.net/__cb20111109230452/coronationstreet/images/a/a2/Coronation_street_title.jpg"
								}
							},
							{
								"query": {
									"text": "Black Sails",
									"displayText": "Black Sails",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Black%20Sails&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7554.1"
								},
								"image": {
									"description": "Image from: themindreels.com",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M4d5de4ec99fe931211e3af41b10fdc75H1&pid=Api",
									"contentUrl": "https://mindreels.files.wordpress.com/2015/01/black-sails.jpg"
								}
							}
						],
						"title": "More TV shows"
					}
				]
			},
			{
				"title": "Movie trailers",
				"subcategories": [
					{
						"tiles": [
							{
								"query": {
									"text": "Saala Khadoos Trailer",
									"displayText": "Saala Khadoos Trailer",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Saala%20Khadoos%20Trailer&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7568.1"
								},
								"image": {
									"description": "Image from: metromatinee.com",
									"thumbnailUrl": "https://tse2.mm.bing.net/th?id=OIP.M714957bad256b2ebdda33c3d62e45956o0&pid=Api",
									"contentUrl": "http://www.metromatinee.com/movies/images/m4983/thumb/saala-khadoos-70798.jpg"
								}
							},
							{
								"query": {
									"text": "The Finest Hours (2016) Trailer",
									"displayText": "The Finest Hours (2016) Trailer",
									"webSearchUrl": "https://www.bing.com/videos/search?q=The%20Finest%20Hours%20(2016)%20Trailer&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7570.1"
								},
								"image": {
									"description": "Image from: tribute.ca",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M2547ab2f5405a0511dcdff9c63367a55o0&pid=Api",
									"contentUrl": "http://www.tribute.ca/news/wp-content/uploads/2016/01/the-finest-hours-poster.jpg"
								}
							}
						],
						"title": "In theaters"
					},
					{
						"tiles": [
							{
								"query": {
									"text": "London Has Fallen Trailer",
									"displayText": "London Has Fallen Trailer",
									"webSearchUrl": "https://www.bing.com/videos/search?q=London%20Has%20Fallen%20Trailer&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7584.1"
								},
								"image": {
									"description": "Image from: klatsch-tratsch.de",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M4d2ce276c5c88cae522f26632eb1e14ao0&pid=Api",
									"contentUrl": "http://www.klatsch-tratsch.de/wp-content/uploads/2015/11/LONDONFALLEN_1SHTO_BIGBEN_deutsch_A4.jpg"
								}
							},
							{
								"query": {
									"text": "Triple 9 (2016) Trailer",
									"displayText": "Triple 9 (2016) Trailer",
									"webSearchUrl": "https://www.bing.com/videos/search?q=Triple%209%20(2016)%20Trailer&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7586.1"
								},
								"image": {
									"description": "Image from: movie-list.com",
									"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M3b2ac231aef49c1c24ed475c3718a456o0&pid=Api",
									"contentUrl": "http://www.movie-list.com/img/posters/big/zoom/triple9.jpg"
								}
							}
						],
						"title": "Coming soon"
					},
					{
						"tiles": [
							{
								"query": {
									"text": "How To Be Single Trailer",
									"displayText": "How To Be Single Trailer",
									"webSearchUrl": "https://www.bing.com/videos/search?q=How%20To%20Be%20Single%20Trailer&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7600.1"
								},
								"image": {
									"description": "Image from: promicabana.de",
									"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.M9ba9eff98fed1964b2b6d1fa89965da2o0&pid=Api",
									"contentUrl": "http://www.promicabana.de/wp-content/uploads/2015/11/How-to-Be-Single-Poster.jpg"
								}
							},
							{
								"query": {
									"text": "The Boy (2016) Trailer",
									"displayText": "The Boy (2016) Trailer",
									"webSearchUrl": "https://www.bing.com/videos/search?q=The%20Boy%20(2016)%20Trailer&FORM=VSTREQ",
									"webSearchUrlPingSuffix": "DevEx,7602.1"
								},
								"image": {
									"description": "Image from: traileraddict.com",
									"thumbnailUrl": "https://tse3.mm.bing.net/th?id=OIP.M1d3053c1197438e029dfdfe0870aaef7o0&pid=Api",
									"contentUrl": "http://cdn.traileraddict.com/content/stx-entertainment/the-boy-2016-2.jpg"
								}
							}
						],
						"title": "More movie trailers"
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const bingWebSearch = new cognitiveServices.bingWebSearch({API_KEY: yourApiKey})
			
		const parameters = {
			q: "bill gates"
			count: "10"
			offset: "0"
			mkt: "en-us"
			safesearch: "Moderate"
		};

			bingWebSearch.search({parameters})
				.then((response) => {
						/**
							Example response: {
		"_type": "SearchResponse",
		"instrumentation": {
			"pingUrlBase": "https://www.bingapis.com/api/ping?IG=E86668D804C149438DFC0972CE52C9E3&CID=070910FF0C0362112C11188E0DD06323&ID=",
			"pageLoadPingUrl": "https://www.bingapis.com/api/ping/pageload"
		},
		"webPages": {
			"webSearchUrl": "https://www.bing.com/search?q=bill+gates",
			"webSearchUrlPingSuffix": "DevEx,5425.1",
			"totalEstimatedMatches": 14100000,
			"value": [
				{
					"id": "https://www.bing.com/api/v5/#WebPages.0",
					"name": "Bill & Melinda Gates Foundation - Official Site",
					"url": "http://www.gatesfoundation.org/",
					"urlPingSuffix": "DevEx,5081.1",
					"about": [
						{
							"name": "Bill & Melinda Gates Foundation"
						},
						{
							"name": "Bill Gates"
						}
					],
					"displayUrl": "www.gatesfoundation.org",
					"snippet": "The Gates Foundation’s effort to eradicate polio offers the chance to protect millions of children from paralysis forever.",
					"deepLinks": [
						{
							"name": "Jobs",
							"url": "http://www.gatesfoundation.org/jobs",
							"urlPingSuffix": "DevEx,5071.1"
						},
						{
							"name": "What We Do",
							"url": "http://www.gatesfoundation.org/what-we-do",
							"urlPingSuffix": "DevEx,5072.1"
						},
						{
							"name": "Apply for a Grant",
							"url": "http://www.gatesfoundation.org/how-we-work/resources/our-commitment-to-grantees",
							"urlPingSuffix": "DevEx,5073.1"
						},
						{
							"name": "Search Listings",
							"url": "http://careers.gatesfoundation.org/",
							"urlPingSuffix": "DevEx,5074.1"
						},
						{
							"name": "How We Work",
							"url": "http://www.gatesfoundation.org/how-we-work",
							"urlPingSuffix": "DevEx,5075.1"
						}
					],
					"dateLastCrawled": "2016-02-04T17:10:00"
				},
				{
					"id": "https://www.bing.com/api/v5/#WebPages.1",
					"name": "Bill Gates - Wikipedia, the free encyclopedia",
					"url": "https://en.wikipedia.org/wiki/Bill_Gates",
					"urlPingSuffix": "DevEx,5097.1",
					"about": [
						{
							"name": "Bill Gates"
						}
					],
					"displayUrl": "https://en.wikipedia.org/wiki/Bill_Gates",
					"snippet": "William Henry \"Bill\" Gates III (born October 28, 1955) is an American business magnate, philanthropist, investor, and computer programmer. [2] [3] In 1975 ",
					"dateLastCrawled": "2016-02-05T03:09:00"
				},
				{
					"id": "https://www.bing.com/api/v5/#WebPages.2",
					"name": "Bill Gates - Official Site",
					"url": "https://www.gatesnotes.com/",
					"urlPingSuffix": "DevEx,5110.1",
					"displayUrl": "https://www.gatesnotes.com",
					"snippet": "Become a Gates Notes Insider Join the Gates Notes community to access exclusive content, comment on stories, subscribe to your favorite topics and more.",
					"dateLastCrawled": "2016-02-03T18:50:00"
				}
			]
		},
		"images": {
			"id": "https://www.bing.com/api/v5/#Images",
			"readLink": "https://www.bing.com/api/v5/images/search?q=bill+gates&qpvt=bill+gates&qpvt=bill+gates",
			"webSearchUrl": "https://www.bing.com/images/search?q=bill+gates&qpvt=bill+gates&qpvt=bill+gates",
			"webSearchUrlPingSuffix": "DevEx,5025.1",
			"isFamilyFriendly": true,
			"value": [
				{
					"name": "Bill Gates Ranked Richest American by Forbes For 21st Straight Year",
					"webSearchUrl": "https://www.bing.com/images/search?q=bill+gates&id=A204A8572C1640DE6830782F02A63C2E825D705A&FORM=IARRTH",
					"webSearchUrlPingSuffix": "DevEx,5321.1",
					"thumbnailUrl": "https://tse1.mm.bing.net/th?id=OIP.Me12187d95b2790e2644fdf18d5a30b3bH1&pid=Api",
					"datePublished": "2014-09-29T21:50:00",
					"contentUrl": "http://americanlivewire.com/wp-content/uploads/bill-gates1.jpg",
					"hostPageUrl": "http://americanlivewire.com/2014-09-29-bill-gates-ranked-richest-american-forbes-21st-straight-year/",
					"hostPageUrlPingSuffix": "DevEx,5445.1",
					"contentSize": "1088572 B",
					"encodingFormat": "jpeg",
					"hostPageDisplayUrl": "http://americanlivewire.com/2014-09-29-bill-gates-ranked-richest-american-forbes-21st-straight-year/",
					"width": 1588,
					"height": 2393,
					"thumbnail": {
						"width": 318,
						"height": 480
					}
				}
			],
			"displayShoppingSourcesBadges": false,
			"displayRecipeSourcesBadges": true
		},
		"news": {
			"id": "https://www.bing.com/api/v5/#News",
			"readLink": "https://www.bing.com/api/v5/news/search?q=Bill+Gates",
			"value": [
				{
					"name": "Bill Gates Doubles Down to Scale up Support for New Impact Investing Funds",
					"url": "http://www.huffingtonpost.com/david-bank/bill-gates-doubles-down-t_b_9146778.html",
					"urlPingSuffix": "DevEx,5175.1",
					"image": {
						"thumbnail": {
							"contentUrl": "https://www.bing.com/th?id=ON.94FE743052139FA7E51134C65616EDD4&pid=News",
							"width": 570,
							"height": 370
						}
					},
					"description": "ImpactAlpha.com-- When Bill Gates agreed a couple years ago to put a small piece of his personal fortune into a fund that invests in companies serving low-income customers in India, he invited the fund managers to return with a plan to scale up their ",
					"about": [
						{
							"readLink": "https://www.bing.com/api/v5/entities/0d47c987-0042-5576-15e8-97af601614fa",
							"name": "Bill Gates"
						},
						{
							"readLink": "https://www.bing.com/api/v5/entities/b7fff496-7062-698c-2493-fa6871cd8c66",
							"name": "Impact investing"
						}
					],
					"provider": [
						{
							"_type": "Organization",
							"name": "The Huffington Post"
						}
					],
					"datePublished": "2016-02-04T22:56:00",
					"category": "Business"
				}
			]
		},
		"relatedSearches": {
			"id": "https://www.bing.com/api/v5/#RelatedSearches",
			"value": [
				{
					"text": "Bill Gates Malaria",
					"displayText": "Bill Gates Malaria",
					"webSearchUrl": "https://www.bing.com/search?q=Bill+Gates+Malaria",
					"webSearchUrlPingSuffix": "DevEx,5465.1"
				},
				{
					"text": "Bill Gates Mansion",
					"displayText": "Bill Gates Mansion",
					"webSearchUrl": "https://www.bing.com/search?q=Bill+Gates+Mansion",
					"webSearchUrlPingSuffix": "DevEx,5466.1"
				}
			]
		},
		"videos": {
			"id": "https://www.bing.com/api/v5/#Videos",
			"readLink": "https://www.bing.com/api/v5/videos/search?q=bill+gates",
			"webSearchUrl": "https://www.bing.com/videos/search?q=bill+gates",
			"webSearchUrlPingSuffix": "DevEx,5053.1",
			"isFamilyFriendly": true,
			"value": [
				{
					"name": "Bill Gates 2.0",
					"description": "For Bill Gates, technology is still the solution. He shows Charlie Rose some inventions he's working on to help heal the world.",
					"webSearchUrl": "https://www.bing.com/videos/search?q=bill%20gates#view=detail&mid=234E4D8C9DC6C5707C0E234E4D8C9DC6C5707C0E",
					"webSearchUrlPingSuffix": "DevEx,5430.1",
					"thumbnailUrl": "https://tse2.mm.bing.net/th?id=WN.qLvK%2bJin%2b21addnQ0lsxUw&pid=Api",
					"datePublished": "2013-05-14T18:35:52",
					"publisher": [
						{
							"name": "YouTube"
						}
					],
					"contentUrl": "https://www.youtube.com/watch?v=cPy0nWYYCFg",
					"hostPageUrl": "https://www.youtube.com/watch?v=cPy0nWYYCFg",
					"hostPageUrlPingSuffix": "DevEx,5429.1",
					"encodingFormat": "mp4",
					"hostPageDisplayUrl": "https://www.youtube.com/watch?v=cPy0nWYYCFg",
					"width": 1280,
					"height": 720,
					"duration": "PT13M42S",
					"motionThumbnailUrl": "https://tse2.mm.bing.net/th?id=OM.DnxwxcadjE1OIw&pid=Api",
					"embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"http://www.youtube.com/embed/cPy0nWYYCFg?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
					"allowHttpsEmbed": true,
					"viewCount": 80292,
					"thumbnail": {
						"width": 300,
						"height": 168
					}
				}
			],
			"scenario": "List"
		}
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const computerVision = new cognitiveServices.computerVision({API_KEY: yourApiKey})
			
		const parameters = {
			visualFeatures: "Categories"
		};

			computerVision.analyzeImage({parameters})
				.then((response) => {
						/**
							Example response: {
		"categories": [
			{
				"name": "abstract_",
				"score": 0.00390625
			},
			{
				"name": "people_",
				"score": 0.83984375,
				"detail": {
					"celebrities": [
						{
							"name": "Satya Nadella",
							"faceRectangle": {
								"left": 597,
								"top": 162,
								"width": 248,
								"height": 248
							},
							"confidence": 0.999028444
						}
					]
				}
			}
		],
		"adult": {
			"isAdultContent": false,
			"isRacyContent": false,
			"adultScore": 0.0934349000453949,
			"racyScore": 0.06861349195241928
		},
		"tags": [
			{
				"name": "person",
				"confidence": 0.9897908568382263
			},
			{
				"name": "man",
				"confidence": 0.9449388980865479
			},
			{
				"name": "outdoor",
				"confidence": 0.938492476940155
			},
			{
				"name": "window",
				"confidence": 0.8951393961906433
			}
		],
		"description": {
			"tags": [
				"person",
				"man",
				"outdoor",
				"window",
				"glasses"
			],
			"captions": [
				{
					"text": "Satya Nadella sitting on a bench",
					"confidence": 0.48293603002174407
				}
			]
		},
		"requestId": "0dbec5ad-a3d3-4f7e-96b4-dfd57efe967d",
		"metadata": {
			"width": 1500,
			"height": 1000,
			"format": "Jpeg"
		},
		"faces": [
			{
				"age": 44,
				"gender": "Male",
				"faceRectangle": {
					"left": 593,
					"top": 160,
					"width": 250,
					"height": 250
				}
			}
		],
		"color": {
			"dominantColorForeground": "Brown",
			"dominantColorBackground": "Brown",
			"dominantColors": [
				"Brown",
				"Black"
			],
			"accentColor": "873B59",
			"isBWImg": false
		},
		"imageType": {
			"clipArtType": 0,
			"lineDrawingType": 0
		}
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const computerVision = new cognitiveServices.computerVision({API_KEY: yourApiKey})
			
		const parameters = {
			maxCandidates: "1"
		};

			computerVision.describeImage({parameters})
				.then((response) => {
						/**
							Example response: {
		"description": {
			"tags": [
				"person",
				"man",
				"outdoor",
				"window",
				"glasses"
			],
			"captions": [
				{
					"text": "Satya Nadella sitting on a bench",
					"confidence": 0.48293603002174407
				},
				{
					"text": "Satya Nadella is sitting on a bench",
					"confidence": 0.4003700681542283
				},
				{
					"text": "Satya Nadella sitting in front of a building",
					"confidence": 0.38035155997373377
				}
			]
		},
		"requestId": "ed2de1c6-fb55-4686-b0da-4da6e05d283f",
		"metadata": {
			"width": 1500,
			"height": 1000,
			"format": "Jpeg"
		}
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const computerVision = new cognitiveServices.computerVision({API_KEY: yourApiKey})
			
		const parameters = {
			smartCropping: "true"
		};

			computerVision.getThumbnail({parameters})
				.then((response) => {
						/**
							Example response: [Binary image data]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const computerVision = new cognitiveServices.computerVision({API_KEY: yourApiKey})
			

			computerVision.listDomainSpecificModels({parameters})
				.then((response) => {
						/**
							Example response: {
		"models": [
			{
				"name": "celebrities",
				"categories": [
					"people_"
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const computerVision = new cognitiveServices.computerVision({API_KEY: yourApiKey})
			
		const parameters = {
			language: "unk"
			detectOrientation : "true"
		};

			computerVision.ocr({parameters})
				.then((response) => {
						/**
							Example response: {
		"language": "en",
		"textAngle": -2.0000000000000338,
		"orientation": "Up",
		"regions": [
			{
				"boundingBox": "462,379,497,258",
				"lines": [
					{
						"boundingBox": "462,379,497,74",
						"words": [
							{
								"boundingBox": "462,379,41,73",
								"text": "A"
							},
							{
								"boundingBox": "523,379,153,73",
								"text": "GOAL"
							},
							{
								"boundingBox": "694,379,265,74",
								"text": "WITHOUT"
							}
						]
					},
					{
						"boundingBox": "565,471,289,74",
						"words": [
							{
								"boundingBox": "565,471,41,73",
								"text": "A"
							},
							{
								"boundingBox": "626,471,150,73",
								"text": "PLAN"
							},
							{
								"boundingBox": "801,472,53,73",
								"text": "IS"
							}
						]
					},
					{
						"boundingBox": "519,563,375,74",
						"words": [
							{
								"boundingBox": "519,563,149,74",
								"text": "JUST"
							},
							{
								"boundingBox": "683,564,41,72",
								"text": "A"
							},
							{
								"boundingBox": "741,564,153,73",
								"text": "WISH"
							}
						]
					}
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const computerVision = new cognitiveServices.computerVision({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			computerVision.recognizeDomainSpecificContent({parameters})
				.then((response) => {
						/**
							Example response: {
		"requestId": "f0027b4b-dc0d-4082-9228-1545ed246b03",
		"metadata": {
			"width": 1500,
			"height": 1000,
			"format": "Jpeg"
		},
		"result": {
			"celebrities": [
				{
					"name": "Satya Nadella",
					"faceRectangle": {
						"left": 597,
						"top": 162,
						"width": 248,
						"height": 248
					},
					"confidence": 0.999028444
				}
			]
		}
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const computerVision = new cognitiveServices.computerVision({API_KEY: yourApiKey})
			

			computerVision.tagImage({parameters})
				.then((response) => {
						/**
							Example response: {
		"tags": [
			{
				"name": "grass",
				"confidence": 0.9999997615814209
			},
			{
				"name": "outdoor",
				"confidence": 0.9999706745147705
			},
			{
				"name": "sky",
				"confidence": 0.9992897510528564
			},
			{
				"name": "building",
				"confidence": 0.9964632391929626
			},
			{
				"name": "house",
				"confidence": 0.9927980303764343
			},
			{
				"name": "lawn",
				"confidence": 0.8226802945137024
			},
			{
				"name": "green",
				"confidence": 0.6412225365638733
			},
			{
				"name": "residential",
				"confidence": 0.31403225660324097
			}
		],
		"requestId": "1ad0e45e-b7b4-4be3-8042-53be96103337",
		"metadata": {
			"width": 400,
			"height": 400,
			"format": "Jpeg"
		}
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



### Emotion

#### Emotion - Emotion Recognition

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/563b31ea778daf121cc3a5fa)

##### Description

<p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>

##### Parameters



#### Example


			const emotion = new cognitiveServices.emotion({API_KEY: yourApiKey})
			

			emotion.emotionRecognition({parameters})
				.then((response) => {
						/**
							Example response: [
		{
			"faceRectangle": {
				"left": 68,
				"top": 97,
				"width": 64,
				"height": 97
			},
			"scores": {
				"anger": 0.00300731952,
				"contempt": 5.14648448e-8,
				"disgust": 0.000009180124,
				"fear": 0.0001912825,
				"happiness": 0.9875571,
				"neutral": 0.0009861537,
				"sadness": 0.00001889955,
				"surprise": 0.008229999
			}
		}
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const emotion = new cognitiveServices.emotion({API_KEY: yourApiKey})
			

			emotion.emotionRecognitionInVideo({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Emotion - Emotion Recognition with Face Rectangles

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/5639d931ca73072154c1ce89/operations/56f23eb019845524ec61c4d7)

##### Description

<p>Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. <br/>&bull; The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. <br/>&bull; If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. <br/>&bull; The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. <br/>&bull; For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. <br/>&bull; Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; The emotions contempt and disgust are experimental.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
faceRectangles | A face rectangle is in the form “left,top,width,height”. Delimited multiple face rectangles with a “;”.  | yes | string | 


#### Example


			const emotion = new cognitiveServices.emotion({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			emotion.emotionRecognitionWithFaceRectangles({parameters})
				.then((response) => {
						/**
							Example response: [
		{
			"faceRectangle": {
				"left": 68,
				"top": 97,
				"width": 64,
				"height": 97
			},
			"scores": {
				"anger": 0.00300731952,
				"contempt": 5.14648448e-8,
				"disgust": 0.000009180124,
				"fear": 0.0001912825,
				"happiness": 0.9875571,
				"neutral": 0.0009861537,
				"sadness": 0.00001889955,
				"surprise": 0.008229999
			}
		}
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const emotion = new cognitiveServices.emotion({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			emotion.getRecognitionInVideoOperationResult({parameters})
				.then((response) => {
						/**
							Example response: {
		"status": "running",
		"createdDateTime":	"2015-09-30T01:28:23Z",
		"lastActionDateTime": "2015-09-30T01:32:23Z",
	}
	
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const entityLinking = new cognitiveServices.entityLinking({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			entityLinking.linkEntity({parameters})
				.then((response) => {
						/**
							Example response: {
		"entities": [
			{
				"matches": [
					{
						"text": "James Webb Space Telescope",
						"entries": [
							{
								"offset": 64
							}
						]
					},
					{
						"text": "Webb",
						"entries": [
							{
								"offset": 241
							},
							{
								"offset": 364
							},
							{
								"offset": 534
							}
						]
					}
				],
				"name": "James Webb Space Telescope",
				"wikipediaId": "James Webb Space Telescope",
				"score": 0.993
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			returnFaceId: "true"
			returnFaceLandmarks: "false"
		};

			face.detect({parameters})
				.then((response) => {
						/**
							Example response: [
			{
					"faceId": "c5c24a82-6845-4031-9d5d-978df9175426",
					"faceRectangle": {
							"width": 78,
							"height": 78,
							"left": 394,
							"top": 54
					},
					"faceLandmarks": {
							"pupilLeft": {
									"x": 412.7,
									"y": 78.4 
							},
							"pupilRight": {
									"x": 446.8,
									"y": 74.2 
							},
							"noseTip": {
									"x": 437.7,
									"y": 92.4 
							},
							"mouthLeft": {
									"x": 417.8,
									"y": 114.4 
							},
							"mouthRight": {
									"x": 451.3,
									"y": 109.3 
							},
							"eyebrowLeftOuter": {
									"x": 397.9,
									"y": 78.5 
							},
							"eyebrowLeftInner": {
									"x": 425.4,
									"y": 70.5 
							},
							"eyeLeftOuter": {
									"x": 406.7,
									"y": 80.6 
							},
							"eyeLeftTop": {
									"x": 412.2,
									"y": 76.2 
							},
							"eyeLeftBottom": {
									"x": 413.0,
									"y": 80.1 
							},
							"eyeLeftInner": {
									"x": 418.9,
									"y": 78.0 
							},
							"eyebrowRightInner": {
									"x": 4.8,
									"y": 69.7 
							},
							"eyebrowRightOuter": {
									"x": 5.5,
									"y": 68.5 
							},
							"eyeRightInner": {
									"x": 441.5,
									"y": 75.0 
							},
							"eyeRightTop": {
									"x": 446.4,
									"y": 71.7 
							},
							"eyeRightBottom": {
									"x": 447.0,
									"y": 75.3 
							},
							"eyeRightOuter": {
									"x": 451.7,
									"y": 73.4 
							},
							"noseRootLeft": {
									"x": 428.0,
									"y": 77.1 
							},
							"noseRootRight": {
									"x": 435.8,
									"y": 75.6 
							},
							"noseLeftAlarTop": {
									"x": 428.3,
									"y": 89.7 
							},
							"noseRightAlarTop": {
									"x": 442.2,
									"y": 87.0 
							},
							"noseLeftAlarOutTip": {
									"x": 424.3,
									"y": 96.4 
							},
							"noseRightAlarOutTip": {
									"x": 446.6,
									"y": 92.5 
							},
							"upperLipTop": {
									"x": 437.6,
									"y": 105.9 
							},
							"upperLipBottom": {
									"x": 437.6,
									"y": 108.2 
							},
							"underLipTop": {
									"x": 436.8,
									"y": 111.4 
							},
							"underLipBottom": {
									"x": 437.3,
									"y": 114.5 
							}
					},
					"faceAttributes": {
							"age": 71.0,
							"gender": "male",
							"smile": 0.88,
							"facialHair": {
									"mustache": 0.8,
									"beard": 0.1,
									"sideburns": 0.02
									}
							},
							"glasses": "sunglasses",
							"headPose": {
									"roll": 2.1,
									"yaw": 3,
									"pitch": 0
							}
					}
			}
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Face - Find Similar

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237)

##### Description


  Find similar - looking faces for a query face from a list of candidate faces (given by a face list or a face ID array) and return similar face IDs ranked by similarity.
  The candidate face list has a limitation of 1000 faces.
  <h4>Http Method</h4>
  POST


##### Parameters



#### Example


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			

			face.findSimilar({parameters})
				.then((response) => {
						/**
							Example response: [
			{
					"persistedFaceId" : "015839fb-fbd9-4f79-ace9-7675fc2f1dd9",
					"confidence" : 0.82 
			},
			 
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			

			face.group({parameters})
				.then((response) => {
						/**
							Example response: {
		"groups": [
			[
				"c5c24a82-6845-4031-9d5d-978df9175426",
				"015839fb-fbd9-4f79-ace9-7675fc2f1dd9",
				"fce92aed-d578-4d2e-8114-068f8af4492e",
				"b64d5e15-8257-4af2-b20a-5a750f8940e7"
			],
			[
				"65d083d4-9447-47d1-af30-b626144bf0fb",
				"30ea1073-cc9e-4652-b1e3-d08fb7b95315"
			]
		],
		"messyGroup": [
			"be386ab3-af91-4104-9e6d-4dae4c9fddb7"
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			

			face.identify({parameters})
				.then((response) => {
						/**
							Example response: {
			[
					{
							"faceId":"c5c24a82-6845-4031-9d5d-978df9175426",
							"candidates":[
									{
											"personId":"25985303-c537-4467-b41d-bdb45cd95ca1",
											"confidence":0.92 
									}
							]
					},{
							"faceId":"65d083d4-9447-47d1-af30-b626144bf0fb",
							"candidates":[
									{
											"personId":"2ae4935b-9659-44c3-977f-61fac20d0538",
											"confidence":0.89
									}
							]
					}
			]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			

			face.verify({parameters})
				.then((response) => {
						/**
							Example response: {
		"isIdentical": true,
		"confidence": 0.9
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.addAFaceToAFaceList({parameters})
				.then((response) => {
						/**
							Example response: {
		"persistedFaceId": "B8D802CF-DD8F-4E61-B15C-9E6C5844CCBA"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.createAFaceList({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.deleteAFaceFromAFaceList({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.deleteAFaceList({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.getAFaceList({parameters})
				.then((response) => {
						/**
							Example response: {
			"faceListId": "sample_list",
			"name": "list1",
			"userData":"User-provided data attached to the face list",
			"persistedFaces":[
					{
							"persistedFaceId":"B8D802CF-DD8F-4E61-B15C-9E6C5844CCBD",
							"userData":"User-provided data attached to the face" 
					},
					
			]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Face - List Face Lists

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524d)

##### Description


  Retrieve information about all existing face lists. Only face list ID, name and user data will be returned. Try <a href="/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c">Face List - Get a Face List</a> to retrieve face information inside faceList.
  <h4>Http Method</h4>
  GET


##### Parameters



#### Example


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			

			face.listFaceLists({parameters})
				.then((response) => {
						/**
							Example response: [
			{
					"faceListId": "sample_list",
					"name": "list1",
					"userData":"User-provided data attached to the face list" 
			},
			
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.updateAFaceList({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.addAPersonFace({parameters})
				.then((response) => {
						/**
							Example response: {
		"persistedFaceId": "B8D802CF-DD8F-4E61-B15C-9E6C5844CCBA"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.createAPerson({parameters})
				.then((response) => {
						/**
							Example response: {
		"personId": "25985303-c537-4467-b41d-bdb45cd95ca1"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.deleteAPerson({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.deleteAPersonFace({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.getAPerson({parameters})
				.then((response) => {
						/**
							Example response: {
		"personId": "25985303-c537-4467-b41d-bdb45cd95ca1",
		"persistedFaceIds": [
			"015839fb-fbd9-4f79-ace9-7675fc2f1dd9",
			"fce92aed-d578-4d2e-8114-068f8af4492e",
			"b64d5e15-8257-4af2-b20a-5a750f8940e7"
		],
		"name": "Ryan",
		"userData": "User-provided data attached to the person"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.getAPersonFace({parameters})
				.then((response) => {
						/**
							Example response: {
		"persistedFaceId": "015839fb-fbd9-4f79-ace9-7675fc2f1dd9",
		"userData": "User-provided data attached to the person"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.listPersonsInAPersonGroup({parameters})
				.then((response) => {
						/**
							Example response: [
		{
			"personId": "25985303-c537-4467-b41d-bdb45cd95ca1",
			"name": "Ryan",
			"userData": "User-provided data attached to the person",
			"persistedFaceIds": [
				"015839fb-fbd9-4f79-ace9-7675fc2f1dd9",
				"fce92aed-d578-4d2e-8114-068f8af4492e",
				"b64d5e15-8257-4af2-b20a-5a750f8940e7"
			]
		},
		{
			"personId": "2ae4935b-9659-44c3-977f-61fac20d0538",
			"name": "David",
			"userData": "User-provided data attached to the person",
			"faceIds": [
				"30ea1073-cc9e-4652-b1e3-d08fb7b95315",
				"fbd2a038-dbff-452c-8e79-2ee81b1aa84e"
			]
		}
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.updateAPerson({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.updateAPersonFace({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.createAPersonGroup({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.deleteAPersonGroup({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.getAPersonGroup({parameters})
				.then((response) => {
						/**
							Example response: {
		"personGroupId": "sample_group",
		"name": "group1",
		"userData": "User-provided data attached to the person group"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.getPersonGroupTrainingStatus({parameters})
				.then((response) => {
						/**
							Example response: {
		"status": "succeeded",
		"createdDateTime": "2015-05-15T13:45:30",
		"lastActionDateTime": null,
		"message": "The operation was timeout."
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Face - List Person Groups

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395248)

##### Description


  List all person groups and their information.
  <h4>Http Method</h4>
  GET


##### Parameters



#### Example


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			

			face.listPersonGroups({parameters})
				.then((response) => {
						/**
							Example response: [
		{
			"personGroupId": "sample_group",
			"name": "group1",
			"userData": "User-provided data attached to the person group"
		},
		{
			"personGroupId": "sample_group2",
			"name": "group2",
			"userData": "User-provided data attached to the person group"
		}
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.trainPersonGroup({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const face = new cognitiveServices.face({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			face.updateAPersonGroup({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			

			recommendations.createAModel({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Recommendations - Create/Trigger a build

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d0)

##### Description

Trigger a recommendation model build. Before triggering a build you first must upload catalog and usage data. Once a build is triggered you will receive an <i>operation</i> that you can use to track the build status, or to cancel the build operation.<p>There are 3 types of builds: a <i>Recommendation</i> build, a <i>Rank</i> build and an <i> FBT (frequently bought together) build.</i></p><p>The recommendation build's purpose is to generate a recommendation model used for predictions. Predictions (for this type of build) come in two flavors: <br><p>* <i>Item to Item recommendations (I2I)</i><br>Given an item or a list of items this option will predict a list of items that are likely to be of high interest. </p><p>* <i>User to Item recommendations (U2I) </i><br>Given a user id (and optionally a list of items) this option will predict a list of items that are likely to be of high interest for the given user (and its additional choice of items). The U2I recommendations are based on the history of items that were of interest for the user up to the time the model was built.</p><p>An FBT (Frequently bought together) build is yet another recommendations algorithm called sometimes a "conservative" recommender, which is good for catalogs that are not homogeneous in nature (homogeneous: books, movies, some food, fashion; non-homogeneous: computer and devices, cross-domain, highly diverse).</p><p><b>Note:</b> If the usage files that you uploaded contain the optional field "event type" then for FBT modelling only "Purchase" events will be used. If no event type is provided all events will be considered as purchase.</p><p>A rank build is a technical build that allows you to learn about the usefulness of your features. It is not currently supported on this API version.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
modelId | Unique identifier of the model | yes | string | 


#### Example


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.create/TriggerABuild({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.deleteABuild({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Recommendations - Delete a model

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d8)

##### Description

Deletes an existing model by ID.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Unique identifier of the model. | yes | string | 


#### Example


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.deleteAModel({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Recommendations - Delete/Cancel an ongoing operation

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3db)

##### Description

<p>Cancels an ongoing operation. One example is to cancel a build request that was submitted.</p><p>To get the operation ID location, you should check the <i>Operation-Location</i> header that is returned on the response when you are triggering a build.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Operation ID | yes | string | 


#### Example


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.delete/CancelAnOngoingOperation({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Recommendations - Get a model by id

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d7)

##### Description

Gets a model by ID.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Unique identifier of the model to be fetched. | yes | string | 


#### Example


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.getAModelById({parameters})
				.then((response) => {
						/**
							Example response: {
		"id": "string",
		"name": "string",
		"description": "string",
		"createdDateTime": "string",
		"activeBuildId": 0
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Recommendations - Get all models

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d5)

##### Description

Retrieves all models.

##### Parameters



#### Example


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			

			recommendations.getAllModels({parameters})
				.then((response) => {
						/**
							Example response: {
		"models": [
			{
				"id": "string",
				"name": "string",
				"description": "string",
				"createdDateTime": "string",
				"activeBuildId": 0
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.getBuildById({parameters})
				.then((response) => {
						/**
							Example response: {
		"id": 0,
		"description": "string",
		"type": 1,
		"modelName": "string",
		"modelId": "string",
		"status": "string",
		"statusMessage": "string",
		"startDateTime": "string",
		"endDateTime": "string",
		"modifiedDateTime": "string"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.getBuildMetrics({parameters})
				.then((response) => {
						/**
							Example response: {
		"precisionItemRecommend": {
			"precisionMetrics": [
				{
					"k": 0,
					"percentage": 0,
					"usersInTest": 0,
					"usersConsidered": 0,
					"usersNotConsidered": 0
				}
			],
			"error": "string"
		},
		"precisionUserRecommend": {
			"precisionMetrics": [
				{
					"k": 0,
					"percentage": 0,
					"usersInTest": 0,
					"usersConsidered": 0,
					"usersNotConsidered": 0
				}
			],
			"error": "string"
		},
		"diversityItemRecommend": {
			"percentileBuckets": [
				{
					"min": 0,
					"max": 0,
					"percentage": 0
				}
			],
			"totalItemsRecommended": 0,
			"uniqueItemsRecommended": 0,
			"uniqueItemsInTrainSet": 0,
			"error": "string"
		},
		"diversityUserRecommend": {
			"percentileBuckets": [
				{
					"min": 0,
					"max": 0,
					"percentage": 0
				}
			],
			"totalItemsRecommended": 0,
			"uniqueItemsRecommended": 0,
			"uniqueItemsInTrainSet": 0,
			"error": "string"
		}
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.getDetailsOfAllBuilds({parameters})
				.then((response) => {
						/**
							Example response: {
		"builds": [
			{
				"id": 0,
				"description": "string",
				"type": 1,
				"modelName": "string",
				"modelId": "string",
				"status": "string",
				"statusMessage": "string",
				"startDateTime": "string",
				"endDateTime": "string",
				"modifiedDateTime": "string"
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.getRecommendationsBasedOnItems (I2I)({parameters})
				.then((response) => {
						/**
							Example response: {
		"recommendedItems": [
			{
				"items": [
					{
						"id": "string",
						"name": "string",
						"metadata": "string"
					}
				],
				"rating": 0,
				"reasoning": [
					"string"
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.getUserRecommendations (U2I)({parameters})
				.then((response) => {
						/**
							Example response: {
		"recommendedItems": [
			{
				"items": [
					{
						"id": "string",
						"name": "string",
						"metadata": "string"
					}
				],
				"rating": 0,
				"reasoning": [
					"string"
				]
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Recommendations - Retrieve the status of an operation

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3da)

##### Description

<p>Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.</p><p>To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Operation ID | yes | string | 


#### Example


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.retrieveTheStatusOfAnOperation({parameters})
				.then((response) => {
						/**
							Example response: {
		"type": "string",
		"status": "string",
		"createdDateTime": "string",
		"lastActionDateTime": "string",
		"percentComplete": 0,
		"message": "string",
		"resourceLocation": "string",
		"result": {
			"id": 0,
			"description": "string",
			"type": 1,
			"modelName": "string",
			"modelId": "string",
			"status": "string",
			"statusMessage": "string",
			"startDateTime": "string",
			"endDateTime": "string",
			"modifiedDateTime": "string"
		}
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Recommendations - Update a model

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/Recommendations.V4.0/operations/56f30d77eda5650db055a3d9)

##### Description

<p>Allows you to update the description or the active build for a model.</p><p><b>Active build ID</b> – Every build for every model has a build ID. The active build ID is the first successful build of every new model. Once you have an active build ID and you do additional builds for the same model, you need to explicitly set it as the default build ID if you want to. When you consume recommendations, if you do not specify the build ID that you want to use, the default one will be used automatically.</p><p>This mechanism enables you - once you have a recommendation model in production - to build new models and test them before you promote them to production.</p>

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
id | Unique identifier of the model. | yes | string | 


#### Example


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.updateAModel({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.uploadACatalogFileToAModel({parameters})
				.then((response) => {
						/**
							Example response: {
		"processedLineCount": 0,
		"errorLineCount": 0,
		"importedLineCount": 0,
		"errorSummary": [
			{
				"errorCode": "string",
				"errorCodeCount": 0
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const recommendations = new cognitiveServices.recommendations({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			recommendations.uploadAUsageFileToAModel({parameters})
				.then((response) => {
						/**
							Example response: {
		"fileId": "string",
		"processedLineCount": 0,
		"errorLineCount": 0,
		"importedLineCount": 0,
		"errorSummary": [
			{
				"errorCode": "string",
				"errorCodeCount": 0
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			speakerRecognition.createEnrollment({parameters})
				.then((response) => {
						/**
							Example response: {
		"enrollmentStatus" : "Enrolled", // [Enrolled | Enrolling | Training]
		"enrollmentsCount":0,
		"remainingEnrollments" : 0,
		"phrase" : "Recognized verification phrase"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Create Profile

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e)

##### Description

Create a new speaker identification profile with specified locale.<br/>
One subscription can only create 1000 speaker verification/identification profiles at most.<br/>

##### Parameters



#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			

			speakerRecognition.createProfile({parameters})
				.then((response) => {
						/**
							Example response: {
		"identificationProfileId": "49a36324-fc4b-4387-aa06-090cfbf0064f",
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Delete Profile

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9655)

##### Description

Deletes both speaker verification profile and all associated enrollments permanently from the service.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 


#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			speakerRecognition.deleteProfile({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Get All Profiles

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9653)

##### Description

Get all speaker verification profiles within the subscription.

##### Parameters



#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			

			speakerRecognition.getAllProfiles({parameters})
				.then((response) => {
						/**
							Example response: [{
		"verificationProfileId" : "111f427c-3791-468f-b709-fcef7660fff9",
		"locale" : "en-US",
		"enrollmentsCount" : 2,
		"remainingEnrollmentsCount" : 0,
		"createdDateTime" : "2015-04-23T18:25:43.511Z", 
		"lastActionDateTime" : "2015-04-23T18:25:43.511Z",
		"enrollmentStatus" : "Enrolled" //[Enrolled | Enrolling | Training]
	}, ]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Get Profile

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56409ee2778daf19706420de)

##### Description

Get a speaker verification profile by verificationProfileId

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 111f427c-3791-468f-b709-fcef7660fff9


#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			verificationProfileId: "111f427c-3791-468f-b709-fcef7660fff9"
		};

			speakerRecognition.getProfile({parameters})
				.then((response) => {
						/**
							Example response: {
		"verificationProfileId" : "111f427c-3791-468f-b709-fcef7660fff9",
		"locale" : "en-US",
		"enrollmentsCount" : 2,
		"remainingEnrollmentsCount" : 0,
		"createdDateTime" : "2015-04-23T18:25:43.511Z", 
		"lastActionDateTime" : "2015-04-23T18:25:43.511Z",
		"enrollmentStatus" : "Enrolled" // [Enrolled | Enrolling | Training]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Reset Enrollments

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549b)

##### Description

Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 


#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			speakerRecognition.resetEnrollments({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Get Operation Status

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c725ca73070ee8845bd6)

##### Description

Get operation status or result. The operation should be created by <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592"> Speaker Recognition - Identification</a> or <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797"> Identification Profile - Create Enrollment</a>. And the URL should be retrieved from Operation-Location header of initial POST 202 response

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
operationId | The operation Id, created by <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592"> Speaker Recognition - Identification</a> or <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797"> Identification Profile - Create Enrollment</a>.  | yes | string | EF217D0C-9085-45D7-AAE0-2B36471B89B5


#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			operationId: "EF217D0C-9085-45D7-AAE0-2B36471B89B5"
		};

			speakerRecognition.getOperationStatus({parameters})
				.then((response) => {
						/**
							Example response: Case 1 - not started 
	HTTP/1.1 200 Ok
	Content-Type: application/json
	{
		"status": "notstarted",
		"createdDateTime":	"2015-09-30T01:28:23Z",
		"lastActionDateTime": "2015-09-30T01:29:23Z"
	}
	
	Case 3 - running
	HTTP/1.1 200 Ok
	Content-Type: application/json
	{
		"status": "running",
		"createdDateTime":	"2015-09-30T01:28:23Z",
		"lastActionDateTime": "2015-09-30T01:32:23Z",
	}
	
	Case 4 - failed
	HTTP/1.1 200 Ok
	Content-Type: application/json
	{
		"status": "failed",
		"createdDateTime":	"2015-09-30T01:28:23Z"
		"lastActionDateTime": "2015-09-30T01:35:23Z"
		"message":	"Some failure info"
	}
	
	Case 5 - succeeded
	Case 5.1: Enrollment Result: in this case, the enrollment result would be returned inline in "processingResult" field.
	HTTP/1.1 200 Ok
	Content-Type: application/json
	{
		"status": "succeeded",
		"createdDateTime":	"2015-09-30T01:28:23Z", 
		"lastActionDateTime": "2015-09-30T01:37:23Z",
		"processingResult": 
		{
			"enrollmentStatus" : "Enrolled", // [Enrolled|Enrolling|Training]
			"remainingEnrollmentSpeechTime" : 0.0,
			"speechTime" : 0.0,
			"enrollmentSpeechTime":0.0
		}
	}
	
	Case 5.2.1: Identification Result: in this case, the identification result would be returned inline in "processingResult" field. It successfully identified one of the provided profiles.
	HTTP/1.1 200 Ok
	Content-Type: application/json
	{
		"status": "succeeded",
		"createdDateTime":	"2015-09-30T01:28:23Z", 
		"lastActionDateTime": "2015-09-30T01:37:23Z",
		"processingResult": 
		{
			"identifiedProfileId" : "111f427c-3791-468f-b709-fcef7660fff9", 
			"confidence" : "Normal" //[Low | Normal | High]
		}
	}
	
	Case 5.2.2: Identification Result: in this case, the identification result would be returned inline in "processingResult" field. It cannot identify the audio among the provided profiles.
	HTTP/1.1 200 Ok
	Content-Type: application/json
	{
		"status": "succeeded",
		"createdDateTime":	"2015-09-30T01:28:23Z", 
		"lastActionDateTime": "2015-09-30T01:37:23Z",
		"processingResult": 
		{
			"identifiedProfileId" : "00000000-0000-0000-0000-000000000000", 
			"confidence" : "Normal" //[Low | Normal | High]
		}
	}
	
	
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Identification

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592)

##### Description

To automatically identify who is speaking given a group of speakers.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
identificationProfileIds | Comma-delimited identificationProfileIds, the id should be Guid.<br/>It can only support at most 10 profiles for one identification request. | yes | string | 111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9


#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			identificationProfileIds: "111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9,111f427c-3791-468f-b709-fcef7660fff9"
		};

			speakerRecognition.identification({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - Verification

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d)

##### Description

To automatically verify and authenticate users using their voice or speech.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
verificationProfileId | ID of speaker verification profile. It should be a GUID. | yes | string | 


#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			speakerRecognition.verification({parameters})
				.then((response) => {
						/**
							Example response: {
		"result" : "Accept", // [Accept | Reject]
		"confidence" : "Normal", // [Low | Normal | High]
		"phrase": "recognized phrase"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Speaker Recognition - List All Supported Verification Phrases

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5652c0801984551c3859634d)

##### Description

Returns the list of supported verification phrases that can be used for <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549c">Verification Profile - Create Enrollment</a> and <a href="https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/56406930e597ed20c8d8549d">Speaker Recognition - Verification</a>.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
locale | Locale for the language when retrieving verification phrases. | yes | string | en-US


#### Example


			const speakerRecognition = new cognitiveServices.speakerRecognition({API_KEY: yourApiKey})
			
		const parameters = {
			locale: "en-US"
		};

			speakerRecognition.listAllSupportedVerificationPhrases({parameters})
				.then((response) => {
						/**
							Example response: [
		{
			"phrase":"phrase1"
		},
		{
			"phrase":"phrase2"
		},
		
	]
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const textAnalytics = new cognitiveServices.textAnalytics({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			textAnalytics.detectLanguage({parameters})
				.then((response) => {
						/**
							Example response: {
		"documents": [
			{
				"id": "string",
				"detectedLanguages": [
					{
						"name": "string",
						"iso6391Name": "string",
						"score": 0
					}
				]
			}
		],
		"errors": [
			{
				"id": "string",
				"message": "string"
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const textAnalytics = new cognitiveServices.textAnalytics({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			textAnalytics.detectTopics({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Text Analytics - Key Phrases

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c6)

##### Description

The API returns a list of strings denoting the key talking points in the input text. 
            We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit. 
            Currently, the following languages are supported: English, German, Spanish and Japanese.

##### Parameters



#### Example


			const textAnalytics = new cognitiveServices.textAnalytics({API_KEY: yourApiKey})
			

			textAnalytics.keyPhrases({parameters})
				.then((response) => {
						/**
							Example response: {
		"documents": [
			{
				"keyPhrases": [
					"string"
				],
				"id": "string"
			}
		],
		"errors": [
			{
				"id": "string",
				"message": "string"
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Text Analytics - Operation Status

[Original Microsoft Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c8)

##### Description

Get the status of an operation submitted for processing. If the the operation has reached a 'Succeeded' state, will also return the result.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
operationId | A unique id for the submitted operation. | yes | string | 


#### Example


			const textAnalytics = new cognitiveServices.textAnalytics({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			textAnalytics.operationStatus({parameters})
				.then((response) => {
						/**
							Example response: {
		"status": "notStarted",
		"createdDateTime": "string",
		"lastActionDateTime": "string",
		"operationType": "string",
		"operationProcessingResult": {
			"errors": [
				{
					"id": "string",
					"message": "string"
				}
			],
			"discriminator": "string"
		},
		"message": "string"
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const textAnalytics = new cognitiveServices.textAnalytics({API_KEY: yourApiKey})
			

			textAnalytics.sentiment({parameters})
				.then((response) => {
						/**
							Example response: {
		"documents": [
			{
				"score": 0,
				"id": "string"
			}
		],
		"errors": [
			{
				"id": "string",
				"message": "string"
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



### Video

#### Video - Face Detection and Tracking

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e39)

##### Description

<p>Detects and tracks human faces in a video and returns face locations. <br/>&bull; The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull; The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. <br/>&bull; For each video, the maximum number of faces returned is 64. <br/>&bull; Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. <br/>&bull; Output files are deleted after 24 hours.
</p>

##### Parameters



#### Example


			const video = new cognitiveServices.video({API_KEY: yourApiKey})
			

			video.faceDetectionAndTracking({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const video = new cognitiveServices.video({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			video.getOperationResult({parameters})
				.then((response) => {
						/**
							Example response: {
		"status": "running",
		"createdDateTime":	"2015-09-30T01:28:23Z",
		"lastActionDateTime": "2015-09-30T01:32:23Z",
	}
	
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Video - Get Result Video

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d81f4ca73072048922d95)

##### Description

This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from <b>resourceLocation</b> field of JSON returned from Get Operation Result interface.

##### Parameters

Name | Description | Required | Type | Example Value
--- | --- | --- | --- | ---
oid |  | yes | string | 


#### Example


			const video = new cognitiveServices.video({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			video.getResultVideo({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const video = new cognitiveServices.video({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			video.motionDetection({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Video - Stabilization

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/565d6516778daf15800928d5/operations/565d6517778daf0978c45e35)

##### Description

<p>Smooths and stabilizes a video.  <br/>&bull;  The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. <br/>&bull;  Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). <br/>&bull;  Both width and height of the input video must be even numbers. <br/>&bull;  The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). <br/>&bull; Output files are deleted after 24 hours.</p>

##### Parameters



#### Example


			const video = new cognitiveServices.video({API_KEY: yourApiKey})
			

			video.stabilization({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const video = new cognitiveServices.video({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			video.thumbnail({parameters})
				.then((response) => {
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		



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


			const webLanguageModel = new cognitiveServices.webLanguageModel({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			webLanguageModel.breakIntoWords({parameters})
				.then((response) => {
						/**
							Example response: {
		"candidates": [
			{
				"words": "test for word break",
				"probability": -13.911
			},
			{
				"words": "test for wordbreak",
				"probability": -14.574
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const webLanguageModel = new cognitiveServices.webLanguageModel({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			webLanguageModel.calculateConditionalProbability({parameters})
				.then((response) => {
						/**
							Example response: {
		"results":
		[
			{
				"words": "hello world wide",
				"word": "web",
				"probability" :	-1.541
			},
			{
				"words": "hello world wide",
				"word": "range",
				"probability" :	-2.828
			},
			{
				"words": "hello world wide",
				"word": "open",
				"probability" :	-4.789
			},
			
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const webLanguageModel = new cognitiveServices.webLanguageModel({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			webLanguageModel.calculateJointProbability({parameters})
				.then((response) => {
						/**
							Example response: {
		"results": [
			{
				"words": "this",
				"probability ": -3.541
			},
			{
				"words": "is",
				"probability ": -2.828
			},
			{
				"words": "this is",
				"probability ": -4.789
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

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


			const webLanguageModel = new cognitiveServices.webLanguageModel({API_KEY: yourApiKey})
			
		const parameters = {
			
		};

			webLanguageModel.generateNextWords({parameters})
				.then((response) => {
						/**
							Example response: {
		"candidates": [
			{
				"word": "range",
				"probability": -1.396
			},
			{
				"word": "open",
				"probability": -1.397
			},
			{
				"word": "angle",
				"probability": -1.523
			},
			{
				"word": "happy",
				"probability": -1.523
			}
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

#### Web Language Model - List Available Models

[Original Microsoft Documentation](https://dev.projectoxford.ai/docs/services/55de9ca4e597ed1fd4e2f104/operations/565bf87b778daf12447f43c1)

##### Description

List models available currently.

##### Parameters



#### Example


			const webLanguageModel = new cognitiveServices.webLanguageModel({API_KEY: yourApiKey})
			

			webLanguageModel.listAvailableModels({parameters})
				.then((response) => {
						/**
							Example response: 
	{
		"models":
		[
			{
				“corpus”: “bing webpage body text 2013-12”,
				“model”: “body”,
				“maxOrder”: 5,
				“supportedOperations”: ["calculateJointProbability", "calculateConditionalProbability", "generateNextWords", "breakIntoWords"]
			},
			{
				“corpus”: “bing webpage title text 2013-12”,
				“model”: “title”,
				“maxOrder”: 5,
				“supportedOperations”: ["calculateJointProbability", "calculateConditionalProbability", "generateNextWords", "breakIntoWords"]
			},
			
		]
	}
							*/
					console.log('Got response', response);
				})
				.catch((err) => {
					console.error('Encountered error making request:', err);
				});
		

