

import { sideBarRoutes } from "./";

import { Icons } from "@/components/icons";
import { NavigationLink } from "@/components/navigation-link";
import { Avatar, Separator } from "@/components/ui";


import Link from "next/link";




export const MenuContent = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="link-card inline-flex items-center gap-2 px-4 py-4"
        >
          <Avatar className="h-8 w-8">
            <Icons.Logo />
          </Avatar>
        </Link>

        <Separator />
        <div className="flex flex-col gap-2">
          {sideBarRoutes.map((link, linkIndex) => (
            <NavigationLink
              key={link.path}
              href={link.path}
              label={link.title}
              icon={link.icon}
              shortcutNumber={linkIndex + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
