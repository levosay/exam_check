import { FunctionComponent } from 'react'
import { IFooterProps } from './Footer.d'
import { Container } from 'components'

export const Footer: FunctionComponent<IFooterProps> = (): JSX.Element => {
  return (
    <Container tailClass={'mt-auto'}>
      <div className={'flex justify-center py-4 text-second-prime'}>
        <h4>
          Дипломный проект
          <span className={'text-gray'}> Левшина Олега </span>
          5 курс
        </h4>
      </div>
    </Container>
  )
}
