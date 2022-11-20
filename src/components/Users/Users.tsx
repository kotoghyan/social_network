import React, {memo} from "react";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {imagePathGenerator} from "../../utils/general";
import {usersPageFollowUnfollow} from "../../utils/usersPageHelpers";
import {ChangePageSizeType, setUsersTotalCountType, UserType} from "../../redux/usersReducer/usersReducerTyps";

type PropsType = {
    changePageSize: ChangePageSizeType
    follow: (userID: number) => (dispatch: any) => void,
    unfollow: (userID: number) => (dispatch: any) => void,
    followingInProgress: Array<number>
    isFetching: boolean
    setUsersTotalCount: setUsersTotalCountType
    unfollowThunkCreator: (userID: number) => (dispatch: any) => void
    users: Array<UserType>


}

const Users:React.FC<PropsType> = memo((props:PropsType) => {

    const {changePageSize, users,
        followingInProgress, unfollow, follow} = props
    return (
        <div>
            <button onClick={() => changePageSize(5)}>
                Add More Users
            </button>
            {
                users.map(user => <div className={classes.usersPageWrapper} key={user.id}>I am Users Page
                        <span className={classes.userProfileAvaPlusFollowButton}>
                            <div>
                                 <NavLink to={`/profile/${user.id % 2 === 0 ? 1 : 2}`}>
                                    <img src={imagePathGenerator(user.photos.small || 'UI_UX/Avatar/UnknownAvatar.png')}/>
                                 </NavLink>
                            </div>
                            {usersPageFollowUnfollow(user, followingInProgress, unfollow, follow)}
                            <span className={classes.description}>
                                <div>{user.name}</div>
                                <div>
                                    {user.status}
                                </div>
                            </span>
                            <span className={classes.placeOfResidence}>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )}
        </div>
    )
})


export default Users;