import React from "react";
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import SignIn from "./SignIn";



const Header = ({isAuthentication, login, logout}) => {

    return (
        <header className={classes.header}>
            <NavLink to={"/profile/3"}><img src='/UI_UX/Logo.png'/></NavLink>
          <SignIn isAuthentication={isAuthentication} login={login} logout={logout}/>
        </header>
    )
}


export default Header;