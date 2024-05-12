import { apiExam } from 'api'
import { IQuestions } from '@/src/api/models/questions'
import { QuestionText } from '@/src/modules'
import { IExamTopic } from '@/src/api/models'

export type GetQuestionsRequest = {
  questions: IQuestions[]
  topic: IExamTopic
}

type PostQuestionsBody = Pick<QuestionText, 'test'> & {
  questions: QuestionText[]
}

export const getQuestions = async (id: string) => {
  const { data } = await apiExam.get<GetQuestionsRequest>(`/questions/${id}`)
  return data
}

export const postQuestions = async (body: PostQuestionsBody) => {
  const { data } = await apiExam.post('/questions', body)
  return data
}
