import { OcpApimSubscriptionKeyHeaders, ContentTypeHeaders, CommonConstructorOptions } from "../index";

/**
 * The Recommendations API identifies consumption patterns from your transaction information in order to provide recommendations. 
 * These recommendations can help your customers more easily discover items that they may be interested in.
 * By showing your customers products that they are more likely to be interested in, you will, in turn, increase your sales.
 */
export class recommendations {

	constructor(options: CommonConstructorOptions);

	/**
	 * Cancels an ongoing operation. One example is to cancel a build request that was submitted.
	 */
	cancelOperation(options: CancelOperationOptions): Promise<any>;

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

	/**
	 * You cannot delete an active build, you will get an error. The model should be updated to a different active build before you delete it.
	 * You cannot delete an in-progress build. You should cancel the build first by submitting Cancel Build request.
	 */
	deleteABuild(options: DeleteABuildOptions): Promise<any>;

	/**
	 * Deletes an existing model by ID.
	 */
	deleteAModel(options: DeleteAModelOptions): Promise<any>;

	/**
	 * Delete all rules
	 */
	deleteAllBusinessRules(options: DeleteAllBusinessRulesOptions): Promise<any>;
	
	/**
	 * Deletes all usage file of a model
	 */
	deleteAllUsageFiles(options: DeleteAllUsageFilesOptions): Promise<any>;

	/**
	 * Deletes a rule by ID
	 */
	deleteBusinessRule(options: DeleteBusinessRuleOptions): Promise<any>;
	
	/**
	 * Deletes a set of items from the catalog. 
	 * The set of items should be passed in the request body, unless deleteAll is set to true.
	 */
	deleteCatalogItems(options: DeleteCatalogItemsOptions): Promise<DeleteCatalogItemsReturnValue>;
	
	/**
	 * Deletes a specific usage file
	 */
	deleteUsageFile(options: DeleteUsageFileOptions): Promise<any>;

	/**
	 * Download a specific usage file
	 */
	downloadUsageFile(options: DownloadUsageFileOptions): Promise<string>;
	
	/**
	 * Retrieves information about a model with a given ID.
	 */
	getAModelById(options: GetAModelByIdOptions): Promise<GetAModelByIdReturnValue>;
	
	/**
	 * Get information about an ongoing batch jobs.
	 */
	getAllBatchJobs(options: GetAllBatchJobsOptions): Promise<getAllBatchJobsReturnValue>;
	
	/**
	 * Retrieves information on all builds for a given model.
	 */
	getAllBuilds(options: GetAllBuildsOptions): Promise<GetAllBuildsReturnValue>;

	/**
	 * Retrieves the details of all rules for a model.
	 */
	getAllBusinessRules(options: GetAllBusinessRulesOptions): Promise<GetAllBusinessRulesReturnValue>;
	
	/**
	 * Retrieves a list of catalog items.
	 */
	getAllCatalogItems(options: GetAllCatalogItemsOptions): Promise<GetAllCatalogItemsReturnValue>;
	
	/**
	 * Retrieves all models.
	 */
	getAllModels(options: GetAllModelsOptions): Promise<GetAllModelsReturnValue>;

	/**
	 * Retrieves information about the build, including parameters used to build it.
	 */
	getBuildById(options: GetBuildByIdOptions): Promise<GetBuildByIdReturnValue>;

	/**
	 * Retrieves the statistics about the data used to create a given build of the model.
	 */
	getBuildDataStatistics(options: GetBuildDataStatisticsOptions): Promise<GetBuildDataStatisticsReturnValue>;
	
	/**
	 * Return metrics such as precision and diversity for a given build
	 */
	getBuildMetrics(options: GetBuildMetricsOptions): Promise<GetBuildMetricsReturnValue>;
	
	/**
	 * Retrieves information about a rule
	 */
	getBusinessRule(options: GetBusinessRuleOptions): Promise<GetBusinessRuleReturnValue>;
	
	/**
	 * Get recommendations for one or more items based on a specific build.
	 */
	getItemToItemRecommendations(options: GetItemToItemRecommendationsOptions): Promise<any>;
	
	/**
	 * Get Feature info from given modelId and rankBuildId
	 */
	getModelFeatures(options: GetModelFeaturesOptions): Promise<GetModelFeaturesReturnValue>;
	
