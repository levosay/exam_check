export interface IHookFormValues {
  username?: string
  password?: string
  passwordRepeat?: string

  [key: `question_check_${string}`]: boolean

  [key: `question_text_${string}`]: string
}
