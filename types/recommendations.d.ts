/**
 * The Recommendations API identifies consumption patterns from your transaction information in order to provide recommendations. 
 * These recommendations can help your customers more easily discover items that they may be interested in.
 * By showing your customers products that they are more likely to be interested in, you will, in turn, increase your sales.
 */
export class recommendations {

	constructor(options: RecommendationsOptions);

	/**
	 * Cancels an ongoing operation. One example is to cancel a build request that was submitted.
	 */
	cancelOperation(options: CancelOperationOptions): Promise<void>;

	/**
	 * Adds a new business rule for a model. These are the types of rules supported: 
	 * - BlockList - BlockList enables you to provide a list of items that you do not want to return in the recommendation results. 
	 * - FeatureBlockList - Feature BlockList enables you to block items based on the values of its features. Do not send more than 1000 items in a single blocklist rule or your call may timeout. If you need to block more than 1000 items, you can make several blocklist calls.
	 * - Upsale - Upsale enables you to enforce items to return in the recommendation results.
	 * - WhiteList - White List enables you to only suggest recommendations from a list of items. 
	 * - FeatureWhiteList - Feature White List enables you to only recommend items that have specific feature values. 
	 * - PerSeedBlockList - Per Seed Block List enables you to provide per item a list of items that cannot be returned as recommendation results. 
	 */
	createBusinessRule(options: CreateBusinessRuleOptions): Promise<CreateBusinessRuleReturnValue>;

	/**
	 * A model is a container of your usage data, catalog data and the recommendation model.
	 * Once you have created a model, you can upload your catalog data, upload your usage data and start the training process by creating builds on that model.
	 */
	createAModel(options: CreateAModelOptions): Promise<CreateAModelReturnValue>;

	/**
	 * By creating a new build, you start the training process that will allow you to generate a machine learning model that you can later on query for recommendations.
	 * Before triggering a build you first must upload catalog and usage data. Triggering a new build is an asynchronous operations. 
	 * Once a build is triggered you will receive an operation (in the Operation-Location header of the response) that you can use to track the build status, or to cancel the build operation. 
	 * See the "Retrieve the status of an operation" API.
	 */
	createOrTriggerABuild(options: CreateOrTriggerABuildOptions): Promise<CreateOrTriggerABuildReturnValue>;


	deleteABuild(options: any): any;
	deleteAModel(options: any): any;
	deleteAllBusinessRules(options: any): any;
	deleteAllUsageFiles(options: any): any;
	deleteBusinessRule(options: any): any;
	deleteCatalogItems(options: any): any;
	deleteUsageFile(options: any): any;
	downloadUsageFile(options: any): any;
	getAModelById(options: any): any;
	getAllBatchJobs(options: any): any;
	getAllBuilds(options: any): any;
	getAllBusinessRules(options: any): any;
	getAllCatalogItems(options: any): any;
	getAllModels(options: any): any;
	getBuildById(options: any): any;
	getBuildDataStatistics(options: any): any;
	getBuildMetrics(options: any): any;
	getBusinessRule(options: any): any;
	getItemToItemRecommendations(options: any): any;
	getModelFeatures(options: any): any;
	getOperationStatus(options: any): any;
	getSpecificCatalogItemsBySearchTerm(options: any): any;
	getUsageStatisticsForABuild(options: any): any;
	getUsageStatisticsForAModel(options: any): any;
	getUserToItemRecommendations(options: any): any;
	listUsageFiles(options: any): any;
	startBatchJob(options: any): any;
	updateCatalogItems(options: any): any;
	updateModel(options: any): any;
	uploadACatalogFileToAModel(options: any): any;
	uploadAUsageFileToAModel(options: any): any;
	uploadUsageEvent(options: any): any;
}

export interface RecommendationsOptions {
	apiKey: string,
	endpoint: string
}

export interface CancelOperationOptions {
	parameters: CancelOperationParameters,
	headers: CancelOperationHeaders
}

export interface CancelOperationParameters {
	/**
	 * To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.
	 */
	id: string
}

export interface CancelOperationHeaders {
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string 
}

export interface CreateBusinessRuleOptions {
	parameters: CreateBusinessRuleParameters,
	headers: CreateBusinessRuleHeaders,
	body: CreateBusinessRuleBody
}

export interface CreateBusinessRuleParameters {
	/**
	 * Unique identifier of the model
	 */
	modelId: string
}