	/**
	 * Retrieves the status of an operation given the operation ID. You will need to use this API to track the status of a build operation, for instance.
	 */
	getOperationStatus(options: GetRecommendationOperationStatusOptions): Promise<GetRecommendationOperationStatusReturnValue>;
	
	/**
	 * Search for catalog items.
	 */
	getSpecificCatalogItemsBySearchTerm(options: GetSpecificCatalogItemsBySearchTermOptions): Promise<GetSpecificCatalogItemsBySearchTermReturnValue>;
	
	/**
	 * Gets statistics about the user interactions (usage) during a given time interval for a particular build. 
	 * This can be helpful in order to calculate conversion rates.
	 * */	
	getUsageStatisticsForABuild(options: GetUsageStatisticsForABuildOptions): Promise<GetUsageStatisticsForABuildReturnValue>;
	
	
	/**
	 * Gets statistics about the user interactions (usage) during a given time interval for a particular model.
	 * This can be helpful in order to calculate conversion rates.
	 */
	getUsageStatisticsForAModel(options: GetUsageStatisticsForAModelOptions): Promise<GetUsageStatisticsForAModelReturnValue>;
	
	
	getUserToItemRecommendations(options: GetUserToItemRecommendationsOptions): Promise<any>;
	
	/**
	 * Lists all the usage events files of a model
	 */
	listUsageFiles(options: ListUsageFilesOptions): Promise<ListUsageFilesReturnValue>;
	
	/**
	 * Submits a Batch Execution job.
	 * Currently only one scoring job is allowed at a time.
	 * A batch job input file cannot be more than 2MB.
	 */
	startBatchJob(options: StartBatchJobOptions): Promise<any>;
	
	/**
	 * Updates a set of items in the catalog.
	 * The maximum number of items supported is 100,000.
	 * The maximum size of data that can be sent in a single PATCH call for this API is 200MB.
	 * Do not make concurrent calls to this API. Wait for one call to return before making another call to this API.
	 */
	updateCatalogItems(options: UpdateCatalogItemsOptions): Promise<UpdateCatalogItemsReturnValue>;
	
	/**
	 * Allows you to update the description or the active build for a model.
	 */
	updateModel(options: UpdateModelOptions): Promise<any>;
	
	
	/**
	 * Once you have created a model, you will need to upload catalog data and usage data to it before you can train the system and create a build. 
	 * The catalog data contains information about the items you are offering to your customer.
	 * It needs to be passed as the content of body request and it should follow this format.
	 * < Id>,<Item Name>,<Item Category>,[<Description>],<Features list>
	 */
	uploadACatalogFileToAModel(options: UploadACatalogFileToAModelOptions): Promise<UploadACatalogFileToAModelReturnValue>;

	/**
	 * Upload a usage event to a model. If buildId is set to "-1", the event is ingested against the Active Build of the model. 
	 * Set the buildId is set to null or 0, the events are ingested against the Active build, if Active build doesn't exist, the events are not associated with any build.
	 */
	uploadUsageEvent(options: UploadUsageEventOptions): Promise<UploadUsageEventReturnValue>;
	
	/**
	 * Once you have created a model and uploaded catalog data, you should upload usage data to it before you can train the system and create a build. 
	 * The usage data describes all the transactions that your customers have made in the past; in essence the interactions between users and items.
	 * It needs to be passed as the content of body request and it should follow the format below:
	 * <User Id>,<Item Id>,<Time>,[<Event type>]
	 */
	uploadAUsageFileToAModel(options: UploadAUsageFileToAModelOptions): Promise<UploadAUsageFileToAModelReturnValue>;	
}

