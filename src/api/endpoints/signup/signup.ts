import instance from 'api'
import { TSignupBody } from 'api/models'

export const postSignup = async (body: TSignupBody) => {
  const { data } = await instance.post('/signup', body)

  return data
}
