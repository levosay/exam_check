import { FunctionComponent } from 'react'
import { TQuestionsCheckboxProps } from './QuestionsCheckbox.d'
import { Form } from 'components'

export const QuestionsCheckbox: FunctionComponent<
  TQuestionsCheckboxProps
> = ({
  _id,
  question,
  answers,
}): JSX.Element => {
  const answersJSX = answers.map((item, index) => (
    <Form.Checkbox
      key={_id + item}
      value={item}
      labelMessage={item}
      hookFormProps={{
        inputFormName: `check_${_id}_${index}`,
      }}
    />
  ))

  return (
    <div className={'w-full'}>
      <h3 className={'text-2xl mb-2'}>{question}</h3>
      <div className={'flex flex-col gap-1'}>{answersJSX}</div>
    </div>
  )
}