export interface CancelOperationOptions {
	parameters: CancelOperationParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface CancelOperationParameters {
	/**
	 * To get the operation ID location, you should check the Operation-Location header that is returned on the response when you are triggering a build.
	 */
	id: string
}

export interface CreateBusinessRuleOptions {
	parameters: CreateBusinessRuleParameters,
	headers?: OcpApimSubscriptionKeyHeaders & ContentTypeHeaders,
	body: CreateBusinessRuleBody
}

export interface CreateBusinessRuleParameters {
	/**
	 * Unique identifier of the model
	 */
	modelId: string
}

export interface CreateBusinessRuleBody {
	type: string,
	parameters: {
		blockList: {
			itemIds: string[]
		},
		whiteList: {
			itemIds: string[]
		},
		upsale: {
			itemIds: string[],
			numberOfItemsToUpsale: number
		},
		perSeedBlockList: {
			seedItemIds: string[],
			itemIds: string[]
		},
		featureBlockList: {
			name: string,
			values: string[]
		},
		featureWhiteList: {
			name: string,
			values: string[]
		}
	}
}

export interface CreateBusinessRuleReturnValue {
	id: number,
	type: string,
	parameters: {
		blockList: {
			itemIds: string[]
		},
		whiteList: {
			itemIds: string[]
		},
		upsale: {
			itemIds: string[],
			numberOfItemsToUpsale: number
		},
		perSeedBlockList: {
			seedItemIds: string[],
			itemIds: string[]
		},
		featureBlockList: {
			name: string,
			values: string[]
		},
		featureWhiteList: {
			name: string,
			values: string[]
		}
	}
}

export interface CreateAModelOptions {
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: CreateAModelBody
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
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: CreateOrTriggerABuildeBody
}

export interface CreateOrTriggerABuildParameters {
	/**
	 * Unique identifier of the model
	 */
	modelId: string
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

export interface DeleteABuildOptions {
	parameters: DeleteABuildParameters,
	headers?: OcpApimSubscriptionKeyHeaders;
}

export interface DeleteABuildParameters {

	/** 
	 * Format - int64. Unique identifier of the build
	*/
	buildId: number,
	
	modelId: string
}

export interface DeleteAModelOptions {
	parameters: DeleteAModelParameters,
	headers?: OcpApimSubscriptionKeyHeaders;
}

export interface DeleteAModelParameters {

	/** 
	 * Unique identifier of the model.
	*/
	id: string
}

export interface DeleteAllBusinessRulesOptions {
	parameters: DeleteAllBusinessRulesParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface DeleteAllBusinessRulesParameters {

	/**
	 * the model id
	 */
	modelId: string
}

export interface DeleteAllUsageFilesOptions {
	parameters: DeleteAllUsageFilesParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface DeleteAllUsageFilesParameters {

	/**
	 * the model id
	 */
	modelId: string
}

export interface DeleteBusinessRuleOptions {
	parameters: DeleteBusinessRuleParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface DeleteBusinessRuleParameters {
	
	/**
	 * the model id
	 */
	modelId: string,

	/**
	 * Format - int64. Unique identifier of the rule
	 */
	ruleId: number
}

export interface DeleteCatalogItemsOptions {
	parameters: DeleteCatalogItemsParameters,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body?: string
}

export interface DeleteCatalogItemsParameters {
	
	/**
	 * Unique identifier of the model. Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50
	 */
	modelId: string,

	/**
	 * If set to true, the entire catalog is deleted, else items received in request body are deleted. Set to false by default.
	 */
	deleteAll?: boolean
}

export interface DeleteCatalogItemsReturnValue {
	
