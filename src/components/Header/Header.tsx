import { FunctionComponent } from 'react'
import { IHeaderProps } from './Header.d'
import { useBlackRout } from 'hooks'
import Link from 'next/link'
import { Container, Icon } from 'components'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'
import { AuthorBtn } from './components'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  const { asPath } = useBlackRout()
  const { data } = useQuery<IUser>({
      queryKey: ['user'],
      queryFn: getMe
    }
  )
  const isShowBtnAccount = !(asPath.match('/signin') || asPath.match('/signup'))

  return (
    <Container>
      <div
        className="mx-auto py-8 max-md:py-4 mb-5 max-md:mb-1 flex justify-between">
        <div className="flex items-center gap-1">
          <Link href={data ? '/' : asPath} className={'flex gap-2'}>
            <Icon
              id={'book-open'}
              color={'prim-light'}
              height={'h-4'}
              width={'w-4'}
            />
            <h2
              className={`text-2xl text-prim ${isShowBtnAccount && 'max-md:hidden'}`}
            >
              Exam Check
            </h2>
          </Link>
        </div>
        {isShowBtnAccount && <AuthorBtn />}
      </div>
    </Container>
  )
}
