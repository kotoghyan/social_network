import {initializedSuccessActionType, InitialStateType} from "./appReducerTyps";
import {getAuthUserDataThunkCreator} from "../authReducer/authReducer.ts";

export enum APP_ACTION_TYPE {
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
}

const initialState:InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action):InitialStateType => {
    switch (action.type) {
        case APP_ACTION_TYPE.INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true
            }
        default:
            return state
    }
}



const initializedSuccess = ():initializedSuccessActionType => ({type: APP_ACTION_TYPE.INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserDataThunkCreator())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })

}

export default appReducer;