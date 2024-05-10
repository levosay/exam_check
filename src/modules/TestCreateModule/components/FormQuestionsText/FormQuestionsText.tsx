import { FunctionComponent } from 'react'
import { IFormQuestionsTextProps } from './FormQuestionsText.d'
import { Button, Form } from '@/src/components'
import { IHookFormValues } from '@/src/types/forms'

export const FormQuestionsText: FunctionComponent<
  IFormQuestionsTextProps
> = ({ position, addQuestion }): JSX.Element => {

  const onSubmit = (data: IHookFormValues) => {
    addQuestion({
      ...data,
    })
  }

  return (
    <Form onSubmit={onSubmit}>
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
