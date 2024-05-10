export enum QuestionTypes {
  checkbox = 'checkbox',
  text = 'text',
  radio = 'radio',
  sequence = 'sequence'
}

export interface IQuestionDefault {
  _id: number
  test: number
  position: number
}

export interface IQuestionRadio extends IQuestionDefault {
  type: QuestionTypes.radio
  question: string
  answers: string[]
}

export interface IQuestionCheckbox extends IQuestionDefault {
  type: QuestionTypes.checkbox
  question: string
  answers: string[]
}

export interface IQuestionText extends IQuestionDefault {
  type: QuestionTypes.text
  question: string
}

export interface IQuestionSequence extends IQuestionDefault {
  type: QuestionTypes.sequence
  question: string
  answers: string[]
}

export type IQuestions =
  | IQuestionRadio
  | IQuestionCheckbox
  | IQuestionText
  | IQuestionSequence
