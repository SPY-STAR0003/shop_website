// assets
import { LockClosedIcon } from '@heroicons/react/20/solid'
// libraries
import { Formik, Form, FormikErrors } from 'formik';
import { loginFormSchema } from '../modules/yup/form';
// components
import Checkbox from '../global/form/checkbox'
import Input from '../global/form/input'
import MyLink from "./../global/link/link"
import Button from '../global/form/button'
// types
import { loginFormInputsProps } from '../types/form';
// schemas
import { formInputsInfo } from '../schema/form/loginInputs';

const LoginForm : React.FC = () => {

    const initialValues : object = {
        name : "", email : "", password : ""
    }

    const formHandler : (values : any) => void = (values : any) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={formHandler}
            validationSchema = {loginFormSchema}
        >
            <Form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="space-y-4 rounded-md shadow-sm">
                    {
                        formInputsInfo.map((item : loginFormInputsProps, index : number) => (
                            <Input
                                key= {index}
                                id={item?.id}
                                name={item.name}
                                type={item?.type}
                                placeholder={item?.placeholder}
                                label={item?.label}
                                autoComplete={item?.autoComplete}
                            />
                        ))
                    }
                </div>
                <div className="flex sm:flex-row sm:space-y-0 space-y-3 flex-col items-center justify-between">
                    <Checkbox
                        id={"checkbox"}
                        type={"checkbox"}
                        label={"مرا به خاطر بسپار"}
                    />
                    <MyLink text={"رمز عبور خود را فراموش کرده ام"} />
                </div>
                <Button text={"ورود"} Icon={LockClosedIcon} />
            </Form>
        </Formik>
    )
}

export default LoginForm;