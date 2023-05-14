import { FunctionComponent, useCallback, useMemo } from 'react'
import { IAuthorBtnProps } from './AuthorBtn.d'
import { Button, Loader } from 'components'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'
import { useBlackRout } from 'hooks'
import { getCookie } from 'cookies-next'

export const AuthorBtn: FunctionComponent<
  IAuthorBtnProps
> = (): JSX.Element => {
  const { toCustomRoute } = useBlackRout()
  const token = getCookie('authToken')
  const { data, isLoading } = useQuery<IUser>({
      queryKey: ['user'],
      queryFn: getMe
    }
  )

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
    <Button
      className={'h-4 min-w-100'}
      title={buttonContent}
      onClick={buttonHandler}
    />
  )
}
