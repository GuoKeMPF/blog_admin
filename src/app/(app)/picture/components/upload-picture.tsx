"use client"

import { UploadPictureForm } from ".";

import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui"

import { Icons } from "@/components/icons";

import { useCreatePictures } from "@/hooks";

import { PictureParamsType } from "@/interface";

import React, { Fragment, type FC } from "react";


type UploadPictureProps = {
	reFetch: () => void
};

export const UploadPicture: FC<UploadPictureProps> = ({ reFetch }) => {

	const [open, setOpen] = React.useState(false);

	const onSuccess = () => {
		setOpen(false)
		reFetch()
	}



	const { mutate, loading } = useCreatePictures({ onSuccess });



	const onSubmit = (data: PictureParamsType) => {
		mutate(data)
	}
	return <Fragment>



		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="sm"><Icons.Plus />Create Picture</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Picture</DialogTitle>
				</DialogHeader>
				<UploadPictureForm loading={loading} onSubmit={onSubmit} />
			</DialogContent>
		</Dialog>
	</Fragment>;
};