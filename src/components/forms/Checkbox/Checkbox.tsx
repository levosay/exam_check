import { FunctionComponent, useState } from 'react'
import { ICheckboxProps } from './Checkbox.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from 'types/forms/hook-form'
import clsx from 'clsx'

export const Checkbox: FunctionComponent<ICheckboxProps> = ({
  hookFormProps,
  disabled,
  labelMessage,
  onChange,
  setProgress,
  ...props
}): JSX.Element => {
  const {
    register,
    getValues,
    formState: { errors }
  } = useFormContext<IHookFormValues>()
  const fieldIsError = !!errors[hookFormProps.inputFormName]
  const [state, setState] = useState(getValues(hookFormProps.inputFormName))

  return (
    <div
      className={'flex justify-between items-center w-full'}>
      {labelMessage &&
        <label
          className={clsx('mr-2 text-prim', {
            'text-second-prime-light': state
          })}
          htmlFor={hookFormProps.inputFormName}
        >
          {labelMessage}
        </label>
      }
      <input
        className={clsx('input-checkbox-default', {
          'input-error': fieldIsError,
        })}
        onClick={() => setState(prev => !prev)}
        type={'checkbox'}
        disabled={disabled}
        {...register(hookFormProps.inputFormName)}
        {...props}
        onChange={(event) => {
          if (onChange) {
            if (setProgress) setProgress(hookFormProps.inputFormName)
            return onChange(event)
          }
        }}
      />
    </div>
  )
}
