import { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { IBaseProps } from './Base.d'
import { Footer, Header } from 'components'
import { getCookie } from 'cookies-next'
import { useBlackRout } from 'hooks'
import { useAppDispatch } from '@/src/store/hooks'
import { meThunk } from '@/src/store/user'

export const Base: FunctionComponent<PropsWithChildren<IBaseProps>> = ({
  children,
}): JSX.Element => {
  const token = getCookie('authToken')
  const { toCustomRoute } = useBlackRout()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(meThunk())
  }, [])

  useEffect(() => {
    if (!token) {
      toCustomRoute('/signin')
    }
  }, [])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
