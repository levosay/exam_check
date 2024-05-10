export interface IHookFormValues {
  username?: string
  password?: string
  passwordRepeat?: string

  [key: `check_${string}_${string}`]: boolean

  [key: `radio_${string}_`]: string | null

  [key: `select_${string}_`]: string

  [key: `text_${string}_`]: string
}
