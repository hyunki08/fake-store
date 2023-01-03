import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo512.png";

const Logo = memo(({ className }) => {
  return (
    <Link className={`${className} inline-block cursor-pointer`} to={"/"}>
      <img
        className="h-full w-full object-contain"
        src={logo}
        alt="Fake Store Home"
      />
    </Link>
  );
});
Logo.displayName = "Logo";

export default Logo;
