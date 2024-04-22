import { DraftForm } from "./components";

import React, { Fragment, type FC } from 'react'
import { Metadata } from 'next/types'



export const metadata: Metadata = {
	title: '数据中心 - 添加草稿',
	description: '数据中心 - 编辑草稿',
}

type DraftProps = {}

export const Draft: FC<DraftProps> = ({ }) => {


	return (
		<Fragment>
			<DraftForm />
		</Fragment>
	)
}

export default Draft