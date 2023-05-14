import { NextPage } from 'next'
import { AccountModule } from 'modules'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'
import { Loader } from 'components'

const Account: NextPage = () => {
  const { data, isLoading } = useQuery<IUser>({
      queryKey: ['user'],
      queryFn: getMe
    }
  )

  return (
    <>
      {isLoading || !data
        ? <Loader weight={'w-7'} height={'h-7'} center />
        : <AccountModule {...data} />
      }
    </>
  )
}

export default Account
