import { apiExam } from 'api'

export const postAnswers = async (body) => {
  const { data } = await apiExam.post('/answers', body)

  return data
}
