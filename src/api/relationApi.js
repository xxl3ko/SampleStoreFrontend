import {makeRequest} from "./api";

const URL = '/relation'

export const sampleRelationRequest = (data) => makeRequest({
    method: "PATCH",
    url: `${URL}/${data.sampleId}`,
    headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
    },
    data: {data.rels}
})
