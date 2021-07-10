import "./login.component.scss";
import { ChangeEvent, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

import { loginUser } from "../actions/authentication.action";

export const Login = (): ReactElement => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const updatePassword = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("All fields are mandatory");
      return;
    }
    dispatch(loginUser({  email, password }));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input className="field" type="text" placeholder="E-mail" value={email} onChange={updateEmail}></input>
        <input
          className="field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        ></input>
        <button type="submit" className="button green login-button">
          Login
        </button>
      </form>
    </div>
  );
};
