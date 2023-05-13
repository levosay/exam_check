import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { AccountModule } from 'modules'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'
import { Loader } from 'components'

const Account: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  const { data, isLoading } = useQuery<IUser>({
      queryKey: ['user'],
      queryFn: async () => await getMe()
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

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  try {
    queryClient.fetchQuery({
      queryKey: ['user'],
      queryFn: async () => await getMe()
    })
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
