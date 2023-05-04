import { FunctionComponent, useState } from 'react'
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
import { IHookFormValues, } from 'types/forms'
import { getProgress, IQuestionData, prepareQuestionsData } from 'utils/helpers'

export const TestModule: FunctionComponent<
  ITestModuleProps
> = ({ questions }): JSX.Element => {
  const [questionData, setQuestionData] = useState<IQuestionData>({})
  const [progress, setProgress] = useState({
    current: 0,
    total: questions.length,
    finish: false
  })

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

  const submit = (data: IHookFormValues) => {
    setProgress(prevState => {
      const progress = getProgress(data)

      if (progress === prevState.total) {
        setQuestionData(prepareQuestionsData(data))
        return { ...prevState, current: getProgress(data), finish: true }
      }

      return { ...prevState, current: getProgress(data), finish: false }
    })
  }

  const sendQuestion = () => {
    console.log('questionData ', questionData)
  }

  return (
    <Container>
      <div className={''}>
        <Form onSubmit={submit}>
          <div className={'flex items-start gap-7'}>
            <div className={'flex flex-col gap-5 w-3/4'}>
              {questionsJSX}
            </div>
            <div className={'sticky w-1/4 top-8 flex flex-col'}>
              <ProgressExam current={progress.current} total={progress.total} />
              {progress.finish &&
                <Button
                  title={'Отправить'}
                  type={'button'}
                  onClick={sendQuestion}
                />
              }
            </div>
          </div>
        </Form>
      </div>
    </Container>
  )
}
