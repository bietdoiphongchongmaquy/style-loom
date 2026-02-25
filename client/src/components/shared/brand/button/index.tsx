import React from "react";
import Link, { LinkProps } from "next/link";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import ICLink from "@/components/icon/ic-link";

// 1. Định nghĩa các Variant bằng CVA
const brandButtonVariants = cva(
  // transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
  "relative inline-flex w-fit items-center justify-center gap-[4px] rounded-[8px] px-[20px] py-[14px] text-[14px] leading-[1.5] capitalize",
  {
    variants: {
      variant: {
        dark: "bg-dark-12 text-white",
        brown: "bg-brown-60 font-mono font-medium text-dark-06",
        dashed: "bg-dark-12 text-white",
      },
    },
    defaultVariants: {
      variant: "brown",
    },
  },
);

// 2. Khai báo Props (Kết hợp thẻ <a>, Next.js LinkProps và Variant)
export interface BrandButtonProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps,
    VariantProps<typeof brandButtonVariants> {}

// 3. Khởi tạo Component với forwardRef
const BrandButton = React.forwardRef<HTMLAnchorElement, BrandButtonProps>(
  ({ className, variant, href, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(brandButtonVariants({ variant, className }))}
        {...props}
      >
        {/* NỘI DUNG CHỮ */}
        <span className="relative z-10">{children}</span>

        {/* ICON */}
        {variant !== "brown" && (
          <span className="relative z-10 flex size-[20px] items-center justify-center">
            <ICLink className={cn("size-[13.75px] text-current")} />
          </span>
        )}

        {/* CÁC VIỀN TRANG TRÍ RIÊNG CHO OPTION "DASHED" */}
        {variant === "dashed" && (
          <>
            {/* Cạnh trên */}
            <div className="pointer-events-none absolute top-0 right-[16.5px] left-[16.5px] flex h-px gap-[6px] px-[4px]">
              <div className="h-full w-full bg-dark-25"></div>
              <div className="h-full w-full bg-dark-25"></div>
              <div className="h-full w-full bg-dark-25"></div>
              <div className="h-full w-full bg-dark-25"></div>
            </div>

            {/* Cạnh dưới */}
            <div className="pointer-events-none absolute right-[16.5px] bottom-0 left-[16.5px] flex h-px gap-[6px] px-[4px]">
              <div className="h-full w-full bg-dark-25"></div>
              <div className="h-full w-full bg-dark-25"></div>
              <div className="h-full w-full bg-dark-25"></div>
              <div className="h-full w-full bg-dark-25"></div>
            </div>

            {/* Cạnh trái */}
            <div className="pointer-events-none absolute top-[16.5px] bottom-[16.5px] left-0 flex w-px py-[4px]">
              <div className="h-full w-full bg-dark-25"></div>
            </div>

            {/* Cạnh phải */}
            <div className="pointer-events-none absolute top-[16.5px] right-0 bottom-[16.5px] flex w-px py-[4px]">
              <div className="h-full w-full bg-dark-25"></div>
            </div>

            {/* 4 Góc viền */}
            <div className="pointer-events-none absolute top-0 left-0 size-[16.5px] rounded-tl-[8px] border-t border-l border-brown-60"></div>
            <div className="pointer-events-none absolute top-0 right-0 size-[16.5px] rounded-tr-[8px] border-t border-r border-brown-60"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 size-[16.5px] rounded-bl-[8px] border-b border-l border-brown-60"></div>
            <div className="pointer-events-none absolute right-0 bottom-0 size-[16.5px] rounded-br-[8px] border-r border-b border-brown-60"></div>
          </>
        )}
      </Link>
    );
  },
);
BrandButton.displayName = "BrandButton";

export { BrandButton, brandButtonVariants };
