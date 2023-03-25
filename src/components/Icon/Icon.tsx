import { FunctionComponent } from 'react'
import { IIconProps } from './Icon.d'
import clsx from 'clsx'

export const Icon: FunctionComponent<IIconProps> = ({
  id,
  width = 'w-3',
  height = 'h-3',
  // color = 'white'
}): JSX.Element => {
  return (
    <svg className={clsx(width, height)}>
      <use xlinkHref={`/images/symbol/svg/sprite.css.svg#${id}`} />
    </svg>
  )
}
