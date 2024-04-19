import { Dashboard as DashboardComponent } from "./components";

import { Metadata } from "next/types";
import React, { Fragment, type FC } from "react";




export const metadata: Metadata = {
  title: "数据中心 - 看板",
  description: "数据中心 - 看板",
};




export const Dashboard: FC = async () => {

  return <Fragment>
    <DashboardComponent />
  </Fragment>;
};
export default Dashboard
