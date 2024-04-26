'use client'

import { DraftForm } from '../../../components'

import { Error } from '@/components/error'
import { Loading } from '@/components/loading'
import { useEditDraft, useDraft } from '@/hooks'

import { DraftParamsType, ID } from '@/interface'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'

import React, { Fragment, useMemo, type FC } from 'react'

import { useRouter, useParams } from 'next/navigation'

import Link from 'next/link'

export const EditDraftPage: FC = ({ }) => {
	const router = useRouter()
	const urlParams = useParams()

	const onSuccess = () => {
		router.push('/draft')
	}

	const { data, isError, loading: loadingPreview } = useDraft({ params: urlParams })

	const { loading, mutate } = useEditDraft({ onSuccess })

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
			<DraftForm
				initValues={data}
				loading={loading || loadingPreview}
				onSubmit={onSubmit}
				title='Edit Draft'
				actions={
					<Button className='mt-0' asChild size={'sm'}>
						<Link href='/draft'>
							Back <Icons.Back />
						</Link>
					</Button>}
			/>
		</Fragment>
	)
}

export default EditDraftPage
