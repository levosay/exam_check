import { FunctionComponent } from 'react'
import { INotFoundTetsProps } from './NotFoundTest.d'
import { Container, NextLink } from 'components'

export const NotFoundTest: FunctionComponent<
  INotFoundTetsProps
> = (): JSX.Element => {
  return (
    <Container>
      <div className={'flex flex-col items-center gap-4'}>
        <span>Этот тест еще не готов или Вам нужно авторизоваться</span>
        <NextLink href={'/'}>На главную</NextLink>
        <NextLink href={'/signin'}>Авторизоваться</NextLink>
      </div>
    </Container>
  )
}
