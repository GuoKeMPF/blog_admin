"use client"

import { Summary, Plots } from ".";

import { useDashboard } from "@/hooks";
import { Error } from "@/components/error";

import React, { Fragment, type FC } from "react";

type DashboardProps = {

};

export const DashboardComponents: FC<DashboardProps> = ({ }) => {
	const { data, isError, reFetch, loading } = useDashboard()

	if (isError) {
		return <Error></Error>
	}

	return <Fragment>
		<Summary data={data!} loading={loading} />
		<Plots data={data!} loading={loading} />
	</Fragment>
};
