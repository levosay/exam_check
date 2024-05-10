import { FunctionComponent } from 'react'
import { IFormQuestionsProps } from './FormQuestions.d'
import { Button, Form } from '@/src/components'

export const FormQuestions: FunctionComponent<
  IFormQuestionsProps
> = ({ position, addQuestion }): JSX.Element => {

  const onSubmit = (data) => {
    addQuestion({
      ...data,
    })
  }

  return (
    <Form onSubmit={}>
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
