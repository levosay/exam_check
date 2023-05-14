import { apiExam } from 'api'
import { TQuestionTopic } from 'api/models'

export const questionTopic = async () => {
  const { data } = await apiExam.get<TQuestionTopic>('/topic')
  return data
}
