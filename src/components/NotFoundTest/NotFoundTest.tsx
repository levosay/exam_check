import { FunctionComponent } from 'react'
import { INotFoundTetsProps } from './NotFoundTest.d'
import { Container, NextLink } from 'components'

export const NotFoundTest: FunctionComponent<
  INotFoundTetsProps
> = (): JSX.Element => {
  return (
    <Container>
      <div className={'flex flex-col items-center gap-10'}>
        <span>Этот тест еще не готов</span>
        <NextLink href={'/'}>На главную</NextLink>
      </div>
    </Container>
  )
}
