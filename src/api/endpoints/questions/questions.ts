import { apiExam } from 'api'
import { IQuestions } from '@/src/api/models/questions'

export const getQuestions = async (id: string) => {
  const { data } = await apiExam.get<IQuestions[]>(`/questions/${id}`)
  return data
}
