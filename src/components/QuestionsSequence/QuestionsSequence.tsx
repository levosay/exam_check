import { FunctionComponent } from 'react'
import { TQuestionsSequenceProps } from './QuestionsSequence.d'
import { Form } from 'components'

export const QuestionsSequence: FunctionComponent<
  TQuestionsSequenceProps
> = ({ _id, question, answers }): JSX.Element => {
  const answersJSX = answers.map(title => (
    <span key={title} className={'text-prim'}>{title}</span>
  ))

  return (
    <div className={''}>
      <h3 className={'text-2xl mb-2'}>{question}</h3>
      <div className={'flex flex-col gap-1 mb-2'}>{answersJSX}</div>
      <Form.Input
        hookFormProps={{
          inputFormName: `text_${_id}_`
        }}
        placeholder={'Введите ответ'}
      />
    </div>
  )
}
