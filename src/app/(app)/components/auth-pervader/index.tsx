"use client"

import { useUserInfo } from "@/hooks";

import { UserInfoType } from "@/interface";

import React, { Fragment, type FC, useContext, createContext } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
	userInfo: UserInfoType | undefined;
}

export const AuthContext = createContext<AuthContextType>({
	userInfo: undefined,
});

type AuthPervaderProps = {
	children?: React.ReactNode
};

export const AuthPervader: FC<AuthPervaderProps> = ({ children }) => {

	const router = useRouter();

	const onError = () => {
		router.push("/user/login")
	}
	const { loading, userInfo } = useUserInfo({
		onError,
	});



	return (<Fragment>
		<AuthContext.Provider value={{ userInfo }}>
			{children}
		</AuthContext.Provider>
	</Fragment>);
};
