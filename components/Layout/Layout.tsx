import React, { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="main px-40">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
