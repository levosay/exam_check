import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { getMe, getQuestions } from 'api/endpoints'
import { TestModule } from 'modules'
import { IQuestions } from 'api/models/questions'
import { Loader, NotFoundTest } from 'components'
import { Params } from 'types'
import { IUser } from 'api/models'

const Test: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const { data: userData, isLoading: userIsLoading } = useQuery<IUser>({
      queryKey: ['user'],
      queryFn: async () => getMe()
    }
  )
  const { data, isLoading } = useQuery<IQuestions[]>({
      queryKey: ['test', id],
      queryFn: async () => getQuestions(id)
    }
  )

  const showBtnLogin = !userData?.username && !userIsLoading

  if (!data && isLoading) return <Loader weight={'w-7'} height={'h-7'} center />
  
  if (!data?.length && !isLoading) return (
    <NotFoundTest showBtnLogin={showBtnLogin} />
  )

  return <TestModule questions={data} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params
  const queryClient = new QueryClient()

  try {
    queryClient.fetchQuery(['test', id], async () => getQuestions(id))
  } catch {
    return {
      notFound: true
    }
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id
    }
  }
}

export default Test
