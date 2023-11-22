import { HomeModule } from 'modules'
import { Loader } from 'components'
import {
  themeStore,
  useAppSelector,
  userStore,
} from 'store/hooks'
import { themeThunk } from '@/src/store/theme'
import { GetStaticProps } from 'next'
import { wrapper } from '@/src/store'

const Home = () => {
  const { loading: userLoading } = useAppSelector(userStore)
  const { list, loading: themeLoading } = useAppSelector(themeStore)

  return (
    <>
      {userLoading && themeLoading &&
        <Loader weight={'w-7'} height={'h-7'} center />}
      {list && <HomeModule data={list} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async () => {
      try {
        await dispatch(themeThunk())

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

export default Home
