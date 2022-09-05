// libraries
import { string , object, number } from 'yup';

export const loginFormSchema = object().shape({
    email : string().email().required(),
    password : string().required().min(8),
})

export const registerFormSchema = object().shape({
    name : string().required(),
    email : string().email().required(),
    password : string().required().min(8),
})

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginPhoneFormSchema = object().shape({
    phone : string()
    .required()
    .matches(phoneRegExp, "شماره مورد نظر صحیح نمی باشد !")
    .test("len", "طول شماره تلفن باید 11 رقم باشد", (val ?: string) => val?.length === 11)
    .test("firstLetter", "شماره تلفن باید با 0 شروع شود", (val ?:string ) => val?.charAt(0) === "0" ),
    password : string().required().min(8),
})

export const registerPhoneFormSchema = object().shape({
    name : string().required(),
    phone : string()
    .required()
    .matches(phoneRegExp, "شماره مورد نظر صحیح نمی باشد !")
    .test("len", "طول شماره تلفن باید 11 رقم باشد", (value ?: string) => value?.length === 11)
    .test("firstLetter", "شماره تلفن باید با 0 شروع شود", (val ?:string ) => val?.charAt(0) === "0" ),
    password : string().required().min(8),
})

export const vertifyPhoneFormSchema = object().shape({
    code : string().required().test("length", "طول کد تایید باید 6 رقم باشد", (value ?: string) => value?.length === 6).matches(phoneRegExp, "کد مورد نظر صحیح نمی باشد !")
})