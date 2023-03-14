import instance from 'api'
import { IAuthBody } from 'api/models'

export const postSignin = async (body: IAuthBody) => {
  const { data } = await instance.post('/signin', body)

  return data
}
