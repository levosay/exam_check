import { FunctionComponent, useEffect } from 'react'
import { IHeaderProps } from './Header.d'
import { useBlackRout } from 'hooks'
import { Container } from 'components'
import { AuthorBtn, Logo } from './components'
import { useAppSelector, userStore } from '@/src/store/hooks'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  const { asPath, toCustomRoute } = useBlackRout()
  const { user, loading } = useAppSelector(userStore)
  const isShowBtnAccount = !(asPath.match('/signin') || asPath.match('/signup'))

  useEffect(() => {
    if (!user && !loading) {
      toCustomRoute('/signin')
    }
  }, [])

  return (
    <Container>
      <div
        className="mx-auto py-8 max-md:py-4 mb-5 max-md:mb-1 flex justify-between">
        <div className="flex items-center gap-1">
          <Logo
            user={!!user}
            path={asPath}
            showLogoText={isShowBtnAccount}
          />
        </div>
        {isShowBtnAccount &&
          <AuthorBtn username={user?.username} isLoading={loading} />
        }
      </div>
    </Container>
  )
}
