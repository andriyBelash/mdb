'use client'
import { BsArrowUpCircleFill } from "react-icons/bs";
import React, { useEffect } from 'react'

import useEventListener from "@/utils/hook/useEventListener";


const ScrollToTop = () => {
  const [show, setShow] = React.useState<boolean>(false)
  const windowScroll = () => {
    const scrolledThrough = window.scrollY || document.documentElement.scrollTop
    setShow(scrolledThrough > 600)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    useEffect(() => {
      window.addEventListener('scroll', windowScroll)
      return () => {
        window.removeEventListener('scroll', windowScroll)
      }
    })

  return show ?  <button onClick={scrollToTop} className='fixed bottom-6 right-9'><BsArrowUpCircleFill size={40} color='rgb(123 110 246)'/></button> : null
}

export default ScrollToTop