import { NextPage } from 'next'
import { Form } from 'components'
import { IHookFormValues } from 'types/forms/hook-form'

const Home: NextPage = () => {
  const submit = (data: IHookFormValues) => {
    console.log('data_+_++___ ', data)
  }
  return (
    <div className={'max-w-3xl'}>
      <Form onSubmit={submit}>
        <Form.Input
          hookFormProps={{
            inputFormName: 'username'
          }}
          labelMessage={'say my name'}
        />

        <Form.Input
          hookFormProps={{
            inputFormName: 'password'
          }}
        />

        <button>send</button>
      </Form>
    </div>
  )
}

export default Home
