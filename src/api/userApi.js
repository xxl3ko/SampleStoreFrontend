import {makeRequest} from "./api";

const URL = '/auth'

export const signupRequest = (config) => makeRequest({
    method: "POST",
    url: `${URL}/users/`,
    data: {
        ...config
    },
})

export const loginRequest = (config) => makeRequest({
    method: "POST",
    url: `${URL}/token/login/`,
    data: {
        ...config
    },
})

export const logoutRequest = () => makeRequest({
    method: "POST",
    url: `${URL}/token/logout/`,
    headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
    }
})

export const userRequest = () => makeRequest({
    method: "GET",
    url: `${URL}/users/me/`,
    headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
    }
})