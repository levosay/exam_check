import { IHookFormValues } from 'types/forms/hook-form'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { ErrorField } from '../ErrorField'

export interface IFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema?: any
  onSubmit: (data: IHookFormValues) => void
  autoSubmit?: boolean
}

export interface FormExtensions {
  Input: typeof Input
  Checkbox: typeof Checkbox
  Radio: typeof Radio
  ErrorField: typeof ErrorField
}
