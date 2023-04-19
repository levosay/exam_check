import { FunctionComponent } from 'react'
import { IProgressExamProps } from './ProgressExam.d'

export const ProgressExam: FunctionComponent<
  IProgressExamProps
> = ({ current, total }): JSX.Element => {
  return (
    <div className={'w-2/4 flex flex-col gap-5'}>
      <span>3 / 30</span>

      <div className={'w-full bg-gray rounded-full'}>
        <div
          className={'bg-prim text-xs font-medium text-white text-center p-0.5 leading-none rounded-full'}
          style={{ width: '45%' }}> 45%
        </div>
      </div>
    </div>
  )
}
