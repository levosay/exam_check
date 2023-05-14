import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { HomeModule } from 'modules'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { IUser, TQuestionTopic } from 'api/models'
import { getMe, questionTopic } from 'api/endpoints'
import { Loader } from 'components'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  const { data: userData, isLoading: userIsLoading } = useQuery<IUser>({
    queryKey: ['user'],
    queryFn: getMe
  })
  const { data } = useQuery<TQuestionTopic>({
    queryKey: ['them'],
    queryFn: questionTopic
  })

  return (
    <>
      {userIsLoading || !userData || !data
        ? <Loader weight={'w-7'} height={'h-7'} center />
        : <HomeModule data={data} />
      }
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  try {
    queryClient.fetchQuery({
      queryKey: ['them'],
      queryFn: questionTopic
    })
  } catch {
    return {
      notFound: true
    }
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home
