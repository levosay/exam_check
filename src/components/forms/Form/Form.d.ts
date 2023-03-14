import { IHookFormValues } from 'types/forms/hook-form'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { ErrorField } from '../ErrorField'

export interface IFormProps {
  onSubmit: (data: IHookFormValues) => void
}

export interface FormExtensions {
  Input: typeof Input
  Checkbox: typeof Checkbox
  Radio: typeof Radio
  ErrorField: typeof ErrorField
}
