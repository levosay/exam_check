import { NextPage } from 'next'
import { TestModule } from 'modules'
import { questions } from '@/public/mock/questions'

const Test: NextPage = () => {
  return <TestModule questions={questions} />
}

export default Test
