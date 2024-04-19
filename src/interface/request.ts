import { NextApiRequestCookies } from "next/dist/server/api-utils"

import { IncomingMessage } from "http"

export type RequestType = IncomingMessage & {
  cookies: NextApiRequestCookies
}

export interface GetSSRHeadersReturn {
  Cookie: string | undefined
}

export type UnAuthCode = 401 | 407


