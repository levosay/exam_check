import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { getQuestions } from 'api/endpoints'
import { TestModule } from 'modules'

const Test: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const { data } = useQuery(['test'], async () => getQuestions(id))

  console.log('data_++_= ', data)
  if (!data) return <div>NOT</div>

  return <TestModule questions={data} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  const queryClient = new QueryClient()

  try {
    queryClient.fetchQuery(['test'], async () => getQuestions(id))
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
