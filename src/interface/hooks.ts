import {
	DashboardResponseType,
	DraftType,
	ID,
	PaginationType,
	PostType,
	RequestPaginationType,
} from '.'

export interface BaseHookType {
	onSuccess?: () => void
	onError?: (error: Error) => void
	onFinally?: () => void
}

interface BaseHookReturnType<T> {
	data: T | undefined
	loading: boolean
	isError: boolean
	reFetch: () => void
}


export interface UseDashboardType extends BaseHookType {
	initValue?: DashboardResponseType
}
export interface UseDashboardReturnType
	extends BaseHookReturnType<DashboardResponseType> { }

export interface UseDraftsType extends BaseHookType {
	params?: RequestPaginationType
}

export interface DraftHooksData extends PaginationType<DraftType> { }
export interface UseDraftsReturnType
	extends BaseHookReturnType<DraftHooksData> { }

export interface UseDraftType extends BaseHookType {
	params: {
		id?: ID
	}
}

export interface UseDraftReturnType
	extends BaseHookReturnType<DraftType | undefined> { }




export interface UsePostsType extends BaseHookType {
	params?: RequestPaginationType
}

export interface UsePostType extends BaseHookType {
	params: {
		id?: ID
	}
}

export interface PostHooksData extends PaginationType<PostType> { }

export interface UsePostsReturnType
	extends BaseHookReturnType<PostHooksData> { }


export interface UsePostReturnType
	extends BaseHookReturnType<PostType | undefined> { }

