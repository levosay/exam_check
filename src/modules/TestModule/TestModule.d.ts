import { IQuestions } from 'api/models/questions'

export interface ITestModuleProps {
  topicId: number
  questions: IQuestions[]
}

export type TimeState = Record<'hours' | 'min' | 'sec', number>
