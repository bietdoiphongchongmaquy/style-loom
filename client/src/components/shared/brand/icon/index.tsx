import React from "react";

import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const brandIconVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center",
  {
    variants: {
      variant: {
        dark: "size-[3rem] rounded-[.5rem] bg-dark-10 p-[.875rem]",
        brown: "size-[3.5rem] rounded-[.5rem] bg-brown-80 p-[.875rem]",
        dashed: "size-[4.75rem] bg-transparent p-[.625rem]",
      },
    },
    defaultVariants: {
      variant: "dashed",
    },
  },
);

const contentSizeMap: Record<string, string> = {
  dark: "size-[1.25rem]",
  brown: "size-[1.75rem]",
  dashed: "size-[3.5rem]",
};

const BrandIconBorder = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 76 76"
        className="size-full"
      >
        <rect
          width="74.5"
          height="74.5"
          x=".75"
          y=".75"
          stroke="#262626"
          strokeDasharray="16 6"
          strokeWidth="1.5"
          rx="37.25"
        />
        <path
          stroke="#262626"
          strokeWidth="2"
          d="M61 38h15M0 38h15m23-23V0m0 76V61"
        />
      </svg>
    </div>
  );
};

function BrandIcon({
  className,
  variant = "dashed",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof brandIconVariants>) {
  const contentSize = contentSizeMap[variant ?? "dashed"];

  return (
    <div
      data-slot="brand-icon"
      data-variant={variant}
      className={cn(brandIconVariants({ variant }), className)}
      {...props}
    >
      {/* Border */}
      {variant === "dashed" && <BrandIconBorder />}

      <div
        className={cn(
          "relative z-[1] flex items-center justify-center",
          contentSize,
          variant === "dashed" && "rounded-[4rem] bg-dark-10 p-[.875rem]",
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { BrandIcon, brandIconVariants };
