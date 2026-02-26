"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import ICCart from "@/components/icons/ic-cart";
import { BrandButton } from "@/components/shared/brand/button";
import { BrandIcon } from "@/components/shared/brand/icon";
import { mainNavigation } from "@/data/mocks";

const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <nav className="flex items-center justify-center gap-[10px]">
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
      </nav>

      <Link
        href="/"
        className="flex items-center justify-center"
      >
        <Image
          src="/logo/desktop.svg"
          alt="Style Loom Logo"
          width={129.43}
          height={24}
          priority
          className="object-contain"
        />
      </Link>

      <div className="flex items-center justify-center gap-[10px]">
        <button className="flex cursor-pointer items-center justify-center">
          <BrandIcon variant="dark">
            <ICCart className="size-[17.41px] text-white" />
          </BrandIcon>
        </button>

        <Link
          href="/contact"
          className="flex items-center justify-center"
        >
          <BrandButton variant="brown">Contact</BrandButton>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
