import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import {
  Form,
  Button,
  Container,
  QuestionsChoose,
  QuestionsText,
  ProgressExam, QuestionsSequence
} from 'components'
import { questions } from '@/public/mock/questions'
import { QuestionTypes } from 'api/models/questions'
import { useQuery } from '@tanstack/react-query'
import { IUser } from 'api/models'
import { getMe } from 'api/endpoints'

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {
  useQuery<IUser>(['user'], getMe)

  const submit = (data) => {
    console.log('data ', data)
  }

  const questionsJSX = questions.map((item) => {
    switch (item.type) {
      case QuestionTypes.checkbox:
        return <QuestionsChoose key={item.id} {...item} />
      case QuestionTypes.text:
        return <QuestionsText key={item.id} {...item} />
      case QuestionTypes.sequence:
        return <QuestionsSequence key={item.id} {...item} />
    }
  })

  return (
    <Container>
      <div className={''}>
        <Form onSubmit={submit}>
          <div className={'flex items-start gap-7'}>
            <div className={'flex flex-col gap-5 w-3/4'}>
              {questionsJSX}
            </div>
            <ProgressExam />
          </div>
          <Button title={'Отправить'} />
        </Form>
      </div>
    </Container>
  )
}
