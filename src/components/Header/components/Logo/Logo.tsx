import { FunctionComponent } from 'react'
import { ILogoProps } from './Logo.d'
import { Icon } from 'components'
import Link from 'next/link'
import clsx from 'clsx'

export const Logo: FunctionComponent<
  ILogoProps
> = ({ user, path, showLogoText }): JSX.Element => {
  return (
    <Link href={user ? '/' : path} className={'flex gap-2'}>
      <Icon
        id={'book-open'}
        color={'prim-light'}
        height={'h-4'}
        width={'w-4'}
      />
      <h2
        className={clsx(`text-2xl text-prim`, {
          'max-md:hidden': showLogoText
        })}
      >
        Exam Check
      </h2>
    </Link>
  )
}
