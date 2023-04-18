import { FunctionComponent } from 'react'
import { TQuestionsChooseProps } from './QuestionsChoose.d'
import { Form } from 'components'

export const QuestionsChoose: FunctionComponent<
  TQuestionsChooseProps
> = ({
  question,
  answers
}): JSX.Element => {
  const answersJSX = answers.map(({ id, title }) => (
    <Form.Checkbox
      key={id}
      labelMessage={title}
      hookFormProps={{
        inputFormName: `question_${id}`
      }}
    />
  ))

  return (
    <div className={'w-3/6'}>
      <h3 className={'text-2xl mb-2'}>{question}</h3>
      <div className={'flex flex-col gap-1'}>{answersJSX}</div>
    </div>
  )
}
