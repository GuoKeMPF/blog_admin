import { UserAuthForm } from "./components"

import styles from "./page.module.css";

import { Icons } from "@/components/icons";
import { cn } from "@/lib";

import { Metadata } from "next"
import React, { Fragment, type FC } from "react";



export const metadata: Metadata = {
	title: "登录页",
	description: "请先登录",
}

type LoginProps = {

};

export const Login: FC<LoginProps> = ({ }) => {
	return <Fragment>
		<div className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-stretch justify-stretch">

			<div className={cn("flex flex-col items-start justify-items-stretch text-white lg:flex dark:border-r inset-0 h-full w-full bg-zinc-900 p-4", styles.bgShape)}>
				<div className="relative z-20 flex items-center text-lg font-medium">
					<Icons.Logo />
				</div>
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							&ldquo;Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.&rdquo;
						</p>
						<footer className="text-sm">Steve Jobs</footer>
					</blockquote>
				</div>
			</div>

			<div className="flex flex-col items-stretch justify-center lg:p-8 relative">
				<div className="mx-auto sm:w-[350px]">
					<UserAuthForm />
				</div>
			</div>
		</div>
	</Fragment>;
};
export default Login
