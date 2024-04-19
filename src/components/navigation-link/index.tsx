'use client'

import { cn } from '@/lib/utils'

import { Icons } from '@/components/icons'

import { memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavigationLinkProps {
  href: string
  label: string
  icon?: React.ReactNode
  shortcut_key?: number | string
}

export const NavigationLink = memo(
  ({ href, label, icon, shortcut_key }: NavigationLinkProps) => {
    const pathname = usePathname()
    const iconCmp = icon ?? <Icons.At />

    const isInternal = href.startsWith('/')
    if (!isInternal) {
      return (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2 rounded-lg p-2"
        >
          <span className="inline-flex items-center gap-2 font-medium">
            {iconCmp} {label}
          </span>
          <Icons.ArrowUpRight />
        </a>
      )
    }

    let isActive = false
    if (pathname?.length > 0) {
      const splittedPathname = pathname.split('/')
      const currentPathname = splittedPathname[1] ?? ''
      isActive = currentPathname === href.split('/')[1]
    }

    return (
      <Link
        key={href}
        href={href}
        className={cn(
          'group flex items-center justify-between rounded-lg p-4'
        )}
      >
        <span className="flex items-center gap-2">
          {iconCmp}
          <span
            className={cn('font-medium')}
          >
            {label}
          </span>
        </span>
        {shortcut_key && (
          <span
            className={cn(
              'hidden h-5 w-5 place-content-center rounded border border-gray-200 text-xs font-medium  transition-colors duration-200  lg:grid',)}
            title={`Shortcut key: ${shortcut_key}`}
          >
            {shortcut_key}
          </span>
        )}
      </Link>
    )
  }
)

NavigationLink.displayName = 'NavigationLink'
