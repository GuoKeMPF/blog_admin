"use client"

import { useDashboard } from "@/hooks";

import React, { Fragment, type FC } from "react";

type DashboardProps = {

};

export const Dashboard: FC<DashboardProps> = ({ }) => {
  const { data, isError, reFetch, loading } = useDashboard()
  console.log(data);

  return <Fragment>
    {/* {
      !isError && !loading && <Fragment>
        <p>{data!.draft}</p>
        <p>{data!.post}</p>
        <p>{data!.picture}</p>
        <p>{data!.audio}</p>
      </Fragment>
    } */}
  </Fragment>;
};
export default Dashboard
