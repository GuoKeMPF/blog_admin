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

import React, { Fragment, type FC } from "react";

type UploadAudioProps = {

};

export const UploadAudio: FC<UploadAudioProps> = ({ }) => {

	const [open, setOpen] = React.useState(false);

	const onSubmit = async (data: any) => {
		console.log(data);

		setTimeout(() => {
			setOpen(false)
		}, 5000);
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
				<UploadAudioForm onSubmit={onSubmit} />
			</DialogContent>
		</Dialog>
	</Fragment>;
};
export default UploadAudio