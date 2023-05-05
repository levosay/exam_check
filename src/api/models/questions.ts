export enum QuestionTypes {
  checkbox = 'checkbox',
  text = 'text',
  sequence = 'sequence'
}

export interface IQuestionDefault {
  _id: number
  test: number
  position: number
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

export type IQuestions = IQuestionCheckbox | IQuestionText | IQuestionSequence
