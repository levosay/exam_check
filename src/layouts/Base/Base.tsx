import { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { IBaseProps } from './Base.d'
import { Footer, Header } from 'components'
import { getCookie } from 'cookies-next'
import { useBlackRout } from 'hooks'
import { useQuery } from '@tanstack/react-query'
import { IUser } from '@/src/api/models'
import { getMe } from '@/src/api/endpoints'

export const Base: FunctionComponent<PropsWithChildren<IBaseProps>> = ({
  children
}): JSX.Element => {
  const token = getCookie('authToken')
  const { toCustomRoute } = useBlackRout()
  useQuery<IUser>(['user'], getMe)

  useEffect(() => {
    if (!token) toCustomRoute('/signin')
  }, [])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
