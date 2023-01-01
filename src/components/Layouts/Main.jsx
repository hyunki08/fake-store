const Main = ({ children, className }) => {
  return (
    <main
      className={
        "mx-auto flex w-full max-w-[1100px] justify-center px-[2%] pt-2 pb-20 " +
        className
      }
    >
      {children}
    </main>
  );
};

export default Main;
