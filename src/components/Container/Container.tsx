import { FunctionComponent } from 'react'
import { IContainerProps } from './Container.d'

export const Container: FunctionComponent<
  IContainerProps
> = (): JSX.Element => {
  return <div className={''}>Container Component</div>
}
