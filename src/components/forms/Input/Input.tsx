import { FunctionComponent } from 'react'
import { IInputProps } from './Input.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from 'types/forms/hook-form'
import { ErrorField } from '@/src/components/forms/ErrorField'
import clsx from 'clsx'
import {
  defaultClass,
  errorClass,
  inputClass
} from './classes'

export const Input: FunctionComponent<IInputProps> = ({
  hookFormProps,
  labelMessage,
  ...props
}): JSX.Element => {
  const { register, formState: { errors } } = useFormContext<IHookFormValues>()
  const fieldIsError = !!errors[hookFormProps.inputFormName]

  return (
    <div className="flex flex-col">
      {labelMessage &&
        <label
          className="mb-1 text-prim"
          htmlFor={hookFormProps.inputFormName}
        >
          {labelMessage}
        </label>
      }
      <ErrorField inputFormName={hookFormProps.inputFormName} />
      <input
        className={clsx(inputClass, defaultClass, {
          [errorClass]: fieldIsError,
        })}
        {...register(hookFormProps.inputFormName)}
        {...props}
      />
    </div>
  )
}