	processedLineCount: number,
	errorLineCount: number,
	deletedItemCount: number,
	errorSummary: {
		errorCode: string,
		errorCodeCount: number
	  }[],
	sampleErrorDetails: {
		errorCode: string,
		errorText: string,
		sampleErrorLines: {
			lineNumber: number,
			lineText: string
		  }
	  }[]
}

export interface DeleteUsageFileOptions {
	parameters: DeleteUsageFileParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface DeleteUsageFileParameters {

	/** 
	 * Unique identifier of the model.
	*/
	modelId: string,

	/** 
	 * The usage file id to delete
	*/
	fileId: string
}

export interface DownloadUsageFileOptions {
	parameters: DownloadUsageFileParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface DownloadUsageFileParameters {

	/** 
	 * Unique identifier of the model.
	*/
	modelId: string,

	/** 
	 * The usage file id to delete
	*/
	fileId: string
}

export interface GetAModelByIdOptions {
	parameters: GetAModelByIdParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetAModelByIdParameters {

	/** 
	 * Unique identifier of the model to be fetched.
	*/
	id: string
}

export interface GetAModelByIdReturnValue {
	id: string,
  	name: string,
	description: string,
	createdDateTime: string,
	activeBuildId: number,
	catalogDisplayName: string														
}

export interface GetAllBatchJobsOptions {
	parameters: GetAllBatchJobsParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface GetAllBatchJobsParameters {
	joiId: string
}

export interface getAllBatchJobsReturnValue {
	batchJobs: {
		id: string,
		requestinfo: {
		input: {
			authenticationType: string,
			baseLocation: string,
			relativeLocation: string,
			sasBlobToken: string
		},
		output: {
			authenticationType: string,
			baseLocation: string,
			relativeLocation: string,
			sasBlobToken: string
		},
		error: {
			authenticationType: string,
			baseLocation: string,
			relativeLocation: string,
			sasBlobToken: string
		},
		job: {
			apiName: string,
			modelId: string,
			buildId: number,
			numberOfResults: number,
			includeMetadata: boolean,
			minimalScore: number
		}
		},
		status: string
	}[]
}

export interface GetAllBuildsOptions {
	parameters: GetAllBuildsParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetAllBuildsParameters {
	
	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/** 
	 * true to return only the last build of the model, false to return all the builds
	*/
	onlyLastRequestedBuild?: boolean

}

export interface GetAllBuildsReturnValue {
	builds: {
		  id: number,
		  description: string,
		  type: string,
		  modelName: string,
		  modelId: string,
		  status: string,
		  statusMessage: string,
		  startDateTime: string,
		  endDateTime: string,
		  modifiedDateTime: string,
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
			  enableModelingInsights: boolean,
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
			  minimalScore: number,
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
			  supportThreshold: number,
			  cooccurrenceUnit: string,
			  similarityFunction: string,
			  enableColdItemPlacement: boolean,
			  enableColdToColdRecommendations: boolean,
			  enableModelingInsights: true,
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
		}[]
}

export interface GetAllBusinessRulesOptions {
	parameters: GetAllBusinessRulesParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetAllBusinessRulesParameters {
	/** 
	 * Unique identifier of the model
	*/
	modelId: string
}

export interface GetAllBusinessRulesReturnValue {
	rules: {
		id: number,
		type: string,
		parameters: {
			blockList: {
				itemIds: string []
			},
			whiteList: {
				itemIds: string[]
			},
			upsale: {
				itemIds: string[],
				numberOfItemsToUpsale: number
			},
			perSeedBlockList: {
				seedItemIds: string[],
				itemIds: string[]
			},
			featureBlockList: {
				name: string,
				values: string[]
			},
			featureWhiteList: {
				name: string,
				values: string[]
			}
		}
	}[]
}

export interface GetAllCatalogItemsOptions{
	parameters: GetAllCatalogItemsParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetAllCatalogItemsParameters {

	/** 
	 * Unique identifier of the model
	*/
	modelId:string,

	/**
	 * Format - int32.
	 */
	$top?: number,

	/** 
	 * Format - int32.
	*/
	$skip?: number,

	/** 
	 * Format - int32.
	*/
	$maxpagesize?: number	
}

export interface GetAllCatalogItemsReturnValue {
	value: {
		  id: string,
		  name: string,
		  category: string,
		  description: string,
		  features: {
			  name: string,
			  value: string
			}[],
		  metadata: string
		}[],
	  "@nextLink": string
}

export interface GetAllModelsOptions {
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetAllModelsReturnValue {
	models: {
		id: string,
		name: string,
		description: string,
		createdDateTime: string,
		activeBuildId: number,
		catalogDisplayName: string
	}[]
}

export interface GetBuildByIdOptions {
	parameters: GetBuildByIdParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface GetBuildByIdParameters {
	
	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/**
	 * Format - int64. Unique identifier of the build
	 */
	buildId: number
}

export interface GetBuildByIdReturnValue {
	id: number,
	description: string,
	type: string,
	modelName: string,
	modelId: string,
	status: string,
	statusMessage: string,
	startDateTime: string,
	endDateTime: string,
	modifiedDateTime: string,
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
		enableModelingInsights: boolean,
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
		minimalScore: number,
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
		supportThreshold: number,
		cooccurrenceUnit: string,
		similarityFunction: string,
		enableColdItemPlacement: boolean,
		enableColdToColdRecommendations: boolean,
		enableModelingInsights: boolean,
		enableU2I: boolean,
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

export interface GetBuildDataStatisticsOptions {
	parameters: GetBuildDataStatisticsParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetBuildDataStatisticsParameters {

	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/** 
	 * Format - int64. Unique identifier of the build
	*/
	buildId: number
}

export interface GetBuildDataStatisticsReturnValue {
	
