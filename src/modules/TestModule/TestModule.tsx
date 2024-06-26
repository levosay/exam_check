import { FunctionComponent, useMemo, useState } from 'react'
import { TestModuleProps, TimeState } from './TestModule.d'
import { QuestionTypes } from 'api/models/questions'
import {
  Button,
  Container,
  Form,
  Modal,
  NextLink,
  ProgressExam,
  QuestionsCheckbox,
  QuestionsRadio,
  QuestionsSequence,
  QuestionsText,
} from 'components'
import { IHookFormValues } from 'types/forms'
import { getProgress, IQuestionData, prepareQuestionsData } from 'utils/helpers'
import { postAnswers } from 'api/endpoints'
import { useBlackRout } from 'hooks'

const initResultPoints = {
  show: false,
  points: 0,
}

export const TestModule: FunctionComponent<
  TestModuleProps
> = ({ questions, topic }): JSX.Element => {
  const { toHomePath } = useBlackRout()
  const [questionData, setQuestionData] = useState<IQuestionData>({})
  const [resultPoints, setResultPoints] = useState(initResultPoints)
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState({
    current: 0,
    total: questions.length,
    finish: false,
  })
  const [time, setTime] = useState<TimeState>({
    hours: 0,
    min: 0,
    sec: 0,
  })

  const questionsJSX = useMemo(() => (
    questions.map((item) => {
      switch (item.type) {
        case QuestionTypes.radio:
          return <QuestionsRadio key={item._id} {...item} />
        case QuestionTypes.checkbox:
          return <QuestionsCheckbox key={item._id} {...item} />
        case QuestionTypes.text:
          return <QuestionsText key={item._id} {...item} />
        case QuestionTypes.sequence:
          return <QuestionsSequence key={item._id} {...item} />
      }
    })
  ), [questions])

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
    postAnswers({
      topicId: `${topic.test}`,
      questionData,
      time: `${time.hours}ч:${time.min}м:${time.sec}с`,
    })
      .then(data => {
        setResultPoints({
          show: true,
          points: data,
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
      <div className={'flex flex-col items-center border-b mb-2 pb-1'}>
        <h1 className={'uppercase text-second-prime'}>{topic.title}</h1>
        <p className={'mt-1'}>{topic.description}</p>
      </div>
      <Form onSubmit={submit} autoSubmit>
        <div className={'flex max-md:flex-col items-start gap-7'}>
          <div
            className={'flex flex-col gap-5 max-md:gap-2 w-3/4 max-md:w-full'}>
            {questionsJSX}
          </div>
          <div
            className={'sticky max-md:fixed w-1/4 max-md:w-full top-8 max-md:top-auto max-md:bottom-0 max-md:left-0 flex flex-col max-md:flex-col-reverse'}>
            <ProgressExam
              timeState={time}
              setTimeState={setTime}
              current={progress.current}
              total={progress.total}
            />
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
