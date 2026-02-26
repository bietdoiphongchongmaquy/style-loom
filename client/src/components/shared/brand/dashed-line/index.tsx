import React from "react";

import { cn } from "@/lib/utils";

type DashedLineProps = {
  color?: string;
  dashLength?: number;
  gap?: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const DashedLine = ({
  color = "var(--color-dark-15)",
  dashLength = 16,
  gap = 6,
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";
  const total = dashLength + gap;
  const direction = isHorizontal ? "to right" : "to bottom";

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        isHorizontal ? "h-px" : "w-px",
        className,
      )}
      style={{
        background: `repeating-linear-gradient(${direction}, ${color} 0, ${color} ${dashLength}px, transparent ${dashLength}px, transparent ${total}px)`,
      }}
    />
  );
};

export { DashedLine };
