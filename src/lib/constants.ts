/**
 * 常量配置
 */



import { UnAuthCode } from "@/interface";

/**
 * 请求常量配置
 */
export const unAuthCode: Record<'Unauthorized' | 'ProxyAuthenticationRequired', UnAuthCode> = {
  Unauthorized: 401,
  ProxyAuthenticationRequired: 407
}



/**
 * 环境变量
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const SSR_API_URL = process.env.NEXT_PUBLIC_SSR_API_URL;


/**
 * 移动端导航配置
 */
export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20;


