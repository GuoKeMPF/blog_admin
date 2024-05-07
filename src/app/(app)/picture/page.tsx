import { PictureContent } from './components'

import { Metadata } from 'next/types'
import React, { Fragment, type FC } from 'react'

export const metadata: Metadata = {
	title: '数据中心 - 图片',
	description: '数据中心 - 图片',
}

export const Picture: FC = async () => {
	return <Fragment>
		<PictureContent />
	</Fragment>
}
export default Picture
