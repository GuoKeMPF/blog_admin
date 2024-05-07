"use client"


import { PictureType } from "@/interface";
import { Icons } from "@/components/icons";
import { useDeletePicture } from "@/hooks";

import { Card, CardFooter, CardDescription, CardContent, Separator, Button, AspectRatio } from "@/components/ui";

import { cn } from "@/lib";

import React, { Fragment, type FC } from "react";

type PictureCardProps = {
	picture: PictureType,
	reFetch: () => void
};

export const PictureCard: FC<PictureCardProps> = ({ picture, reFetch }) => {

	const onSuccess = () => {
		reFetch()
	};

	const { mutate, loading } = useDeletePicture({ onSuccess });

	const onDelete = () => {
		mutate({ id: picture.id });
	};

	return (<Fragment>
		<Card>

			<AspectRatio ratio={16 / 9}>
				<img src={picture.src} alt={picture.description} className="rounded-md h-full w-full object-cover" />
			</AspectRatio>
			<CardContent className="p-2 h-10">
				<CardDescription className={cn('text-ellipsis truncate')}>{picture.description}</CardDescription>
			</CardContent>
			<Separator />
			<CardFooter className="items-center justify-around gap-2 py-2">
				<Button variant={'ghost'} size={'icon'} asChild>
					<a href={`${picture.src}`} target="_blank" key="open" rel="noreferrer"><Icons.Post /></a>
				</Button>
				<Separator className="h-5" orientation="vertical" />
				<Button loading={loading} onClick={onDelete} variant={'ghost'} size={'icon'}>
					<Icons.Trash />
				</Button>
			</CardFooter>
		</Card>
	</Fragment>);
};






