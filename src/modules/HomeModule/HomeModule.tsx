import { FunctionComponent } from 'react'
import { IHomeModuleProps } from './HomeModule.d'
import { Form, Button, Container } from 'components'

export const HomeModule: FunctionComponent<IHomeModuleProps> = (): JSX.Element => {
  const submit = (data) => {
    console.log('data ', data)
  }
  return (
    <Container>
      <div className={''}>
        <Form onSubmit={submit}>
          <Form.Checkbox
            labelMessage={'1812'}
            hookFormProps={{
              inputFormName: `question_1`
            }}
          />
          <Form.Checkbox
            labelMessage={'2023'}
            hookFormProps={{
              inputFormName: `question_2`
            }}
          />
          <Form.Checkbox
            labelMessage={'1994'}
            hookFormProps={{
              inputFormName: `question_3`
            }}
          />
          <Button title={'Отправить'} />
        </Form>
      </div>
    </Container>
  )
}
