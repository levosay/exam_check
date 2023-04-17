import { FunctionComponent } from 'react'
import { IFooterProps } from './Footer.d'
import { Container } from 'components'

export const Footer: FunctionComponent<IFooterProps> = (): JSX.Element => {
  return (
    <Container>
      <div className={'flex justify-end'}>
        <h4>
          Учебный проект Левшина Олега
          <span className={'text-second-prime'}> 4 курс</span>
        </h4>
      </div>
    </Container>
  )
}
