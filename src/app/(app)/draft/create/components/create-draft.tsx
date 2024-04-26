'use client'

import { DraftForm } from '../../components'

import { useCreateDraft } from '@/hooks'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'

import React, { Fragment, type FC } from 'react'

import Link from "next/link";
import { useRouter } from 'next/navigation'

export const CreateDraftPage: FC = ({ }) => {
	const router = useRouter()

	const onSuccess = () => {
		router.push('/draft')
	}

	const { loading, mutate } = useCreateDraft({ onSuccess })

	return (
		<Fragment>
			<DraftForm
				loading={loading}
				onSubmit={mutate}
				title='Create Draft'
				actions={
					<Button className='mt-0' asChild size={'sm'}>
						<Link href='/draft'>
							Back <Icons.Back />
						</Link>
					</Button>
				} />
		</Fragment>
	)
}

export default CreateDraftPage
