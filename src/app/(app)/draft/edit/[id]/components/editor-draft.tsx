'use client'

import { DraftForm } from '../../../components'

import { Error } from '@/components/error'
import { Loading } from '@/components/loading'
import { useEditDraft, useDraft } from '@/hooks'

import { DraftParamsType } from '@/interface'

import React, { Fragment, useMemo, type FC } from 'react'

import { useRouter, useParams } from 'next/navigation'

export const EditDraftPage: FC = ({}) => {
	const router = useRouter()
	const urlParams = useParams()

	const onSuccess = () => {
		router.push('/draft')
	}

	const params = useMemo(() => {
		console.log(urlParams)
		return { id: '1' }
	}, [])

	const { data, isError, loading: loadingPreview } = useDraft({ params })

	const { loading, mutate } = useEditDraft({ onSuccess })

	const onSubmit = (data: DraftParamsType) => {
		mutate({ id: params.id, ...data })
	}

	if (loadingPreview) {
		return <Loading />
	}

	if (isError) {
		return <Error />
	}

	return (
		<Fragment>
			<DraftForm
				initValues={data}
				loading={loading || loadingPreview}
				onSubmit={onSubmit}
			/>
		</Fragment>
	)
}

export default EditDraftPage
