import { FunctionComponent } from 'react'
import { IInputProps } from './Input.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from 'types/forms/hook-form'

export const Input: FunctionComponent<IInputProps> = ({
  hookFormProps,
  labelMessage,
  ...props
}): JSX.Element => {
  const { register } = useFormContext<IHookFormValues>()

  return (
    <div className={'flex flex-col'}>
      {labelMessage &&
        <label
          htmlFor={hookFormProps.inputFormName}
          className={'text-gray mb-1'}
        >
          {labelMessage}
        </label>
      }
      <input
        className={''}
        {...register(hookFormProps.inputFormName)}
        {...props}
      />
    </div>
  )
}
