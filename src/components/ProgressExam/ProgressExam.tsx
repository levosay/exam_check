import { FunctionComponent } from 'react'
import { IProgressExamProps } from './ProgressExam.d'
import { Timer } from './components'

export const ProgressExam: FunctionComponent<
  IProgressExamProps
> = ({ current, total }): JSX.Element => {
  return (
    <div className={'sticky top-8 w-1/4 flex flex-col gap-5'}>
      <div className={'flex justify-around'}>
        <span className={''}>3 / 30</span>
        <Timer />
      </div>
      <div className={'w-full bg-gray rounded-full'}>
        <div
          className={'bg-prim text-xs font-medium text-white text-center p-0.5 leading-none rounded-full'}
          style={{ width: '45%' }}> 45%
        </div>
      </div>
    </div>
  )
}
