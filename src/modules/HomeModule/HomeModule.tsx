import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import { Container } from 'components'
import Link from 'next/link'

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {

  return (
    <Container>
      <div>
        <Link href={'/test/1'}>История:</Link>
      </div>
    </Container>
  )
}
