import React, {useState} from "react";
import classes from './Header.module.css';
import {Navigate, NavLink} from 'react-router-dom';

const SignIn = ({isAuthentication, login, logout}) => {
    const [chekLogin, setLogin] = useState(false);
    return (
        <div className={classes.loginBlock}>
            <div>
                {isAuthentication ? login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div>
                {isAuthentication ? <span onClick={logout}>logout</span> : undefined }
                {/*  //todo logoutic taza chisht nkarvi*/}
            </div>
        </div>
    )
}


export default SignIn;