import { CommonConstructorOptions, ContentTypeHeaders } from "../index";

export class navJoin {
	constructor(options: CommonConstructorOptions);

	/**
	 * This operation provides suggestions for a given query or partial query.
	 */
	getNavJoinResults(options: GetNavJoinResultsOptions): Promise<GetNavJoinResultsReturnValue>;
}

export interface GetNavJoinResultsOptions {
	parameters: GetNavJoinResultsParameters
}

export interface GetNavJoinResults {
  startPoint: string,
  routeMode: string,
  categoryIds: string,
  maxDistance: number,
  maxTime: number,
  routeAvoid: string,
  culture: string,
  departTime: string
}

export interface GetNavJoinResultsReturnValue {
  //TODO
}


