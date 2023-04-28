import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import { Container, } from 'components'

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {

  const submit = (data) => {
    console.log('data ', data)
  }


  return (
    <Container>
      12123213213
    </Container>
  )
}
