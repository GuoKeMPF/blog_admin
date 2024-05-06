'use client'

import { AudioParamsType } from '@/interface'
import { UploadDrag } from '@/components/form-filed'

import {
	Card,
	CardHeader,
	CardContent,
	Button,
	Input,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	CardFooter,
} from '@/components/ui'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import React, { Fragment, ReactNode, type FC } from 'react'

const FormSchema = z.object({
	description: z.string().min(1, {
		message: 'Description is required',
	}),
	file: z.any().optional(),
})

const defaultValues: AudioParamsType = {
	description: '',
	file: [],
}


type UploadAudioFormProps = {
	disabled?: boolean
	loading?: boolean
	actions?: ReactNode
	initValues?: AudioParamsType
	onSubmit: (values: AudioParamsType) => void
};

export const UploadAudioForm: FC<UploadAudioFormProps> = ({
	onSubmit: submit,
	initValues = defaultValues, disabled = false,
	loading = false, }) => {
	const form = useForm<AudioParamsType>({
		resolver: zodResolver(FormSchema),
		defaultValues: initValues,
		disabled: loading || disabled,
	})

	function onSubmit(data: AudioParamsType) {
		submit?.(data)
	}



	return <Fragment>

		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="file"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Audios</FormLabel>
							<FormControl>
								<UploadDrag placeholder="Upload your audio files" multiple {...field} />
							</FormControl>
							<FormDescription>
								This is audio files.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input placeholder="description" {...field} />
							</FormControl>
							<FormDescription>
								This is description for your draft.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button loading={loading} disabled={disabled} type="submit">
					Submit
				</Button>
			</form>
		</Form>
	</Fragment>;
};















