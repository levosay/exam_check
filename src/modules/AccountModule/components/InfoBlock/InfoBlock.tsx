import { FunctionComponent } from 'react'
import { IInfoBlockProps } from './InfoBlock.d'

export const InfoBlock: FunctionComponent<
  IInfoBlockProps
> = ({ filedName, filedValue }): JSX.Element => {
  if (!filedValue) return <></>
  
  return (
    <div className={'flex'}>
      <span className={''}>{filedName}</span>:
      <span className={'ml-1 text-second-prime'}>{filedValue}</span>
    </div>
  )
}
