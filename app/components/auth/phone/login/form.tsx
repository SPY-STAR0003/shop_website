// assets
import { LockClosedIcon } from '@heroicons/react/20/solid'

// libraries
import { Form, withFormik } from 'formik';
import { loginPhoneFormSchema } from '../../../../modules/yup/form';

// components
import Checkbox from '../../../../global/form/checkbox'
import Input from '../../../../global/form/input'
import MyLink from "../../../../global/link/link"
import Button from '../../../../global/form/button'
import ErrorValidation from '../../../../exceptions/errorValidation';

// types
import { AuthFormInputsProps , LoginPhoneFormValuesProps } from '../../../../types/form';

// schemas
import { loginNumberformInputsInfo } from '../../../../schema/form/loginInputs';
import callApi from '../../../../api/callApi';
import MyToast from '../../../../modules/swal/toast';


const InnerLoginForm : React.FC = () => {

    return (
        <Form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4 rounded-md shadow-sm">
                {
                    loginNumberformInputsInfo.map((item : AuthFormInputsProps, index : number) => (
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
            <Button text="ورود" Icon={LockClosedIcon} />
        </Form>
    )
}

interface InnerLoginFormProps {
    setCookie : any;
}

const LoginForm = withFormik<InnerLoginFormProps, LoginPhoneFormValuesProps>({
    mapPropsToValues :(props : InnerLoginFormProps) => ({
        phone: "", password: ""
    }),
    handleSubmit: async (values : LoginPhoneFormValuesProps, {props , setFieldError}) => {
        
        console.log(values)

        try {
            const response = await callApi().post("/auth/login", values)

            if (response.status === 200) {
                props.setCookie('shopWebsite', response.data.token, {
                    maxAge : 3600 * 60 * 24 * 30,
                    domain : 'localhost',
                    path : '/',
                    sameSite : 'lax'
                })
                MyToast("success", `به پنل کاربری تان خوش آمدید .`, "25rem")
            }
        } catch(err : any) {
            if (err instanceof ErrorValidation) {
                Object.entries(err.messages).forEach(( [ key , value ] ) => setFieldError(key,value as string))
                MyToast("error", "کاربری با این مشخصات یافت نشد ! ", "30rem")
            }
        }
    },
    validationSchema : loginPhoneFormSchema
})(InnerLoginForm)

export default LoginForm;