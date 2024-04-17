import { cn, SCROLL_AREA_ID } from '@/lib'

import React from 'react'

import { HTMLAttributes, FC } from 'react'


interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  useScrollAreaId: boolean
}

export const ScrollArea: FC<ScrollAreaProps> = ({ useScrollAreaId = false, className, ...rest }) => (
  <div
    {...(useScrollAreaId && { id: SCROLL_AREA_ID })}
    className={cn('scrollable-area relative flex w-full flex-col', className)}
    {...rest}
  />
)
