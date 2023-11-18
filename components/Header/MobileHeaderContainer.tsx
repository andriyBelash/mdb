'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link  from 'next/link'

import { Suspense }   from 'react'

import LocaleSwitcher from './LocaleSwitcher'
import HeaderLinks    from './HeaderLinks'
import UserBlock      from './UserBlock'

import type { IProfile } from '@/types/profile'

type PropsType = {
  message: any,
  user: IProfile | undefined
}

const MobileHeaderContainer = ({ message, user } : PropsType) => {
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
          <Suspense fallback={<p>Loading feed...</p>}>
            <UserBlock user={user} message={message}/>
          </Suspense>
          <LocaleSwitcher/>
        </div>
      </>
  )
}

export default MobileHeaderContainer