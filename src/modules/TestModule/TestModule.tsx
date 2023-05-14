import { FunctionComponent, useState } from 'react'
import { ITestModuleProps } from './TestModule.d'
import { QuestionTypes } from 'api/models/questions'
import {
  Button,
  Container,
  Form,
  Modal,
  NextLink,
  ProgressExam,
  QuestionsChoose,
  QuestionsSequence,
  QuestionsText
} from 'components'
import { IHookFormValues, } from 'types/forms'
import { getProgress, IQuestionData, prepareQuestionsData } from 'utils/helpers'
import { postAnswers } from 'api/endpoints'
import { useBlackRout } from 'hooks'

const initResultPoints = {
  show: false,
  points: 0
}

export const TestModule: FunctionComponent<
  ITestModuleProps
> = ({ questions }): JSX.Element => {
  const { toHomePath } = useBlackRout()
  const [questionData, setQuestionData] = useState<IQuestionData>({})
  const [resultPoints, setResultPoints] = useState(initResultPoints)
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState({
    current: 0,
    total: questions.length,
    finish: false
  })

  const questionsJSX = questions.map((item) => {
    switch (item.type) {
      case QuestionTypes.checkbox:
        return <QuestionsChoose key={item._id} {...item} />
      case QuestionTypes.text:
        return <QuestionsText key={item._id} {...item} />
      case QuestionTypes.sequence:
        return <QuestionsSequence key={item._id} {...item} />
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
    setLoaded(true)
    postAnswers(questionData)
      .then(data => {
        setResultPoints({
          show: true,
          points: data
        })
      })
      .finally(() => {
        setLoaded(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const closeModal = () => {
    setResultPoints(initResultPoints)
    toHomePath()
  }

  return (
    <Container>
      <Form onSubmit={submit} autoSubmit>
        <div className={'flex max-md:flex-col items-start gap-7'}>
          <div
            className={'flex flex-col gap-5 max-md:gap-2 w-3/4 max-md:w-full'}>
            {questionsJSX}
          </div>
          <div
            className={'sticky max-md:fixed w-1/4 max-md:w-full top-8 max-md:top-auto max-md:bottom-0 max-md:left-0 flex flex-col max-md:flex-col-reverse'}>
            <ProgressExam current={progress.current} total={progress.total} />
            {progress.finish &&
              <Button
                className={'w-full 2xl:animate-pulse mt-3 max-md:mb-0.5 max-md:bg-second-prime'}
                title={loaded ? 'Отправка...' : 'Отправить'}
                type={'button'}
                disabled={loaded}
                onClick={sendQuestion}
              />
            }
          </div>
        </div>
      </Form>
      <Modal
        show={resultPoints.show}
        title={'Вы сдали тест, поздравляем!'}
        onClose={closeModal}
      >
        <p>Количество набранных баллов: {resultPoints.points}</p>
        <p>Подробную статистику о тесте Вы можете посмотреть в{' '}
          <NextLink href={'/account'}>
            личном кабинете
          </NextLink>
        </p>
      </Modal>
    </Container>
  )
}
