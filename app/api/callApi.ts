// libraries
import axios from "axios";

// components
import ErrorValidation from "../exceptions/errorValidation";

const callApi = () => {

    const axiosInstance = axios.create({
        baseURL : 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(
        (config) => {

            return config
        },
        (err) => {


            return Promise.reject(err);
        }
    )

    axiosInstance.interceptors.response.use(
        res => {
            return res
        },
        err => {

            const res = err?.response

            if(res.status === 422) {
                throw new ErrorValidation(res.data.errors)
            }

            return Promise.reject(err);
        }
    )

    return axiosInstance
}

export default callApi;