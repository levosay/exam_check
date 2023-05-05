import { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { FormExtensions, IFormProps } from './Form.d'
import { FormProvider, useForm, UseFormWatch } from 'react-hook-form'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { ErrorField } from '../ErrorField'
import { yupResolver } from '@hookform/resolvers/yup'
import { IHookFormValues } from 'types/forms'

export const Form: FunctionComponent<PropsWithChildren<IFormProps>>
  & FormExtensions = ({
  children,
  onSubmit,
  schema,
  autoSubmit
}): JSX.Element => {
  const methods = useForm<IHookFormValues>({
    resolver: schema && yupResolver(schema)
  })

  useEffect(() => {
    if (autoSubmit) {
      const handleSignup = methods.handleSubmit(onSubmit) as UseFormWatch<IHookFormValues>
      const subscription = methods.watch(handleSignup)
      return () => subscription.unsubscribe()
    }
  }, [methods.handleSubmit, methods.watch])

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
