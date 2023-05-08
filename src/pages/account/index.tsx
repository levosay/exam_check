import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { AccountModule } from 'modules'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { IUser } from '@/src/api/models'
import { getMe } from '@/src/api/endpoints'
import { Loader } from '@/src/components'

const Account: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  const { data, isLoading } = useQuery<IUser>(['user'], getMe)

  return (
    <>
      {isLoading || !data
        ? <Loader weight={'w-7'} height={'h-7'} center />
        : <AccountModule {...data} />
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  try {
    queryClient.fetchQuery(['user'], getMe)
  } catch {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Account
