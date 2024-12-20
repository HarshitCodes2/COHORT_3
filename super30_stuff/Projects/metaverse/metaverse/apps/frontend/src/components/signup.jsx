import { Button } from "./sign/button";
import { InputDiv, InputSelectDiv } from "./sign/inputdiv";
import { useRecoilState } from "recoil";
import { username, password, role } from "../../store/sign/signupState";
import axios from "axios";

export const SignUpPage = () => {
  const [usernameVal, setUsernameVal] = useRecoilState(username);
  const [passwordVal, setPasswordVal] = useRecoilState(password);
  const [roleVal, setRoleVal] = useRecoilState(role);

  return (
    <>
      <div className="min-h-screen min-w-screen bg-black-800 text-grey-200 flex justify-center items-center">
        <div className="w-96 mx-auto border border-grey-800 rounded-md px-10 py-5 flex flex-col gap-8">
          <h1 className="text-grey-100 text-4xl">Sign Up</h1>
          <div className="flex flex-col gap-4">
            <InputDiv
              labelName={"User Name"}
              placeHolder={"JohnDoe121"}
              onChange={(e) => {
                setUsernameVal(e.target.value);
              }}
            />
            <InputDiv
              labelName={"Password"}
              placeHolder={"A Strong Password"}
              onChange={(e) => {
                setPasswordVal(e.target.value);
              }}
            />
            <InputSelectDiv
              onChange={(e) => {
                setRoleVal(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <Button
            onClick={async () => {
              //make api call to sign up
              try {
                console.log("Try");
                const res = await axios.post("http://localhost:3000/api/v1/signup", {
                  username: usernameVal,
                  password: passwordVal,
                  type: roleVal,
                });
                console.log(res);
              } catch (e) {
                console.log(e);
                if(e.response){
                  alert(e.response);
                }else{
                  alert(e.message);
                }
              }
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};
