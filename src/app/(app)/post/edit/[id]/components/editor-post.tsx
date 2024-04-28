'use client'

import { PostForm } from '../../../components'

import { Error } from '@/components/error'
import { Loading } from '@/components/loading'
import { useEditPost, usePost } from '@/hooks'

import { DraftParamsType, ID } from '@/interface'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'

import React, { Fragment, type FC } from 'react'

import { useRouter, useParams } from 'next/navigation'


export const EditPostPage: FC = ({ }) => {
	const router = useRouter()
	const urlParams = useParams()

	const onSuccess = () => {
		router.back()
	}

	const { data, isError, loading: loadingPreview } = usePost({ params: urlParams })

	const { loading, mutate } = useEditPost({ onSuccess })

	const onSubmit = (data: DraftParamsType) => {
		mutate({ id: urlParams.id! as ID, ...data })
	}

	if (loadingPreview) {
		return <Loading />
	}

	if (isError) {
		return <Error />
	}

	return (
		<Fragment>
			<PostForm
				initValues={data}
				loading={loading || loadingPreview}
				onSubmit={onSubmit}
				title='Edit Draft'
				actions={
					<Button className='mt-0' onClick={() => router.back()} size={'sm'}>
						Back <Icons.Back />
					</Button>}
			/>
		</Fragment>
	)
}

export default EditPostPage
