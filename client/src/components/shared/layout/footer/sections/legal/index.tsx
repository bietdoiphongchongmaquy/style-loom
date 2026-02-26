import React from "react";
import Link from "next/link";

import { DashedLine } from "@/components/shared/brand/dashed-line";

const FooterLegalSection = () => {
  return (
    <div className="relative w-full">
      <DashedLine
        color="var(--color-dark-15)"
        className="top-0 right-0 left-0"
      />
      <div className="container flex w-full flex-col gap-[20px] py-[30px] md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[14px] leading-[1.5] text-grey-50">
          © 2024 StyleLoom. All rights reserved.
        </p>

        <div className="flex items-center gap-[10px]">
          <Link
            href="/terms"
            className="font-mono text-[14px] leading-[1.5] text-grey-50"
          >
            Terms & Conditions
          </Link>

          <div className="h-[21] w-px bg-dark-15" />

          <Link
            href="/policy"
            className="font-mono text-[14px] leading-[1.5] text-grey-50"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLegalSection;
