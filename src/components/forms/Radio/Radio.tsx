import { FunctionComponent } from 'react'
import { IRadioProps } from './Radio.d'
import { useFormContext } from 'react-hook-form'
import { IHookFormValues } from '@/src/types/forms'
import clsx from 'clsx'

export const Radio: FunctionComponent<
  IRadioProps
> = ({
  hookFormProps,
  labelMessage,
  value,
  ...props
}): JSX.Element => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<IHookFormValues>()
  const fieldIsError = !!errors[hookFormProps.inputFormName]

  const onHandler = () => {
    const currentValue = getValues(hookFormProps.inputFormName)
    if (currentValue === value) {
      setValue(hookFormProps.inputFormName, null)
    } else {
      setValue(hookFormProps.inputFormName, value as string)
    }
  }

  return (
    <div className={'flex justify-between items-center w-full'}>
      {labelMessage &&
        <label
          className={clsx('mr-2 text-prim cursor-pointer hover:text-prim-light anim', {
            'text-second-prime-light hover:text-second-prime': getValues(hookFormProps.inputFormName) === value,
          })}
          htmlFor={hookFormProps.inputFormName}
          onClick={onHandler}
        >
          {labelMessage}
        </label>
      }
      <input
        className={clsx('input-radio-default', {
          'input-error': fieldIsError,
        })}
        type={'radio'}
        {...register(hookFormProps.inputFormName)}
        {...props}
        id={`radio_${value}`}
        value={value}
      />
    </div>
  )
}
