import { FunctionComponent } from 'react'
import { ISigninModuleProps } from './SigninModule.d'
import { Form, Container, Button } from 'components'
import { schema } from './schema'
import { IHookFormValues } from 'types/forms'
import { useAuthUser } from 'hooks'

export const SigninModule: FunctionComponent<ISigninModuleProps> = (): JSX.Element => {
  const { signinWithCookies, mesReq } = useAuthUser()

  const submit = (data: IHookFormValues) => {
    signinWithCookies(data)
  }

  return (
    <Container>
      <div className="max-w-sm mt-32 mx-auto">
        <h1 className="mx-auto max-w-max mb-1 text-3xl">Авторизация</h1>
        {mesReq.error &&
          <p
            className="w-full mb-1 text-center border-b text-second-prime-light"
          >
            {mesReq.error}
          </p>}
        <Form onSubmit={submit} schema={schema}>
          <Form.Input
            hookFormProps={{
              inputFormName: 'username'
            }}
            labelMessage={'Логин'}
            placeholder={'your login'}
          />
          <Form.Input
            hookFormProps={{
              inputFormName: 'password'
            }}
            labelMessage={'Пароль'}
            placeholder={'your password'}
          />
          <Button title={'Войти'} className="mt-2 ml-auto" />
        </Form>
      </div>
    </Container>

  )
}
