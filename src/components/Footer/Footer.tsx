import { FunctionComponent } from 'react'
import { IFooterProps } from './Footer.d'
import { Container } from 'components'

export const Footer: FunctionComponent<IFooterProps> = (): JSX.Element => {
  return (
    <Container tailClass={'mt-auto'}>
      <div className={'flex justify-center py-4'}>
        <h4>
          Дипломный проект Левшина Олега
          <span className={'text-second-prime'}> 5 курс</span>
        </h4>
      </div>
    </Container>
  )
}
