import { FunctionComponent, useState } from 'react'
import { IThemeCreateModuleProps } from './ThemeCreateModule.d'
import { Button, Container, Form, Modal } from 'components'
import { IHookFormValues } from '@/src/types/forms'
import { postQuestionTopic } from '@/src/api/endpoints'
import { themeStore, useAppSelector } from '@/src/store/hooks'
import { useBlackRout } from '@/src/hooks'
import { schema } from '@/src/modules/ThemeCreateModule/schema'


export const ThemeCreateModule: FunctionComponent<
  IThemeCreateModuleProps
> = (): JSX.Element => {
  const { toHomePath } = useBlackRout()
  const { list: themeList } = useAppSelector(themeStore)
  const [modalState, setModalState] = useState({
    message: '',
    title: '',
    description: '',
    show: false,
  })

  const onSubmit = async (data: IHookFormValues) => {
    try {
      postQuestionTopic({
        title: data.title ?? '',
        description: data.description ?? '',
        test: (themeList?.length || 0) + 1000,
      })

      setModalState({
        message: 'Вы успешно создали тему',
        title: data.title ?? '',
        description: data.description ?? '',
        show: true,
      })
    } catch (error) {
      console.log(error)
      setModalState({
        message: 'Не удалось создать тему',
        title: data.title ?? '',
        description: data.description ?? '',
        show: true,
      })
    }
  }

  const closeModal = () => {
    toHomePath()
  }

  return (
    <Container>
      <div className={''}>
        <Form onSubmit={onSubmit} schema={schema}>
          <Form.Input
            hookFormProps={{
              inputFormName: 'title',
            }}
            labelMessage={'Название'}
            placeholder={'Введите название'}
          />
          <Form.Input
            hookFormProps={{
              inputFormName: 'description',
            }}
            labelMessage={'Описание'}
            placeholder={'Введите описание'}
          />

          <Button title={'Создать'} className="mt-2 ml-auto" />
        </Form>
      </div>

      <Modal
        show={modalState.show}
        title={modalState.message}
        onClose={closeModal}
      >
        <p>Название: {modalState.title}</p>
        <p>Описание: {modalState.description}</p>
      </Modal>
    </Container>

  )
}
