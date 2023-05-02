export interface IHookFormValues {
  username?: string
  password?: string
  passwordRepeat?: string

  [key: `question_${string}_${string}`]: boolean
}
