import { Menu, ShoppingCart } from "@mui/icons-material";
import { NavMenu } from "../../constants/Nav";
import logo from "../../Assets/images/logo512.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-white md:top-[-36px]">
      <div className="flex flex-col">
        <div className="absolute top-0 z-[-1] hidden h-9 w-full bg-[rgb(240,240,240)] md:block"></div>
        <div className="mx-auto hidden h-9 w-full max-w-[1100px] px-[2%] md:flex md:items-center md:justify-end">
          <div className="cursor-pointer p-2 text-sm transition-all hover:text-[rgb(100,100,100)]">
            Sign In
          </div>
          <div className="hidden cursor-pointer p-2 text-sm transition-all hover:text-[rgb(100,100,100)]">
            Sign Out
          </div>
        </div>
        <nav className="mx-auto flex h-20 w-full max-w-[1100px] justify-between px-[2%] py-6 md:h-24">
          <div className="w-[64px] cursor-pointer px-2">
            <img src={logo} alt="" className="h-full object-contain" />
          </div>
          <div className="hidden md:flex md:w-[calc(100%-252px)] md:justify-center md:gap-2">
            {NavMenu.map((v) => (
              <div
                className="cursor-pointer rounded-full p-3 transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]"
                key={v.path}
              >
                {v.name}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <div className="w-[32px] cursor-pointer rounded-full p-1 hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)] md:w-[48px] md:p-3">
              <ShoppingCart />
            </div>
            <div className="w-[32px] cursor-pointer rounded-full p-1 hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)] md:hidden md:w-[48px] md:p-3">
              <Menu className="mb-2" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
