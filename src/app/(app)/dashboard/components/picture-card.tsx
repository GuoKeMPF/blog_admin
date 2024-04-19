import { DashboardProps, Card } from ".";

import Icons from "@/components/icons";

import React, { type FC } from "react";



export const PictureCard: FC<DashboardProps> = ({ data, loading }) => {
  return <Card title='图片' loading={loading} icon={<Icons.Photo />}>
    <div className='text-2xl font-bold'>
      {data?.draft || "0"}
      <span className='text-xs text-muted-foreground'>
        张
      </span>
    </div>
  </Card>
};
export default PictureCard
