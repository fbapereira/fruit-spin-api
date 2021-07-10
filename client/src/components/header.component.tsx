import "./header.component.scss";
import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../store";

import { Login } from "./login.component";
import { SignIn } from "./sign-in.component";

import { ReactComponent as Coin } from "../assets/coins.svg";

import { useOutsideClickHandler } from "../hooks/useOutsideClickHandler";

export const Header = (): ReactElement => {
  const wrapperRef = useRef(null);
  const [dialog, setDialog] = useState("");
  const user = useSelector<RootReducer, RootReducer["authenticationReducer"]["user"]>(({ authenticationReducer: { user } }) => user);

  useOutsideClickHandler(wrapperRef, () => setDialog(""));

  return (
    <div className="header">
      <div className="menu">
        {
          !!user && (<div>
            {user.wallet} x
            <Coin className="coin" />
          </div>)
        }
        <Link className="button red" to="/"> Countries </Link>
        <Link className="button yellow" to="/casino"> Casino </Link>
        {
          !user && (<div>
            <button onClick={() => setDialog("login")} className={`button green  ${dialog === "login" ? "open" : ""} `}>
              Login
            </button>
            <button onClick={() => setDialog("singIn")} className={`button blue ' ${dialog === "singIn" ? "open" : ""} `}>
              SignIn
            </button>
          </div>)
        }
      </div>
      {
        dialog === "login" && (
          <div ref={wrapperRef} className="dialog login-area">
            <Login />
          </div>)
      }
      {
        dialog === "singIn" && (
          <div ref={wrapperRef} className="dialog sign-in-area">
            <SignIn />
          </div>)
      }
    </div>
  );
};
