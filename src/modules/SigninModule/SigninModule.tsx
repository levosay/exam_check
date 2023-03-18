import { FunctionComponent } from 'react'
import { ISigninModuleProps } from './SigninModule.d'
import { Form, Container, Button } from 'components'
import { schema } from './schema'
import { useAuthUser } from 'hooks'
import Link from 'next/link'

export const SigninModule: FunctionComponent<ISigninModuleProps> = (): JSX.Element => {
  const { signinWithCookies, mesReq } = useAuthUser()

  return (
    <Container>
      <div className="max-w-sm mt-32 mx-auto">
        <h1 className="mx-auto max-w-max mb-2 text-3xl">Авторизация</h1>
        {mesReq.error &&
          <p
            className="w-full mb-1 text-center border-b text-second-prime-light"
          >
            {mesReq.error}
          </p>}
        <Form onSubmit={signinWithCookies} schema={schema}>
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
        <Link href="/signup">Регистрация</Link>
      </div>
    </Container>

  )
}
