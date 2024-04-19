"use client";

import { Button } from "@/components/ui";
import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";

import { MOBILE_SCROLL_THRESHOLD, SCROLL_AREA_ID } from "@/lib";

import Link from "next/link";
import { memo, useEffect, useState } from "react";


export interface FloatingHeaderProps {
  scrollTitle?: string;
  title?: string;
  goBackLink?: string;
  children?: React.ReactNode;
}

export const NavHeader = memo(
  ({ scrollTitle, title, goBackLink, children }: FloatingHeaderProps) => {
    const [transformValues, setTransformValues] = useState({
      translateY: 0,
      opacity: scrollTitle ? 0 : 1,
    });

    useEffect(() => {
      const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`);

      const onScroll = (e: any) => {
        const scrollY = e.target.scrollTop;

        const translateY = Math.max(100 - scrollY, 0);
        const opacity = Math.min(
          Math.max(
            +(
              (scrollY -
                MOBILE_SCROLL_THRESHOLD *
                (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / 100))) /
              100
            ).toFixed(2),
            0
          ),
          1
        );

        setTransformValues({ translateY, opacity });
      };

      if (scrollTitle) {
        scrollAreaElem?.addEventListener("scroll", onScroll, {
          passive: true,
        });
      }
      return () => scrollAreaElem?.removeEventListener("scroll", onScroll);
    }, [scrollTitle]);

    return (
      <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-14 w-full shrink-0 items-center overflow-hidden border-b text-sm font-medium bg-background">
        <div className="flex h-full w-full items-center px-3">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex flex-1 items-center gap-1 lg:hidden">
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
                {title && (
                  <span className="line-clamp-2 font-semibold tracking-tight">
                    {title}
                  </span>
                )}
              </div>
            </div>
            {scrollTitle && (
              <div className="flex min-w-[50px] justify-end">{children}</div>
            )}
          </div>
        </div>
      </header>
    );
  }
);

NavHeader.displayName = "NavHeader";
