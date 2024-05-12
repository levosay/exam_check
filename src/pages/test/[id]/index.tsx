import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { Params } from 'types'
import { TestModule } from 'modules'
import { Loader, NotFoundTest } from 'components'
import {
  questionStore,
  useAppSelector,
  userStore,
} from '@/src/store/hooks'
import { questionsThunk } from '@/src/store/question'
import { getQuestionTopic } from '@/src/api/endpoints'
import { wrapper } from '@/src/store'
import { useRouter } from 'next/router'

const Test: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const { user: userData, loading: userLoading } = useAppSelector(userStore)
  const {
    list: questionData,
    loading: questionLoading,
  } = useAppSelector(questionStore)
  const { query } = useRouter()
  const showBtnLogin = !userData?.username && !userLoading

  if (userLoading || questionLoading) {
    return <Loader weight={'w-7'} height={'h-7'} center />
  } else if (!questionData?.length && !questionLoading) {
    return (
      <NotFoundTest showBtnLogin={showBtnLogin} />
    )
  }

  return (userData && questionData) && (
    <TestModule questions={questionData} topicId={query?.id as string ?? '0'} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getQuestionTopic()

  const paths = data.map(({ test }) => ({
    params: { id: `${test}` },
  }))

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async (context) => {
      const { id } = context.params as Params
      try {
        await dispatch(questionsThunk(id))
        return {
          props: {},
        }
      } catch (e) {
        return {
          notFound: true,
        }
      }
    },
)

export default Test
