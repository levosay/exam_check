import { FunctionComponent } from 'react'
import { TQuestionsTextProps } from './QuestionsText.d'
import { Form } from '@/src/components'

export const QuestionsText: FunctionComponent<
  TQuestionsTextProps
> = ({ id, question }): JSX.Element => {
  return (
    <div className={'w-3/6'}>
      <h3 className={'text-2xl mb-2'}>{question}</h3>
      <Form.Input
        hookFormProps={{
          inputFormName: `question_text_${id}`
        }}
        placeholder={'Введите ответ'}
      />
    </div>
  )
}
