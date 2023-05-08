import axios from 'axios'
import { CONFIG } from 'utils/constants'
import { getCookie } from 'utils/helpers'

export const apiAuth = axios.create({
  baseURL: `${CONFIG.apiEndpoint}/auth`
})

export const apiExam = axios.create({
  baseURL: `${CONFIG.apiEndpoint}/exam`
})

apiAuth.interceptors.request.use(config => {
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

apiExam.interceptors.request.use(config => {
    const token = getCookie('authToken')

    if (token) {
      config.headers['Authorization'] = `Basic ${token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
