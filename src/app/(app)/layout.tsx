import { ScrollArea } from '@/components/scroll-area'

import { SideBar } from '@/components/layout'

import { NavHeader } from '@/components/layout/header'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '数据中心',
	description: '数据中心',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="min-h-screen flex">
			<SideBar className="lg:flex bg-background relative hidden lg:min-h-100lvh" />
			<ScrollArea className="flex flex-1 flex-col" useScrollAreaId>
				<NavHeader scrollTitle="M"></NavHeader>
				<div className="px-8 py-4">{children}</div>
			</ScrollArea>
		</div>
	)
}
