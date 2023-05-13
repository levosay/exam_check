import { FunctionComponent, useCallback, useMemo } from 'react'
import { IHeaderProps } from './Header.d'
import { useBlackRout } from 'hooks'
import Link from 'next/link'
import { Button, Container, Icon, Loader } from 'components'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'
import { getCookie } from 'cookies-next'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  const { asPath, toCustomRoute } = useBlackRout()
  const token = getCookie('authToken')
  const { data, isLoading } = useQuery<IUser>(['user'], getMe)
  const isShowBtnAccount = !(asPath.match('/signin') || asPath.match('/signup'))

  const buttonContent = useMemo(() => {
    if (isLoading) return <Loader height={'h-2'} weight={'w-2'} />
    if (data?.username) return data?.username
    return 'Войти'
  }, [token, data?.username, isLoading])

  const buttonHandler = useCallback(() => {
    if (data?.username) toCustomRoute('/account')
    if (!data?.username && !isLoading) toCustomRoute('/signin')
  }, [token, data?.username, isLoading])

  return (
    <Container>
      <div
        className="mx-auto py-8 max-md:py-4 mb-5 max-md:mb-1 flex justify-between">
        <div className="flex items-center gap-1">
          <Link href={token ? '/' : asPath} className={'flex gap-2'}>
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
        {isShowBtnAccount &&
          <Button
            className={'h-4 min-w-100'}
            title={buttonContent}
            onClick={buttonHandler}
          />
        }
      </div>
    </Container>
  )
}
