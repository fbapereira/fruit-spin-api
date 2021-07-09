import { ChangeEvent, FormEventHandler, useState } from "react";
import "./login.component.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const updatePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = () => {
    if (!email || !password) {
      alert('All fields are mandatory')
      return;
    }
    alert('Welcome')
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          className="field"
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={updateEmail}
        ></input>
        <input
          className="field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        ></input>
        <button type="submit" className="button green login">
          Login
        </button>
      </form>
    </div>
  );
};