	/**
	 * Number of items in catalog
	 */
	numberOfCatalogItems: number,

	/** 
	 * Number of items in raw usage file (before any processing)
	*/
	numberOfCatalogItemsInUsage: number,

	/**
	 * Number of users in raw usage file (before any processing)
	 */
	numberOfUsers: number,

	/**
	 * Number of usage records in raw usage file (before any processing)
	 */
	numberOfUsageRecords: number,

	/**
	 * numberOfCatalogItemsInUsage / numberOfCatalogItems
	 */
	catalogCoverage: number,

	/**
	 * Number of items in catalog that were actually used for modelling in the specified build
	 */
	numberOfCatalogItemsInBuild: number,

	/**
	 * Number of users that were actually used for modelling in the specified build
	 */
	numberOfUsersInBuild: number,

	/**
	 * Number of usage records that were actually used for modelling in the specified build
	 */
	numberOfUsageRecordsInBuild: number,

	/**
	 * numberOfCatalogItemsInBuild / numberOfCatalogItems
	 */
	catalogCoverageInBuild: number
}

export interface GetBuildMetricsOptions {
	parameters: GetBuildMetricsParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetBuildMetricsParameters {
	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/** 
	 * Format - int64. Unique identifier of the build
	*/
	buildId: number
}

export interface GetBuildMetricsReturnValue {
	precisionItemRecommend: {
		precisionMetrics: {
			k: number,
			percentage: number,
			usersInTest: number,
			usersConsidered: number,
			usersNotConsidered: number
		  }[],
		error: string
	  },
	  recisionUserRecommend: {
		precisionMetrics: {
			k: number,
			percentage: number,
			usersInTest: number,
			usersConsidered: number,
			usersNotConsidered: number
		  }[],
		error: string
	  },
	  precisionPopularItemRecommend: {
		precisionMetrics: {
			k: number,
			percentage: number,
			usersInTest: number,
			usersConsidered: number,
			usersNotConsidered: number
		}[],
		error: string
	  },
	  diversityItemRecommend: {
		percentileBuckets: {
			min: number,
			max: number,
			percentage: number
		  }[],
		totalItemsRecommended: number,
		uniqueItemsRecommended: number,
		uniqueItemsInTrainSet: number,
		error: string
	  },
	  diversityUserRecommend: {
		percentileBuckets: {
			min: number,
			max: number,
			percentage: number
		  }[],
		totalItemsRecommended: number,
		uniqueItemsRecommended: number,
		uniqueItemsInTrainSet: number,
		error: string
	  }
}

export interface GetBusinessRuleOptions {
	parameters: GetBusinessRuleParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetBusinessRuleParameters {
	
	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/** 
	 * Format - int64. Unique identifier of the rule
	*/
	ruleId: number
}

export interface GetBusinessRuleReturnValue {
	id: number,
	type: string,
	parameters: {
		blockList: {
			itemIds: string[]
		},
		whiteList: {
			itemIds: string[]
		},
		upsale: {
			itemIds: string[],
			numberOfItemsToUpsale: number
		},
		perSeedBlockList: {
			seedItemIds: string[],
			itemIds: string[]
		},
		featureBlockList: {
			name: string,
			values: string[]
		},
		featureWhiteList: {
			name: string,
			values: string[]
		}
	}
}


export interface GetItemToItemRecommendationsOptions {
	parameters: GetItemToItemRecommendationsParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetItemToItemRecommendationsParameters {
	modelId: string,
	itemsIds: string[],
	numberOfResults: number,
	minimalScore: number,
	includeMeradata?: boolean,
	buildId?: number
}

export interface GetModelFeaturesOptions {
	parameters: GetModelFeaturesParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetModelFeaturesParameters {

	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/**
	 * Format - int64. The buildId used for the ranking request.
	 */
	rankBuildId?: number
}

export interface GetModelFeaturesReturnValue {
	rankBuildId: number,
  	rankBuildDate: string,
	features: {
		featureName: string,
		rank: number
	}[]
}

export interface GetRecommendationOperationStatusOptions {
	parameters: GetRecommendationOperationStatusParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetRecommendationOperationStatusParameters {
	
	/** 
	 * Operation ID
	*/
	id: string
}

export interface GetRecommendationOperationStatusReturnValue {
	type: string,
	status: string,
	createdDateTime: string,
	lastActionDateTime: string,
	percentComplete: number,
	message: string,
	resourceLocation: string,
	result: {
		id: number,
		description: string,
		type: string,
		modelName: string,
		modelId: string,
		status: string,
		statusMessage: string,
		startDateTime: string,
		endDateTime: string,
		modifiedDateTime: string,
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
				enableModelingInsights: boolean,
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
				minimalScore: number,
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
				supportThreshold: number,
				cooccurrenceUnit: string,
				similarityFunction: string,
				enableColdItemPlacement: boolean,
				enableColdToColdRecommendations: boolean,
				enableModelingInsights: boolean,
				enableU2I: boolean,
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
}

export interface GetSpecificCatalogItemsBySearchTermOptions {
	parameters: GetSpecificCatalogItemsBySearchTermParameters,
	headers: OcpApimSubscriptionKeyHeaders
}

export interface GetSpecificCatalogItemsBySearchTermParameters {

	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/**
	 * The ids of the catalog items to retrieve
	 */
	ids?: string,

