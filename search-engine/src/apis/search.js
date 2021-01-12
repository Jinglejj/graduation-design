import axios from 'axios'

export const searchImage = (file) => {
    return axios({
        url: 'http://localhost:5000/upload',
        method: 'post',
        data: {
            file
        }
    })
}
