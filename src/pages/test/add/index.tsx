import { GetStaticProps, NextPage } from 'next'
import { TestCreateModule } from '@/src/modules'
import { wrapper } from '@/src/store'
import { themeThunk } from '@/src/store/theme'

const TestCreatePage: NextPage = () => {
  return <TestCreateModule />
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

export default TestCreatePage
