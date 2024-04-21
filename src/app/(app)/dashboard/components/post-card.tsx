import { Card, DashboardProps } from ".";

import Icons from "@/components/icons";

import React, { Fragment, type FC } from "react";



export const PostCard: FC<DashboardProps> = ({ data, loading }) => {
  return <Card title='帖子' loading={loading} icon={<Icons.Post />}>
    <div className='text-2xl font-bold'>
      {data?.post || "0"}
      <span className='text-xs text-muted-foreground'>
        篇
      </span>
    </div>
  </Card>
};
export default PostCard
