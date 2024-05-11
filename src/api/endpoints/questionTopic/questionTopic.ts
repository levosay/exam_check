import { apiExam } from 'api'
import { IQuestionTopicItem, TQuestionTopic } from 'api/models'

type PostQuestionTopic = IQuestionTopicItem

export const getQuestionTopic = async () => {
  const { data } = await apiExam.get<TQuestionTopic>('/topic')
  return data
}

export const postQuestionTopic = async (body: PostQuestionTopic) => {
  const { data } = await apiExam.post('/topic', body)
  return data
}
