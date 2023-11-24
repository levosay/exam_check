import { NextPage } from 'next'
import { AccountModule } from 'modules'
import { Loader } from 'components'
import { useAppDispatch, useAppSelector, userStore } from '@/src/store/hooks'
import { useEffect } from 'react'
import { meThunk } from '@/src/store/user'

const Account: NextPage = () => {
  const { user } = useAppSelector(userStore)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(meThunk())
  }, [])

  return (
    <>
      {!user
        ? <Loader weight={'w-7'} height={'h-7'} center />
        : <AccountModule {...user} />
      }
    </>
  )
}

export default Account
