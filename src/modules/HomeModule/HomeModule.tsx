import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import { Container, } from 'components'

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {

  return (
    <Container>
      <div>
        История:
      </div>
    </Container>
  )
}
