import { Table } from './components'

import { Metadata } from 'next/types'
import React, { Fragment, type FC } from 'react'


export const metadata: Metadata = {
	title: '数据中心 - 帖子',
	description: '数据中心 - 帖子',
}

type PostProps = {}

export const Post: FC<PostProps> = ({ }) => {
	return <Fragment>
		<Table />
	</Fragment>
}

export default Post
