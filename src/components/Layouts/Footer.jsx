import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="flex h-40 w-full justify-center bg-[rgb(34,34,34)] md:h-32">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-4 px-[2%] pt-8 md:flex-row">
        <div className="flex h-10 w-1/2 gap-2 md:h-full">
          <div className="flex h-8 gap-2">
            <div className="group cursor-pointer rounded-full p-1 hover:bg-[rgb(240,240,240)]">
              <Instagram className="mb-2 text-[rgb(240,240,240)] group-hover:text-[rgb(34,34,34)]" />
            </div>
            <div className="group cursor-pointer rounded-full p-1 hover:bg-[rgb(240,240,240)]">
              <Facebook className="mb-2 text-[rgb(240,240,240)] group-hover:text-[rgb(34,34,34)]" />
            </div>
            <div className="group cursor-pointer rounded-full p-1 hover:bg-[rgb(240,240,240)]">
              <Twitter className="mb-2 text-[rgb(240,240,240)] group-hover:text-[rgb(34,34,34)]" />
            </div>
            <div className="group cursor-pointer rounded-full p-1 hover:bg-[rgb(240,240,240)]">
              <YouTube className="mb-2 text-[rgb(240,240,240)] group-hover:text-[rgb(34,34,34)]" />
            </div>
          </div>
        </div>
        <div className="h-10 w-1/2 text-[rgb(240,240,240)] md:h-full">
          Hello, Welcome to Fake Store!
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
