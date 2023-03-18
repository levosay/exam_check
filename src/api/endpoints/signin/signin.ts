import instance from 'api'
import { TSigninBody } from 'api/models'

export const postSignin = async (body: TSigninBody) => {
  const { data } = await instance.post('/signin', body)

  return data
}
