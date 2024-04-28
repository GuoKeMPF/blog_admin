import { toast } from "@/components/ui"
import { BaseHookType, BaseHookReturnType, AudioType, AudiosType, RequestPaginationType, PaginationType, DeleteAudioParamsType } from "@/interface"
import { queryAudios } from "@/services"

import { useEffect, useState } from "react"



export interface UseAudiosType extends BaseHookType {
	params?: RequestPaginationType
}


interface AudiosHooksData extends PaginationType<AudiosType> { }

interface UseAudiosReturnType
	extends BaseHookReturnType<AudiosHooksData> { }

export const useAudios = ({
	onSuccess,
	onError,
	onFinally,
	params,
}: UseAudiosType = {}): UseAudiosReturnType => {

	const [data, setData] = useState<AudiosHooksData>({
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
			const response = await queryAudios(params)
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



interface UseDeleteAudioReturnType {
	loading: boolean
	mutate: (data: DeleteAudioParamsType) => Promise<void>
}
export const useDeleteAudio = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseDeleteAudioReturnType => {
	const [loading, setLoading] = useState<boolean>(false)

	const mutate = async (data: DeleteAudioParamsType) => { }

	return {
		loading,
		mutate,
	}
}
