export interface SideBarRoute {
    title: string
    key: string
    path: string
    icon: React.ReactNode
    shortcut_key: string | number
    type: 'route'
}

export interface SideBarCatalog {
    title: string
    key: string
    children: SideBarRoute[]
    type: 'catalog'
    icon?: React.ReactNode
}

export type SideBarRoutes = Array<SideBarRoute | SideBarCatalog>
