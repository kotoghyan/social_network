import {ProfileDbTypes} from "../../DB/profileDB";
import {PROFILE_TYPES} from "./ProfileReducer";

export type MyPostsDataType = {
    id: number,
    message: string,
    LikesCount: number,
    img: string
}
export type InitialProfileStateType = {
    myPostsData: Array<MyPostsDataType>,
    profile: {items:Array<ProfileDbTypes>},
    status:string,
}

export type SetPostType = {type: typeof PROFILE_TYPES.NEW_POST, payload: string}
export type SetUserProfileType = {type: typeof PROFILE_TYPES.SET_USER_PROFILE, payload:Array<ProfileDbTypes>}
export type SetStatusType = {type: typeof PROFILE_TYPES.SET_STATUS, payload: string}
