import {usersAPI} from "../../API/api";
import {updateObjectInArray} from "../../utils/object_helpers";
import {
    setIsFetchingProgressType,
    UsersInitialStateType
} from "./usersReducerTyps";
import {AppDispatch, RootState} from "../../globalTypes";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

export enum USERS_ACTION_TYPE {
    FOLLOW = 'usersPage/FOLLOW',
    UNFOLLOW = 'usersPage/FOLLOWUNFOLLOW',
    SET_USERS = 'usersPage/FOLLOWSET-USER',
    SET_CURRENT_PAGE = 'usersPage/FOLLOWSET-PAGE',
    SET_USERS_TOTAL_COUNT = 'usersPage/FOLLOWSET-USERS-TOTAL-COUNT',
    TOGGLE_IS_FETCHING = 'usersPage/FOLLOWTOGGLE-IS-FETCHING',
    TOGGLE_IS_FETCHING_PROGRESS = 'usersPage/FOLLOWTOGGLE_IS_FETCHING_PROGRESS',
    CHANGE_PAGE_SIZE = 'usersPage/FOLLOWCHANGE_PAGE_SIZE',
}

type ActionCreatorType = <T>(arg: T) => ActionType<T>
type ActionType<P> = { type: USERS_ACTION_TYPE, payload: P }

type ActionsType = ReturnType<typeof followSuccess | typeof unfollowSuccess | typeof setUsers
    | typeof setIsFetching | typeof changePageSize | typeof setUsersTotalCount>


export const followSuccess: ActionCreatorType = (userID) => ({type: USERS_ACTION_TYPE.FOLLOW, payload: userID});
export const unfollowSuccess: ActionCreatorType = (userID) => ({type: USERS_ACTION_TYPE.UNFOLLOW, payload: userID});
export const setUsers: ActionCreatorType = (users) => ({type: USERS_ACTION_TYPE.SET_USERS, payload: users});
export const setUsersTotalCount: ActionCreatorType = (totalCount) => ({
    type: USERS_ACTION_TYPE.SET_USERS_TOTAL_COUNT,
    payload: totalCount
})
export const setIsFetching: ActionCreatorType = (isFetching) => ({
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING,
    payload: isFetching
})
export const setIsFetchingProgress: setIsFetchingProgressType = (isFetchingProgress, userID) => ({
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING_PROGRESS,
    isFetchingProgress,
    userID
})
export const changePageSize: ActionCreatorType = (pageSize) => ({
    type: USERS_ACTION_TYPE.CHANGE_PAGE_SIZE,
    payload: pageSize
})

const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action: any): UsersInitialStateType => {

    switch (action.type) {
        case USERS_ACTION_TYPE.CHANGE_PAGE_SIZE:
            return {
                ...state,
                pageSize: state.pageSize + action.payload
            }
        case USERS_ACTION_TYPE.FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: true}),
            }
        case USERS_ACTION_TYPE.UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: false}),
            }
        case USERS_ACTION_TYPE.SET_USERS:
            return {...state, users: action.payload}
        case USERS_ACTION_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case USERS_ACTION_TYPE.SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.payload}
        case USERS_ACTION_TYPE.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload}
        case USERS_ACTION_TYPE.TOGGLE_IS_FETCHING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetchingProgress
                    ? [...state.followingInProgress, action.userID]
                    : [...state.followingInProgress.filter(id => id !== action.userID)]
            }
        default:
            return state
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number):
    ThunkAction<void, RootState, unknown, Action<string>> => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsersTotalCount(data.totalCount));
        dispatch(setUsers(data.items));
        dispatch(setIsFetching(false));
    })
}
const followUnfollow = async (dispatch: any, userID: number, apiMethod: any, actionCreator: ActionCreatorType) => {
    dispatch(setIsFetchingProgress(true, userID));
    const response = await apiMethod(userID)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID));
    } else {
        alert('try again')
    }
    dispatch(setIsFetchingProgress(false, userID));
}
export const followThunkCreator = (userID: number) => async (dispatch: any) => {
    const apiMethod = usersAPI.follow.bind(userID);
    await followUnfollow(dispatch, userID, apiMethod, followSuccess);
}

export const unfollowThunkCreator = (userID: number) => async (dispatch: any) => {
    const apiMethod = usersAPI.unfollow.bind(userID);
    await followUnfollow(dispatch, userID, apiMethod, unfollowSuccess);
}


export default usersReducer;