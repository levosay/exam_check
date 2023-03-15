import { FunctionComponent, PropsWithChildren } from 'react'
import { IFormProps, FormExtensions } from './Form.d'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { ErrorField } from '../ErrorField'


export const Form: FunctionComponent<PropsWithChildren<IFormProps>>
  & FormExtensions = ({ children, onSubmit }): JSX.Element => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={'flex flex-col gap-2'}
      >
        {children}
      </form>
    </FormProvider>
  )
}

Form.Input = Input
Form.Checkbox = Checkbox
Form.Radio = Radio
Form.ErrorField = ErrorField
