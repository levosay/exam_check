import instance from 'api'
import { TAuthBody } from 'api/models'

export const postSignup = async (body: TAuthBody) => {
  const { data } = await instance.post('/signup', body)

  return data
}
