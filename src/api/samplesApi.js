import {makeRequest} from "./api";

const URL = '/sample'

export const samplesRequest = (config) => makeRequest({
    method: "GET",
    url: `${URL}?sample_pack=${config.packId}`,
})

export const sampleDownloadRequest = (config) => makeRequest({
    method: "GET",
    responseType: 'blob',
    url: `${URL}/download/${config}`,
    headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
    }
})