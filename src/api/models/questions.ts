export enum QuestionTypes {
  checkbox = 'checkbox',
  text = 'text',
  sequence = 'sequence'
}

export interface ICheckboxAnswers {
  id: number
  title: string
}

export interface IQuestionCheckbox {
  id: number
  type: QuestionTypes.checkbox
  question: string
  answers: ICheckboxAnswers[]
}

export interface IQuestionText {
  id: number
  type: QuestionTypes.text
  question: string
}

export interface IQuestionSequence {
  id: number
  type: QuestionTypes.sequence
  question: string
  answers: string[]
}

export type IQuestions = IQuestionCheckbox | IQuestionText | IQuestionSequence
