import { FunctionComponent, useCallback, useMemo } from 'react'
import { IHeaderProps } from './Header.d'
import { useBlackRout } from 'hooks'
import Link from 'next/link'
import { menu } from '@/public/header'
import { Button, Loader, Icon } from 'components'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  const { toCustomRoute } = useBlackRout()
  const { data, isLoading } = useQuery<IUser>(['user'], getMe)

  const menuList = useMemo(() => (
    menu.map(({ title, href }) => (
      <Link key={href} href={href}>{title}</Link>
    ))
  ), [])

  const buttonContent = useMemo(() => {
    if (isLoading) return <Loader height={'h-2'} weight={'w-2'} />
    if (data?.username) return data?.username
    return 'Войти'
  }, [data?.username, isLoading])

  const buttonHandler = useCallback(() => {
    if (data?.username) toCustomRoute('/account')
    if (data?.username && isLoading) toCustomRoute('/signin')
  }, [data?.username, isLoading])

  return (
    <div className="container mx-auto py-8 mb-5 flex justify-between">
      <div className="flex items-center gap-1">
        <Icon id={'book-open'} color={'prim-light'} />
        <h2 className="text-prim">Exam Check</h2>
      </div>
      <div className="flex gap-6">
        {menuList}
      </div>
      <Button
        className={'h-4 min-w-100'}
        title={buttonContent}
        onClick={buttonHandler}
      />
    </div>
  )
}
