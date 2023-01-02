import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ header = false, footer = false }) => {
  return (
    <>
      {header && <Header />}
      <Main header={header} footer={footer}>
        <Outlet />
      </Main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
