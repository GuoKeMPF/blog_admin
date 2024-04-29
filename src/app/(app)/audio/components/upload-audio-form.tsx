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
	name: z.string().min(1, {
		message: 'Name is required',
	}),
	description: z.string().min(1, {
		message: 'Description is required',
	}),
	src: z.string().min(1, {
		message: 'File src is required',
	}),
})

const defaultValues: AudioParamsType = {
	name: '',
	description: '',
	src: '',
}


type UploadAudioFormProps = {
	disabled?: boolean
	loading?: boolean
	title?: string
	actions?: ReactNode
	initValues?: AudioParamsType
	onSubmit: (values: AudioParamsType) => void
};

export const UploadAudioForm: FC<UploadAudioFormProps> = ({
	onSubmit: submit,
	title,
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
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="title" {...field} />
							</FormControl>
							<FormDescription>
								This is title for your draft.
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
				<FormField
					control={form.control}
					name="src"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<UploadDrag placeholder="Upload your audio files" {...field} />
							</FormControl>
							<FormDescription>
								This is content for your draft.
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
export default UploadAudioForm















