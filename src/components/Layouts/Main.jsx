const config = {
  only: `mx-auto flex w-full max-w-[1100px] justify-center px-[2%] pt-20`,
  hasHeaderAndFooter: `mx-auto flex w-full max-w-[1100px] justify-center px-[2%] pt-2 pb-20 min-h-[calc(100vh-80px-160px)] md:min-h-[calc(100vh-132px-128px)]`,
};

const Main = ({ children, header, footer }) => {
  return (
    <main
      className={
        header
          ? footer
            ? config.hasHeaderAndFooter
            : config.only
          : config.only
      }
    >
      {children}
    </main>
  );
};

export default Main;
