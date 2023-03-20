import {makeRequest} from "./api";

const URL = '/label'

export const labelRequest = (config) => makeRequest({
    method: "GET",
    url: `${URL}/${config}`,
})
