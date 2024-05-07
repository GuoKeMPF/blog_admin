import { UseDashboardReturnType, UseDashboardType } from '@/hooks'
import { SSRGetDashboard, errorHandler } from '../'

import { DashboardResponseType } from '@/interface'

export const ssrDashboard = async ({
	onSuccess,
	onError,
	onFinally,
	initValue,
}: UseDashboardType = {}): Promise<
	Pick<UseDashboardReturnType, 'isError' | 'data'>
> => {
	let data: DashboardResponseType | undefined = initValue
	let loading: boolean = false
	let isError: boolean = false

	const fetchData = async () => {
		loading = true
		try {
			data = await SSRGetDashboard()
			onSuccess && onSuccess()
		} catch (error) {
			isError = true
			onError && onError(error as Error)
			// 需要手动添加一下错误处理
			errorHandler(error)
		} finally {
			loading = false
			onFinally && onFinally()
		}
	}

	if (!initValue) {
		await fetchData()
	}

	const reFetch = () => {
		isError = false
		fetchData()
	}

	return {
		data,
		isError,
	}
}
