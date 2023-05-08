import { FunctionComponent, PropsWithChildren } from 'react'
import { IModalProps } from './Modal.d'
import { default as ReactModal } from 'react-modal'
import { Icon } from '@/src/components'
import { useScrollBlock } from '@/src/hooks'

const customStyles = {
  content: {
    borderRadius: '20px',
    padding: '24px',
    margin: '16px',
    overflow: 'hidden',
    background: '#CBD5E1',
    border: 'none',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0f172a',
    zIndex: '45',
  },
}

export const Modal: FunctionComponent<PropsWithChildren<IModalProps>>
  = ({ show, title, onClose, children }): JSX.Element => {
  useScrollBlock(show)

  return (
    <ReactModal
      isOpen={show}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={onClose}
    >
      <div className={'relative'}>
        <div className={'flex items-center justify-between mb-4'}>
          <h2 className={'text-main-dark'}>{title}</h2>
          <div
            className={'text-main-dark cursor-pointer hover:text-prim anim'}
            onClick={onClose}
          >
            <Icon id={'cross'} />
          </div>
        </div>
        <div className={'text-main-dark'}>{children}</div>
      </div>
    </ReactModal>
  )
}
