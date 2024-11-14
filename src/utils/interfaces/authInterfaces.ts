import { UseFormReturn } from "react-hook-form"

export interface UserSliceInterface{
    token: string | null,
    email: string
}


export interface AuthPropsInterface{
    onSetPageType: (e:string) => void,
    form: UseFormReturn<any>
}


export interface ForgotPwdFormValuesInterface {
    forgotEmail: string, 
}

export interface LoginFormValuesInterface {
    loginEmail: string, 
    loginPassword: string
}

export interface SignupFormValuesInterface {
    signupEmail: string, 
    signupPassword: string,
    signupConfirmPassword: string
}
