import { apiExam } from 'api'
import { IQuestionData } from 'utils/helpers'

export const postAnswers = async (body: IQuestionData) => {
  const { data } = await apiExam.post('/answers', body)

  return data
}
