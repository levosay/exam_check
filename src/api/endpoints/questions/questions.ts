import { apiExam } from 'api'
import { IQuestions } from '@/src/api/models/questions'
import { QuestionText } from '@/src/modules'

type PostQuestionsBody = Pick<QuestionText, 'test'> & {
  questions: QuestionText[]
}

export const getQuestions = async (id: string) => {
  const { data } = await apiExam.get<IQuestions[]>(`/questions/${id}`)
  return data
}

export const postQuestions = async (body: PostQuestionsBody) => {
  const { data } = await apiExam.post('/questions', body)
  return data
}
