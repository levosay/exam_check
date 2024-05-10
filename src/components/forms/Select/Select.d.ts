import { IHookFormProps, SelectOption } from '@/src/types/forms'

export interface ISelectProps {
  selectedOption?: SelectOption
  options: SelectOption[]
  hookFormProps: IHookFormProps
  labelMessage?: string
  placeholder?: string
}
