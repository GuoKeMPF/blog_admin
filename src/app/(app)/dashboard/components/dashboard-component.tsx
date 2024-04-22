"use client"

import { Summary, Plots } from ".";

import { useDraft } from "@/hooks";

import React, { Fragment, type FC } from "react";

type DashboardProps = {

};

export const DashboardComponents: FC<DashboardProps> = ({ }) => {
	const { data, isError, reFetch, loading } = useDraft()

	return <Fragment>
		{
			!isError && <Fragment>
				<Summary data={data!} loading={loading} />
				<Plots data={data!} loading={loading} />
			</Fragment>
		}
	</Fragment>;
};
