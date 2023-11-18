'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import MediaCard from '@/components/MediaCard'

import useDraggable from '@/utils/hook/useDraggable'

type PropType = {
  message: any,
  title: string,
  type: string
}

const CardContent = ({ message, title, type }: PropType) => {
  const {
    sliderRef,
    isDown,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
    cursorStyle,
    progressStyle,
  } = useDraggable();

  return (
    <section className='card-content'>
      <div className='card-content-header'>
        <h2 className="card-content-title">{title}</h2>
        <Link className='card-content-link' href={'#'}>{message.view_more}</Link>
      </div>
      <div
        ref={sliderRef}
        className='card-content-cards'
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{cursor : cursorStyle}}
      >
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
      <div className='grab-progress'>
        <div className='grab-progress-line' style={progressStyle}></div>
      </div>
    </section>
  )
}

export default CardContent
