'use client'

import { getColumns, UploadAudio, Player } from '.'

import { DataTable } from '@/components/data-table'
import { useAudios } from '@/hooks'

import { Button } from '@/components/ui'

import Icons from '@/components/icons'
import { useLocationParams } from '@/hooks'

import { AudioType } from '@/interface'

import React, { Fragment, type FC, useMemo, useState, useEffect } from 'react'

type TableProps = {}

export const Table: FC<TableProps> = ({ }) => {
	const { params, pagination, setPagination } = useLocationParams()

	const [audio, setAudio] = useState<AudioType>()
	const { data, loading, isError, reFetch } = useAudios({ params })

	const columns = useMemo(() => {
		return getColumns({ reFetch })
	}, [reFetch])

	useEffect(() => {
		setAudio(data?.data[0])
	}, [data])

	const onReset = () => {
		setAudio(undefined)
	}

	const onSwitch = (step: 1 | -1) => {
		const audios = data?.data ?? []
		const index = audios.findIndex((a) => audio?.id === a.id)
		let nextIndex = index + step
		if (nextIndex >= audios.length) {
			nextIndex = 0
		}
		if (nextIndex < 0) {
			nextIndex = audios.length - 1
		}
		const nextAudio = audios[nextIndex]
		setAudio(nextAudio)
	}

	return (
		<div className="flex flex-col gap-4">
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
			<Player
				onReset={onReset}
				onSwitch={onSwitch}
				src={audio?.src}
				name={audio?.name}
			/>
		</div>
	)
}
export default Table
