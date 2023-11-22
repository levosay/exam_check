import { postSignin, postSignup } from 'api/endpoints'
import { deleteCookie, setCookie } from 'cookies-next'
import { useState } from 'react'
import { useBlackRout } from 'hooks'
import { TSigninBody, TSignupBody } from 'api/models'
import { clearUser, meThunk } from '@/src/store/user'
import { useAppDispatch } from '@/src/store/hooks'

interface IInitMesRequest {
  message: string
  error: string
}

const initMesReq: IInitMesRequest = {
  message: '',
  error: '',
}

export const useAuthUser = () => {
  const [mesReq, setMesReq] = useState<IInitMesRequest>(initMesReq)
  const { toHomePath, toCustomRoute } = useBlackRout()
  const dispatch = useAppDispatch()

  const signinWithCookies = (body: TSigninBody) => {
    postSignin(body)
      .then(data => {
        if (data.token) {
          setCookie('authToken', data.token)
          setMesReq(mesReq)
          dispatch(meThunk())
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
    dispatch(clearUser())
    toCustomRoute('/signin')
  }

  return {
    signinWithCookies,
    signupWithRoute,
    logOut,
    mesReq,
  }
}
