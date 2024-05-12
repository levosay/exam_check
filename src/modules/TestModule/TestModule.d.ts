import { IQuestions } from 'api/models/questions'

export interface ITestModuleProps {
  topicId: string
  questions: IQuestions[]
}

export type TimeState = Record<'hours' | 'min' | 'sec', number>
