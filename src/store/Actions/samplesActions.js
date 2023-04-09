import {sampleDownloadRequest} from "../../api/samplesApi";

export const GET_DOWNLOAD_SAMPLE_SUCCESS = 'GET_DOWNLOAD_SAMPLE_SUCCESS'


/*export const addSampleToCart = (data) => {
    console.log(data)
}*/

export const sampleDownload = (data) => {
    return async dispatch => {
        try {
            const response = await sampleDownloadRequest(data)
            const href = URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', ''); //or any other extension
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        } catch (error) {
            console.log(error)
        }
    }
}
