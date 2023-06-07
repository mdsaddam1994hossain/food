import React, { FC, ReactNode } from "react";
import BottomTab from "../Footer/BottomTab";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header className="sticky top-0">
        <Header />
      </header>
      <main className="main px-4">{children}</main>

      <BottomTab />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
