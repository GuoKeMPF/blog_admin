'use client'

import { DraftForm } from '../../components'

import { useCreateDraft } from '@/hooks'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'

import React, { Fragment, type FC } from 'react'

import { useRouter } from 'next/navigation'

export const CreateDraftPage: FC = ({ }) => {
	const router = useRouter()

	const onSuccess = () => {
		router.back()
	}

	const { loading, mutate } = useCreateDraft({ onSuccess })

	return (
		<Fragment>
			<DraftForm
				loading={loading}
				onSubmit={mutate}
				title='Create Draft'
				actions={
					<Button className='mt-0' onClick={() => router.back()} size={'sm'}>
						Back <Icons.Back />
					</Button>
				} />
		</Fragment>
	)
}

export default CreateDraftPage
