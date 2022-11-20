import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData,logoutThunkCreator} from "../../redux/authReducer/authReducer.ts";
import {compose} from "redux";



const HeaderContainer = ({isAuthentication,login, ...rest})=> {


    const logout =() =>{
        rest.logoutThunkCreator()
    }

    // useEffect(()=>{
    //     rest.getAuthUserDataThunkCreator()
    // },[]);
        return <Header isAuthentication={isAuthentication} login={login} logout={logout}/>

}

const mapStateProps = ({authentication}) => ({
    isAuthentication: authentication.isAuthentication,
    login:authentication.login,
})


export default compose(connect(mapStateProps,
    {setAuthUserData,logoutThunkCreator}))
(HeaderContainer);