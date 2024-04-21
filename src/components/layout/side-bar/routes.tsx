import { Icons } from '@/components/icons'
import { SideBarRoute, SideBarRoutes } from '@/interface'

import React from 'react'

export const sideBarRoutes: SideBarRoutes = [
    {
        title: 'Dashboard',
        key: 'Digit1',
        shortcut_key: 1,
        path: '/dashboard',
        icon: <Icons.Dashboard />,
        type: 'route',
    },
    {
        title: 'Post',
        key: 'Post',
        type: 'catalog',
        children: [
            {
                title: 'Draft',
                key: 'Digit2',
                shortcut_key: 2,
                path: '/draft',
                icon: <Icons.Draft />,
                type: 'route',
            },
            {
                title: 'Post',
                key: 'Digit3',
                shortcut_key: 3,
                path: '/post',
                icon: <Icons.Post />,
                type: 'route',
            },
        ],
    },
    {
        title: 'Picture',
        key: 'Digit4',
        shortcut_key: 4,
        path: '/picture',
        icon: <Icons.Photo />,
        type: 'route',
    },
    {
        title: 'Audio',
        key: 'Digit5',
        shortcut_key: 5,
        path: '/audio',
        icon: <Icons.Music />,
        type: 'route',
    },
]

const mapping: Map<string, string> = new Map()
const eventKey: string[] = []
function generateKeyCodePathnameMapping(
    params: SideBarRoutes,
    map: typeof mapping
) {
    return params.reduce((pre, cur) => {
        if ('children' in cur) {
            generateKeyCodePathnameMapping(cur.children, map)
        } else {
            const routeItem = cur as SideBarRoute
            map.set(routeItem.key, routeItem.path)
            eventKey.push(cur.key)
        }
        return pre
    }, map)
}

generateKeyCodePathnameMapping(sideBarRoutes, mapping)

export const keyCodePathnameMapping = mapping
export const eventKeyTrigger = eventKey
