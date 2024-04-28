import { CreatePostPage } from "./components";

import React, { Fragment, type FC } from 'react'
import { Metadata } from 'next/types'


export const metadata: Metadata = {
	title: '数据中心 - 添加帖子',
	description: '数据中心 - 添加帖子',
}

type CreatePostProps = {

};

export const CreatePost: FC<CreatePostProps> = ({ }) => {
	return <Fragment>
		<CreatePostPage />
	</Fragment>;
};
export default CreatePost