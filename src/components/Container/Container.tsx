import { FunctionComponent, PropsWithChildren } from 'react'
import { IContainerProps } from './Container.d'

export const Container: FunctionComponent<PropsWithChildren<IContainerProps>> = ({
  children
}): JSX.Element => {
  return <div className="max-w-1520 mx-auto px-10">{children}</div>
}
