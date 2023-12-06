'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import '@/styles/components/modal.scss'

type ModalType = {
  children:  React.ReactNode,
  open: boolean,
  className?: string,
  size?: string,
  closeModal: () => void
}

const Modal = ({ children, open, closeModal, className, size }: ModalType) => {

  const calculateSize = (): string => {
    switch (size) {
      case 'sm':
        return '400px';
      case 'md':
        return '700px'
      case 'lg':
        return "1000px"
      default:
        return '580px'
    }
  }

  const modal = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   document.body.style.overflow = open ? "hidden" : 'visible'
  // }, [open])

  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (open && modal.current && !modal.current.contains(e.target as Node)) {
      closeModal()
    }
  }

  return (
    <div  onClick={e => close(e)} className={`overlay ${open ? 'open' : ''}`}>
      <div ref={modal} style={{maxWidth: calculateSize()}} className={`${className ? className : ''} modal`}>
        <button onClick={closeModal} className='modal-close'>
          <Image
            alt="close"
            width={9}
            height={9}
            src='/close.svg'
          />
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal