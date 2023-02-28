import {makeRequest} from "./api";

const URL = '/auth/token/login/'

export const loginRequest = (config) => makeRequest({
    method: "POST",
    url: `${URL}`,
    data: {
        ...config
    },
})
