'use client'

import { DataTableRowActions } from './data-table-row-actions'

import { PictureType } from '@/interface'

import { DataTableColumnHeader } from '@/components/data-table'

import { Checkbox, Label } from '@/components/ui'

import { ColumnDef, Table } from '@tanstack/react-table'

import { Fragment, useId } from 'react'

interface HeaderSelectProps<TData> {
	table: Table<TData>
}

function HeaderSelect<TData>({ table }: HeaderSelectProps<TData>) {
	const id = useId()

	return (
		<Fragment>
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				id={id}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className="translate-y-[2px]"
			/>
			<Label htmlFor={id} className="ml-1">
				Select all
			</Label>
		</Fragment>
	)
}

type GetColumns = {
	reFetch: () => void
}

export const getColumns = ({ reFetch }: GetColumns): ColumnDef<PictureType>[] => {
	return [
		{
			id: 'select',
			header: ({ table }) => {
				return <HeaderSelect table={table} />
			},
			cell: ({ row }) => (
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
					className="translate-y-[2px]"
				/>
			),
			enableSorting: false,
			enableHiding: false,
		},
		// {
		//   accessorKey: "id",
		//   header: ({ column }) => (
		//     <DataTableColumnHeader column={column} title="Id" />
		//   ),
		//   cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
		//   enableSorting: false,
		//   enableHiding: false,
		// },
		{
			accessorKey: 'name',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Name" />
			),
			cell: ({ row }) => {
				return (
					<div className="flex space-x-2">
						<span className="max-w-[500px] truncate font-medium">
							{row.getValue('name')}
						</span>
					</div>
				)
			},
		},
		{
			accessorKey: 'create_time',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Upload Time" />
			),
			cell: ({ row }) => {
				return (
					<div className="flex space-x-2">
						<span className="max-w-[500px] truncate font-medium">
							{row.getValue('create_time')}
						</span>
					</div>
				)
			},
		},
		{
			accessorKey: 'description',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Description" />
			),
			cell: ({ row }) => {
				return (
					<div className="flex space-x-2">
						<span className="max-w-[500px] truncate font-medium">
							{row.getValue('description')}
						</span>
					</div>
				)
			},
		},
		{
			id: 'actions',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Actions" />
			),
			cell: ({ row }) => (
				<DataTableRowActions row={row.original} reFetch={reFetch} />
			),
		},
	]
}
