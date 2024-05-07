import { toast } from '@/components/ui'
import {
	BaseHookType,
	PostParamsType,
	PostType,
	EditPostParamsType,
	ID,
	RequestPaginationType,
	PaginationType,
	BaseHookReturnType,
	DeleteDraftParamsType,
} from '@/interface'
import {
	queryPosts,
	createPost,
	updatePost,
	deletePost,
	queryPost,
} from '@/services'

import { useState, useEffect } from 'react'



export interface UsePostsType extends BaseHookType {
	params?: RequestPaginationType
}

export interface PostsHooksData extends PaginationType<PostType> { }

export interface UsePostsReturnType
	extends BaseHookReturnType<PostsHooksData> { }

export const usePosts = ({
	onSuccess,
	onError,
	onFinally,
	params,
}: UsePostsType = {}): UsePostsReturnType => {
	const [data, setData] = useState<PostsHooksData>({
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
			const response = await queryPosts(params)
			setData(response)
			onSuccess && onSuccess()
		} catch (error: any) {
			setIsError(true)
			toast({
				title: '获取帖子列表失败',
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



export interface UsePostType extends BaseHookType {
	params: {
		id?: ID
	}
}
export interface UsePostReturnType
	extends BaseHookReturnType<PostType | undefined> { }

export const usePost = ({
	onSuccess,
	onError,
	onFinally,
	params,
}: UsePostType): UsePostReturnType => {
	const [data, setData] = useState<PostType | undefined>()
	const [loading, setLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await queryPost({ id: params.id! })
			setData(response)
			onSuccess && onSuccess()
		} catch (error: any) {
			setIsError(true)
			toast({
				title: '获取帖子详情失败',
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

interface UseCreatePostReturnType {
	loading: boolean
	mutate: (data: PostParamsType) => Promise<void>
}

export const useCreatePost = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseCreatePostReturnType => {
	const [loading, setLoading] = useState<boolean>(false)

	const mutate = async (params: PostParamsType) => {
		setLoading(true)
		try {
			await createPost(params)
			toast({
				title: '创建帖子成功',
				description: '创建帖子成功',
			})
			onSuccess?.()
		} catch (error: any) {
			toast({
				title: '创建帖子失败',
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

interface UseEditPostReturnType {
	loading: boolean
	mutate: (data: EditPostParamsType) => Promise<void>
}

export const useEditPost = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseEditPostReturnType => {
	const [loading, setLoading] = useState<boolean>(false)
	const mutate = async (params: EditPostParamsType) => {
		setLoading(true)
		try {
			await updatePost(params)
			toast({
				title: '修改帖子成功',
				description: '修改帖子成功',
			})
			onSuccess?.()
		} catch (error: any) {
			toast({
				title: '修改帖子失败',
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


interface UseDeletePostReturnType {
	loading: boolean
	mutate: (data: DeleteDraftParamsType) => Promise<void>
}
export const useDeletePost = ({
	onSuccess,
	onError,
	onFinally,
}: BaseHookType = {}): UseDeletePostReturnType => {
	const [loading, setLoading] = useState<boolean>(false)
	const mutate = async (params: DeleteDraftParamsType) => {
		setLoading(true)
		try {
			await deletePost(params)
			toast({
				title: '删除帖子成功',
				description: '删除帖子成功',
			})
			onSuccess?.()
		} catch (error: any) {
			toast({
				title: '删除帖子失败',
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


