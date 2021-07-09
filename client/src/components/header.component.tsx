import React, { useState } from "react";
import './header.component.scss';
import { Login } from './login.component'
import { SignIn } from './sign-in.component'



export const Header = () => {
    const [dialog, setDialog] = useState("");

    return (
        <div className="header">
            <div className="menu">
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
