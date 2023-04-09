import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api'

export const makeRequest = (config) => {
    config.url = `${API_URL}${config.url}`
    return axios(config)
}
