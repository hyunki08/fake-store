import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import Line from "./../common/Line";
import Logo from "./../common/Logo";

const SignInForm = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onChangeId = useCallback((e) => {
    setUserId(e.target.value);
  }, []);

  const onChangePw = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    }).then((res) => res.json());
    console.log(res);
  };

  return (
    <div className="shadow-gray min-h-[500px] w-full max-w-[550px] overflow-hidden rounded-3xl px-4 py-4 shadow-lg">
      <div className="flex h-[100px] w-full justify-center">
        <Logo className="h-[100px] w-[100px]" />
      </div>
      <form onSubmit={handleSubmit}>
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
      </form>
      <Line className="mt-6" />
      <button className="mt-6 h-12 w-full rounded-full border-2 border-solid border-[rgb(180,180,180)] transition-all hover:border-none hover:bg-[rgb(54,97,235)] hover:text-[rgb(240,240,240)]">
        Sign Up
      </button>
    </div>
  );
};

export default SignInForm;
