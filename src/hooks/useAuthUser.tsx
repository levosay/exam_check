import { getMe, postSignin, postSignup } from 'api/endpoints'
import { deleteCookie, setCookie } from 'cookies-next'
import { useState } from 'react'
import { useBlackRout } from 'hooks'
import { TSigninBody, TSignupBody } from 'api/models'
import { useQueryClient } from '@tanstack/react-query'

interface IInitMesRequest {
  message: string
  error: string
}

const initMesReq: IInitMesRequest = {
  message: '',
  error: ''
}

export const useAuthUser = () => {
  const [mesReq, setMesReq] = useState<IInitMesRequest>(initMesReq)
  const { toHomePath, toCustomRoute } = useBlackRout()
  const queryClient = useQueryClient()

  const signinWithCookies = (body: TSigninBody) => {
    postSignin(body)
      .then(data => {
        if (data) {
          setCookie('authToken', data.token)
          setMesReq(mesReq)
          queryClient.fetchQuery({
            queryKey: ['user'],
            queryFn: getMe
          })
          toHomePath()
        }
      })
      .catch(({ response }) => {
        setMesReq({ ...mesReq, error: response?.data.message })
      })
  }

  const signupWithRoute = (body: TSignupBody) => {
    postSignup(body)
      .then(({ message }) => {
        setMesReq({ ...mesReq, message })
        toCustomRoute('/signin')
      })
      .catch(({ response }) => {
        setMesReq({ ...mesReq, error: response.data.message })
      })
  }

  const logOut = () => {
    deleteCookie('authToken', { path: '/' })
    toCustomRoute('/signin')
  }

  return {
    signinWithCookies,
    signupWithRoute,
    logOut,
    mesReq
  }
}
