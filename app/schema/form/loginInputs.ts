// types
import { loginFormInputsProps } from "../../types/form"

export const formInputsInfo : loginFormInputsProps[] = [
    {id : "name", type : "text", name : "name", autoComplete : "username", placeholder : "نام را وارد کنید" , label : "نام :"},
    {id : "email", type : "email", name : "email", autoComplete : "current-email", placeholder : "ایمیل را وارد کنید" , label : "ایمیل :"},
    {id : "password", type : "password", name : "password", autoComplete : "current-password" , placeholder : "رمز عبور خود را وارد کنید" , label : "رمز عبور :"}
]