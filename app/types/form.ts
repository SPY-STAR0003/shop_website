export interface AuthFormInputsProps {
    name : string,
    type ?: string,
    id ?: string,
    placeholder ?: string,
    label ?: string,
    autoComplete ?: string,
}

export interface LoginFormValuesProps {
    email: string
    password: string
}

export interface RegisterFormValuesProps {
    name: string
    email: string
    password: string
}

export interface LoginPhoneFormValuesProps {
    phone: string
    password: string
}

export interface VertifyPhoneFormValuesProps {
    code : string
}
export interface RegisterPhoneFormValuesProps {
    name: string
    phone: string
    password: string
}