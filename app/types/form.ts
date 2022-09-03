export interface AuthFormInputsProps {
    name : string,
    type ?: string,
    id ?: string,
    placeholder ?: string,
    label ?: string,
    autoComplete ?: string,
}

export interface LoginFormValuesProps {
    name: string
    email: string
    password: string
}

export interface RegisterFormValuesProps {
    email: string
    password: string
}