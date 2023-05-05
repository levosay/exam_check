export enum QuestionTypes {
  checkbox = 'checkbox',
  text = 'text',
  sequence = 'sequence'
}

export interface IQuestionCheckbox {
  _id: number
  type: QuestionTypes.checkbox
  question: string
  answers: string[]
}

export interface IQuestionText {
  _id: number
  type: QuestionTypes.text
  test: number
  position: number
  question: string
}

export interface IQuestionSequence {
  _id: number
  type: QuestionTypes.sequence
  test: number
  position: number
  question: string
  answers: string[]
}

export type IQuestions = IQuestionCheckbox | IQuestionText | IQuestionSequence
