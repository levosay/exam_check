import { FunctionComponent, useState } from 'react'
import { TReviewBlockProps } from './ReviewBlock.d'
import { ReviewItem } from './components'
import { Icon } from 'components'
import clsx from 'clsx'

export const ReviewBlock: FunctionComponent<
  TReviewBlockProps
> = ({ review, points, date, topic }): JSX.Element => {
  const [open, setOpen] = useState(false)

  const examsJSX = review.map((item) => (
    <ReviewItem key={item._id} {...item} />
  ))

  return (
    <div
      className={'flex flex-col bg-gray p-4 max-md:p-2 text-main-dark rounded-2xl shadow-lg hover:shadow-second-prime-light anim relative'}
    >
      <div className={'pr-3'}>
        {topic && <h3 className={'text-main-dark'}>Тема: {topic?.title}</h3>}
        <p>Количество баллов: <span
          className={clsx({
            'text-second-prime': points < 40,
            'text-prim': points >= 40,
          })}>{points}</span></p>
        <p>Дата сдачи: {date}</p>
      </div>
      {open && (
        <div
          className={'flex flex-col gap-2 max-md:gap-1 pt-2 max-md:pt-1 mt-1 border-t-2'}>
          {examsJSX}
        </div>
      )}
      <div
        className={'absolute right-10 max-md:right-3 top-14 max-md:top-5 -translate-y-1/2 max-md:-translate-y-2 cursor-pointer hover:text-prim anim'}
        onClick={() => setOpen(!open)}
      >
        <Icon id={open ? 'chevron-up' : 'chevron-down'} />
      </div>
    </div>
  )
}
