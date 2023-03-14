import { IHookFormValues } from 'types/forms/hook-form'

export type TAuthBody = Pick<IHookFormValues, 'username' | 'password'>
