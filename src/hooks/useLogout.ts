import { toast } from '@/components/ui'
import { logout } from '@/services'

import { useState } from "react";

interface UseLogoutType {
	onSuccess?: () => void
	onError?: (error: Error) => void
	onFinally?: () => void
}

interface UseLogoutReturnType {
	onLogout: (data: any) => void
	loading: boolean
}

export const useLogout = ({
	onSuccess,
	onError,
	onFinally,
}: UseLogoutType): UseLogoutReturnType => {

	const [loading, setLoading] = useState<boolean>(false)
	const onLogout = async () => {
		setLoading(true)
		try {
			const res = await logout()
			toast({
				title: '退出成功',
				description: '退出成功',
			})
			onSuccess && onSuccess()
		} catch (error: any) {
			toast({
				title: '退出失败',
				description: error.message,
				variant: 'destructive',
			})
			onError && onError(error as Error)
		} finally {
			setLoading(false)
			onFinally && onFinally()
		}
	}

	return { loading, onLogout }
}
