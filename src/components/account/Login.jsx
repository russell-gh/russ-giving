import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectUser, setLogginIn, setScreen } from "../../redux/accountSlice";
import EmailPasswordForm from "./EmailPasswordForm";
import sha256 from "sha256";
import { useSelector } from "react-redux";
import { setMessage } from "../../redux/campaignSlice";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = sha256(userInput.password + "cohort16");

    if (user.password === hashedPassword) {
      dispatch(setMessage("Logins correct"));
      dispatch(setScreen(2));
      dispatch(setLogginIn());
    } else {
      dispatch(setMessage("Logins did not match, please try again!"));
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onInput={onInput} onSubmit={onSubmit}>
        <EmailPasswordForm name="Login" />
      </form>
    </>
  );
};

export default Login;
