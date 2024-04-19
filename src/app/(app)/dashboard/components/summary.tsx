import { type DashboardProps, DraftCard, PostCard, PictureCard, AudioCard } from "./";


import React, { type FC } from "react";


export const Summary: FC<DashboardProps> = (props) => {
  return (

    <div className='grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-4'>
      <DraftCard {...props} />
      <PostCard {...props} />
      <PictureCard {...props} />
      <AudioCard {...props} />
    </div>
  );
};
export default Summary
