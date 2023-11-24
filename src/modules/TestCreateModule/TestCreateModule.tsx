import { FunctionComponent, useState } from 'react'
import { ITestCreateModuleProps } from './TestCreateModule.d'
import { Container } from 'components'

export const TestCreateModule: FunctionComponent<
  ITestCreateModuleProps
> = (): JSX.Element => {
  // const [tests, setTests] = useState([])
  return (
    <Container>
      <div className={''}>
        TestCreateModule Component
      </div>
    </Container>
  )
}
