import { FunctionComponent } from 'react'
import { TQuestionsRadioProps } from './QuestionsRadio.d'
import { Form } from 'components'

export const QuestionsRadio: FunctionComponent<
  TQuestionsRadioProps
> = ({
  _id,
  question,
  answers,
}): JSX.Element => {
  const answersJSX = answers.map((item) => (
    <Form.Radio
      key={_id + item}
      value={item}
      labelMessage={item}
      hookFormProps={{
        inputFormName: `radio_${_id}_`,
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
