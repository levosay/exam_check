import { apiAuth } from 'api'

export const getMe = async () => {
  const { data } = await apiAuth.get('/me')

  return data
}
