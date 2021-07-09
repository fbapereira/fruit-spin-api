import React, { useState } from "react";
import './header.component.scss';
import { Login } from './login.component'
import { SignIn } from './sign-in.component'
import {
    Link
  } from "react-router-dom";


export const Header = () => {
    const [dialog, setDialog] = useState("");

    return (
        <div className="header">
            <div className="menu">
                <Link className="button red" to="/"> Countries </Link>
                <Link className="button yellow" to="/casino"> Casino </Link>
                <button onClick={ () => setDialog('login') } className={`button green  ${dialog === 'login' ? 'open' : ''} `}>Login</button>
                <button onClick={ () => setDialog('singIn') } className={`button blue ' ${dialog === 'singIn' ? 'open' : ''} `}>Sign In</button>
            </div>
            { dialog === 'login' && <div className="dialog login-area">
                <Login />
            </div> }
            { dialog === 'singIn' && <div className="dialog sign-in-area">
                <SignIn />
            </div> }
        </div>
    );
};
