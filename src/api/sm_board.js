import {makeRequest} from "./api";

const URL = 'samplepack'

export const packRequest = (config) => makeRequest({
    method: "GET",
    url: URL,
})

//console.log(getPack())