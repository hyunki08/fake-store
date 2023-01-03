import SignInForm from "../components/SignIn/SignInForm";
import { useSessionStorage } from "./../hooks/useSessionStorage";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetTitle } from "../hooks/useTitle";

const SignIn = () => {
  const [_, setUser] = useSessionStorage("user", {});
  const [disabled, setDisabled] = useState(false);
  const [userId, setUserId] = useState("");
  const [idInputError, setIdInputError] = useState(false);
  const [userPw, setUserPw] = useState("");
  const [pwInputError, setPwInputError] = useState(false);
  const navigate = useNavigate();

  useSetTitle("Sign In");

  const onChangeId = useCallback((e) => {
    setIdInputError(false);
    setUserId(e.target.value);
  }, []);

  const onChangePw = useCallback((e) => {
    setPwInputError(false);
    setUserPw(e.target.value);
  }, []);

  const onClickSignIn = async (e) => {
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

  const onClickSignUp = () => {
    alert("Currently not available.");
  };
  return (
    <>
      <h2 className="blind">Sign In</h2>
      <SignInForm
        onClickSignIn={onClickSignIn}
        onClickSignUp={onClickSignUp}
        userId={userId}
        onChangeId={onChangeId}
        idInputError={idInputError}
        userPw={userPw}
        onChangePw={onChangePw}
        pwInputError={pwInputError}
        disabled={disabled}
      />
    </>
  );
};

export default SignIn;
