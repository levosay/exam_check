import { FunctionComponent } from 'react'
import { ITestModuleProps } from './TestModule.d'
import { QuestionTypes } from 'api/models/questions'
import {
  Button,
  Container,
  Form,
  ProgressExam,
  QuestionsChoose,
  QuestionsSequence,
  QuestionsText
} from 'components'

export const TestModule: FunctionComponent<
  ITestModuleProps
> = ({ questions }): JSX.Element => {
  const questionsJSX = [...questions].map((item) => {
    switch (item.type) {
      case QuestionTypes.checkbox:
        return <QuestionsChoose key={item.id} {...item} />
      case QuestionTypes.text:
        return <QuestionsText key={item.id} {...item} />
      case QuestionTypes.sequence:
        return <QuestionsSequence key={item.id} {...item} />
    }
  })

  const submit = (data) => {
    console.log('data ', data)
  }

  return (
    <Container>
      <div className={''}>
        <Form onSubmit={submit}>
          <div className={'flex items-start gap-7'}>
            <div className={'flex flex-col gap-5 w-3/4'}>
              {questionsJSX}
            </div>
            <ProgressExam current={0} total={4} />
          </div>
          <Button title={'Отправить'} />
        </Form>
      </div>
    </Container>
  )
}
