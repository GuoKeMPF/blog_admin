import { Card, DashboardProps, } from ".";

import Icons from "@/components/icons";

import React, { Fragment, type FC } from "react";


export const DraftCard: FC<DashboardProps> = ({ data, loading }) => {
  return <Card title='草稿' loading={loading} icon={<Icons.Draft />}>
    <div className='text-2xl font-bold'>
      {data?.draft || "0"}
      <span className='text-xs text-muted-foreground'>
        篇
      </span>
    </div>
  </Card>
};
export default DraftCard
