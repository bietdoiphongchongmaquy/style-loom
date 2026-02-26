import React from "react";

import FooterCTASection from "./sections/cta";
import FooterLegalSection from "./sections/legal";
import FooterMarqueeSection from "./sections/marquee";
import FooterSocialSection from "./sections/social";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      <FooterMarqueeSection />
      <FooterSocialSection />
      <FooterCTASection />
      <FooterLegalSection />
    </footer>
  );
};

export default Footer;
