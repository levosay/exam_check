import { FunctionComponent, PropsWithChildren } from 'react'
import { IBaseProps } from './Base.d'
import { Footer, Header } from '@/src/components'

export const Base: FunctionComponent<PropsWithChildren<IBaseProps>> = ({
  children
}): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
