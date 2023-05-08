import { FunctionComponent, PropsWithChildren } from 'react'
import { IContainerProps } from './Container.d'

export const Container: FunctionComponent<PropsWithChildren<IContainerProps>> = ({
  children,
  tailClass
}): JSX.Element => {
  return <div
    className={`max-w-1520 w-full mx-auto px-10 ${tailClass}`}>{children}</div>
}
