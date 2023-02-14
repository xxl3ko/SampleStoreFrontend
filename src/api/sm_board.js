import {makeRequest} from "./api";

const URL = '/samplepack'

export const getPack = () => makeRequest({
    method: "GET,",
    url: URL
})

console.log(getPack())