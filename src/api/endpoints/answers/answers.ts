import { apiExam } from 'api'
import { IQuestionBody } from 'utils/helpers'

export const postAnswers = async (body: IQuestionBody) => {
  const { data } = await apiExam.post('/answers', body)

  return data
}
