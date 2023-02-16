import {makeRequest} from "./api";

const URL = '/samplepack'

export const packsRequest = (config) => makeRequest({
    method: "GET",
    url: URL,
})

export const packRequest = (id) => makeRequest({
    method: "GET",
    url: `${URL}/${id}`,
})