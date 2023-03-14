import instance from 'api'
import { TAuthBody } from 'api/models'

export const postSignin = async (body: TAuthBody) => {
  const { data } = await instance.post('/signin', body)

  return data
}
