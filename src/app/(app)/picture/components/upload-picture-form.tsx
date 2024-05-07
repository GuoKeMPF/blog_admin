'use client'

import { PictureParamsType } from '@/interface'
import { UploadDrag } from '@/components/form-filed'

import {
	Button,
	Input,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
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

const defaultValues: PictureParamsType = {
	description: '',
	file: [],
}


type UploadPictureFormProps = {
	disabled?: boolean
	loading?: boolean
	actions?: ReactNode
	initValues?: PictureParamsType
	onSubmit: (values: PictureParamsType) => void
};

export const UploadPictureForm: FC<UploadPictureFormProps> = ({
	onSubmit: submit,
	initValues = defaultValues, disabled = false,
	loading = false, }) => {
	const form = useForm<PictureParamsType>({
		resolver: zodResolver(FormSchema),
		defaultValues: initValues,
		disabled: loading || disabled,
	})

	function onSubmit(data: PictureParamsType) {
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
							<FormLabel>Pictures</FormLabel>
							<FormControl>
								<UploadDrag
									placeholder="Upload your picture files"
									accept="image/*"
									multiple {...field}
								/>
							</FormControl>
							<FormDescription>
								This is picture files.
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
								This is description for your picture.
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















