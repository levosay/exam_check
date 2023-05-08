import { FunctionComponent, useState } from 'react'
import { TReviewItemProps } from './ReviewItem.d'
import clsx from 'clsx'
import { Button, Modal } from 'components'

const initHint = {
  show: false,
  text: '',
}

export const ReviewItem: FunctionComponent<
  TReviewItemProps
> = ({ title, passAnswer, userAnswer, pass }): JSX.Element => {
  const [showHint, setShowHint] = useState(initHint)

  console.log('__+_+_++_ ', { title, passAnswer, userAnswer, pass })

  const openModal = (text: string) => {
    setShowHint({
      show: true,
      text
    })
  }

  const closeModal = () => {
    setShowHint(initHint)
  }

  return (
    <div className={clsx('flex items-center gap-2 px-2 py-1 rounded-2xl', {
      'bg-prim-light': pass,
      'bg-second-prime-light': !pass
    })}>
      <span>{title}</span>
      <div className={'flex gap-2 ml-auto'}>
        <Button
          title={'Ваш ответ'}
          className={'bg-gray border-0 hover:bg-gray shadow-lg hover:shadow-second-prime-light anim'}
          onClick={() => openModal(userAnswer)}
        />
        {!pass &&
          <Button
            title={'Правильный ответ'}
            className={'bg-gray border-0 hover:bg-gray shadow-md hover:shadow-second-prime anim'}
            onClick={() => openModal(passAnswer)}
          />
        }
      </div>

      <Modal
        show={showHint.show}
        title={'Ответ'}
        onClose={closeModal}
      >
        {showHint.text}
      </Modal>
    </div>
  )
}
