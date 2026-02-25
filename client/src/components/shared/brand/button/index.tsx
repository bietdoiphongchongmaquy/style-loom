import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import ICLink from "@/components/icon/ic-link";

const brandButtonVariants = cva(
  // transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
  "relative inline-flex w-fit items-center justify-center gap-[.25rem] rounded-[.5rem] px-[1.25rem] py-[.875rem] text-[.875rem] leading-[1.5] capitalize",
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

function BrandButton({
  className,
  variant = "brown",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof brandButtonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="brand-button"
      data-variant={variant}
      className={cn(brandButtonVariants({ variant, className }))}
      {...props}
    >
      <Slot.Slottable>{children}</Slot.Slottable>

      {/* Icon */}
      {variant !== "brown" && (
        <span className="relative flex size-[1.25rem] items-center justify-center">
          <ICLink className={cn("size-[.8594rem] text-current")} />
        </span>
      )}

      {/* Border */}
      {variant === "dashed" && (
        <>
          {/* Top border */}
          <div className="pointer-events-none absolute top-0 right-[1.0313rem] left-[1.0313rem] flex h-px gap-[.375rem] px-[.25rem]">
            <div className="h-full w-full bg-dark-25"></div>
            <div className="h-full w-full bg-dark-25"></div>
            <div className="h-full w-full bg-dark-25"></div>
            <div className="h-full w-full bg-dark-25"></div>
          </div>

          {/* Bottom border */}
          <div className="pointer-events-none absolute right-[1.0313rem] bottom-0 left-[1.0313rem] flex h-px gap-[.375rem] px-[.25rem]">
            <div className="h-full w-full bg-dark-25"></div>
            <div className="h-full w-full bg-dark-25"></div>
            <div className="h-full w-full bg-dark-25"></div>
            <div className="h-full w-full bg-dark-25"></div>
          </div>

          {/* Left border */}
          <div className="pointer-events-none absolute top-[1.0313rem] bottom-[1.0313rem] left-0 flex w-px py-[.25rem]">
            <div className="h-full w-full bg-dark-25"></div>
          </div>

          {/* Right border */}
          <div className="pointer-events-none absolute top-[1.0313rem] right-0 bottom-[1.0313rem] flex w-px py-[.25rem]">
            <div className="h-full w-full bg-dark-25"></div>
          </div>

          {/* 4 Corners */}
          <div className="pointer-events-none absolute top-0 left-0 size-[1.0313rem] rounded-tl-[.5rem] border-t border-l border-brown-60"></div>
          <div className="pointer-events-none absolute top-0 right-0 size-[1.0313rem] rounded-tr-[.5rem] border-t border-r border-brown-60"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 size-[1.0313rem] rounded-bl-[.5rem] border-b border-l border-brown-60"></div>
          <div className="pointer-events-none absolute right-0 bottom-0 size-[1.0313rem] rounded-br-[.5rem] border-r border-b border-brown-60"></div>
        </>
      )}
    </Comp>
  );
}

export { BrandButton, brandButtonVariants };
