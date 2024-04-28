import { toast } from '@/components/ui'
import {
	BaseHookType,
	DraftParamsType,
	DraftType,
	EditDraftParamsType,
	ID,
	BaseHookReturnType,
	PaginationType,
	RequestPaginationType,
	DeletePostParamsType,
} from '@/interface'
import {
	queryDrafts,
	createDraft,
	updateDraft,
	deleteDraft,
	queryDraft,
} from '@/services'

import { useState, useEffect } from 'react'


export interface DraftsHooksData extends PaginationType<DraftType> { }
export interface UseDraftsReturnType
	extends BaseHookReturnType<DraftsHooksData> { }
export interface UseDraftsType extends BaseHookType {
	params?: RequestPaginationType
}

export const useDrafts = ({
	onSuccess,
	onError,
	onFinally,
	params,
}: UseDraftsType = {}): UseDraftsReturnType => {
	const [data, setData] = useState<DraftsHooksData>({
		count: 0,
		data: [],
		page: params?.page ?? 1,
		size: params?.size ?? 10,
	})
	const [loading, setLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)

	const fetchData = async () => {
		setLoading(true)

		try {
			const response = await queryDrafts(params)
			console.log('fetchData', params);
			setData(response)
			onSuccess && onSuccess()
		} catch (error: any) {
			setIsError(true)
			toast({
				title: '获取列表失败',
				description: error.message,
				variant: 'destructive',
			})
			onError && onError(error as Error)
		} finally {
			setLoading(false)
			onFinally && onFinally()
		}
	}

	useEffect(() => {
		fetchData()
	}, [params])

	const reFetch = () => {
		setIsError(false)
		fetchData()
	}

	return {
		data,
		loading,
		isError,
		reFetch,
	}
}



interface UseDraftType extends BaseHookType {
	params: {
		id?: ID
	}
}

interface UseDraftReturnType
	extends BaseHookReturnType<DraftType | undefined> { }

export const useDraft = ({
	onSuccess,
	onError,
	onFinally,
	params,
}: UseDraftType): UseDraftReturnType => {
	const [data, setData] = useState<DraftType | undefined>()
	const [loading, setLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await queryDraft({ id: params.id! })
			setData(response)
			onSuccess && onSuccess()
		} catch (error: any) {
			setIsError(true)
			toast({
				title: '获取详情失败',
				description: error.message,
				variant: 'destructive',
			})
			onError && onError(error as Error)
		} finally {
			setLoading(false)
			onFinally && onFinally()
		}
	}

	useEffect(() => {
		fetchData()
	}, [params])

	const reFetch = () => {
		setIsError(false)
		fetchData()
	}

	return {
		data,
		loading,
		isError,
		reFetch,
	}
}

interface UseCreateDraftReturnType {
	loading: boolean
	mutate: (data: DraftParamsType) => Promise<void>
}

export const useCreateDraft = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseCreateDraftReturnType => {
	const [loading, setLoading] = useState<boolean>(false)

	const mutate = async (params: DraftParamsType) => {
		setLoading(true)
		try {
			await createDraft(params)
			toast({
				title: '创建草稿成功',
				description: '创建草稿成功',
			})
			onSuccess?.()
		} catch (error: any) {
			toast({
				title: '创建草稿失败',
				description: error.message,
				variant: 'destructive',
			})
			onError?.(error as Error)
		} finally {
			onFinally?.()
			setLoading(false)
		}
	}

	return {
		mutate,
		loading,
	}
}

interface UseEditDraftReturnType {
	loading: boolean
	mutate: (data: EditDraftParamsType) => Promise<void>
}

export const useEditDraft = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseEditDraftReturnType => {
	const [loading, setLoading] = useState<boolean>(false)
	const mutate = async (params: EditDraftParamsType) => {
		setLoading(true)
		try {
			await updateDraft(params)
			toast({
				title: '修改草稿成功',
				description: '修改草稿成功',
			})
			onSuccess?.()
		} catch (error: any) {
			toast({
				title: '修改草稿失败',
				description: error.message,
				variant: 'destructive',
			})
			onError?.(error as Error)
		} finally {
			onFinally?.()
			setLoading(false)
		}
	}

	return {
		mutate,
		loading,
	}
}


interface UseDeleteDraftReturnType {
	loading: boolean
	mutate: (data: DeletePostParamsType) => Promise<void>
}
export const useDeleteDraft = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseDeleteDraftReturnType => {
	const [loading, setLoading] = useState<boolean>(false)
	const mutate = async (params: DeletePostParamsType) => {
		setLoading(true)
		try {
			await deleteDraft(params)
			toast({
				title: '删除草稿成功',
				description: '删除草稿成功',
			})
			onSuccess?.()
		} catch (error: any) {
			toast({
				title: '删除草稿失败',
				description: error.message,
				variant: 'destructive',
			})
			onError?.(error as Error)
		} finally {
			onFinally?.()
			setLoading(false)
		}
	}

	return {
		mutate,
		loading,
	}
}


