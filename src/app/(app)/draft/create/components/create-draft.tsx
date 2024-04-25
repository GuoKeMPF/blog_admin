"use client"

import { DraftForm } from "./";

import { useCreateDraft } from "@/hooks";

import React, { Fragment, type FC } from 'react'


export const CreateDraftPage: FC = ({ }) => {

	const onSuccess = () => {
		console.log('success')
	}

	const { loading, mutate } = useCreateDraft({ onSuccess })

	return (
		<Fragment>
			<DraftForm loading={loading} onSubmit={mutate} />
		</Fragment>
	)
}

export default CreateDraftPage