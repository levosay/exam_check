import instance from 'api'
import { IAuthBody } from 'api/models'

export const postSignup = async (body: IAuthBody) => {
  const { data } = await instance.post('/signup', body)

  return data
}
