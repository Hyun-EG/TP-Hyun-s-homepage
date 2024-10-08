import Header from "./Header";
import Nav from "./Nav";
import Contents from "./Contents";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Nav />
      <Contents>{children}</Contents>
    </>
  );
};

export default Layout;
