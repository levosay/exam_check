import { FunctionComponent, useState } from 'react'
import { ITestCreateModuleProps } from './TestCreateModule.d'
import { Button, Container, Form, Modal } from 'components'
import { QuestionsPreview } from '@/src/modules/TestCreateModule/components'
import { IHookFormValues } from '@/src/types/forms'

export interface QuestionText {
  type: string
  test: number
  position: number
  question: string
  answers: unknown[],
  key: string
}

export type QuestionItem = Omit<QuestionText, 'test' | 'type'>

const themeOptions = [
  {
    value: '1',
    label: '1111',
  },
  {
    value: '2',
    label: '2222',
  },
]

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
  const [questions, setQuestions] = useState<QuestionText>(defaultQuestionsState)
  const [open, setOpen] = useState(false)
  const [themeNumber, setThemeNumber] = useState<Pick<QuestionText, 'test'>>({
    test: 0,
  })


  const getFormQuestion = () => {
    return (
      <Form onSubmit={addQuestion}>
        <Form.Input
          hookFormProps={{
            inputFormName: 'text_title_',
          }}
          labelMessage={'Вопрос'}
          placeholder={'Введите текст вопроса'}
        />
        <Form.Input
          hookFormProps={{
            inputFormName: 'text_answer_',
          }}
          labelMessage={'Ответ'}
          placeholder={'Введите текст вопроса'}
        />
        <Button title={'Сохранить'} />

      </Form>
    )
  }

  const addQuestion = (question) => {
  }

  const toggleModal = () => {
    setOpen(!open)
  }

  const onSelectTheme = (data: IHookFormValues) => {
    setThemeNumber({
      test: +data.select_theme_ as number,
    })
  }

  return (
    <Container>
      <div className={'flex flex-col'}>
        <Form onSubmit={onSelectTheme} autoSubmit>
          <Form.Select
            hookFormProps={{
              inputFormName: 'select_theme_',
            }}
            options={themeOptions}
            placeholder={'Выберите тему'}
          />
        </Form>

        <Button
          title={'Добавить вопрос'}
          onClick={toggleModal}
          className={'h-4 min-w-100 ml-auto'}
        />

        <QuestionsPreview list={questions} />
      </div>
    </Container>
  )
}
