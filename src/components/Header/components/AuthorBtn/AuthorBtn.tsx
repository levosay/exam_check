import { FunctionComponent, useCallback, useMemo } from 'react'
import { IAuthorBtnProps } from './AuthorBtn.d'
import { Button, Loader } from 'components'
import { useBlackRout } from 'hooks'
import { getCookie } from 'cookies-next'

export const AuthorBtn: FunctionComponent<
  IAuthorBtnProps
> = ({ username, isLoading }): JSX.Element => {
  const { toCustomRoute } = useBlackRout()
  const token = getCookie('authToken')

  const buttonContent = useMemo(() => {
    if (isLoading) return <Loader height={'h-2'} weight={'w-2'} />
    if (username) return username
    return 'Войти'
  }, [token, username, isLoading])

  const buttonHandler = useCallback(() => {
    if (username) toCustomRoute('/account')
    if (!username && !isLoading) toCustomRoute('/signin')
  }, [token, username, isLoading])

  return (
    <Button
      className={'h-4 min-w-100'}
      title={buttonContent}
      onClick={buttonHandler}
    />
  )
}
