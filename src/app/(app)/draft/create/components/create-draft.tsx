'use client'

import { DraftForm } from '../../components'

import { useCreateDraft } from '@/hooks'

import React, { Fragment, type FC } from 'react'

import { useRouter } from 'next/navigation'

export const CreateDraftPage: FC = ({}) => {
	const router = useRouter()

	const onSuccess = () => {
		router.push('/draft')
	}

	const { loading, mutate } = useCreateDraft({ onSuccess })

	return (
		<Fragment>
			<DraftForm loading={loading} onSubmit={mutate} />
		</Fragment>
	)
}

export default CreateDraftPage
