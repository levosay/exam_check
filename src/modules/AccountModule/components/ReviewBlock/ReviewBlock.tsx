import { FunctionComponent, useState } from 'react'
import { TReviewBlockProps } from './ReviewBlock.d'
import { ReviewItem } from './components'
import { Icon } from 'components'

export const ReviewBlock: FunctionComponent<
  TReviewBlockProps
> = ({ review, points, date }): JSX.Element => {
  const [open, setOpen] = useState(false)

  const examsJSX = review.map((item) => (
    <ReviewItem key={item._id} {...item} />
  ))

  return (
    <div
      className={'flex flex-col bg-gray py-4 pl-4 pr-14 max-md:py-2 max-md:pl-2 max-md:pr-5 text-main-dark rounded-2xl shadow-lg hover:shadow-second-prime-light anim relative'}
    >
      <p>Количество баллов: {points}</p>
      <p>Дата сдачи: {date}</p>
      {open && (
        <div className={'flex flex-col gap-2 pt-2 mt-1 border-t-2'}>
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
