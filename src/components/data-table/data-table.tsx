"use client"

import { DataTablePagination } from "./data-table-pagination"

import { DataTableToolbar } from "./data-table-toolbar"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Card,
	CardHeader,
	CardContent,
	Skeleton
} from "@/components/ui"

import * as React from "react"
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	PaginationState,
	OnChangeFn
} from "@tanstack/react-table"



interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[],
	total: number,
	data: TData[],
	loading: boolean
	onPaginationChange: OnChangeFn<PaginationState>,
	pagination: PaginationState,
	action?: React.ReactNode,
	reFetch?: () => void
}

export function DataTable<TData, TValue>({
	columns,
	data,
	total = 0,
	loading = false,
	onPaginationChange,
	pagination,
	action
}: DataTableProps<TData, TValue>) {
	const [rowSelection, setRowSelection] = React.useState({})
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({})
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	)
	// const [sorting, setSorting] = React.useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		rowCount: total,
		onPaginationChange: onPaginationChange,
		manualPagination: true,
		state: {
			// sorting,
			pagination,
			columnVisibility,
			rowSelection,
			columnFilters,
		},
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		// onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	})

	return (
		<Card>
			<CardHeader>
				<DataTableToolbar table={table} action={action} />
			</CardHeader>
			<CardContent>
				{
					loading ? <React.Fragment>
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-full mb-2" />
					</React.Fragment> :
						<Table>
							<TableHeader>
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<TableHead key={header.id} colSpan={header.colSpan}>
													{header.isPlaceholder
														? null
														: flexRender(
															header.column.columnDef.header,
															header.getContext()
														)}
												</TableHead>
											)
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map((row) => (
										<TableRow
											key={row.id}
											data-state={row.getIsSelected() && "selected"}
										>
											{row.getVisibleCells().map((cell) => (
												<TableCell key={cell.id}>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
												</TableCell>
											))}
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell
											colSpan={columns.length}
											className="h-24 text-center"
										>
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
				}
				<DataTablePagination table={table} />
			</CardContent>
		</Card>
	)
}
