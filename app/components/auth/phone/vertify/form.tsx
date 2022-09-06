// next & react
import Router from 'next/router';
// libraries
import { Form, withFormik } from 'formik';
import { vertifyPhoneFormSchema } from '../../../../modules/yup/form';
import callApi from '../../../../api/callApi';
// components
import Input from '../../../../global/form/input'
import Button from '../../../../global/form/button'
// types
import {  VertifyPhoneFormValuesProps } from '../../../../types/form';
// schemas
import { useEffect, useState } from 'react';
import MyToast from '../../../../modules/swal/toast';

const InnerRegisterForm : React.FC = () => {

    const [buttonText, setButtonText] = useState<string>(`ارسال مجدد کد تایید در 00:05 آینده`);
    const [counter, setCounter] = useState(5);
    const [btnClass, setBtnClass] = useState<{disable : boolean, classes : string}>({
        disable : true,
        classes : "bg-white text-gray-400 cursor-no-drop"
    })

    useEffect(() => {

        const timer = setTimeout(() => {
                if(counter > 0) {
                    setCounter(counter - 1)
                    setButtonText( `ارسال مجدد کد تایید در 00:0${counter} آینده`)
                }
                else {
                    clearTimeout(timer)
                    setButtonText("ارسال مجدد کد تایید")
                    setBtnClass({
                        disable : false,
                        classes : "bg-white text-indigo-600"
                    })
                }
            } , 1000)
        
    }, [buttonText, counter])

    return (
        <Form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4 rounded-md shadow-sm">
                <Input
                    id={"code"}
                    name={"code"}
                    type={"number"}
                    placeholder={" کد دریافت شده روی شماره خود را در اینجا وارد کنید ..."}
                    autoComplete={"number"}
                />
            </div>
            <div className={"space-y-2"}>
                <Button text={"تایید کد"} Icon={false} />
                <Button type={"button"} disabled={btnClass.disable} customColor={btnClass.classes} small={true} text={buttonText} Icon={false} />
            </div>
        </Form>
    )
}

interface InnerRegisterFormProps {
    token ?: string
    setCookie : any
    clearTokenFromRedux : () => void
}

const RegisterForm = withFormik<InnerRegisterFormProps, VertifyPhoneFormValuesProps>({
    mapPropsToValues :(props : InnerRegisterFormProps) => ({
        code : "", token : props.token
    }),
    handleSubmit: async (values : VertifyPhoneFormValuesProps, {props}) => {

        try {
            const response = await callApi().post("/auth/login/verify-phone", values)
            if (response.data.status === "success") {
                props.setCookie("auth_token", props.token , {
                    maxAge : 60 * 60 * 24,
                    path : "/",
                    domain : "localhost",
                    sameSite : "lax"
                })
            }
            await Router.push("/")
            props.clearTokenFromRedux()
            MyToast("success", "به پنل مدیریت خوش آمدید !" , "25rem")
        } catch (error) {
            MyToast("error", "کد وارد شده صحیح نمی باشد !" , "25rem")
        }
    },
    validationSchema : vertifyPhoneFormSchema
})(InnerRegisterForm)

export default RegisterForm;