import { IQuestions } from 'api/models/questions'

export interface ITestModuleProps {
  topicId: number
  questions: IQuestions[]
}
