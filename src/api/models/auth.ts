import { IHookFormValues } from 'types/forms'

export type TSigninBody = Pick<IHookFormValues, 'username' | 'password'>
export type TSignupBody = Pick<IHookFormValues, 'username' | 'password' | 'passwordRepeat'>
