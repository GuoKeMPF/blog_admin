import { toast } from '@/components/ui'
import { UseDraftType, UseDraftReturnType, DraftHooksData, BaseHookType, DraftParamsType } from '@/interface'
import { queryDrafts, createDraft, updateDraft, deleteDraft } from '@/services'

import { useState, useEffect } from 'react'

export const useDraft = ({
	onSuccess,
	onError,
	onFinally,
	params,
}: UseDraftType = {}): UseDraftReturnType => {
	const [data, setData] = useState<DraftHooksData>({
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

interface UseCreateDraftReturnType {
	loading: boolean,
	mutate: (data: DraftParamsType) => Promise<void>,
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

