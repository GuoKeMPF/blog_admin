import { EditDraftPage } from './components'

import React, { Fragment, type FC } from 'react'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
	title: '数据中心 - 修改草稿',
	description: '数据中心 - 修改草稿',
}

export const Draft: FC = ({}) => {
	return (
		<Fragment>
			<EditDraftPage />
		</Fragment>
	)
}

export default Draft
