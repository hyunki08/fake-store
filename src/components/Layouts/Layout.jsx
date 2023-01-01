import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = ({ children, header = true, footer = true }) => {
  return (
    <>
      {header && <Header />}
      <Main
        className={`min-h-[calc(100vh-${header && "80px"}-${
          footer && "160px"
        })] md:min-h-[calc(100vh-${header && "132px"}-${footer && "128px"})]`}
      >
        {children}
      </Main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
