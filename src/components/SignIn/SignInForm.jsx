import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo512.png";

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
        <input
          className="peer/id h-full w-full px-4 py-3 text-[rgb(34,34,34)] focus:outline-0"
          type="text"
          name="ID"
          value={userId}
          onChange={onChangeId}
        />
        <label className="absolute top-[-0.7rem] left-[1.05rem] select-none text-[rgb(180,180,180)] transition-all peer-focus/id:text-[rgb(100,100,100)]">
          ID
        </label>
        <fieldset className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 rounded-lg border-2 border-solid border-[rgb(180,180,180)] transition-all">
          <legend className="peer- invisible ml-2 h-1 px-2">ID</legend>
        </fieldset>
      </div>
      <div className="relative mt-6 h-[56px]">
        <input
          className="peer/pw h-full w-full px-4 py-3 text-[rgb(34,34,34)] focus:outline-0"
          type="password"
          name="password"
          value={userPw}
          onChange={onChangePw}
        />
        <label className="absolute top-[-0.7rem] left-[1.05rem] select-none text-[rgb(180,180,180)] transition-all peer-focus/pw:text-[rgb(100,100,100)]">
          Password
        </label>
        <fieldset className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 rounded-lg border-2 border-solid border-[rgb(180,180,180)] transition-all">
          <legend className="invisible ml-2 h-1 px-2">Password</legend>
        </fieldset>
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
