import React from "react";
import './header.component.scss';

export const Header = () => {
    let openDialog: string = 'none';

    const changeDialog = () => {
        debugger;
        openDialog = 'login'
    }

    return (
        <div>
            <div className="header">
                <button onClick={ changeDialog } className="button green">Login</button>
                <button onClick={ (e) => { openDialog = 'signin' }} className="button blue">Sign In</button>
            </div>
            { openDialog === 'login' ?  <div className="login-area">test</div> : <p>test</p> }
            { openDialog === 'signin' && <div className="signin-area">test</div> }
        </div>
    );
};
