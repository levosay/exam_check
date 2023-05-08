import { FunctionComponent } from 'react'
import { ISignupModuleProps } from './SignupModule.d'
import { Button, Container, Form, NextLink } from 'components'
import { schema } from './schema'
import { useAuthUser } from 'hooks'

export const SignupModule: FunctionComponent<ISignupModuleProps> = (): JSX.Element => {
  const { signupWithRoute, mesReq } = useAuthUser()

  return (
    <Container>
      <div className="max-w-sm mt-32 max-md:mt-24 mx-auto">
        <h1 className="mx-auto max-w-max mb-2 text-3xl">Регистрация</h1>
        {mesReq.error &&
          <p
            className="w-full mb-1 text-center border-b text-second-prime-light"
          >
            {mesReq.error}
          </p>}
        <Form onSubmit={signupWithRoute} schema={schema}>
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
          <Button title={'Отправить'} className="mt-2 ml-auto" />
        </Form>
        <NextLink href="/signin">Авторизоваться</NextLink>
      </div>
    </Container>

  )
}
