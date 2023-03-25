import { FunctionComponent, useCallback, useMemo } from 'react'
import { IHeaderProps } from './Header.d'
import { useAuthUser, useBlackRout } from 'hooks'
import Link from 'next/link'
import { menu } from '@/public/header'
import { Button, Loader } from 'components'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  const { logOut } = useAuthUser()
  const { toCustomRoute } = useBlackRout()
  const { data, isLoading } = useQuery<IUser>(['user'], getMe)

  const menuList = useMemo(() => (
    menu.map(({ id, title, href }) => (
      <Link key={id} href={href}>{title}</Link>
    ))
  ), [])

  const buttonContent = useMemo(() => {
    if (isLoading) return <Loader height={'h-2'} weight={'w-2'} />
    if (data?.username) return data?.username
    return 'Войти'
  }, [data?.username, isLoading])

  const buttonHandler = useCallback(() => {
    if (data?.username && !isLoading) return logOut
    return toCustomRoute('/signin')
  }, [data?.username])

  return (
    <div className="container mx-auto py-8 mb-5 flex justify-between">
      <h2 className="text-blue-400">Exam Check</h2>
      <div className="flex gap-6">
        {menuList}
      </div>
      {<Button
        className={'h-4 min-w-100'}
        title={buttonContent}
        onClick={buttonHandler}
      />}
    </div>
  )
}
