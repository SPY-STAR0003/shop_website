// libraries
import { string , object } from 'yup';

export const loginFormSchema = object().shape({
    name : string().required(),
    email : string().email().required(),
    password : string().required().min(8).max(16),
})