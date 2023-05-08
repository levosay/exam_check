import { FunctionComponent, PropsWithChildren } from 'react'
import { INextLinkProps } from './NextLink.d'
import Link from 'next/link'

export const NextLink: FunctionComponent<PropsWithChildren<INextLinkProps>
> = ({ children, href }): JSX.Element => {
  return (
    <Link href={href} className={'anim border-b hover:text-prim-light'}>
      {children}
    </Link>
  )
}
