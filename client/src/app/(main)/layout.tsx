import { ReactNode } from "react";

import Footer from "@/components/shared/layout/footer";
import Header from "@/components/shared/layout/header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
