import { useCallback, useState } from "react";
import Input from "../common/Input";
import Line from "./../common/Line";
import Logo from "./../common/Logo";
import Button from "./../common/Button";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [_, setUser] = useSessionStorage("user", {});
  const [disabled, setDisabled] = useState(false);
  const [userId, setUserId] = useState("");
  const [idInputError, setIdInputError] = useState(false);
  const [userPw, setUserPw] = useState("");
  const [pwInputError, setPwInputError] = useState(false);
  const navigate = useNavigate();

  const onChangeId = useCallback((e) => {
    setIdInputError(false);
    setUserId(e.target.value);
  }, []);

  const onChangePw = useCallback((e) => {
    setPwInputError(false);
    setUserPw(e.target.value);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userId.length < 4) {
      setIdInputError(true);
      return;
    }
    if (userPw.length < 4) {
      setPwInputError(true);
      return;
    }

    setDisabled(true);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
      headers: headers,
    }).then((res) => res.json());

    setUser({ ...res, username: userId });
    navigate(-1);
  };

  return (
    <div className="shadow-gray min-h-[500px] w-full max-w-[550px] overflow-hidden rounded-3xl px-4 py-4 shadow-lg">
      <div className="flex h-[100px] w-full justify-center">
        <Logo className="h-[100px] w-[100px]" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative mt-12 h-[56px]">
          <Input
            type="text"
            name="ID"
            value={userId}
            onChange={onChangeId}
            error={idInputError}
          />
        </div>
        <div className="relative mt-6 h-[56px]">
          <Input
            type="password"
            name="password"
            value={userPw}
            onChange={onChangePw}
            error={pwInputError}
          />
        </div>
        <Button className="mt-6 h-12 w-full" filled disabled={disabled}>
          Sign In
        </Button>
      </form>
      <Line className="mt-6" />
      <Button className="mt-6 h-12 w-full" disabled={disabled}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignInForm;
