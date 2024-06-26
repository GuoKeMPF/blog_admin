export interface BaseHookType {
	onSuccess?: () => void
	onError?: (error: Error | unknown) => void
	onFinally?: () => void
}

export interface BaseHookReturnType<T> {
	data: T | undefined
	loading: boolean
	isError: boolean
	reFetch: () => void
}
