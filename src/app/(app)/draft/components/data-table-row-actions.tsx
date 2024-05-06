'use client'

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui'
import { useDeleteDraft } from '@/hooks'

import Icons from '@/components/icons'

import Link from 'next/link'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

interface DataTableRowActionsProps<TData> {
	row: Row<TData>
	reFetch?: () => void
}

export function DataTableRowActions<TData>({
	row,
	reFetch,
}: DataTableRowActionsProps<TData>) {
	const { mutate: deleteDraft, loading } = useDeleteDraft({
		onSuccess: () => {
			reFetch?.()
		},
	})

	const onDelete = (row: Row<TData>) => {
		deleteDraft({
			id: row.original.id,
		})
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="flex h-8 data-[state=open]:bg-muted">
					<DotsHorizontalIcon className="h-4 w-4" />
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[160px]">
				<DropdownMenuItem asChild>
					<Link href={`/draft/edit/${row.original.id}/`}>
						<Icons.Pencil />
						Edit
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => onDelete(row)} asChild>
					<Button
						variant="ghost"
						className="flex justify-between w-full"
						disabled={loading}
					>
						<Icons.Trash />
						Delete
						<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
