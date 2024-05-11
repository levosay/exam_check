import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import { Container } from 'components'
import Link from 'next/link'

export const HomeModule: FunctionComponent<IHomeModuleProps> = ({
  data,
}): JSX.Element => {

  const cardsJSX = data.map(({ title, description, test }) => (
    <Link key={title} href={`/test/${test}`}>
      <div
        className={'flex flex-col gap-2 max-md:gap-1 w-300 max-md:w-full bg-gray p-4 max-md:p-2 text-main-dark rounded-2xl shadow-lg hover:shadow-second-prime-light anim'}
      >
        <h3 className={'text-second-prime text-2xl'}>{title}</h3>
        <p className={'text-ellipsis'}>{description}</p>
      </div>
    </Link>
  ))

  return (
    <Container>
      <div
        className={'flex flex-wrap items-start gap-3 max-md:gap-1 max-md:flex-col max-md:items-stretch'}
      >
        {cardsJSX}
      </div>
    </Container>
  )
}
