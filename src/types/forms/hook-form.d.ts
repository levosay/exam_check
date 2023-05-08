export interface IHookFormValues {
  username?: string
  password?: string
  passwordRepeat?: string

  [key: `check_${string}_${string}`]: boolean

  [key: `text_${string}_`]: string
}
