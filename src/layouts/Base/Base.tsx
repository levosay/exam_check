import {
  FunctionComponent,
  PropsWithChildren,
  useEffect
} from 'react'
import { IBaseProps } from './Base.d'
import { Footer, Header } from 'components'
import { getCookie } from 'cookies-next'
import { useBlackRout } from 'hooks'

export const Base: FunctionComponent<PropsWithChildren<IBaseProps>> = ({
  children
}): JSX.Element => {
  const token = getCookie('authToken')
  const { toCustomRoute } = useBlackRout()

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
