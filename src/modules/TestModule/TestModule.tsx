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
import {
  IHookFormValues,
  IQuestionData,
  IQuestionsCheckProps,
  IQuestionsTextProps
} from '@/src/types/forms'

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

  const regQuestionsId = new RegExp(/_[a-z|0-9]*_/)
  const regAnswerId = new RegExp(/_[0-9]$/)
  const regTypeCheck = new RegExp(/^questionCheck/)
  const regTypeText = new RegExp(/^questionText/)

  const getQuestionsId = (string: string) => {
    return string.match(regQuestionsId)?.shift()?.replace(/^_/g, '')
      .replace(/_$/g, '') || ''
  }

  const getAnswerId = (string: string) => {
    return string.match(regAnswerId)?.shift()?.replace(/^_/g, '') || ''
  }

  const getQuestionsType = (string: string) => {
    return string.match(regTypeCheck)
      ?.shift() || string.match(regTypeText)?.shift() || ''
  }

  const matchQuestionsTypeCheck = (string: string) => regTypeCheck.test(string)

  const matchQuestionsTypeText = (string: string) => regTypeText.test(string)

  const createQuestionsCheck = ({ obj, key, value }: IQuestionsCheckProps) => {
    obj[getQuestionsId(key)] = {}
    obj[getQuestionsId(key)].id = getQuestionsId(key)
    obj[getQuestionsId(key)].type = getQuestionsType(key)
    obj[getQuestionsId(key)].answers = [{
      id: getAnswerId(key), value: value
    }]
  }

  const updateQuestionsCheck = ({ obj, key, value }: IQuestionsCheckProps) => {
    obj[getQuestionsId(key)].answers = [...obj[getQuestionsId(key)].answers, {
      id: getAnswerId(key), value: value
    }]
  }

  const createQuestionsText = ({ obj, key, value }: IQuestionsTextProps) => {
    obj[getQuestionsId(key)] = {}
    obj[getQuestionsId(key)].id = getQuestionsId(key)
    obj[getQuestionsId(key)].type = getQuestionsType(key)
    obj[getQuestionsId(key)].answers = [{
      id: getQuestionsId(key),
      value: value
    }]
  }

  const submit = (data: IHookFormValues) => {
    const obj: IQuestionData = {}

    for (const key in data) {
      const validKey = key as keyof IHookFormValues
      if (matchQuestionsTypeCheck(key)) {

        if (obj[getQuestionsId(key)]) {
          updateQuestionsCheck({ obj, key, value: data[validKey] as boolean })
        } else {
          createQuestionsCheck({ obj, key, value: data[validKey] as boolean })
        }
      }

      if (matchQuestionsTypeText(key)) {
        createQuestionsText({ obj, key, value: data[validKey] as string })
      }
    }

    console.log('obj_______ ', obj)
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
