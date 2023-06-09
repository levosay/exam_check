import { FunctionComponent } from 'react'
import { TQuestionsTextProps } from './QuestionsText.d'
import { Form } from 'components'

export const QuestionsText: FunctionComponent<
  TQuestionsTextProps
> = ({ _id, question }): JSX.Element => {
  return (
    <div className={'w-full'}>
      <h3 className={'text-2xl mb-2'}>{question}</h3>
      <Form.Input
        hookFormProps={{
          inputFormName: `text_${_id}_`
        }}
        placeholder={'Введите ответ'}
      />
    </div>
  )
}
