import { FunctionComponent } from 'react'
import { IInputProps } from './Input.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from 'types/forms/hook-form'
import { ErrorField } from '@/src/components/forms/ErrorField'

export const Input: FunctionComponent<IInputProps> = ({
  hookFormProps,
  labelMessage,
  ...props
}): JSX.Element => {
  const { register } = useFormContext<IHookFormValues>()

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
        className="py-1 px-2 rounded-2xl bg-main-light text-white border
        text-sm shadow-sm placeholder-gray focus:outline-none
        focus:ring-1 focus:ring-prim-light
        invalid:border-second-prime invalid:text-second-prime-light
        focus:invalid:border-second-prime focus:invalid:ring-second-prime"
        {...register(hookFormProps.inputFormName)}
        {...props}
      />
    </div>
  )
}
