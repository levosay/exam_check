import { FunctionComponent } from 'react'
import { TErrorFieldProps } from './ErrorField.d'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export const ErrorField: FunctionComponent<TErrorFieldProps> = ({
  inputFormName
}): JSX.Element => {
  const { formState: { errors } } = useFormContext()

  return (
    <ErrorMessage
      errors={errors}
      name={inputFormName}
      render={({ message }) => (
        <span
          className="w-full mt-1 text-center border-b text-second-prime-light"
        >
          {message}
        </span>
      )}
    />
  )
}
