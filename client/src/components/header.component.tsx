import React, { useState } from "react"
import "./header.component.scss"
import { Login } from "./login.component"
import { SignIn } from "./sign-in.component"
import { Link } from "react-router-dom"
import { ReactComponent as Coin } from "../assets/coins.svg"
import { useRef } from "react"
import { useOutsideClickHandler } from "../hooks/useOutsideClickHandler"
import { useSelector } from "react-redux"
import { RootReducer } from "../store"

export const Header = () => {
  const user = useSelector<RootReducer, RootReducer["authenticationReducer"]["user"]>(
    ({ authenticationReducer: { user } }) => user,
  )
  const [dialog, setDialog] = useState("")
  const wrapperRef = useRef(null)
  useOutsideClickHandler(wrapperRef, () => {
    setDialog("")
  })

  return (
    <div className="header">
      <div className="menu">
        {user?.wallet} x
        <Coin className="coin" />
        <Link className="button red" to="/">
          {" "}
          Countries{" "}
        </Link>
        <Link className="button yellow" to="/casino">
          {" "}
          Casino{" "}
        </Link>
        <button onClick={() => setDialog("login")} className={`button green  ${dialog === "login" ? "open" : ""} `}>
          Login
        </button>
        <button onClick={() => setDialog("singIn")} className={`button blue ' ${dialog === "singIn" ? "open" : ""} `}>
          SignIn
        </button>
      </div>
      {dialog === "login" && (
        <div ref={wrapperRef} className="dialog login-area">
          <Login />
        </div>
      )}
      {dialog === "singIn" && (
        <div ref={wrapperRef} className="dialog sign-in-area">
          <SignIn />
        </div>
      )}
    </div>
  )
}
