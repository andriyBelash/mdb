import React from 'react'
import Link from 'next/link'


const HeaderLinks = ({message}: {message: any}) => {
  return (
    <nav className='links'>
      <Link href="#">{message.movies}</Link>
      <Link href="#">{message.tv_show}</Link>
      <Link href="#">{message.person}</Link>
    </nav>
  )
}

export default HeaderLinks