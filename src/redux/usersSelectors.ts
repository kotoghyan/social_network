import {createSelector} from "reselect";
import {RootState} from "../globalTypes";


const getUsersSelector = ({usersPage}:RootState) => {
    return  usersPage.users;
}
export const getUsers = createSelector(getUsersSelector,(users)=>{
    return users.filter(users => true )
})

export const getPageSize = ({usersPage}:RootState) => {
    return usersPage.pageSize;
}
export const getCurrentPage = ({usersPage}:RootState) => {
    return usersPage.currentPage;
}
export const getIsFetching = ({usersPage}:RootState) => {
    return  usersPage.isFetching;
}
export const getFollowingInProgress = ({usersPage}:RootState) => {
    return  usersPage.followingInProgress;
}




