export interface IHookFormValues {
  username?: string
  password?: string
  passwordRepeat?: string

  [key: `questionCheck_${string}_${string}`]: boolean

  [key: `questionText_${string}_`]: string
}

export interface IIQuestionCheckAnswers {
  id: string
  value: boolean | string
}

export interface IQuestionItem {
  id: string
  type: string
  answers: IIQuestionCheckAnswers[]
}

export interface IQuestionData {
  [key: string]: IQuestionItem | Record<never>
}

interface ICreateQuestionsDefaultProps {
  obj: IQuestionData
  key: string
}

export interface IQuestionsCheckProps
  extends ICreateQuestionsDefaultProps {
  value: boolean
}

export interface IQuestionsTextProps
  extends ICreateQuestionsDefaultProps {
  value: string
}
