import instance from 'api'

export const getUsers = async (id = '') => {
  const { data } = await instance.get(`/users/${id}`)

  return data
}
