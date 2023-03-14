import axios from 'axios'
import { CONFIG } from 'utils/constants'
import { getCookie } from 'utils/helpers'

const instance = axios.create({
  baseURL: CONFIG.apiEndpoint
})

instance.interceptors.request.use(config => {
    const token = getCookie('authToken')

    if (config.url !== '/signin/' && config.url !== '/signup/' && token) {
      config.headers['Authorization'] = `Basic ${token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
