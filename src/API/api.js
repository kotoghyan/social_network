import * as axios from "axios";
import {profileDb} from "../DB/profileDB.ts";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '34583732-3e9f-4596-8edc-9613413be6ba'}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    follow(userID) {
        return instance.post(`/follow/${userID}`);
    },
    unfollow(userID) {
        return instance.delete(`/follow/${userID}`);
    },
}


export const profileAPI = {
    getProfileDB() {
        return profileDb
    },
    profileStatus(id) {
        let message = profileDb.items.find(el => el.userID === Number(id)) || {}
           return message.status.message
    },
    changeStatus(status) {
        let message = profileDb.items.find(el => el.userID) || {}
        return  message.status.message = status
    },
}




export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe=false,) {
        return instance.post(`auth/login`,{email, password, rememberMe}).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}
