import {makeRequest} from "./api";

const URL = '/pack'

export const packsRequest = (config) => makeRequest({
    method: "GET",
    url: URL,
    headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
    },
})

export const packRequest = (id) => makeRequest({
    method: "GET",
    url: `${URL}/${id}`,
    headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
    },
})