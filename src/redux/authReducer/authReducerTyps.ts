import {AUTH_ACTION_TYPE} from "./authReducer";

export type setAuthUserDataPayloadType ={
    id:number,
    email:string,
    login:string,
    isAuthentication:boolean
}

export type setAuthUserDataActionType = {
    type: typeof AUTH_ACTION_TYPE.SET_USERS_DATA,
    payload: setAuthUserDataPayloadType,

}

export type InitialAuthReducerStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuthentication: boolean,
    isAuthChecked: boolean
}
export type SetAuthCheckedType = {type: typeof AUTH_ACTION_TYPE.SET_AUTH_CHECKED, payload: boolean}