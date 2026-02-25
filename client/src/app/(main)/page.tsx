import React from "react";

import ICLink from "@/components/icon/ic-link";
import { BrandButton } from "@/components/shared/brand/button";

const MainPage = () => {
  return (
    <div>
      MainPage
      <BrandButton
        variant="dark"
        iconPosition="end"
        icon={<ICLink className="size-[.8594rem] text-current" />}
      >
        shop now
      </BrandButton>
    </div>
  );
};

export default MainPage;
