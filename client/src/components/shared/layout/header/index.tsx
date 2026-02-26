import { DashedLine } from "@/components/shared/brand/dashed-line";

import DesktopNavbar from "./navbar/desktop";
import MobileNavbar from "./navbar/mobile";

const Header = () => {
  return (
    <header className="relative w-full overflow-hidden">
      <DashedLine
        color="var(--color-dark-15)"
        className="right-[16px] bottom-0 left-[16px] md:right-[80px] md:left-[80px]"
      />
      <div className="container py-[20px]">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
