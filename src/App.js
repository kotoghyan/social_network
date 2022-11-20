import React, {useEffect} from 'react';
import './App.css';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from "react-router-dom";
import UserContainer from './components/Users/UsersContainer.tsx';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "./redux/authReducer/authReducer.ts";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer/appReducer.ts";
import Preloader from "./components/common/Preloader/Preloader";
import Nav from "./components/Navbar/Navbar";


const App = ({isAuthChecked,initialized,initializeApp}) => {

    useEffect (() =>{
        initializeApp()
    },[])
    if (!initialized) {
        return <Preloader/>
    }
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            {isAuthChecked && <> {/* //todo kara chlini sa*/}
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UserContainer pageTitle={'Karo_O'}/>}/>
                        <Route path="/profile/:userID" element={<ProfileContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </>}
        </div>
    );
}

const mapStateToProps = ({authentication,app}) => {
    return {
        isAuthChecked:authentication.isAuthChecked,
        initialized:app.initialized
    }
}
export default compose(
    connect(mapStateToProps,
        {getAuthUserDataThunkCreator, initializeApp}))(App);
