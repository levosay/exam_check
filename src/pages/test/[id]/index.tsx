import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { getMe, getQuestions, questionTopic } from 'api/endpoints'
import { TestModule } from 'modules'
import { IQuestions } from 'api/models/questions'
import { Loader, NotFoundTest } from 'components'
import { Params } from 'types'
import { IUser } from 'api/models'

const Test: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ id }) => {
  const { data: userData, isLoading: userIsLoading } = useQuery<IUser>({
      queryKey: ['user'],
      queryFn: getMe
    }
  )
  const { data, isLoading } = useQuery<IQuestions[]>({
      queryKey: ['test', id],
      queryFn: async () => await getQuestions(id)
    }
  )

  const showBtnLogin = !userData?.username && !userIsLoading

  if (!data && isLoading) return <Loader weight={'w-7'} height={'h-7'} center />

  if (!data?.length && !isLoading) return (
    <NotFoundTest showBtnLogin={showBtnLogin} />
  )

  return <TestModule questions={data} topicId={id} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await questionTopic()

  const paths = data.map(({ test }) => ({
    params: { id: `${test}` }
  }))

  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params
  const queryClient = new QueryClient()

  try {
    queryClient.fetchQuery({
      queryKey: ['test', id],
      queryFn: async () => await getQuestions(id)
    })
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
