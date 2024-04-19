import { ScrollArea } from "@/components/scroll-area";

import { SideBar } from "@/components/layout";

import { NavHeader } from "@/components/nav-header";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "数据中心",
  description: "数据中心",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="min-h-screen flex lg:gap-4">
      <aside className="lg:flex bg-background">
        <SideBar className="relative hidden lg:flex lg:min-h-100lvh" />
      </aside>
      <div className="flex flex-1">
        <ScrollArea className="flex flex-col">
          <NavHeader scrollTitle="M" />
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
