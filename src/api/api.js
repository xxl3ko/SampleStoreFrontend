import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/sample_pack'

export const GetSamplePack = () => {
    return axios.get(API_URL)
}