import { API_URL, SSR_API_URL, getSession, sessionKeys, unAuthCodeSet } from "@/lib";

import axios, { AxiosRequestConfig } from "axios";
import { redirect } from 'next/navigation'

const instance = axios.create({
	baseURL: API_URL,
	timeout: 60000,
	withCredentials: true, // send cookies when cross-domain requests
});

export const errorHandler = (error: any) => {
	const httpResponseCode = error?.response?.status
	if (unAuthCodeSet.has(httpResponseCode)) {
		console.log('redirect');
		redirect('/user/login');
	}
}
instance.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	const { headers = {} }: { headers?: any } = config;
	const csrftoken: string | undefined = getSession(sessionKeys.csrftoken);
	if (csrftoken) {
		headers['X-CSRFToken'] = csrftoken;
	}
	config.headers = headers;
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});


instance.interceptors.response.use(
	async (response) => {
		return response.data;
	},
	(error) => {
		errorHandler(error)
		return Promise.reject(error);
	}
);

export const fetch = async (
	url: string,
	config?: AxiosRequestConfig
): Promise<any> => {
	const res = await instance(url, config);
	return res;
};

/**
 * @param url Required request url
 * @param params Optional the params with get request
 * @param options Optional something config for request
 * @returns promise
 */
export const Get = async (
	url: string,
	params?: Record<string, any>,
	options?: Record<string, any>,
): Promise<any> =>
	instance(url, {
		method: 'get',
		params,
		...options,
	});

/**
 * @param url Required request url
 * @param data Optional the params with post request
 * @param options Optional something config for request
 * @returns promise
 */
export const Post = async (
	url: string,
	data?: Record<string, any>,
	options?: Record<string, any>,
): Promise<any> =>
	instance(url, {
		method: 'post',
		data,
		...options,
	});

/**
 * @param url Required, request url
 * @param param1
 * @param data Optional, the params with post request
 * @param options Optional something config for request
 * @returns promise
 */
export const Put = async (url: string, data?: Record<string, any>, options?: Record<string, any>) =>
	instance(url, {
		method: 'put',
		data,
		...options,
	});

/**
 * @param url Required, request url
 * @param data Optional, the params with delete request
 * @param options Optional something config for request
 * @returns
 */
export const Delete = async (
	url: string,
	data?: Record<string, any>,
	options?: Record<string, any>,
) =>
	instance(url, {
		method: 'delete',
		data,
		...options,
	});

/**
 * @param url Required, request url
 * @param data Optional, the data with delete request
 * @param options Optional something config for request
 * @returns
 */
export const Upload = async (url: string, data?: FormData, options?: Record<string, any>) =>
	instance(url, {
		method: 'post',
		data,
		...options,
	});





const SSRinstance = axios.create({
	baseURL: SSR_API_URL,
	timeout: 60000,
	withCredentials: true, // send cookies when cross-domain requests
});

SSRinstance.interceptors.response.use(
	async (response) => {
		return response.data;
	},
	(error) => {
		// !todo
		// 在这个地方调用和在后面调用为啥还不一样
		// errorHandler(error)
		return Promise.reject(error);
	}
);

/**
 * @param url Required request url
 * @param params Optional the params with get request
 * @param options Optional something config for request
 * @returns promise
 */
export const SSRGet = (
	url: string,
	params?: Record<string, any>,
	options?: Record<string, any>,
): Promise<any> =>
	SSRinstance(url, {
		method: 'get',
		params,
		...options,
	});


export default instance;
