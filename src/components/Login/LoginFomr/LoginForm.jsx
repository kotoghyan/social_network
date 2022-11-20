import React from "react";
import {Field} from "redux-form";
import {Input} from "../../common/FormsControls/formsControls";
import {requiredField, setMaxLength} from "../../../utils/Validators/validators";
import classes from '../../common/FormsControls/formsControls.module.css'
import {createLoginField} from "../../../utils/createLoginField";

const maxLength30 = setMaxLength(30)
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
                {createLoginField('Email','email',Input,[requiredField,maxLength30])}
                {createLoginField('Password',"password",Input,[requiredField,maxLength30], {type:'password'})}
                {createLoginField(null,'rememberMe',Input,null, {type:'checkbox'}, 'Remember Me')}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;
