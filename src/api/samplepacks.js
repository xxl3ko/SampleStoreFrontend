import {makeRequest} from "./api";

const URL = '/samplepack'

export const packsRequest = (config) => makeRequest({
    method: "GET",
    url: URL,
    headers: {
        Authorization: 'Token 344992bf1a1f0e08df21787fecb392d01173308f'
    },
})

export const packRequest = (id) => makeRequest({
    method: "GET",
    url: `${URL}/${id}`,
})