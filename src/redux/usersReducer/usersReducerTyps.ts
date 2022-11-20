import {USERS_ACTION_TYPE} from "./usersReducer";


type photosType  = {
    small: string,
    large: string,
}
export type UserType =  {
    followed:boolean
    id:number
    name:string
    photos:photosType
    status:string
    uniqueUrlName:string
}

export type UsersInitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:Array<number>,
}


export type followSuccessType = (payload:number) => ({
    type: typeof USERS_ACTION_TYPE.FOLLOW,
    payload:number
});
export type unfollowSuccessType = (payload:number) => ({
    type: typeof USERS_ACTION_TYPE.UNFOLLOW,
    payload:number
});
export type setUsersType = (payload:Array<UserType>) => ({
    type: typeof USERS_ACTION_TYPE.SET_USERS,
    payload:Array<UserType>
});
export type setUsersTotalCountType = (payload:number) => ({
    type: typeof USERS_ACTION_TYPE.SET_USERS_TOTAL_COUNT,
    payload:number
})
export type setIsFetchingType = (payload:boolean) => ({
    type: typeof USERS_ACTION_TYPE.TOGGLE_IS_FETCHING,
    payload:boolean
})
export type setIsFetchingProgressType = (isFetchingProgress:boolean, userID:number) => ({
    type: typeof USERS_ACTION_TYPE.TOGGLE_IS_FETCHING_PROGRESS,
    isFetchingProgress:boolean,
    userID:number
})
export type ChangePageSizeType = (payload:number) => ({
    type: typeof USERS_ACTION_TYPE.CHANGE_PAGE_SIZE,
    payload:number
})