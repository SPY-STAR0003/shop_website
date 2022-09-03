// libraries
import { string , object } from 'yup';

export const loginFormSchema = object().shape({
    email : string().email().required(),
    password : string().required().min(8),
})

export const RegisterFormSchema = object().shape({
    name : string().required(),
    email : string().email().required(),
    password : string().required().min(8),
})