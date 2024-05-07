/**
 * 服务端需要先获取用户在请求头的认证信息，带着这个认证信心，去调接口
 */

import { GetSSRHeadersReturn, RequestType } from "@/interface"

export const getSSRHeaders = (req: RequestType): GetSSRHeadersReturn => {
  return { Cookie: req.headers.cookie }
}



