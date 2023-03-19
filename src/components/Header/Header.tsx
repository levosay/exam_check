import { FunctionComponent, useMemo } from 'react'
import { IHeaderProps } from './Header.d'
import { useAuthUser } from 'hooks'
import Link from 'next/link'
import { menu } from '@/public/header'
import { Button } from 'components'
import { getCookie } from 'cookies-next'

export const Header: FunctionComponent<IHeaderProps> = (): JSX.Element => {
  const token = getCookie('authToken')
  const { logOut } = useAuthUser()

  const menuList = useMemo(() => (
    menu.map(({ id, title, href }) => (
      <Link key={id} href={href}>{title}</Link>
    ))
  ), [])

  return (
    <div className="container mx-auto py-8 mb-5 flex justify-between">
      <h2 className="text-blue-400">Exam Check</h2>
      <div className="flex gap-6">
        {menuList}
      </div>
      {token && <Button title={'Выйти'} onClick={logOut} />}
    </div>
  )
}
