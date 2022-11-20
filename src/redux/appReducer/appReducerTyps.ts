import {APP_ACTION_TYPE} from "./appReducer";

export type InitialStateType = {
    initialized:boolean
}
export type initializedSuccessActionType = {type:typeof APP_ACTION_TYPE.INITIALIZED_SUCCESS}