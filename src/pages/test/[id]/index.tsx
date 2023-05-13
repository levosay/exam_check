import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { getQuestions } from 'api/endpoints'
import { TestModule } from 'modules'
import { IQuestions } from 'api/models/questions'
import { Loader, NotFoundTest } from 'components'
import { Params } from 'types'

const Test: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ id }) => {
  const { data, isLoading } = useQuery<IQuestions[]>(
    ['test', id],
    async () => getQuestions(id)
  )

  if (!data && isLoading) return <Loader weight={'w-7'} height={'h-7'} center />
  if (!data?.length && !isLoading) return <NotFoundTest />

  return <TestModule questions={data} />
}

export const getStaticPaths = async () => {
  const paths = [1, 2].map((id) => ({
    params: { id }
  }))

  return { paths, fallback: 'blocking' }
}


export const getStaticProps: GetStaticProps = async (context) => {
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
