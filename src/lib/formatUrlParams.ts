

type ShortKeys = 'pg' | 'ps' | 't' | 'des'
type ShortValue = 'page' | 'size' | 'title' | 'description'

const mapObj: Record<ShortKeys, ShortValue> = {
	pg: 'page',
	ps: 'size',
	t: 'title',
	des: 'description'
}

const shortKeyMap = new Map<ShortKeys, ShortValue>()
const shortValueMap = new Map<ShortValue, ShortKeys>()

for (const key in mapObj) {
	if (Object.prototype.hasOwnProperty.call(mapObj, key)) {
		const element = mapObj[key as ShortKeys];
		shortKeyMap.set(key as ShortKeys, element)
		shortValueMap.set(element, key as ShortKeys)
	}
}

/**
 * 将 url 里面的短参 转换成正常请求参数
 * @param params url 里面短参数 按照 mapObj 映射关系进行转换
 * @returns 请求需要的正常的参数
 * @example
 * // 示例输入
 * transformUrlToParams({ pg: 1, size: 10 })
 * // 示例输出
 * { page: 1, size: 10 }
 */
export const transformUrlToParams = (params: Record<string, string | number>) => {
	const newParams: Record<string, string | number> = {}
	for (const key in params) {
		if (Object.prototype.hasOwnProperty.call(params, key)) {
			const element = params[key];
			const shortKey = shortKeyMap.get(key as ShortKeys)
			if (shortKey) {
				newParams[shortKey] = element
			}
		}
	}
	return newParams
}

/**
 * 将请求参数 转换 url 里面的短参
 * @param params 请求参数 按照 mapObj 映射关系进行转换
 * @returns 请求需要的正常的参数
 * @example
 * // 示例输入
 * transformUrlToParams({ pg: 1, size: 10 })
 * // 示例输出
 * { page: 1, size: 10 }
 */
export const transformParamsToUrl = (params: Record<string, string | number>) => {
	const newParams: Record<string, string | number> = {}
	for (const key in params) {
		if (Object.prototype.hasOwnProperty.call(params, key)) {
			const element = params[key];
			const shortKey = shortValueMap.get(key as ShortValue)
			if (shortKey) {
				newParams[shortKey] = element
			}
		}
	}
	return newParams
}




