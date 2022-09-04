// next & react
import Router from 'next/router';
// assets
import { LockClosedIcon } from '@heroicons/react/20/solid'
// libraries
import { Form, withFormik } from 'formik';
import { RegisterFormSchema } from '../../../../modules/yup/form';
import callApi from '../../../../api/callApi';
// components
import Checkbox from '../../../../global/form/checkbox'
import Input from '../../../../global/form/input'
import Button from '../../../../global/form/button'
// types
import { AuthFormInputsProps , RegisterFormValuesProps } from '../../../../types/form';
// schemas
import { registerNumberFormInputsInfo } from '../../../../schema/form/loginInputs';
import { useEffect, useState } from 'react';

interface AuthProps {
    isLogin : boolean
}

const InnerRegisterForm : React.FC<AuthProps> = ({isLogin}) => {

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
                    id={"vertifyPhone"}
                    name={"vertifyPhone"}
                    type={"number"}
                    placeholder={" کد دریافت شده روی شماره خود را در اینجا وارد کنید ..."}
                    autoComplete={"number"}
                />
            </div>
            <div className={"space-y-2"}>
                <Button text={"تایید کد"} Icon={false} />
                <Button disabled={btnClass.disable} customColor={btnClass.classes} small={true} text={buttonText} Icon={false} />
            </div>
        </Form>
    )
}

interface InnerRegisterFormProps {
    
}

const RegisterForm = withFormik<InnerRegisterFormProps, RegisterFormValuesProps>({
    mapPropsToValues :(props : InnerRegisterFormProps) => ({
        name : "", email: "", password: ""
    }),
    handleSubmit: async (values : RegisterFormValuesProps) => {
        const response = await callApi().post("/auth/register", values)

        if (response.status === 201) {
            Router.push('/auth/login')
        }
    },
    validationSchema : RegisterFormSchema
})(InnerRegisterForm)

export default RegisterForm;