'use client'

import { PictureList, UploadPicture } from '.'

import { Pagination } from '@/components/pagination'
import { usePictures } from '@/hooks'

import {
	Button,
	Card,
	CardHeader,
	CardContent,
	Skeleton
} from "@/components/ui"
import Icons from '@/components/icons'
import { useLocationParams } from '@/hooks'


import React, { Fragment, type FC } from 'react'

type PictureContentProps = {}

export const PictureContent: FC<PictureContentProps> = ({ }) => {
	const { params, pagination, setPagination } = useLocationParams()

	const { data, loading, isError, reFetch } = usePictures({ params })

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between gap-2">
					<div className="flex flex-1 items-center">
					</div>

					<Fragment>
						<UploadPicture reFetch={reFetch} />
						<Button size="sm" variant={'secondary'} onClick={reFetch} title='refresh'>
							<Icons.Reload /> Refresh
						</Button>
					</Fragment>
				</div>
			</CardHeader>
			<CardContent>
				{
					loading ? <Fragment>
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
					</Fragment> : (<PictureList pictures={data?.data ?? []} reFetch={reFetch} />)
				}
				<Pagination
					total={data?.count ?? 0}
					pagination={pagination}
					onPaginationChange={setPagination} />
			</CardContent>
		</Card>
	)
}
export default PictureContent
