import { FunctionComponent, useState } from 'react'
import { ITestCreateModuleProps } from './TestCreateModule.d'
import { Button, Container, Form, Modal } from 'components'
import { QuestionsPreview } from '@/src/modules/TestCreateModule/components'

export const TestCreateModule: FunctionComponent<
  ITestCreateModuleProps
> = (): JSX.Element => {
  const [questions, setQuestions] = useState([])
  const [open, setOpen] = useState(false)

  const addQuestion = (question) => {
    console.log('question ', question)
    setQuestions([...questions, question])
  }

  const removeQuestions = (id) => {

  }

  const toggleModal = () => {
    setOpen(!open)
  }

  const sumbit = (data) => {
    console.log('data ', data)
  }

  return (
    <Container>
      <div className={'flex flex-col'}>
        <QuestionsPreview list={questions} />

        <Button title={'Добавить'} onClick={toggleModal} />

        <Modal
          show={open}
          title={'Добавить вопрос'}
          onClose={toggleModal}
        >
          <Form onSubmit={addQuestion}>
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

        </Modal>
      </div>
    </Container>
  )
}
