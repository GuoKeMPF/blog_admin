import { CreateDraftPage } from "./components";



import React, { Fragment, type FC } from 'react'
import { Metadata } from 'next/types'




export const metadata: Metadata = {
	title: '数据中心 - 添加草稿',
	description: '数据中心 - 编辑草稿',
}


export const Draft: FC = ({ }) => {


	return (
		<Fragment>
			<CreateDraftPage />
		</Fragment>
	)
}

export default Draft