import { FunctionComponent } from 'react'
import { ISelectProps } from './Select.d'
import { useFormContext, Controller } from 'react-hook-form'
import { IHookFormValues, SelectOption } from '@/src/types/forms'
import ReactSelect from 'react-select'
import clsx from 'clsx'

export const Select: FunctionComponent<
  ISelectProps
> = ({
  selectedOption,
  options,
  hookFormProps,
  labelMessage,
  placeholder,
}): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IHookFormValues>()
  const fieldIsError = !!errors[hookFormProps.inputFormName]

  return (
    <div className={'flex justify-between items-center w-full'}>
      {labelMessage &&
        <label
          className={clsx('mr-2 text-prim cursor-pointer hover:text-prim-light anim')}
          htmlFor={hookFormProps.inputFormName}
        >
          {labelMessage}
        </label>
      }
      <Controller
        name={hookFormProps.inputFormName}
        control={control}
        defaultValue={selectedOption?.value ?? ''}
        render={({ field: { ref, value, onChange } }) => (
          <ReactSelect
            placeholder={<p
              className={'text-second-prime'}>{placeholder ?? 'Выбрать'}</p>}
            className={clsx('select-default w-300', {
              'select-error': fieldIsError,
            })}
            ref={ref}
            options={options}
            onChange={(opt) => {
              const options = opt as SelectOption
              return onChange(options.value)
            }}
            isSearchable={false}
            value={options?.find((opt) => opt.value === value)}
          />
        )}
      />

    </div>
  )
}
