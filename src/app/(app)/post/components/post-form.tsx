'use client'

import { PostParamsType } from '@/interface'
import { Editor } from '@/components/editor'

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
	title: z.string().min(1, {
		message: 'Title is required',
	}),
	description: z.string().min(1, {
		message: 'Description is required',
	}),
	content: z.string().min(1, {
		message: 'Content is required',
	}),
})

const defaultValues: PostParamsType = {
	title: '',
	description: '',
	content: '',
}

type PostFormProps = {
	disabled?: boolean
	loading?: boolean
	title?: string
	actions?: ReactNode
	initValues?: PostParamsType
	onSubmit: (values: z.infer<typeof FormSchema>) => void
}

export const PostForm: FC<PostFormProps> = ({
	disabled = false,
	loading = false,
	title = '',
	actions,
	onSubmit: submit,
	initValues = defaultValues,
}) => {
	const form = useForm<PostParamsType>({
		resolver: zodResolver(FormSchema),
		defaultValues: initValues,
		disabled: loading || disabled,
	})

	function onSubmit(data: PostParamsType) {
		submit?.(data)
	}

	return (
		<Fragment>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Card>
						<CardHeader className='flex flex-row'>
							<h1 className="text-2xl flex-1">{
								title
							}</h1>
							{
								actions
							}
						</CardHeader>
						<CardContent>
							<FormField
								control={form.control}
								name="title"
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
								name="content"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Content</FormLabel>
										<FormControl>
											<Editor {...field} placeholder="content" />
										</FormControl>
										<FormDescription>
											This is content for your draft.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
						<CardFooter>
							<Button loading={loading} disabled={disabled} type="submit">
								Submit
							</Button>
						</CardFooter>
					</Card>
				</form>
			</Form>
		</Fragment>
	)
}
