
/**
 * 为了和 table 的分页保持一直
 * 参数定义为 pageIndex 页码 从 0 开始
 * 参数定义为 pageSize 页大小
 */

import {
	Pagination as UIPagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Button,
} from "@/components/ui"

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	DoubleArrowLeftIcon,
	DoubleArrowRightIcon,
} from '@radix-ui/react-icons'

import React, { type FC, useMemo } from "react";

type PaginationChangeParams = {
	pageIndex: number,
	pageSize: number,
}


type PaginationProps = {
	total: number,
	pagination: PaginationChangeParams,
	onPaginationChange: (pagination: PaginationChangeParams) => void
};

export const Pagination: FC<PaginationProps> = ({ pagination, total, onPaginationChange }) => {


	const pageInfo = useMemo(() => {
		const currentPage = pagination.pageIndex + 1,
			totalPage = Math.ceil(total / pagination.pageSize);
		return {
			currentPage,
			pageSize: pagination.pageSize,
			totalPage,
			total: total,
			getCanPreviousPage: currentPage > 1,
			getCanNextPage: currentPage < totalPage,
		}
	}, [pagination, total])


	const onChangePageSize = (pageSize: string) => {
		onPaginationChange({ pageIndex: pagination.pageIndex, pageSize: Number(pageSize) })
	}
	const onChangePageIndex = (pageIndex: number) => {
		onPaginationChange({ pageIndex: pageIndex - 1, pageSize: pagination.pageSize })
	}



	return (<div className="flex items-center bg-background justify-between px-2">
		<div></div>
		<div className="flex items-center space-x-6 lg:space-x-8">

			<div className="flex w-[100px] items-center justify-center text-sm font-medium">
				Total {pageInfo.total}
			</div>
			<div className="flex items-center space-x-2">
				<p className="text-sm font-medium">Rows per page</p>
				<Select
					value={`${pagination.pageSize}`}
					onValueChange={onChangePageSize}
				>
					<SelectTrigger className="h-8 w-[70px]">
						<SelectValue
							placeholder={
								pagination.pageSize
							}
						/>
					</SelectTrigger>
					<SelectContent side="top">
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<SelectItem
								key={pageSize}
								value={`${pageSize}`}
							>
								{pageSize}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="flex w-[100px] items-center justify-center text-sm font-medium">
				Page {pagination.pageIndex + 1} of{' '} {pageInfo.totalPage}
			</div>
			<div className="flex items-center space-x-2">
				<UIPagination>
					<PaginationContent>
						<PaginationItem>
							<Button
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
								onClick={() => onChangePageIndex(0)}
								disabled={!pageInfo.getCanPreviousPage}
							>
								<span className="sr-only">Go to first page</span>
								<DoubleArrowLeftIcon className="h-4 w-4" />
							</Button>
						</PaginationItem>
						<PaginationItem>
							<Button
								variant="outline"
								className="h-8 w-8 p-0"
								onClick={() => onChangePageIndex(pageInfo.currentPage - 1)}
								disabled={!pageInfo.getCanPreviousPage}
							>
								<span className="sr-only">Go to previous page</span>
								<ChevronLeftIcon className="h-4 w-4" />
							</Button>
						</PaginationItem>
						<PaginationItem>
							<Button
								variant="outline"
								className="h-8 w-8 p-0"
								onClick={() => onChangePageIndex(pageInfo.currentPage + 1)}
								disabled={!pageInfo.getCanNextPage}
							>
								<span className="sr-only">Go to next page</span>
								<ChevronRightIcon className="h-4 w-4" />
							</Button>
						</PaginationItem>
						<PaginationItem>
							<Button
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
								onClick={() => onChangePageIndex(pageInfo.totalPage)}
								disabled={!pageInfo.getCanNextPage}
							>
								<span className="sr-only">Go to last page</span>
								<DoubleArrowRightIcon className="h-4 w-4" />
							</Button>
						</PaginationItem>
					</PaginationContent>
				</UIPagination>
			</div>
		</div>
	</div>);
};
export default Pagination