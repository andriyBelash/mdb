'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import '@/styles/components/modal.scss'

type ModalType = {
  children:  React.ReactNode,
  open: boolean,
  closeModal: () => void
}

const Modal = ({ children, open, closeModal }: ModalType) => {

  const modal = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : 'visible'
  }, [open])

  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (open && modal.current && !modal.current.contains(e.target as Node)) {
      closeModal()
    }
  }

  return (
    <div  onClick={e => close(e)} className={`overlay ${open ? 'open' : ''}`}>
      <div ref={modal} className='modal'>
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