import { Icons } from "@/components/icons";

import React from "react";


interface SideBarRoute {
  title: string;
  key: string;
  path: string;
  icon: React.ReactNode
}



export const sideBarRoutes: SideBarRoute[] = [
  {
    title: "Dashboard",
    key: 'Digit1',
    path: "/dashboard",
    icon: <Icons.Dashboard />,
  },
]


export const keyCodePathnameMapping: Map<string, string> = new Map(sideBarRoutes.map(item => [item.key, item.path]))
