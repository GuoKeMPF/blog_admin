import { DashboardProps, Card } from ".";

import { Icons } from "@/components/icons";

import React, { Fragment, type FC } from "react";


export const AudioCard: FC<DashboardProps> = ({ loading, data }) => {
  return <Card title='音乐' loading={loading} icon={<Icons.Music />}>
    <div className='text-2xl font-bold'>
      {data?.audio || "0"}
      <span className='text-xs text-muted-foreground'>
        首
      </span>
    </div>
  </Card>;
};
export default AudioCard
