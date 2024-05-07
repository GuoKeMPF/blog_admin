'use client'

import { getColumns } from '.'

import { DataTable } from '@/components/data-table'
import { usePosts } from '@/hooks'
import { PostType } from '@/interface'
import { Button } from '@/components/ui'
import Icons from '@/components/icons'
import { useLocationParams } from "@/hooks";


import React, { Fragment, type FC, useMemo } from 'react'

import Link from 'next/link'

export const Table: FC = () => {

	const { params, pagination, setPagination } = useLocationParams()

	const { data, loading, isError, reFetch } = usePosts({ params })


	const columns = useMemo(() => {
		return getColumns({ reFetch })
	}, [reFetch])


	return (
		<Fragment>
			<DataTable<PostType, {}>
				data={data?.data ?? []}
				columns={columns}
				total={data?.count ?? 0}
				pagination={pagination}
				loading={loading}
				onPaginationChange={setPagination}
				action={
					<Fragment>
						<Button size="sm" asChild title='Create Post'>
							<Fragment>
								<Link href={'/post/create'}><Icons.Plus /> Create Post</Link>
							</Fragment>
						</Button>
						<Button size="sm" variant={'secondary'} onClick={reFetch} title='refresh'>
							<Icons.Reload /> Refresh
						</Button>
					</Fragment>
				}
			/>
		</Fragment>
	)
}

export default Table
