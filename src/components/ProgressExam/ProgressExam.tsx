import { FunctionComponent } from 'react'
import { IProgressExamProps } from './ProgressExam.d'
import { Timer } from './components'

export const ProgressExam: FunctionComponent<
  IProgressExamProps
> = ({ current, total }): JSX.Element => {
  const percent = Math.floor(current * 100 / total)

  return (
    <div className={'flex flex-col gap-5'}>
      <div className={'flex justify-around'}>
        <span>{current} / {total}</span>
        <Timer />
      </div>
      <div className={'w-full bg-gray rounded-full overflow-hidden'}>
        <div
          className={'bg-prim text-xs font-medium text-white text-center p-0.5 leading-none rounded-full'}
          style={{ width: `${percent}%` }}
        >
          {percent}
        </div>
      </div>
    </div>
  )
}
