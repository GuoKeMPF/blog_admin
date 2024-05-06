'use client'

import { getColumns, UploadAudio } from '.'

import { DataTable } from '@/components/data-table'
import { useAudios } from '@/hooks'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'
import { useLocationParams } from '@/hooks'

import React, { Fragment, type FC, useMemo } from 'react'

type TableProps = {}

export const Table: FC<TableProps> = ({ }) => {
	const { params, pagination, setPagination } = useLocationParams()

	const { data, loading, isError, reFetch } = useAudios({ params })

	const columns = useMemo(() => {
		return getColumns({ reFetch })
	}, [reFetch])

	return (
		<Fragment>
			<DataTable
				data={data?.data ?? []}
				columns={columns}
				total={data?.count ?? 0}
				pagination={pagination}
				loading={loading}
				onPaginationChange={setPagination}
				action={
					<Fragment>
						<Button
							size="sm"
							variant={'secondary'}
							onClick={reFetch}
							title="refresh"
						>
							<Icons.Reload /> Refresh
						</Button>
						<UploadAudio reFetch={reFetch} />
					</Fragment>
				}
			/>
		</Fragment>
	)
}
export default Table
