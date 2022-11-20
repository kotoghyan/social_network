import {generateNextId} from "../../utils/general";
import {profileAPI} from "../../API/api";
import {InitialProfileStateType, SetPostType, SetStatusType, SetUserProfileType} from "./ProfileReducerTypes";

export enum PROFILE_TYPES {
    NEW_POST = 'profilePage/NEW-POST',
    SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE',
    SET_STATUS = `profilePage/SET_STATUS`,
}


export const setPost: ActionCreatorType = (post) => ({type: PROFILE_TYPES.NEW_POST, payload: post});
export const setUserProfile: ActionCreatorType = (profile) => ({type: PROFILE_TYPES.SET_USER_PROFILE, payload: profile});
export const setStatus: ActionCreatorType = (profile) => ({type: PROFILE_TYPES.SET_STATUS, payload: profile});

type ActionCreatorType = <T>(arg: T)=> ActionType<T>
type ActionType<P> = {type: PROFILE_TYPES, payload: P}

type ActionsType =  ReturnType<typeof setPost | typeof setUserProfile | typeof setStatus>

const initialState: InitialProfileStateType = {
    myPostsData: [
        {
            id: 1,
            message: 'its only my posts',
            LikesCount: 15,
            img: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"
        },

        {
            id: 2,
            message: 'only me typing there',
            LikesCount: 20,
            img: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"
        },
    ],
    profile: {items: []},
    status: '',
}



const profileReducer = (state = initialState, action:ActionsType) => {   //functionContainer vapshe contaienr chi anun@ poxel u sa abelard
    switch (action.type) {
        case PROFILE_TYPES.NEW_POST: {
            return {
                ...state,
                myPostsData: [...state.myPostsData, {
                    id: generateNextId([...state.myPostsData]),
                    message: action.payload,
                    LikesCount: 0,
                    img: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",

                }],
            };
        }

        case PROFILE_TYPES.SET_USER_PROFILE:
            return {...state, profile: action.payload}

        case PROFILE_TYPES.SET_STATUS:
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state;
    }
}

export const setUsersThunkCreator = () => async (dispatch:any) => {
    await dispatch(setUserProfile(profileAPI.getProfileDB()));
}
export const getUserStatusThunkCreator = (userID:number) => async (dispatch:any) => {
    await dispatch(setStatus(profileAPI.profileStatus(userID)));
}
export const updateUserStatusThunkCreator = (status:string) => async (dispatch:any) => {
    await dispatch(setStatus(profileAPI.changeStatus(status)));
}

export default profileReducer;