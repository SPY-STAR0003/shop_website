// next & react
import Router from 'next/router';
// assets
import { LockClosedIcon } from '@heroicons/react/20/solid'
// libraries
import { Form, withFormik } from 'formik';
import { registerPhoneFormSchema } from '../../../../modules/yup/form';
import callApi from '../../../../api/callApi';
// components
import Checkbox from '../../../../global/form/checkbox'
import Input from '../../../../global/form/input'
import Button from '../../../../global/form/button'
// types
import { AuthFormInputsProps , RegisterPhoneFormValuesProps } from '../../../../types/form';
// schemas
import { registerNumberFormInputsInfo } from '../../../../schema/form/loginInputs';

interface AuthProps {
    isLogin : boolean
}

const InnerRegisterForm : React.FC<AuthProps> = ({isLogin}) => {

    return (
        <Form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4 rounded-md shadow-sm">
                {
                    registerNumberFormInputsInfo.map((item : AuthFormInputsProps, index : number) => (
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
            </div>
            <Button text="ثبت نام" Icon={LockClosedIcon} />
        </Form>
    )
}

interface InnerRegisterFormProps {
    
}

const RegisterForm = withFormik<InnerRegisterFormProps, RegisterPhoneFormValuesProps>({
    mapPropsToValues :(props : InnerRegisterFormProps) => ({
        name : "",phone: "" , password: ""
    }),
    handleSubmit: async (values : RegisterPhoneFormValuesProps) => {

        const response = await callApi().post("/auth/register", values);

        console.log(response)

        if (response.status === 201) {
            Router.push('./vertify')
        }
    },
    validationSchema : registerPhoneFormSchema
})(InnerRegisterForm)

export default RegisterForm;