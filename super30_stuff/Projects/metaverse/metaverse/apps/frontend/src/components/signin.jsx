import { Button } from "./sign/button";
import { InputDiv } from "./sign/inputdiv";

export const SignInPage = () => {
  return (
    <>
      <div className="max-w-md mx-auto flex flex-col items-center">
        <h1>Sign Up</h1>
        <div className="felx flex-col">
          <InputDiv labelName={"User Name"} placeHolder={"Your Username"} />
          <InputDiv labelName={"Password"} placeHolder={"Your Password"} />
        </div>
        <Button>Sign In</Button>
      </div>
    </>
  );
};
