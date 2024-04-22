"use client"


import { columns } from '.'

import { DataTable } from '@/components/data-table/data-table'
import { useDraft } from '@/hooks'
import { RequestPaginationType } from '@/interface'

import { Button } from '@/components/ui'

import React, { Fragment, type FC, useState, useMemo } from 'react'
import { PaginationState } from '@tanstack/react-table'
import Link from "next/link";



export const Table: FC = () => {


	const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

	const params = useMemo<RequestPaginationType>(() => {
		return {
			page: pagination.pageIndex + 1,
			size: pagination.pageSize,
		}
	}, [pagination])


	const { data, loading, isError, reFetch } = useDraft({ params })

	return (
		<Fragment>
			<DataTable data={data?.data ?? []} columns={columns} total={data?.count ?? 0} pagination={pagination} loading={loading} onPaginationChange={setPagination}

				action={<Fragment>
					<Button size="sm" asChild><Fragment>
						<Link href={'/draft/create'} >Create Draft</Link>
					</Fragment></Button>
				</Fragment>}
			/>
		</Fragment>
	)
}

export default Table
