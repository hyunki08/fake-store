import { Menu, Close, ShoppingCart } from "@mui/icons-material";
import { NavMenu } from "../../constants/Nav";
import { Link, useLocation } from "react-router-dom";
import Logo from "./../common/Logo";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useSessionStorage("user", {});
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const location = useLocation();

  const onClickSignOut = () => {
    alert("You have been logged out.");
    setUser({});
  };

  const onClickMobileMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
    setCategory(
      NavMenu.find(
        (v) =>
          v.path === location.pathname || v.secondaryPath === location.pathname
      )?.name
    );
  }, [location.pathname]);
  console.log(location);
  return (
    <header className="sticky top-0 z-10 w-full bg-white md:top-[-36px]">
      <div className="flex flex-col">
        <div className="absolute top-0 z-[-1] hidden h-9 w-full bg-[rgb(240,240,240)] md:block"></div>
        <div className="mx-auto hidden h-9 w-full max-w-[1100px] px-[2%] md:flex md:items-center md:justify-end">
          <Link
            to={"/signin"}
            className={`cursor-pointer p-2 text-sm transition-all hover:text-[rgb(100,100,100)] ${
              Object.keys(user).length > 0 ? "hidden" : ""
            }`}
          >
            Sign In
          </Link>
          <div
            className={`cursor-pointer p-2 text-sm transition-all hover:text-[rgb(100,100,100)] ${
              Object.keys(user).length > 0 ? "" : "hidden"
            }`}
            onClick={onClickSignOut}
          >
            Sign Out
          </div>
        </div>
        <nav className="mx-auto flex h-20 w-full max-w-[1100px] justify-between px-[2%] py-6 md:h-24">
          <Logo className="w-[64px] px-2" />
          <div className="hidden md:flex md:w-[calc(100%-252px)] md:justify-center md:gap-2">
            {NavMenu.map((v) => (
              <Link
                to={v.path}
                className="cursor-pointer rounded-full p-3 transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]"
                key={v.path}
              >
                {v.name}
              </Link>
            ))}
          </div>
          {category && (
            <div className="flex items-center justify-center text-lg font-bold">
              {category}
            </div>
          )}
          <div className="flex gap-3">
            <Link
              to={"/cart"}
              className="w-[32px] cursor-pointer rounded-full p-1 hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)] md:w-[48px] md:p-3"
            >
              <ShoppingCart />
            </Link>
            <div className="w-[32px] cursor-pointer rounded-full p-1 hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)] md:hidden md:w-[48px] md:p-3">
              {open ? (
                <Close className="mb-2" onClick={onClickMobileMenu} />
              ) : (
                <Menu className="mb-2" onClick={onClickMobileMenu} />
              )}
            </div>
            {open && (
              <div className="fixed top-[80px] left-0 right-0 flex h-[calc(100vh-80px)] flex-col gap-6 overflow-hidden bg-white px-4 py-10">
                {NavMenu.map((v) => (
                  <Link
                    to={v.path}
                    className="cursor-pointer rounded-full p-3 transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]"
                    key={v.path}
                  >
                    {v.name}
                  </Link>
                ))}
                <Link
                  className="mt-8 cursor-pointer rounded-full p-3 transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]"
                  to={"/signin"}
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
