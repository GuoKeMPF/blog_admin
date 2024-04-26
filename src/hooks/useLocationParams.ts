
import { transformParamsToUrl, transformUrlToParams } from '@/lib'


import { useParams, useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";


export const useLocationParams = () => {

	const urlParams = useSearchParams();
	const router = useRouter();
	const path = usePathname();


	const [pagination, setPagination] = useState(() => {
		const page = (urlParams.get('pg') ?? 1) as number
		const pageSize = (urlParams.get('ps') ?? 10) as number || 10
		return {
			pageIndex: page - 1,
			pageSize: pageSize,
		}
	})
	const [otherParams, setOtherParams] = useState<Record<string, string | number>>(() => {
		const paramsObject: any = {};
		// 遍历URLSearchParams对象的所有参数，并将它们添加到对象中
		for (const [key, value] of urlParams) {
			if (key !== 'pg' && key !== 'ps') {
				paramsObject[key] = value;
			}
		}
		const paramsObj: Record<string, any> = { ...paramsObject, };
		return transformUrlToParams(paramsObj)
	})

	const locationParams = useMemo(() => {
		const urlParams = transformParamsToUrl(otherParams)
		const paramsObj: Record<string, any> = { ...urlParams, pg: pagination.pageIndex + 1, ps: pagination.pageSize, };
		return paramsObj
	}, [otherParams, pagination]);

	const params = useMemo(() => {
		return transformUrlToParams(locationParams)
	}, [locationParams])

	useEffect(() => {
		const createQueryString = (param: Record<string, any>) => {
			const p = new URLSearchParams(param)
			return p.toString()
		}
		const urlParams = createQueryString(locationParams)
		router.push(`${path}?${urlParams}`)
	}, [locationParams])


	return { params, pagination, setPagination }

}

