import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {
    getUserStatusThunkCreator,
    setUsersThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/ProfileReducer/ProfileReducer.ts";
import {useParams} from "react-router-dom";
import {isAuthentication} from "../../hooks/isAuthentication";
import {compose} from "redux";


const ProfileContainer = (redux) => {
    const {profile, status, ...actions} = redux;
    let {userID} = useParams();
    if (!userID) userID = 3

    useEffect(() => {
        actions.setUsersThunkCreator(userID);
        actions.getUserStatusThunkCreator(userID);
    }, []);


    const currentUserProfile = profile.items.find(el => el.userID === Number(userID)) || {}
    return (
        <Profile currentUserProfile={currentUserProfile} updateStatus={actions.updateUserStatusThunkCreator}
                 status={status}/>
    )
}

let mapStateToProps = ({profilePage}) => ({
    profile: profilePage.profile,
    status: profilePage.status,
});

export default compose(
    connect(mapStateToProps,
        {setUsersThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    isAuthentication
)(ProfileContainer);