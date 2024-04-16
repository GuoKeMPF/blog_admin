import { cn } from '@/lib/utils'
import { SCROLL_AREA_ID } from '@/lib/constants'

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
