import { apiAuth } from 'api'

export const getUsers = async (id = '') => {
  const { data } = await apiAuth.get(`/users/${id}`)

  return data
}
