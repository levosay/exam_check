import { FunctionComponent } from 'react'
import { ICards, IHomeModuleProps } from './HomeModule.d'
import { Container, Loader } from 'components'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'

const cards: ICards[] = [
  {
    title: 'Вторая Мировая',
    text: 'Тест нацелен на определение Ваших знаний периода 1920-1950',
    href: '/test/1'
  },
  {
    title: 'Империя Наполеона',
    text: 'Торт?',
    href: '/test/2'
  }
]

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {
  const { data, isLoading } = useQuery<IUser>({
      queryKey: ['user'],
      queryFn: getMe
    }
  )

  const cardsJSX = cards.map(({ title, text, href }) => (
    <Link key={title} href={href}>
      <div
        className={'flex flex-col gap-2 max-md:gap-1 w-300 max-md:w-full bg-gray p-4 max-md:p-2 text-main-dark rounded-2xl shadow-lg hover:shadow-second-prime-light anim'}
      >
        <h3 className={'text-second-prime text-2xl'}>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  ))

  return (
    <Container>
      <div
        className={'flex items-start gap-3 max-md:gap-1 max-md:flex-col max-md:items-stretch'}
      >
        {data?.username && !isLoading
          ? cardsJSX
          : <Loader weight={'w-7'} height={'h-7'} center />
        }
      </div>
    </Container>
  )
}
