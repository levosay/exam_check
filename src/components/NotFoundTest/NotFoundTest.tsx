import { FunctionComponent } from 'react'
import { INotFoundTetsProps } from './NotFoundTest.d'
import { Container } from '@/src/components'
import Link from 'next/link'

export const NotFoundTest: FunctionComponent<
  INotFoundTetsProps
> = (): JSX.Element => {
  return (
    <Container>
      <div className={'flex flex-col items-center'}>
        <span>Этот тест еще не готов</span>
        <Link href={'/'} className={'w-max'}>На главную</Link>
      </div>
    </Container>
  )
}
