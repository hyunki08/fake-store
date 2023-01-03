import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../Assets/images/logo512.png";
import Input from "../common/Input";

const SignInForm = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };
  const onChangePw = (e) => {
    setUserPw(e.target.value);
  };

  return (
    <div className="shadow-gray min-h-[500px] w-full max-w-[550px] overflow-hidden rounded-3xl px-4 py-4 shadow-lg">
      <div className="flex h-[100px] w-full justify-center">
        <Link to={"/"}>
          <img
            className="h-[100px] w-[100px] cursor-pointer"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="relative mt-12 h-[56px]">
        <Input type="text" name="ID" value={userId} onChange={onChangeId} />
      </div>
      <div className="relative mt-6 h-[56px]">
        <Input
          type="password"
          name="password"
          value={userPw}
          onChange={onChangePw}
        />
      </div>
      <button className="mt-6 h-12 w-full rounded-full bg-[rgb(138,207,237)] transition-all hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)] md:text-lg">
        Sign In
      </button>
      <div className="mt-6 h-[1px] w-full bg-[rgb(220,220,220)]"></div>
      <button className="mt-6 h-12 w-full rounded-full border-2 border-solid border-[rgb(180,180,180)] transition-all hover:border-none hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]">
        Sign Up
      </button>
    </div>
  );
};

export default SignInForm;
