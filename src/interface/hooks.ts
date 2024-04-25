import { DashboardResponseType, DraftType, PaginationType, RequestPaginationType, } from ".";


export interface BaseHookType {
	onSuccess?: () => void;
	onError?: (error: Error) => void;
	onFinally?: () => void;
}

interface BaseHookReturnType<T> {
	data: T | undefined;
	loading: boolean;
	isError: boolean;
	reFetch: () => void;
}

export interface UseDashboardType extends BaseHookType {
	initValue?: DashboardResponseType;
}
export interface UseDashboardReturnType extends BaseHookReturnType<DashboardResponseType> { }


export interface UseDraftType extends BaseHookType {
	params?: RequestPaginationType
}
export interface DraftHooksData extends PaginationType<DraftType> {

}
export interface UseDraftReturnType extends BaseHookReturnType<DraftHooksData> {
}



