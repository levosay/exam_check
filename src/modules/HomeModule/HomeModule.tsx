import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import {
  Form,
  Button,
  Container,
  QuestionsChoose,
  QuestionsText
} from 'components'
import { questions } from '@/public/mock/questions'
import { QuestionTypes } from 'api/models/questions'

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {
  const submit = (data) => {
    console.log('data ', data)
  }

  const questionsJSX = questions.map(({ id, type, ...props }) => {
    switch (type) {
      case QuestionTypes.checkbox:
        return <QuestionsChoose key={id} {...props} />
      case QuestionTypes.text:
        return <QuestionsText key={id} {...props} />
    }
  })

  return (
    <Container>
      <div className={''}>
        <Form onSubmit={submit}>
          {questionsJSX}
          <Button title={'Отправить'} />
        </Form>
      </div>
    </Container>
  )
}
