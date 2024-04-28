import { EditPostPage } from './components'

import React, { Fragment, type FC } from 'react'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
	title: '数据中心 - 修改帖子',
	description: '数据中心 - 修改帖子',
}

export const EditPost: FC = ({ }) => {
	return <Fragment><EditPostPage /></Fragment>;
};
export default EditPost