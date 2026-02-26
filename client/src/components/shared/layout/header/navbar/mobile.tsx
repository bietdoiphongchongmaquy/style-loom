"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ICMenu from "@/components/icons/ic-menu";
import { BrandButton } from "@/components/shared/brand/button";
import { DashedLine } from "@/components/shared/brand/dashed-line";
import { mainNavigation } from "@/data/mocks";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Link
        href="/"
        className="flex items-center justify-center"
      >
        <Image
          src="/logo/mobile.svg"
          alt="Style Loom Logo"
          width={129.43}
          height={24}
          priority
          className="object-contain"
        />
      </Link>

      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <button className="flex items-center justify-center rounded-[.625rem] bg-brown-70 p-[.875rem]">
            <span className="flex size-[1.75rem] shrink-0 items-center justify-center">
              <ICMenu className="size-[1.3125rem] text-dark-10" />
            </span>
          </button>
        </DrawerTrigger>

        <DrawerContent className="bg-dark rounded-none! border-0! py-[1rem]">
          <DashedLine
            color="var(--color-dark-15)"
            className="top-0 right-0 left-0"
          />

          <DrawerHeader className="sr-only">
            <DrawerTitle>Mobile Menu</DrawerTitle>
          </DrawerHeader>

          <nav className="container flex w-full flex-col gap-[.625rem]">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "flex w-full items-center justify-center rounded-[.5rem] px-[1.5rem] py-[.875rem] font-mono text-[.875rem] leading-[1.5]",
                    isActive
                      ? "bg-dark-10 text-white"
                      : "border border-dashed border-dark-15 text-grey-70",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="flex items-center justify-center"
            >
              <BrandButton
                variant="brown"
                className="w-full"
              >
                Contact
              </BrandButton>
            </Link>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
