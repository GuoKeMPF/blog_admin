'use client'

import { User } from './user'

import styles from './index.module.css'

import { Button } from '@/components/ui'
import { Icons } from '@/components/icons'
import { MobileDrawer } from '@/components/mobile-drawer'
import { cn } from '@/lib'

import { MOBILE_SCROLL_THRESHOLD, SCROLL_AREA_ID } from '@/lib'

import Link from 'next/link'
import { memo, useEffect, useState } from 'react'

export interface FloatingHeaderProps {
	scrollTitle?: string
	title?: string
	goBackLink?: string
}

export const NavHeader = memo(
	({ scrollTitle, title, goBackLink }: FloatingHeaderProps) => {
		const [transformValues, setTransformValues] = useState({
			translateY: 0,
			opacity: scrollTitle ? 0 : 1,
		})

		useEffect(() => {
			const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`)

			const onScroll = (e: any) => {
				const scrollY = Math.abs(
					scrollAreaElem?.getClientRects()[0].top || 0
				)

				const translateY = Math.max(100 - scrollY, 0)
				const value = +(
					(scrollY -
						MOBILE_SCROLL_THRESHOLD *
						(MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / 100))) /
					100
				).toFixed(2)

				const opacity = Math.min(Math.max(value, 0), 1)

				setTransformValues({ translateY, opacity })
			}

			if (scrollTitle) {
				window?.addEventListener('scroll', onScroll, {
					passive: true,
				})
			}
			return () => window?.removeEventListener('scroll', onScroll)
		}, [scrollTitle])

		return (
			<header className="sticky inset-x-0 px-8 top-0 z-10 mx-auto flex h-14 w-full shrink-0 items-center overflow-hidden border-b text-sm font-medium bg-background">
				<div className="flex h-full w-full items-center">
					<div
						className={cn(
							'w-full grid justify-items-center items-center gap-2',
							styles.navHeader
						)}
					>
						<div
							className={cn(
								'flex items-center gap-1 lg:hidden',
								styles.logo
							)}
						>
							{goBackLink ? (
								<Button
									variant="ghost"
									size="icon"
									className="shrink-0"
									asChild
								>
									<Link href={goBackLink} title="Go back">
										<Icons.ArrowLeft />
									</Link>
								</Button>
							) : (
								<MobileDrawer />
							)}
							<div className="flex flex-1 items-center justify-between">
								{scrollTitle && (
									<span
										className="line-clamp-2 font-semibold tracking-tight"
										style={{
											transform: `translateY(${transformValues.translateY}%)`,
											opacity: transformValues.opacity,
										}}
									>
										{scrollTitle}
									</span>
								)}
							</div>
						</div>

						{title && (
							<span
								className={cn(
									'line-clamp-2 font-semibold tracking-tight',
									styles.title
								)}
							>
								{title}
							</span>
						)}

						<div className={styles.user}>
							<User />
						</div>
					</div>
				</div>
			</header>
		)
	}
)

NavHeader.displayName = 'NavHeader'
