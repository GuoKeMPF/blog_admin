'use client'

import { getColumns } from '.'

import { DataTable } from '@/components/data-table'
import { useDrafts } from '@/hooks'
import { DraftType } from '@/interface'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'
import { useLocationParams } from "@/hooks";

import React, { Fragment, type FC, useMemo } from 'react'
import Link from 'next/link'

export const Table: FC = () => {

	const { params, pagination, setPagination } = useLocationParams()

	const { data, loading, isError, reFetch } = useDrafts({ params })


	const columns = useMemo(() => {
		return getColumns({ reFetch })
	}, [reFetch])


	return (
		<Fragment>
			<DataTable<DraftType, {}>
				data={data?.data ?? []}
				columns={columns}
				total={data?.count ?? 0}
				pagination={pagination}
				loading={loading}
				onPaginationChange={setPagination}
				action={
					<Fragment>
						<Button size="sm" asChild>
							<Fragment>
								<Link href={'/draft/create'}><Icons.Plus /> Create Draft</Link>
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
