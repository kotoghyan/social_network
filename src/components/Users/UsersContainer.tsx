import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {
    setUsersTotalCount, changePageSize, getUsersThunkCreator,
    unfollowThunkCreator, followThunkCreator,
} from "../../redux/usersReducer/usersReducer.ts";
import Users from "./Users.tsx";
import Preloader from "../common/Preloader/Preloader";
import {isAuthentication} from "../../hooks/isAuthentication";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers,
} from "../../redux/usersSelectors.ts";
import {ChangePageSizeType, setUsersTotalCountType, UserType} from "../../redux/usersReducer/usersReducerTyps";
import {RootState} from "../../globalTypes";

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    followingInProgress: Array<number>,
    isFetching: boolean,
    users: Array<UserType>
}

type MapDispatchPropsType = {
    getUsersThunkCreator:(currentPage: number, pageSize: number) => (dispatch: any) => void,
    changePageSize: ChangePageSizeType
    followThunkCreator: (userID: number) => (dispatch: any) => void,
    setUsersTotalCount: setUsersTotalCountType
    unfollowThunkCreator: (userID: number) => (dispatch: any) => void
}

type OwnPropsType = {
    pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const UserContainer: React.FC<PropsType> = ({currentPage, pageSize, getUsersThunkCreator, ...rest}) => {

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize)
    }, [pageSize])

    return <>
        <h2>{rest.pageTitle}</h2>
        {rest.isFetching ? <Preloader/> : null}
        <Users users={rest.users}
               unfollow={rest.unfollowThunkCreator}
               follow={rest.followThunkCreator}
               followingInProgress={rest.followingInProgress}
               changePageSize={rest.changePageSize}
        />
    </>
}

const mapStateToProps = ({usersPage}: RootState) => { // todo destrukturizacya arac aranc skoperi chem karum ugharkem
    return {
        users: getUsers({usersPage}),
        pageSize: getPageSize({usersPage}),
        currentPage: getCurrentPage({usersPage}),
        isFetching: getIsFetching({usersPage}),
        followingInProgress: getFollowingInProgress({usersPage}),

    }
}
export default compose(
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,RootState>(mapStateToProps, {
        getUsersThunkCreator,
        unfollowThunkCreator,
        followThunkCreator,
        setUsersTotalCount,
        changePageSize,
    }),
    isAuthentication,
)(UserContainer)

