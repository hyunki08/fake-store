import Input from "../common/Input";
import Line from "./../common/Line";
import Logo from "./../common/Logo";
import Button from "./../common/Button";

const SignInForm = ({
  onClickSignIn,
  onClickSignUp,
  userId,
  onChangeId,
  idInputError,
  userPw,
  onChangePw,
  pwInputError,
  disabled,
}) => {
  return (
    <div className="shadow-gray min-h-[500px] w-full max-w-[550px] overflow-hidden rounded-3xl px-4 py-4 shadow-lg">
      <div className="flex h-[100px] w-full justify-center">
        <Logo className="h-[100px] w-[100px]" />
      </div>
      <form onSubmit={onClickSignIn}>
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
            name="Password"
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
      <Button
        className="mt-6 h-12 w-full"
        disabled={disabled}
        onClick={onClickSignUp}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default SignInForm;