	/** 
	 * The search term to filter by catalog items by
	*/
	searchTerm?: string
}

export interface GetSpecificCatalogItemsBySearchTermReturnValue {
	value: {
		id: string,
		name: string,
		category: string,
		description: string,
		features: {
			name: string,
			value: string
		  }[],
		metadata: string
	}[],
	"@nextLink": string
}

export interface GetUsageStatisticsForABuildOptions {
	parameters: GetUsageStatisticsForABuildParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetUsageStatisticsForABuildParameters {

	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/**
	 * Format - int64. Unique identifier of the build
	 */
	buildId?: number,

	/** 
	 * It specifies the start and end date in ISO 8601 format. 
	 * For instance: "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z"
	*/
	interval?: string,

	/**
	 * Comma separated list of "EventTypes". Empty string or null to get all events
	 */
	eventTypes?: string
}

export interface GetUsageStatisticsForABuildReturnValue {
	interval: string,
	buildId: number,
	statistic: {
		eventType: string,
		count: number
	}
}

export interface GetUsageStatisticsForAModelOptions {
	parameters: GetUsageStatisticsForAModelParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetUsageStatisticsForAModelParameters {
	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/** 
	 * It specifies the start and end date in ISO 8601 format. 
	 * For instance: "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z"
	*/
	interval?: string,

	/**
	 * Comma separated list of "EventTypes". Empty string or null to get all events
	 */
	eventTypes?: string
}

export interface GetUsageStatisticsForAModelReturnValue {
	interval: string,
  	statistics: {
      eventType: string,
      count: number
    }
}

export interface GetUserToItemRecommendationsOptions {
	parameters: GetUserToItemRecommendationsParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface GetUserToItemRecommendationsParameters {
	/** 
	 * Unique identifier of the model
	*/
	modelId: string,

	/**
	 * Unique user identifier.
	 */
	userId: string,

	/**
	 * Number of recommended items to return.
	 */
	numberOfResults: number,

	/**
	 * The unique identifiers of the items to consider in addition to user history.
	 */
	itemsIds?: string[],

	/**
	 * Set to false. (For future use)
	 */
	includeMetadata?: boolean,

	/**
	 * Format - int64. Unique identifier of the build
	 */
	buildId?: number,
}

export interface ListUsageFilesOptions {
	parameters: ListUsageFilesParameters,
	headers?: OcpApimSubscriptionKeyHeaders
}

export interface ListUsageFilesParameters {
	/** 
	 * Unique identifier of the model
	*/
	modelId: string
}

export interface ListUsageFilesReturnValue {
	items:{
		fileId: string,
		usageDisplayName: string,
		sizeInMegabytes: number,
		dateModified: string,
		usedInModel:boolean
	}[]
}

export interface StartBatchJobOptions {
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: StartBatchJobBody
}

export interface StartBatchJobBody {
	input: {
		authenticationType: string,
		baseLocation: string,
		relativeLocation: string,
		sasBlobToken: string
	},
	output: {
		authenticationType: string,
		baseLocation: string,
		relativeLocation: string,
		sasBlobToken: string
	},
	error: {
		authenticationType: string,
		baseLocation: string,
		relativeLocation: string,
		sasBlobToken: string
	},
	job: {
		apiName: string,
		modelId: string,
		buildId: number,
		numberOfResults: number,
		includeMetadata: boolean,
		minimalScore: number
	}
}

export interface UpdateCatalogItemsOptions {
	parameters: UpdateCatalogItemsParameters,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: { "url"?: string } | any
}

export interface UpdateCatalogItemsParameters {
	/** 
	 * Unique identifier of the model
	 * Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50",
	*/
	modelId: string
}

export interface UpdateCatalogItemsReturnValue {
	processedLineCount: number,
	addedItemCount: number,
	updatedItemCount: number,
	errorLineCount: number,
	errorSummary: {
		errorCode: string,
		errorCodeCount: number
	}[],
	sampleErrorDetails: {
		errorCode: string,
		errorText: string,
		sampleErrorLines: {
			lineNumber: number,
			lineText: string
		}[]
	}
}

export interface UpdateModelOptions {
	parameters: UpdateModelParameters,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: UpdateModelBody
}

export interface UpdateModelParameters {
	/** 
	 * Unique identifier of the model
	*/
	id: string
}

export interface UpdateModelBody {
	description: string,
    activeBuildId: number
}

export interface UploadACatalogFileToAModelOptions {
	parameters: UploadACatalogFileToAModelParameters,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: { "url"?: string } | any
}

export interface UploadACatalogFileToAModelParameters {

