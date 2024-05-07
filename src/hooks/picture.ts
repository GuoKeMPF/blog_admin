import { toast } from '@/components/ui'
import {
	BaseHookType,
	RequestPaginationType,
	PaginationType,
	BaseHookReturnType,
	PictureType,
	PictureParamsType,
	DeletePictureParamsType,
} from '@/interface'
import {
	queryPictures,
	createPictures,
	deletePicture,
} from '@/services'

import { useState, useEffect } from 'react'

export interface UsePicturesType extends BaseHookType {
	params?: RequestPaginationType
}
interface PicturesHooksData extends PaginationType<PictureType> { }

interface UsePicturesReturnType extends BaseHookReturnType<PicturesHooksData> { }

export const usePictures = ({
	onSuccess,
	onError,
	onFinally,
	params,
}: UsePicturesType = {}): UsePicturesReturnType => {
	const [data, setData] = useState<PicturesHooksData>({
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
			const response = await queryPictures(params)
			setData(response)
			onSuccess && onSuccess()
		} catch (error: any) {
			setIsError(true)
			toast({
				title: '获取图片失败',
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
	mutate: (data: PictureParamsType) => Promise<void>
}
export const useCreatePictures = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseCreateDraftReturnType => {
	const [loading, setLoading] = useState<boolean>(false)

	const mutate = async (data: PictureParamsType) => {
		setLoading(true)
		try {
			const params = new FormData();
			const { description, file = [] } = data;
			params.append('description', description);
			file.forEach((f) => {
				params.append('file', f);
			});
			await createPictures(params)
			onSuccess?.()
		} catch (error) {
			console.log(error);
			onError?.(error as any)
		} finally {
			setLoading(false)
			onFinally?.()
		}
	}

	return {
		loading,
		mutate,
	}
}



interface UseDeletePictureReturnType {
	loading: boolean
	mutate: (data: DeletePictureParamsType) => Promise<void>
}
export const useDeletePicture = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseDeletePictureReturnType => {
	const [loading, setLoading] = useState<boolean>(false)

	const mutate = async (data: DeletePictureParamsType) => {
		try {
			await deletePicture(data)
			onSuccess?.()
		} catch (error) {
			onError?.(error)
		} finally {
			setLoading(false)
			onFinally?.()
		}
	}

	return {
		loading,
		mutate,
	}
}



