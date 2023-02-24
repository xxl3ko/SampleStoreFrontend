import {makeRequest} from "./api";

const URL = '/auth/users/'

export const createUserRequest = (config) => makeRequest({
    method: "POST",
    url: `${URL}`,
    data: {
        ...config
    },
})
