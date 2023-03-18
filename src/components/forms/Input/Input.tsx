import { FunctionComponent } from 'react'
import { IInputProps } from './Input.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from 'types/forms'
import { ErrorField } from '../ErrorField'
import clsx from 'clsx'

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
          className="mb-2 text-prim"
          htmlFor={hookFormProps.inputFormName}
        >
          {labelMessage}
        </label>
      }
      <input
        className={clsx('input-default', {
          'input-error': fieldIsError,
        })}
        {...register(hookFormProps.inputFormName)}
        {...props}
      />
      <ErrorField inputFormName={hookFormProps.inputFormName} />
    </div>
  )
}
