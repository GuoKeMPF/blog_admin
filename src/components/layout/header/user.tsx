import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui"

import { useLogout } from "@/hooks";
import { clearSession } from "@/lib";

import { useRouter } from "next/navigation";

import React, { Fragment, type FC } from 'react'

export const User: FC = () => {

	const router = useRouter()


	const onSuccess = () => {
		clearSession()
	}
	const onError = () => { }
	const onFinally = () => {
		router.push('/user/login')
	}

	const { onLogout, loading } = useLogout({
		onSuccess, onError, onFinally,
	})


	return (
		<Fragment>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="relative h-8 w-8 rounded-full">
						<Avatar>
							<AvatarImage
								src="https://github.com/shadcn.png"
								alt="@shadcn"
							/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">user name</p>
							<p className="text-xs leading-none text-muted-foreground">
								user Emile
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem onSelect={onLogout}>
						Log out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</Fragment>
	)
}
export default User
