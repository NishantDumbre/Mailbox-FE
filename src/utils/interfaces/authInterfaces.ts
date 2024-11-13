export interface UserSliceInterface{
    token: string | null,
    email: string
}


export interface AuthPropsInterface{
    onSetPageType: (e:string) => void
}
