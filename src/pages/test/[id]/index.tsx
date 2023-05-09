import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { getQuestions } from 'api/endpoints'
import { TestModule } from 'modules'
import { IQuestions } from 'api/models/questions'
import { NotFoundTest } from 'components'
import { Params } from 'types'

const Test: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const { data } = useQuery<IQuestions[]>(['test'], async () => getQuestions(id))

  if (!data?.length) return <NotFoundTest />

  return <TestModule questions={data} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params
  const queryClient = new QueryClient()

  try {
    queryClient.fetchQuery(['test', id], async () => getQuestions(id))
  } catch {
    return {
      notFound: true,
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
