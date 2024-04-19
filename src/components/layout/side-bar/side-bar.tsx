'use client'

import { MenuContent, eventKeyTrigger } from './'

import { keyCodePathnameMapping } from './index'

import { ScrollArea } from '@/components/ui'
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

  useKeyPress(onKeyPress, eventKeyTrigger)

  function onKeyPress(event: KeyboardEvent) {
    const key = event.code
    const targetPathname = keyCodePathnameMapping.get(key)
    if (targetPathname && targetPathname !== pathname)
      router.push(targetPathname)
  }

  return (
    <ScrollArea
      className={cn(
        'hidden lg:flex lg:flex-col lg:border-r',
        isInner ? 'lg:w-80 xl:w-96' : 'lg:w-60 xl:w-72',
        className
      )}
    >
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
      <div className="p-3">
        <MenuContent />
      </div>
    </ScrollArea>
  )
}
