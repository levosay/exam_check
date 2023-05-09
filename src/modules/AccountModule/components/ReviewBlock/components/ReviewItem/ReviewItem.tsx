import { FunctionComponent, useState } from 'react'
import { TReviewItemProps } from './ReviewItem.d'
import clsx from 'clsx'
import { Button, Modal } from 'components'

const initHint = {
  show: false,
  title: '',
  text: '',
}

export const ReviewItem: FunctionComponent<
  TReviewItemProps
> = ({ title, passAnswer, userAnswer, pass }): JSX.Element => {
  const [showHint, setShowHint] = useState(initHint)

  const openModal = (title: string, text: string) => {
    setShowHint({
      show: true,
      title,
      text
    })
  }

  const closeModal = () => {
    setShowHint(initHint)
  }

  return (
    <div
      className={clsx('flex max-md:flex-col items-center max-md:items-start gap-2 max-md:gap-1 px-2 py-1 rounded-2xl', {
        'bg-prim-light': pass,
        'bg-second-prime-light': !pass
      })}>
      <span>{title}</span>
      <div className={'flex flex-wrap gap-2 max-md:gap-1 ml-auto max-md:ml-0'}>
        <Button
          title={'Ваш ответ'}
          className={'bg-gray border-0 hover:bg-gray shadow-lg hover:shadow-second-prime-light anim'}
          onClick={() => openModal('Ваш ответ', userAnswer)}
        />
        {!pass &&
          <Button
            title={'Правильный ответ'}
            className={'bg-gray border-0 hover:bg-gray shadow-md hover:shadow-second-prime anim'}
            onClick={() => openModal('Правильный ответ', passAnswer)}
          />
        }
      </div>
      <Modal
        show={showHint.show}
        title={showHint.title}
        onClose={closeModal}
      >
        <p>Вопрос: {title}</p>
        <p>Ответ: {showHint.text}</p>
      </Modal>
    </div>
  )
}