export interface CreateBusinessRuleHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?:string, 
	
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface CreateBusinessRuleBody {
	type: string,
	parameters: {
	  blockList: {
		itemIds: string []
	  },
	  whiteList: {
		itemIds: string []
	  },
	  upsale: {
		itemIds: string [],
		numberOfItemsToUpsale: number
	  },
	  perSeedBlockList: {
		seedItemIds: string [],
		itemIds: string []
	  },
	  featureBlockList: {
		name: string,
		values: string []
	  },
	  featureWhiteList: {
		name: string,
		values: string []
	  }
	}
}

export interface CreateBusinessRuleReturnValue {
	id: number,
	type: string,
	parameters: {
	  blockList: {
		itemIds: string []
	  },
	  whiteList: {
		itemIds: string []
	  },
	  upsale: {
		itemIds: string [],
		numberOfItemsToUpsale: number
	  },
	  perSeedBlockList: {
		seedItemIds: string [],
		itemIds: string []
	  },
	  featureBlockList: {
		name: string,
		values: string []
	  },
	  featureWhiteList: {
		name: string,
		values: string []
	  }
	}
}

export interface CreateAModelOptions {
	headers: CreateAModelHeaders,
	body: CreateAModelBody
}

export interface CreateAModelHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?:string, 
	
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface CreateAModelBody {
	modelName: string,
	description: string
}

export interface CreateAModelReturnValue {
	id: string,
	name: string,
	description: string,
	createdDateTime: string,
	activeBuildId: number,
	catalogDisplayName: string
}


export interface CreateOrTriggerABuildOptions {
	parameters: CreateOrTriggerABuildParameters,
	headers: CreateOrTriggerABuildHeaders,
	body:CreateOrTriggerABuildeBody
}

export interface CreateOrTriggerABuildParameters {
	/**
	 * Unique identifier of the model
	 */
	modelId: string
}

export interface CreateOrTriggerABuildHeaders {
	/**
	 * Media type of the body sent to the API.
	 */
	"Content-Type"?:string, 
	
	/**
	 * Subscription key which provides access to this API.
	 */
	"Ocp-Apim-Subscription-Key": string
}

export interface CreateOrTriggerABuildeBody {
	description: string,
	buildType: string,
	buildParameters: {
	  ranking: {
		numberOfModelIterations: number,
		numberOfModelDimensions: number,
		itemCutOffLowerBound: number,
		itemCutOffUpperBound: number,
		userCutOffLowerBound: number,
		userCutOffUpperBound: number
	  },
	  recommendation: {
		numberOfModelIterations: number,
		numberOfModelDimensions: number,
		itemCutOffLowerBound: number,
		itemCutOffUpperBound: number,
		userCutOffLowerBound: number,
		userCutOffUpperBound: number,
		enableModelingInsights: true,
		splitterStrategy: string,
		randomSplitterParameters: {
		  testPercent: number,
		  randomSeed: number
		},
		dateSplitterParameters: {
		  splitDate: string
		},
		popularItemBenchmarkWindow: number,
		useFeaturesInModel: boolean,
		modelingFeatureList: string,
		allowColdItemPlacement: boolean,
		enableFeatureCorrelation: boolean,
		reasoningFeatureList: string,
		enableU2I: boolean
	  },
	  fbt: {
		supportThreshold: number,
		maxItemSetSize: number,
		minimalScore: string,
		similarityFunction: string,
		enableModelingInsights: boolean,
		splitterStrategy: string,
		randomSplitterParameters: {
		  testPercent: number,
		  randomSeed: number
		},
		dateSplitterParameters: {
		  splitDate: string
		},
		popularItemBenchmarkWindow: number
	  },
	  sar: {
		supportThreshold: 0,
		cooccurrenceUnit: string,
		similarityFunction: string,
		enableColdItemPlacement: boolean,
		enableColdToColdRecommendations: boolean,
		enableModelingInsights: boolean,
		enableU2I: true,
		splitterStrategy: string,
		randomSplitterParameters: {
		  testPercent: number,
		  randomSeed: number
		},
		dateSplitterParameters: {
		  splitDate: string
		},
		popularItemBenchmarkWindow: number,
		enableUserAffinity: boolean,
		allowSeedItemsInRecommendations: boolean,
		enableBackfilling: boolean
	  }
	}
}

export interface CreateOrTriggerABuildReturnValue {
	buildId: number
}
