import axios from "axios";

const callApi = () => {

    const axiosInstance = axios.create({
        baseURL : 'http://localhost:5000/api'
    })

    axios.interceptors.request.use(
        (config) => {

            return config
        },
        (err) => console.log(err)
    )

    axios.interceptors.response.use(
        (res) => {

            return res
        },
        (err) => console.log(err)
    )

    return axiosInstance
}

export default callApi;