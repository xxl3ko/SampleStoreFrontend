import {makeRequest} from "./api";

const URL = '/auth/users/me/'

export const userRequest = () => makeRequest({
    method: "GET",
    url: `${URL}`,
    headers: {
        Authorization: 'Token 344992bf1a1f0e08df21787fecb392d01173308f'
    }
})
