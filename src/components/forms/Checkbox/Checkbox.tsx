import { FunctionComponent } from 'react'
import { ICheckboxProps } from './Checkbox.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from 'types/forms/hook-form'
import clsx from 'clsx'

export const Checkbox: FunctionComponent<ICheckboxProps> = ({
  hookFormProps,
  disabled,
  labelMessage,
  value,
  ...props
}): JSX.Element => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors }
  } = useFormContext<IHookFormValues>()
  const fieldIsError = !!errors[hookFormProps.inputFormName]

  const onHandler = () => {
    const currentValue = getValues(hookFormProps.inputFormName)
    if (!currentValue) setValue(hookFormProps.inputFormName, value as string)
    if (!!currentValue) setValue(hookFormProps.inputFormName, false)
  }

  return (
    <div
      className={'flex justify-between items-center w-full'}>
      {labelMessage &&
        <label
          className={clsx('mr-2 text-prim cursor-pointer hover:text-prim-light anim', {
            'text-second-prime-light hover:text-second-prime': getValues(hookFormProps.inputFormName)
          })}
          htmlFor={hookFormProps.inputFormName}
          onClick={onHandler}
        >
          {labelMessage}
        </label>
      }
      <input
        className={clsx('input-checkbox-default', {
          'input-error': fieldIsError,
        })}
        type={'checkbox'}
        disabled={disabled}
        {...register(hookFormProps.inputFormName)}
        {...props}
        value={value}
      />
    </div>
  )
}
