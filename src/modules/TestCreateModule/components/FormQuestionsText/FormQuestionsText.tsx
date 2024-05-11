import { FunctionComponent, useEffect, useState } from 'react'
import { IFormQuestionsTextProps } from './FormQuestionsText.d'
import { Button, Form } from '@/src/components'
import { IHookFormValues } from '@/src/types/forms'
import {
  schema,
} from '@/src/modules/TestCreateModule/components/FormQuestionsText/schema'

export const FormQuestionsText: FunctionComponent<
  IFormQuestionsTextProps
> = ({ position, test, handlerEditable, onSave }): JSX.Element => {
  const [isEditable, setIsEditable] = useState(true)

  const onEditHandler = () => {
    setIsEditable(true)
  }

  const onSubmit = (data: IHookFormValues) => {
    setIsEditable(false)
    onSave({
      key: data?.answer ?? '',
      position,
      question: data?.title ?? '',
      answers: [],
      test,
      type: 'text',
    })
  }

  useEffect(() => {
    handlerEditable({
      position,
      flag: isEditable,
    })
  }, [isEditable])

  return (
    <div
      className={'flex flex-col gap-1 [&:not(:last-child)]:border-b-2 border-gray pb-4 mb-2'}>
      <Form onSubmit={onSubmit} schema={schema}>
        <Form.Input
          disabled={!isEditable}
          hookFormProps={{
            inputFormName: 'title',
          }}
          labelMessage={'Вопрос'}
          placeholder={'Введите текст вопроса'}
        />
        <Form.Input
          disabled={!isEditable}
          hookFormProps={{
            inputFormName: 'answer',
          }}
          labelMessage={'Ответ'}
          placeholder={'Введите правильный ответ'}
        />
        <div className={'flex gap-2 items-center'}>
          {isEditable ? (
            <Button
              key={`save-btn_${position}`}
              title={'Сохранить'}
              className={'h-4 min-w-100 ml-auto text-second-prime'}
            />
          ) : (
            <Button
              type={'button'}
              key={`edit-btn_${position}`}
              title={'Редактировать'}
              className={'h-4 min-w-100 ml-auto text-prim'}
              onClick={onEditHandler}
            />
          )}
        </div>
      </Form>
    </div>
  )
}
