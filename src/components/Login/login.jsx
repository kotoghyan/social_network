import React from "react";
import LoginForm from "./LoginFomr/LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer/authReducer.ts";
import {Navigate} from "react-router-dom";


const LoginReduxForm = reduxForm({form:'login'})(LoginForm)


 const Login= ({loginThunkCreator:login,logoutThunkCreator:logout,isAuthentication})=> {
     const onSubmit = ({email,password,rememberMe}) => {
         login(email,password, rememberMe);
     }
     if (isAuthentication){
         return <Navigate to={'/users'}/>
     }
    return(
       <div><h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
       </div>
    )
}
const mapStateToProps = ({authentication}) =>({
    isAuthentication: authentication.isAuthentication
})
export default connect(mapStateToProps,{loginThunkCreator})(Login);
