"use client"

import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from "@/components/ui";

import { MenuContent } from "@/components/layout";
import { Icons } from "@/components/icons";


export function MobileDrawer() {
	return (
		<Drawer>
			<DrawerTrigger>
				<Icons.Logo />
			</DrawerTrigger>
			<DrawerContent>
				<div className="flex-1 overflow-y-auto rounded-t-lg bg-white">
					<div className="pointer-events-none sticky inset-x-0 top-0 flex h-10 items-center justify-center overflow-hidden bg-white">
						<div className="h-1.5 w-12 shrink-0 rounded-full bg-gray-300" />
					</div>
					<div className="p-4">
						<MenuContent />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
