
import { UserInfoType } from '@/interface'
import { getUserInfo } from '@/services'

import { useEffect, useState } from 'react'

interface UseUserInfoType {
	onSuccess?: () => void
	onError?: (error: Error) => void
	onFinally?: () => void
}

interface UseLoginReturnType {
	userInfo: UserInfoType | undefined,
	loading: boolean
}

export const useUserInfo = ({
	onSuccess,
	onError,
	onFinally,
}: UseUserInfoType): UseLoginReturnType => {
	const [loading, setLoading] = useState<boolean>(false)
	const [userInfo, setUserInfo] = useState<UserInfoType>()

	const getUser = async () => {
		setLoading(true)
		try {
			const res = await getUserInfo()
			setUserInfo(res)
			setLoading(false)
			onSuccess && onSuccess()
		} catch (error: any) {
			onError && onError(error as Error)
		} finally {
			onFinally && onFinally()
			setLoading(false)
		}
	}

	useEffect(() => {
		getUser()
	}, [])


	return { loading, userInfo }
}
