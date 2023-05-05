import { apiExam } from 'api'

export const getQuestions = async (id?: string) => {
  const { data } = await apiExam.get(`/questions/${id}`)
  return data
}
