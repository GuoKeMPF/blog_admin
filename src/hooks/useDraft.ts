import { toast } from '@/components/ui'
import { UseDraftType, UseDraftReturnType, DraftHooksData } from '@/interface'
import { queryDrafts } from '@/services'

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
