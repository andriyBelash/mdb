'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'
import HeaderLinks    from './HeaderLinks'
import UserBlock      from './UserBlock'
const MobileHeaderContainer = ({ message } : { message: any }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
     <div className="mb-header-show">
          <Link href={'/'}>
            <Image
              width={40}
              height={40}
              src='/logo.svg'
              alt='logo'
            />
          </Link>
          <div onClick={() => setOpen(!open)} className={`burger ${open ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`mb-header-hidden ${open ? 'open' : ''}`}>
          <HeaderLinks message={message} />
          <UserBlock message={message} />
          <LocaleSwitcher/>
        </div>
      </>
  )
}

export default MobileHeaderContainer