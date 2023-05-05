import { apiAuth } from 'api'
import { TSignupBody } from 'api/models'

export const postSignup = async (body: TSignupBody) => {
  const { data } = await apiAuth.post('/signup', body)

  return data
}
