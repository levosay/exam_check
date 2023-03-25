import instance from 'api'

export const getMe = async () => {
  const { data } = await instance.get('/me')

  return data
}
