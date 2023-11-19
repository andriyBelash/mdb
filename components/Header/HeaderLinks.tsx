'use client'
import React from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

const HeaderLinks = ({message}: {message: any}) => {

  const pathname = usePathname()
  const segments = pathname.split('/')

  return (
    <nav className='links'>
      <Link className={segments[2] === 'movies' ? 'active' : ''} href="#">{message.movies}</Link>
      <Link className={segments[2] === 'tv-show' ? 'active' : ''} href="#">{message.tv_show}</Link>
      <Link className={segments[2] === 'person' ? 'active' : ''} href="#">{message.person}</Link>
      <Link className={segments[2] === 'popular' ? 'active' : ''} href="/popular/all">{message.in_trend}</Link>
    </nav>
  )
}

export default HeaderLinks