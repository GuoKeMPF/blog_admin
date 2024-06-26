'use client'

import { MenuContent, eventKeyTrigger } from './'

import { keyCodePathnameMapping } from './index'

import { ScrollArea } from '@/components/scroll-area'
import { useKeyPress } from '@/hooks/useKeyPress'
import { cn } from '@/lib/utils'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export interface SideBarProps {
	title?: string
	href?: string
	isInner?: boolean
	className?: string
}

export const SideBar = ({ title, href, isInner, className }: SideBarProps) => {
	const router = useRouter()
	const pathname = usePathname()


	function onKeyPress(event: KeyboardEvent) {
		if (event && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			event.stopPropagation();
			const key = event.code

			const targetPathname = keyCodePathnameMapping.get(key)

			if (targetPathname && targetPathname !== pathname) {
				router.push(targetPathname)
			}
		}
	}


	useKeyPress(onKeyPress, eventKeyTrigger)

	return (
		<ScrollArea
			className={cn(
				'hidden lg:flex lg:flex-col lg:border-r',
				isInner ? 'lg:w-80 xl:w-96' : 'lg:w-60 xl:w-72',
				className
			)}
		>
			<aside>
				{title && (
					<div className="sticky top-0 z-10 border-b px-5 py-3">
						<div className="flex items-center justify-between">
							<div className="text-sm font-semibold tracking-tight">
								{href ? (
									<Link href={href}>{title}</Link>
								) : (
									<span>{title}</span>
								)}
							</div>
						</div>
					</div>
				)}
				<div className="p-2">
					<MenuContent />
				</div>
			</aside>
		</ScrollArea>
	)
}
