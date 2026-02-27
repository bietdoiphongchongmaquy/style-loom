import DesktopNavbar from "./navbar/desktop";
import MobileNavbar from "./navbar/mobile";

const Header = () => {
  return (
    <header className="sticky top-0 z-[10] container w-full overflow-hidden bg-dark-06">
      <div className="w-full border-b border-dark-15 py-[20px] text-dark-15">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
