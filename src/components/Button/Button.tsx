import { FunctionComponent, PropsWithChildren } from 'react'
import { IButtonProps } from './Button.d'

export const Button: FunctionComponent<PropsWithChildren<IButtonProps>> = ({
  title,
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <button
      className={className}
      {...props}
    >
      {title && title}
      {children && children}
    </button>
  )
}
