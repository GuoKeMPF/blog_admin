import Icons from "@/components/icons";

import Link from 'next/link'

import { FC } from 'react'

const NotFound: FC = () => {
	return (
		<div className='flex flex-col min-h-svh max-w-[350px] justify-center gap-4 m-auto'>
			<p className="text-lg font-semibold">Not Found</p>
			<p className="text-sm text-muted-foreground">Could not find requested resource</p>
			<Link href="/" className='font-medium underline underline-offset-4'>Return Home <Icons.Back /></Link>
		</div>
	)
}
export default NotFound
