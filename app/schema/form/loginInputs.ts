// types
import { AuthFormInputsProps } from "../../types/form"

export const loginformInputsInfo : AuthFormInputsProps[] = [
    {id : "email", type : "email", name : "email", autoComplete : "current-email", placeholder : "ایمیل را وارد کنید" , label : "ایمیل :"},
    {id : "password", type : "password", name : "password", autoComplete : "current-password" , placeholder : "رمز عبور خود را وارد کنید" , label : "رمز عبور :"}
]

export const registerFormInputsInfo : AuthFormInputsProps[] = [
    {id : "name", type : "text", name : "name", autoComplete : "username", placeholder : "نام را وارد کنید" , label : "نام :"},
    {id : "email", type : "email", name : "email", autoComplete : "current-email", placeholder : "ایمیل را وارد کنید" , label : "ایمیل :"},
    {id : "password", type : "password", name : "password", autoComplete : "current-password" , placeholder : "رمز عبور خود را وارد کنید" , label : "رمز عبور :"}
]

export const loginNumberformInputsInfo : AuthFormInputsProps[] = [
    {id : "phone", type : "text", name : "phone", autoComplete : "number", placeholder : "شماره موبایل را وارد کنید" , label : "شماره موبایل :"},
    {id : "password", type : "password", name : "password", autoComplete : "current-password" , placeholder : "رمز عبور خود را وارد کنید" , label : "رمز عبور :"}
]

export const registerNumberFormInputsInfo : AuthFormInputsProps[] = [
    {id : "name", type : "text", name : "name", autoComplete : "username", placeholder : "نام را وارد کنید" , label : "نام :"},
    {id : "phone", type : "text", name : "phone", autoComplete : "number", placeholder : "شماره موبایل را وارد کنید" , label : "شماره موبایل :"},
    {id : "password", type : "password", name : "password", autoComplete : "current-password" , placeholder : "رمز عبور خود را وارد کنید" , label : "رمز عبور :"}
]