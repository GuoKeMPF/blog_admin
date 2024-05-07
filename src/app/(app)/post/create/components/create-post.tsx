'use client'

import { PostForm } from '../../components'

import { useCreatePost } from '@/hooks'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'

import React, { Fragment, type FC } from 'react'

import { useRouter } from 'next/navigation'

export const CreatePostPage: FC = ({ }) => {
	const router = useRouter()

	const onSuccess = () => {
		router.back()
	}

	const { loading, mutate } = useCreatePost({ onSuccess })

	return (
		<Fragment>
			<PostForm
				loading={loading}
				onSubmit={mutate}
				title='Create Post'
				actions={
					<Button className='mt-0' onClick={() => router.back()} size={'sm'}>
						Back <Icons.Back />
					</Button>
				} />
		</Fragment>
	)
}

export default CreatePostPage
