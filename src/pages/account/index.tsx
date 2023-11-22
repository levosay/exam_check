import { NextPage } from 'next'
import { AccountModule } from 'modules'
import { Loader } from 'components'
import { useAppSelector, userStore } from '@/src/store/hooks'

const Account: NextPage = () => {
  const { user, loading } = useAppSelector(userStore)

  return (
    <>
      {loading || !user
        ? <Loader weight={'w-7'} height={'h-7'} center />
        : <AccountModule {...user} />
      }
    </>
  )
}

export default Account
