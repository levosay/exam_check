import { FunctionComponent } from 'react'
import { IAccountModuleProps } from './AccountModule.d'
import { Container, Loader } from 'components'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'
import { InfoBlock } from './components'

export const AccountModule: FunctionComponent<
  IAccountModuleProps
> = (): JSX.Element => {
  const { data, isLoading } = useQuery<IUser>(['user'], getMe)

  return (
    <Container>
      <div className={'flex flex-col'}>
        {isLoading
          ? <Loader height={'h-6'} weight={'w-6'} />
          : <>
            <InfoBlock filedName={'Ваш Логин'} filedValue={data?.username} />
            <InfoBlock filedName={'Ваша Роль'} filedValue={data?.roles} />
          </>
        }
      </div>
    </Container>
  )
}
