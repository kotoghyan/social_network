import {authAPI} from "../../API/api";
import {setIsFetching} from "../usersReducer/usersReducer.ts";
import {stopSubmit} from "redux-form";
import {InitialAuthReducerStateType, SetAuthCheckedType, setAuthUserDataActionType} from "./authReducerTyps";


export enum AUTH_ACTION_TYPE {
    SET_USERS_DATA = 'auth/SET_USERS_DATA',
    SET_AUTH_CHECKED = 'auth/SET_AUTH_CHECKED',
}


export const setAuthUserData = (id: number, email: string, login: string, isAuthentication: boolean):setAuthUserDataActionType => ({
    type: AUTH_ACTION_TYPE.SET_USERS_DATA,
    payload: {id, email, login, isAuthentication},

});


const setAuthChecked:SetAuthCheckedType = {type: AUTH_ACTION_TYPE.SET_AUTH_CHECKED, payload: true}


const initialState:InitialAuthReducerStateType = {
    id: null,
    login: null,
    email: null,
    isAuthentication: false,
    isAuthChecked: false
}

const authReducer = (state = initialState, action):InitialAuthReducerStateType => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuthentication: true,
            }
        case AUTH_ACTION_TYPE.SET_AUTH_CHECKED:
            return {
                ...state,
                isAuthChecked: action.payload
            }

        default:
            return state
    }
}
export const getAuthUserDataThunkCreator = () => async (dispatch:any) => {
    dispatch(setIsFetching(true));
    let data = await authAPI.authMe();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    dispatch(setAuthChecked)
    dispatch(setIsFetching(false));//todo inc tvuma sxala tegh@

}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch:any) => {

    dispatch(setIsFetching(true));
    let data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(getAuthUserDataThunkCreator())
        } else {
            let messages = data.messages.length > 0 ? data.messages[0] : 'Some Error';
            console.log(data)
            dispatch(stopSubmit('login', {_error: messages}))
        }
        dispatch(setAuthChecked)
        dispatch(setIsFetching(false));
}
export const logoutThunkCreator = () => async (dispatch:any) => {
    dispatch(setIsFetching(true));
    let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
        dispatch(setAuthChecked)
        dispatch(setIsFetching(false));
}


export default authReducer;