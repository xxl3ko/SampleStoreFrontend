import {makeRequest} from "./api";

const URL = '/sample'

export const samplesRequest = (config) => makeRequest({
    method: "GET",
    url: `${URL}?sample_pack=${config.packId}`,
})