	/**
	 * Unique identifier of the model. Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50
	 */
	modelId: string,

	/**
	 * Display name of the catalog data. e.g. "CatalogFile1" Only letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscore (_) are allowed. Max length: 50 
	 */
	catalogDisplayName: string
}

export interface UploadACatalogFileToAModelReturnValue {
	processedLineCount: number,
	errorLineCount: number,
	importedLineCount: number,
	errorSummary: {
		errorCode: string,
		errorCodeCount: number
	}[],
	sampleErrorDetails: {
		errorCode: string,
		errorText: string,
		sampleErrorLines: {
			lineNumber: number,
			lineText: string
		}[]
	}[]
}

export interface UploadUsageEventOptions {
	parameters: UploadUsageEventParameters,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders,
	body: { "url"?: string } | any
}

export interface UploadUsageEventParameters {
	
	/**
	 * Unique identifier of the model.
	 */
	modelId: string
}

export interface UploadUsageEventReturnValue {
	userId: string,
	buildId?: number,
	events: {
		eventType: string,
		itemId: string,
		timestamp: string,
		count: number,
		unitPrice: number
	}[]		
}

export interface UploadAUsageFileToAModelOptions {
	parameters: UploadAUsageFileToAModelParameters,
	headers?: ContentTypeHeaders & OcpApimSubscriptionKeyHeaders
	body: { "url"?: string } | any
}

export interface UploadAUsageFileToAModelParameters {

	/**
	 * Unique identifier of the model.
	 */
	modelId:string,

	/**
	 * Display name of the usage data. 
	 * e.g. "UsageFile1" Only letters(A-Z, a-z), numbers(0-9), hyphens(-) and underscore(_) are allowed. Max length: 50
	 */
	usageDisplayName: string
}

export interface UploadAUsageFileToAModelReturnValue {
	fileId: string,
	processedLineCount: number,
	errorLineCount: number,
	importedLineCount: number,
	errorSummary: {
		errorCode: string,
		errorCodeCount: number
		}[],
	sampleErrorDetails: {
		errorCode: string,
		errorText: string,
		sampleErrorLines: {
			lineNumber: number,
			lineText: string
		}[]
	}
}