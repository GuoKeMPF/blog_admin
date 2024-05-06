"use client"

import { UploadAudioForm } from "./";

import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui"

import { Icons } from "@/components/icons";

import { useCreateAudio } from "@/hooks";

import { AudioParamsType } from "@/interface";

import React, { Fragment, type FC } from "react";


type UploadAudioProps = {
	reFetch: () => void
};

export const UploadAudio: FC<UploadAudioProps> = ({ reFetch }) => {

	const [open, setOpen] = React.useState(false);

	const onSuccess = () => {
		setOpen(false)
		reFetch()
	}



	const { mutate, loading } = useCreateAudio({ onSuccess });



	const onSubmit = (data: AudioParamsType) => {
		mutate(data)
	}
	return <Fragment>



		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button size="sm" variant="outline"><Icons.Plus />Create Audio</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Audio</DialogTitle>
				</DialogHeader>
				<UploadAudioForm loading={loading} onSubmit={onSubmit} />
			</DialogContent>
		</Dialog>
	</Fragment>;
};