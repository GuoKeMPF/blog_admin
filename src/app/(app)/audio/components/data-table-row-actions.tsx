'use client'

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui'
import { useDeleteAudio } from '@/hooks'

import Icons from '@/components/icons'

import { AudioType } from '@/interface'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

interface DataTableRowActionsProps<TData> {
	row: TData
	reFetch?: () => void
}

export function DataTableRowActions<TData>({
	row,
	reFetch,
}: DataTableRowActionsProps<AudioType>) {
	const { mutate: deleteAudio, loading } = useDeleteAudio({
		onSuccess: () => {
			reFetch?.()
		},
	})

	const onDelete = () => {
		deleteAudio({
			id: row.id,
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
				{/* <DropdownMenuItem>
					<Icons.Pencil />
					Edit
				</DropdownMenuItem> */}
				<DropdownMenuItem onSelect={() => onDelete()} asChild>
					<Button
						variant="ghost"
						className="flex justify-between w-full"
						loading={loading}
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
