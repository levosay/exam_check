import { FunctionComponent } from 'react'
import { ISignupModuleProps } from './SignupModule.d'
import { Form, Container } from 'components'
import { schema } from './schema'
import { IHookFormValues } from 'types/forms'
import { useAuthUser } from 'hooks'

export const SignupModule: FunctionComponent<ISignupModuleProps> = (): JSX.Element => {
  const { signupWithRoute } = useAuthUser()

  const submit = (data: IHookFormValues) => {
    signupWithRoute(data)
  }

  return (
    <Container>
      <div className="max-w-sm mt-20 mx-auto">
        <Form onSubmit={submit} schema={schema}>
          <Form.Input
            hookFormProps={{
              inputFormName: 'username'
            }}
            labelMessage={'Придумайте логин'}
            placeholder={'login'}
          />
          <Form.Input
            hookFormProps={{
              inputFormName: 'password'
            }}
            labelMessage={'Придумайте пароль'}
            placeholder={'password'}
          />
          <Form.Input
            hookFormProps={{
              inputFormName: 'passwordRepeat'
            }}
            labelMessage={'Повторите пароль'}
            placeholder={'password'}
          />
          <button>send</button>
        </Form>
      </div>
    </Container>

  )
}
