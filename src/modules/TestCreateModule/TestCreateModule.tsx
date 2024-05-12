import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { ITestCreateModuleProps } from './TestCreateModule.d'
import { Button, Container, Form, Icon } from 'components'
import {
  FormQuestionsText,
} from '@/src/modules/TestCreateModule/components'
import { IHookFormValues } from '@/src/types/forms'
import { themeStore, useAppSelector } from '@/src/store/hooks'
import { postQuestions } from '@/src/api/endpoints'
import { useBlackRout } from '@/src/hooks'

export interface QuestionText {
  type: string
  test: number
  position: number
  question: string
  answers: unknown[],
  key: string
}

export type EditableState = Pick<QuestionText, 'position'> & {
  flag: boolean
}

const defaultQuestionsState: QuestionText = {
  key: '',
  position: 1,
  question: '',
  answers: [],
  test: 0,
  type: '',
}

export const TestCreateModule: FunctionComponent<
  ITestCreateModuleProps
> = (): JSX.Element => {
  const { toCustomRoute } = useBlackRout()
  const [questions, setQuestions] = useState<QuestionText[]>([defaultQuestionsState])
  const [themeNumber, setThemeNumber] = useState<Pick<QuestionText, 'test'>>({
    test: 0,
  })
  const [mainIsEditable, setMainIsEditable] = useState<EditableState[]>([])
  const { list: themeList } = useAppSelector(themeStore)
  const themeOptions = themeList?.map(theme => ({
    label: theme.title,
    value: `${theme.test}`,
  }))

  const submitBtn = useMemo(() => {
    if (themeNumber.test !== 0 && !!questions.length && mainIsEditable.length === 0) {
      return (
        <Button
          className={'h-4 min-w-100 ml-auto disabled:cursor-default disabled:text-second-prime'}
          title={'Создать'}
          onClick={submitQuestions}
        />
      )
    }

    return <></>
  }, [questions, mainIsEditable])

  useEffect(() => {
    setQuestions(prev => prev.map(question => ({
      ...question,
      test: themeNumber.test,
    })))
  }, [themeNumber.test])

  const handlerEditable = (state: EditableState) => {
    if (state.flag) {
      setMainIsEditable(prev => [...prev.filter(item => item.position !== state.position), state])
    } else {
      setMainIsEditable(prev => prev.filter(item => item.position !== state.position))
    }
  }

  const onSelectTheme = (data: IHookFormValues) => {
    setThemeNumber({
      test: +data.select_theme_ as number,
    })
  }

  const addFormQuestion = () => {
    setQuestions(prev => ([...prev, {
      ...defaultQuestionsState,
      ...themeNumber,
      position: questions.length + 1,
    }]))
  }

  const sveQuestion = (question: QuestionText) => {
    const newQuestions = questions.map(stateQuestion => {
      if (stateQuestion.position === question.position) {
        return question
      }
      return stateQuestion
    })

    setQuestions(newQuestions)
  }

  async function submitQuestions() {
    try {
      await postQuestions({
        test: themeNumber.test,
        questions,
      })

      toCustomRoute(`/test/${themeNumber.test}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <div className={'flex flex-col gap-2'}>
        <div className={'flex justify-between items-center'}>
          <Form onSubmit={onSelectTheme} autoSubmit>
            <Form.Select
              hookFormProps={{
                inputFormName: 'select_theme_',
              }}
              options={themeOptions ?? []}
              placeholder={'Выберите тему'}
            />
          </Form>
          {submitBtn}
        </div>
        {themeNumber.test !== 0 && (
          <div className={'flex flex-col gap-2'}>
            {questions.map(question => (
              <FormQuestionsText
                key={question.position}
                position={question.position}
                test={themeNumber.test}
                handlerEditable={handlerEditable}
                onSave={sveQuestion}
              />
            ))}
          </div>
        )}
        {themeNumber.test !== 0 && (
          <Button
            onClick={addFormQuestion}
            className={'mx-auto'}
          >
            <Icon id={'plus'} height={'h-2'} width={'w-3'} />
          </Button>
        )}
      </div>
    </Container>
  )
}
