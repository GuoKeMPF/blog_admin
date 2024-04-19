import { sideBarRoutes } from './'

import { Icons } from '@/components/icons'
import { NavigationLink } from '@/components/navigation-link'
import { Avatar, Separator } from '@/components/ui'

import Link from 'next/link'

import { Fragment } from 'react'

import type { SideBarCatalog, SideBarRoute, SideBarRoutes } from '@/interface'

const MenuList = ({ menus }: { menus: SideBarRoute | SideBarCatalog }) => {
  if ('children' in menus) {
    const iconCmp = menus.icon ?? <Icons.At />
    return (
      <Fragment>
        <Separator />
        <div
          className={
            'group flex items-center justify-between rounded-lg p-4 text-lg font-semibold'
          }
        >
          <span className="flex items-center gap-2">
            <span className={'font-medium'}>{menus.title}</span>
            {iconCmp}
          </span>
        </div>

        {(menus.children || []).map((item) => (
          <MenuList menus={item} key={item.key} />
        ))}
        <Separator />
      </Fragment>
    )
  } else {
    const routeItem = menus as SideBarRoute
    return (
      <NavigationLink
        key={routeItem.path}
        href={routeItem.path}
        label={routeItem.title}
        icon={routeItem.icon}
        shortcut_key={routeItem.shortcut_key}
      />
    )
  }
}

export const MenuContent = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="link-card inline-flex items-center gap-2 px-4"
        >
          <Avatar className="h-8 w-8">
            <Icons.Logo />
          </Avatar>

        </Link>

        <Separator />
        <div className="flex flex-col gap-2">
          {sideBarRoutes.map((item, linkIndex) => (
            <MenuList key={item.key} menus={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
