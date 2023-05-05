import { apiAuth } from 'api'
import { TSigninBody } from 'api/models'

export const postSignin = async (body: TSigninBody) => {
  const { data } = await apiAuth.post('/signin', body)

  return data
}
