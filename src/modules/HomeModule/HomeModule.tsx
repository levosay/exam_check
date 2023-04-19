import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import {
  Form,
  Button,
  Container,
  QuestionsChoose,
  QuestionsText,
  ProgressExam
} from 'components'
import { questions } from '@/public/mock/questions'
import { QuestionTypes } from 'api/models/questions'

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {
  const submit = (data) => {
    console.log('data ', data)
  }

  // TODO в правой части экрана стики блок с прогрессом **** тут же было бы прикольно добавить секундомер прохождения теста

  const questionsJSX = questions.map((item) => {
    switch (item.type) {
      case QuestionTypes.checkbox:
        return <QuestionsChoose key={item.id} {...item} />
      case QuestionTypes.text:
        return <QuestionsText key={item.id} {...item} />
    }
  })

  return (
    <Container>
      <div className={''}>
        <Form onSubmit={submit}>
          <div className={'flex gap-7'}>
            <div className={'w-2/4'}>
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
