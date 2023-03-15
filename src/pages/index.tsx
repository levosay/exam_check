import { NextPage } from 'next'
import { Form } from 'components'
import { IHookFormValues } from 'types/forms/hook-form'

import * as Yup from 'yup'

const schema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Логин не может быть менее 3 символов')
    .max(12, 'Логин не может быть длиннее 12 символов')
    .required('Поле обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Пароль может быть менее 6 символов')
    .required('Поле обязательно для заполнения')
})


const Home: NextPage = () => {
  const submit = (data: IHookFormValues) => {
    // console.log('data_+_++___ ', data)
  }
  return (
    <div className="max-w-3xl">
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
  )
}

export default Home
