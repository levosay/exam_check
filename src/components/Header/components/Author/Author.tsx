import { FunctionComponent } from 'react'
import { IAuthorProps } from './Author.d'
import { Button } from 'components'
import { getCookie } from 'cookies-next'
import { useAuthUser } from 'hooks'

export const Author: FunctionComponent<IAuthorProps> = (): JSX.Element => {
  const token = getCookie('authToken')
  const { logOut } = useAuthUser()

  return (
    <div className={''}>
      {token && <Button title={'Выйти'} onClick={logOut} />}
    </div>
  )
}
