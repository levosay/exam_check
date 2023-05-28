import { FunctionComponent, useEffect } from 'react'
import { IHeaderProps } from './Header.d'
import { useBlackRout } from 'hooks'
import { Container } from 'components'
import { AuthorBtn, Logo } from './components'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  const { asPath, toCustomRoute } = useBlackRout()
  const isShowBtnAccount = !(asPath.match('/signin') || asPath.match('/signup'))
  const { data, isLoading } = useQuery<IUser>({
    queryKey: ['user'],
    queryFn: getMe,
    refetchInterval: 0
  })

  useEffect(() => {
    if (!data && !isLoading) toCustomRoute('/signin')
  }, [])

  return (
    <Container>
      <div
        className="mx-auto py-8 max-md:py-4 mb-5 max-md:mb-1 flex justify-between">
        <div className="flex items-center gap-1">
          <Logo
            user={!!data?.username}
            path={asPath}
            showLogoText={isShowBtnAccount}
          />
        </div>
        {isShowBtnAccount &&
          <AuthorBtn username={data?.username} isLoading={isLoading} />
        }
      </div>
    </Container>
  )
}
