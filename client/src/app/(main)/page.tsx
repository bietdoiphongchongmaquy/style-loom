import React from "react";

import ICLink from "@/components/icons/ic-link";
import { BrandButton } from "@/components/shared/brand/button";
import { BrandIcon } from "@/components/shared/brand/icon";

import HeroSection from "./_sections/hero";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      MainPage
      <BrandButton
        variant="dashed"
        iconPosition="end"
        icon={<ICLink className="size-[.8594rem] text-current" />}
      >
        shop now
      </BrandButton>
      <BrandIcon variant="dashed">
        <ICLink className="size-[21px] text-current" />
      </BrandIcon>
    </>
  );
};

export default MainPage;
