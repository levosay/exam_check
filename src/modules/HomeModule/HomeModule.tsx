import { FunctionComponent } from 'react'
import { ICards, IHomeModuleProps } from './HomeModule.d'
import { Container } from 'components'
import Link from 'next/link'

const cards: ICards[] = [
  {
    title: 'Вторая Мировая',
    text: 'Тест нацелен на определения Ваших знаний периода 1920-1950',
    href: '/test/1'
  },
  {
    title: 'Империя Наполеона',
    text: 'Торт?',
    href: '/test/2'
  }
]

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {
  const cardsJSX = cards.map(({ title, text, href }) => (
    <Link key={title} href={href}>
      <div
        className={'flex flex-col gap-2 w-300 bg-gray rounded-2xl p-4 text-main-dark bg-indigo-500 shadow-lg hover:shadow-second-prime-light anim'}>
        <h3 className={'text-second-prime text-2xl'}>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  ))

  return (
    <Container>
      <div className={'flex gap-8'}>{cardsJSX}</div>
    </Container>
  )
}
