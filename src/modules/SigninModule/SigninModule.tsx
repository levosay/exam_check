import { FunctionComponent } from 'react'
import { ISigninModuleProps } from './SigninModule.d'
import { Form, Container } from 'components'
import { schema } from './schema'
import { IHookFormValues } from 'types/forms'
import { useAuthUser } from 'hooks'

export const SigninModule: FunctionComponent<ISigninModuleProps> = (): JSX.Element => {
  const { signinWithCookies } = useAuthUser()

  const submit = (data: IHookFormValues) => {
    signinWithCookies(data)
  }

  return (
    <Container>
      <div className="max-w-sm mt-20 mx-auto">
        <Form onSubmit={submit} schema={schema}>
          <Form.Input
            hookFormProps={{
              inputFormName: 'username'
            }}
            labelMessage={'say my name'}
            placeholder={'your name'}
          />
          <Form.Input
            hookFormProps={{
              inputFormName: 'password'
            }}
            labelMessage={'say my password'}
            placeholder={'your password'}
          />
          <button>send</button>
        </Form>
      </div>
    </Container>

  )
}
