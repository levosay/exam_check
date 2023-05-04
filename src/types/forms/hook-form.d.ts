export interface IHookFormValues {
  username?: string
  password?: string
  passwordRepeat?: string

  [key: `questionCheck_${string}_${string}`]: boolean

  [key: `questionText_${string}_`]: string
}
