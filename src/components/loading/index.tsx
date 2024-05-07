import { Skeleton } from '@/components/ui'

import { FC } from 'react'

interface LoadingProps {
	rows?: number
}

export const Loading: FC<LoadingProps> = ({ rows = 5 }) => {
	return (
		<div className="w-full flex flex-row gap-2">
			{new Array(5).fill(0).map((_, i) => (
				<Skeleton key={i} className="w-full h-4" />
			))}
		</div>
	)
}

export default Loading
