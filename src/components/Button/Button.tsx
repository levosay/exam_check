import { FunctionComponent } from 'react'
import { IButtonProps } from './Button.d'

export const Button: FunctionComponent<IButtonProps> = ({
  title,
  className,
  ...props
}): JSX.Element => {
  return (
    <button
      className={className}
      {...props}
    >
      {title}
    </button>
  )
}
