import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const brandButtonVariants = cva(
  // transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
  "relative z-0 inline-flex w-fit cursor-pointer items-center justify-center gap-[.25rem] rounded-[.5rem] px-[1.25rem] py-[.875rem] text-[.875rem] leading-[1.5] capitalize",
  {
    variants: {
      variant: {
        dark: "bg-dark-12 text-white",
        brown: "bg-brown-60 font-mono font-medium text-dark-06",
        dashed: "border border-dark-15 bg-dark-12 text-white",
      },
    },
    defaultVariants: {
      variant: "brown",
    },
  },
);

const BrandButtonBorder = () => {
  return (
    <>
      {/* 4 Corners */}
      <div className="pointer-events-none absolute -top-px -left-px z-[1] size-[1.0313rem] rounded-tl-[.5rem] border-t border-l border-brown-60"></div>
      <div className="pointer-events-none absolute -top-px -right-px z-[1] size-[1.0313rem] rounded-tr-[.5rem] border-t border-r border-brown-60"></div>
      <div className="pointer-events-none absolute -bottom-px -left-px z-[1] size-[1.0313rem] rounded-bl-[.5rem] border-b border-l border-brown-60"></div>
      <div className="pointer-events-none absolute -right-px -bottom-px z-[1] size-[1.0313rem] rounded-br-[.5rem] border-r border-b border-brown-60"></div>
    </>
  );
};

function BrandButton({
  className,
  variant = "brown",
  asChild = false,
  icon,
  iconPosition = "end",
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof brandButtonVariants> & {
    asChild?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
  }) {
  const Comp = asChild ? Slot.Root : "button";
  const hasIcon = Boolean(icon);

  return (
    <Comp
      data-slot="brand-button"
      data-variant={variant}
      className={cn(brandButtonVariants({ variant }), className)}
      {...props}
    >
      {iconPosition === "start" && hasIcon && (
        <span className="relative flex size-[1.25rem] items-center justify-center">
          {icon}
        </span>
      )}

      <Slot.Slottable>{children}</Slot.Slottable>

      {iconPosition === "end" && hasIcon && (
        <span className="relative flex size-[1.25rem] items-center justify-center">
          {icon}
        </span>
      )}

      {/* Border */}
      {variant === "dashed" && <BrandButtonBorder />}
    </Comp>
  );
}

export { BrandButton, brandButtonVariants };
