import { Button } from "@/components/ui";

import { Icons } from "@/components/icons";

import React, { Fragment, type FC } from "react";

import Link from "next/link";


type ErrorProps = {

};

export const Error: FC<ErrorProps> = ({ }) => {
	return <Fragment>
		<main className="grid min-h-full place-items-center gap-4 bg-background px-6 py-24 sm:py-32 lg:px-8">
			<p className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">500</p>
			<h1 className="mt-6 text-base leading-7">Some thing went wrong.</h1>
			<Button asChild variant="secondary">
				<Link href="/">
					Back to home
					<Icons.Back />
				</Link>
			</Button>
		</main>
	</Fragment>;
};
export default Error